this.default = function() {

    var templateAIAssistView = new ej.interactivechat.AIAssistView({
        bannerTemplate: '#bannerContent',
        promptItemTemplate: promptItemContent,
        responseItemTemplate: responseItemContent,
        promptSuggestionItemTemplate: suggestionItemContent,
        promptSuggestionsHeader: 'Hello! Ask Questions, to better understand how your prompt interacts with AI AssistView!',
        promptSuggestions: window.defaultSuggestions,
        toolbarSettings: {
            items: [
                { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
            ]
        },
        promptRequest: onPromptRequest
    });
    templateAIAssistView.appendTo('#aiAssistView');

    function onPromptRequest(args) {
        setTimeout(() => {
            var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            
            templateAIAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
            templateAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
            
        }, 2000);
    }


    function promptItemContent(ctx) {
        var prompt = ctx.prompt.replace('<span class="e-icons e-circle-info"></span>', '');
        return `<div class="promptItemContent">
                    <div class="prompt-header">You
                        <span class="e-icons e-user"></span>
                    </div>
                    <div class="content">${prompt}</div>
                </div>`;
    }

    function responseItemContent(ctx) {
        return `<div class="responseItemContent">
                    <div class="response-header">
                        <span class="e-icons e-assistview-icon"></span>
                        AI Assist
                    </div>
                    <div class="content">${ctx.response}</div>
                </div>`;
    }

    function suggestionItemContent(ctx) {
        return `<div class='suggestion-item active'>
                    <span class="e-icons e-circle-info"></span>
                    <div class="content">${ctx.promptSuggestion}</div>
                </div>`;
    }

    var carouselObj = new ej.navigations.Carousel({
        width: '100%',
        height: '60%',
        showIndicators: false,
        partialVisible: true,
        buttonsVisibility: 'Visible',
        dataSource: [
            { imagePath: 'src/ai-assistview/images/moscow.jpg', suggestion: 'How do I prioritize tasks effectively?'  },
            { imagePath: 'src/ai-assistview/images/bridge.jpg', suggestion: 'How do I set daily goals in my work day?'  },
            { imagePath: 'src/ai-assistview/images/london.jpg', suggestion: 'Steps to publish a e-book with marketing strategy'  },
            { imagePath: 'src/ai-assistview/images/tokyo.jpg', suggestion: 'What tools or apps can help me prioritize tasks?'  }
        ],
        itemTemplate: '#carouselTemplate'
    });
    carouselObj.appendTo('#bannerCarousel');

    carouselObj.element.addEventListener('click', function (e) {
        handleAction(e);
    });

    carouselObj.element.addEventListener('touchstart', function (e) {
        handleAction(e);
    });

    function handleAction(e){
        var target = e.target;
        var prompt = '';
        if (target.tagName === 'IMG') {
            prompt = e.target.nextElementSibling.textContent;
        } else if (target.className === 'e-card-header') {
            prompt = e.target.textContent;
        }
        if (prompt)
            templateAIAssistView.executePrompt(prompt);
    };


    new ej.splitbuttons.DropDownButton({
        items: [
            { text: 'Settings', iconCss: 'e-icons e-settings' },
            { separator: true },
            { text: 'Log out' }
        ],
        iconCss: 'e-icons e-user',
        cssClass: 'e-caret-hide',
    }, '#ddMenu');

};