var cBlock = ['sb-src-code.hljs.javascript', 'sb-src-code.hljs.xml'];
var switcherPopup;
var themeSwitherPopup;
var openedPopup;
var searchPopup;
var settingsPopup;
var sidebar;
var settingsidebar;
var preventToggle;
var prevAction;
var searchInstance;
var headerThemeSwitch = document.getElementById('header-theme-switcher');
var settingElement = ej.base.select('.sb-setting-btn');
var themeList = document.getElementById('themelist');
var themeCollection = ['material3', 'bootstrap5', 'fluent2', 'tailwind3', 'fluent2-highcontrast', 'highcontrast', 'tailwind', 'fluent', 'material3-dark', 'bootstrap5-dark', 'fluent2-dark', 'tailwind-dark', 'tailwind3-dark', 'fluent-dark'];
var themesToRedirect = ['material', 'material-dark', 'bootstrap4', 'bootstrap', 'bootstrap-dark', 'fabric', 'fabric-dark'];
var darkIgnore = ['highcontrast', 'fluent2-highcontrast'];
var themeDarkButton = document.getElementById('sb-dark-theme');
var darkButton = document.getElementById('sb-dark-span');
var themeModeDropDown;
var themeDropDown;
var contentTab;
var sourceTab;
var isExternalNavigation = true;
var defaultTree = false;
var intialLoadCompleted = false;
var resizeManualTrigger = false;
var reloadPageForRedirection = false;
var leftToggle = ej.base.select('#sb-toggle-left');
var sbRightPane = ej.base.select('.sb-right-pane');
var sbContentOverlay = ej.base.select('.sb-content-overlay');
var sbBodyOverlay = ej.base.select('.sb-body-overlay');
var sbHeader = ej.base.select('#sample-header');
var resetSearch = ej.base.select('.sb-reset-icon');
var urlRegex = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
var aiUrlRegex = /\/ai-[^\/]+\//;
var aiControlRegex = /^ai-.*/;
var sampleRegex = /#\/(([^\/]+\/)+[^\/\.]+)/;
// Regex for removing hidden codes
var reg = /.*custom code start([\S\s]*?)custom code end.*/g;
var sbArray = ['angular', 'nextjs', 'react', 'typescript', 'aspnetcore', 'aspnetmvc', 'vue', 'blazor'];
var sbObj = {
    'angular': 'angular',
    'nextjs': 'nextjs',
    'typescript': '',
    'react': 'react',
    'vue': 'vue',
    'blazor': 'blazor'
};
var searchEle = ej.base.select('#search-popup');
var inputele = ej.base.select('#search-input');
var searchOverlay = ej.base.select('.e-search-overlay');
var searchButton = document.getElementById('sb-trigger-search');
var setResponsiveElement = ej.base.select('.setting-responsive');
var isMobile = window.matchMedia('(max-width:550px)').matches;
var isTablet = window.matchMedia('(min-width:600px) and (max-width: 850px)').matches;
var isPc = window.matchMedia('(min-width:850px)').matches;
var selectedTheme = location.hash.split('/')[1] || 'tailwind3';
var toggleAnim = new ej.base.Animation({ duration: 500, timingFunction: 'ease' });
var controlSampleData = {};
var samplesList = getSampleList();
var samplesTreeList = [];
var execFunction = {};
var searchListView;
var sourceTabItems = [];
//window.apiList = window.apiList;
var sampleNameElement = document.querySelector('#component-name>.sb-sample-text');
var breadCrumbComponent = document.querySelector('.sb-bread-crumb-text>.category-text');
var breadCrumSeperator = ej.base.select('.category-seperator');
var breadCrumbSubCategory = document.querySelector('.sb-bread-crumb-text>.component');
var breadCrumbSample = document.querySelector('.sb-bread-crumb-text>.crumb-sample');
var hsplitter = '<div class="sb-toolbar-splitter sb-custom-item"></div>';
var openNewTemplate = "<div class=\"sb-custom-item sb-open-new-wrapper\"><a id=\"openNew\" role='tab' target=\"_blank\" aria-label=\"Open new sample\">\n<div class=\"sb-icons sb-icon-Popout\"></div></a></div>";
var sampleNavigation = "<div class=\"sb-custom-item sample-navigation\"><button id='prev-sample' role='tab' class=\"sb-navigation-prev\" \n    aria-label=\"Navigate to previous sample\">\n<span class='sb-icons sb-icon-Previous'></span>\n</button>\n<button role='tab' id='next-sample' class=\"sb-navigation-next\" aria-label=\"Navigate to next sample\">\n<span class='sb-icons sb-icon-Next'></span>\n</button>\n</div>";
var plnrTemplate = '<span class="sb-icons sb-icons-plnkr" role="presentation"></span><span class="sb-plnkr-text">Edit in StackBlitz</span>';
var contentToolbarTemplate = '<div class="sb-desktop-setting"><button id="open-plnkr" role="tab" aria-label="Open Edit in StackBlitz" tabindex="0" class="sb-custom-item sb-plnr-section">' +
    plnrTemplate + '</button>' + hsplitter + openNewTemplate + hsplitter +
    '</div>' + sampleNavigation + '<div class="sb-icons sb-mobile-setting"></div>';
var tabContentToolbar = ej.base.createElement('div', { className: 'sb-content-toolbar', innerHTML: contentToolbarTemplate });
var apiGrid;
window.navigateSample = (window.navigateSample !== undefined) ? window.navigateSample : function () { return; };
var isInitRedirected;
var samplePath = [];
var defaultSamples = [];
var samplesAr = [];
var currentControlID;
var currentSampleID;
var currentControl;
var currencyDropDown;
var cultureDropDown;
var demoSection = ej.base.select('.sb-demo-section');
var newYear= new Date().getFullYear();
var copyRight= document.querySelector('.sb-footer-copyright');
copyRight.innerHTML = "Copyright © 2001 - " + newYear + " Syncfusion<sup>®</sup> Inc.";
ej.base.registerLicense('{SyncfusionJSLicensekey}');

var matchedCurrency = {
    'en': 'USD',
    'de': 'EUR',
    'ar': 'AED',
    'zh': 'CNY',
    'fr-CH': 'CHF'
};
settingsidebar = new ej.navigations.Sidebar({
    position: 'Right', width: '282', zIndex: '1003', showBackdrop: true, type: 'Over', enableGestures: false,
    closeOnDocumentClick: true, close: closeRightSidebar
});
function closeRightSidebar(args) {
  let targetEle = args.event ? args.event.target : null;
  if (targetEle && targetEle.closest('.e-popup')) args.cancel = true;
}
function changeCulture(cul) {
    if (cul === 'ar') {
        changeRtl(true);
    }
    else {
        changeRtl(false);
    }
    if (currencyDropDown) {
        currencyDropDown.value = matchedCurrency[cul];
    } else {
        ej.base.setCurrencyCode(matchedCurrency[cul]);
    }
    ej.base.setCulture(cul);
}
function changeRtl(bool) {
    var elementlist = ej.base.selectAll('.e-control', document.getElementById('control-content'));
    for (var i = 0; i < elementlist.length; i++) {
        var control = elementlist[i];
        if (control.ej2_instances) {
            for (var a = 0; a < control.ej2_instances.length; a++) {
                var instance = control.ej2_instances[a];
                instance.enableRtl = bool;
            }
        }
    }
}
function loadCulture(cul) {
    var ajax = new ej.base.Ajax('./src/common/cldr-data/main/' + cul + '/all.json', 'GET', true);
    if (ej.base.getValue('main.' + cul, ej.base.cldrData)) {
        changeCulture(cul);
    } else {
        ajax.send().then(function (result) {
            ej.base.loadCldr(JSON.parse(result));
            changeCulture(cul);
        });
    }
}

