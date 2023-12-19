var glob = require('glob');
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var shelljs = global.shelljs || require('shelljs');
var webpackGulp = require('webpack-stream');
var webpack = require('webpack');
var runSequence = require('gulp4-run-sequence');
var platform = 'typescript';
var sampleList;
var commonConfig = require('./config.json');
var defRegex = /(this.|export |\(window as any\).)default (= |)\(\)(: void|) => {/g;
var loadRegex = /loadCultureFiles\(\);/
var impCultureRegex = /import \{ loadCultureFiles \} from \'\.\.\/common\/culture-loader\';/;
var impCulture = "import { loadCultureFiles } from '../common/culture-loader';";


gulp.task('bundle', function (done) {
    if (commonConfig.platform === 'javascript') {
        runSequence('ship-deps', function () {
            bundle(commonConfig.platform, done);
        });
    } else {
        bundle(commonConfig.platform, done);
    }
});

function bundle(platform, done) {
    var webpackConfig = require(fs.realpathSync('./webpack.config.js'));
    return gulp.src('.')
        .pipe(webpackGulp(webpackConfig, webpack))
        .pipe(gulp.dest('.'))
        .on('end', function () {
            done();
        })
        .on('error', function (e) {
            done(e);
            process.exit(1);
        });

}

gulp.task('ship-deps', function (done) {
    gulp.src(['./node_modules/@syncfusion/ej2/*.css',
        './node_modules/@syncfusion/ej2/dist/*{.js,.map}', './node_modules/fuse.js/dist/fuse.min.js'
    ])
        .pipe(gulp.dest('./dist/'))
        .on('end', function () {
            done();
        });
});

gulp.task('pdfium-wasm', function (done) {
    const filePath = process.cwd() + '/package.json';
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContent)
    var platformName = jsonData.name;
    let Folder = glob.sync('./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib/*.{js,wasm}')
    if (platformName == '@syncfusion/ej2-javascript-samples') {
        return gulp.src(Folder)
            .pipe(gulp.dest('./dist/ej2-pdfviewer-lib'));
    } else if (platformName == '@syncfusion/ej2-samples') {
        return gulp.src(Folder)
            .pipe(gulp.dest('./src/ej2-pdfviewer-lib'));
    } else if (platformName == '@syncfusion/ej2-react-samples') {
        return gulp.src(Folder)
            .pipe(gulp.dest('./ej2-pdfviewer-lib'));
    } else if (platformName === 'ej2-vue-samples') {
        const sourcePath = './node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib';
        const destpath = './public/js/ej2-pdfviewer-lib';
        if (!fs.existsSync(destpath)) {
            shelljs.mkdir('-p', destpath);
        }
        shelljs.cp('-R', sourcePath + '/*', destpath);
        console.log("File moved to Destination")
    }
    done();
});

function preProcess() {
    var googleAnalyticsScript = `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W8WD8WN');</script>
    <!-- End Google Tag Manager -->`
    var bodyScript = "ej2-samples" ? `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8WD8WN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div hidden id="sync-analytics" data-queue="EJ2 - Javascript - Demos"></div>
    ` : `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8WD8WN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div hidden id="sync-analytics" data-queue="EJ2 - react - Demos"></div>
    `
    var hFiles = glob.sync('./samples/**/index.html');
    for (var hFile of hFiles) {
        var htmlCont = fs.readFileSync(hFile, 'utf8');
        var $ = cheerio.load(htmlCont);
        var headContent = $('head').html();
        if (headContent.indexOf('gtm.start') === -1) {
            var nHtml = `<!DOCTYPE html>\n<html lang="en">\n<head> ${googleAnalyticsScript}   ${headContent}    \n</head>\n<body class="ej2-new">\n        ${bodyScript + $('body').html()}\n</body>\n</html>`;
            fs.writeFileSync(hFile, nHtml, 'utf8');
        }
    }
}
exports.preProcess = preProcess;


// replace-this
gulp.task('replace-this', function (done) {
    if (shelljs.exec('node --max-old-space-size=7168 ./node_modules/gulp/bin/gulp.js replace-this-files').code !== 0) {
        process.exit(1);
    }
    done();
});

gulp.task('replace-this-files', function (done) {
    var glob = require('glob');
    var fs = require('fs');
    var files = glob.sync('./src/**/*.ts');
    for (let file of files) {
        var content = fs.readFileSync(file, 'utf-8').replace(/this.default/, '(window as any).default');
        if (defRegex.test(content)) {
            if (!loadRegex.test(content)) {
                content = content.replace(defRegex, '(window as any).default = (): void => {\n    loadCultureFiles();');
            }
            if (!impCultureRegex.test(content)) {
                content = impCulture + '\n' + content;
            }
        }
        fs.writeFileSync(file, content);

    }
    done();
});

