this.default = function () {
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner,ej.pdfviewer.PageOrganizer);
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf",
    resourceUrl:'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'
});
    
    viewer.enableFormFieldsValidation = true;
    viewer.showNotificationDialog = false;

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
    viewer.validateFormFields = function (args) {
        var errorMessage = "Required Field(s): ";
        var formsField = viewer.formFieldCollections;
        var flag = false;
        var radioGroupName = "";
        for (var i = 0; i < formsField.length; i++) {
            var text = "";
            if (formsField[i].isRequired == true) {
                if (formsField[i].type.toString() == "Checkbox" && formsField[i].isChecked == false) {
                    text = formsField[i].name;
                }
                else if (formsField[i].type == "RadioButton" && flag == false) {
                    radioGroupName = formsField[i].name;
                    if(formsField[i].isSelected == true)
                        flag = true;
                }
                else if (formsField[i].type.toString() != "Checkbox" && formsField[i].type != "RadioButton" && formsField[i].value == "") {
                    text = formsField[i].name;
                }
                if (text != "") {

                    if (errorMessage == "Required Field(s): ") {
                        errorMessage += text;
                    }
                    else {
                        errorMessage += ", " + text;
                    }
                }
            }
        }
        if(!flag && radioGroupName != "")
        {
            if(errorMessage == "Required Field(s): ")
                errorMessage += radioGroupName;
            else
                errorMessage += ", " + radioGroupName;
        }
        if (errorMessage != "Required Field(s): ") {
            viewer.showNotificationPopup(errorMessage);
        }
    };
};