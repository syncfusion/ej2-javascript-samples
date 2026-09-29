this.default = function() {
    var chatgptContainer = document.getElementById('chatgptContainer');
    var isFirstPrompt = true;
    var abortController;

    var chatgptAIAssistView = new ej.interactivechat.AIAssistView({
        promptRequest: onPromptRequest,
        showHeader: false,
        promptPlaceholder: 'Ask anything',
        enableAttachments: true,
         attachmentSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        speechToTextSettings: {
            enable: true
        },
        bannerTemplate: "#bannerContent",
        stopRespondingClick: stopAIResponse,
        footerToolbarSettings: {
            toolbarPosition: 'Inline',
            items: [
                { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
                { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' }
            ]
        }
    });

    chatgptAIAssistView.appendTo('#chatgpt_aiassistview');

    // Initialize footer position to middle (compact, centered greeting)
    if (chatgptContainer) {
        chatgptContainer.classList.add('middle-footer');
    }

    async function onPromptRequest(args) {
        // Move footer to bottom on first prompt
        if (isFirstPrompt && chatgptContainer) {
            chatgptContainer.classList.remove('middle-footer');
            chatgptContainer.classList.add('bottom-footer');
            isFirstPrompt = false;
        }
        abortController = new AbortController();
        var response = await window.getAIResponse(args, abortController);
        chatgptAIAssistView.addPromptResponse(response);
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};
