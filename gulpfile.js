var glob = require('glob');
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var shelljs = global.shelljs || require('shelljs');
var md = require('markdown-it');
var gutil = require('gulp-util');
const packageRegex = /@syncfusion\/ej2-/;
var http = require('http'),
    zlib = require('zlib');


/////////////////////////////////////////////////////// Generating API links (For API Table links) //////////////////////////////////////////////////////////////////

var bucketName = 'ej2.syncfusion.com';
var match = ['Property', 'Method', 'Event'];
var link = '//' + bucketName + '/';

var apiLink = '';

link += 'javascript/documentation/';

function convertToLower(text, curModuleName) {
    var lower = ('') + text.substr(0, 1).toLowerCase() + text.substr(1);
    if (curModuleName !== undefined && text.toLowerCase() === (curModuleName.replace(/-/g, '') + 'component')) {
        lower = '';
    }
    return lower;
}

function getMessageText(msgObject) {
    if (!msgObject.comment) {
        return '';
    }
    var msgText = (msgObject.comment.shortText || '') +
        ((msgObject.comment.shortText && msgObject.comment.text) ?
            ('\n' + msgObject.comment.text) : (msgObject.comment.text || ''));
    var ret = msgText;
    var sampleIndex = msgText.indexOf('```');
    if (sampleIndex !== -1) {
        ret = removeTableData(msgText, sampleIndex);
    }
    return ret;
}

function removeTableData(str, index) {
    var codesnippetStart = str.slice(index + 3);
    var endIndex = codesnippetStart.indexOf('```');
    var end = (index ? (str.slice(0, index - 1)) : '') + (codesnippetStart.slice(endIndex + 3) || '');
    endIndex = end.indexOf('```');
    if (endIndex !== -1) {
        end = removeTableData(end, endIndex);
    }
    return end;
}

function processUnionObject(obj, typeColl) {
    var types = obj.types;
    var typeString = [];
    for (var k = 0; k < types.length; k++) {
        var name = getType(types[k], typeColl);
        if (name) {
            typeString.push(name);
        }
    }
    return typeString.join('|');
}

function getType(type, typeColl) {
    var iType = '',
        isArray, decl, intType;
    var isUnion = false;
    if (!type) {
        return '';
    }
    if (type.id && typeColl.indexOf(type.id) !== -1) {
        return 'string';
    }
    iType = type.name || (type.elementType ? (type.elementType.name ? type.elementType.name : '') : '');
    intType = type.type;
    isArray = type.isArray || type.type === 'array';
    decl = type.declaration;
    if (!iType) {
        if (intType === 'union') {
            isUnion = true;
            iType = processUnionObject(type, typeColl);
        } else if (decl) {
            iType = 'Object';
        }
    } else if (iType === 'EmitType') {
        var typeArguments = type.typeArguments;
        if (typeArguments && typeArguments.length) {
            var etype = getType(typeArguments[0], []).toLowerCase();
            return 'emittype' + etype.replace(/[^a-zA-Z]/g, '');
        }
        return 'emittype';
    }
    return (isArray ? iType + '[]' : iType);
}

function preProcessChild(childs) {
    var typeAliasColl = [];
    for (var child of childs) {
        var groups = child.groups || [];
        for (var group of groups) {
            var title = group.title;
            if (title === 'Type aliases') {
                typeAliasColl = typeAliasColl.concat(group.children);
            }
        }
    }
    return typeAliasColl;
}

var apiPath = './src/common/api-table';

