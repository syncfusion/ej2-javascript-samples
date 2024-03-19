this.default = function () {
    var data = [{
        'FileName': 'Pdf Succinctly.pdf',
        'Document': 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        'Author': 'Ryan Hodson',
    },
    {
        'FileName': 'Hive Succinctly.pdf',
        'Document': 'https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf',
        'Author': 'Elton Stoneman',
    },
    {
        'FileName': 'GIS Succinctly.pdf',
        'Document': 'https://cdn.syncfusion.com/content/pdf/gis-succinctly.pdf',
        'Author': 'Peter Shaw',
    },
    {
        'FileName': 'JavaScript Succinctly.pdf',
        'Document': 'https://cdn.syncfusion.com/content/pdf/Javascript-succinctly.pdf',
        'Author': 'Cody Lindley',
    },
    {
        'FileName': 'HTTP Succinctly.pdf',
        'Document': 'https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf',
        'Author': 'Scott Allen',
    }];

    var dialogObj = new ej.popups.Dialog({
        header: '',
        animationSettings: { effect: 'None' },
        showCloseIcon: true,
        width: '90%',
        height: '90%',
        visible: false,
        isModal: true,
        enableResize: true,
        position: { X: 'center', Y: 'center' }
    });
    dialogObj.appendTo('#defaultDialog');

    var commandClick = function (args) {
        var mode = args.target.title;
        dialogObj.header = args.rowData.FileName;
        if (mode === 'View') {
            viewer.enableStickyNotesAnnotation = false;
            viewer.enableAnnotationToolbar = false;
            viewer.isFormDesignerToolbarVisible = false;
            viewer.toolbarSettings = {
                showTooltip: true,
                toolbarItems: [
                    'OpenOption',
                    'PageNavigationTool',
                    'MagnificationTool',
                    'PanTool',
                    'SearchOption',
                    'PrintOption',
                ],
            };
            viewer.annotationSettings = {
                isLock: true,
            };
            viewer.textFieldSettings = {
                isReadOnly: true,
            };
            viewer.radioButtonFieldSettings = {
                isReadOnly: true,
            };
            viewer.DropdownFieldSettings = {
                isReadOnly: true,
            };
            viewer.checkBoxFieldSettings = {
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
        } else {
            viewer.enableStickyNotesAnnotation = true;
            viewer.enableAnnotationToolbar = true;
            viewer.toolbarSettings = {
                showTooltip: true,
                toolbarItems: [
                    'OpenOption',
                    'UndoRedoTool',
                    'PageNavigationTool',
                    'MagnificationTool',
                    'PanTool',
                    'SelectionTool',
                    'CommentTool',
                    'SubmitForm',
                    'SearchOption',
                    'AnnotationEditTool',
                    'FormDesignerEditTool',
                    'PrintOption',
                    'DownloadOption',
                ],
            };
            viewer.annotationSettings = {
                isLock: false,
            };
            viewer.textFieldSettings = {
                isReadOnly: false,
            };
            viewer.radioButtonFieldSettings = {
                isReadOnly: false,
            };
            viewer.DropdownFieldSettings = {
                isReadOnly: false,
            };
            viewer.checkBoxFieldSettings = {
                isReadOnly: false,
            };
            viewer.signatureFieldSettings = {
                isReadOnly: false,
            };
            viewer.initialFieldSettings = {
                isReadOnly: false,
            };
            viewer.listBoxFieldSettings = {
                isReadOnly: false,
            };
            viewer.passwordFieldSettings = {
                isReadOnly: false,
            };
            viewer.contextMenuOption = 'RightClick';
        }
        viewer.dataBind();
        viewer.load(args.rowData.Document,null);
        dialogObj.show();
    };
    var grid = new ej.grids.Grid({
        dataSource: data,
        commandClick: commandClick,
        destroyed: destroyed,
        columns: [
            { template: '#fileNameTemplate', headerText: 'File Name' },
            { headerText: 'Author', field: 'Author' },
            { textAlign: 'Center', headerText: 'Actions', commands: [{ buttonOption: { cssClass: 'e-icons e-eye e-flat' }, title: 'View' }, { buttonOption: { cssClass: 'e-icons e-edit e-flat' }, title: 'Edit' }] },
        ]
    });
    grid.appendTo('#Grid');

    var viewer = new ej.pdfviewer.PdfViewer ({
        documentPath: "",
        resourceUrl:'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner,ej.pdfviewer.PageOrganizer);
        
    var switchObj = new ejs.buttons.Switch({ checked: true });
    switchObj.appendTo('#checked');

    switchObj.change = function (args) {
        if (args.checked) {
            viewer.serviceUrl = '';
        }
        else {
            viewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
        }
    };
    viewer.height ="775px";
    viewer.appendTo('#pdfViewer');

    function destroyed(){
        viewer.destroy();
        dialogObj.destroy();
    }
};