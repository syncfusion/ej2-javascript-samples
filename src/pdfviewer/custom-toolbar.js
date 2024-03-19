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
var isInkEnabled = false;
this.default = function () {
  function create() {
    var menuItems = [ {
      iconCss: 'e-icons e-stamp',
      items: [
        {
          text: 'Dynamic',
          items: [
            { text: 'Revised', id: 'Dynamic' },
            { text: 'Reviewed', id: 'Dynamic' },
            { text: 'Received', id: 'Dynamic' },
            { text: 'Confidential', id: 'Dynamic' },
            { text: 'Approved', id: 'Dynamic' },
            { text: 'Not Approved', id: 'Dynamic' },
          ],
        },
        {
          text: 'Sign Here',
          items: [
            { text: 'Witness', id: 'Sign Here' },
            { text: 'Initial Here', id: 'Sign Here' },
            { text: 'Sign Here', id: 'Sign Here' },
            { text: 'Accepted', id: 'Sign Here' },
            { text: 'Rejected', id: 'Sign Here' }
          ],
        },
        {
          text: 'Standard Business',
          items: [
            { text: 'Approved', id: 'Standard Business' },
            { text: 'Not Approved', id: 'Standard Business' },
            { text: 'Draft', id: 'Standard Business' },
            { text: 'Final', id: 'Standard Business' },
            { text: 'Completed', id: 'Standard Business' },
            { text: 'Confidential', id: 'Standard Business' },
            { text: 'For Public Release', id: 'Standard Business' },
            { text: 'Not For Public Release', id: 'Standard Business' },
            { text: 'For Comment', id: 'Standard Business' },
            { text: 'Void', id: 'Standard Business' },
            { text: 'Preliminary Results', id: 'Standard Business' },
            { text: 'Information Only', id: 'Standard Business' }
          ],
        },
      ],
    },
  ];
  new ej.navigations.Menu({ items: menuItems,showItemOnClick: true,select: select.bind(this) }, '#menu');
  var signatureMenuItems = [{ iconCss: 'e-icons e-signature', items: [{ text: 'Add Signature' }, { text: 'Add Initial' }] }];
  new ej.navigations.Menu({ items: signatureMenuItems, showItemOnClick: true, select: onSignatureClick.bind(this) }, '#signatureMenu');
  var formFieldSignatureMenuItems = [{ iconCss: 'e-icons e-signature', items: [{ text: 'Add Signature' }, { text: 'Add Initial' }] }];
  new ej.navigations.Menu({ items: formFieldSignatureMenuItems, showItemOnClick: true, select: onSignatureClick.bind(this) }, '#formFieldSignatureMenu');
  }
    toolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-icons e-folder', tooltipText: 'Open', id: 'openButton', click: openClicked },
            { prefixIcon: 'e-icons e-save',tooltipText: 'Save', id:'save', click: downloadClicked.bind(this) },
            { prefixIcon: 'e-icons e-chevron-left', id: 'previousPage', tooltipText: 'Previous Page', align: 'Center', click: previousClicked.bind(this) },
            { prefixIcon: 'e-icons e-chevron-right', id: 'nextPage', tooltipText: 'Next Page', align: 'Center', click: nextClicked.bind(this) },
            { template: inputTemplate, tooltipText: 'Page Number', align: 'Center' },
            { template: ele, tooltipText: 'Page Number', align: 'Center' },
            { type:"Separator",tooltipText:"separator", align:"Center" },
            { prefixIcon:"e-icons e-mouse-pointer", tooltipText:"Text Selection Tool", align:"Center", click: textSelection.bind(this) },
            { prefixIcon:"e-icons e-pan", tooltipText:"Pan Mode", align:"Center", click: panMode.bind(this) },
            { type:"Separator",tooltipText:"separator", align:"Center" },
            { prefixIcon:"e-icons e-annotation-edit", tooltipText:"Edit Annotations", align:"Center", click: openEditAnnotation.bind(this) },
            { type:"Separator",tooltipText:"separator", align:"Center" },
            { prefixIcon:"e-icons e-split-vertical", tooltipText:"Add and Edit Form Fields", align:"Center", click: addEditFormFields.bind(this) },
            { type:"Separator",tooltipText:"separator", align:"Center" },
            { prefixIcon: 'e-icons e-search', tooltipText: 'Text Search', align: 'Right', click: searchClicked.bind(this) },
            { prefixIcon: 'e-icons e-print', tooltipText: 'Print', align: 'Right', click: printClicked.bind(this) }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    var editAnnotationToolbarToolbar = new ej.navigations.Toolbar({
        created: create,
        items: [
            { prefixIcon:"e-icons e-highlight-color", click: highlight.bind(this), tooltipText:"Highlight", id:"highlight", align:"Center" },
            { prefixIcon: 'e-icons e-underline', click: underLine.bind(this), tooltipText: 'Underline', id: 'underline', align: 'Center' },
            { prefixIcon: 'e-icons e-strikethrough', click: strikeThrough.bind(this), tooltipText: 'Strikethrough', id: 'strikethrough', align: 'Center' },
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { prefixIcon: 'e-icons e-line', click: addLine.bind(this), tooltipText: 'Add Line', id: 'line', align: 'Center' },
            { prefixIcon: 'e-icons e-arrow-right-up', click: addArrow.bind(this), tooltipText: 'Add Arrow', id: 'arrow', align: 'Center' },
            { prefixIcon: 'e-icons e-rectangle', click: addRectangle.bind(this), tooltipText: 'Add Rectangle', id: 'rectangle', align: 'Center' },
            { prefixIcon: 'e-icons e-circle', click: addCircle.bind(this), tooltipText: 'Add Circle', id: 'circle', align: 'Center' },
            { prefixIcon: 'e-icons e-pentagon', click: addPoligon.bind(this), tooltipText: 'Add Polygon', id: 'polygon', align: 'Center' },
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { prefixIcon: 'e-icons e-length', click: distance.bind(this), tooltipText: 'Calibrate Distance', id: 'calibrate_distance', align: 'Center' },
            { prefixIcon: 'e-icons e-perimeter', click: perimeter.bind(this), tooltipText: 'Calibrate Perimeter', id: 'calibrate_perimeter', align: 'Center' },
            { prefixIcon: 'e-icons e-area', click: area.bind(this), tooltipText: 'Calibrate Area', id: 'calibrate_area', align: 'Center' },
            { prefixIcon: 'e-icons e-radius', click: radius.bind(this), tooltipText: 'Calibrate Radius', id: 'calibrate_radius', align: 'Center' },
            { prefixIcon: 'e-icons e-volume', click: volume.bind(this), tooltipText: 'Calibrate Volume', id: 'calibrate_volume', align: 'Center' },
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { prefixIcon: 'e-icons e-text-annotation', click: freeText.bind(this), tooltipText: 'Free Text', id: 'freeText', align: 'Center' },
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { prefixIcon: 'e-icons e-stamp', tooltipText: 'Add Stamp', id: 'stamp', align: 'Center', template: '<ul id="menu"></ul>'},
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { id: 'signature', prefixIcon: 'e-icons e-signature', tooltipText: 'Add Signature', align: 'Center', template: '<ul id="signatureMenu"></ul>' },
            { type: 'Separator', tooltipText: 'separator', align: 'Center' },
            { prefixIcon: 'e-icons e-style', click: ink.bind(this), id: 'ink', tooltipText: 'Ink', align: 'Center' }
        ]
    });
    editAnnotationToolbarToolbar.appendTo('#editAnnotationToolbar');
    var formFieldToolbar = new ej.navigations.Toolbar({
        items: [
         { id: 'textbox', prefixIcon: 'e-icons e-text-form', click: textBox.bind(this), tooltipText: 'Textbox', align: 'Center' },
         { id: 'password', prefixIcon: 'e-icons e-password', click: passWord.bind(this), tooltipText: 'Password', align: 'Center' },
         { id: 'checkbox', prefixIcon: 'e-icons e-check-box', click: checkBox.bind(this), tooltipText: 'Checkbox', align: 'Center' },
         { id: 'radio_button', prefixIcon: 'e-icons e-radio-button', click: radioButton.bind(this), tooltipText: 'Radio Button', align: 'Center' },
         { id: 'drop_down', prefixIcon: 'e-icons e-drop-down', click: dropDown.bind(this), tooltipText: 'Drop Down', align: 'Center' },
         { id: 'list_box', prefixIcon: 'e-icons e-list-unordered', click: listBox.bind(this), tooltipText: 'List Box', align: 'Center' },
         { id: 'formField_signature', prefixIcon: 'e-icons e-signature', tooltipText: 'Add Signature', align: 'Center', template: '<ul id="formFieldSignatureMenu"></ul>'  },
        ]
    });
    formFieldToolbar.appendTo('#formFieldToolbar');
    var magnificationToolbar = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-pv-fit-page-icon', id: 'fitPage', tooltipText: 'Fit to page', click: pageFitClicked.bind(this) },
            { prefixIcon: 'e-icons e-circle-add', id: 'zoomIn', tooltipText: 'Zoom in', click: zoomInClicked.bind(this) },
            { prefixIcon: 'e-icons e-circle-remove' , id: 'zoomOut', tooltipText: 'Zoom out', click: zoomOutClicked.bind(this) }    
        ]
    });
    magnificationToolbar.appendTo('#magnificationToolbar');
    viewer = new ej.pdfviewer.PdfViewer({
        enableToolbar: false,
        enableNavigationToolbar: false,
        enableThumbnail: false,
        enableCommentPanel:false,
        enableAnnotationToolbar:false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf',
        resourceUrl:'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.PageOrganizer);
      
    var switchObj = new ejs.buttons.Switch({ checked: true });
    switchObj.appendTo('#checked');

    switchObj.change = function (args) {
        if (args.checked) {
            viewer.serviceUrl = '';
        }
        else {
            viewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
        }
        viewer.dataBind();
        viewer.load(viewer.documentPath, null);
    };
    
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
    var previousSearch = new ej.buttons.Button({ iconCss: 'e-icons e-chevron-left' });
    previousSearch.appendTo('#previousSearch');
    var nextSearch = new ej.buttons.Button({ iconCss: 'e-icons e-chevron-right' });
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

function previousClicked(args) {
    disableInkAnnotation();
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
    disableInkAnnotation();
    hidePopups();
    viewer.navigation.goToNextPage();
}

function select (args) {
  disableInkAnnotation();
  const textSearchToolbarElement = document.getElementById('textSearchToolbar');
  if (textSearchToolbarElement !== null && textSearchToolbarElement.style.display === 'block') {
    textSearchToolbarElement.style.display = 'none';
  }

  const formFieldToolbarElement = document.getElementById('formFieldToolbar');
  if (formFieldToolbarElement !== null && formFieldToolbarElement.style.display === 'block') {
    formFieldToolbarElement.style.display = 'none';
    viewer.designerMode = false;
  }
  var stampId = args.element.id;
  var stampText = args.element.innerText;
  if(stampId === 'Dynamic' && stampText != null) {
    if(stampText === 'Revised')
    {
      viewer.annotation.setAnnotationMode("Stamp", "Revised");
    }
    else if(stampText == "Reviewed")
    {
      viewer.annotation.setAnnotationMode("Stamp", "Reviewed");
    }
    else if(stampText == "Received")
    {
      viewer.annotation.setAnnotationMode("Stamp", "Received");
    }
    else if(stampText == "Confidential")
    {
      viewer.annotation.setAnnotationMode("Stamp", "Confidential");
    }
    else if(stampText == "Approved")
    {
      viewer.annotation.setAnnotationMode("Stamp", "Approved");
    }
    else if(stampText == "Not Approved")
    {
      viewer.annotation.setAnnotationMode("Stamp", "NotApproved");
    }
  }
  if(stampId === 'Sign Here' && stampText != null) {
    if(stampText === 'Witness')
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, "Witness");
    }
    else if(stampText == "Initial Here")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, "InitialHere");
    }
    else if(stampText == "Sign Here")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, "SignHere");
    }
    else if(stampText == "Accepted")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, "Accepted");
    }
    else if(stampText == "Rejected")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, "Rejected");
    }
  }
  if(stampId === 'Standard Business' && stampText != null) {
    if(stampText === 'Approved')
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "Approved");
    }
    else if(stampText == "Not Approved")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "NotApproved");
    }
    else if(stampText == "Draft")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "Draft");
    }
    else if(stampText == "Final")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "Final");
    }
    else if(stampText == "Completed")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "Completed");
    }
    else if(stampText == "Confidential")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "Confidential");
    }
    else if(stampText == "For Public Release")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "ForPublicRelease");
    }
    else if(stampText == "Not For Public Release")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "NotForPublicRelease");
    }
    else if(stampText == "For Comment")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "ForComment");
    }
    else if(stampText == "Void")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "Void");
    }
    else if(stampText == "Preliminary Results")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "PreliminaryResults");
    }
    else if(stampText == "Information Only")
    {
      viewer.annotation.setAnnotationMode("Stamp", undefined, undefined, "InformationOnly");
    }
  }
  }