loadCulture('en');
ej.base.L10n.load(window.Locale);
isMobile = window.matchMedia('(max-width:550px)').matches;
if (ej.base.Browser.isDevice || isMobile) {
    if (sidebar) {
        sidebar.destroy();
    }
    sidebar = new ej.navigations.Sidebar({ width: '280px', showBackdrop: true, closeOnDocumentClick: true, enableGestures: false,change:resizeFunction });
    sidebar.appendTo('#left-sidebar');
} else {
    sidebar = new ej.navigations.Sidebar({
        width: '282px', target: document.querySelector('.sb-content '),
        showBackdrop: false,
        closeOnDocumentClick: false,
        enableGestures: false,
        change:resizeFunction
    });
    sidebar.appendTo('#left-sidebar');
}

if (ej.base.Browser.isDevice || isMobile) {
    leftToggle.setAttribute('aria-expanded', 'false');
} else {
    leftToggle.setAttribute('aria-expanded', 'true');
}

function resizeFunction() {
    if (!isMobile && !isTablet) {
        resizeManualTrigger = true;
        setTimeout(cusResize(), 400);
    }
}

function preventTabSwipe(e) {
    if (e.isSwiped) {
        e.cancel = true;
    }
}
function dynamicTab(e) {
    var blockEle = this.element.querySelector('#e-content' + this.tabId + '_' + e.selectedIndex).children[0];
    blockEle.innerHTML = this.items[e.selectedIndex].data;
    blockEle.innerHTML = blockEle.innerHTML.replace(reg,'');
    blockEle.classList.add('sb-src-code');
    if (blockEle) {
        hljs.highlightBlock(blockEle);
    }
}

