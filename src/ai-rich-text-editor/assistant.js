this.default = function () {
    /**
     * RichTextEditor AI Assist Sample
     */
    ej.base.enableRipple(true);
    ej.richtexteditor.RichTextEditor.Inject(ej.richtexteditor.Toolbar, ej.richtexteditor.Link, ej.richtexteditor.Image, ej.richtexteditor.QuickToolbar, ej.richtexteditor.HtmlEditor);
    let dialog;
    const queryList = [
        { ID: "Rephrase", Text: "Rephrase" },
        { ID: "Grammar", Text: "Correct Grammar" },
        { ID: "Summarize", Text: "Summarize" },
        { ID: "Elaborate", Text: "Elaborate" },
        { ID: "Translate", Text: "Translate" },
        { ID: "SentimentAnalysis", Text: "Sentiment Analysis" }
    ];
    const languageList = [
        { ID: "EN", Text: "English" },
        { ID: "ZH", Text: "Chinese (Simplified)" },
        { ID: "ZHT", Text: "Chinese (Traditional)" },
        { ID: "ES", Text: "Spanish" },
        { ID: "HI", Text: "Hindi" },
        { ID: "AR", Text: "Arabic" },
        { ID: "BN", Text: "Bengali" },
        { ID: "PT", Text: "Portuguese" },
        { ID: "RU", Text: "Russian" },
        { ID: "JA", Text: "Japanese" },
        { ID: "DE", Text: "German" },
        { ID: "KO", Text: "Korean" },
        { ID: "FR", Text: "French" },
        { ID: "IT", Text: "Italian" },
        { ID: "TR", Text: "Turkish" }
    ];

    let subQuery = '';
    let promptQuery = '';
    let isSentimentCheck = false;
    let resultData = '';
    let leftRte;
    let rightRte;
    let aiassistantButton;
    let dropValIndex = 0;
    let queryCategory;
    let isDialogElementCreated = false;
    let regenerateButton;
    let copyButton;
    let replaceButton;
    let sentimentButton
    let apiResultData;
    let AIResult;
    let toastObj;
    let chipList;
    let languageCategory;
    let translatelanguage;
    let chipValue = ['Standard'];


    let defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: 550,
        saveInterval: 0,
        autoSaveOnIdle: true,
        value: `<h2><span>Integrate AI with the Editor</span></h2><p>Integrate the AI assistant into the rich text editor by capturing the content from the editor, sending it to the AI service, and displaying the results or suggestions back in the editor.</p><h3>Summarize</h3><p>This function condenses the selected content into a brief summary, capturing the main points succinctly.</p><h3>Elaborate</h3><p>This function expands the selected content, adding additional details and context.</p><h3>Rephrase</h3><p>This function rewrites the selected content to convey the same meaning using different words or structures. It also enables rephrase options and disables language selection.</p><h3>Correct Grammar</h3><p>This function reviews and corrects the grammar of the selected content, ensuring it adheres to standard grammatical rules.</p><h3>Translate</h3><p>This function translates the selected content into the specified language, enabling language selection and disabling rephrase options.</p>`,
        toolbarSettings: {
            items: [
                {
                    tooltipText: 'AI Assistant',
                    template:
                        '<button class="e-tbar-btn e-btn" tabindex="-1" id="ai_assistant_button_tbar" style="width:100%"><div class="e-rte-dropdown-btn-text">AIAssistant</div></button>'
                },
                {
                    tooltipText: 'Rephrase',
                    template:
                        '<button class="e-tbar-btn e-btn" tabindex="-1" id="ai_rephrase_button_tbar" style="width:100%"><div class="e-tbar-btn-text">Rephrase</div></button>'
                },
                'Bold',
                'Italic',
                'Underline',
                '|',
                'FontName',
                'FontSize',
                'FontColor',
                '|',
                'BackgroundColor',
                'Formats',
                'Alignments',
                '|',
                'OrderedList',
                'BulletFormatList',
                'CreateLink',
                'Image',
                '|',
                'createTable',
                'SourceCode',
                'Undo',
                'Redo',
            ],
        },
        created: onCreate,
        toolbarClick: onToolbarClick
    });
    defaultRTE.appendTo('#defaultRTE');

    function aiQuerySelectedMenu(args) {
        dialogueOpen(args.item.text);
    }

    function onToolbarClick(args) {
        if (args.item.tooltipText === 'Rephrase') {
            dialogueOpen("Rephrase");
        }
    }

    function dialogueOpen(selectedQuery) {
        var selectionText = defaultRTE.getSelectedHtml();
        if (selectionText) {
            let range = (defaultRTE).formatter.editorManager.nodeSelection?.getRange((defaultRTE).contentModule.getDocument());
            (defaultRTE).formatter.editorManager.nodeSelection?.save(range, (defaultRTE).contentModule.getDocument());
            dropValIndex = queryList.findIndex(q => q.Text.toLowerCase() === selectedQuery.toLowerCase());
            queryCategory.index = dropValIndex;
            leftRte.value = promptQuery = selectionText;
            leftRte.refreshUI();
            dialog.show();
            updateAISugesstionsData(selectedQuery);
        } else {
            if (!toastObj) {
                toastObj = new ej.notifications.Toast({
                    showCloseButton: true,
                    timeOut: 2000,
                    content: 'Please select the content to perform the AI operation.',
                    position: { X: 'Right', Y: 'Top' }
                });
                toastObj.appendTo('#toast_default');
            }
            toastObj.show();
        }
    }

    function updateAISugesstionsData(selectedQuery) {
        (document.getElementById('language')).style.display = 'none';
        (document.getElementById('chips-container')).style.display = 'none';
        isSentimentCheck = false;
        switch (selectedQuery) {
            case "Summarize":
                subQuery = "Summarize the upcoming sentence shortly.";
                break;
            case "Elaborate":
                subQuery = "Elaborate on the upcoming sentence.";
                break;
            case "Rephrase":
                (document.getElementById('chips-container')).style.display = '';
                subQuery = chipValue[0] + " rephrase the upcoming sentence.";
                break;
            case "Correct Grammar":
                subQuery = "Correct the grammar of the upcoming sentence.";
                break;
            case "Translate":
                (document.getElementById('language')).style.display = '';
                subQuery = "Translate the upcoming sentence to " + translatelanguage + ".";
                break;
            case "Sentiment Analysis":
                isSentimentCheck = true;
                subQuery = "Analyze the sentiment and grammar of the following paragraphs and provide the expression score with an emoji followed by the sentiment in the format: \"😊 Neutral\". \n\nNOTE: Avoid any additional text or explanation:";
                break;
        }
        updateAISugesstions();
    }

    function updateAISugesstions() {
        try {
            if (promptQuery) {
                (document.getElementById('skeletonId')).style.display = '';
                (document.getElementById('rightRte')).style.display = 'none';
                sentimentButton.element.style.display = 'none';
                regenerateButton.disabled = true;
                copyButton.disabled = true;
                replaceButton.disabled = true;
                apiResultData = getResponseFromOpenAI(subQuery, promptQuery);
                apiResultData.then((result) => {
                    AIResult = isSentimentCheck ? promptQuery : result;
                    sentimentButton.content = result.toLowerCase().includes("positive") ? "😊 Positive" : result.toLowerCase().includes("negative") ? "😞 Negative" : "😐 Neutral";
                    sentimentButton.element.style.display = !isSentimentCheck ? 'none' : '';
                    rightRte.value = AIResult;
                    var noResultsFound = !(AIResult || promptQuery);
                    (document.getElementById('no-results-found')).style.display = noResultsFound ? '' : 'none';
                    regenerateButton.disabled = noResultsFound;
                    copyButton.disabled = noResultsFound;
                    replaceButton.disabled = noResultsFound;
                    (document.getElementById('skeletonId')).style.display = 'none';
                    (document.getElementById('rightRte')).style.display = noResultsFound ? 'none' : '';
                });
            }
        } catch {
            if (!toastObj) {
                toastObj = new ej.notifications.Toast({
                    showCloseButton: true,
                    timeOut: 0,
                    content: 'An error occurred during the AI process, Please try again.',
                    position: { X: 'Right', Y: 'Top' }
                });
                toastObj.appendTo('#toast_default');
            }
            toastObj.show();
        }
    }

    async function getResponseFromOpenAI(subQuery, promptQuery) {
        const content = await OpenAiModel(subQuery, promptQuery);
        return content ? content : '';
    }

    function onCreate() {
        if (!aiassistantButton) {
            aiassistantButton = new ej.splitbuttons.DropDownButton({
                items: [
                    { text: 'Rephrase' },
                    { text: 'Correct Grammar' },
                    { text: 'Summarize' },
                    { text: 'Elaborate' },
                    { text: 'Translate' },
                    { text: 'Sentiment Analysis' }
                ],
                cssClass: 'menubutton e-tbar-btn e-tbar-btn-text',
                select: aiQuerySelectedMenu
            });
            aiassistantButton.appendTo('#ai_assistant_button_tbar');
        }

        if (!dialog) {
            createDialog();
        }
    }

    function createDialog() {
        let dialogCtn = document.getElementById('dialog-content');
        let dialogFooter = document.getElementById('dialog-footer-content');
        dialog = new ej.popups.Dialog({
            header: 'AI Assistant',
            content: dialogCtn,
            target: document.getElementById('defaultRTE'),
            showCloseIcon: true,
            isModal: true,
            height: '100%',
            width: '80%',
            cssClass: 'e-rte-elements custom-dialog',
            zIndex: 1000,
            footerTemplate: dialogFooter,
            close: closeDialog,
            overlayClick: () => {
                let activeEle = dialog.element.querySelector('.char_block.e-active');
                if (activeEle) {
                    activeEle.classList.remove('e-active');
                }
                closeDialog();
            }
        });
        dialog.appendTo('#dialog');
        dialog.hide();
        dialog.open = dialogShow;
    }

    function dialogShow() {
        if (!isDialogElementCreated) {
            chipList = new ej.buttons.ChipList({
                chips: ['Standard', 'Fluent', 'Professional'], selection: 'Single', cssClass: 'e-outline',
                selectedChips: [0]
            }, '#chips-container');
            chipList.click = (args) => {
                chipValue[0] = args.text;
                updateAISugesstionsData("Rephrase");
            }
            queryCategory = new ej.dropdowns.DropDownList({
                index: 0,
                dataSource: queryList,
                fields: { text: 'Text', value: 'ID' },
                cssClass: 'e-e-round-corner',
                select: (args) => {
                    chipList.selectedChips = 0;
                    languageCategory.index = 0;
                    translatelanguage = "EN";
                    updateAISugesstionsData(args.itemData.Text);
                }
            });
            queryCategory.appendTo('#queryCategory');
            languageCategory = new ej.dropdowns.DropDownList({
                index: 0,
                dataSource: languageList,
                fields: { text: 'Text', value: 'ID' },
                cssClass: 'e-e-round-corner',
                select: (args) => {
                    translatelanguage = args.itemData.ID;
                    updateAISugesstionsData("Translate");
                }
            });
            leftRte = new ej.richtexteditor.RichTextEditor({
                height: 310,
                value: resultData,
                toolbarSettings: {
                    enable: false,
                },
                placeholder: 'Analysis of AI Support',
                width: '100%',
                cssClass: 'e-outline',
            });
            leftRte.appendTo('#leftRte');
            rightRte = new ej.richtexteditor.RichTextEditor({
                height: 310,
                value: resultData,
                toolbarSettings: {
                    enable: false,
                },
                placeholder: 'Analysis of AI Support',
                width: '100%',
                cssClass: 'e-outline',
            });
            rightRte.appendTo('#rightRte');
            let skeletonId1 = new ej.notifications.Skeleton({
                shape: 'Rectangle',
                height: "20px",
                width: "100%"
            });
            skeletonId1.appendTo("#skeletonId1");
            let skeletonId2 = new ej.notifications.Skeleton({
                shape: 'Rectangle',
                height: "20px",
                width: "90%"
            });
            skeletonId2.appendTo("#skeletonId2");
            let skeletonId3 = new ej.notifications.Skeleton({
                shape: 'Rectangle',
                height: "20px",
                width: "70%"
            });
            skeletonId3.appendTo("#skeletonId3");
            let skeletonId4 = new ej.notifications.Skeleton({
                shape: 'Rectangle',
                height: "20px",
                width: "50%"
            });
            skeletonId4.appendTo("#skeletonId4");
            let skeletonId5 = new ej.notifications.Skeleton({
                shape: 'Rectangle',
                height: "20px",
                width: "30%"
            });
            skeletonId5.appendTo("#skeletonId5");
            let skeletonId6 = new ej.notifications.Skeleton({
                shape: 'Rectangle',
                height: "20px",
                width: "10%"
            });
            skeletonId6.appendTo("#skeletonId6");
            languageCategory.appendTo('#language-Category');
            regenerateButton = new ej.buttons.Button({
                content: 'Regenerate',
                isPrimary: true,
                disabled: true
            });
            regenerateButton.appendTo('#regenerate');
            regenerateButton.element.onclick = () => {
                updateAISugesstions();
            };
            sentimentButton = new ej.buttons.Button({
                content: '😊 Neutral',
                disabled: true,
                cssClass: 'sentiment'
            });
            sentimentButton.appendTo('#sentiment');
            copyButton = new ej.buttons.Button({
                content: 'Copy',
                disabled: true,
            });
            copyButton.appendTo('#copy');
            copyButton.element.onclick = () => {
                copyTextToClipboard(AIResult);
            };
            replaceButton = new ej.buttons.Button({
                content: 'Replace',
                isPrimary: true,
                disabled: true
            });
            replaceButton.appendTo('#replace');
            replaceButton.element.onclick = () => {
                let range = (defaultRTE).formatter.editorManager.nodeSelection?.getRange((defaultRTE).contentModule.getDocument());
                (defaultRTE).formatter.editorManager.nodeSelection?.restore(range);
                (defaultRTE).executeCommand('insertHTML', AIResult, { undo: true });
                closeDialog();
            };
            isDialogElementCreated = true;
            (dialog).element.style.display = '';
        }
    }

    function closeDialog() {
        dialog.hide();
        rightRte.value = '';
        leftRte.value = '';
        promptQuery = '';
        chipValue[0] = 'Standard';
        AIResult = '';
        dropValIndex = 0;
        (document.getElementById('chips-container')).style.display = '';
        (document.getElementById('language')).style.display = 'none';
        sentimentButton.content = '😊 Neutral';
    }

    function copyTextToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Text copied to clipboard successfully!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            // Fallback for browsers that do not support the Clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                console.log('Text copied to clipboard using execCommand');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
};