gulp.task('build', function(done){
    preProcess();
    var fCode = shelljs.exec('gulp pdfium-wasm && gulp create-locale && gulp combine-samplelist && gulp combine-seo-list && gulp bundle && gulp next-prev');
    if (fCode.code !== 0) {
        process.exit(1);
    } else {
        done();
    }
});

gulp.task('combine-seo-list', function (done) {
    combineSampleList(commonConfig.platform, true, done);
});

gulp.task('next-prev', function (done) {
        var files = glob.sync('./*/*', {
            silent: true,
            ignore: ['./src/**', './.vscode/**', './node_modules/**', './samples/**', './spec/**', './styles/**']
        });
        var samplesAr = require(fs.realpathSync('./src/common/sampleListSeo.js'));
        var samplePathArray = getSamplePathArray(samplesAr.samplesList);
        var next = "";
        var prev = "";
        var anchorPrev = "";
        var anchorNext = "";
        var disablenext = "";
        var disableprev = "";
        var platform;
        for (var i = 0; i < files.length; i++) {
            var url = files[i].split('/')[2];
            var currentComp = files[i].split('/')[1];
            var curlocation = currentComp + '/' + url;
            var inx = samplePathArray.indexOf(curlocation);
            if (inx == 0) {
                next = samplePathArray[inx + 1];
                platform = '/javascript';
                anchorNext = `href="https://ej2.syncfusion.com${platform}/demos/${next}/"`;
                anchorPrev = '';
                disableprev = 'e-disabled';
                disablenext = '';

            } else if (inx == samplePathArray.length - 1) {
                prev = samplePathArray[inx - 1];
                platform = '/javascript';
                anchorPrev = `href="https://ej2.syncfusion.com/${platform}demos/${prev}/"`;
                anchorNext = '';
                disablenext = 'e-disabled';
                disableprev = '';
            } else if (inx !== 0 || samplePathArray.length - 1) {
                if (inx !== -1) {
                    next = samplePathArray[inx + 1];
                    prev = samplePathArray[inx - 1];
                    platform = '/javascript';
                    anchorNext = `href="https://ej2.syncfusion.com${platform}/demos/${next}/"`;
                    anchorPrev = `href="https://ej2.syncfusion.com${platform}/demos/${prev}/"`;
                    disablenext = '';
                    disableprev = '';
                }
            }
            if (fs.existsSync('./' + curlocation + '/index.html')) {
                var pHtml = fs.readFileSync('./' + curlocation + '/index.html', 'utf8');
                pHtml = pHtml.replace(/{{:anchor-next}}/g, anchorNext);
                pHtml = pHtml.replace(/{{:anchor-prev}}/g, anchorPrev);
                pHtml = pHtml.replace(/{{:disabled-next}}/g, disablenext);
                pHtml = pHtml.replace(/{{:disabled-prev}}/, disableprev);
                pHtml = pHtml.replace(/<link rel="canonical" href=.+/, '');
                fs.writeFileSync('./' + curlocation + '/index.html', pHtml, 'utf-8');
            }

        }
    done();
});

function getSamplePathArray(samplesAr) {
    var samplesPathArray = [];
    for (var sampleList of samplesAr) {
        var dir = sampleList.directory;
        for (var sample of sampleList.samples) {
            samplesPathArray.push(dir + '/' + sample.url);
        }
    }
    return samplesPathArray;
}


var jsoncombine = require('gulp-jsoncombine');
var elasticlunr = require('elasticlunr');
var sampleOrder = '';
var sampleList;

gulp.task('combine-samplelist', function (done) {
    if (shelljs.exec('node --max-old-space-size=7168 ./node_modules/gulp/bin/gulp.js combine-samplelists').code !== 0) {
        process.exit(1);
    }
    done();
});

gulp.task('combine-samplelists', function (done) {
    combineSampleList(commonConfig.platform, false, done);
});


