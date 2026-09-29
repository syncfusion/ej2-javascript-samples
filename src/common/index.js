var cBlock = ['sb-src-code.hljs.javascript', 'sb-src-code.hljs.xml'];
var switcherPopup;
var themeSwitherPopup;
var sdkPopup;
var openedPopup;
var searchPopup;
var settingsPopup;
var sidebar;
var settingsidebar;
var preventToggle;
var prevAction;
var searchInstance;
var headerThemeSwitch = document.getElementById('header-theme-switcher');
var headerSdkSwitch = document.getElementById('header-sdk-switcher');
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
var aiRegex = /ai-(?!assistview\b)[a-z-]+/;
var sampleRegex = /#\/(([^\/]+\/)+[^\/\.]+)/;
let toastObjt = null;
let isToastVisible = false;
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
var selectedTheme = location.hash.split('/')[1] || getThemeDefault();
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
var wcagTemplate = '<span class="sb-wcag-text">WCAG 2.2</span>';
var plnrTemplate = '<span class="sb-icons sb-icons-plnkr" role="presentation"></span><span class="sb-plnkr-text">Edit in StackBlitz</span>';
var contentToolbarTemplate = '<div class="sb-desktop-setting"><button id="sf-wcag-btn" role="tab" aria-label="WCAG 2.2 Accessibility Report" tabindex="0" class="sb-custom-item sb-plnr-section sb-wcag-btn">' +
    wcagTemplate + '</button>' + hsplitter + '<button id="open-plnkr" role="tab" aria-label="Open Edit in StackBlitz" tabindex="0" class="sb-custom-item sb-plnr-section">' +
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
var sdkDropDown;
var demoSection = ej.base.select('.sb-demo-section');
var newYear= new Date().getFullYear();
var copyRight= document.querySelector('.sb-footer-copyright');
copyRight.innerHTML = "Copyright © 2001 - " + newYear + " Syncfusion<sup>®</sup> Inc.";
ej.base.registerLicense(window.syncfusion_license);
let isUpdatingFromUrl = false;
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

// WCAG button and tooltip will be initialized later after DOM is ready
var wcagButtonInitialized = false;

