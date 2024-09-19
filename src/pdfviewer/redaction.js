this.default = function () {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer({
        enableToolbar: false,
        enableNavigationToolbar: false,
        enableThumbnail: false,
        enableCommentPanel: false,
        enableAnnotationToolbar: false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/programmatical-annotations.pdf',
        serviceUrl: 'https://ej2services.syncfusion.com/js/development/api/pdfviewer'
    });
    viewer.appendTo('#pdfViewer');

    //Event listener for the download button
    document.getElementById('defaultButtonDownload').addEventListener('click', downloadClicked);

    //Creation of appbar
    var defaultAppBarObj = new ej.navigations.AppBar({
        colorMode: 'Primary'
    });
    defaultAppBarObj.appendTo('#defaultAppBar');

    //Creation download button
    var defaultButtonDownloadObj = new ej.buttons.Button({ cssClass: 'e-inherit', iconCss: 'e-icons e-download e-btn-icon e-icon-left', content: 'Download' });
    defaultButtonDownloadObj.appendTo('#defaultButtonDownload');

    var redactionCount = 0;
    var annotation;
    var fileName = "programmatical-annotations.pdf";
    //Creation of Toolbar with open , text , image , pattern , blackout, whiteout and redaction buttons
    var primaryToolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-icon e-folder', tooltipText: 'Open', cssClass: 'e-pv-redact-sb-open-container', id: 'pdfviewer_open', text: 'Open', click: openDocumentClicked.bind(this) },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-icon e-text-annotation', tooltipText: 'Text', cssClass: 'e-pv-redact-sb-font-container', text: 'Text', click: addText.bind(this)
            },
            {
                prefixIcon: 'e-icons e-image', tooltipText: 'Image', cssClass: 'e-pv-redact-sb-image-btn', text: 'Image', id: 'targetButton'
            },
            {
                prefixIcon: 'e-icons e-opacity', tooltipText: 'Pattern', cssClass: 'e-pv-redact-sb-pattern-container', text: 'Pattern', click: addPattern.bind(this)
            },
            {
                prefixIcon: 'e-icons black-out', tooltipText: 'Black out', cssClass: 'e-pv-redact-sb-black-out-container', text: 'Blackout', click: addBlackout.bind(this)
            },
            {
                prefixIcon: 'e-icons white-out', tooltipText: 'White Out', cssClass: 'e-pv-redact-sb-white-out-container', text: 'Whiteout', click: addWhiteout.bind(this)
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-icons e-redact', tooltipText: 'Redaction' , cssClass: 'e-pv-redact-sb-redaction-container', text: 'Redact', id: 'redacticon', click: redaction.bind(this), disabled: true
            }
        ]
    });
    primaryToolbarObj.appendTo('#e-pv-redact-sb-toolbar');

    var CurrentpageNumber = '<div><span id="e-pv-redact-sb-currentPage" title="Current Page">1 </span><span id="e-pv-redact-sb-totalPage" title="Total Page">/ 1</span></div>';
    var zoomList = ['10%', '25%', '50%', '75%', '100%', '200%', '400%'];

    //Creation of toolbar with navigations and zoom dropdown
    var secondaryToolbarObj = new ej.navigations.Toolbar({
        items: [
            {
                prefixIcon: 'e-icon e-chevron-left', cssClass: 'e-pv-redact-sb-previous-container', id: 'previousPage', tooltipText: 'Previous Page' , click: previousClicked.bind(this), disabled: true
            },
            {
                template: CurrentpageNumber
            },
            {
                prefixIcon: 'e-icon e-chevron-right', cssClass: 'e-pv-redact-sb-next-container', id: 'nextPage', tooltipText: 'Next Page' , click: nextClicked.bind(this), disabled: true
            },
            {
                type: 'Separator'
            },
            {
                type: 'Input', tooltipText: 'Zoom', cssClass: 'percentage', align: 'Left', template: new ej.dropdowns.ComboBox({ width: 88, value: '100%', dataSource: zoomList, popupWidth: 85, showClearButton: false, readonly: false, change: zoomValueChange.bind(this) }), id: 'zoomBox'
            }
        ]
    });
    secondaryToolbarObj.appendTo("#e-pv-redact-sb-toolbar-secondary");

    //To create dialog box to upload the image
    var icontemp = '<button id="cancelButton" class="e-control e-btn e-primary" data-ripple="true">' + 'Cancel</button>';
    var headerimg = '<span class="header-content"></span>';
    var cancelButton = new ej.buttons.Button();
    var dialog = new ej.popups.Dialog({
        header: headerimg + '<div id="dlg-template" title="upload" class="e-icon-settings"> Upload Image </div>',
        footerTemplate: icontemp,
        showCloseIcon: true,
        visible: false,
        target: '#e-pv-redact-sb-panel',
        width: '477px',
        isModal: true
    });
    dialog.appendTo("#e-pv-redact-sb-dialog");
    cancelButton.appendTo("#cancelButton");
    document.getElementById("targetButton").onclick = function () {
        dialog.show();
    };

    document.getElementById("cancelButton").onclick = function () {
        dialog.hide();
    };


    //To select image from file manager and displaying to the pdf
    var customStampSource = "";
    var dropElement = document.getElementsByClassName(
        'drop-area-wrap'
    )[0];

    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl:
                'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl:
                'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        },
        dropArea: dropElement,
        change: onFileChange,
        allowedExtensions: '.png, .jpg, .jpeg',
        multiple: false
    });
    uploadObj.appendTo('#fileupload');

    //When the selected image is clicked
    function handleImageClick(args) {
        customStampSource = imageSrc;
        dialog.hide();
        addImage();
    }

    var imageSrc;
    function onFileChange(args) {
        var file = args.file[0].rawFile;
        var imageElement = document.getElementById('imageView');
        var imageElementContainer = document.getElementById('imageContainer');
        var reader = new FileReader();
        reader.onload = function (e) {
            var base64String = e.target ? e.target.result : null;
            imageSrc = base64String;
            customStampSource = imageSrc;
            (imageElement).src = imageSrc;
            imageElementContainer.className =
                'image-container e-pv-redact-sb-image-container-selected';
            (imageElement).style.display = 'block';
            // Bind click event to the image element
            imageElement.addEventListener('click', handleImageClick);
        };
        reader.readAsDataURL(file);
    }
    document.getElementById('fileUpload').addEventListener('change', readFile, false);

    //To get the curret page number
    var currentPageBox;
    currentPageBox = document.getElementById('e-pv-redact-sb-currentPage');
    (currentPageBox).value = '1';
    var totalPageBox;
    totalPageBox = document.getElementById('e-pv-redact-sb-totalPage');
    (totalPageBox).value = '1';

    //Updating the total number of pages while loading
    viewer.documentLoad = function (args) {
        (document.getElementById('e-pv-redact-sb-currentPage')).textContent = viewer.currentPageNumber.toString();
        document.getElementById('e-pv-redact-sb-totalPage').textContent = ' / ' + viewer.pageCount;
        updatePageNavigation();
        updateRedaction();

    };

    //Updating the number of redaction while the annotation has been added
    viewer.annotationAdd = function (args) {
        var pdfAnnotationList = [];
        pdfAnnotationList = viewer.annotationCollection;
        var selectedAnnotationIndex = pdfAnnotationList.findIndex(function (item) {
            return item.annotationId == args.annotationId;
        });
        if (selectedAnnotationIndex != -1) {
            annotation = pdfAnnotationList[selectedAnnotationIndex];
        }
        if (annotation.author == "Redaction" || annotation.customStampName == "Image" || annotation.author == "Pattern" || annotation.author == "Text") {
            redactionCount = redactionCount + 1;
            updateRedaction();
        }

    };

    //Updating the number of redaction while the annotation has been removed
    viewer.annotationRemove = function (args) {
        if (annotation.author == "Redaction" || annotation.customStampName == "Image" || annotation.author == "Pattern" || annotation.author == "Text") {
            redactionCount = redactionCount - 1;
            updateRedaction();
        }

    };

    //Updating the current page number while changing the page
    viewer.pageChange = function (args) {
        (currentPageBox).value = viewer.currentPageNumber.toString();
        (document.getElementById('e-pv-redact-sb-currentPage')).textContent = viewer.currentPageNumber.toString() + ' ';
        updatePageNavigation();
    };

    //Updating the navigation button based on the page number either "enabled" or "disabled"
    function updatePageNavigation() {
        if (viewer.currentPageNumber === 1) {
            secondaryToolbarObj.items[0].disabled = true;
            secondaryToolbarObj.items[2].disabled = false;

        }
        else if (viewer.currentPageNumber === viewer.pageCount) {
            secondaryToolbarObj.items[0].disabled = false;
            secondaryToolbarObj.items[2].disabled = true;
        }
        else {
            secondaryToolbarObj.items[0].disabled = false;
            secondaryToolbarObj.items[2].disabled = false;
        }
    }
    //To enable the redaction button based on count
    function updateRedaction() {
        if (redactionCount <= 0) {
            primaryToolbarObj.items[8].disabled = true;
        }
        else {
            primaryToolbarObj.items[8].disabled = false;
        }

    }

    //Method for moving to next page 
    function nextClicked(args) {
        viewer.navigation.goToNextPage();
    }

    //Method for moving to previous page
    function previousClicked(args) {
        viewer.navigation.goToPreviousPage();
    }

    //Zoom values changes when the percentage is selected from the dropdown
    function zoomValueChange(args) {
        var zoom = (args).value;
        var previousZoom = (args).previousItemData.value;
        if (zoom !== null || previousZoom !== null) {
            var zoomchange = parseInt(zoom.replace("%", ""), 10);
            viewer.magnificationModule.zoomTo(zoomchange);
        }
    }

    //To download the redacted pdf 
    function downloadClicked() {
        viewer.fileName = fileName;
        viewer.downloadFileName = fileName;
        viewer.serverActionSettings.download = "Redaction";
        viewer.download();
        viewer.serverActionSettings.download = "Download";

    }

    function readFile(args) {
        // tslint:disable-next-line
        var upoadedFiles = args.target.files;
        if (args.target.files[0] !== null) {
            var uploadedFile = upoadedFiles[0];
            fileName = upoadedFiles[0].name;
            if (uploadedFile) {
                var reader = new FileReader();
                reader.readAsDataURL(uploadedFile);
                // tslint:disable-next-line
                reader.onload = function (e) {
                    var uploadedFileUrl = e.currentTarget.result;
                    viewer.documentPath = uploadedFileUrl;
                    viewer.fileName = fileName;
                    viewer.downloadFileName = fileName;
                    currentPageBox.value = '1';
                    totalPageBox.value = '1';
                };
            }
        }
    }

    //To open a file from viewer
    function openDocumentClicked(args) {
        var textSearchToolbarElement = document.getElementById('textSearchToolbar');
        if (textSearchToolbarElement !== null && textSearchToolbarElement.style.display === 'block') {
            textSearchToolbarElement.style.display = 'none';
        }
        document.getElementById('fileUpload').click();
    }

    //Method to create rectangle annotation when "Text" button is clicked
    function addText(args) {
        viewer.rectangleSettings = {
            fillColor: '#a3a2a0',
            strokeColor: '#a3a2a0',
            author: 'Text'
        };
        viewer.annotation.setAnnotationMode('Rectangle');

    }

    //Adding the image to the pdf
    function addImage() {
        viewer.stampSettings.author = "Image";
        viewer.customStampSettings = {
            width: 200,
            author: 'Image',
            height: 125,
            isAddToMenu: false,
            enableCustomStamp: false

        };
        viewer.customStamp = [
            {
                customStampName: 'Image',
                customStampImageSource: customStampSource
            },
        ];
    }

    //Method to create rectangle annotation when the "Pattern" button is clicked
    function addPattern(args) {
        viewer.rectangleSettings = {
            fillColor: '#dedfe0',
            strokeColor: '#dedfe0',
            author: 'Pattern'
        };
        viewer.annotation.setAnnotationMode('Rectangle');
    }

    //Method to create rectangle annotation when the "Blackout" button is clicked
    function addBlackout(args) {
        viewer.rectangleSettings = {
            fillColor: '#000000',
            strokeColor: '#000000',
            author: 'Redaction'
        };
        viewer.annotation.setAnnotationMode('Rectangle');

    }
    //Method to create rectangle annotation when the "Whiteout" button is clicked
    function addWhiteout(args) {
        viewer.rectangleSettings = {
            fillColor: '#ffffff',
            strokeColor: '#ffffff',
            author: 'Redaction'
        };
        viewer.annotation.setAnnotationMode('Rectangle');

    }

    //To redact the pdf in server side using the button click event
    function redaction() {
        if (redactionCount > 0) {
            viewer.serverActionSettings.download = "Redaction";
            viewer.saveAsBlob().then(function (value) {
                var data = value;
                var reader = new FileReader();
                reader.readAsDataURL(data);
                reader.onload = function (e) {
                    var base64String = e.target ? e.target.result : null;
                    viewer.load(base64String, null);
                };
            });
            redactionCount = 0;
            updateRedaction();
            viewer.serverActionSettings.download = "Download";
        }
    }

};