function renderSbPopups() {
    switcherPopup = new ej.popups.Popup(document.getElementById('sb-switcher-popup'), {
        relateTo: document.querySelector('.sb-header-text-right'),
        position: { X: 'left' },
        collision: { X: 'flip', Y: 'flip' },
        offsetX: 0,
        offsetY: -15,
    });
    themeSwitherPopup = new ej.popups.Popup(document.getElementById('theme-switcher-popup'), {
        offsetY: 2,
        relateTo: document.querySelector('.theme-wrapper'),
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });

// Initialize AutoComplete
searchPopup = new ej.dropdowns.AutoComplete({
    dataSource: [], // Initialize with an empty data source
    filtering: function (e) {
        if (e.text && e.text.length < 3) {
            return;
        }
        let val = searchInstance.search(e.text, {
            fields: {
                component: { boost: 1 },
                name: { boost: 2 }
            },
            expand: true,
            boolean: 'AND'
        });
        val.map(function (item) {
            item['doc'] = searchInstance.documentStore.docs[item.ref];
        });
        let value = [];
        if (ej.base.Browser.isDevice) {
            for (let file of val) {
                if (file.doc.hideOnDevice !== true) {
                    value = value.concat(file);
                }
            }
        }
        let query = new ej.data.Query().take(10).select('doc');
        let fields = searchInstance.fields;
        let searchValue = ej.base.Browser.isDevice ? value : val;
        e.updateData(searchValue, query, fields);
    },
    placeholder: 'Search here...',
    noRecordsTemplate: '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>',
    fields: { groupBy: 'doc.component', value: 'doc.uid', text: 'doc.name' },
    highlight: true,
    select: function (e) {
        let data = e.itemData.doc;
        let hashval = '#/' + location.hash.split('/')[1] + '/' + data.dir + '/' + data.url + '.html';
        searchPopup.hidePopup();
        searchOverlay.classList.add('e-search-hidden');
        if (location.hash !== hashval) {
            sampleOverlay();
            location.hash = hashval;
            setSelectList();
        }
    }
}, inputele);

// Append the AutoComplete to the search element
// searchPopup.appendTo(inputele);
    settingsPopup = new ej.popups.Popup(document.getElementById('settings-popup'), {
        offsetY: 5,
        zIndex: 1001,
        relateTo: settingElement,
        position: { X: 'right', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    settingsidebar.appendTo('#right-sidebar');
    if (!isMobile) {
        settingsidebar.hide();
        settingsPopup.hide();
    } else {
        ej.base.select('.sb-mobile-preference').appendChild(ej.base.select('#settings-popup'));
    }
    searchPopup.hidePopup();
    switcherPopup.hide();
    themeSwitherPopup.hide();
    themeDropDown = new ej.dropdowns.DropDownList({
        index: themeCollection.indexOf(selectedTheme.split('-')[0]),
        change: function (e) { switchTheme(e.value); }
    });
    themeDropDown.appendTo('#sb-setting-theme');
    themeModeDropDown = new ej.dropdowns.DropDownList({
        index: (location.hash.split('/')[1] && location.hash.split('/')[1].includes('-dark')) ? 1 : 0,
        change: function (e) { darkSwitch() }
    });
    themeModeDropDown.appendTo('#sb-theme-mode');
    cultureDropDown = new ej.dropdowns.DropDownList({
        index: 0,
        change: function (e) {
            var value = e.value;
            loadCulture(value);
        }

    });
    currencyDropDown = new ej.dropdowns.DropDownList({
        index: 0,
        change: function (e) { ej.base.setCurrencyCode(e.value); }
    });
    cultureDropDown.appendTo('#sb-setting-culture');
    currencyDropDown.appendTo('#sb-setting-currency');
    contentTab = new ej.navigations.Tab({
        selected: changeTab,
        selecting: preventTabSwipe
    }, '#sb-content');
    sourceTab = new ej.navigations.Tab({
        items: [],
        headerPlacement: 'Bottom',
        cssClass: 'sb-source-code-section',
        selecting: preventTabSwipe,
        created: dynamicTabCreation,
        selected: dynamicTab,
    }, '#sb-source-tab');
    apiGrid = new ej.grids.Grid({
        width: '100%',
        dataSource: [],
        allowTextWrap: true,
        columns: [
            { field: 'name', headerText: 'Name', template: '#template', width: 180, textAlign: 'center' },
            { field: 'type', headerText: 'Type', width: 180 },
            { field: 'description', headerText: 'Description', template: '#template-description', width: 200 },
        ],
        dataBound: dataBound
    });
    apiGrid.appendTo('#api-grid');
    var prevbutton = new ej.buttons.Button({ iconCss: 'sb-icons sb-icon-Previous', cssClass: 'e-flat' }, '#mobile-prev-sample');
    var nextbutton = new ej.buttons.Button({ iconCss: 'sb-icons sb-icon-Next', cssClass: 'e-flat', iconPosition: 'Right' }, '#mobile-next-sample');
    var tabHeader = document.getElementById('sb-content-header');
    tabHeader.appendChild(tabContentToolbar);
    var openNew = new ej.popups.Tooltip({
        content: 'Open in New Window'
    });

    openNew.appendTo('.sb-open-new-wrapper');

    var previous = new ej.popups.Tooltip({
        content: 'Previous Sample'
    });
    previous.appendTo('#prev-sample');

    var next = new ej.popups.Tooltip({
        content: 'Next Sample'
    });

    ej.base.select('#right-pane').addEventListener('scroll', function (event) {
        next.close();
        openNew.close();
        previous.close();
    });

    next.appendTo('#next-sample');

}

function checkApiTableDataSource() {
    var hash = location.hash.split('/');
    var data = window.apiList[hash[2] + '/' + hash[3].replace('.html', '')] || [];
    if (!data.length || (isMobile || isTablet)) {
        contentTab.hideTab(2);
    } else {
        contentTab.hideTab(2, false);
    }
}

function changeTab(args) {
    if (args.selectedIndex === 2) {
        var hash = location.hash.split('/');
        var data = window.apiList[hash[2] + '/' + hash[3].replace('.html', '')] || [];
        if (data.length) {
            apiGrid.dataSource = data;
        } else {
            apiGrid.dataSource = [];
        }
    }
    if (args.selectedIndex === 1) {
        sourceTab.items = sourceTabItems;
        sourceTab.refresh();
        rendercopycode();
        dynamicTabCreation(sourceTab);
    }
    if (args.selectedItem && args.selectedItem.innerText === 'DEMO') {
        let demoSection = document.getElementsByClassName('sb-demo-section')[0];
        const componentToIgnore= ['tab'];
        if (demoSection) {
            let elementList = demoSection.getElementsByClassName('e-control e-lib');
            for (let i = 0; i < elementList.length; i++) {
                let instance = elementList[i].ej2_instances;
                if (instance && instance[0] && typeof instance[0].refresh === 'function' && componentToIgnore.indexOf(instance[0].getModuleName()) === -1 && !['rich-text-editor', 'ai-assistview', 'chat-ui'].includes(currentControl)) {
                    instance[0].refresh();
                }
                if (instance && instance[0] && instance[0].getModuleName() !== 'DashboardLayout')
                    break;
            }
        }
    }
}

function dynamicTabCreation(obj) {
    var tabObj;
    if (obj) {
        tabObj = obj;
    } else { tabObj = this; }
    var contentEle = tabObj.element.querySelector('#e-content' + tabObj.tabId + '_' + tabObj.selectedItem);
    if (!contentEle) {
        return;
    }
    var blockEle = tabObj.element.querySelector('#e-content' + tabObj.tabId + '_' + tabObj.selectedItem).children[0];
    blockEle.innerHTML = tabObj.items[tabObj.selectedItem].data;
    blockEle.innerHTML = blockEle.innerHTML.replace(reg,'');
    blockEle.classList.add('sb-src-code');
    if (blockEle) {
        hljs.highlightBlock(blockEle);
    }
}

function dataBound(args) {
    if (!this.getRows()) {
        return;
    }
    var gridtrs = this.getRows().length;
    var trs = this.getRows();
    for (var count = 0; count < gridtrs; count++) {
        var tr1 = trs[count];
        if (tr1.getBoundingClientRect().height > 100) {
            var desDiv = tr1.querySelector('.sb-sample-description');
            var tag = ej.base.createElement('a', { id: 'showtag', innerHTML: ' show more...' });
            tag.addEventListener('click', tagShowmore.bind(this, desDiv));
            desDiv.classList.add('e-custDesription');
            desDiv.appendChild(tag);
        }
    }
}

function tagShowmore(target) {
    target.classList.remove('e-custDesription');
    target.querySelector('#showtag').classList.add('e-display');
    var hideEle = target.querySelector('#hidetag');
    if (!hideEle) {
        var tag = ej.base.createElement('a', { id: 'hidetag', attrs: {}, innerHTML: 'show less..' });
        target.appendChild(tag);
        tag.addEventListener('click', taghideless.bind(this, target));
    } else {
        hideEle.classList.remove('e-display');
    }
}

function taghideless(target) {
    target.querySelector('#hidetag').classList.add('e-display');
    target.querySelector('#showtag').classList.remove('e-display');
    target.classList.add('e-custDesription');
}
function setPressedAttribute(ele) {
    var status = ele.classList.contains('active');
    ele.setAttribute('aria-pressed', status ? 'true' : 'false');
}
searchOverlay.addEventListener('click', searchOverlayClick);
function searchOverlayClick() {
    toggleSearchOverlay();
}
function sbHeaderClick(action, preventSearch) {
    if (openedPopup) {
        openedPopup.hide(new ej.base.Animation({ name: 'FadeOut', duration: 300, delay: 0 }));
    }
    if (preventSearch !== true && !searchOverlay.classList.contains('sb-hide')) {
        searchOverlay.classList.add('sb-hide');
        searchButton.classList.remove('active');
        setPressedAttribute(searchButton);
    }
    var curPopup;
    switch (action) {
        case 'changeSampleBrowser':
            curPopup = switcherPopup;
            break;
        case 'changeTheme':
            headerThemeSwitch.classList.toggle('active');
            setPressedAttribute(headerThemeSwitch);
            curPopup = themeSwitherPopup;
            break;
        case 'toggleSettings':
            settingElement.classList.toggle('active');
            setPressedAttribute(settingElement);
            themeDropDown.index = themeCollection.indexOf(selectedTheme);
            curPopup = settingsPopup;
            break;
    }
    if (action === 'closePopup') {
        headerThemeSwitch.classList.remove('active');
        settingElement.classList.remove('active');
        setPressedAttribute(headerThemeSwitch);
        setPressedAttribute(settingElement);
    }
    if (curPopup && curPopup !== openedPopup) {
        curPopup.show(new ej.base.Animation({ name: 'FadeIn', duration: 400, delay: 0 }));
        openedPopup = curPopup;
    } else {
        openedPopup = null;
    }
    prevAction = action;
}

function toggleSearchOverlay() {
    sbHeaderClick('closePopup', true);
    inputele.value = '';
    searchPopup.hidePopup();
    searchButton.classList.toggle('active');
    setPressedAttribute(searchButton);
    searchOverlay.classList.toggle('sb-hide');
    if (!searchOverlay.classList.contains('sb-hide')) {
        inputele.focus();
    }
}

function changeTheme(e) {
    var target = e.target;
    target = ej.base.closest(target, 'li');
    var themeName = target.id;
    switchTheme(themeName);
    var imageEditorElem = document.querySelector(".e-image-editor");
    if (imageEditorElem != null) {
        var imageEditor = ej.base.getComponent(document.getElementById(imageEditorElem.id), 'image-editor');
        imageEditor.theme = themeName;
    }
}

function switchTheme(str) {
    var hash = location.hash.split('/');
    if (hash[1] !== str) {
        if (hash[1].includes('-dark') && darkIgnore.indexOf(str) === -1) {
            str = str + '-dark';
        }
        hash[1] = str;
        localStorage.setItem('ej2-switch', ej.base.select('.sb-responsive-section .active').id);
        location.hash = hash.join('/');
    }
}

themeDarkButton.addEventListener('click', darkSwitch);

function darkSwitch() {
    var hash = location.hash.split('/');
    var darkTheme = hash[1]
    darkTheme = darkTheme.includes("-dark") ? darkTheme.replace("-dark", "") : darkIgnore.indexOf(darkTheme) === 0 ? darkTheme : darkTheme + '-dark';
    hash[1] = darkTheme;
    localStorage.setItem('ej2-switch', ej.base.select('.sb-responsive-section .active').id);
    location.hash = hash.join('/');
    location.reload();
}

function onsearchInputChange(e) {
    if (e.keyCode === 27 || e.keyCode === 13) {
        toggleSearchOverlay();
    }
    var searchString = e.target.value;
    if (searchString.length <= 2) {
        searchPopup.hidePopup();
        return;
    }
    var val = [];
    val = searchInstance.search(searchString, {
        fields: {
            component: { boost: 1 },
            name: { boost: 2 }
        },
        expand: true,
        boolean: 'AND'
    });
    var value = [];
    if (ej.base.Browser.isDevice) {
        for (var j = 0; j < val.length; j++) {
            if (val[j].doc.hideOnDevice !== true) {
                value = value.concat(val);
            }
        }
    }
    
}

function highlight(searchString, listElement) {
    var regex = new RegExp(searchString.split(' ').join('|'), 'gi');
    var contentElements = ej.base.selectAll('.e-list-item .e-text-content .e-list-text', listElement);
    for (var i = 0; i < contentElements.length; i++) {
        var spanText = ej.base.select('.sb-highlight', contentElements[i]);
        if (spanText) {
            contentElements[i].innerHTML = contentElements[i].text;
        }
        contentElements[i].innerHTML = contentElements[i].innerHTML.replace(regex, function (matched) {
            return '<span class="sb-highlight">' + matched + '</span>';
        });
    }
}

function setMouseOrTouch(e) {
    var ele = ej.base.closest(e.target, '.sb-responsive-items');
    var switchType = ele.id;
    changeMouseOrTouch(switchType);
    sbHeaderClick('closePopup');
    localStorage.setItem('ej2-switch', switchType);
    location.reload();
}

function onNextButtonClick(arg) {
    sampleOverlay();
    var curSampleUrl = location.hash;
    var inx = samplesAr.indexOf(curSampleUrl);
    if (inx !== -1) {
        var prevhref = samplesAr[inx];
        var curhref = samplesAr[inx + 1];
        location.href = curhref;
    }
    window.hashString = location.hash;
    setSelectList();
}

function onPrevButtonClick(arg) {
    sampleOverlay();
    var curSampleUrl = location.hash;
    var inx = samplesAr.indexOf(curSampleUrl);
    if (inx !== -1) {
        var prevhref = samplesAr[inx];
        var curhref = samplesAr[inx - 1];
        location.href = curhref;
    }
    window.hashString = location.hash;
    setSelectList();
}


function processResize(e) {
    var toggle = sidebar.isOpen;

    isMobile = window.matchMedia('(max-width:550px)').matches;
    isTablet = window.matchMedia('(min-width:550px) and (max-width: 850px)').matches;
    if (isTablet) {
        resizeManualTrigger = false;
    }

    if (resizeManualTrigger || (isMobile && ej.base.select('#right-sidebar').classList.contains('sb-hide'))) {
        return;
    }
    isTablet = window.matchMedia('(min-width:550px) and (max-width: 850px)').matches;
    isPc = window.matchMedia('(min-width:850px)').matches;
    processDeviceDependables();
    setLeftPaneHeight();
    var leftPane = ej.base.select('.sb-left-pane');
    var rightPane = ej.base.select('.sb-right-pane');
    var footer = ej.base.select('.sb-footer-left');
    var pref = ej.base.select('#settings-popup');
    if (isTablet || isMobile) {
        contentTab.hideTab(2);
    } else {
        contentTab.hideTab(2, false);
    }
    if (toggle && !isPc) {
        toggleLeftPane();
    }
    if (isMobile || isTablet) {
        sidebar.target = null;
        sidebar.showBackdrop = true;
        sidebar.closeOnDocumentClick = true;
        ej.base.select('.sb-left-footer-links').appendChild(footer);

        if (isVisible('.sb-mobile-overlay')) {
            removeMobileOverlay();
        }

        if (!pref.parentElement.classList.contains('sb-mobile-preference')) {
            ej.base.select('.sb-mobile-preference').appendChild(pref);
            settingsPopup.show();
        }
        var propPanel = ej.base.select('#control-content .property-section');
        if (propPanel) {
            ej.base.select('.sb-mobile-prop-pane').appendChild(propPanel);
            ej.base.select('.sb-mobile-setting').classList.remove('sb-hide');
        }
        if (isVisible('.sb-mobile-overlay')) {
            removeMobileOverlay();
        }
    }
    if (isPc) {
        sidebar.target = document.querySelector('.sb-content ');
        sidebar.showBackdrop = false;
        sidebar.closeOnDocumentClick = false;
        ej.base.select('.sb-footer').appendChild(footer);
        if (isVisible('.sb-mobile-overlay')) {
            removeMobileOverlay();
        }

        if (isPc && !ej.base.Browser.isDevice && isVisible('.sb-left-pane')) {
            rightPane.classList.remove('control-fullview');
        }
        if (pref.parentElement.classList.contains('sb-mobile-preference')) {
            ej.base.select('#sb-popup-section').appendChild(pref);
            settingsidebar.hide();
            settingsPopup.hide();
        }
        var mobilePropPane = ej.base.select('.sb-mobile-prop-pane .property-section');
        if (mobilePropPane) {
            ej.base.select('#control-content').appendChild(mobilePropPane);
        }
        if (!ej.base.select('.sb-mobile-right-pane').classList.contains('sb-hide')) {
            toggleRightPane();
        }
    }

}

function resetInput(arg) {
    arg.preventDefault();
    arg.stopPropagation();
    document.getElementById('search-input').value = '';
    document.getElementById('search-input-wrapper').setAttribute('data-value', '');
    searchPopup.hidePopup();
}
function bindEvents() {
    document.getElementById('sb-switcher').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeSampleBrowser');
    });
    document.getElementById('sb-switcher').addEventListener('keydown', function (e) {
        if (e.keyCode === 'Enter' || e.keyCode === ' ') {
            sbHeaderClick('changeSampleBrowser');
        }
    });
    ej.base.select('.sb-header-text-right').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeSampleBrowser');
    });
    headerThemeSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeTheme');
    });
    headerThemeSwitch.addEventListener('keydown', function (e) {
        if (e.keyCode === 'Enter' || e.keyCode === ' ') {
            sbHeaderClick('changeTheme');
        }
    });
    themeList.addEventListener('click', changeTheme);
    document.addEventListener('click', sbHeaderClick.bind(this, 'closePopup'));
    settingElement.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('toggleSettings');
    });
    settingElement.addEventListener('keydown', function (e) {
        if (e.keyCode === 'Enter' || e.keyCode === ' ') {
            sbHeaderClick('toggleSettings');
        }
     });
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSearchOverlay();
    });
    searchButton.addEventListener('keydown', function (e) {
        if (e.keyCode === 'Enter' || e.keyCode === ' ') {
            toggleSearchOverlay();
        }
    });
    document.getElementById('settings-popup').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    inputele.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    inputele.addEventListener('keyup', onsearchInputChange);
    setResponsiveElement.addEventListener('click', setMouseOrTouch);
    ej.base.select('#sb-left-back').addEventListener('click', showHideControlTree);
    leftToggle.addEventListener('click', toggleLeftPane);
    leftToggle.addEventListener('keydown', (e) => {
        if (e.keyCode === 'Enter' || e.keyCode === ' ') {
            toggleLeftPane();
        }
    });
    ej.base.select('.sb-mobile-overlay').addEventListener('click', toggleMobileOverlay);
    ej.base.select('.sb-header-settings').addEventListener('click', viewMobilePrefPane);
    ej.base.select('.sb-mobile-setting').addEventListener('click', viewMobilePropPane);
    resetSearch.addEventListener('click', resetInput);
    document.getElementById('open-plnkr').addEventListener('click', function () {
        var plnkrForm = ej.base.select('#stack-form');
        if (plnkrForm) {
            plnkrForm.submit();
        }
    });
    document.getElementById('switch-sb').addEventListener('click', function (e) {
        var target = ej.base.closest(e.target, 'li');
        if (target) {
            var anchor = target.querySelector('a');
            if (anchor) {
                anchor.click();
            }
        }
    });
    ej.base.select('#next-sample').addEventListener('click', onNextButtonClick);
    ej.base.select('#mobile-next-sample').addEventListener('click', onNextButtonClick);
    ej.base.select('#prev-sample').addEventListener('click', onPrevButtonClick);
    ej.base.select('#mobile-prev-sample').addEventListener('click', onPrevButtonClick);
    window.addEventListener('resize', processResize);
    ej.base.select('.sb-right-pane').addEventListener('click', function () {
        if (isTablet && isLeftPaneOpen()) {
            toggleLeftPane();
        }
    });
    // ej.base.select('.copycode').addEventListener('click', copyCode);
}

