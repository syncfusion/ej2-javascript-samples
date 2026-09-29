
this.default = function() {

    loadExternalFile();
    var abortController;
    var mermaidAIAssistview = new ej.interactivechat.AIAssistView({
        stopRespondingClick: stopAIResponse,
        bannerTemplate: bannerContent,
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        promptSuggestions: window.mermaidSuggestions,
        promptRequest: onPromptRequest
    });
    mermaidAIAssistview.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var aiArgs = {
            prompt: args.prompt,
            systemPrompt: window.mermaidSystemPrompt
        };
        var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
        var aireply = await window.getAIResponse(aiArgs, abortController);
        renderMermaidResponse(aireply.response).then(function(renderedResponse) {
            mermaidAIAssistview.addPromptResponse(renderedResponse, true);
        });
        mermaidAIAssistview.promptSuggestions = foundPrompt?.suggestions || window.mermaidSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            mermaidAIAssistview.prompts = [];
            mermaidAIAssistview.promptSuggestions = window.mermaidSuggestions;
            stopAIResponse();
        }
    }

    function bannerContent() {
        return `<div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistant</h3>
            <i>Type a request or try one of the suggestions to generate a diagram.</i>
        </div>`;
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }

    //Converts Mermaid code blocks in the response into rendered SVG markup.
    async function renderMermaidResponse(response) {
        var mermaidRegex = /```mermaid\s*([\s\S]*?)```/g;
        let result = response;
        let match;
        let index = 0;
        while ((match = mermaidRegex.exec(response)) !== null) {
            var source = match[1].trim();
            try {
                var id = `ai-mermaid-${Date.now()}-${index++}`;
                var rendered = await window.mermaid.render(id, source);
                result = result.replace(
                    match[0],
                    `<div class="e-aiassistview-mermaid">${rendered.svg}</div>`
                );
            } catch (error) {
                console.error('Mermaid rendering failed:', error);
            }
        }
        return result;
    }

    // Loads the external mermaid.js library for mermaid diagram parsing
    function loadExternalFile() {
        var mermaidScript = document.createElement('script');
        mermaidScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.15.0/mermaid.min.js';
        mermaidScript.onload = function() {
            mermaid.initialize({
                startOnLoad: false,
                securityLevel: 'strict',
                theme: 'default'
            });
        };
        document.getElementsByTagName('head')[0].appendChild(mermaidScript);
    }
};