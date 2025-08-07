var ej = window.ej; 
var _this = this;
var toolbarObj;
var viewer;
var msgWarning;
var msgError;
var msgSuccess;
//Specifies the visibility of the complete signing.
var buttonVisibility = true;
  //Specifies the visibility of the download icon
var downloadVisibility = true;
var successVisible = false;
var errorVisible = false;
var warningVisible = false;
var documentData;
 // Specifies whether the document has a digital signature or not.
var hasDigitalSignature = false;
var openDocument;
var fileName;
this.default = function () {
    toolbarObj = new ej.navigations.Toolbar({
        items: [
            { prefixIcon: 'e-icons e-folder-open', cssClass: "e-pv-open-document-container", tooltipText: 'Open file', id: 'openButton', click: openDocument.bind(_this), align: "Left" },
                { text: "Complete Signing", width: "150px", disabled: buttonVisibility, align: "Right", tooltipText: "Finish Signing", id: "pdfviewer_sign", click: signDocument.bind(_this), cssClass: "e-pv-button-container" },
                { prefixIcon: 'e-icons e-download', tooltipText: 'Download', align: 'Right', click: downloadClicked.bind(_this), disabled: downloadVisibility, cssClass: "e-pv-download-document-container" }
        ]
    });
    toolbarObj.appendTo('#topToolbar');
    viewer = new ej.pdfviewer.PdfViewer({
        enableToolbar: false,
        enableNavigationToolbar: false,
        enableThumbnail: false,
        enableAnnotationToolbar: false,
        documentPath: 'https://cdn.syncfusion.com/content/pdf/InvisibleDigitalSignature.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib'
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.PageOrganizer);
    viewer.enableTextSelection = false;
    viewer.downloadFileName = 'InvisibleDigitalSignature.pdf';
      //Triggers while adding the signature in signature field.
    viewer.addSignature = function (args) {
        var field;
        field = viewer.retrieveFormFields();
        var signatureFieldCount = 0;
        var signaturesCount = 0;
        for (var i = 0; i < field.Count; i++) {
            if (field[i].Type.ToString() == ("SignatureField")) {
                signatureFieldCount++;
            }
            if (field[i].Value != "" && field[i].Value != null && field[i].Type.ToString() == ("SignatureField")) {
                signaturesCount++;
            }
        }
        if (signatureFieldCount == signaturesCount) {
            if (!hasDigitalSignature) {
                buttonVisibility = false;
                toolbarObj.items[1].disabled = false;
            }
        }
    };
    //Loads a PDF document.
    viewer.documentLoad = function (args) {
        fileName = args.documentName;
        var postData = {
            documentData: documentData
        };
        var options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        };
        var apiUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer/ValidateSignature';
        fetch(apiUrl, options)
            .then(function (response) { return response.json(); })
            .then(function (body) {
            if (body.successVisible || body.warningVisible || body.errorVisible)
                toolbarObj.items[1].disabled = true;
            if (!body.downloadVisibility)
                toolbarObj.items[2].disabled = false;
            if ((body.successVisible)) {
                setTimeout(function () {
                    msgSuccess.content = body.message;
                    msgSuccess.visible = true;
                }, 1000);
                setTimeout(function () {
                    msgSuccess.visible = false;
                }, 5000);
            }
            if ((body.warningVisible)) {
                msgWarning.content = body.message;
                msgWarning.visible = true;
            }
            if (body.errorVisible) {
                msgError.content = body.message;
                msgError.visible = true;
            }
        });
    };
    viewer.appendTo('#pdfViewer');
    document.getElementById('fileUpload').addEventListener('change', readFile, false);
    msgSuccess = new ej.notifications.Message({
        severity: "Success",
        visible: successVisible
    });
    msgSuccess.appendTo('#msg_success');

    msgWarning = new ej.notifications.Message({
        severity: "Warning",
        visible: warningVisible
    });
    msgWarning.appendTo('#msg_warning');

    msgError = new ej.notifications.Message({
        severity: "Error",
        visible: errorVisible
    });
    msgError.appendTo('#msg_error');
   //Triggers while validating the signature in the document.
    function signDocument(e) {
        var url = "https://services.syncfusion.com/js/production/api/pdfviewer/AddSignature";
        viewer.saveAsBlob().then(function (value) {
            var reader = new FileReader();
            reader.readAsDataURL(value);
            reader.onload = function (e) {
                var base64String = e.target ? e.target.result : null;
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
                var requestData = JSON.stringify({ base64String: base64String });
                xhr.onload = function () {
                    if (xhr.status === 200) {
                    documentData = xhr.responseText;
                    viewer.load(xhr.responseText, null);
                    toolbarObj.items[1].disabled = true;
                    toolbarObj.items[2].disabled = false;
                    viewer.fileName = fileName;
                    viewer.downloadFileName = fileName;
                    }
                    else {
                        console.error('Error in AddSignature API:', xhr.statusText);
                    }
                };
                xhr.onerror = function () {
                    console.error('Error reading Blob as Base64.', xhr.statusText);
                };
                xhr.send(requestData);
            };
        }).catch(function (error) {
            console.error('Error saving Blob:', error);
        });
    }
//Downloads the PDF document being loaded in the PDFViewer.
function downloadClicked(args) {
    viewer.download();
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
                toolbarObj.items[2].disabled = true;
                var uploadedFileUrl = e.currentTarget.result;
                documentData = uploadedFileUrl;
                viewer.load(uploadedFileUrl, null);
                viewer.fileName = fileName;
                viewer.downloadFileName = fileName;
            };
        }
    }
}
function openDocument() {
    document.getElementById('fileUpload').click();
}
};