function processApiJson(data) {
    var apiJson = JSON.parse(fs.readFileSync(apiPath, 'utf8'));
    var children = JSON.parse(data).children;
    var typeCollection = preProcessChild(children);
    for (let child of children) {
        var curModuleName = child.name.replace(/"/g, '').split('/')[0];
        var iChild = child.children || [];
        for (var curChild of iChild) {
            var name = curChild.name;
            var kindstring = curChild.kindString;
            if (kindstring === 'Class' && curChild.flags.isExported && !curChild.flags.isPrivate) {
                var classChilds = curChild.children || [];
                var classObj = {};
                var fName = convertToLower(name);
                var sampleName = (curModuleName.replace(/-/g, '').toLowerCase() === fName.toLowerCase()) ? '' : (fName + '');
                var curLink = link + 'api/' + curModuleName + '/' + sampleName + '#';
                for (var cChild of classChilds) {
                    var kString = cChild.kindString;
                    var isExported = cChild.flags.isExported && !(cChild.flags.isPrivate);
                    if (match.indexOf(kString) !== -1 && (cChild.flags.isPublic || isExported) && !cChild.flags.isProtected) {
                        var propName = cChild.name;
                        var description = '';
                        var mdGen = new md();
                        var dataLink;
                        var iType = '';
                        if (kString === 'Property') {
                            description = getMessageText(cChild);
                            iType = getType(cChild.type, typeCollection);
                            dataLink = iType.replace(/[^a-zA-Z]/g, '-').toLowerCase();
                            for (var j = dataLink.length - 1; j > 1; j--) {
                                if (dataLink[j] === '-') {
                                    dataLink = dataLink.slice(0, j);
                                } else {
                                    break;
                                }
                            }
                            dataLink = curLink + propName.toLowerCase();
                        } else if (kString === 'Method') {
                            iType = 'Method';
                            dataLink = curLink + propName.toLowerCase();
                            if (cChild.signatures) {
                                description = getMessageText(cChild.signatures[0]);
                            }
                        } else if (kString === 'Event') {
                            description = getMessageText(cChild);
                            iType = 'Event';
                            dataLink = curLink + propName.toLowerCase();
                        }
                        var descriptionHTML = mdGen.render(description);
                        classObj[propName] = {
                            name: propName,
                            description: descriptionHTML,
                            type: iType,
                            link: dataLink
                        };
                    }
                }
                if (apiJson[name]) {
                    apiJson[name] = Object.assign(apiJson[name], classObj);
                } else {
                    apiJson[name] = classObj;
                }
            }
        }
    }
    fs.writeFileSync(apiPath, JSON.stringify(apiJson));
}



function getGzipped(url, callback, packagename) {
    // buffer to store the streamed decompression
    var buffer = [];
    http.get(url, function (res) {
        // pipe the response into the gunzip to decompress
        var gunzip = zlib.createGunzip();
        res.pipe(gunzip);

        gunzip.on('data', function (data) {
            // decompression chunk ready, add it to the buffer
            buffer.push(data.toString());

        }).on('end', function () {
            // response and decompression complete, join the buffer and return
            callback(null, buffer.join(''), packagename);

        }).on('error', function (e) {
            callback(e);
        });
    }).on('error', function (e) {
        callback(e);
    });
}

function generateApi(done) {
    fs.writeFileSync('./src/common/api-table', JSON.stringify({}));
    var count = 0;
    var dependenciesObj = JSON.parse(fs.readFileSync('./node_modules/@syncfusion/ej2/package.json', 'utf8'));
    var dependenciesArray = Object.keys(dependenciesObj.dependencies).filter(function (value) {
        return packageRegex.test(value);
    });
    var length = dependenciesArray.length;
    if (!length) {
        done();
    }
    for (var i = 0; i < length; i++) {
        const j = i;
        var curPackage = dependenciesArray[j];
        getGzipped(apiLink + 'api/' + curPackage.split('/')[1] + '/file.json', function (err, data, packageName) {
            count++;
            if (err) {
                console.log(gutil.colors.red('Unable to access file json for ' + packageName));
            } else {
                processApiJson(data);
                console.log('Completed the api processing  for ' + packageName);
            }
            if (count === length) {
                var idata = fs.readFileSync(apiPath, 'utf8');
                idata = JSON.parse(idata);
                done();
            }
        }, curPackage);
    }
}


gulp.task('process-api', function (done) {
    if (shelljs.exec('node --max-old-space-size=7168 ./node_modules/gulp/bin/gulp.js process-api-files').code !== 0) {
        process.exit(1);
    }
    else {
        done();
    }
});

gulp.task('process-api-files', function (done) {
    generateApi(done);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////  Creating combined locale file (For Localization) //////////////////////////////////////////////////////////////////////////////////////

gulp.task('create-locale', function (done) {
    createLocale(done);
});

function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}

function isNullOrUndefined(value) {
    return value === undefined || value === null;
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

function createLocale(done) {
    var localePath = './dist';
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
        fs.writeFileSync(`${localePath}/locale-string.js`, 'window.Locale=' + JSON.stringify(obj) + ';');
        done();
    } else {
        fs.writeFileSync(`${localePath}/locale-string.js`, 'window.Locale=');
        done();
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////// Combining sample list with ID (For searching) //////////////////////////////////////////////////////////////////////
var jsoncombine = require('gulp-jsoncombine');
var elasticlunr = require('elasticlunr');
var sampleOrder = '';
var sampleList;

gulp.task('combine-samplelist', function (done) {
    if (shelljs.exec('node --max-old-space-size=7168 ./node_modules/gulp/bin/gulp.js combine-samplelists').code !== 0) {
        process.exit(1);
    }
    else{
        done();
    }
});

gulp.task('combine-samplelists', function (done) {
    combineSampleList(done);
});

function combineSampleList(done) {
    var filename = 'samplelist.js';
    sampleOrder = JSON.parse(fs.readFileSync(`./src/common/sampleOrder.json`));
    var apiData = JSON.parse(fs.readFileSync('./src/common/api-table', 'utf8'));
    var sampleListPath = `./src/common/`;
    var apiReference = {};
    if (sampleList && sampleList.length) {
        var controls = getControls();
        sampleOrder = getSampleOrder(controls);
    }
    return gulp.src('./src/**/*sample.json')
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
            generateSearchIndex(result, sampleListPath);
            var sList = 'window.samplesList  =' + JSON.stringify(result) + ';\n\n' + 'window.apiList =' + JSON.stringify(apiReference);
            var seoList = 'var samplesList =' + JSON.stringify(result) + ';\nexports.samplesList = samplesList;';
            new Buffer(seoList);
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

function generateSearchIndex(sampleArray, samplelistpath) {
    var searchindexpath = `${samplelistpath}search-index.js`;
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
            sample.hideOnDevice = hideOnDevice;
            instance.addDoc(sample);
        }
    }
    fs.writeFileSync(searchindexpath, 'window.searchIndex  =' + JSON.stringify(instance.toJSON()));
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////// Bundling Task /////////////////////////////////////////////////////////////////////////////////

var webpackGulp = require('webpack-stream');
var webpack = require('webpack');

gulp.task('ship-deps', function (done) {
    gulp.src(['./node_modules/@syncfusion/ej2/*.css',
        './node_modules/@syncfusion/ej2/dist/*{.js,.map}', './node_modules/fuse.js/dist/fuse.min.js'
    ])
        .pipe(gulp.dest('./dist/'))
        .on('end', function () {
            done();
        });
});

gulp.task('bundle', ['ship-deps'], function (done) {
    var webpackConfig = require(fs.realpathSync('./webpack.config.js'));
    gulp.src('')
        .pipe(webpackGulp(webpackConfig, webpack))
        .pipe(gulp.dest('.'))
        .on('end', function () {
            done();
        })
        .on('error', function (e) {
            done(e);
            process.exit(1);
        });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////// StackBlitz & Open in New Window ////////////////////////////////////////////////////////////////////////

gulp.task('stacblitz-json', function (done) {
    generateStackblitzFiles();
    done();
});


let paths = require('path');
var glob = require('glob');
var cheerio = require('cheerio');

function imgProcess(file, sbLink) {
    let imgRegex = /(<img([\w\W])+src\=\"src)|(imageUrl)|((\'|\")(\.\/|)src\/[^\'\"]+.(png|jpg)(\'|\"))/;
    let bgRegex = /background-image: url\((\'|\"|)(\.\/|)src/g;
    let srcRegex = /(|\.\/)src\//;
    let dSrc = 'demos/src/';
    if (imgRegex.test(file) || bgRegex.test(file)) {
        var tlines = file.split('\n');
        for (var x = 0; x < tlines.length; x++) {
            if (imgRegex.test(tlines[x]) || bgRegex.test(tlines[x])) {
                tlines[x] = tlines[x].replace(srcRegex, sbLink + dSrc);
            }
        }
        return tlines.join('\n');
    }
    return file;
}

function generateStackblitzFiles() {
    let fileExt = `${'.js'}`;
    let isJavascriptSb = true;
    let files = glob.sync(`./src/*/*${fileExt}`, {
        silent: true,
        ignore: `./src/common/**/*${fileExt}`
    });
    let stackBlitzHDep = `{{datasource}}<script src="https://cdn.syncfusion.com/ej2/{{:releaseVersion}}/dist/ej2.min.js" type="text/javascript"></script>
    <link href="https://cdn.syncfusion.com/ej2/{{:releaseVersion}}/material.css" rel="stylesheet">\n
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />\n
    <style>
            body{
                touch-action:none;
            }
        </style>`;
    stackBlitzHDep = stackBlitzHDep.replace(/.{{:releaseVersion}}/g, '');
    let hDep = fs.readFileSync('./src/common/plnk-template/index.html', 'utf8');
    let sty = fs.readFileSync('./src/common/plnk-template/index.css', 'utf8');
    let ripple = 'ej.base.enableRipple(window.ripple)\n';
    let metaTagTemplate = `<meta name="description" content="{{metaData}}" />`;
    let impCultureRegex = /import \{ loadCultureFiles \} from \'\.\.\/common\/culture-loader\';/;
    let loadRegex = /loadCultureFiles\(\);/
    let impCulture = "import { loadCultureFiles } from '../common/culture-loader';";
    // Regex for hidden code removal
    let reg = /.*custom code start([\S\s]*?)custom code end.*/g;
    let srcRegex = /(|\.\/)src\//;
    let dSrc = 'demos/src/';
    //common regex
    let impRegex = /import[\w,\{\} *]+'([^ \@]+)';/g;
    let allImpRegex = /import[^;]+;/g;
    let jsonRegex = /import[\w \*\{\}]+\'[\w\-\/\.]+\.json\'\;/;
    let jsonSrcRegex = /('|")\.\/src[^'"]+('|")/g;
    let ajaxRegex = /Ajax\(('|")(|.\/)src[^\)]+\)/g;
    //ts regex
    //js regex
    let defRegex = /this.default = function( )*\(\)( )* {/g;


    link = '//cdn.syncfusion.com/ej2/';
    sbLink = '//ej2.syncfusion.com/javascript/';

    hDep = hDep.replace(/{{:CDN_LINK}}/g, link).replace(/{{:PKG_LINK}}/g, link);
    stackBlitzHDep = stackBlitzHDep.replace(/{{:PKG_LINK}}/g, link);
    let dataSourcePath = {};
    let prevComponent = null;
    let sampleDataCollection = {};
    let sampleJson = {};
    let error = "";
    for (let i = 0; i < files.length; i++) {
        let name = path.basename(files[i], fileExt);
        let currentComp = files[i].split('/')[2];
        let filePath = path.dirname(files[i]);
        let tsample = files[i].split('/')[3].split('.')[0];
        let canonical = currentComp + '/' + tsample;
        if (prevComponent !== currentComp) {
            prevComponent = currentComp;
            sampleDataCollection = {};
            sampleJson = JSON.parse(fs.readFileSync(filePath + '/sample.json', 'utf8'));
            let sNames = sampleJson.samples;
            for (var sName of sNames) {
                sampleDataCollection[sName.url] = { name: sName.name, description: sName.description };
            }
        }
        let sampleData = sampleDataCollection[name] || {};
        let sampleName = sampleData.name;
        let mdescription = sampleData.description;
        let ftPath = sampleJson.ftName || '';
        let title = sampleJson.name + ' · ' + sampleName + ` · Essential JS 2 for Javascript (ES5) · Syncfusion`;
        let plnkr = {};
        let stack = {};
        var compname = filePath.replace('./src/', '');
        let dataSource = {};
        if (!dataSourcePath[currentComp]) {
            var data = 'nil';
            if (sampleJson.dataSourcePath) {
                data = imgProcess(fs.readFileSync('./' + sampleJson.dataSourcePath, 'utf8'), sbLink);
            }
            dataSourcePath[currentComp] = data;
        }
        dataSource = dataSourcePath[currentComp];
        let baseName = filePath + '/' + name;
        if (fs.existsSync(baseName + '.html') && (fs.existsSync(files[i]))) {
            let sHtml = imgProcess(fs.readFileSync(baseName + '.html', 'utf8'), sbLink);
            var eoc = '\n<script src="index.js" type="text/javascript"></script>';
            if (dataSource !== 'nil') {
                eoc = '\n<script src="datasource.js"  type="text/javascript"></script>\n' + eoc;
                plnkr['datasource.js'] = dataSource;
            }
            var $ = cheerio.load(sHtml);
            var adescription = $('#action-description').html();
            var description = $('#description').html();
            if (description) {
                description = description.trim();
            } else {
                hfile = hfile.replace(/{{:meta}}/, '');
            }
            $('#description').remove();
            $('#action-description').remove();
            var metaDescription = "";
            if (mdescription) {
                if ((mdescription.length >= 80) && (mdescription.length <= 160)) {
                    metaDescription = metaTagTemplate.replace(/{{metaData}}/, mdescription);
                } else {
                    error = error + canonical + ' description length should be between 100-160 characters\n';
                }
            }
            var repoScript = '';
            var hfile = hDep.replace(/{{:action-description}}/, adescription).
                replace(/{{:description}}/, description).
                replace(/{{:body}}/, $('body').html()).
                replace(/{{:eoc}}/, eoc);
            hfile = hfile.replace(/{{:header1}}/g, sampleName);
            hfile = hfile.replace(/{{:header}}/g, sampleJson.name);
            hfile = hfile.replace(/{{:header2}}/g, ftPath);
            hfile = hfile.replace(/{{:meta}}/, metaDescription);
            hfile = hfile.replace(/{{:title}}/g, title);
            hfile = hfile.replace(/{{:repoName}}/g, repoScript);
            var stackHtmlFile = stackBlitzHDep.replace(/{{datasource}}/, ((dataSource !== 'nil') ? ('<script src="' + sbLink +
                'demos' + filePath.slice(5) + '/' + name + '/datasource.js" type="text/javascript"></script>\n') : '')) +
                '<div class="stackblitz-container {{theme}}">' + sHtml + '</div>';
            var s$ = cheerio.load(stackHtmlFile);
            s$('#description').remove();
            s$('#action-description').remove();
            stackHtmlFile = s$.html();
            var codeFile = imgProcess(fs.readFileSync(files[i], 'utf8').replace(defRegex, ''), sbLink);
            codeFile = codeFile.replace(impCultureRegex, '');
            codeFile = codeFile.replace(loadRegex, '');
            var lInd = codeFile.lastIndexOf('};');
            codeFile = codeFile.substring(0, lInd) + codeFile.substring(lInd + 2);
            var imp = codeFile.match(impRegex);
            if (imp) {
                for (var j = 0; j < imp.length; j++) {
                    var im = imp[j].slice(imp[j].indexOf('\'') + 1, imp[j].lastIndexOf('\''));

                    if (im.indexOf('.json') !== -1 && fs.existsSync('./src' + im.slice(2))) {
                        var importFile = imgProcess(fs.readFileSync('./src' + im.slice(2), 'utf8'), sbLink);
                        plnkr[im.slice(3)] = importFile;
                        stack[im.slice(3)] = importFile;
                    }
                }
            }
            var allImp = codeFile.match(allImpRegex);
            if (jsonRegex.test(codeFile)) {
                var codeLines = codeFile.split('\n');
                for (var k = 0; k < allImp.length; k++) {
                    if (jsonRegex.test(codeLines[k])) {
                        codeLines[k] = codeLines[k].substring(0, codeLines[k].indexOf('\'../') + 1) + codeLines[k].substring(codeLines[k].indexOf('\'../') + 2);
                    }


                }
                codeFile = codeLines.join('\n');
            }
            if (jsonSrcRegex.test(codeFile)) {
                var jsonImports = codeFile.match(jsonSrcRegex);
                for (var z = 0; z < jsonImports.length; z++) {
                    var jsonfile = jsonImports[z].replace(/\'/g, '').replace(/\"/g, '');
                    if (fs.existsSync(jsonfile)) {
                        plnkr[jsonfile.slice(jsonfile.indexOf('/') + 1)] = imgProcess(fs.readFileSync(jsonfile, 'utf8'), sbLink);
                    }
                }
            }
            plnkr['index.html'] = hfile.replace(/&#xFEFF;/g, '');
            stack['index.html'] = stackHtmlFile.replace(/&#xFEFF;/g, '').replace(reg, '');

            if (codeFile.indexOf('src/common/cldr-data/') !== -1) {
                var cldrLink = sbLink.indexOf('javascript') !== -1 ? 'demos/\' +' : 'javascript/demos/\' +';
                cldrLink = '\'' + sbLink + cldrLink;
                codeFile = codeFile.replace(/location.origin \+ location.pathname \+/g, cldrLink);
            }
            plnkr['index.js'] = ripple + codeFile;
            plnkr['index.css'] = sty;

            if (ajaxRegex.test(codeFile)) {
                var ajaxFiles = codeFile.match(ajaxRegex);
                for (var z = 0; z < ajaxFiles.length; z++) {
                    codeFile = codeFile.replace(ajaxFiles[z], ajaxFiles[z].replace(srcRegex, sbLink + dSrc));
                }
            }
            stack['index.js'] = '{{ripple}}' + codeFile.replace(reg, '');

            fs.writeFileSync(baseName + '-stack.json', JSON.stringify(stack));
            var sPath = isJavascriptSb ? '' : '/samples';
            var samplePath = `.${sPath}${filePath.slice(5)}/${name}`;
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

    if (error) {
        console.log("=========== *** Build error due to invalid description length *** ==========\n\n");
        console.log(error);
        process.exit(1);
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////// Next-Previous for Open in New Window ///////////////////////////////////////////////////////////////

gulp.task('next-prev', function () {
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
            anchorNext = `href="https://ej2.syncfusion.com/javascript/demos/${next}/"`;
            anchorPrev = '';
            disableprev = 'e-disabled';
            disablenext = '';

        } else if (inx == samplePathArray.length - 1) {
            prev = samplePathArray[inx - 1];
            anchorPrev = `href="https://ej2.syncfusion.com/javascript/demos/${prev}/"`;
            anchorNext = '';
            disablenext = 'e-disabled';
            disableprev = '';
        } else if (inx !== 0 || samplePathArray.length - 1) {
            if (inx !== -1) {
                next = samplePathArray[inx + 1];
                prev = samplePathArray[inx - 1];
                anchorNext = `href="https://ej2.syncfusion.com/javascript/demos/${next}/"`;
                anchorPrev = `href="https://ej2.syncfusion.com/javascript/demos/${prev}/"`;
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////// Build & Serve ///////////////////////////////////////////////////////////////////////
var runSequence = require('run-sequence');
gulp.task('build', function (done) {
    runSequence('create-locale', 'combine-samplelist', 'bundle', 'stacblitz-json', 'next-prev', done);
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
