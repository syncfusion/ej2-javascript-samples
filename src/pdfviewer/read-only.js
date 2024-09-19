this.default = function () {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "https://cdn.syncfusion.com/content/pdf/restricted-formfield.pdf",
    resourceUrl:'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    toolbarSettings: { showTooltip : true, toolbarItems: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'PrintOption']}
});
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation,ej.pdfviewer.FormFields,ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner);
      
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
    viewer.enablePageOrganizer = false;
    viewer.appendTo('#pdfViewer');
    viewer.enableStickyNotesAnnotation=false;
    viewer.annotationSettings = {  
        isLock:true,       
    };

    viewer.textFieldSettings = {
      isReadOnly: true,
    };
    viewer.passwordFieldSettings = {
        isReadOnly: true,
    };
    viewer.checkBoxFieldSettings = {
        isReadOnly: true,
    };
    viewer.radioButtonFieldSettings = {
        isReadOnly: true,
    };
    viewer.listBoxFieldSettings = {
        isReadOnly: true,
    };
    viewer.DropdownFieldSettings = {
        isReadOnly: true,
    };
    viewer.signatureFieldSettings = {
        isReadOnly: true,
    };
    viewer.initialFieldSettings = {
        isReadOnly: true,
    };
    viewer.listBoxFieldSettings = {
        isReadOnly: true,
    };
    viewer.passwordFieldSettings = {
        isReadOnly: true,
    };
    viewer.contextMenuOption = 'None';
};