function copyCode() {
    var copyElem = ej.base.select('.' + cBlock[sourceTab.selectedItem]);
    var textArea = ej.base.createElement('textArea');
    textArea.textContent = copyElem.textContent.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    ej.base.detach(textArea);
    ej.base.select('.copy-tooltip').ej2_instances[0].close();
}
function rendercopycode() {
    var ele = ej.base.createElement('div', { className: 'copy-tooltip', innerHTML: '<div class="e-icons copycode"></div>' });
    document.getElementById('sb-source-tab').appendChild(ele);
    ej.base.select('.copycode').addEventListener('click', copyCode);
    var copiedTooltip = new ej.popups.Tooltip({ content: 'Copied to clipboard ', position: 'BottomCenter', opensOn: 'Click', closeDelay: 500 }, '.copy-tooltip');
}


function setSbLink() {
    var hrefLink = location.hash.split('/').slice(1);
    var href = location.href = '#/' + selectedTheme + '/' + hrefLink.slice(1).join('/');
    var link = href.match(urlRegex);
    var sample = href.match(sampleRegex);
    for (var i = 0, len = sbArray.length; i < len; i++) {
        var sb = sbArray[i];
        var ele = ej.base.select('#' + sb);
        if (sb === 'aspnetcore' || sb === 'aspnetmvc') {
            ele.href = sb === 'aspnetcore' ? 'https://ej2.syncfusion.com/aspnetcore/' : 'https://ej2.syncfusion.com/aspnetmvc/';

        } else if (sb === 'nextjs') {
            const defaultSamplePath = sample[1].includes('grid/grid-overview') ? sample[1].split('/')[0] + '/grid/overview' : sample[1];
            ele.href = 'https://ej2.syncfusion.com/nextjs/demos/' + defaultSamplePath;
        }
        else if (sb === 'blazor') {
            ele.href = 'https://blazor.syncfusion.com/demos/';
        }
        else if (sb === 'react' && location.href.includes('grid/grid-overview.html')) {
            ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) : ('https://ej2.syncfusion.com/')) + 'react/demos/#/' + selectedTheme + '/grid/overview';
        } else {
            ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) :
                ('https://ej2.syncfusion.com/')) + (sbObj[sb] ? (sb + '/') : '') +
                'demos/#/' + (sample ? (sample[1] + (sb !== 'typescript' ? '' : '.html')) : '');
        }


    }
}

