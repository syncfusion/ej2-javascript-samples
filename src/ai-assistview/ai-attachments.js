this.default = function() {

    var abortController;
    var attachmentAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.defaultSuggestions,
        enableStreaming: true,
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

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
        var response = foundPrompt ? foundPrompt.response : await window.getAIResponse(args, abortController);
        attachmentAIAssistView.addPromptResponse(response);
        attachmentAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            attachmentAIAssistView.prompts = [];
            attachmentAIAssistView.promptSuggestions = window.defaultSuggestions;
        }
    }
};