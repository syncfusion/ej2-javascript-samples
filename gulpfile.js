var fs = require('fs');
var glob = require('glob');
var cheerio = require('cheerio');
var gulp = require('gulp');
var path = require('path');
var shelljs = global.shelljs || require('shelljs');
var jsoncombine = require('gulp-jsoncombine');
var webpackGulp = require('webpack-stream');
var webpack = require('webpack');
var elasticlunr = require('elasticlunr');
var runSequence = require('run-sequence');
var sampleOrder = JSON.parse(fs.readFileSync(__dirname + '/src/common/sampleOrder.json'));
var config =require(fs.realpathSync('./config.json'));
var curDirectory = '';
var sampleList;

if (fs.existsSync('./controlWiseSample.json')) {
    sampleList = JSON.parse(fs.readFileSync('./controlWiseSample.json'));
}

gulp.task('sample-json', function () {
    if (sampleList && sampleList.length) {
        var controls = getControls();
        var samplejson = glob.sync('./src/**/*sample.json', { silent: true });
        var obj = [];
        for (var i = 0; i < samplejson.length; i++) {
            var samplejsonList = JSON.parse(fs.readFileSync(samplejson[i]));
            var componentIndex = controls.indexOf(samplejsonList.name);
            if (componentIndex != -1) {
                obj.push(samplejsonList.directory);
            }
        }
        fs.writeFileSync('./sampleList.json', JSON.stringify(obj));
    }
})

/**
 * combine sample list
 */
gulp.task('combine-samplelist', function () {
    var apiData = JSON.parse(fs.readFileSync('./src/common/api-table', 'utf8'));
    var apiReference = {};
    if (sampleList && sampleList.length) {
        var controls = getControls();
        sampleOrder = getSampleOrder(controls);
    }
    return gulp.src(config.samplejson)
        .pipe(jsoncombine('samplelist.js', function (data) {
            var result = [];
            var subCategory = [];
            var intId = 0;
            var addUID = function (pid, dt) {
                for (var i = 0; i < dt.length; i++) {
                    dt[i].uid = pid + i;
                    if (dt[i].hasOwnProperty('samples')) {
                        curDirectory = dt[i].directory;
                        subCategory = [];
                        addUID('00' + intId + i, dt[i].samples);
                        intId++;
                    } else {
                        var index = subCategory.indexOf(dt[i].category);
                        if (index !== -1) {
                            dt[i].order = index;
                        } else {
                            subCategory.push(dt[i].category);
                            dt[i].order = subCategory.length - 1;
                        }
                        /**
                         * api-table processing
                         */
                        var apiconfig = dt[i].api || {};
                        var data = [];
                        var canUpdate = false;
                        var ObjectKeys = Object.keys(apiconfig);
                        for (var key of ObjectKeys) {
                            var classProperties = apiData[key];
                            if (!classProperties) {
                                continue;
                            }
                            var propertyCollection = apiconfig[key];
                            for (var prop of propertyCollection) {
                                var propData = classProperties[prop];
                                if (propData) {
                                    canUpdate = true;
                                    data.push(propData);
                                }
                            }
                        }
                        if (canUpdate) {
                            apiReference[curDirectory + '/' + dt[i].url] = data;
                        }
                    }
                }
            }
            var orderKeys = Object.keys(sampleOrder);
            for (var i = 0; i < orderKeys.length; i++) {
                var components = sampleOrder[orderKeys[i]];
                for (var j = 0; j < components.length; j++) {
                    var currentData = getSamples(data, components[j]);
                    currentData['order'] = i;
                    result.push(currentData);
                }
            }
            addUID("0", result);
            generateSearchIndex(result);
            return new Buffer('window.samplesList  =' + JSON.stringify(result) + ';\n\n' + 'window.apiList =' + JSON.stringify(apiReference));
        }))
        .pipe(gulp.dest('./src/common/'));
});

function getSamples(data, component) {
    var dataList = Object.keys(data);
    for (var i = 0; i < dataList.length; i++) {
        var currentData = data[dataList[i]];
        if (component === currentData.name) {
            return currentData;
        }
    }
}

function getControls() {
    var controlList = sampleList;
    var controls = controlList.split(',');
    for (var i = 0; i < controls.length; i++) {
        controls[i] = controls[i].replace(/^\s*/, '').replace(/\s*$/, '');
    }
    return controls;
}

function getSampleOrder(controls) {
    var controlWiseSampleOrder = {};
    var orderKeys = Object.keys(sampleOrder);
    for (var i = 0; i < orderKeys.length; i++) {
        var keys = orderKeys[i];
        //get the controlslist 
        var components = sampleOrder[keys];
        for (j = 0; j < controls.length; j++) {
            // get the index of controls 
            var componentIndex = components.indexOf(controls[j]);
            if (componentIndex != -1) {
                if (!controlWiseSampleOrder[keys]) {
                    controlWiseSampleOrder[keys] = [components[componentIndex]];
                } else {
                    controlWiseSampleOrder[keys].push(components[componentIndex]);
                }
            }
        }
    }
    return controlWiseSampleOrder;
}