function changeMouseOrTouch(str) {
    var activeEle = setResponsiveElement.querySelector('.active');
    if (activeEle) {
        activeEle.classList.remove('active');
    }
    if (str === 'mouse') {
        document.body.classList.remove('e-bigger');
    } else {
        document.body.classList.add('e-bigger');
    }
    setResponsiveElement.querySelector('#' + str).classList.add('active');
}

function loadTheme(theme) {
    theme = themesToRedirect.indexOf(theme) !== -1 ? 'tailwind3' : theme;
    theme =  theme.includes('bootstrap5') ? theme.replace('bootstrap5', 'bootstrap5.3') : theme;
    var body = document.body;
    if (body.classList.length > 0) {
        for (var themeItem in themeCollection) {
            body.classList.remove(themeCollection[themeItem]);
            body.classList.remove(themeCollection[themeItem] + '-dark');
        }
    }
    body.classList.add(theme);
    if (darkIgnore.indexOf(theme) !== -1) {
        themeDarkButton.style.display = "none";
        document.getElementById("mobiledarkswitch").style.display = "none";
    }
    if (!isMobile) {
        if (!theme.includes('-dark')) {
            darkButton.innerHTML = "DARK";
            document.getElementById("dark-icon").style.display = "inline-block";
            themeList.querySelector('.active').classList.remove('active'); 
            theme== 'bootstrap5.3'?themeList.querySelector('#bootstrap5').classList.add('active'): 
                themeList.querySelector('#' + theme).classList.add('active');
        }
        else {
            darkButton.innerHTML = "LIGHT";
            document.getElementById("light-icon").style.display = "inline-block";
            themeList.querySelector('.active').classList.remove('active');
            theme== 'bootstrap5.3-dark'? themeList.querySelector('#bootstrap5').classList.add('active'):
                themeList.querySelector('#' + theme.replace('-dark', "")).classList.add('active');
        }
    }
    var doc = document.getElementById('themelink');
    doc.setAttribute('href','./dist/' + theme + '.css');
    var ajax = new ej.base.Ajax('./dist/' + theme + '.css', 'GET', true);
    ajax.send().then(function (result) {
        selectedTheme = theme;
        selectedTheme = selectedTheme === "bootstrap5.3" ? 'bootstrap5' : selectedTheme === "bootstrap5.3-dark" ? "bootstrap5-dark" : selectedTheme;
        renderLeftPaneComponents();
        renderSbPopups();
        bindEvents();
        if (isTablet || isMobile) {
            contentTab.hideTab(2);
        }
        processDeviceDependables();
        addRoutes(samplesList);
        routeDefault();
        if (isTablet && isLeftPaneOpen()) {
            toggleLeftPane();
        }
        elasticlunr.clearStopWords();
        searchInstance = elasticlunr.Index.load(window.searchIndex);
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
        if (reloadPageForRedirection == true) {
            window.location.reload();
        }
    });
}

function toggleMobileOverlay() {

    if (!ej.base.select('.sb-mobile-right-pane').classList.contains('sb-hide')) {
        toggleRightPane();
    }
}

function removeMobileOverlay() {
    ej.base.select('.sb-mobile-overlay').classList.add('sb-hide');
}

function isLeftPaneOpen() {
    return sidebar.isOpen;
}

function isVisible(elem) {
    return !ej.base.select(elem).classList.contains('sb-hide');
}

function setLeftPaneHeight() {
    var leftPane = ej.base.select('.sb-left-pane');
    leftPane.style.height = isMobile ? (document.body.offsetHeight + 'px') : '';
}

function toggleLeftPane() {
    var reverse = sidebar.isOpen;
    ej.base.select('#left-sidebar').classList.remove('sb-hide');
    leftToggle.setAttribute('aria-expanded', (!reverse).toString());
    if (!reverse) {
        leftToggle.classList.add('toggle-active');
    } else {
        leftToggle.classList.remove('toggle-active');
    }

    if (sidebar) {
        reverse = sidebar.isOpen;
        if (reverse) {
            sidebar.hide();
        } else {
            sidebar.show();
        }
    }

}

function cusResize() {
    var event;
    if (typeof (Event) === 'function') {
        event = new Event('resize');
    } else {
        event = document.createEvent('Event');
        event.initEvent('resize', true, true);
    }
    window.dispatchEvent(event);
}

function toggleRightPane() {
    themeDropDown.index = themeCollection.indexOf(selectedTheme);
    ej.base.select('#right-sidebar').classList.remove('sb-hide');
    if (isMobile) {
        settingsidebar.toggle();
    }
}


function viewMobilePrefPane() {
    ej.base.select('.sb-mobile-prop-pane').classList.add('sb-hide');
    ej.base.select('.sb-mobile-preference').classList.remove('sb-hide');
    toggleRightPane();
}

function viewMobilePropPane() {
    ej.base.select('.sb-mobile-preference').classList.add('sb-hide');
    ej.base.select('.sb-mobile-prop-pane').classList.remove('sb-hide');
    toggleRightPane();
}

function getSampleList() {
    if (ej.base.Browser.isDevice) {
        var tempList = ej.base.extend([], window.samplesList);
        var sampleList = [];
        for (var i = 0; i < tempList.length; i++) {
            var temp = tempList[i];
            if (temp.hideOnDevice == true) {
                continue;
            }
            var data = new ej.data.DataManager(temp.samples);
            temp.samples = data.executeLocal(new ej.data.Query().where('hideOnDevice', 'notEqual', true));
            sampleList = sampleList.concat(temp);
        }
        return sampleList;
    }
    return window.samplesList;
}

function renderLeftPaneComponents() {
    samplesTreeList = getTreeviewList(samplesList);
    var sampleTreeView = new ej.navigations.TreeView({
        fields: {
            dataSource: samplesTreeList,
            id: 'id',
            parentID: 'pid',
            text: 'name',
            hasChildren: 'hasChild',
            htmlAttributes: 'url'
        },
        nodeClicked: controlSelect,
        nodeTemplate: '<div><span class="tree-text">${name}</span>' +
            '${if(type === "update")}<span class="e-badge sb-badge e-samplestatus ${type} tree tree-badge">Updated</span>' +
            '${else}${if(type)}<span class="e-badge sb-badge e-samplestatus ${type} tree tree-badge">${type}</span>${/if}${/if}</div>'
    }, '#controlTree');
    var controlList = new ej.lists.ListView({
        dataSource: controlSampleData[location.hash.split('/')[2]] || controlSampleData.grid,
        fields: { id: 'uid', text: 'name', groupBy: 'order', htmlAttributes: 'data' },
        select: controlSelect,
        template: '<div class="e-text-content ${if(type)}e-icon-wrapper${/if}"> <span class="e-list-text">${name}' +
            '</span>${if(type === "update")}<span class="e-badge sb-badge e-samplestatus ${type}">Updated</span>' +
            '${else}${if(type)}<span class="e-badge sb-badge e-samplestatus ${type}">${type}</span>${/if}${/if}' +
            '${if(directory)}<div class="e-icons e-icon-collapsible"></div>${/if}</div>',
        groupTemplate: '${if(items[0]["category"])}<div class="e-text-content">' +
            '<span class="e-list-text">${items[0].category}</span>' +
            '</div>${/if}',
        actionComplete: setSelectList
    }, '#controlList');
}

