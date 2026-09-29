this.default = function() {

    var abortController;
    var agents = [
        { id: 'TechSupport', name: 'TechSupport', description: 'Help troubleshoot VPN connectivity issues.', placeholder: 'Ask about VPN, network, or device issues', iconCss: 'e-icons e-comment-status' },
        { id: 'HRAssistant', name: 'HRAssistant', description: 'What is the parental leave policy?', placeholder: 'Ask about leave, benefits, and HR policies', iconCss: 'e-icons e-people' },
        { id: 'KnowledgeBase', name: 'KnowledgeBase', description: 'Find details about the employee onboarding process.', iconCss: 'e-icons e-objects' }
    ];
    var commands = [
        { id: 'table', name: '/table', description: 'Answer as a markdown table', placeholder: 'Format the response as a table', iconCss: 'e-icons e-table' },
        { id: 'rewrite', name: '/rewrite', description: 'Rewrite content for clarity and professionalism.', placeholder: 'Improve clarity and professional tone', iconCss: 'e-icons e-rename' },
        { id: 'checklist', name: '/checklist', description: 'Convert a process into a step-by-step checklist.', iconCss: 'e-icons e-list-unordered' }
    ];
    var mentions = [
        {
            mentionChar: '@',
            dataSource: agents,
            fields: { text: 'name', value: 'id', iconCss: 'iconCss' },
            filterType: 'StartsWith',
            highlight: true
        },
        {
            mentionChar: '/',
            dataSource: commands,
            showMentionChar: false,
            fields: { text: 'name', value: 'id' },
            itemTemplate: '<div class="listItems"><span class="commandIcon ${iconCss}"></span><span class="commandName">${name}</span><span class="commandDesc">${description}</span></div>',
            displayTemplate: '<span class="e-aiassist-mention-item-chip">${name}</span>'
        }
    ];

    var mentionAIAssistView = new ej.interactivechat.AIAssistView({
        promptPlaceholder: "Type a prompt and use '/' for commands or '@' for agents...",
        bannerTemplate: '#bannerContent',
        promptSuggestions: window.mentionSuggestions,
        enableStreaming: true,
        mentions: mentions,
        promptRequest: onPromptRequest,
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        stopRespondingClick: stopAIResponse
    });
    mentionAIAssistView.appendTo('#aiAssistView');

    function buildSystemPrompt(mentions) {
        const prompts = [];
        mentions.forEach((mention) => {
            const name = mention.itemData.id;
            if (window.agentPrompts[name]) {
                prompts.push(window.agentPrompts[name]);
            }
            if (window.commandPrompts[name]) {
                prompts.push(window.commandPrompts[name]);
            }
        });
        const selectedCount = (args_mentions_count => args_mentions_count || 0)(mentions && mentions.length);
        if (selectedCount > 1) {
            prompts.unshift(
                'Composition: ' + selectedCount + ' mentions are active. ' +
                'Produce a single response that respects every selected agent scope and applies every selected command in order. ' +
                'Commands format the agents\' content; never let one agent override another. '
            );
        }
        return prompts.join('\n\n');
    }

    async function onPromptRequest(args) {
        abortController = new AbortController();
        try {
            var aiArgs = {
                prompt: args.prompt,
                systemPrompt: buildSystemPrompt(args.mentions || [])
            };
            var reply = await window.getAIResponse(aiArgs, abortController);
            var response = aiArgs.systemPrompt && reply?.response ? reply.response : reply;
            mentionAIAssistView.addPromptResponse(response);
        } catch (error) {
            mentionAIAssistView.addPromptResponse("We could not reach the AI service; please try again later.");
        }
        mentionAIAssistView.promptSuggestions = window.mentionSuggestions;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            mentionAIAssistView.prompts = [];
            mentionAIAssistView.promptSuggestions = window.mentionSuggestions;
            stopAIResponse();
        }
    }

    function stopAIResponse() {
        if (abortController) {
            abortController.abort();
        }
    }
};