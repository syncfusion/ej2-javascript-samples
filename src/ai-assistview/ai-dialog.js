this.default = function() {

    var abortController;
    var splitterObj = new ej.layouts.Splitter({ 
        height: '600px',
        paneSettings: [
            { size: '22%', resizable: false },
            { size: '78%', resizable: false }
        ]
    });
    splitterObj.appendTo('#splitter');

    var dialogInst = new ej.popups.Dialog({
        content: document.getElementById('#aiAssistView'),
        target: '.dialog-aiassistview',
        width: '440px',
        height: '100%',
        visible: false,
        cssClass: 'custom-dialog'
    }); 
    dialogInst.appendTo('#dialogElem');

    var dialogAIAssistView = new ej.interactivechat.AIAssistView({ 
        promptSuggestions: window.defaultSuggestions,
        enableStreaming: true,
        promptRequest: onPromptRequest,
        stopRespondingClick: stopAIResponse,
        bannerTemplate: bannerContent,
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-close', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        responseToolbarSettings: {
            itemClicked: toolbarItemClicked
        },
        cssClass: 'custom-aiassistview'
    });
    dialogAIAssistView.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
        var response = await window.getAIResponse(args, abortController);
        dialogAIAssistView.addPromptResponse(response);
        dialogAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-close') {
            dialogOpenClose();
            stopAIResponse();
        }
        if (args.item.iconCss === 'e-icons e-assist-copy') {
            var targetElem = document.querySelector('.right-content .content');
            var response = dialogAIAssistView.prompts[args.dataIndex].response;
            if (targetElem) {
                targetElem.innerHTML += response + '<br />';
                dialogOpenClose();
            }
        }
    }

    var fabInst = new ej.buttons.Fab({
        iconCss: 'e-icons e-assistview-icon',
        content: 'AI Assist',
        target: '.dialog-aiassistview'
    });
    fabInst.appendTo('#fabElem');
    fabInst.element.onclick = () => {
        dialogOpenClose();
    };

    function dialogOpenClose() {
        dialogInst.visible = !dialogInst.visible;
    }

    function bannerContent() {
        return `<div class="banner-content">
                    <div class="e-icons e-assistview-icon">
                    </div><h3>AI Assistance</h3>
                    <i>To get started, provide input or choose a suggestion.</i>
                </div>`;
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};