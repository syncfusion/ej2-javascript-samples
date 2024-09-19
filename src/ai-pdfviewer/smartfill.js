this.default = function () {
    /**
     * Smart Fill Sample
     */
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
        ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
        ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);

    let pdfviewer = new ej.pdfviewer.PdfViewer();
    //Replace the service url with your port number.
    pdfviewer.serviceUrl = 'http://localhost:62870/api/pdfviewer';
    pdfviewer.enableAnnotationToolbar = false;
    pdfviewer.enableToolbar = false;
    pdfviewer.zoomMode = "FitToPage";
    pdfviewer.downloadFileName = "SmartFill.pdf"
    pdfviewer.created = sampleCreated;
    pdfviewer.pageClick = checkClickedDiv;
    pdfviewer.documentLoad = documentLoaded;
    pdfviewer.appendTo('#e-pv-smartfill-pdfviewer');
    if (pdfviewer.element) {
        pdfviewer.load('form_document_1.pdf', '');
        const rightContainer = document.getElementById('e-pv-smartfill-right-container');
        const leftContainer = document.getElementById('e-pv-smartfill-left-container');
        const rightContainerBlack = document.getElementById('e-pv-smartfill-right-container-blackout');
        const parentContainer = document.querySelector('.e-pv-viewer-container');
        if (rightContainerBlack) {
            ej.popups.createSpinner({ target: rightContainerBlack });
            ej.popups.hideSpinner(rightContainerBlack);
        }
        let smartFillContainerOpen = false;
        let isFindMobileDevice = false;
        const fileUploadBtn = document.getElementById('e-pv-smartfill-fileUpload');

        /* Function for the document load event */
        function documentLoaded() {
            toolbarObj.hideItem(5, false);
        }

        /* Function for download */
        function downloadClicked() {
            pdfviewer.download();
            isMobileDevice();
        }

        /* Function for print */
        function printClicked() {
            pdfviewer.print.print();
        }

        /* Function for create event */
        function sampleCreated(args) {
            const appbarContainer = document.getElementById('e-pv-smartfill-appbar-container');
            if (appbarContainer) {
                appbarContainer.style.display = 'block';
            }
        }

        /* Initialize the appbar */
        const defaultAppBarObj = new ej.navigations.AppBar({
            colorMode: 'Dark'
        });
        defaultAppBarObj.appendTo('#e-pv-smartfill-defaultappbar');

        /* Initialize the toolbar */
        let toolbarObj = new ej.navigations.Toolbar({
            items: [
                { prefixIcon: 'e-icons e-folder', tooltipText: 'Open', text: 'Open File', id: 'openButton', cssClass: 'e-pv-open-container', click: openDocument },
                { type: "Separator", tooltipText: "separator", align: 'Left' },
                { prefixIcon: 'e-icons e-download', tooltipText: 'Save', text: 'Save', id: 'saveButton', cssClass: 'e-pv-save-container', click: downloadClicked },
                { prefixIcon: 'e-icons e-print', tooltipText: 'Print', text: 'Print', id: 'printButton', cssClass: 'e-pv-print-container', click: printClicked },
                { type: "Separator", tooltipText: "separator" },
                { prefixIcon: 'e-icons e-redaction', tooltipText: 'Smart Fill', text: 'Smart Fill', align: 'Right', id: 'smartFillButton', cssClass: 'e-pv-smartfill-btn-container', click: openSmartFill }
            ]
        });
        toolbarObj.appendTo('#e-pv-smartfill-toolbar');
        toolbarObj.hideItem(5, true);
        /* Initialize the dropdown list for the documents */
        let listObj = new ej.dropdowns.DropDownList({
            index: 0,
            change: valueChange
        });
        listObj.appendTo('#e-pv-smartfill-dropdown-options');

        /* Initialize the textarea to show the contents */
        let inputobj1 = new ej.inputs.TextArea({
            floatLabelType: 'Auto',
            value: "Hi, this is Alice. You can contact me at alice456@gmail.com. I am female, born on July 15, 1998. I want to unsubscribe from a newspaper and learn courses, specifically a Cloud Computing course. I am from Texas."
        });
        inputobj1.appendTo('#e-pv-smartfill-default-textarea');

        /* Initialize the fill form button */
        let smartFillBtn = new ej.buttons.Button({ content: 'Fill Form', isPrimary: true });
        smartFillBtn.appendTo('#e-pv-smartfill-submit');
        let smartfillSubmit = document.getElementById('e-pv-smartfill-submit');
        if (smartfillSubmit) {
            smartfillSubmit.addEventListener('click', getSmartFillResult);
        }

        /* Function for create request to get the form field data */
        function getSmartFillResult() {
            if (rightContainerBlack) {
                rightContainerBlack.style.display = 'block';
            }
            if (rightContainerBlack) {
                ej.popups.showSpinner(rightContainerBlack);
            }
            let data = pdfviewer.getRootElement();
            var hashId = data.ej2_instances[0].viewerBase.hashId;
            var dictionary = {
                "hashId": hashId
            };
            //Replace the service url with your port number.
            let url = "http://localhost:62870/api/pdfviewer/SmartFillClicked";
            let xhr = new XMLHttpRequest();
            xhr.open('Post', url, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let response = xhr.responseText;
                    try {
                        pdfviewer.importFormFields(response, ej.pdfviewer.FormFieldDataFormat.Xfdf);
                        pdfviewer.dataBind();
                        if (rightContainerBlack) {
                            rightContainerBlack.style.display = 'none';
                        }
                        if (rightContainerBlack) {
                            ej.popups.hideSpinner(rightContainerBlack);
                        }
                    } catch (e) {
                        console.error('Failed to parse response as JSON:', e);
                    }
                } else {
                    console.error('Request failed with status:', xhr.status, xhr.statusText);
                }
            };
            xhr.onerror = function () {
                console.error('Network error');
            };
            pdfviewer.exportFormFieldsAsObject(ej.pdfviewer.FormFieldDataFormat.Xfdf)
                .then((xfdfdata) => {
                    var post = JSON.stringify({
                        jsonObject: dictionary,
                        textareaContent: inputobj1.value,
                        exportFormFieldValue: xfdfdata
                    });
                    xhr.send(post); // Handle the XFDF data here
                })
                .catch((error) => {
                    console.error('Error getting XFDF data:', error);
                });
        }

        /* Function for the value change event for the dropdown */
        function valueChange(args) {
            if (args.itemData.text == "User Registration Form") {
                pdfviewer.load('form_document_1.pdf', '');
                pdfviewer.dataBind();
                inputobj1.value = "Hi, this is Alice. You can contact me at alice456@gmail.com. I am female, born on July 15, 1998. I want to unsubscribe from a newspaper and learn courses, specifically a Cloud Computing course. I am from Texas.";
                inputobj1.dataBind();
            }
            if (args.itemData.text == "Job Application Form") {
                pdfviewer.load('form_document_2.pdf', '');
                pdfviewer.dataBind();
                inputobj1.value = "Hello, my name is John Paul, and I'm interested in applying for the Coach position. I'm currently self-employed, and you can contact me at johnpaul2209@gmail.com. For reference, please use my designated email: john123@gmail.com.";
                inputobj1.dataBind();
            }
            if (args.itemData.text == "Contact Form") {
                pdfviewer.load('form_document_3.pdf', '');
                pdfviewer.dataBind();
                inputobj1.value = "Hello, My name is Peter Parker. You can contact me at peterparker03@gmail.com or on my personal number, 9876543210. I'm writing to request the blocking of my credit card, which has unfortunately been lost.";
                inputobj1.dataBind();
            }
        }

        /* Function for read the open file */
        function readFile(args) {
            let upoadedFiles = args.target.files;
            if (args.target.files[0] !== null) {
                let uploadedFile = upoadedFiles[0];
                if (uploadedFile) {
                    let reader = new FileReader();
                    let filename = upoadedFiles[0].name;
                    reader.readAsDataURL(uploadedFile);
                    reader.onload = (e) => {
                        let uploadedFileUrl = e.currentTarget.result;
                        pdfviewer.documentPath = uploadedFileUrl;
                        pdfviewer.fileName = filename;
                    };
                }
            }
        }

        if (parentContainer) {
            parentContainer.addEventListener('touchstart', checkClickedDiv);
        }

        function checkClickedDiv() {
            if (ej.base.Browser.isDevice && !isFindMobileDevice) {
                if (rightContainer) {
                    rightContainer.style.display = 'none';
                    smartFillContainerOpen = false;
                }
            }
        }
        function isMobileDevice() {
            //Check if the device is mobile
            var isMobile = ej.base.Browser.isDevice;
            var sampleContent = document.getElementById('e-pv-smart-fill-container')
            if (isMobile) {
                var sampleContentRect = sampleContent?.getBoundingClientRect();
                var sampleContentMinWidth = 450;
                if (sampleContentRect && ((sampleContentRect.width) > sampleContentMinWidth)) {
                    return false;
                } else {
                    return true;
                }
            }
            isFindMobileDevice = isMobile;
        }
        /* Function to open the smart fill container */
        function openSmartFill() {
            if (!smartFillContainerOpen) {
                if (!ej.base.Browser.isDevice) {
                    if (leftContainer) {
                        leftContainer.style.width = '70%';
                    }
                    pdfviewer.updateViewerContainer();
                    pdfviewer.dataBind();
                    toolbarObj.refreshOverflow();
                }
                if (rightContainer) {
                    rightContainer.style.display = 'block';
                }
                smartFillContainerOpen = true;
            }
            else {
                if (!ej.base.Browser.isDevice) {
                    if (leftContainer) {
                        leftContainer.style.width = '100%';
                    }
                    setTimeout(() => {
                        pdfviewer.updateViewerContainer();
                    }, 50);
                    toolbarObj.refreshOverflow();
                }
                if (rightContainer) {
                    rightContainer.style.display = 'none';
                }
                smartFillContainerOpen = false;
            }
        }

        /* Function for open the document */
        function openDocument(e) {
            fileUploadBtn?.click();
        }
        fileUploadBtn.addEventListener('change', readFile, false)
    }
};