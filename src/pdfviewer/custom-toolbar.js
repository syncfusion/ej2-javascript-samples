/*jshint esversion: 6 */
var inputTemplate = '<div class=""><input type="text" class="e-input-group e-pv-current-page-number" id="currentPage" /></div>';
var ele = '<div class=""><span class="e-pv-total-page-number" id="totalPage">of 0</span></div>';
var isBookmarkOpen = false;
var isBookmarkClick = false;
var isBookmarkView = false;
var isTextSearchBoxOpen = false;
var bookmarkPopup;
var textSearchPopup;
var toolbarObj;
var viewer;
var currentPageBox;
var searchInput;
var searchButton;
var openDocument;
var matchCase = false;
var fileInputElement;
var filename;
var treeObj;
this.default = function () {
    toolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-open-document', tooltipText: 'Open', id: 'openButton', click: openClicked },
            { prefixIcon: 'e-pv-bookmark-icon', tooltipText: 'Bookmark', id: 'bookmarkButton', click: bookmarkClicked },
            { prefixIcon: 'e-pv-previous-page-navigation-icon', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            { prefixIcon: 'e-pv-next-page-navigation-icon', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { prefixIcon: 'e-pv-search-icon', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-pv-print-document-icon', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) },
            { prefixIcon: 'e-pv-download-document-icon', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    var magnificationToolbar = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-in-icon', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-pv-zoom-out-icon' , id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) },
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new ej.pdfviewer.PdfViewer({
        enableToolbar: false,
        enableNavigationToolbar: false,
        enableThumbnail: false,
        documentPath: 'Hive_Succinctly.pdf',
        serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer'
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation);
    viewer.appendTo('#pdfViewer');
    isBookmarkView = false;
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    currentPageBox = document.getElementById('currentPage');
    currentPageBox.value = '1';
    searchInput = document.getElementById('searchInput');
    openDocument = document.getElementById('fileupload');
    bookmarkPopup = new ej.popups.Dialog({
        showCloseIcon: true, header: "Bookmarks", closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        content: '<div class="e-pv-bookmarks" id="bookmarkview"></div>',
        buttons: [{
            buttonModel: {},
        }], position: { X: 'left', Y: 'top' }, cssClass: 'e-bookmark-popup', beforeClose: function () {
           isBookmarkOpen = false;
        }
    });
    bookmarkPopup.appendTo('#popup');
    textSearchPopup = new ej.popups.Dialog({
        showCloseIcon: false, closeOnEscape: false, isModal: false, target: document.getElementById('pdfViewer'),
        buttons: [{
            buttonModel: {},
        }], position: { X: 'right', Y: 'top' }, cssClass: 'e-text-search-popup',
    });
    textSearchPopup.appendTo('#textSearchBox');
    var previousSearch = new ej.buttons.Button({ iconCss: 'e-pv-previous-search' });
    previousSearch.appendTo('#previousSearch');
    var nextSearch = new ej.buttons.Button({ iconCss: 'e-pv-next-search-btn' });
    nextSearch.appendTo('#nextSearch');
    var matchCaseCheck = new ej.buttons.CheckBox({ label: 'Match case', change: checkBoxChanged });
    matchCaseCheck.appendTo('#matchCase');
    viewer.pageChange = function (args) {
        currentPageBox.value = viewer.currentPageNumber.toString();
        updatePageNavigation();
    };
    viewer.documentLoad = function (args) {

        document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;
        updatePageNavigation();
    };
    searchButton = document.getElementById('searchBtn');
    searchInput.addEventListener('focus', function () { searchInput.parentElement.classList.add('e-input-focus'); });
    searchInput.addEventListener('blur', function () { searchInput.parentElement.classList.remove('e-input-focus'); });
    searchInput.addEventListener('keypress', searchInputKeypressed);
    document.getElementById('previousSearch').addEventListener('click', previousSearchClicked);
    document.getElementById('nextSearch').addEventListener('click', nextSearchClicked);
    searchButton.addEventListener('click', searchClickHandler);
    currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);
    currentPageBox.addEventListener('click', onCurrentPageBoxClicked);
    bookmarkPopup.hide();
    textSearchPopup.hide();
    enableNextButton(false);
    enablePrevButton(false);
};
function previousClicked(args) {
    hidePopups();
    viewer.navigation.goToPreviousPage();
}
function hidePopups() {
    isBookmarkOpen = false;
    isTextSearchBoxOpen = false;
    bookmarkPopup.hide();
    textSearchPopup.hide();
}
function bookmarkClicked() {
    textSearchPopup.hide();
    if (!isBookmarkOpen) {
        var bookmarkDetails = viewer.bookmark.getBookmarks();
        if (bookmarkDetails.bookmarks) {
            if (!isBookmarkView) {
                var bookmarks = bookmarkDetails.bookmarks.bookMark;
                treeObj = new ej.navigations.TreeView({
                    fields: {
                        dataSource: bookmarks,
                        id: 'Id',
                        child: 'Child',
                        text: 'Title',
                        hasChildren: 'HasChild',
                    }, nodeSelected: nodeClick
                });
                isBookmarkView = true;
                treeObj.appendTo('#bookmarkview');
                ['mouseover', 'keydown'].forEach( (evt) => document.getElementById("bookmarkview").addEventListener(evt, (event) => {
                    setHeight(event.target); }));
            }
            bookmarkPopup.show();
            isBookmarkOpen = true;
            isBookmarkClick = true;
        }
        else {
            toolbarObj.enableItems(document.getElementById('bookmarkButton'), false);
            isBookmarkOpen = false;
        }
    }
    else {
        if (!isBookmarkClick) {
            bookmarkPopup.show();
            isBookmarkClick = true;
        } else {
            bookmarkPopup.hide();
            isBookmarkClick = false;
        }  
    }
}
function nextClicked(args) {
    hidePopups();
    viewer.navigation.goToNextPage();
}
function searchClicked(args) {
    bookmarkPopup.hide();
    if (!isTextSearchBoxOpen) {
        textSearchPopup.show();
    }
    else {
        viewer.textSearch.cancelTextSearch();
        textSearchPopup.hide();
    }
    isTextSearchBoxOpen = !isTextSearchBoxOpen;
}
function printClicked(args) {
    hidePopups();
    viewer.print.print();
}
function downloadClicked(args) {
    hidePopups();
    viewer.download();
}
function pageFitClicked(args) {
    hidePopups();
    viewer.magnification.fitToPage();
    updateZoomButtons();
    toolbarObj.enableItems(document.getElementById('fitPage'), false);
}
function zoomInClicked(args) {
    hidePopups();
    viewer.magnification.zoomIn();
    updateZoomButtons();
}
function zoomOutClicked(args) {
    hidePopups();
    viewer.magnification.zoomOut();
    updateZoomButtons();
}

function readFile(args) {
    // tslint:disable-next-line
    var upoadedFiles = args.target.files;
    if (args.target.files[0] !== null) {
        var uploadedFile = upoadedFiles[0];
        filename = upoadedFiles[0].name;
        if (uploadedFile) {
            var reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            // tslint:disable-next-line
            reader.onload = function (e) {
                var uploadedFileUrl = e.currentTarget.result;
                viewer.load(uploadedFileUrl, null);
                currentPageBox.value = '1';
                document.getElementById("bookmarkview").innerHTML = "";
                isBookmarkView = false;
                isBookmarkOpen = false;
                viewer.fileName = filename;
            };
        }
    }
}

function openClicked() {
    document.getElementById('fileUpload').click();
}
function onCurrentPageBoxKeypress(event) {
    if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
        event.preventDefault();
        return false;
    }
    else {
        var currentPageNumber = parseInt(currentPageBox.value);
        if (event.which === 13) {
            if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {
                viewer.navigation.goToPage(currentPageNumber);
            }
            else {
                currentPageBox.value = viewer.currentPageNumber.toString();
            }
        }
        return true;
    }
}
function onCurrentPageBoxClicked() {
    currentPageBox.select();
    currentPageBox.focus();
}
function updatePageNavigation() {
    if (viewer.currentPageNumber === 1) {
        toolbarObj.enableItems(document.getElementById('previousPage'), false);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
    else if (viewer.currentPageNumber === viewer.pageCount) {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), false);
    }
    else {
        toolbarObj.enableItems(document.getElementById('previousPage'), true);
        toolbarObj.enableItems(document.getElementById('nextPage'), true);
    }
}
function updateZoomButtons() {
    if (viewer.zoomPercentage <= 50) {
        toolbarObj.enableItems(document.getElementById('zoomIn'), true);
        toolbarObj.enableItems(document.getElementById('zoomOut'), false);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
    else if (viewer.zoomPercentage >= 400) {
        toolbarObj.enableItems(document.getElementById('zoomIn'), false);
        toolbarObj.enableItems(document.getElementById('zoomOut'), true);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
    else {
        toolbarObj.enableItems(document.getElementById('zoomIn'), true);
        toolbarObj.enableItems(document.getElementById('zoomOut'), true);
        toolbarObj.enableItems(document.getElementById('fitPage'), true);
    }
}
function nodeClick(args) {
    var bookmarksDetails = viewer.bookmark.getBookmarks();
    setHeight(args.node);
    var bookmarksDestination = bookmarksDetails.bookmarksDestination;
    var bookid = Number(args.nodeData.id);
    var pageIndex = bookmarksDestination.bookMarkDestination[bookid].PageIndex;
    var Y = bookmarksDestination.bookMarkDestination[bookid].Y;
    viewer.bookmark.goToBookmark(pageIndex, Y);
    return false;
}
// tslint:disable-next-line
function setHeight(element) {
    if (treeObj.fullRowSelect) {
        if (element.classList.contains('e-treeview')) {
            element = element.querySelector('.e-node-focus').querySelector('.e-fullrow');
        }
        else if (element.classList.contains('e-list-parent')) {
            element = element.querySelector('.e-fullrow');
        }
        else if (element.classList.value !== ('e-fullrow') && element.closest('.e-list-item')) {
            element = element.closest('.e-list-item').querySelector('.e-fullrow');
        }
        if (element.nextElementSibling) {
            element.style.height = element.nextElementSibling.offsetHeight + 'px';
        }
    }
}
function searchInputKeypressed(event) {
    enablePrevButton(true);
    enableNextButton(true);
    if (event.which === 13) {
        initiateTextSearch();
        updateSearchInputIcon(false);
    }
}
function searchClickHandler() {
    if (searchButton.classList.contains('e-pv-search-icon')) {
        viewer.textSearch.cancelTextSearch();
        initiateTextSearch();
    }
    else if (searchButton.classList.contains('e-pv-search-close')) {
        searchInput.value = '';
        searchInput.focus();
        viewer.textSearch.cancelTextSearch();
    }
}
function initiateTextSearch() {
    var searchString = searchInput.value;
    viewer.textSearch.searchText(searchString, matchCase);
}
function previousSearchClicked() {
    var searchString = searchInput.value;
    if (searchString) {
        viewer.textSearch.searchPrevious();
    }
}
function nextSearchClicked() {
    var searchString = searchInput.value;
    if (searchString) {
        viewer.textSearch.searchNext();
    }
}
function checkBoxChanged(args) {
    if (args.checked) {
        matchCase = true;
    }
    else {
        matchCase = false;
    }
    initiateTextSearch();
}
function enablePrevButton(isEnable) {
    var previousSearchButton = document.getElementById('previousSearch');
    if (isEnable) {
        previousSearchButton.removeAttribute('disabled');
    }
    else {
        previousSearchButton.disabled = true;
    }
}
function enableNextButton(isEnable) {
    var nextSearchButton = document.getElementById('nextSearch');
    if (isEnable) {
        nextSearchButton.removeAttribute('disabled');
    }
    else {
        nextSearchButton.disabled = true;
    }
}
function updateSearchInputIcon(isEnable) {
    if (isEnable) {
        searchButton.classList.remove('e-pv-search-close');
        searchButton.classList.add('e-pv-search-icon');
    }
    else {
        searchButton.classList.remove('e-pv-search-icon');
        searchButton.classList.add('e-pv-search-close');
    }
}


