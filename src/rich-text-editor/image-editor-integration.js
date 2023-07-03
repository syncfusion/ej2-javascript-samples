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
    var imageELement;
    var imageEditorObj;
    var dlgButtons = [
        {
          buttonModel: { content: 'Save', isPrimary: true },
          click: onInsert.bind(this),
        },
        { buttonModel: { content: 'Cancel' }, click: onCancel },
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
              'Display',
              'AltText',
              {
                tooltipText: 'Image Editor',
                template:
                  '<button class="e-tbar-btn e-btn" id="imageEditor"><span class="e-btn-icon e-icons e-rte-image-editor"></span>',
              },
            ],
          },
        
          toolbarClick: onToolbarClick,
          destroyed: destroyed
      });
     defaultRTE.appendTo('#defaultRTE');
 
     var dialogObj = new ej.popups.Dialog({
        buttons: dlgButtons,
        open: OnOpen,
        header: header,
        visible: false,
        showCloseIcon: true,
        width: '800px',
        height: '550px',
        isModal: true,
      });
      dialogObj.appendTo('#defaultDialog');
      
    function destroyed() {
        dialogObj.destroy();
      }

    function onToolbarClick(args){
        if (args.item.tooltipText === 'Image Editor') {
            range = selection.getRange(document);
            saveSelection = selection.save(range, document);
            dialogObj.show();
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
          cssClass: imageELement.getAttribute('class').replace('e-rte-image', ''),
        });
        defaultRTE.formatter.saveData();
        defaultRTE.formatter.enableUndo(defaultRTE);
        dialogObj.hide();
        isLoaded = false;
      }
      
      function onCancel() {
        imageEditorObj.destroy();
        imageEditorObj = null;
        dialogObj.hide();
      }
      function OnOpen() {
        if(imageEditorObj == null){
          imageEditorObj = new ej.imageeditor.ImageEditor({
            height: '400px',
            toolbar: ['Undo', 'Redo', 'Crop', 'Annotate', 'ZoomIn', 'ZoomOut',
            'Reset', 'Pan', 'Finetune', 'Filter', 'Pen', 'Line', 'Rectangle', 'Ellipse', 'Arrow',
            'Path', 'Text', 'CustomSelection', 'CircleSelection', 'SquareSelection', 'RatioSelection',
            'Default', 'Chrome', 'Cold', 'Warm', 'Grayscale', 'Sepia', 'Invert', 'Brightness', 'Contrast',
            'Hue', 'Saturation', 'Exposure', 'Opacity', 'Blur' ]
          });
          imageEditorObj.appendTo('#imageeditor');
        }
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
            if (!isLoaded) {
              imageEditorObj.open(dataURL);
            }
          };
          if (imageELement.complete) {
            imageELement.onload();
          }
        }
      }     
 };
