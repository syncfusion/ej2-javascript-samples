this.default = function() {

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

    function onPromptRequest(args) {
        let streamingResponse = window.streamingData.find(data => data.prompt === args.prompt);
        let defaultResponse = "For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
        if (streamingResponse) {
            streamingAIAssistView.addPromptResponse(streamingResponse.response);
            streamingAIAssistView.promptSuggestions = streamingResponse?.suggestions || window.streamingSuggestions;
        } else {
            streamingAIAssistView.addPromptResponse(defaultResponse);
            streamingAIAssistView.promptSuggestions = window.streamingSuggestions;
        }
    }
};