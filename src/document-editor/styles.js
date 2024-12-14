this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"UEsDBAoAAAAIAHiJbVbcWj6tZAQAAFofAAAEAAAAc2ZkdN1Z227jNhD9FYF9DQJbN8d+S1Oku0ARbJF9C4xCkkmbNSVqRTrOBfn3HV5UW44sKVgpcRM/DDW8zMw5Q3GoPCOeS5rSJ3xLFhLNZLHBZ0jgBM3unhHIvECzZ5Rv0Swcu2coX6HZZAoNlkIDZGGltDK2ckFyNBuB5Ng0Vgs088IzRKyMqVbHYAnd4O23aIkRrL/MBCguiyimCTxnCWegGJ8h/GOrJYtlomeanrv5Cyyivc2JcjVeFEJJCWafoY9JI4ulkbF9XhlxrwRIITOw+51KptxglFh9Qsw4qk2UT5LB6uhWPjIs0Au40Iv1200s3+TAJVKWqzpHKK8cKpzIAYgYTiTlmcOJQ3iRRlLSbOnQTADTukfUrVGjk9zJC35PF1gvnAkqJM6kwzhfq9XlCjsLnmxSUNZMP+8PphsVBzsKUl9m/t5w2Z2K7xD+jw1N1k5c8G0GYD84/27SXDj8HhcaHRY9PQJEy46A32kH5u+G285+vJZ6h6lJ//zJf4+SdcU/3T8+6O/Lyy84WqgUHQ8BfS3ONbqdE6/75v+7TC6jcU8BUvdTQep95AuiAWXvU6Hsv1vi7ix+JvyCU9j4wQdDOoeJpmduu1TdSCImsB5iW0Q8weEGpxuBIegqYjQuKCy70UeiMCdjHJma1lSiRNWwv43sH4yN4916NK6srZ7M6qq1t36U7IaRqNJFSEbwgaaigBh/CUFGMx1IYSWxUpowY6FFBOICBqt6/Hw0mY7DMAxGk4k7mvoTpTfYWPxNhW8jWitHyvY2+6+9TcyVQyUEYWbaQm7NDcHW+TgjBmzwFkHswkqSGnu5EYuVTJnxnpgbQ8LT3JL2KGNWNnXWVzLGrvNrCB4mXfawM6FS/LC26cGo4kVdyiLDD2fmglR1xSZ0WE1o5y+6XElU5q57HfjT8Poa7XI0PMjD3YxqNu7pa9Tmcra3OfdRcK5WUYFaoCoHmZLzdEL6A5Now6TzLSqiZRHlK+ea25tPdry7EsfLYbBuf3lRTQv3WFp4b8XQGzwt3C5p4R5Pi48NqSUt9uvGQZj2jjHtNsIyvvYmoVeBxR2caa8L095xpj82pI5M+0Mx7b9mmpYf8LptAF2alBMGZdrvwrRfx/QphNSR6WAopoOaPd3tDTcsq0EXVoPa/fvO7rcweMMlFv2wp2gLbZH8qiZ+2bt4mCSNy3w9xLkO0vKLZC/1Kizoe+euvrJMQnfqTf3A3gBq9OomMLYV56jpxaM59EfqV92QdYmkA2pKosqA+tdCm8EW6ssv/j1RP2qlXh9d7sWxF5o5qUz/IJtXB9yEeWXAq0P3fT1vIe9rJnEmsHMiG+PC5ICSbRvEn7hXfvsGqQTYRFrtwKYNc9yBFsz3/knV270ZBMs4eLu3TbSbwaX6gZt14JSeNOFyOKaSz7UmOh72YY/p1vzlxa2+WRq+vKhaIXxTrWBq5OErhbBLpRC+sVIYwPlj5M8VquorInDBjExSIwv7+GAkTZdCo/8TUEsBAhQACgAAAAgAeIltVtxaPq1kBAAAWh8AAAQAAAAAAAAAAAAAAAAAAAAAAHNmZHRQSwUGAAAAAAEAAQAyAAAAhgQAAAAA"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Styles';    
    // TitleBar sample starts
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
            { text: 'Syncfusion® Document Text (*.sfdt)', id: 'sfdt' },
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
};