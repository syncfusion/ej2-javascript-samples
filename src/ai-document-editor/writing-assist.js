this.default = function () {
    /**
     * Writing Assist Document Editor sample
     */
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    let toolItem = {
        prefixIcon: "e-icons e-file-new",
        text: "AI Write",
        id: "write"
    };
    let container = new ej.documenteditor.DocumentEditorContainer({
        enableToolbar: true,
        height: '99%',
        serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/',
        toolbarItems: ['New', 'Open', 'Separator', toolItem, 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields', 'ContentControl']
    });
    container.appendTo('#DocumentEditor');
    if (container.documentEditor) {
        container.documentEditor.documentName = 'Getting Started';


        let menuItems = [
            {
                text: 'AI Write',
                id: 'write',
                iconCss: 'e-icons e-file-new'
            }];

        container.documentEditor.contextMenu.addCustomMenu(menuItems, false);

        container.customContextMenuSelect = (args) => {
            let item = args.id;
            let id = container.element.id;
            switch (item) {
                case id + '_editorwrite':
                    dialog.show();
                    break;
            }
        };

        container.toolbarClick = (args) => {
            switch (args.item.id) {
                case 'write':
                    dialog.show();
                    break;
            }
        };

        //dialog
        let dialog = new ej.popups.Dialog({
            header: 'Generate Content',
            showCloseIcon: true,
            content: document.getElementById("e-de-editable-div"),
            buttons: [
                {
                    'click': () => {
                        onInsertContent();
                        clearContent();
                    },
                    buttonModel: {
                        isPrimary: true,
                        content: 'Insert',
                        cssClass: 'e-dig-insert'
                    },
                },
                {
                    'click': () => {
                        clearContent();
                        dialog.hide();
                    },
                    buttonModel: {
                        content: 'Cancel',
                        cssClass: 'e-flat'
                    }
                }
            ],
            visible: false,
            target: document.getElementById("DocumentEditor"),
            width: '50%',
            height: 'auto',
            isModal: true,
            close: onclose,
            beforeOpen: onOpen,
        });
        dialog.appendTo('#dialog');
        async function onOpen() {
            await onChangeToolbarVisibility(true);
        }

        function onclose() {
            clearContent();
        }

        //editable div
        const editableDiv = document.getElementById("e-de-editable-div");
        function setPlaceholder() {
            if (editableDiv?.innerHTML.trim() === "") {
                editableDiv.innerHTML = "Please provide the topic or idea for content generation...";
                editableDiv.classList.add("placeholder"); // Add a class for styling
            }
        }
        function removePlaceholder() {
            if (editableDiv.innerHTML === "Please provide the topic or idea for content generation...") {
                editableDiv.innerHTML = "";
                editableDiv.classList.remove("placeholder");
            }
        }
        setPlaceholder();
        editableDiv?.addEventListener("focus", removePlaceholder);
        editableDiv?.addEventListener("blur", setPlaceholder);

        editableDiv?.addEventListener('input', function () {
            toolbar.items[3].disabled = false;
        });

        //toolbar
        let toneValue = 'Professional';
        let formatValue = 'Paragraph';
        let lengthValue = 'Medium';
        let outList = [];

        let toneList = ['Professional', 'Friendly', 'Instructional', 'Marketing', 'Academic', 'Legal', 'Technical', 'Narrative', 'Direct'];
        let formatValueList = ['Paragraph', 'Blog post', 'Technical Documentation', 'Report', 'Research Papers', 'Tutorial', 'Meeting Notes'];
        let lengthList = ['Short', 'Medium', 'Long'];

        let toolbar = new ej.navigations.Toolbar({
            items: [
                { prefixIcon: 'e-icons e-chevron-left', click: moveToPrevious },
                {
                    type: 'Input', align: 'Left', cssClass: 'page-count', template: "<div><input type='text' id='numeric' style='width: 20px;padding-left: 10px;'> <span id=total-page> of 3 </span> </input></div>"
                },
                { prefixIcon: 'e-icons e-chevron-right', click: moveToNext },
                { text: 'Generate', align: 'Right', click: onGenerateClick, disabled: true },
                { prefixIcon: 'e-icons e-settings', click: onSettingsClick },

                { prefixIcon: 'e-icons e-close', click: onCloseSecndaryToolbar },
                {
                    type: 'Input', align: 'Left', template: new ej.dropdowns.ComboBox({ width: '125px', change: onToneChange, value: toneValue, dataSource: toneList, popupWidth: '125px', showClearButton: false, readonly: false })
                },
                {
                    type: 'Input', align: 'Left', template: new ej.dropdowns.ComboBox({ width: '200px', change: onFormatChange, value: formatValue, dataSource: formatValueList, popupWidth: '200px', showClearButton: false, readonly: false })
                },
                {
                    type: 'Input', align: 'Left', template: new ej.dropdowns.ComboBox({ width: '100px', change: onLengthChange, value: lengthValue, dataSource: lengthList, popupWidth: '100px', showClearButton: false, readonly: false })
                },
                { text: 'Rewrite', click: onGenerateClick },
            ],
            created: onToolbarCreated,
        });
        toolbar.appendTo('#e-d-toolbar');
        async function onToolbarCreated() {
            dialog.show();
            updateIndex();
        }
        function onSettingsClick() {
            onChangeToolbarVisibility(false);
        }

        function onCloseSecndaryToolbar() {
            onChangeToolbarVisibility(true);
        }

        async function onChangeToolbarVisibility(showPryItem) {
            let isPrimary = true;
            if (!showPryItem) {
                isPrimary = false;
            }
            for (let i = 0; i < 5; i++) {
                toolbar.items[i].visible = isPrimary;
                toolbar.items[i + 5].visible = !isPrimary;
            }
        }

        async function onGenerateClick() {
            ej.popups.createSpinner({
                target: document.getElementById('dialog'),
            });
            ej.popups.showSpinner(document.getElementById('dialog'));
            let text = editableDiv.innerText;
            if (toolbar.items[3].text === 'Generate') {
                const options = {
                    messages: [
                        { role: "system", content: `You are a helpful assistant. Your task is to generate content based on the provided text. Please adjust the text to reflect a tone of '${toneValue}', formatted in '${formatValue}' style, and maintain a length of '${lengthValue}'. Always respond in proper text format not a md format. Always respond in proper HTML format, excluding <html>, <head>, and <body> tags.` },
                        { role: "user", content: text }
                    ],
                    model: "gpt-4",
                };
                await onGenerate(options);
                toolbar.items[3].text = 'Rewrite';
            } else {
                const options = {
                    messages: [
                        { role: "system", content: `You are a helpful assistant. Your task is to generate content based on the provided text. Please adjust the text to reflect a tone of '${toneValue}', formatted in '${formatValue}' style, and maintain a length of '${lengthValue}'. Always respond in proper text format not a md format. Always respond in proper HTML format, excluding <html>, <head>, and <body> tags.` },
                        { role: "user", content: text }
                    ],
                    model: "gpt-4",
                };
                await onGenerate(options);
            }
            ej.popups.hideSpinner(document.getElementById('dialog'));
        }

        async function onGenerate(options) {
            outList = [];
            for (let i = 0; i < 3; i++) {
                const response = await getAzureAIRequest(options);
                if (response && outList.indexOf(response) === -1) {
                    outList.push(response);
                } else {
                    i--;
                }
            }
            if (outList.length > 0) {
                editableDiv.innerHTML = outList[0];
            }
        }

        function moveToNext() {
            let text = editableDiv.innerHTML;
            let index = outList.indexOf(text);
            if (index + 1 < outList.length) {
                editableDiv.innerHTML = outList[index + 1];
                updateIndex();
            }
        }

        function moveToPrevious() {
            let text = editableDiv.innerHTML;
            let index = outList.indexOf(text);
            if (index - 1 >= 0) {
                editableDiv.innerHTML = outList[index - 1];
                updateIndex();
            }
        }

        function updateIndex() {
            let element = document.getElementById('numeric');
            let text = editableDiv.innerHTML;
            if (outList.length > 0 && outList.indexOf(text) !== -1) {
                element.value = (outList.indexOf(text) + 1).toString();
            } else {
                element.value = '0';
            }
        }

        function onToneChange(args) {
            toneValue = args.value;
        }
        function onFormatChange(args) {
            formatValue = args.value;
        }
        function onLengthChange(args) {
            lengthValue = args.value;
        }

        //convertion
        function onInsertContent() {
            let response = editableDiv.innerHTML;
            let http = new XMLHttpRequest();
            let url = container.serviceUrl + 'SystemClipboard';
            http.open('POST', url, true);
            http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status === 200 || http.status === 304) {
                        container.documentEditor.editor.paste(http.responseText);
                        container.documentEditor.editor.onEnter();
                        dialog.hide();
                    }
                }
            };
            let sfdt = {
                content: response,
                type: '.Html',
            };
            http.send(JSON.stringify(sfdt));
        }

        //clear
        function clearContent() {
            editableDiv.innerHTML = '';
            setPlaceholder();
            onChangeToolbarVisibility(true);
        }

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
                { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
                { text: 'Word Document (*.docx)', id: 'word' },
                { text: 'Word Template (*.dotx)', id: 'dotx' },
                { text: 'Plain Text (*.txt)', id: 'txt' },
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
    }
};