this.default = function() {

    var abortController;
    var streamingAIAssistView = new ej.interactivechat.AIAssistView({
        enableStreaming: true,
        promptSuggestions: window.streamingSuggestions,
        promptRequest: onPromptRequest,
        stopRespondingClick: stopAIResponse,
        bannerTemplate: bannerContent,
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
            stopAIResponse();
        }
    }

    async function onPromptRequest(args) {
        abortController = new AbortController();
        let streamingResponse = window.streamingData.find(data => data.prompt === args.prompt);
        var response = await window.getAIResponse(args, abortController);
        streamingAIAssistView.addPromptResponse(response);
        streamingAIAssistView.promptSuggestions = streamingResponse ? streamingResponse.suggestions : window.streamingSuggestions;
    }

    function bannerContent() {
        return `<div class="banner-content">
                    <div class="e-icons e-assistview-icon">
                    </div><h3>AI Assistance</h3>
                    <i>Update real-time responses with chunked streaming updates.</i>
                </div>`;
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};