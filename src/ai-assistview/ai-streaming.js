this.default = function() {

    var abortController;
    var streamingAIAssistView = new ej.interactivechat.AIAssistView({
        enableStreaming: true,
        promptSuggestions: window.streamingSuggestions,
        promptRequest: onPromptRequest,
        bannerTemplate: "#bannerContent",
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        }
    });
    streamingAIAssistView.appendTo('#streamAssistView');
    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            streamingAIAssistView.prompts = [];
            streamingAIAssistView.promptSuggestions = window.streamingSuggestions;
        }
    }

    async function onPromptRequest(args) {
        abortController = new AbortController();
        let streamingResponse = window.streamingData.find(data => data.prompt === args.prompt);
        var response = streamingResponse ? streamingResponse.response : await window.getAIResponse(args, abortController);
        streamingAIAssistView.addPromptResponse(response);
        streamingAIAssistView.promptSuggestions = streamingResponse ? streamingResponse.suggestions : window.streamingSuggestions;
    }
};