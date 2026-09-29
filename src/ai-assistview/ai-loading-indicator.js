this.default = function () {
    var abortController;
    var selectedLoadingType = 'dot';
    var loadingTypeTemplates = {
        dot: '<div class="assistview-dot-loading"><span></span><span></span><span></span></div>',
        spinner: '<div class="assistview-spinner-loading"><div class="spinner"></div></div>',
        text: '<div class="assistview-status-loading">' +
                '<span class="status-1">🧠 Understanding request...</span>' +
                '<span class="status-2">✍️ Drafting response...</span>' +
                '<span class="status-3">🚀 Almost ready...</span>' +
              '</div>',
        textIndicator: '<div class="assistview-text-indicator">' +
                            '<span>Generating</span>' +
                            '<div class="assistview-dots"><span></span><span></span><span></span></div>' +
                       '</div>'
    };
    var currentAnimationTemplate = loadingTypeTemplates[selectedLoadingType];
     function bannerContent() {
        return `<div class="banner-content">
                    <div class="e-icons e-assistview-icon">
                    </div><h3>AI Assistance</h3>
                    <i>Explore different loading indicator types displayed while AI-generated responses are being processed.</i>
                </div>`;
    }

    var loadingAIAssistView = new ej.interactivechat.AIAssistView({
        bannerTemplate: bannerContent,
        toolbarSettings: {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: toolbarItemClicked
        },
        enableStreaming: true,
        promptSuggestions: window.defaultSuggestions,
        responseAnimationTemplate: currentAnimationTemplate,
        stopRespondingClick: stopAIResponse,
        promptRequest: onPromptRequest
    });
    loadingAIAssistView.appendTo('#aiAssistView');

    var loadingTypeDropdown = new ej.dropdowns.DropDownList({
        width: '220px',
        popupHeight: '200px',
        change: function (args) {
            selectedLoadingType = args.value;
            currentAnimationTemplate = loadingTypeTemplates[selectedLoadingType] || loadingTypeTemplates.dot;
            loadingAIAssistView.responseAnimationTemplate = currentAnimationTemplate;
            loadingAIAssistView.dataBind();
        }
    });
    loadingTypeDropdown.appendTo('#loadingType');

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var aiResponse = await window.getAIResponse(args, abortController);
        loadingAIAssistView.addPromptResponse(aiResponse);
        loadingAIAssistView.promptSuggestions = window.defaultSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            loadingAIAssistView.prompts = [];
            loadingAIAssistView.promptSuggestions = window.defaultSuggestions;
            stopAIResponse();
        }
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};