this.default = function() {

    var abortController;
    var defaultAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.defaultSuggestions,
        enableStreaming: true,
        promptRequest: onPromptRequest,
        stopRespondingClick: stopAIResponse,
        bannerTemplate: bannerContent,
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        }
    });
    defaultAIAssistView.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
        var response = await window.getAIResponse(args, abortController);
        defaultAIAssistView.addPromptResponse(response);
        defaultAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            defaultAIAssistView.prompts = [];
            defaultAIAssistView.promptSuggestions = window.defaultSuggestions;
            stopAIResponse();
        }
    }

    function bannerContent() {
        return `<div class="banner-content">
                    <div class="e-icons e-assistview-icon">
                    </div><h3>AI Assistance</h3>
                    <i>To get started, provide input or choose a suggestion.</i>
                </div>`;
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};