function getTreeviewList(list) {
    var id;
    var pid;
    var tempList = [];
    var category = '';
    for (var i = 0; i < list.length; i++) {
        if (category !== list[i].category) {
            category = list[i].category;
            tempList = tempList.concat({ id: i + 1, name: list[i].category, hasChild: true, expanded: true });
            pid = i + 1;
            id = pid;
        }
        id += 1;
        tempList = tempList.concat({
            id: id,
            pid: pid,
            name: list[i].name,
            type: list[i].type,
            url: {
                'data-path': '/' + list[i].directory + '/' + list[i].samples[0].url + '.html',
                'control-name': list[i].directory,
            }
        });
        controlSampleData[list[i].directory] = getSamples(list[i].samples);
    }
    return tempList;
}

function getSamples(samples) {
    var tempSamples = [];
    for (var i = 0; i < samples.length; i++) {
        tempSamples[i] = samples[i];
        tempSamples[i].data = { 'sample-name': samples[i].url, 'data-path': '/' + samples[i].dir + '/' + samples[i].url + '.html' };
    }
    return tempSamples;
}

function controlSelect(arg) {
    var path = (arg.node || arg.item).getAttribute('data-path');
    var curHashCollection = '/' + location.hash.split('/').slice(2).join('/');
    if (path) {
        controlListRefresh(arg.node || arg.item);
        if (path !== curHashCollection) {
            sampleOverlay();
            var theme = location.hash.split('/')[1] || 'tailwind3';
            if (arg.item && ((isMobile && !ej.base.select('#left-sidebar').classList.contains('sb-hide')) ||
                ((isTablet || (ej.base.Browser.isDevice && isPc)) && isLeftPaneOpen()))) {
                toggleLeftPane();
            }
            window.hashString = '#/' + theme + path;
            setTimeout(function () { location.hash = '#/' + theme + path; }, 600);
        }
    }
}

function controlListRefresh(ele) {
    var samples = controlSampleData[ele.getAttribute('control-name')];
    if (samples) {
        var listView = ej.base.select('#controlList').ej2_instances[0];
        listView.dataSource = samples;
        showHideControlTree();
    }
}

function showHideControlTree() {
    var controlTree = ej.base.select('#controlTree');
    var controlList = ej.base.select('#controlSamples');
    var reverse = ej.base.select('#controlTree').style.display === 'none';
    if (reverse) {
        viewSwitch(controlList, controlTree, reverse);

    } else {
        viewSwitch(controlTree, controlList, reverse);
    }
}

function viewSwitch(from, to, reverse) {
    var anim = new ej.base.Animation({ duration: 500, timingFunction: 'ease' });
    var controlTree = ej.base.select('#controlTree');
    var controlList = ej.base.select('#controlList');
    controlTree.style.overflowY = 'hidden';
    controlList.classList.remove('e-view');
    controlList.classList.remove('sb-control-list-top');
    controlList.classList.add('sb-adjust-juggle');
    to.style.display = '';
    anim.animate(from, {
        name: reverse ? 'SlideRightOut' : 'SlideLeftOut',
        end: function () {
            controlTree.style.overflowY = 'auto';
            from.style.display = 'none';
            controlList.classList.add('e-view');
            controlList.classList.add('sb-control-list-top');
            controlList.classList.remove('sb-adjust-juggle');
        }
    });
    anim.animate(to, { name: reverse ? 'SlideLeftIn' : 'SlideRightIn' });
}

function setSelectList() {
    var hString = window.hashString || location.hash;
    var hash = hString.split('/');
    var list = ej.base.select('#controlList').ej2_instances[0];
    var control = ej.base.select('[control-name="' + hash[2] + '"]');
    if (control) {
        var data = list.dataSource;
        var samples = controlSampleData[control.getAttribute('control-name')];
        if (JSON.stringify(data) !== JSON.stringify(samples)) {
            list.dataSource = samples;
            list.dataBind();
        }
        var selectSample = ej.base.select('[sample-name="' + hash.slice(-1)[0].split('.html')[0] + '"]');
        if (selectSample) {
            if (ej.base.select('#controlTree').style.display !== 'none') {
                showHideControlTree();
            }
            list.selectItem(selectSample);
            selectSample.scrollIntoView({ block: "nearest" });
        }
    } else {
        showHideControlTree();
        list.selectItem(ej.base.select('[sample-name="grid-overview"]'));
    }
}

function toggleButtonState(id, state) {
    var ele = document.getElementById(id);
    var mobileEle = document.getElementById('mobile-' + id);
    ele.disabled = state;
    mobileEle.disabled = state;
    if (state) {
        mobileEle.classList.add('e-disabled');
        ele.classList.add('e-disabled');
    } else {
        mobileEle.classList.remove('e-disabled');
        ele.classList.remove('e-disabled');
    }
}

function setPropertySectionHeight() {
    if (!isTablet && !isMobile) {
        var propertypane = ej.base.select('.property-section');
        var ele = document.querySelector('.control-section');
        if (ele && propertypane) {
            ele.classList.add('sb-property-border');
        } else {
            ele.classList.remove('sb-property-border');
        }
    }
}

function routeDefault() {
    crossroads.addRoute('', function () {
        window.location.href = '#/' + selectedTheme + '/grid/gridoverview.html';
        isInitRedirected = true;
    });
    crossroads.bypassed.add(function (request) {
        var hash = request.split('.html')[0].split('/');
        if (samplePath.indexOf(hash.slice(1).join('/')) === -1) {
            location.hash = '#/' + hash[0] + '/' + (defaultSamples[hash[1]] || 'grid/gridoverview.html');
            isInitRedirected = true;
            reloadPageForRedirection = true;
        }
    });
}

function destroyControls() {
    var elementlist = ej.base.selectAll('.e-control', document.getElementById('control-content'));
    for (var i = 0; i < elementlist.length; i++) {
        var control = elementlist[i];
        if (control.ej2_instances) {
            for (var a = 0; a < control.ej2_instances.length; a++) {
                var instance = control.ej2_instances[a];
                if (instance.element && document.contains(instance.element)){
                    instance.destroy();
                }
            }
        }

    }
}

function loadScriptfile(path) {
    var scriptEle = document.querySelector('script[src="' + path + '"]');
    var doFun;
    var p2 = new Promise(function (resolve, reject) {
        doFun = resolve;
    });
    if (!scriptEle) {
        scriptEle = document.createElement('script');
        scriptEle.setAttribute('type', 'text/javascript');
        scriptEle.setAttribute('src', path);
        scriptEle.onload = doFun;
        if (typeof scriptEle !== 'undefined') {
            document.getElementsByTagName('head')[0].appendChild(scriptEle);
        }
    } else {
        doFun();
    }
    return p2;
}

function getExecFunction(sample) {
    if (execFunction.hasOwnProperty(sample)) {
        return execFunction[sample];
    } else {
        execFunction[sample] = window.default;
        return execFunction[sample];
    }
}

function errorHandler(error) {
    document.getElementById('control-content').innerHTML = error ? error : 'Not Available';
    ej.base.select('#control-content').classList.add('error-content');
    removeOverlay();
}

function plunker(results) {
    var plnkr = JSON.parse(results);
    var prevForm = ej.base.select('#stack-form');
    if (prevForm) {
        ej.base.detach(prevForm);
    }
    var form = ej.base.createElement('form');
    var res = 'https://stackblitz.com/run';
    form.setAttribute('action', res);
    form.setAttribute('method', 'post');
    form.setAttribute('target', '_blank');
    form.id = 'stack-form';
    form.style.display = 'none';
    document.body.appendChild(form);
    var plunks = Object.keys(plnkr);
    for (var x = 0; x < plunks.length; x++) {
        createStackInput('project[files][' + plunks[x] + ']', plnkr[plunks[x]], form);
    }
    createStackInput('project[template]', 'javascript', form);
    createStackInput('project[description]', 'Essential JS 2 Sample', form);
    createStackInput('project[settings]', '{"compile":{"clearConsole":true}}', form);
}
function createStackInput(name, value, form) {
    var input = ej.base.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', name);
    input.setAttribute('value', value.replace(/{{theme}}/g, selectedTheme).replace(/{{ripple}}/,
        (selectedTheme.indexOf('material') !== -1 ) ? 'ej.base.enableRipple(true);\n' : ''));
    form.appendChild(input);
}

