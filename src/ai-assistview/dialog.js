this.default = function() {

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
        promptRequest: onPromptRequest,
        bannerTemplate: "#bannerContent",
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

    function onPromptRequest(args) {
        setTimeout(() => {
            var foundPrompt = window.defaultPromptResponseData.find((promptObj) => promptObj.prompt === args.prompt);
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            
            dialogAIAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
            dialogAIAssistView.promptSuggestions = foundPrompt?.suggestions || window.defaultSuggestions;
            
        }, 2000);
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-close') {
            dialogOpenClose();
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
};