function combineSampleList(platform, seo, done) {
    var filename = platform === 'javascript' ? 'samplelist.js' : 'sampleList.ts';
    console.log('Combining sample list started', filename);
    if (seo) {
        filename = 'sampleListSeo.js';
    }
    sampleOrder = JSON.parse(fs.readFileSync(`./src/common/sampleOrder.json`));
    var sampleListPath = `./src/common/`;
    var apiReference = {};
    if (sampleList && sampleList.length) {
        var controls = getControls();
        sampleOrder = getSampleOrder(controls);
    }
    return gulp.src(commonConfig.samplejson)
        .pipe(jsoncombine(`${filename}`, function (data) {
            var result = [];
            var subCategory = [];
            var intId = 0;
            var curDirectory = '';
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
                    }
                }
            };
            var orderKeys = Object.keys(sampleOrder);
            for (var i = 0; i < orderKeys.length; i++) {
                console.log('Category : ' + orderKeys[i]);
                var components = sampleOrder[orderKeys[i]];
                for (var j = 0; j < components.length; j++) {
                    console.log('Component : ' + components[j]);
                    var currentData = getSamples(data, components[j]);
                    currentData.order = i;
                    result.push(currentData);
                }
            }
            addUID('0', result);
            generateSearchIndex(result, sampleListPath, platform);
            var configProps = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
            var commonChunkSkip = configProps.cssComponent || [];
            var sList = `${platform === 'javascript' ?
                'window.samplesList  =' : 'export let samplesList : any ='}` + JSON.stringify(result) + ';\n\n' +
                `${platform === 'javascript' ? 'window.apiList =' : 'export let apiList:any='}` + JSON.stringify(apiReference) +
                `${platform === 'typescript' ? `\n\n export let skipCommonChunk: string[] = ${JSON.stringify(commonChunkSkip)};` : ''}`;
            var seoList = 'var samplesList =' + JSON.stringify(result) + ';\nexports.samplesList = samplesList;';
            if (seo) {
                return new Buffer(seoList);
            }
            return new Buffer(sList);

        }))
        .pipe(gulp.dest(sampleListPath))
        .on('end', function () {
            done();
        })
        .on('error', function (e) {
            done(e);
            process.exit(1);
        });
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
        for (let j = 0; j < controls.length; j++) {
            // get the index of controls 
            var componentIndex = components.indexOf(controls[j]);
            if (componentIndex !== -1) {
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

function getSamples(data, component) {
    var dataList = Object.keys(data);
    for (var i = 0; i < dataList.length; i++) {
        var currentData = data[dataList[i]];
        if (component === currentData.name) {
            return currentData;
        }
    }
}

function generateSearchIndex(sampleArray, samplelistpath, platform) {
    var searchindexpath = platform === 'javascript' ? `${samplelistpath}search-index.js` :
        `${samplelistpath}search-index.json`;
    elasticlunr.clearStopWords();
    var instance = elasticlunr(function () {
        this.addField('component');
        this.addField('name');
        this.setRef('uid');
    });
    for (let sampleCollection of sampleArray) {
        var component = sampleCollection.name;
        var directory = sampleCollection.directory;
        var puid = sampleCollection.uid;
        var hideOnDevice = sampleCollection.hideOnDevice;
        for (let sample of sampleCollection.samples) {
            sample.component = component;
            sample.dir = directory;
            sample.parentId = puid;
            sample.hideOnDevice = hideOnDevice ? hideOnDevice : sample.hideOnDevice;
            instance.addDoc(sample);
        }
    }
    fs.writeFileSync(searchindexpath, `${platform === 'javascript' ? 'window.searchIndex  =' : ''}` + JSON.stringify(instance.toJSON()));
}

gulp.task('create-locale', function (done) {
    createLocale(platform, done);
});

function createLocale(platform, done) {
    var fileExt = '.js';
    var localePath = `./dist`;
    if (!fs.existsSync(localePath)) {
        shelljs.mkdir('-p', localePath);
    }
    var localeJson = glob.sync('./src/**/locale.json', {
        silent: true
    });
    if (localeJson.length) {
        // baseUtil;
        var obj = {};
        for (var i = 0; i < localeJson.length; i++) {
            var compentLocale = JSON.parse(fs.readFileSync(localeJson[i]));
            obj = extend({}, obj, compentLocale, true);
        }
        fs.writeFileSync(`${localePath}/locale-string${fileExt}`, 'window.Locale=' + JSON.stringify(obj) + ';');
        done();
    } else {
        fs.writeFileSync(`${localePath}/locale-string${fileExt}`,'window.Locale=');
        done();
    }
}

function extend(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return 'continue';
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            if (deep && isObject(copy)) {
                clone = isObject(src) ? src : {};
                result[key] = extend({}, clone, copy, true);
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}

function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}

 function isNullOrUndefined(value) {
    return value === undefined || value === null;
}

gulp.task('serve', function(done) {
    runSequence('build',function() {
        var browserSync = require('browser-sync');
        var bs = browserSync.create('Essential TypeScript');
        var options = {
            server: {
                baseDir: './'
            },
            ui: false
        };
        bs.init(options, done);
    });
});