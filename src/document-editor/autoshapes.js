/*jshint esversion: 6 */
this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ toolbarMode: 'Ribbon',serviceUrl:hostUrl,height:'590px', documentEditorSettings: { showRuler: true}});
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"UEsDBAoAAAAIAIq+0VqQa73U9QcAAK9SAAAEAAAAc2ZkdO2cS5LbuBnHr6Jilumo8H5oN7aj8WIy43LPbuIFJZEiMxSpkOiW2119gqxSuUcukMptkkVuEbwoiRLZVo9lttxFucofCYAg8P3+AAkC6PugWKt0lX6KruOFCiaqvImugiqaB5Nf7gNt12UwuQ/Wm2DCJboK1kkwYVAfZCsdom3prfJ25m2yCCaYXQWxt4t4HUyAtkXkDmapM/pOwY/R5l24jIKrIMrjYKIvj43V0WVa28jaNM6DCdQ2cna9zCudwXdlOEvn+vp8XmSVjYn+urE2m6m5vdTF/PLhQd/U1m4dm6rNFmVlrNLFutdxmXK2XDo78+eJM7fGaFup3BS8KFdhpu+bmXLaiHnsEqb2HvXZvEoa5x91LbEu3Z0tWpVqLwmIAeKcSl0LnfX74iZfRIv30VyF+TKLRhAgGtgC6OtM3QixpSJUn5o6A51TUh/cOi/fFjqBNqE7K3XoH/CYACQQptHvsdCXuJSJS5m4lEnpQjfehoU1auOcqzbK0XNQktKxdaeLzBkf6FJmc0fDZR9WymG2CIwEfocRBuKP06muog6EhoSNzGKdFF+5RMD+bCJPt3K56//1FcpeoUxtoZfouNbo2IsUj5lTqTv4ciUod7enCMLc1rW0tD6Iq086G+pcErwOs3RWpsYXtt5T/zMBsWk5+yni8OA8j6ODkEaAKXOm6xj8Kcx1q1tFuQoePuh/D1cNgRJk9QmhGAuvUaJFSwDjuFujsqFRCJxGwYvQKBNYyjeDRnvU6JvoNsqKdadIEeFGnQc6hYgyirBgolOoGLxgoUqKEWeDUHsU6ruyWNzMVVrk7Z0ptS460CkCEnMsCeXdOoUvWKevMJ7i4aHfp06vwyyqWiUKrDwRRGNSd6MUCUEEY53qJA11yhclTshfvXo1PO17FWcRq01YRq361GozyjzUqASASCKMxLpEil6wSIWcsu8GkfYo0rdhuegUKQKsTaScUCK4NEP+LpHioScdRHq+njQq047nPIawRaKUIaqHt/QRhZKhGx0Uer4BU1iqdoESLUvhBUqM51wfSrB+FYWYoW6F0qEPHRR6NoXqwqqkVaEUMj+abyiUS4K1buQjCmVDHzoo9IzjpZsOhSJJfR9q5ofcBBNhlEhqzk1Fr1UZpstEjV4Xea4lWpQjJPbVCYx7tas4Np7/JgWKGwLdZ3AkUNAqUDCm+xKFTYmCWqJAcLD7wVqwR8FevoJuBWwP7bTkAUAhPD/Odp+1GYYCAYRAN8LG/AsB1PUwA8H+CUr3QY3vJiWIhFBy0gkPo7b2R8BAr396RNpu785MzHuAkmKpERLWDbAxRIImAw0QCzPKGgD23Pyg5wcp372iYYzNOEJ0I2yMIdwLGpIDwP4BIlk/AqFZFOPeYRgAQkeAgd/F86PgmB+UgEP9DkPkAPAbeATW/IQd7jqCOkem84S4m2BjGCHcMjUw8OudH+P+Qy8UYm/CjHIAIYVwAHjpT0DKti2Q70aBgkNCtGvRAPDSH4Gw7j+3H7GlIAhQ2T0IJKDl+Wc/iA/0+qUHMarXbAm66z91w4NC0kea34DwcnpQukUod6uaEOQckwHg5QPE7uvX4TsMJBgjAqUYEH4Dr6HisAUCIJmAbOhCv4V3GArGRwAhl1JSCYbXmEsE+OEqKD7e2lyLO2cjc86AHcdHJgxROym0Xfdbb0PjgkgmGfY96/dlcbMeNZf5+mySbSbtRO2I5dax2GcKHEYEHUfQyfGTuQFkAgviqcInUJWOqnyMKvhSqrDJ1MzE6nq4ieMPfubYTQj/nK6iavRjtBm9L1ZhvpsHPo5IFybC7Pczx+YIY3Nk5oD12AHVM8ZtWbqZ47aY1ghdxy+aOs/S3O/PdDb2Vjknzyrva+eiyjvMubPIthtB4zCroqvgV3PX+niTb48383qSfTcpH5tc7oPrdPU2Mm7837/+/p9//0PXVIdc3xjp/veffzMhtqFlJu3n/PpgpLJx+1X9ptHI70NNdIUDnXnlbbxydVg7s0jUKvNycpWcFysn4krdqZmLU8nKyqGae2NK+VMcp3Oz9XUV/iWuXERmFxqY2CxUqcGndrP/ox9MTxuYXtqkiMLt4dwsp9JFUN5FqzQ/KcfP52Vymy2PG4rdCHu3zXu7dsI758uU1Vh+4ZdXILvOwmJENToIqNDJ8o+7EtS1eBPF4U2mRu/CMlyW4ToZTYtcuQLCemFHndhdO/o5nGWRS4IaufqYOrk9G31faiXViWfHudjr95LWV7+NwkWaL0fwXN76bDs0DttviGPAJWSMUcA5ApLwZsuEXQhYc4WLl2O9zgVNqX5+HC5q2SVqLm3ZannPdYHtS3cOGr1OwjJo53uUaI/rVy9uh7gOy4Z6I/w0wKgLMO4XMDoFMOoGjJ8bML5QwPixTrTbY3CKOcNnBIxPAYy7AX+94p4ImFwoYHIMeLcasccWTE4BTNoAf+3ingiYXihg2tKCe+RKT+FKWxvus+JkF4qTPQnn2fthdgpO9kScPXS//EJx8t/W/Z6dKz+FK/+t3W8PgMWFAhZdL1D2W94jPsP2d0bE4hTEovsV6msW+ETI8kIhy8da8fPQlqfQlo836EvAHpXnYd7++fB4f07DodZ3vhR1oaZFoZ6/UL4U5vNaZrYUaRtmzs5Xzpb+9KOz6WpZudzMn7+7D6re/36d22705xsAAA7cV+75s5aC1KXIeyqF2WNlvgcP/n8+/z/8H1BLAQIUAAoAAAAIAIq+0VqQa73U9QcAAK9SAAAEAAAAAAAAAAAAAAAAAAAAAABzZmR0UEsFBgAAAAABAAEAMgAAABcIAAAAAA=="};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Auto Shapes';    
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