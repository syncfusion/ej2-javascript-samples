this.default = function() {

    var streamingAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.streamingSuggestions,
        promptRequest: onPromptRequest,
        bannerTemplate: "#bannerContent",
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        stopRespondingClick: handleStopResponse
    });
    streamingAIAssistView.appendTo('#streamAssistView');
    let stopStreaming = false;
    function handleStopResponse() {
        stopStreaming = true;
    }
    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            streamingAIAssistView.prompts = [];
            streamingAIAssistView.promptSuggestions = window.streamingSuggestions;
        }
    }
    loadExternalFile();

    function onPromptRequest(args) {
        let lastResponse = "";
        let streamingResponse = window.streamingData.find(data => data.prompt === args.prompt);
        let defaultResponse = "For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
        let responseUpdateRate = 10; // Update scroll and streaming response every 10 characters
        async function streamResponse(response) {
            let i = 0;
            let responseLength = response.length;
            while (i < responseLength && !stopStreaming) {
                lastResponse += response[i];
                i++;
                if (i % responseUpdateRate === 0 || i === responseLength) {
                    let htmlResponse = marked(lastResponse);
                    // Convert text checkboxes to actual HTML checkboxes
                    htmlResponse = htmlResponse.replace(/\[x\]/g, '<input type="checkbox" checked disabled>')
                    .replace(/\[\s\]/g, '<input type="checkbox" disabled>');
                    streamingAIAssistView.addPromptResponse(htmlResponse, i === responseLength);
                    streamingAIAssistView.scrollToBottom();
                }
                await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
            }
            streamingAIAssistView.promptSuggestions = streamingResponse?.suggestions || window.streamingSuggestions;
        }
    
        if (streamingResponse) {
            stopStreaming = false;
            streamResponse(streamingResponse.response);
        } else {
            streamingAIAssistView.addPromptResponse(defaultResponse, true);
            streamingAIAssistView.promptSuggestions = window.streamingSuggestions;
        }
    }

    function loadExternalFile() {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};