/**
 * Bundle all module using webpack
 */
gulp.task('bundle', function () {
    var webpackConfig = require(fs.realpathSync('./webpack.config.js'));
    return gulp.src('')
        .pipe(webpackGulp(webpackConfig, webpack))
        .pipe(gulp.dest('.'));
});

function generateSearchIndex(sampleArray) {
    elasticlunr.clearStopWords();
    var instance = elasticlunr(function () {
        this.addField('component');
        this.addField('name');
        this.setRef('uid');
    });
    for (sampleCollection of sampleArray) {
        var component = sampleCollection.name;
        var directory = sampleCollection.directory;
        var puid = sampleCollection.uid;
        for (sample of sampleCollection.samples) {
            sample.component = component;
            sample.dir = directory;
            sample.parentId = puid;
            instance.addDoc(sample);
        }
    }
    fs.writeFileSync('./src/common/search-index.js', 'window.searchIndex  =' + JSON.stringify(instance.toJSON()));
}

/**
 * Compile SampleBrowser Samples.
 */
gulp.task('build', ['ship-deps'], function (done) {
    if (!fs.existsSync('./styles')) {
        fs.mkdirSync('./styles');
    }
    runSequence('combine-samplelist', 'bundle', 'plnkr-json', done);
});


gulp.task('ship-deps', function (done) {
    gulp.src(['./node_modules/@syncfusion/ej2/*.css', './node_modules/@syncfusion/ej2/dist/*{.js,.p}', './node_modules/fuse.js/dist/fuse.min.js'])
        .pipe(gulp.dest('./dist/'))
        .on('end', function () {
            done();
        });
});

/**
 * Watch ts files of samples
 */
gulp.task('watch-sample', ['build'], function () {
    gulp.watch(config.watchSample, ['build']);
});

//build.tasks['js-hint'].dep = [];

/**
 * lint files of samples
 */
gulp.task('lint', ['js-hint']);

