this.default = function() {

    var viewsAIAssistView = new ej.interactivechat.AIAssistView({
        views: [
            {
                type: 'Assist',
                name: "Prompt",
                viewTemplate: promptViewContent
            },
            {
                type: 'Custom',
                name: 'Response',
                iconCss: 'e-icons e-comment-show',
                viewTemplate: responseViewContent
            },
            {
                type: 'Custom',
                name: 'Custom',
                viewTemplate: '<div class="view-container"><h5>Custom view content</h5></div>'
            }
        ],
        created: onCreate
    });
    viewsAIAssistView.appendTo('#aiAssistView');


    function promptViewContent() {
        var suggestionsElem = '';
        window.defaultSuggestions.forEach((suggestion) => {
            suggestionsElem += `<li class="suggestion-item e-card">${suggestion}</li>`;
        });
        return `<div class="view-container">
                   <textarea id="promptTextarea"></textarea>
                   <button id="generateBtn"></button>
                   <ul class="suggestions">${suggestionsElem}</ul>
                </div>`;
    }

    function responseViewContent() {
        return `<div class="view-container response-view">
                   <div class="responseItemContent default-response e-card">
                   <span class="e-icons e-circle-info"></span>
                   No prompt provided. Please enter a prompt and click 'Generate Prompt' to see the response.</div>
                </div>`;
    }

    function updateResponseView(prompt) {
        var responseView = viewsAIAssistView.element.querySelector('.view-container');
        var separatorElem = '<hr style="height: 1px;margin: 0;">';
        var responseItemElem = `<div class="responseItemContent e-card">
                                    <div class="response-header"><b>Prompt:</b> ${prompt}</div>${separatorElem}
                                    <div class="content">
                                        <div class="e-skeleton e-shimmer-wave" style="width: 100%; height: 20px;"></div>
                                        <div class="e-skeleton e-shimmer-wave" style="width: 80%; height: 20px;"></div>
                                        <div class="e-skeleton e-shimmer-wave" style="width: 100%; height: 20px;"></div>
                                    </div>
                                    ${separatorElem}
                                    <div class="options">
                                        <button id="copyBtn" class="e-btn e-normal e-skeleton e-shimmer-wave">Copy</button>
                                    </div>
                                </div>`;
        var defaultResponse = responseView.querySelector('.default-response');
        if (defaultResponse) {
            defaultResponse.remove();
        }
        responseView.innerHTML = responseItemElem + responseView.innerHTML;
        setTimeout(() => {
            var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === prompt);
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            
            var response = foundPrompt ? foundPrompt.response : defaultResponse;
            responseView.children[0].querySelector('.content').innerHTML = response;
            var copyBtn = responseView.children[0].querySelector('#copyBtn');
            copyBtn.classList.remove('e-skeleton', 'e-shimmer-wave');
            copyBtn.addEventListener('click', (e) => {
                var textToCopy = e.target.parentElement.parentElement.querySelector('.content').textContent;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 1000);
                });                
            });
            
        }, 2000);
    }

    function onCreate() {
        var textareaObj = new ej.inputs.TextArea({
            placeholder: "Enter your prompt...",
            rows: 5,
            resizeMode: 'None',
            input: (e) => {
                generateBtn.disabled = !e.value;
            }
        });
        textareaObj.appendTo('#promptTextarea');

        var generateBtn = new ej.buttons.Button({ cssClass: 'e-primary generate-btn', content:'Generate Prompt', disabled: true });
        generateBtn.appendTo('#generateBtn');
        generateBtn.element.addEventListener('click', () => {
            var promptValue = textareaObj.value;
            if (promptValue) {
                textareaObj.value = '';
                generateBtn.disabled = true;
                viewsAIAssistView.activeView = 1;
                viewsAIAssistView.dataBind();   
                updateResponseView(promptValue);
            }
        });

        viewsAIAssistView.element.querySelector('.view-container .suggestions').addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-item')) {
                textareaObj.value = e.target.textContent;
                generateBtn.disabled = false;
            }
        });
    }

};