function addRoutes(samplesList) {
    var loop1 = function (node) {
        defaultSamples[node.directory] = node.directory + '/' + node.samples[0].url + '.html';
        var dataManager = new ej.data.DataManager(node.samples);
        var samples = dataManager.executeLocal(new ej.data.Query().sortBy('order', 'ascending'));
        var loop2 = function (subNode) {
            var control = node.directory;
            var sample = subNode.url;
            samplePath = samplePath.concat(control + '/' + sample);
            var sampleName = node.name + ' / ' + ((node.name !== subNode.category) ?
                (subNode.category + ' / ') : '') + subNode.name;
            var selectedTheme = location.hash.split('/')[1] ? location.hash.split('/')[1] : 'tailwind3';
            var urlString = '/' + selectedTheme + '/' + control + '/' + sample + '.html';
            samplesAr.push('#' + urlString);
            crossroads.addRoute(urlString, function () {
                var dataSourceLoad = document.getElementById(node.dataSourcePath);
                if (node.dataSourcePath && !dataSourceLoad) {
                    var dataAjax = new ej.base.Ajax(node.dataSourcePath, 'GET', true);
                    dataAjax.send().then(function (result) {
                        var ele = ej.base.createElement('script', { id: node.dataSourcePath, innerHTML: result });
                        document.getElementsByTagName('head')[0].appendChild(ele);
                        onDataSourceLoad(node, subNode, control, sample, sampleName);
                    });
                } else {
                    onDataSourceLoad(node, subNode, control, sample, sampleName);
                }


            });
        };
        for (var i = 0; i < samples.length; i++) {
            var subNode = samples[i];
            loop2(subNode);
        }
    };
    for (var i = 0; i < samplesList.length; i++) {
        var node = samplesList[i];
        loop1(node);
    }
    if (ej.base.Browser.isDevice) {
        if (location.hash && samplesAr.indexOf(location.hash) == -1) {
            var toastObj = new ej.notifications.Toast({
                position: {
                    X: 'Right'
                }
            });
            toastObj.appendTo('#sb-home');
            setTimeout(function () {
                toastObj.show({
                    content: location.hash.split('/')[2] + 'component not supported in mobile device'
                });
            }, 200);
        }
    }
}

