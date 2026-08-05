this.default = function() {

    var abortController;
    var defaultAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.defaultSuggestions,
        enableStreaming: true,
        promptRequest: onPromptRequest,
        bannerTemplate: "#bannerContent",
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        }
    });
    defaultAIAssistView.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
        var response = foundPrompt ? foundPrompt.response : await window.getAIResponse(args, abortController);
        defaultAIAssistView.addPromptResponse(response);
        defaultAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            defaultAIAssistView.prompts = [];
            defaultAIAssistView.promptSuggestions = window.defaultSuggestions;
        }
    }
};