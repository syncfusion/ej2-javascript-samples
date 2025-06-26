this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({toolbarMode: 'Ribbon', serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"UEsDBAoAAAAIAEqJbVbMYSO7bAUAAMgmAAAEAAAAc2ZkdO1azW7jNhB+FYK9GllbtuWNTy3SGls0WQTb7mGx9oGSKIswRSoUFScb7Lt3KFLxH90osREHaJLD0CRnOPPx04wy8QOWhWY5+0H/ThONx1pVtINLGuPx9wcMslB4/ICLJR6HvaCDiwyPR+cw4DkMQContZORk0la4HEXpKR2kCV43A87OHUyYvV0BCfhz3R5TeYUg/25KGHiN0UiFsNnEUsOE70OpjfLWvJIx7WmXfk++wlGam+L1LgaJao0UsOxD7DGtZVqbmXkPmdW3BoBkpTWrVIL45BUOeFwPmep2xDX1lPj7i+DwSi4GEwmGOZZfXa9aqwvdO2cMaJlARseGs3yB/j/EQCAj/hKCqnvC4oupCrZLYGjtkx3jIYByeqYkVcrJfsWREr3LflXwH/NATb8CWYVZ2JRIiISFEm5yIlalKtwmlB7a6HOzOpBl2DB/0RJwsQc9Xbx38Hb+fuocTQn9jFgjweXUtEcsaKscpRILhUqmUYbeNmNJKfaM93x7Y2lgCdQU10pz6rXesIKVsaARUsFypnfnZImEIhXhVVlLpOWB2iaF7Kt+0zELGFJJXRLhcq7kZMIrgNR7wXUt0NRTuaCeCHk7KYinoUz9NVrkAqW+7wgCcoZrPl0bkGJ5G15cFOxsiUgQpaQwr2XQ++oipkmmknhxZJzksey5UE1xn63BCtZ+8vadwWsaEvhO+8saakeyxzYLFvvhkcS+OEL5ewY2ScqbcYnTr4oG00g/+SG5UykRtNceQctmEj4PbplO6kptUUrM2XBvAHsxvbp2/UfXy7//PwXmuJM66Icf/iwXC7P5lLOOT0DED9MMZpOJaxf3aMljUwCpFO8c06wKoku3TfFZlV/ZKWMCWNhR7/X7qK+X4JFpCXQXlMlCEdfv1zOzl6tQBy7GAbPLobBezF8L4bvxfC9GP7Pi+E3WaGYCKQoiTNUlUhnSlbz7JASmBPGtRyb8vprfg+oFUTcmyo4xejFFc8YPbjcGSOz04H/fuwJGP6PBE5TuP2ig2LO4sUB1J5yoDdYeuGbW0bV4a9sTb/B8nhmXK9RmDVdmAiPU8JLWsPhRra/0nP9lQtIm5FiAGFVB19aDCJiobAdJNtx6bof2BtFK3ss2rBdd2J6j52YlX0Sr7bVvZjVUtOCWZ/ZmIDQD2IPYF8HopxMndQ2TEOuruUWUKvuo511R+e9MAyH3dEo6J4PRmbeYuO4ZjtzLqKFcaQZL8XjeBk3VMI65VYt0UvbQnP9OSpSCzZ4iyH20sk0t+cVViSZzrn1PrWdPpNO3aXd64g3w5r4G0+Hs3No26/rsNmBYu2xE3ergw1zt/tUR3ClTgVBB0tufdnuPNb8Djf5jS7ZPNOPzcNgMhychxvNw3CbsiuVdbauzW5wdm3eM21br2vpah0VdJERhZ+ArtlkW4lvPtLfaUoqrtE1UWSuSJGhiXTv52L/8kZ4P7cxCI5HH8eeYB97+s/FtH8q9gRt2BPsZ8+bjPQJ9jRh9Y9KiKfSviFMfx9hgv+EsTfpj8L+BozBqQjTb0OY/n7CvMlIWxJm8OqEGewShjX/PGz33NWvV43CKQgzaEOYgY8wbzjSloQZvjphhp4M0y4/n4QcwzbkGHqzyduIqiURwlcnQvgsIqzn3ZMQIWxDhPCZRHjNqJ4gwmepaXm8P6U8txs1yS9q8uA23l5oH1sLm6hW9dj94T4M+xc9+y2MFqF+FYqWkt/SBF1RYRq/2zdWW/3YNb+trU4k53JJkzYOnw8Hk1HwtOmZQdG0lwBUbmWcW6ncxzsrWT4vXZ9F1H2Zw78I86IO1LTqdrt9162JT+rFoPFCvJIXM9NrxfQd/xPi//NfUEsBAhQACgAAAAgASoltVsxhI7tsBQAAyCYAAAQAAAAAAAAAAAAAAAAAAAAAAHNmZHRQSwUGAAAAAAEAAQAyAAAAjgUAAAAA"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Hyperlinks and Bookmarks';
    container.documentEditorSettings.showBookmarks = true;    
    // TitleBar sample starts
    var switchObj = new ejs.buttons.Switch({ checked: true, cssClass: 'buttonSwitch' });
    switchObj.appendTo('#toolbarSwitch');

    switchObj.change = function (args) {
        if (args.checked) {
            container.toolbarMode = 'Ribbon';
        }
        else {
            container.toolbarMode = 'Toolbar';
        }
        showButtons(container.toolbarMode !== 'Ribbon');
    };
titleBarDiv = document.getElementById('documenteditor_titlebar');
    initializeTitleBar(true); 
    updateDocumentTitle();
    wireEventsInTitleBar();
    container.documentChange = function () {
        updateDocumentTitle();
    };
     var documentTitle;
     var documentTitleContentEditor;
     var titleBarDiv;
     var print;
     var openBtn;
     var download;
     var isPropertiesPaneEnabled;
     function initializeTitleBar(isShareNeeded) {
         documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
         documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
         documentTitleContentEditor.appendChild(documentTitle);
         titleBarDiv.appendChild(documentTitleContentEditor);
         documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
         var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;' +
             'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
         print = addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
         openBtn = addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
         var items = [
            { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
            { text: 'Word Document (*.docx)', id: 'word' },
            { text: 'Word Template (*.dotx)', id: 'dotx'},
            { text: 'Plain Text (*.txt)', id: 'txt'},
        ];
         download = addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
         if (!isShareNeeded) {
             download.element.style.display = 'none';
         }
         else {
             openBtn.element.style.display = 'none';
         }
     }
     function wireEventsInTitleBar() {
         print.element.addEventListener('click', onPrint);
         openBtn.element.addEventListener('click', function (e) {
             if (e.target.id === 'de-open') {
                 var fileUpload = document.getElementById('uploadfileButton');
                 fileUpload.value = '';
                 fileUpload.click();
             }
         });
         documentTitleContentEditor.addEventListener('keydown', function (e) {
             if (e.keyCode === 13) {
                 e.preventDefault();
                 documentTitleContentEditor.contentEditable = 'false';
                 if (documentTitleContentEditor.textContent === '') {
                     documentTitleContentEditor.textContent = 'Document1';
                 }
             }
         });
         documentTitleContentEditor.addEventListener('blur', function () {
             if (documentTitleContentEditor.textContent === '') {
                 documentTitleContentEditor.textContent = 'Document1';
             }
             documentTitleContentEditor.contentEditable = 'false';
             container.documentEditor.documentName = documentTitle.textContent;
         });
         documentTitleContentEditor.addEventListener('click', function () {
             updateDocumentEditorTitle();
         });
     }
     function updateDocumentEditorTitle() {
         documentTitleContentEditor.contentEditable = 'true';
         documentTitleContentEditor.focus();
         window.getSelection().selectAllChildren(documentTitleContentEditor);
     }
     function updateDocumentTitle() {
         if (container.documentEditor.documentName === '') {
             container.documentEditor.documentName = 'Untitled';
         }
         documentTitle.textContent = container.documentEditor.documentName;
     }
     function onPrint() {
         container.documentEditor.print();
     }
     function onExportClick(args) {
         var value = args.item.id;
         switch (value) {
             case 'word':
                 save('Docx');
                 break;
             case 'sfdt':
                 save('Sfdt');
                 break;
            case 'txt':
                save('Txt');
                break;
            case 'dotx':
                save('Dotx');
                break;
            }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[2].setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[3].setAttribute('title', 'Download a copy of this document to your computer as a TXT file.');
    }
     function addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
         var button = ej.base.createElement('button', { id: id, styles: styles });
         titleBarDiv.appendChild(button);
         button.setAttribute('title', tooltipText);
         if (isDropDown) {
             var dropButton = new ej.splitbuttons.DropDownButton({ select: onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { setTooltipForPopup(); } }, button);
             return dropButton;
         }
         else {
             var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
             return ejButton;
         }
     } 
      function showButtons(show) {
        var displayStyle = show ? 'block' : 'none';

        if (print) {
            print.element.style.display = displayStyle;
        }
        if (download) {
            download.element.style.display = displayStyle;
        }
    }

    showButtons(false); 
};
