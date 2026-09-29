this.default = function() {

    var abortController;
    var telemetryAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.telemetrySuggestions,
        enableStreaming: true,
        promptRequest: onPromptRequest,
        bannerTemplate: bannerContent,
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        telemetrySettings: { enable: true }
    });
    telemetryAIAssistView.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        var telemetryData;
        abortController = new AbortController();
        var result = await window.getOpenAIModelAssistview(args, abortController);
        if (result && result.usage) {
            // Map the usage details returned by the AI service to update the telemetry data.
            telemetryData = {
                model: result.model,
                inputTokens: result.usage.prompt_tokens,
                outputTokens: result.usage.completion_tokens,
                reasoningTokens: result.usage.completion_tokens_details.reasoning_tokens,
                cachedInputTokens: result.usage.prompt_tokens_details.cached_tokens
            };
        }
        telemetryAIAssistView.addPromptResponse(result.response, true, telemetryData);
        telemetryAIAssistView.promptSuggestions = window.telemetrySuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            telemetryAIAssistView.prompts = [];
            telemetryAIAssistView.promptSuggestions = window.telemetrySuggestions;
        }
    }

    function bannerContent() {
        return `<div class="banner-content">
                    <div class="e-icons e-assistview-icon">
                    </div><h3>AI Telemetry</h3>
                    <i>Send a prompt or pick a suggestion to see telemetry metrics for the turn.</i>
                </div>`;
    }
};