function textSelection(args) {
    disableInkAnnotation();
    hidePopups();
    viewer.interactionMode = 'TextSelection';
    viewer.enableTextSelection = true;
}
function panMode(args) {
    disableInkAnnotation();
    hidePopups();
    viewer.interactionMode = 'Pan';
    viewer.enablePanMode = true;
}
function openEditAnnotation(args) {
    disableInkAnnotation();
    const textSearchToolbarElement = document.getElementById('textSearchToolbar');
    if (textSearchToolbarElement !== null && textSearchToolbarElement.style.display === 'block') {
      textSearchToolbarElement.style.display = 'none';
    }

    const formFieldToolbarElement = document.getElementById('formFieldToolbar');
    if (formFieldToolbarElement !== null && formFieldToolbarElement.style.display === 'block') {
      formFieldToolbarElement.style.display = 'none';
      viewer.designerMode = false;
    }
    const editAnnotationToolbarElement = document.getElementById('editAnnotationToolbar');
    if (editAnnotationToolbarElement !== null) {
      if (editAnnotationToolbarElement.style.display === 'block') {
        editAnnotationToolbarElement.style.display = 'none';
      } else {
        editAnnotationToolbarElement.style.display = 'block';
      }
    }

  }

  function addEditFormFields(){
    disableInkAnnotation();
    if(viewer.tool == 'Ink'){
        viewer.annotation.setAnnotationMode('Ink');
    }
    const formFieldToolbarElement = document.getElementById('formFieldToolbar');
    if (formFieldToolbarElement !== null) {
      if (formFieldToolbarElement.style.display === 'block') {
        formFieldToolbarElement.style.display = 'none';
        viewer.designerMode = false;
      } else {
        formFieldToolbarElement.style.display = 'block';
        viewer.designerMode = true;
      }
    }

    const editAnnotationToolbarElement = document.getElementById('editAnnotationToolbar');
    if (editAnnotationToolbarElement !== null && editAnnotationToolbarElement.style.display === 'block') {
      editAnnotationToolbarElement.style.display = 'none';
    }

    const textSearchToolbarElement = document.getElementById('textSearchToolbar');
    if (textSearchToolbarElement !== null && textSearchToolbarElement.style.display === 'block') {
      textSearchToolbarElement.style.display = 'none';
    }
  }
  function highlight() {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Highlight');
  }
  function underLine(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Underline');
  }
  
  function strikeThrough(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Strikethrough');
  }
  
  function addLine(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Line');
  }
  
  function addArrow(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Arrow');
  }
  
  function addRectangle(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Rectangle');
  }
  
  function addCircle(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Circle');
  }
  
  function addPoligon(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Polygon');
  }
  
  function distance(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Distance');
  }
  
  function perimeter(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Perimeter');
  }
  
  function area(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Area');
  }
  
  function radius(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Radius');
  }
  
  function volume(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('Volume');
  }
  
  function freeText(e) {
    disableInkAnnotation();
    viewer.annotation.setAnnotationMode('FreeText');
  }
  
  function ink(e) {
    if(!isInkEnabled)
    {
      viewer.annotation.setAnnotationMode("Ink");
      isInkEnabled=true;
    }
    else
    {
      viewer.annotation.setAnnotationMode("none");
      isInkEnabled =false;
    }
  }
  function textBox(e) {
    viewer.formDesignerModule.setFormFieldMode('Textbox');
  }
  
  function passWord(e) {
    viewer.formDesignerModule.setFormFieldMode('Password');
  }
  
  function checkBox(e) {
    viewer.formDesignerModule.setFormFieldMode('CheckBox');
  }
  
  function radioButton(e) {
    viewer.formDesignerModule.setFormFieldMode('RadioButton');
  }
  
  function dropDown(e) {
    viewer.formDesignerModule.setFormFieldMode('DropDown');
  }
  
  function listBox(e) {
    viewer.formDesignerModule.setFormFieldMode('ListBox');
  }
  
