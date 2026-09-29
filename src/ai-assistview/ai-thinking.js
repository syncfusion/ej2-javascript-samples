this.default = function() {

    var thinkingAIAssistView = new ej.interactivechat.AIAssistView({
        bannerTemplate: '#bannerContent',
        promptSuggestions: [
            'Suggest ways to improve decision making',
            'Explain how climate change affects everyday life'
        ],
        promptRequest: onPromptRequest,
        stopRespondingClick: stopAIResponse,
        enableStreaming: true
    });
    thinkingAIAssistView.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        var partialThinkingBlocks = { blockType: 'thinking', title: 'Thinking', collapsible: true, collapsed: true, isActive: true, stages: [ { status: 'inprogress', content: 'Analyzing your request to deliver the most relevant response' } ] };
        var finalThinkingBlocks = { blockType: 'thinking', title: 'Thinking', collapsible: true, collapsed: true, isActive: false, stages: [ { status: 'completed', content: 'Analyzing your request to deliver the most relevant response' }, { status: 'completed', content: 'Done' } ] };
        thinkingAIAssistView.addPromptResponse({ blocks: [ partialThinkingBlocks ] }, false);
        try {
            const userID = await window.getUserID();
            if (!userID) {
                return;
            }
            var abortController = new AbortController();
            const requestBody = {
                visitorId: userID,
                messages: {
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        { role: 'user', content: args.prompt }
                    ]
                },
                reasoning: {
                    effort: 'medium',
                    summary: 'concise'
                }
            };
            const response = await fetch(window.AI_SERVICE_URL + '/api/chat', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody),
                signal: abortController.signal
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || ("HTTP Error " + response.status));
            }
            var result = await response.json();
            var responseText = '';
            if (result && result.response) {
                responseText = result.response.replace('END_INSERTION', '');
            }
            thinkingAIAssistView.addPromptResponse({ blocks: [ finalThinkingBlocks ], response: responseText || "We could not reach the AI service; please try again later." });

        } catch (error) {
            if (error.name === "AbortError") {
                return;
            } else if (error.message && error.message.indexOf("token limit") !== -1) {
                thinkingAIAssistView.addPromptResponse({ response: error.message });
            }
            thinkingAIAssistView.addPromptResponse({ response: "We could not reach the AI service; please try again later." });
        }
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};
