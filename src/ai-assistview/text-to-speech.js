this.default = function() {
loadExternalFile();
const promptsData = [
    {
        prompt: "What is AI?",
        response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
];
var aiAssistView = new ej.interactivechat.AIAssistView({
    toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked,
    },
    responseToolbarSettings: {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ],
    },
    prompts: promptsData,
    promptRequest: onPromptRequest,
    enableStreaming: true
});

// Handles toolbar item clicks, such as clearing the conversation on refresh
function toolbarItemClicked(args) {
    if (args.item.iconCss === 'e-icons e-refresh') {
        aiAssistView.prompts = [];
    }
}

// Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
async function onPromptRequest(args) {
    abortController = new AbortController();
    aiAssistView.addPromptResponse(await window.getAIResponse(args, abortController));
}

// Loads the external marked.js library for markdown parsing
function loadExternalFile() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
aiAssistView.appendTo('#aiAssistView');
};