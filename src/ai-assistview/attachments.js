this.default = function() {

    var attachmentAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.defaultSuggestions,
        promptRequest: onPromptRequest,
        bannerTemplate: "#bannerContent",
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        enableAttachments: true,
        attachmentSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        }
    });
    attachmentAIAssistView.appendTo('#aiAssistView');

    function onPromptRequest(args) {
        setTimeout(() => {
            var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            
            attachmentAIAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
            attachmentAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
            
        }, 2000);
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            attachmentAIAssistView.prompts = [];
            attachmentAIAssistView.promptSuggestions = window.defaultSuggestions;
        }
    }
};