function onDataSourceLoad(node, subNode, control, sample, sampleName) {
    var controlID = node.uid;
    var sampleID = subNode.uid;
    document.getElementById('open-plnkr').disabled = true;
    var openNew = ej.base.select('#openNew');
    if (openNew) {
        openNew.href = location.href.split('#')[0] +  node.directory + '/' + subNode.url + '/';
    }
    setSbLink();
    const desktopSettings = ej.base.select('.sb-desktop-setting');
    if (!ej.base.Browser.isDevice && desktopSettings) {
        desktopSettings.style.display = !(/^ai-assistview/).test(control) && aiControlRegex.test(control) ? 'none' : '';
    }
    var ajaxFile = [];
    var nameFile = [];
    var tabObj = [];
    var jsFile = new ej.base.Ajax('src/' + control + '/' + sample + '.js', 'GET', false);
    var jsname = sample + '.js';

    var htmlFile = new ej.base.Ajax('src/' + control + '/' + sample + '.html', 'GET', false);
    var htmlFileNme = sample + '.html';

    ajaxFile = [jsFile, htmlFile];
    nameFile = [jsname, htmlFileNme];
    if (subNode.sourceFiles) {
        ajaxFile.splice(0);
        nameFile.splice(0);
        var sourcefiles = subNode.sourceFiles;
        for (var i = 0; i < sourcefiles.length; i++) {
            ajaxFile.push(new ej.base.Ajax(sourcefiles[i].path, 'GET', false));
            nameFile.push(sourcefiles[i].displayName);

        }
    }
    var subfile = 0;
    var content;
    for (var file = 0; file < ajaxFile.length; file++) {

        ajaxFile[file].send().then(function (value) {  // jshint ignore:line
            var fileName = nameFile[subfile];
            if (fileName && fileName.indexOf('.html') > 0) {
                content = getStringWithOutDescription(value.toString(), /(\'|\")description/g);
                content = getStringWithOutDescription(content.toString(), /(\'|\")action-description/g);
            }
            content = fileName.indexOf('.html') > 0 ? content.replace(/@section (ActionDescription|Description){[^}]*}/g, '').replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

            tabObj.push({
                header: { text: nameFile[subfile] },
                data: content,
                content: nameFile[subfile]
            });
            subfile++;
        });

    }
    sourceTabItems = tabObj;
    var ajaxHTML = new ej.base.Ajax('src/' + control + '/' + sample + '.html', 'GET', true);
    var p1 = ajaxHTML.send();
    var jsScriptName = sample;
    if ((aiControlRegex).test(control) && aiControlRegex.test(sample)) {
        jsScriptName = sample.split('ai-')[1];
    }
    var p2 = loadScriptfile('src/' + control + '/' + jsScriptName + '.js');
    var ajaxJs = new ej.base.Ajax('src/' + control + '/' + jsScriptName + '.js', 'GET', true);
    sampleNameElement.innerHTML = node.name;
    contentTab.selectedItem = 0;
    breadCrumbComponent.innerHTML = node.name;
    if (node.name !== subNode.category) {
        breadCrumbSubCategory.innerHTML = subNode.category;
        breadCrumbSubCategory.style.display = '';
        breadCrumSeperator.style.display = '';
    } else {
        breadCrumbSubCategory.style.display = 'none';
        breadCrumSeperator.style.display = 'none';
    }
    breadCrumbSample.innerHTML = subNode.name;
    // for (var k = 0; k < 2; k++) {
    //     var header = getSourceTabHeader(k);
    //     if (header) {
    //         header.innerHTML = sample + (k ? '.html' : '.js');
    //     }
    // }
    var title = document.querySelector('title');
    title.innerHTML = node.name + ' · ' + subNode.name + ' · Syncfusion JavaScript (ES5) UI Controls ';
    // ajaxJs.send().then(function (value) {
    //     document.querySelector('.js-source-content').innerHTML = value.toString().replace(/</g, '&lt;').replace(/\>/g, '&gt;');
    //     hljs.highlightBlock(document.querySelector('.js-source-content'));
    // });
    if (!(aiControlRegex).test(control) || (/^ai-assistview/).test(control)) {
        var plunk = new ej.base.Ajax('src/' + control + '/' + sample + '-stack.json', 'GET', true);
        var p3 = plunk.send();

        p3.then(function (result) {
            document.getElementById('open-plnkr').disabled = false;
            plunker(result);
        });
    }
    Promise.all([
        p1,
        p2
    ]).then(function (results) {
        var htmlString = results[0].toString();
        destroyControls();
        currentControlID = controlID;
        currentSampleID = sampleID;
        currentControl = node.directory;
        var curIndex = samplesAr.indexOf(location.hash);
        var samLength = samplesAr.length - 1;
        if (curIndex === samLength) {
            toggleButtonState('next-sample', true);
        } else {
            toggleButtonState('next-sample', false);
        }
        if (curIndex === 0) {
            toggleButtonState('prev-sample', true);
        } else {
            toggleButtonState('prev-sample', false);
        }
        ej.base.select('#control-content').classList.remove('error-content');
        document.getElementById('control-content').innerHTML = htmlString;
        var controlEle = document.querySelector('.control-section');
        var controlString = controlEle.innerHTML;
        controlEle.innerHTML = '';
        controlEle.appendChild(ej.base.createElement('div', { className: 'control-wrapper', innerHTML: controlString }));
        renderPropertyPane('#property');
        renderDescription();
        renderActionDescription();
        var htmlCode = ej.base.createElement('div', { innerHTML: htmlString });
        var description = htmlCode.querySelector('#description');
        if (description) {
            ej.base.detach(description);
        }
        var actionDesc = htmlCode.querySelector('#action-description');
        if (actionDesc) {
            ej.base.detach(actionDesc);
        }
        // var htmlCodeSnippet = htmlCode.innerHTML.replace(/&/g, '&amp;')
        //     .replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        // document.querySelector('.html-source-content').innerHTML = htmlCodeSnippet;
        // hljs.highlightBlock(document.querySelector('.html-source-content'));
        getExecFunction(control + sample)();
        window.navigateSample();
        isExternalNavigation = defaultTree = false;
        checkApiTableDataSource();
        setPropertySectionHeight();
        removeOverlay();
        var mobilePropPane = ej.base.select('.sb-mobile-prop-pane .property-section');
        if (mobilePropPane) {
            ej.base.detach(mobilePropPane);
        }
        var propPanel = ej.base.select('#control-content .property-section');
        if (isMobile) {
            if (propPanel) {
                ej.base.select('.sb-mobile-setting').classList.remove('sb-hide');
                ej.base.select('.sb-mobile-prop-pane').appendChild(propPanel);
            } else {
                ej.base.select('.sb-mobile-setting').classList.add('sb-hide');
            }
        }
    }).catch(function (reason) {
        errorHandler(reason.message);
    });
}

function removeOverlay() {
    document.body.setAttribute('aria-busy', 'false');
    sbContentOverlay.classList.add('sb-hide');
    sbRightPane.classList.remove('sb-right-pane-overlay');
    sbHeader.classList.remove('sb-right-pane-overlay');
    mobNavOverlay(false);
    if (!sbBodyOverlay.classList.contains('sb-hide')) {
        sbBodyOverlay.classList.add('sb-hide');
    }
    if (!isMobile) {
        sbRightPane.scrollTop = 0;
    } else {
        sbRightPane.scrollTop = 74;
    }
    if (cultureDropDown.value == "ar") {
        changeRtl(true);
    }

}

function sampleOverlay() {
    document.body.setAttribute('aria-busy', 'true');
    sbHeader.classList.add('sb-right-pane-overlay');
    sbRightPane.classList.add('sb-right-pane-overlay');
    mobNavOverlay(true);
    sbContentOverlay.classList.remove('sb-hide');
}

function overlay() {
    sbHeader.classList.add('sb-right-pane-overlay');
    sbBodyOverlay.classList.remove('sb-hide');
}

function mobNavOverlay(isOverlay) {
    if (ej.base.isDevice) {
        var mobileFoorter = ej.base.select('.sb-mobilefooter');
        if (isOverlay) {
            mobileFoorter.classList.add('sb-right-pane-overlay');
        } else {
            mobileFoorter.classList.remove('sb-right-pane-overlay');
        }
    }
}

function checkSampleLength(directory) {
    var data = new ej.data.DataManager(samplesList);
    var controls = data.executeLocal(new ej.data.Query().where('directory', 'equal', directory));
    return controls[0].samples.length > 1;
}

function parseHash(newHash, oldHash) {
    var newTheme = newHash.split('/')[0];
    var control = newHash.split('/')[1];
    if (newTheme !== selectedTheme && themeCollection.indexOf(newTheme) !== -1) {
        location.reload();
        crossroads.parse(newHash);
    }
    /* if (newHash.length && !ej.base.select('#' + control + '-common') && checkSampleLength(control)) {
         var scriptElement = document.createElement('script');
         scriptElement.src = 'src/' + control + '/common.js';
         scriptElement.id = control + '-common';
         scriptElement.type = 'text/javascript';
         scriptElement.onload = function () {
             crossroads.parse(newHash);
         };
         document.getElementsByTagName('head')[0].appendChild(scriptElement);
     }*/

    crossroads.parse(newHash);
}

// function getSourceTabHeader(index) {
//     return document.querySelectorAll('.sb-source-code-section>.e-tab-header .e-tab-text')[index];
// }

function processDeviceDependables() {
    if (ej.base.Browser.isDevice) {
        ej.base.select('.sb-desktop-setting').classList.add('sb-hide');
    } else {
        ej.base.select('.sb-desktop-setting').classList.remove('sb-hide');
    }
}

function checkTabHideStatus() {
    if (!intialLoadCompleted) {
        content.hideTab(1);
        intialLoadCompleted = true;
    }
}

function renderPropertyPane(ele) {
    var contentEle = ej.base.select('#control-content');
    var elem = contentEle.querySelector(ele);
    var title;
    if (!elem) {
        return;
    }
    title = elem.getAttribute('title');
    var parentEle = elem.parentElement;
    elem = ej.base.detach(elem);
    elem.classList.add('property-panel-table');
    var parentPane = ej.base.createElement('div', {
        className: 'property-panel-section',
        innerHTML: "<div class=\"property-panel-header\">" + title + "</div><div class=\"property-panel-content\"></div>"
    });
    parentPane.children[1].appendChild(elem);
    parentEle.appendChild(parentPane);
}

function renderDescription() {
    var header;
    var description = ej.base.select('#description', ej.base.select('#control-content'));
    var descElement = ej.base.select('.description-section');
    var iDescription = ej.base.select('#description', descElement);
    if (iDescription) {
        ej.base.detach(iDescription);
    }
    if (description) {
        descElement.appendChild(description);
    }
}

function renderActionDescription() {
    var aDescription = ej.base.select('#action-description', ej.base.select('#control-content'));
    var aDescElem = ej.base.select('.sb-action-description');
    if (aDescription) {
        aDescElem.innerHTML = '';
        aDescElem.appendChild(aDescription);
        aDescElem.style.display = '';
    } else if (aDescElem) {
        aDescElem.style.display = 'none';
    }
    var loadEle = document.getElementById('sb-content');
     if (loadEle.ej2_instances[0])
        loadEle.ej2_instances[0].tbObj.refreshOverflow();
}
function getStringWithOutDescription(code, descRegex) {
    var lines = code.split('\n');
    var desStartLine = null;
    var desEndLine = null;
    var desInsideDivCnt = 0;
    for (var i = 0; i < lines.length; i++) {
        var curLine = lines[i];
        if (desStartLine) {
            if (/<div/g.test(curLine)) {
                desInsideDivCnt = desInsideDivCnt + 1;
            }
            if (desInsideDivCnt && /<\/div>/g.test(curLine)) {
                desInsideDivCnt = desInsideDivCnt - 1;
            } else if (!desEndLine && /<\/div>/g.test(curLine)) {
                desEndLine = i + 1;
            }
        }
        if (descRegex.test(curLine)) {
            desStartLine = i;
        }
    }
    if (desEndLine && desStartLine) {
        lines.splice(desStartLine, desEndLine - desStartLine);
    }
    return lines.join('\n');
}

function loadJSON() {
    var switchText = localStorage.getItem('ej2-switch') || 'mouse';
    if (ej.base.Browser.isDevice || window.screen.width <= 850) {
        switchText = 'touch';
    }
    setLeftPaneHeight();
    if (isMobile) {
        ej.base.select('#left-sidebar').classList.add('sb-hide');
        ej.base.select('.sb-left-footer-links').appendChild(ej.base.select('.sb-footer-left'));
        leftToggle.classList.remove('toggle-active');
    }
    /**
     * Tab View
     */
    if (isTablet || (ej.base.Browser.isDevice && isPc)) {
        leftToggle.classList.remove('toggle-active');
        ej.base.select('.sb-right-pane').classList.add('control-fullview');
    }

    if (isTablet || ej.base.Browser.isDevice) {
        ej.base.select('.sb-responsive-section').classList.add('sb-active');
    }

    overlay();
    changeMouseOrTouch(switchText);
    localStorage.removeItem('ej2-switch');
    ej.base.enableRipple(selectedTheme.indexOf('material') !== -1 || !selectedTheme);
    loadTheme(selectedTheme);
}
loadJSON();
