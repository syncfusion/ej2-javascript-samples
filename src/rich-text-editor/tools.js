/*jshint esversion: 6 */
/**
 * Rich Text Editor overview sample
 */
this.default = function() {
    var hostUrl = 'https://services.syncfusion.com/js/production/';

    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|', 'ImportWord', 'ExportWord', 'ExportPdf', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'FileManager', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', 'Print', '|',
                'SourceCode', 'FullScreen']
        },
        slashMenuSettings: {
            enable: true,
            items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'OrderedList', 'UnorderedList',
                'CodeBlock', 'Blockquote', 'Link', 'Image','Video', 'Audio', 'Table', 'Emojipicker',
            ]
        },
        insertImageSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
            path: hostUrl + 'RichTextEditor/',
        },
        importWord: {
            serviceUrl: hostUrl + 'api/RichTextEditor/ImportFromWord',
        },
        exportWord: {
            serviceUrl: hostUrl + 'api/RichTextEditor/ExportToDocx',
            fileName: 'RichTextEditor.docx',
            stylesheet: `
        .e-rte-content {
            font-size: 1em;
            font-weight: 400;
            margin: 0;
        }
    `
        },
        exportPdf: {
            serviceUrl: 'https://ej2services.syncfusion.com/js/development/api/RichTextEditor/ExportToPdf',
            fileName: 'RichTextEditor.pdf',
            stylesheet: `
        .e-rte-content{
            font-size: 1em;
            font-weight: 400;
            margin: 0;
        }
    `
        },
        fileManagerSettings: {
            enable: true,
            path: '/Pictures/Food',
            ajaxSettings: {
                url: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations',
                getImageUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
                uploadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
                downloadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download'
            }
        },
        quickToolbarSettings: {
            table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles'],
            showOnRightClick: true,
        },
        enableXhtml: true,
        showCharCount: true,
        enableTabKey : true,
        placeholder: 'Type something or use @ to tag a user...',
        actionBegin: actionBeginHandler,
        actionComplete: actionCompleteHandler,
    });
    defaultRTE.appendTo("#defaultRTE");
    var emailData = [
        { name: "Selma Rose", initial: 'SR', email: "selma@gmail.com", color: '#FAFDFF', bgColor: '#01579B' },
        { name: "Maria", initial: 'MA', email: "maria@gmail.com", color: '#004378', bgColor: '#ADDBFF' },
        { name: "Russo Kay", initial: 'RK', email: "russo@gmail.com", color: '#F9DEDC', bgColor: '#8C1D18' },
        { name: "Robert", initial: 'RO', email: "robert@gmail.com", color: '#FFD6F7', bgColor: '#37003A' },
        { name: "Camden Kate", initial: 'CK', email: "camden@gmail.com", color: '#FFFFFF', bgColor: '#464ECF' },
        { name: "Garth", initial: 'GA', email: "garth@gmail.com", color: '#FFFFFF', bgColor: '#008861' },
        { name: "Andrew James", initial: 'AJ', email: "james@gmail.com", color: '#FFFFFF', bgColor: '#53CA17' },
        { name: "Olivia", initial: 'OL', email: "olivia@gmail.com", color: '#FFFFFF', bgColor: '#8C1D18' },
        { name: "Sophia", initial: 'SO', email: "sophia@gmail.com", color: '#000000', bgColor: '#D0BCFF' },
        { name: "Margaret", initial: 'MA', email: "margaret@gmail.com", color: '#000000', bgColor: '#F2B8B5' },
        { name: "Ursula Ann", initial: 'UA', email: "ursula@gmail.com", color: '#000000', bgColor: '#47ACFB' },
        { name: "Laura Grace", initial: 'LG', email: "laura@gmail.com", color: '#000000', bgColor: '#FFE088' },
        { name: "Albert", initial: 'AL', email: "albert@gmail.com", color: '#FFFFFF', bgColor: '#00335B' },
        { name: "William", initial: 'WA', email: "william@gmail.com", color: '#FFFFFF', bgColor: '#163E02' }
    ];
    var mention = new ej.dropdowns.Mention({
        dataSource: emailData,
        fields: { text: 'name' },
        displayTemplate: '<a href=mailto:${email} title=${email}>@${name}</a>',
        itemTemplate: '<div class="editor-mention-item-template"><div class="em-header"><div class="em-avatar" style="background-color: ${bgColor}; color: ${color}"><div class="em-initial">${initial}</div></div></div><div class="em-content"><div class="em-name">${name}</div><div class="em-email">${email}</div></div></div>',
        popupWidth: '250px',
        popupHeight: '200px',
        sortOrder: 'Ascending',
        target: defaultRTE.inputElement,
        allowSpaces: true
    });
    mention.appendTo('#editorMention');
    var myCodeMirror;
    function mirrorConversion(e) {
        var id = defaultRTE.getID() + 'mirror-view';
        var mirrorView = defaultRTE.element.querySelector('#' + id);
        var rteContainer = defaultRTE.element.querySelector('.e-rte-container');
        if (e.targetItem === 'Preview') {
            defaultRTE.value = myCodeMirror.getValue();
            defaultRTE.dataBind();
            rteContainer.classList.remove('e-rte-code-mirror-enabled');
            defaultRTE.focusIn();
        } else {
            rteContainer.classList.add('e-rte-code-mirror-enabled');
            rteContainer.classList.remove('e-source-code-enabled');
            if (!mirrorView) {
                mirrorView = ej.base.createElement('div', { className: 'rte-code-mirror', id: id, styles: 'display: none;' });
                rteContainer.appendChild(mirrorView);
                renderCodeMirror(
                    mirrorView,
                    defaultRTE.value === null ? '' : defaultRTE.value
                );
            } else {
                myCodeMirror.setValue(defaultRTE.value === null ? '' : defaultRTE.value);
                mirrorView.innerHTML = '';
            }
            myCodeMirror.focus();
        }
    }
    function renderCodeMirror(mirrorView, content) {
        myCodeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,
        });
    }
    function actionBeginHandler(e) {
        if (
            e.requestType === 'EnterAction' &&
            mention.element.classList.contains('e-popup-open')
        ) {
            e.cancel = true;
        }
        if (e.requestType === 'Maximize' || e.requestType === 'Minimize') {
            handleFullScreen(e);
        }
    }
    function handleFullScreen(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (ej.base.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (ej.base.Browser.isDevice &&  ej.base.Browser.isIos) {
                ej.base.addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.addClass([leftBar], ['e-close']);
            ej.base.removeClass([leftBar], ['e-open']);
            if (!ej.base.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (ej.base.Browser.isDevice &&  ej.base.Browser.isIos) {
                ej.base.removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.removeClass([leftBar], ['e-close']);
            if (!ej.base.Browser.isDevice) {
                ej.base.addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    function actionCompleteHandler(e) {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            mirrorConversion(e);
        }
    }
};
    