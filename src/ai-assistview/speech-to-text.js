this.default = function() {
const azureOpenAIApiKey = 'Your_AzureOpenAIApiKey'; // replace your key
const azureOpenAIEndpoint = 'Your_AzureOpenAIEndpoint'; // replace your endpoint
const azureOpenAIApiVersion = 'Your_AzureOpenAIApiVersion'; // replace to match your resource
const azureDeploymentName = 'Your_AzureDeploymentName'; // your Azure OpenAI deployment name
var stopStreaming = false;
loadExternalFile();
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
    bannerTemplate: "#bannerContent",
    promptRequest: onPromptRequest,
    stopRespondingClick: handleStopResponse
});
aiAssistView.appendTo('#aiAssistView');

function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
        stopStreaming = true; // Ensure streaming is stopped on refresh
    }
}

async function streamResponse(response) {
    var lastResponse = "";
    var responseUpdateRate = 10;
    var i = 0;
    var responseLength = response.length;
    while (i < responseLength && !stopStreaming) {
        lastResponse += response[i];
        i++;
        if (i % responseUpdateRate === 0 || i === responseLength) {
            var htmlResponse = marked.parse(lastResponse);
            aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
            aiAssistView.scrollToBottom();
        }
        await new Promise(resolve => setTimeout(resolve, 15));
    }
}

function onPromptRequest(args) {
    if (!args?.prompt?.trim() || !aiAssistView) return;
    stopStreaming = false;
    var url =
        azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: azureOpenAIApiKey,
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: args.prompt }],
            max_tokens: 150,
            stream: false
        }),
    })
        .then(response => response.json())
        .then(reply => {
            var responseText = reply.choices[0].message.content.trim() || 'No response received.';
            stopStreaming = false;
            streamResponse(responseText);
        })
        .catch(error => {
            aiAssistView.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
            stopStreaming = true;
        });
}

function handleStopResponse() {
    stopStreaming = true;
}

function loadExternalFile() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
};