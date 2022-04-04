this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var container = new ej.documenteditor.DocumentEditorContainer();
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    container.appendTo('#container');
    container.height = '590px';
    var defaultDocument = {"sections":[{"blocks":[{"characterFormat":{"fontColor":"#4472C4FF"},"paragraphFormat":{"afterSpacing":36.0},"inlines":[{"name":"top","bookmarkType":0},{"text":"Hyperlinks and bookmarks","characterFormat":{"fontSize":18.0,"fontFamily":"Monotype Corsiva","fontColor":"#4472C4FF","fontSizeBidi":18.0,"fontFamilyBidi":"Monotype Corsiva"}},{"name":"top","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"text":"Heading 1"}]},{"inlines":[{"text":"Lorem ipsum dolor sit "},{"text":"amet"},{"text":", "},{"text":"consectetur"},{"text":" "},{"text":"adipiscing"},{"text":" "},{"text":"elit"},{"text":", sed do "},{"text":"eiusmod"},{"text":" "},{"text":"tempor"},{"text":" "},{"text":"incididunt"},{"text":" "},{"text":"ut"},{"text":" labore et dolore magna "},{"text":"aliqua"},{"text":". Ut "},{"text":"enim"},{"text":" ad minim "},{"text":"veniam"},{"text":", "},{"text":"quis"},{"text":" "},{"text":"nostrud"},{"text":" exercitation "},{"text":"ullamco"},{"text":" "},{"text":"laboris"},{"text":" nisi "},{"text":"ut"},{"text":" "},{"text":"aliquip"},{"text":" ex "},{"text":"ea"},{"text":" "},{"text":"commodo"},{"text":" "},{"text":"consequat"},{"text":"."}]},{"paragraphFormat":{"beforeSpacing":18.0,"afterSpacing":18.0},"inlines":[{"text":"For more information, kindly visit "},{"hasFieldEnd":true,"fieldType":0},{"text":"HYPERLINK \"https://www.google.com/\" \\o \"My web site\""},{"fieldType":2},{"text":"our website","characterFormat":{"styleName":"Hyperlink"}},{"fieldType":1},{"text":" [Link to external URL]."}]},{"inlines":[]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"text":"Heading 2"}]},{"inlines":[{"text":"Lorem ipsum dolor sit "},{"text":"amet"},{"text":", "},{"text":"consectetur"},{"text":" "},{"text":"adipiscing"},{"text":" "},{"text":"elit"},{"text":", sed do "},{"text":"eiusmod"},{"text":" "},{"text":"tempor"},{"text":" "},{"text":"incididunt"},{"text":" "},{"text":"ut"},{"text":" labore et dolore magna "},{"text":"aliqua"},{"text":". Ut "},{"text":"enim"},{"text":" ad minim "},{"text":"veniam"},{"text":", "},{"text":"quis"},{"text":" "},{"text":"nostrud"},{"text":" exercitation "},{"text":"ullamco"},{"text":" "},{"text":"laboris"},{"text":" nisi "},{"text":"ut"},{"text":" "},{"text":"aliquip"},{"text":" ex "},{"text":"ea"},{"text":" "},{"text":"commodo"},{"text":" "},{"text":"consequat"},{"text":"."}]},{"paragraphFormat":{"beforeSpacing":18.0,"afterSpacing":18.0},"inlines":[{"text":"You can reach us through "},{"hasFieldEnd":true,"fieldType":0},{"text":"HYPERLINK \"mailto:info@mycompany.com\" "},{"fieldType":2},{"text":"our mail","characterFormat":{"styleName":"Hyperlink"}},{"fieldType":1},{"text":" [Link to mail]."}]},{"paragraphFormat":{"beforeSpacing":18.0,"afterSpacing":18.0},"inlines":[]},{"paragraphFormat":{"beforeSpacing":18.0,"afterSpacing":18.0},"inlines":[]},{"paragraphFormat":{"beforeSpacing":18.0,"afterSpacing":18.0},"inlines":[]},{"paragraphFormat":{"beforeSpacing":18.0,"afterSpacing":18.0},"inlines":[{"text":"To the top, click "},{"hasFieldEnd":true,"fieldType":0},{"text":"HYPERLINK \\l \"top\""},{"fieldType":2},{"text":"here","characterFormat":{"styleName":"Hyperlink"}},{"fieldType":1},{"text":" [Link to bookmark]."}]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0,"endnoteNumberFormat":"LowerCaseRoman","footNoteNumberFormat":"Arabic","restartIndexForFootnotes":"DoNotRestart","restartIndexForEndnotes":"DoNotRestart","columns":{"column":[{"width":468.0,"space":0.0}],"numberOfColumns":1,"equalWidth":true}}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontSizeBidi":11.0,"fontFamilyBidi":"Calibri"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal","paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Paragraph","name":"Heading 1","basedOn":"Normal","next":"Normal","link":"Heading 1 Char","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16.0,"fontFamilyBidi":"Calibri Light"},"paragraphFormat":{"beforeSpacing":12.0,"outlineLevel":"Level1"}},{"type":"Paragraph","name":"Heading 2","basedOn":"Normal","next":"Normal","link":"Heading 2 Char","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":13.0,"fontFamilyBidi":"Calibri Light"},"paragraphFormat":{"beforeSpacing":2.0,"outlineLevel":"Level2"}},{"type":"Paragraph","name":"Heading 3","basedOn":"Normal","next":"Normal","link":"Heading 3 Char","characterFormat":{"fontSize":12.0,"fontFamily":"Calibri Light","fontColor":"#1F3763FF","fontSizeBidi":12.0,"fontFamilyBidi":"Calibri Light"},"paragraphFormat":{"beforeSpacing":2.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3"}},{"type":"Paragraph","name":"Heading 4","basedOn":"Normal","next":"Normal","link":"Heading 4 Char","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","italicBidi":true,"fontFamilyBidi":"Calibri Light"},"paragraphFormat":{"beforeSpacing":2.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4"}},{"type":"Paragraph","name":"Heading 5","basedOn":"Normal","next":"Normal","link":"Heading 5 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontFamilyBidi":"Calibri Light"},"paragraphFormat":{"beforeSpacing":2.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5"}},{"type":"Paragraph","name":"Heading 6","basedOn":"Normal","next":"Normal","link":"Heading 6 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF","fontFamilyBidi":"Calibri Light"},"paragraphFormat":{"beforeSpacing":2.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6"}},{"type":"Character","name":"Default Paragraph Font"},{"type":"Character","name":"Heading 1 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16.0,"fontFamilyBidi":"Calibri Light"}},{"type":"Character","name":"Heading 2 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":13.0,"fontFamilyBidi":"Calibri Light"}},{"type":"Paragraph","name":"Notes","basedOn":"Normal","next":"Normal","characterFormat":{"bold":true,"boldBidi":true},"paragraphFormat":{"afterSpacing":6.0}},{"type":"Character","name":"Hyperlink","basedOn":"Default Paragraph Font","characterFormat":{"underline":"Single","fontColor":"#0563C1FF"}},{"type":"Character","name":"Unresolved Mention","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"#808080FF"}},{"type":"Character","name":"FollowedHyperlink","basedOn":"Default Paragraph Font","characterFormat":{"underline":"Single","fontColor":"#954F72FF"}},{"type":"Character","name":"Heading 3 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Calibri Light","fontColor":"#1F3763FF","fontSizeBidi":12.0,"fontFamilyBidi":"Calibri Light"}},{"type":"Character","name":"Heading 4 Char","basedOn":"Default Paragraph Font","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","italicBidi":true,"fontFamilyBidi":"Calibri Light"}},{"type":"Character","name":"Heading 5 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontFamilyBidi":"Calibri Light"}},{"type":"Character","name":"Heading 6 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF","fontFamilyBidi":"Calibri Light"}}],"defaultTabWidth":36.0,"formatting":false,"trackChanges":false,"protectionType":"NoProtection","enforcement":false,"dontUseHTMLParagraphAutoSpacing":false,"alignTablesRowByRow":false,"formFieldShading":true,"footnotes":{"separator":[{"inlines":[{"text":"\u0003"}]}],"continuationSeparator":[{"inlines":[{"text":"\u0004"}]}],"continuationNotice":[{"inlines":[]}]},"endnotes":{"separator":[{"inlines":[{"text":"\u0003"}]}],"continuationSeparator":[{"inlines":[{"text":"\u0004"}]}],"continuationNotice":[{"inlines":[]}]},"compatibilityMode":"Word2013"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Hyperlinks and Bookmarks';    
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
             { text: 'Microsoft Word (.docx)', id: 'word' },
             { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' },
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
         }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
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