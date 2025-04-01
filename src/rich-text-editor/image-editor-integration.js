/**
 * Rich Text Editor Image Editor integration sample
 */
 
 this.default = function() {
    var selection = new ej.richtexteditor.NodeSelection();
    var header = 'Image Editor';
    var range;
    var saveSelection;
    var dataURL;
    var isLoaded = false;
    var imageEditorObj;
    var imageELement;

    var dlgButtons = [
        {
            buttonModel: {
                content: 'Insert',
                isPrimary: true
            },
            click: onInsert.bind(this),
        },
        {
            buttonModel: {
                content: 'Cancel'
            },
            click: onCancel
        },
    ];

    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        quickToolbarSettings: {
            image: [
                'Replace',
                'Align',
                'Caption',
                'Remove',
                '-',
                'InsertLink',
                'OpenImageLink',
                'EditImageLink',
                'RemoveImageLink',
                'Display',
                'AltText',
                {
                    tooltipText: 'Image Editor',
                    template: '<button class="e-tbar-btn e-btn" id="imageEditor"><span class="e-btn-icon e-icons e-rte-image-editor"></span>',
                },
            ],
        },
        toolbarClick: onToolbarClick
    });
    defaultRTE.appendTo('#defaultRTE');

    var dialogObj = new ej.popups.Dialog({
        buttons: dlgButtons,
        open:open,
        beforeOpen: OnBeforeOpen,
        header: header,
        visible: false,
        showCloseIcon: true,
        width: '800px',
        height: '800px',
        isModal: true,
        close: onclose
    });
    dialogObj.appendTo('#defaultDialog');

    function onToolbarClick(args){
        if (args.item.tooltipText === 'Image Editor') {
            range = selection.getRange(document);
            saveSelection = selection.save(range, document);
            dialogObj.show();
            defaultRTE.quickToolbarModule.imageQTBar.hidePopup();
          }
    }

    function onInsert() {
        if (defaultRTE.formatter.getUndoRedoStack().length === 0) {
          defaultRTE.formatter.saveData();
        }
        saveSelection.restore();
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var imgData = imageEditorObj.getImageData();
        canvas.height = imgData.height;
        canvas.width = imgData.width;
        ctx.putImageData(imgData, 0, 0);
        isLoaded = true;
        defaultRTE.executeCommand('editImage', {
          url: canvas.toDataURL(),
          width: { width: canvas.width },
          height: { height: canvas.height },
          selection: saveSelection,
          cssClass: imageELement.getAttribute('class').replace('e-rte-image', '')
        });
        defaultRTE.formatter.saveData();
        defaultRTE.formatter.enableUndo(defaultRTE);
        dispose();
        dialogObj.hide();
    }

    function onCancel() {
        dispose();
        dialogObj.hide();
        isLoaded = true;
    }
    function onclose() {
        dispose();
        dialogObj.hide();
        isLoaded = true;
    }
    function open() {
        imageEditorObj.update();
        imageEditorObj.open(dataURL);
    }

    function OnBeforeOpen() {
            isLoaded = false;
        var selectNodes =
            defaultRTE.formatter.editorManager.nodeSelection.getNodeCollection(range);
        if (selectNodes.length == 1 && selectNodes[0].tagName == 'IMG') {
            imageELement = selectNodes[0];
            imageELement.crossOrigin = 'anonymous';
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            canvas.height = imageELement.offsetHeight;
            canvas.width = imageELement.offsetWidth;
            imageELement.onload = function () {
                ctx.drawImage(imageELement, 0, 0, canvas.width, canvas.height);
                dataURL = canvas.toDataURL();
            };
            if (!isLoaded) {
                imageEditorObj = new ej.imageeditor.ImageEditor({
                    height: '450px'
                });
                imageEditorObj.appendTo('#imageeditor');
            }
        }
    }

    function dispose() {
        if (imageEditorObj !== null && imageEditorObj !== undefined) {
            var imageEditorInstance = ej.base.getComponent(document.getElementById('imageeditor'), 'image-editor');
            if (imageEditorInstance !== null && imageEditorInstance !== undefined) {
                imageEditorInstance.destroy();
            }
        }
    }
};
