this.default = function() {
    var geminiContainer = document.getElementById('geminiContainer');
    var isFirstPrompt = true;
    var abortController;

    var geminiAIAssistView = new ej.interactivechat.AIAssistView({
        promptRequest: onPromptRequest,
        promptChanged: toggleButtons,
        showHeader: false,
        promptPlaceholder: 'Ask Gemini', 
        enableAttachments: true,
        speechToTextSettings: { 
            enable: true
        },
        stopRespondingClick: stopAIResponse,
        bannerTemplate: "#bannerContent",
        created: created,
        attachmentSettings: {
            saveUrl: 'https://ej2services.syncfusion.com/js/development/api/FileUploader/Save',
            removeUrl: 'https://ej2services.syncfusion.com/js/development/api/FileUploader/Remove'
        },
        footerToolbarSettings: {
            toolbarPosition: 'Bottom',
            items: [
                {
                    iconCss: 'e-icons e-assist-attachment-icon',
                    align: 'Left'
                },
                {
                    align: 'Right',
                    template: '<button id="custombtn">Fast</button>'
                },
                {
                    iconCss: 'e-icons e-assist-speech-to-text',
                    align: 'right'
                },
            ]
        }
    });

    geminiAIAssistView.appendTo('#gemini_aiassistview');

    // Initialize footer position to middle
    if (geminiContainer) {
        geminiContainer.classList.add('middle-footer');
    }

    async function onPromptRequest(args) {
        // Move footer to bottom on first prompt
        if (isFirstPrompt && geminiContainer) {
            geminiContainer.classList.remove('middle-footer');
            geminiContainer.classList.add('bottom-footer');
            isFirstPrompt = false;
        }
        abortController = new AbortController();
        var response = await window.getAIResponse(args, abortController);
        geminiAIAssistView.addPromptResponse(response);
        toggleButtons();
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }

    function toggleButtons() {
        var sendBtn = geminiAIAssistView.element.querySelector('.e-assist-send').parentElement; 
        var audioBtn = geminiAIAssistView.element.querySelector('.e-assistview-speech-to-text');

        var hasPrompt =
            geminiAIAssistView.prompt &&
            geminiAIAssistView.prompt.replace(/<br\s*\/?>/gi, '').replace(/&nbsp;/gi, '').replace(/\s+/g, '').trim(); 
 
        if (hasPrompt) {
            // Show Send
            if (sendBtn) sendBtn.style.display = 'block';
            if (audioBtn) audioBtn.style.display = 'none';
        } else {
            // Show Speech
            if (sendBtn) sendBtn.style.display = 'none'; 
            if (audioBtn) audioBtn.style.display = 'block';
        }
    }

    function created() {
        var items = [
            {
                text: 'Fast',
                description: 'Answers quickly'
            },
            {
                text: 'Thinking',
                description: 'Solve complex problems'
            }, 
            {
                text: 'Pro',
                description: 'Advanced maths and code with 3.1 Pro'
            },
        ]; 

        var currentModel = 'Fast';
 
        var btnObj = new ej.splitbuttons.DropDownButton({
            items: items,
            cssClass: 'e-flat gemini_model',
            itemTemplate: function (data) {
                var contentHtml = `
                    <div class="model-content">
                        <div class="model-name">${data.text}</div>
                        <div class="model-description">${data.description}</div>
                    </div>`;
                return `<div class="model-item">${contentHtml}</div>`;
            },
            beforeItemRender: function (args) {
                if (currentModel === args.item.text) {
                    args.element.classList.add('e-selected');
                }
            },
            select: function (args) {
                currentModel = args.item.text;
                btnObj.content = args.item.text;
            },
        });
        btnObj.appendTo('#custombtn');         
        toggleButtons();
    } 

    new ej.buttons.Button({
        iconCss: 'e-icons e-image',
    }, '#imgBtn');

    new ej.buttons.Button({
        iconCss: 'e-icons e-callout',
    }, '#iplBtn');

    new ej.buttons.Button({
        iconCss: 'e-icons e-play',
    }, '#musicBtn');

    new ej.buttons.Button({
    }, '#writeBtn');
};