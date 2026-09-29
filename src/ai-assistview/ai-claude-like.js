this.default = function() {

    var claudeContainer = document.getElementById('claudeContainer');
    var isFirstPrompt = true;
    var abortController;

    var claudeAIAssistView = new ej.interactivechat.AIAssistView({
        promptRequest: onPromptRequest,
        enableStreaming: true,
        showHeader: false,
        promptPlaceholder: 'How can i help you today?', 
        enableAttachments: true,
        stopRespondingClick: stopAIResponse,
        bannerTemplate: "#bannerContent",
        created: created,
        attachmentSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        footerToolbarSettings: {
            toolbarPosition: 'Bottom',
            items: [
                {
                    iconCss: 'e-icons e-assist-attachment-icon',
                    align: 'Left'
                },
                {
                    align: 'Right',
                    template: '<button id="custombtn">Opus 4.6</button>'
                }

            ]
        }
    });

    claudeAIAssistView.appendTo('#claude_aiassistview');

    // Initialize footer position to middle
    if (claudeContainer) {
        claudeContainer.classList.add('middle-footer');
    }

    async function onPromptRequest(args) {
        // Move footer to bottom on first prompt
        if (isFirstPrompt && claudeContainer) {
            claudeContainer.classList.remove('middle-footer');
            claudeContainer.classList.add('bottom-footer');
            isFirstPrompt = false;
        }
        abortController = new AbortController();
        var response = await window.getAIResponse(args, abortController);
        claudeAIAssistView.addPromptResponse(response);
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }

    function created() {
        var items = [
            {
                text: 'Opus 4.6',
                description: 'Most capable for ambitious work'
            },
            {
                text: 'Sonnet 4.6',
                description: 'Most efficient for everyday tasks'
            }, 
            {
                text: 'Haiku 4.5',
                description: 'Fastest for quick answers'
            },
            {
                text: 'Extended thinking',
                description: 'Think longer for complex tasks',
                id: 'extended-thinking'
            }
        ]; 

        var currentModel = 'Opus 4.6';
        var extendedThinkingEnabled = false;
 
        var btnObj = new ej.splitbuttons.DropDownButton({
            items: items,
            cssClass: 'e-flat claude_model',
            itemTemplate: function (data) {
                var contentHtml = `
                    <div class="model-content">
                        <div class="model-name">${data.text}</div>
                        <div class="model-description">${data.description}</div>
                    </div>`;
                
                if (data.id === 'extended-thinking') {
                    contentHtml += `
                        <div class="toggle-container">
                            <input
                                type="checkbox"
                                class="extended-thinking-toggle"
                                id="extended-thinking-switch"
                            />
                        </div>`;
                }
                
                return `<div class="model-item">${contentHtml}</div>`;
            },
            beforeItemRender: function (args) {
                if (currentModel === args.item.text) {
                    args.element.classList.add('e-selected');
                }
            },
            open: onModelDropdownOpen,
            select: function (args) {
                currentModel = args.item.text;
                btnObj.content = args.item.text;
            },
        });
        btnObj.appendTo('#custombtn');
        
        function onModelDropdownOpen() {
            var toggleInput = document.getElementById('extended-thinking-switch');
            if (toggleInput && !toggleInput.classList.contains('e-switch')) {
                new ej.buttons.Switch({
                    checked: extendedThinkingEnabled,
                    change: function (args) {
                        extendedThinkingEnabled = args.checked;
                    }
                }).appendTo(toggleInput);
                
                var toggleContainer = toggleInput.closest('.toggle-container');
                if (toggleContainer) {
                    toggleContainer.addEventListener('click', function (e) {
                        e.stopPropagation();
                    });
                }
            }
        }  
    } 

    new ej.buttons.Button({
        iconCss: 'e-icons e-code-view',
    }, '#codeBtn');

    new ej.buttons.Button({
        iconCss: 'e-icons e-edit',
    }, '#writeBtn');

    new ej.buttons.Button({
        iconCss: 'e-icons e-stamp',
    }, '#choiceBtn');

    new ej.buttons.Button({
        iconCss: 'e-icons e-layers',
    }, '#learnBtn');

    new ej.buttons.Button({
        iconCss: 'e-icons e-activities',
    }, '#lifeBtn');
};