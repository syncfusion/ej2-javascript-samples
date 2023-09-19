this.default = function () {
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
});
      
    var switchObj = new ejs.buttons.Switch({ checked: true });
    switchObj.appendTo('#checked');

    switchObj.change = function (args) {
        if (args.checked) {
            viewer.serviceUrl = '';
        }
        else {
            viewer.serviceUrl = 'https://ej2services.syncfusion.com/js/development/api/pdfviewer';
        }
        viewer.dataBind();
        viewer.load(viewer.documentPath, null);
    };

    viewer.appendTo('#pdfViewer');

    viewer.documentLoad = function (args) {
        if(args.documentName === 'form-designer.pdf')
        {
            viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "Last Name", bounds: { X: 530, Y: 229, Width: 150, Height: 24 } });
            viewer.formDesignerModule.addFormField("RadioButton", { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: "Gender", isSelected: false });
            viewer.formDesignerModule.addFormField("RadioButton", { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: "Gender", isSelected: false });
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOB Month", bounds: { X: 146, Y: 320, Width: 35, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOB Date", bounds: { X: 193, Y: 320, Width: 35, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOB Year", bounds: { X: 242, Y: 320, Width: 35, Height: 24 } });
            viewer.formDesignerModule.addFormField("InitialField", { name: "Agree", bounds: { X: 148, Y: 408, Width: 200, Height: 43 } });
            viewer.formDesignerModule.addFormField("InitialField", { name: "Do Not Agree", bounds: { X: 148, Y: 466, Width: 200, Height: 43 } });
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Text Message", bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false });
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Email", bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false });
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Appointment Reminder", bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false });
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Request for Customerservice", bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false });
            viewer.formDesignerModule.addFormField("CheckBox", { name: "Information Billing", bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false });
            viewer.formDesignerModule.addFormField("Textbox", { name: "My Email", bounds: { X: 146, Y: 850, Width: 200, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "My Phone", bounds: { X: 482, Y: 850, Width: 200, Height: 24 } });
            viewer.formDesignerModule.addFormField("SignatureField", { name: "Sign", bounds: { X: 57, Y: 923, Width: 200, Height: 43 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOS Month", bounds: { X: 386, Y: 923, Width: 35, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOS Date", bounds: { X: 434, Y: 923, Width: 35, Height: 24 } });
            viewer.formDesignerModule.addFormField("Textbox", { name: "DOS Year", bounds: { X: 482, Y: 923, Width: 35, Height: 24 } });
        }
    };
    viewer.enableFormFieldsValidation = true;
    viewer.showNotificationDialog = false;
    viewer.validateFormFields = function (args) {
        var errorMessage = "Required Field(s): ";
        var forms = viewer.formFieldCollections;
        var flag = false;
        var radioGroupName = "";
        for (var i = 0; i < forms.length; i++) {
            var text = "";
            if (forms[i].isRequired == true) {
                if (forms[i].type.toString() == "Checkbox" && forms[i].isChecked == false) {
                    text = forms[i].name;
                }
                else if (forms[i].type == "RadioButton" && flag == false) {
                    radioGroupName = forms[i].name;
                    if(forms[i].isSelected == true)
                        flag = true;
                }
                else if (forms[i].type.toString() != "Checkbox" && forms[i].type != "RadioButton" && forms[i].value == "") {
                    text = forms[i].name;
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