function searchClicked(args) {
    disableInkAnnotation();
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
    disableInkAnnotation();
    hidePopups();
    viewer.print.print();
}
function downloadClicked(args) {
    disableInkAnnotation();
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
function disableInkAnnotation(args) {
  if(isInkEnabled)
  {
    viewer.annotation.setAnnotationMode("none");
    isInkEnabled = false;
  }
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
                viewer.documentPath= uploadedFileUrl;
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
  disableInkAnnotation();
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
function onSignatureClick(event) {
  const editAnnotationToolbarElement = document.getElementById('editAnnotationToolbar');
  if (editAnnotationToolbarElement && editAnnotationToolbarElement.style.display === 'block') {
      if (event.element instanceof HTMLElement) {
          if (event.element.innerText === 'Add Signature') {
            viewer.annotationModule.setAnnotationMode('HandWrittenSignature');
          } else if (event.element.innerText === 'Add Initial') {
            viewer.annotationModule.setAnnotationMode('Initial');
          }
      }
  }

  const formFieldToolbarElement = document.getElementById('formFieldToolbar');
  if (formFieldToolbarElement && formFieldToolbarElement.style.display === 'block') {
      if (event.element instanceof HTMLElement) {
          if (event.element.innerText === 'Add Signature') {
              viewer.formDesignerModule.setFormFieldMode('SignatureField');
          } else if (event.element.innerText === 'Add Initial') {
              viewer.formDesignerModule.setFormFieldMode('InitialField');
          }
      }
  }
}};