gulp.task('plnkr-json', function () {
    var files = glob.sync('./src/**/*.js', { silent: true, ignore: './src/common/**/*.js' });
    var hDep = '<!DOCTYPE html>\n\n<html>\n<head>\n' +
        '<meta charset="UTF-8">\n' +
        '<link href="{{:CDN_LINK}}material.css" rel="stylesheet">\n' +
        '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />\n' +
        '<script type="text/javascript">\n' +
        '   if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {\n' +
        '       document.write("<script src=\'https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js\'><\\/script>\");\n' +
        '   }\n<\/script>\n' +
        '<script src="{{:PKG_LINK}}dist/ej2.min.js" type="text/javascript"></script>\n' +
        '</head>\n<body>\n';
    var ripple = 'ej.base.enableRipple(true)\n';
    var defRegex = /this.default = function( )*\(\)( )* {/g;
    var impRegex = /import[\w,\{\} *]+'([^ \@]+)';/g;
    var allImpRegex = /import[^;]+;/g;
    var imgRegex = /(<img([\w\W])+src\=\"src)|(imageUrl)|((\'|\")(\.\/|)src\/[^\'\"]+.png(\'|\"))/;
    var srcRegex = /(|\.\/)src\//;
    var bgRegex = /background-image: url\((\'|\"|)(\.\/|)src/g;
    var jsonRegex = /import[\w \*\{\}]+\'[\w\-\/\.]+\.json\'\;/;
    var jsonSrcRegex = /('|")\.\/src[^'"]+('|")/g;
    var link = 'http://cdn.syncfusion.com/ej2/';
    var sbLink ='http://ej2.syncfusion.com/javascript/';
    //link = {{:CDN_LINK}} //Dependency Packages Link
    //sbLink = {{:CDN_LINK}} //Sample Browser support Link
    hDep = hDep.replace(/{{:CDN_LINK}}/g, link).replace(/{{:PKG_LINK}}/g, link);
    var dataSourcePath = {};
    for (var i = 0; i < files.length; i++) {
        var filePath = path.dirname(files[i]);
        var name = path.basename(files[i], '.js');
        var plnkr = {};
        var compname = filePath.replace('./src/', '');
        if (!dataSourcePath[compname]) {
            var sampleJson = JSON.parse(fs.readFileSync(filePath + '/' + 'sample.json', 'utf8'));
            var data = 'nil';
            if (sampleJson.dataSourcePath) {
                data = fs.readFileSync('./' + sampleJson.dataSourcePath, 'utf8');
            }
            dataSourcePath[compname] = data;
        }
        var dataSource = dataSourcePath[compname];
        var baseName = filePath + '/' + name;
        if (fs.existsSync(baseName + '.html')) {
            var eoc = '\n<script src="index.js" type="text/javascript"></script>\n</body>\n</html>';
            if (dataSource !== 'nil') {
                eoc = '\n<script src="datasource.js"  type="text/javascript"></script>\n' + eoc;
                plnkr['datasource.js'] = dataSource;
            }
            var hfile = hDep + fs.readFileSync(baseName + '.html', 'utf8') + eoc;
            var $ = cheerio.load(hfile);
            $('#description').remove();
            $('#action-description').remove();
            hfile = $.html();
            if (imgRegex.test(hfile) || bgRegex.test(hfile)) {
                var hLines = hfile.split('\n');
                for (var y = 0; y < hLines.length; y++) {
                    if (imgRegex.test(hLines[y]) || bgRegex.test(hLines[y])) {
                        hLines[y] = hLines[y].replace(srcRegex, sbLink + 'demos/src/');
                    }
                }
                hfile = hLines.join('\n');
            }
            var jsFile = fs.readFileSync(files[i], 'utf8').replace(defRegex, '');
            var lInd = jsFile.lastIndexOf('};');
            jsFile = jsFile.substring(0, lInd) + jsFile.substring(lInd + 2);
            var imp = jsFile.match(impRegex);
            if (imp) {
                for (var j = 0; j < imp.length; j++) {
                    var im = imp[j].slice(imp[j].indexOf('\'') + 1, imp[j].lastIndexOf('\''));
                    if (im.indexOf('.json') !== -1) {
                        if (fs.existsSync('./src' + im.slice(2))) {
                            plnkr[im.slice(3)] = fs.readFileSync('./src' + im.slice(2), 'utf8');
                        }
                    }
                }
            }
            var allImp = jsFile.match(allImpRegex);
            if (jsonRegex.test(jsFile)) {
                var jsLines = jsFile.split('\n');
                for (var k = 0; k < allImp.length; k++) {
                    if (jsonRegex.test(jsLines[k])) {
                        jsLines[k] = jsLines[k].substring(0, jsLines[k].indexOf('\'../') + 1) + jsLines[k].substring(jsLines[k].indexOf('\'../') + 2);
                    }
                }
                jsFile = jsLines.join('\n');
            }
            if (jsonSrcRegex.test(jsFile)) {
                var jsonImports = jsFile.match(jsonSrcRegex);
                for (var z = 0; z < jsonImports.length; z++) {
                    var jsonfile = jsonImports[z].replace(/\'/g, '').replace(/\"/g, '');
                    if (fs.existsSync(jsonfile)) {
                        plnkr[jsonfile.slice(jsonfile.indexOf('/') + 1)] = fs.readFileSync(jsonfile, 'utf8');
                    }
                }
            }
            if (imgRegex.test(jsFile)) {
                var tlines = jsFile.split('\n');
                for (var a = 0; a < tlines.length; a++) {
                    if (imgRegex.test(tlines[a])) {
                        tlines[a] = tlines[a].replace(srcRegex, sbLink + 'demos/src/');
                    }
                }
                jsFile = tlines.join('\n');
            }
            jsFile = ripple + jsFile;
            plnkr['index.html'] = hfile;
            if (jsFile.indexOf('src/common/cldr-data/') !== -1) {
                var cldrLink = sbLink.indexOf('javascript') !== -1 ? 'demos/\' +' : 'javascript/demos/\' +';
                cldrLink = '\'' + sbLink + cldrLink;
                jsFile = jsFile.replace(/location.origin \+ location.pathname \+/g, cldrLink);
            }
            plnkr['index.js'] = jsFile;
            fs.writeFileSync(baseName + '-plnkr.json', JSON.stringify(plnkr));
            var samplePath = 'samples' + filePath.slice(5) + '/' + name;
            shelljs.mkdir('-p', samplePath);
            samplePath += '/';
            var plFiles = Object.keys(plnkr);
            for (var p = 0; p < plFiles.length; p++) {
                if (plFiles[p].split('/').length === 1) {
                    fs.writeFileSync(samplePath + plFiles[p], plnkr[plFiles[p]]);
                } else {
                    var dirPath = plFiles[p].split('/');
                    shelljs.mkdir('-p', samplePath + dirPath.splice(0, dirPath.length - 1).join('/'));
                    fs.writeFileSync(samplePath + plFiles[p], plnkr[plFiles[p]]);
                }
            }
        }
    }
});
gulp.task('serve', ['build'], function (done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential JS 2 javascript');
    var options = {
        server: {
            baseDir: './'
        },
        ui: false
    };
    bs.init(options, done);
});
gulp.task('js-hint', function () {
    var print =require('gulp-print');
    var jshint = require('gulp-jshint');
    return gulp.src(config.jshint)
        .pipe(print())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});


