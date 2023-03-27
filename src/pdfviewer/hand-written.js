this.default = function () {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "HandwrittenSignature.pdf",
    serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer',
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);
    viewer.appendTo('#pdfViewer');
    viewer.documentLoad = function(args) {
        viewer.annotationModule.setAnnotationMode('HandWrittenSignature');
    };
};