// Hide the accessibility message for AI samples and on mobile viewports
function toggleAxeMessageVisibility() {
    var wrapper = document.querySelector('.sf-axe-section');
    if (!wrapper) return;

    var hashStr = (location.hash || '').replace(/^#\//, '');
    var hashControl = hashStr.split('/')[1] || '';
    var isAi = aiRegex.test(hashControl);

    wrapper.classList.toggle('sb-hide', isMobile || isAi);
}
toggleAxeMessageVisibility();
// Re-evaluate on hashchange so the message disappears/shows as the user navigates between samples
window.addEventListener('hashchange', toggleAxeMessageVisibility);
// Re-evaluate on resize so a desktop -> mobile switch hides it (and vice versa)
window.addEventListener('resize', toggleAxeMessageVisibility);

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
        change:resizeFunction,
        created: resizeFunction
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

/**
 * Helper function: Get the currently active SDK key from DOM
 */
function getActiveSdk() {
    var activeItem = document.querySelector('#sdklist li.active');
    if (!activeItem) return 'all';
    return activeItem.getAttribute('data-sdk') || 'all';
}

/**
 * SDK Control Map - Explicit definition of which controls belong to each SDK
 * All AI samples live under a single 'ai-grid' tree node (AI-Powered Samples)
 * This map lists individual ai-* controls that belong to each SDK
 */
var sdkControlMap = {
    // 'all' shows everything — no filter applied
    all: [],

    // Grid SDK: Data Grid, Pivot Table, Tree Grid + AI variants
    grid: [
        'grid', 'pivot-table', 'tree-grid',
        'ai-grid', 'ai-pivot-table', 'ai-tree-grid',
    ],

    // Chart SDK: all visualization components + AI Maps
    chart: [
        'chart', 'three-dimension-chart', 'circular-3d-chart', 'stock-chart',
        'arc-gauge', 'circular-gauge', 'heatmap-chart', 'linear-gauge', 'maps',
        'range-navigator', 'smith-chart', 'barcode', 'sparkline', 'treemap',
        'bullet-chart', 'sankey', 'dashboard-layout', 'dashboards',
        'ai-maps',
    ],

    // Scheduler SDK: calendar & date/time pickers + AI Scheduler
    schedule: [
        'schedule', 'calendar', 'datepicker', 'daterangepicker', 'datetimepicker', 'timepicker',
        'ai-schedule',
    ],

    // Gantt SDK: Gantt + Kanban + AI variants
    gantt: [
        'gantt', 'kanban',
        'ai-gantt', 'ai-kanban',
    ],

    // Rich Text Editor SDK
    'rich-text-editor': [
        'rich-text-editor', 'block-editor', 'markdown-editor',
    ],

    // File Manager SDK
    'file-manager': [
        'file-manager',
    ],

    // Diagram SDK
    diagram: [
        'diagram',
        'ai-diagram',
    ]
};

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
    sdkPopup = new ej.popups.Popup(document.getElementById('sdk-popup'), {
        offsetY: 2,
        zIndex: 10012,
        relateTo: document.querySelector('.sdk-wrapper'),
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    sdkPopup.hide();

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
        var selectedControl = data.dir;
        var activeSdk = document.querySelector('#sdklist li.active')
            ? document.querySelector('#sdklist li.active').getAttribute('data-sdk')
            : 'all';
        var currentSdkControls = sdkControlMap[activeSdk] || [];
        if (currentSdkControls.indexOf(selectedControl) === -1) {
            var matchedSdk = 'all';
            // Find which SDK owns this control
            for (var sdkKey in sdkControlMap) {
                if (
                    sdkKey !== 'all' &&
                    sdkControlMap[sdkKey] &&
                    sdkControlMap[sdkKey].indexOf(selectedControl) !== -1
                ) {
                    matchedSdk = sdkKey;
                    break;
                }
            }
            localStorage.setItem('selectedSdk', matchedSdk);
            var sdkList = document.getElementById('sdklist');
            if (sdkList) {
                sdkList.querySelectorAll('li').forEach(function (li) {
                    li.classList.remove('active');
                });
                var sdkItem = sdkList.querySelector('[data-sdk="' + matchedSdk + '"]');
                if (sdkItem) {
                    sdkItem.classList.add('active');
                }
                var targetLi =sdkList.querySelector('[data-sdk="' + matchedSdk + '"]') ||
                    sdkList.querySelector('li[data-sdk="all"]');
                var sdkTextSpan = document.querySelector('#sb-sdk-text .sb-header-text-left');
                if (sdkTextSpan && targetLi) {
                    var switchText = targetLi.querySelector('.switch-text');
                    var selectedText = switchText? switchText.textContent: 'ALL DEMOS';
                    sdkTextSpan.textContent =matchedSdk === 'all'? 'ALL DEMOS'
                            : selectedText.toUpperCase();
                }
            }
            if (sdkDropDown) {
                sdkDropDown.value = matchedSdk;
            }
            applySdkFilter(matchedSdk);
        }
        if (location.hash !== hashval) {
            sampleOverlay();
            window.hashString = hashval;
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
    sdkPopup.hide();
    themeDropDown = new ej.dropdowns.DropDownList({
        index: themeCollection.indexOf(selectedTheme.split('-')[0]),
        change: function (e) { switchTheme(e.value); }
    });
    themeDropDown.appendTo('#sb-setting-theme');
    sdkDropDown = new ej.dropdowns.DropDownList({
        select: handleSdkSelectionMobile
    });
    sdkDropDown.appendTo('#sb-setting-sdk');
    themeModeDropDown = new ej.dropdowns.DropDownList({
        index: selectedTheme.includes('-dark') ? 1 : 0,
        change: function (e) {
              if (isUpdatingFromUrl) {
                return;}
              darkSwitch() }
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
    
    // Initialize WCAG button tooltip
    let axeTooltip = new ej.popups.Tooltip({
        content: 'Supports WCAG and Section 508 standards. View the accessibility report for this demo\'s compliance details.',
        position: 'BottomCenter',
        width: 280,
        cssClass: 'sb-axe-tooltip'
    });
    axeTooltip.appendTo('#sf-wcag-btn');
    
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
        case 'changeSdk':
            headerSdkSwitch.classList.toggle('active');
            setPressedAttribute(headerSdkSwitch);
            curPopup = sdkPopup;
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
        headerSdkSwitch.classList.remove('active');
        settingElement.classList.remove('active');
        setPressedAttribute(headerThemeSwitch);
        setPressedAttribute(headerSdkSwitch);
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
  var target = ej.base.closest(e.target, 'li');
  if (!target || !target.id) return;

  var themeName = target.id;

  //Switch theme via hash logic
  switchTheme(themeName);

  //Update image editor component if present
  var imageEditorElem = document.querySelector(".e-image-editor");
  if (imageEditorElem) {
    var imageEditor = ej.base.getComponent(imageEditorElem, 'image-editor');
    if (imageEditor) {
      imageEditor.theme = themeName;
    }
  }
}

function switchTheme(theme) {
  var hash = location.hash.split('/');
  var currentTheme = hash[1] || '';

  // Append -dark if current theme was dark and the new one isn't ignored
  var isDarkMode = currentTheme.includes('-dark');
  if (isDarkMode && darkIgnore.indexOf(theme) === -1 && !theme.includes('-dark')) {
    theme += '-dark';
  }

  // Avoid redundant updates
  if (currentTheme !== theme) {
    //Normalize to bootstrap5 in URL, loading handled internally as bootstrap5.3
    hash[1] = theme === 'bootstrap5.3' ? 'bootstrap5' :
              theme === 'bootstrap5.3-dark' ? 'bootstrap5-dark' :
              theme;
    location.hash = hash.join('/');
  }
}

var themeSwitched = false;
if (themeDarkButton) {
  themeDarkButton.addEventListener('click', darkSwitch);
}

function darkSwitch() {
  var hash = location.hash.split('/');
  var currentTheme = hash[1] || 'tailwind3';

  // Normalize Bootstrap alias
  var normalizedTheme = currentTheme.replace('bootstrap5.3', 'bootstrap5');
  var baseTheme = normalizedTheme.replace('-dark', '');
  var isCurrentlyDark = normalizedTheme.includes('-dark');

  // Toggle dark/light
  var newTheme = isCurrentlyDark
    ? baseTheme
    : darkIgnore.indexOf(baseTheme) === -1
      ? baseTheme + '-dark'
      : baseTheme;

  // Update hash with alias (not internal theme name)
  hash[1] = newTheme;
  location.hash = hash.join('/');
  themeSwitched = true;
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
    localStorage.setItem('input-mode', switchType);
    location.reload();
}

function onNextButtonClick(arg) {
    addSampleList(samplesList);
    sampleOverlay();
    var curSampleUrl = location.hash;
    // Use SDK-filtered samples if an SDK is active
    var activeSamples = getActiveSdkSampleOrder(samplesAr);
    var inx = activeSamples.indexOf(curSampleUrl);
    if (inx !== -1 && inx + 1 < activeSamples.length) {
        var prevhref = activeSamples[inx];
        var curhref = activeSamples[inx + 1];
        location.href = curhref;
    }
    window.hashString = location.hash;
    setSelectList();
}

function onPrevButtonClick(arg) {
    addSampleList(samplesList);
    sampleOverlay();
    var curSampleUrl = location.hash;
    // Use SDK-filtered samples if an SDK is active
    var activeSamples = getActiveSdkSampleOrder(samplesAr);
    var inx = activeSamples.indexOf(curSampleUrl);
    if (inx !== -1 && inx > 0) {
        var prevhref = activeSamples[inx];
        var curhref = activeSamples[inx - 1];
        location.href = curhref;
    }
    window.hashString = location.hash;
    setSelectList();
}
function addSampleList(samplesList) {
  samplesAr = [];       // Reset global sample index
  samplePath = [];      // Reset sample paths
  defaultSamples = {};  // Reset default samples map

  if (!Array.isArray(samplesList)) {
    console.warn("Invalid or undefined samplesList passed to addSampleList.");
    return;
  }

  for (var i = 0; i < samplesList.length; i++) {
    var node = samplesList[i];
    if (!node || !node.directory || !Array.isArray(node.samples) || node.samples.length === 0) {
      continue; // Skip invalid or empty entries
    }

    var control = node.directory;
    var firstSample = node.samples[0];
    defaultSamples[control] = control + '/' + firstSample.url + '.html';

    // Sort samples using ej.DataManager
    var dataManager = new ej.data.DataManager(node.samples);
    var sortedSamples = dataManager.executeLocal(new ej.data.Query().sortBy('order', 'ascending'));

        for (var j = 0; j < sortedSamples.length; j++) {
            var sample = sortedSamples[j];
            // ✅ routing directory (never affects left pane)
            var routeDir = sample.dir || node.directory;
            samplePath.push(routeDir + '/' + sample.url);
            var selectedTheme = location.hash.split('/')[1] || getThemeDefault();
            samplesAr.push('#/' + selectedTheme + '/' + routeDir + '/' + sample.url + '.html');
        }
  }
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

/**
 * Returns a filtered sampleOrder array containing only samples belonging to
 * the currently active SDK. Falls back to the full sampleOrder when no SDK
 * filter is active (all).
 */
function getActiveSdkSampleOrder(fullOrder) {
    var activeItem = document.querySelector('#sdklist li.active');
    if (!activeItem) return fullOrder;
    
    var sdkKey = activeItem.getAttribute('data-sdk') || 'all';
    if (sdkKey === 'all') return fullOrder;

    var allowedControls = sdkControlMap[sdkKey] || [];
    if (!allowedControls.length) return fullOrder;

    return fullOrder.filter(function(samplePath) {
        // Handle full hash URLs like "#/tailwind3/ai-smart-paste/default.html"
        // Split: ['#', 'tailwind3', 'ai-smart-paste', 'default.html']
        // Control name is always at index [2] (after # and theme)
        var controlName = samplePath.split('/')[2];
        
        // For ai- prefixed controls: match the exact ai-* variant
        return allowedControls.indexOf(controlName) !== -1;
    });
}

/**
 * Apply SDK filter to the left pane tree and list views.
 * CRITICAL: All AI samples live under ONE tree node with control-name="ai-grid" (AI-Powered Samples).
 * When an SDK allows any ai-* controls, we show the ai-grid node (not individual ai-* nodes).
 */
function applySdkFilter(sdkKey) {
    var controlTree = document.getElementById('controlTree');
    var controlList = document.getElementById('controlList');

    // 'all' shows everything - remove filter
    if (sdkKey === 'all') {
        // Remove sdk-hidden from tree nodes and parent category nodes
        if (controlTree) {
            var treeItems = controlTree.querySelectorAll('[control-name]');
            treeItems.forEach(function(item) { item.classList.remove('sdk-hidden'); });
            var parentItems = controlTree.querySelectorAll('.e-list-item.e-level-1');
            parentItems.forEach(function(item) { item.classList.remove('sdk-parent-hidden'); });
        }
        // Remove sdk-hidden from list items and groups
        if (controlList) {
            var listItems = controlList.querySelectorAll('.e-list-item, .e-list-group-item');
            listItems.forEach(function(item) {
                item.classList.remove('sdk-hidden');
                item.classList.remove('sdk-sample-hidden');
                item.classList.remove('sdk-group-hidden');
            });
        }
        var leftPane = document.querySelector('.sb-left-pane');
        if (leftPane) leftPane.classList.remove('sdk-filter-active');
        return;
    }

    var allowedControls = sdkControlMap[sdkKey] || [];
    var leftPane = document.querySelector('.sb-left-pane');
    if (leftPane) leftPane.classList.add('sdk-filter-active');

    // Check if this SDK allows any ai-* controls
    // If yes, we must SHOW the 'ai-grid' tree node (which hosts ALL AI samples)
    var showAiNode = allowedControls.some(function(c) { return c.startsWith('ai-'); });

    // Filter tree view nodes (child items with control-name)
    if (controlTree) {
        var treeItems = controlTree.querySelectorAll('[control-name]');
        treeItems.forEach(function(item) {
            var cn = item.getAttribute('control-name') || '';
            // Special case: 'ai-grid' tree node is a CONTAINER for all AI samples
            // Show it if this SDK allows ANY ai-* variants
            var isVisible = cn === 'ai-grid' ? showAiNode : allowedControls.indexOf(cn) !== -1;
            if (!isVisible) {
                item.classList.add('sdk-hidden');
            } else {
                item.classList.remove('sdk-hidden');
            }
        });

        // Hide parent category nodes (e-level-1) when all their children are hidden
        var parentItems = controlTree.querySelectorAll('.e-list-item.e-level-1');
        parentItems.forEach(function(parent) {
            var children = parent.querySelectorAll('[control-name]');
            var hasVisible = Array.from(children).some(function(child) { 
                return !child.classList.contains('sdk-hidden'); 
            });
            if (!hasVisible) {
                parent.classList.add('sdk-parent-hidden');
            } else {
                parent.classList.remove('sdk-parent-hidden');
            }
        });
    }

    // Filter list view items using data-path attribute
    if (controlList) {
        var listItems = controlList.querySelectorAll('.e-list-item');
        listItems.forEach(function(item) {
            var dataPath = item.getAttribute('data-path') || '';
            // data-path is like "/grid/overview" or "/ai-gantt/task-prioritize"
            // First segment is the control name.
            var controlName = dataPath.replace(/^\//, '').split('/')[0] || '';
            // Direct match: the path's control prefix must be in the allowedControls list.
            var isMatch = allowedControls.indexOf(controlName) !== -1;
            if (!isMatch) {
                item.classList.add('sdk-sample-hidden');
            } else {
                item.classList.remove('sdk-sample-hidden');
            }
        });

        // Hide group headers that have no visible list items or don't belong to this SDK
        var groupItems = controlList.querySelectorAll('.e-list-group-item');
        groupItems.forEach(function(groupItem) {
            var groupName = groupItem.getAttribute('group-name') || '';
            // Check if this AI group is allowed for this SDK
            var isGroupAllowed = !groupName.startsWith('ai-') || allowedControls.indexOf(groupName) !== -1;
            
            if (!isGroupAllowed) {
                groupItem.classList.add('sdk-group-hidden');
            } else {
                // Now check if there are visible items under this group
                var sibling = groupItem.nextElementSibling;
                var hasVisible = false;
                while (sibling && !sibling.classList.contains('e-list-group-item')) {
                    if (!sibling.classList.contains('sdk-sample-hidden')) {
                        hasVisible = true;
                        break;
                    }
                    sibling = sibling.nextElementSibling;
                }
                if (!hasVisible) {
                    groupItem.classList.add('sdk-group-hidden');
                } else {
                    groupItem.classList.remove('sdk-group-hidden');
                }
            }
        });
    }
}
/**
 * Product keys appended to the SDK dropdown that open an external demo in a new tab.
 */
var productSdkKeys = ['pdf', 'spreadsheet', 'docx'];

/**
 * Opens the corresponding external product demo in a new tab.
 * Used by the SDK dropdown when a product item (PDF / Spreadsheet / Docx) is selected.
 */
function openProductSdkInNewTab(key) {
    var url = '';
    if (key === 'pdf') {
        url = 'https://document.syncfusion.com/demos/pdf-viewer/javascript-es5/#/tailwind3/pdfviewer/default.html';
    } else if (key === 'spreadsheet') {
        url = 'https://document.syncfusion.com/demos/spreadsheet-editor/javascript-es5/#/tailwind3/spreadsheet/default.html';
    } else if (key === 'docx') {
        url = 'https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/tailwind3/document-editor/default.html';
    }
    if (url) {
        window.open(url, '_blank');
    }
}
// Navigate to the default sample for the selected SDK
    var sdkDefaultPaths = {
        'all': 'grid/grid-overview.html',
        'grid': 'grid/grid-overview.html',
        'chart': 'chart/overview.html',
        'schedule': 'schedule/overview.html',
        'gantt': 'gantt/overview.html',
        'rich-text-editor': 'rich-text-editor/tools.html',
        'file-manager': 'file-manager/overview.html',
        'diagram': 'diagram/default-functionalities.html'
    };
/**
 * SDK Selection Handler
 */
function handleSdkSelection(e) {
    var target = ej.base.closest(e.target, 'li');
    if (!target) return;

    var sdkKey = target.getAttribute('data-sdk') || 'all';
    // Product items (PDF / Spreadsheet / Docx) open in a new tab and stop here.
    if (productSdkKeys.indexOf(sdkKey) !== -1) {
        sbHeaderClick('closePopup');
        openProductSdkInNewTab(sdkKey);
        return;
    }

    // Update active highlight in the SDK list
    var sdkList = document.getElementById('sdklist');
    if (sdkList) {
        sdkList.querySelectorAll('li').forEach(function(li) { li.classList.remove('active'); });
        target.classList.add('active');
    }

    // Update button text to reflect selection
    var sdkTextSpan = document.querySelector('#sb-sdk-text .sb-header-text-left');
    if (sdkTextSpan) {
        var selectedText = ej.base.select('.switch-text', target) ? ej.base.select('.switch-text', target).textContent : 'ALL DEMOS';
        sdkTextSpan.textContent = sdkKey === 'all' ? 'ALL DEMOS' : selectedText.toUpperCase();
    }
    sampleOverlay();
    // Shared logic for both desktop & mobile
    processSdkSelection(sdkKey);
    setTimeout(() => {
       removeOverlay();
      }, 900);
}

/**
 * Mobile SDK Selection Handler — invoked by the mobile <select> dropdown
 * in the settings popup. Keeps the desktop header popup list in sync and
 * delegates filtering/navigation to processSdkSelection().
 */
function handleSdkSelectionMobile(e) {
    // select event args don't have .value; the value lives in itemData
    var sdkKey = (e.itemData && e.itemData.value) || 'all';
    // Product items (PDF / Spreadsheet / Docx) open in a new tab and stop here.
    if (productSdkKeys.indexOf(sdkKey) !== -1) {
        // Prevent the dropdown from committing the product key as its new value
        e.cancel = true;
        if (e.event) {
            e.event.preventDefault();
            e.event.stopPropagation();
        }
        sbHeaderClick('closePopup');
        openProductSdkInNewTab(sdkKey);
        return;
    }
    localStorage.setItem('selectedSdk', sdkKey);
    // Update active highlight in the header popup list (keeps desktop & mobile in sync)
    var sdkList = document.getElementById('sdklist');
    if (sdkList) {
        sdkList.querySelectorAll('li').forEach(function (li) { li.classList.remove('active'); });
        var activeItem = sdkList.querySelector('[data-sdk="' + sdkKey + '"]');
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
    var sdkTextSpan = document.querySelector('#sb-sdk-text .sb-header-text-left');
    if (sdkTextSpan) {
        var activeItem = sdkList ? sdkList.querySelector('[data-sdk="' + sdkKey + '"]') : null;
        var selectedText = (activeItem && activeItem.querySelector('.switch-text')) ?
            activeItem.querySelector('.switch-text').textContent : 'ALL DEMOS';
        sdkTextSpan.textContent = sdkKey === 'all' ? 'ALL DEMOS' : selectedText.toUpperCase();
    }
    // Apply filter / navigate via shared logic
    processSdkSelection(sdkKey);
}

/**
 * Shared SDK selection logic — used by both desktop (handleSdkSelection)
 * and mobile (handleSdkSelectionMobile). Decides whether to just apply the
 * filter to the left pane (when the current control is already part of the
 * chosen SDK) or to navigate to the SDK's default sample.
 */
function processSdkSelection(sdkKey) {
    var currentPath = location.hash.replace(/^#\/[^\/]+\//, '');
    var currentControl = currentPath.split('/')[0];
    var defaultPath = sdkDefaultPaths[sdkKey];
    var defaultControl = defaultPath ? defaultPath.split('/')[0] : '';
    var shouldRedirect = currentPath !== defaultPath;
    localStorage.setItem('selectedSdk', sdkKey);
    if (!shouldRedirect) {
        sbHeaderClick('closePopup');
        applySdkFilter(sdkKey);
        // If tree view is visible, switch to list view
        const tree = document.querySelector('#controlTree');
        if (tree && tree.style.display !== 'none') {
          showHideControlTree();
        }
        return;
    } else {
        var newHash = '#/' + selectedTheme + '/' + defaultPath;
        if (location.hash !== newHash) {
            sampleOverlay();
            location.hash = newHash;
            window.hashString = location.hash;
            applySdkFilter(sdkKey);
            setSelectList();
        }
    }
    sbHeaderClick('closePopup');
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

    headerSdkSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeSdk');
    });
    headerSdkSwitch.addEventListener('keydown', function (e) {
        if (e.keyCode === 'Enter' || e.keyCode === ' ') {
            sbHeaderClick('changeSdk');
        }
    });
    var sdkList = document.getElementById('sdklist');
    if (sdkList) {
        sdkList.addEventListener('click', handleSdkSelection);
    }
    var sdkPopupEle = document.getElementById('sdk-popup');
    if (sdkPopupEle) {
        sdkPopupEle.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
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
    var wcagReportBtn = ej.base.select("#sf-wcag-btn");
    if (wcagReportBtn) {
        wcagReportBtn.addEventListener('click', () => {
            window.runAxeReport();
        });
    }
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
  var body = document.body;

  // Alias conversion for Bootstrap theme
  var internalTheme = theme;
  if (theme === 'bootstrap5') internalTheme = 'bootstrap5.3';
  else if (theme === 'bootstrap5-dark') internalTheme = 'bootstrap5.3-dark';

  // Remove previous theme classes
  for (var i = 0; i < themeCollection.length; i++) {
    body.classList.remove(themeCollection[i]);
    body.classList.remove(themeCollection[i] + '-dark');
  }
  body.classList.remove('e-dark-mode');

  // Add new theme classes
  body.classList.add(internalTheme);
  if (internalTheme.includes('-dark')) {
    body.classList.add('e-dark-mode');
  }

  // Hide dark toggle if unsupported
  if (darkIgnore.indexOf(theme) !== -1) {
    if (themeDarkButton) themeDarkButton.style.display = "none";
    var mobileSwitch = document.getElementById("mobiledarkswitch");
    if (mobileSwitch) mobileSwitch.style.display = "none";
  }

  // Visual updates for theme selector
  if (!isMobile && themeList) {
    var isDark = theme.includes('-dark');
    var activeItem = themeList.querySelector('.active');
    if (activeItem) activeItem.classList.remove('active');

    var normalizedId = theme.replace('-dark', '');
    var newActive = themeList.querySelector('#' + normalizedId);
    if (newActive) newActive.classList.add('active');

    if (darkButton) darkButton.innerHTML = isDark ? "LIGHT" : "DARK";
    var darkIcon = document.getElementById("dark-icon");
    var lightIcon = document.getElementById("light-icon");
    if (darkIcon) darkIcon.style.display = isDark ? "none" : "inline-block";
    if (lightIcon) lightIcon.style.display = isDark ? "inline-block" : "none";
  }
  if (isMobile){
            themeDarkButton.style.display = "none";}
  // Load theme CSS
  var link = document.getElementById('themelink');
  if (link) {
    link.setAttribute('href', './dist/' + internalTheme + '.css');
  }

  // Confirm theme CSS is loaded
  var ajax = new ej.base.Ajax('./dist/' + internalTheme + '.css', 'GET', true);
  ajax.send().then(function () {
    selectedTheme = theme;

    // App Initialization
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

    // Search Index Setup
    elasticlunr.clearStopWords();
    searchInstance = elasticlunr.Index.load(window.searchIndex);

    // Routing Initialization
    hasher.initialized.add(function (newHash, oldHash) {
        parseHash(newHash, oldHash);
    });
    hasher.changed.add(parseHash);
    hasher.init();

    if (reloadPageForRedirection) {
      window.location.reload();
    }
  });
}
function refreshSamples() 
{
    var demoSection = document.querySelector('.sb-demo-section');
    if (demoSection) {
        var controls = demoSection.querySelectorAll('.e-control.e-lib');
        controls.forEach(function(ctrl) {
            var instance = ctrl.ej2_instances && ctrl.ej2_instances[0];
            if (instance && typeof instance.refresh === 'function' && instance.getModuleName() !== 'DashboardLayout') {
                instance.refresh();
            }
        });
    }
}
function changeBodyClass(darkTheme) {
  // Normalize bootstrap5 to bootstrap5.3 for internal processing
  var internalTheme = darkTheme;
  if (darkTheme.includes('bootstrap5') && !darkTheme.includes('bootstrap5.3')) {
    internalTheme = darkTheme.replace('bootstrap5', 'bootstrap5.3');
  }
  var body = document.body;
  // First, remove ALL theme-related classes (including both bootstrap5 and bootstrap5.3 variants)
  for (var i = 0; i < themeCollection.length; i++) {
    body.classList.remove(themeCollection[i]);
    body.classList.remove(themeCollection[i] + '-dark');
  }
  // Also remove the bootstrap5.3 variants specifically
  body.classList.remove('bootstrap5.3');
  body.classList.remove('bootstrap5.3-dark');
  body.classList.remove('e-dark-mode');
  // Now add the new theme class (internal version)
  body.classList.add(internalTheme);
  var isDark = internalTheme.includes('-dark');
  if (isDark) {
    body.classList.add('e-dark-mode');
    if (darkButton) darkButton.innerHTML = "LIGHT";
    var lightIcon = document.getElementById('light-icon');
    var darkIcon = document.getElementById('dark-icon');
    if (lightIcon) lightIcon.style.display = 'inline-block';
    if (darkIcon) darkIcon.style.display = 'none';
  } else {
    if (darkButton) darkButton.innerHTML = "DARK";
    var lightIcon = document.getElementById('light-icon');
    var darkIcon = document.getElementById('dark-icon');
    if (lightIcon) lightIcon.style.display = 'none';
    if (darkIcon) darkIcon.style.display = 'inline-block';
  }
  // Load the CSS with internal theme name
  loadThemeLinkCss(internalTheme);
  // Save theme state (using the alias version for consistency)
  var aliasTheme = internalTheme.replace('bootstrap5.3', 'bootstrap5');
  selectedTheme = aliasTheme;
  setThemeDefault(aliasTheme);
  if (isMobile && themeModeDropDown) {
        const isDark = selectedTheme.includes('-dark');
        // Update mobile icon
        const mobileModeIcon = document.getElementById('mobile-mode-icon');
        if (mobileModeIcon) {
            mobileModeIcon.className = `sb-icons pane-${isDark ? 'light-theme' : 'dark-theme'}`;
        }
        isUpdatingFromUrl = true;  // Set flag BEFORE updating
        // Update the Syncfusion dropdown index
        themeModeDropDown.index = isDark ? 1 : 0;
        setTimeout(() => {
            isUpdatingFromUrl = false;  // Reset flag AFTER update
        }, 10);
    }
  refreshSamples();
}

function loadThemeLinkCss(theme) {
  var linkEl = document.getElementById('themelink');
  if (linkEl) {
    linkEl.setAttribute('href', './dist/' + theme + '.css');
  }
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
        controlSampleData[list[i].directory] = getSamples(list[i].samples, list[i].directory);
    }
    return tempList;
}

function getSamples(samples, groupPath) {
    var tempSamples = [];
    var groupName = '';
    var sampleNameAttr = '';
    var isAISample = !!groupPath && groupPath.startsWith('ai-') && ['ai-assistview', 'ai-smart-paste', 'ai-smart-textarea'].indexOf(groupPath) === -1;
    for (var i = 0; i < samples.length; i++) {
        tempSamples[i] = samples[i];
        groupName = samples[i].dir;
        sampleNameAttr = samples[i].name.toLowerCase().replace(/ /g, '-');
        tempSamples[i].data = { 'sample-name': samples[i].url, 'data-path': '/' + samples[i].dir + '/' + samples[i].url + '.html' };
        if (isAISample) {
            tempSamples[i].data['group-name'] = groupName;
            tempSamples[i].data['ai-sample-name'] = sampleNameAttr;
        }
    }
    return tempSamples;
}

function controlSelect(arg) {
    var element = arg.node || arg.item;
    var path = element.getAttribute('data-path');
    var curHashCollection = '/' + location.hash.split('/').slice(2).join('/');
    // Handle AI grid node special case - redirect to SDK-specific AI sample
    if (arg.node && path && path.startsWith('/ai-grid/')) {
        var sdkKey = getActiveSdk();
        if (sdkKey !== 'all') {
            var aiSampleMap = {
                'schedule': '/ai-schedule/default.html',
                'gantt': '/ai-gantt/task-prioritizer.html',
                'grid': '/ai-grid/predictive-entry.html',
                'diagram': '/ai-diagram/text-to-flowchart.html',
                'chart': '/ai-maps/weather-prediction.html'
            };
            if (aiSampleMap[sdkKey]) {
                path = aiSampleMap[sdkKey];
            }
        }
    }
    
    if (path) {
        controlListRefresh(element);
        if (path !== curHashCollection) {
            sampleOverlay();
            var theme = location.hash.split('/')[1] || getThemeDefault();
            if (arg.item && ((isMobile && !ej.base.select('#left-sidebar').classList.contains('sb-hide')) ||
                ((isTablet || (ej.base.Browser.isDevice && isPc)) && isLeftPaneOpen()))) {
                toggleLeftPane();
            }
            window.hashString = '#/' + theme + path;
            setTimeout(function () { location.hash = '#/' + theme + path; }, 600);
        }
        reapplyActiveSdkFilter();
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

function reapplyActiveSdkFilter() {
    var sdkKey = getActiveSdk();
    if (sdkKey !== 'all') {
        applySdkFilter(sdkKey);
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

function updateGroupItemAttributes() {
    var groupItems = document.querySelectorAll('#controlList .e-list-group-item.e-level-1');
    groupItems.forEach(function (groupItem) {
        var sibling = groupItem.nextElementSibling;
        while (sibling && !sibling.classList.contains('e-list-group-item')) {
            if (!groupItem.hasAttribute('group-name')) {
                var groupName = sibling.getAttribute('group-name');
                if (groupName) {
                    groupItem.setAttribute('group-name', groupName);
                }
            }
            sibling.removeAttribute('group-name');
            sibling = sibling.nextElementSibling;
        }
    });
}

function setSelectList() {
    var hString = window.hashString || location.hash;
    var hash = hString.split('/');
    var controlName = hash[2]; 
    var sampleName = hash[3] ? hash[3].replace('.html', '') : '';
    // Get TreeView and ListView instances
    var treeView = ej.base.select('#controlTree').ej2_instances[0];
    var listView = ej.base.select('#controlList').ej2_instances[0];
    // Find the control element in TreeView
    if (controlName && controlName.startsWith('ai-') && ['ai-assistview', 'ai-smart-paste', 'ai-smart-textarea'].indexOf(controlName) === -1) {
        controlName = 'ai-grid';
    }
 
    var controlElement = ej.base.select('[control-name="' + controlName + '"]') || ej.base.select('[control-name="grid"]');

    if (controlElement && treeView) {
        // Update TreeView selection to highlight the current component
        var controlNodeId = controlElement.closest('.e-list-item').getAttribute('data-uid');
        if (controlNodeId) {
            treeView.selectedNodes = [controlNodeId];
        }
        // Update the samples list for the current control
        var samples = controlSampleData[controlName];
        if (samples && JSON.stringify(listView.dataSource) !== JSON.stringify(samples)) {
            listView.dataSource = samples;
            listView.dataBind();
        }
        updateGroupItemAttributes();
        if (ej.base.select('#controlTree').style.display !== 'none') {
            showHideControlTree();
        }
        // Select the current sample in ListView
        var sampleElement = ej.base.select('[sample-name="' + sampleName + '"]');
        if (sampleElement && listView) {
            listView.selectItem(sampleElement);
            sampleElement.scrollIntoView({ block: "nearest" });
        }
    } else {
        // show tree view and select default
        if (ej.base.select('#controlTree').style.display === 'none') {
            showHideControlTree();
        }
        // If no specific control found, default to grid
        if (treeView) {
            var defaultControl = ej.base.select('[control-name="grid"]');
            if (defaultControl) {
                var defaultNodeId = defaultControl.closest('.e-list-item').getAttribute('data-uid');
                if (defaultNodeId) {
                    treeView.selectedNodes = [defaultNodeId];
                }
            }
        }
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
            control.ej2_instances.forEach(function(instance) {
                if (instance.element && document.contains(instance.element)){
                    instance.destroy();
                }
            });
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
            var control = subNode.dir || node.directory;
            var sample = subNode.url;
            samplePath = samplePath.concat(control + '/' + sample);
            var sampleName = node.name + ' / ' + ((node.name !== subNode.category) ?
                (subNode.category + ' / ') : '') + subNode.name;
            var selectedTheme = location.hash.split('/')[1] ? location.hash.split('/')[1] : getThemeDefault();
            var urlString = '/' + selectedTheme + '/' + control + '/' + sample + '.html';
            samplesAr.push('#' + urlString);
            crossroads.addRoute(urlString, function () {
            var dsPath = subNode.dataSourcePath || node.dataSourcePath;
            var dataSourceLoad = dsPath && document.getElementById(dsPath);
                if (dsPath && !dataSourceLoad) {
                    var dataAjax = new ej.base.Ajax(dsPath, 'GET', true);
                    dataAjax.send().then(function (result) {
                        var ele = ej.base.createElement('script', {
                            id: dsPath,
                            innerHTML: result
                        });
                        document.getElementsByTagName('head')[0].appendChild(ele);
                        onDataSourceLoad(node, subNode, control, sample, sampleName);
                    });
                }
                else {
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
        let baseUrl = location.href.split('#')[0];
        // remove index.html if present in build
        baseUrl = baseUrl.replace(/index\.html$/i, '');
        // ensure trailing slash
        if (baseUrl.charAt(baseUrl.length - 1) !== '/') {
             baseUrl += '/';
        }
        openNew.href = baseUrl + node.directory + '/' + subNode.url + '/';
    }
    setSbLink();
    const desktopSettings = ej.base.select('.sb-desktop-setting');
    if (!ej.base.Browser.isDevice && desktopSettings) {
        desktopSettings.style.display = (aiControlRegex.test(control) || aiControlRegex.test(sample)) && (!(/^ai-assistview/).test(control) || aiControlRegex.test(sample)) ? 'none' : '';
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
    // if ((aiControlRegex).test(control) && aiControlRegex.test(sample)) {
    //     jsScriptName = sample.split('ai-')[1];
    // }
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
    if ((!(aiControlRegex).test(control) && !(aiControlRegex).test(sample)) || ((/^ai-assistview/).test(control) && !(aiControlRegex).test(sample))) {
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
        addSampleList(samplesList);
        // Use SDK-filtered samples for next/prev navigation
        var activeSamples = getActiveSdkSampleOrder(samplesAr);
        var curIndex = activeSamples.indexOf(location.hash);
        var samLength = activeSamples.length - 1;
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
function setThemeDefault(theme) {
  localStorage.setItem('previousTheme', theme);
}
function getThemeDefault() {
  var previousTheme = localStorage.getItem('previousTheme') || 'tailwind3';
  return previousTheme;
}
function parseHash(newHash, oldHash) {
  const parts = newHash.split('/');
  const rawTheme = parts[0] || 'tailwind3';
  const control = parts[1] || '';
  const sampleName = parts[2] || '';

  // Normalize theme for hash (alias form)
  const resolveAlias = (theme) => {
    return theme === 'bootstrap5.3' ? 'bootstrap5' :
           theme === 'bootstrap5.3-dark' ? 'bootstrap5-dark' : theme;
  };

  const displayNewTheme = resolveAlias(rawTheme);
  const displayOldTheme = resolveAlias(selectedTheme || 'tailwind3');
  const baseNewTheme = displayNewTheme.replace('-dark', '');
  const baseOldTheme = displayOldTheme.replace('-dark', '');

  const componentsToAddRoutes = [
    "Chart", "3D Chart", "3D Circular Chart", "Stock Chart", "Arc Gauge",
    "Circular Gauge", "Diagram", "HeatMap Chart", "Linear Gauge", "Maps",
    "Range Selector", "Smith Chart", "Barcode", "Sparkline Charts",
    "TreeMap", "Bullet Chart","ai-chart"
  ];

  // Reload only if base theme has changed
  if (baseNewTheme !== baseOldTheme && themeCollection.includes(displayNewTheme)) {
    setThemeDefault(displayNewTheme);
    location.reload();
    return;
  }

  // Theme variant switched without base change
  if (
    baseNewTheme === baseOldTheme &&
    displayNewTheme !== displayOldTheme &&
    themeCollection.includes(displayNewTheme)
  ) {
    changeBodyClass(displayNewTheme);

    const isComplexComponent = componentsToAddRoutes.some(function (item) {
      return item.toLowerCase() === control.toLowerCase();
    });

    if (isComplexComponent) {
      addRoutes(samplesList);
    } else {
      addSampleList(samplesList);
      return;
    }
  } else {
    addRoutes(samplesList);
  }

  // Re-route for complex controls
  if (
    componentsToAddRoutes.some(function (item) {
      return item.toLowerCase() === control.toLowerCase();
    })
  ) {
    addRoutes(samplesList);
  }

  // Initialize global routing config
  window.samplesJSON = window.samplesJSON || {};
  samplesJSON.skipCommonChunk = window.sampleSkip || [];
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
    var switchText = localStorage.getItem('input-mode') || 'mouse';
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
    // Modified: Prioritize URL theme over stored theme
    var storedTheme = getThemeDefault();
    var currentHash = location.hash;
    
    if (currentHash) {
        var hashParts = currentHash.split('/');
        var urlTheme = hashParts[1];
        
        // Use URL theme if present; otherwise, fall back to stored theme
        selectedTheme = urlTheme || storedTheme;
    } else {
        // No hash present, set default with stored theme
        var defaultHash = '#/' + storedTheme + '/grid/gridoverview.html';
        history.replaceState(null, null, defaultHash);
        selectedTheme = storedTheme;
    }
    ej.base.enableRipple(selectedTheme.indexOf('material') !== -1 || !selectedTheme);
    loadTheme(selectedTheme);
}
loadJSON();


ej.base.select('.close-button').addEventListener('click', () => {
    let banner = document.querySelector('.sb-token-header');
    if (banner) {
        banner.classList.add('sb-hide');
    }
});

function contentTemplate() {
    const container = document.createElement('div');
    container.className = 'ai-toast-container';

    const textDiv = document.createElement('div');
    textDiv.className = 'ai-content-text'

    const title = document.createElement('div');
    title.className = 'ai-content-title';
    title.innerText = 'Explore AI Demos';

    const message = document.createElement('div');
    message.className = 'ai-content-message';
    message.innerHTML = `You can now explore our <strong>Smart AI demos</strong> with limited AI token usage.Additionally, you can try out our <strong>
        <a href="https://github.com/syncfusion/smart-ai-samples/tree/master" target="_blank" style="color: #007bff;">Syncfusion Smart AI Samples</a></strong> locally by using your own API key.`;

    textDiv.appendChild(title);
    textDiv.appendChild(message);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close-button';
    closeBtn.innerText = '✕';
    closeBtn.setAttribute('aria-label', 'Close');

    container.appendChild(textDiv);
    container.appendChild(closeBtn);

    return container;
}

function attachCloseHandler() {
    const closeBtn = toastObjt.element.querySelector('.toast-close-button');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            toastObjt.hide();
            isToastVisible = false;
        });
    }
}

function showToast() {
    if (!toastObjt) {
        toastObjt = new ej.notifications.Toast({
            width: 420,
            content: contentTemplate(),
            position: { X: 'Right', Y: 'Top' },
            timeOut: 0,
            newestOnTop: true,
            created: () => {
                toastObjt.show();
                isToastVisible = true;
                attachCloseHandler();
            }
        });
        toastObjt.appendTo('#ai-toast');
    } else if (!isToastVisible) {
        toastObjt.show();
        isToastVisible = true;
        attachCloseHandler();
    }
}

function hideToast() {
    if (toastObjt && isToastVisible) {
        toastObjt.hide();
        isToastVisible = false;
    }
}

window.addEventListener('hashchange', () => {
    var isAiAssistView = location.hash.includes('/ai-assistview/');
    var isAiAssistViewSample =
        location.hash.includes('text-to-speech.html') ||
        location.hash.includes('speech-to-text.html') ||
        location.hash.includes('model.html');
    if (isAiAssistView) {
        if (isAiAssistViewSample) {
            showToast();
        } else {
            hideToast();
        }
        return;
    }
    if (location.hash.includes('ai-')) {
        showToast();
    } else {
        hideToast();
    }
});

// Canonical URLs Management
let canonicalUrlsMap = {};
let canonicalDataLoaded;

// Load canonical URLs on app init
canonicalDataLoaded = fetch('./canonical-urls.json')
  .then(response => response.json())
  .then(data => {
    canonicalUrlsMap = data;
  })
  .catch(error => console.error('Error loading canonical-urls.json:', error));

// Function to update canonical tag based on current hash
function updateCanonicalTag() {
  const hash = window.location.hash;
  const hashParts = hash.replace('#/', '').split('/');

  if (hashParts.length >= 3) {
    const controlKey = hashParts[1]; // e.g. 'grid', 'treegrid'
    const displaySampleName = (hashParts[2] || 'default').replace(/\.html$/i, ''); // e.g. 'default', 'overview', 'editing'

    if (aiRegex.test(controlKey)) {
      var existingAiCanonical = document.querySelector('link[rel="canonical"]');
      if (existingAiCanonical) {
        existingAiCanonical.parentNode.removeChild(existingAiCanonical);
      }
      return;
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }

    // Build canonical URL: mapped for default/overview, self-referenced for other samples
    var canonicalUrl = '';
    if ((displaySampleName === 'default' || displaySampleName === 'overview' || (displaySampleName && displaySampleName.indexOf('-overview') !== -1) || (displaySampleName && displaySampleName.indexOf('default-') === 0)) && canonicalUrlsMap[controlKey]) {
      // Use mapped canonical URL for default/overview samples
      canonicalUrl = canonicalUrlsMap[controlKey];
    }
    else {
      var desiredPart = controlKey + '/' + displaySampleName + '/';
      canonicalUrl = 'https://ej2.syncfusion.com/javascript/demos/' + desiredPart;
    }
    canonicalLink.href = canonicalUrl;
  }
}

// Set up hash change listener
window.addEventListener('hashchange', updateCanonicalTag);

// Handle initial load - wait for canonical data to load first
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash) {
    // Wait for the canonical data to load before updating
    canonicalDataLoaded.then(() => {
      updateCanonicalTag();
    });
  }
});
 
