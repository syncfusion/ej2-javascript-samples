this.default = function() {
loadExternalFile();

var abortController;
var aiAssistView = new ej.interactivechat.AIAssistView({
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    footerToolbarSettings: {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-send', align: 'Right' },
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left'}
        ]
    },
    enableAttachments: true,
    attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    },
    speechToTextSettings: {
        enable: true
    },
    bannerTemplate: bannerContent,
    stopRespondingClick: stopAIResponse,
    promptRequest: onPromptRequest,
    enableStreaming: true
});
aiAssistView.appendTo('#aiAssistView');

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        stopAIResponse();
    }
}

async function onPromptRequest(args) {
    if (!args?.prompt?.trim() || !aiAssistView) return;
    abortController = new AbortController();
    var response = await window.getAIResponse(args, abortController);
    aiAssistView.addPromptResponse(response);
}

function loadExternalFile() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function bannerContent() {
    return `<div class="banner-content">
                <div class="e-icons e-listen-icon">
                </div><h3>Speech To Text</h3>
                <i>Click the below mic-button to convert your voice to text.</i>
            </div>`;
}

function stopAIResponse() {
    if (abortController) {
        abortController.abort();
    }
}
};