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
    var dlgButtons = [
        {
          buttonModel: { content: 'Insert', isPrimary: true },
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
        
          toolbarClick: onToolbarClick
      });
     defaultRTE.appendTo('#defaultRTE');
 
     var dialogObj = new ej.popups.Dialog({
        buttons: dlgButtons,
        open: OnOpen,
        header: header,
        visible: false,
        showCloseIcon: true,
        width: '800px',
        height: '800px',
        isModal: true,
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
        });
        defaultRTE.formatter.saveData();
        defaultRTE.formatter.enableUndo(defaultRTE);
        dialogObj.hide();
        isLoaded = false;
      }
      
      function onCancel() {
        dialogObj.hide();
        imageEditorObj.reset();
      }
      function OnOpen() {
        if (!imageEditorObj) {
          imageEditorObj = new ej.imageeditor.ImageEditor({
            height: '450px',
          });
          imageEditorObj.appendTo('#imageeditor');
        }
        var imageELement;
        var selectNodes =
          defaultRTE.formatter.editorManager.nodeSelection.getNodeCollection(range);
        if (selectNodes.length == 1 && selectNodes[0].tagName == 'IMG') {
          imageELement = selectNodes[0];
          imageELement.crossOrigin = 'anonymous';
          var imageUrl = imageELement.src + '?timestamp=' + Date.now();
          imageELement.src = imageUrl;
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
        }
      }     
 };
