this.default = function() {
    var templateChatUI = new ej.interactivechat.ChatUI({
        headerText: "Order Assistant",
        headerIconCss: "chat-bot",
        showTimeBreak: true,
        showFooter: false,
        autoScrollToBottom: true,
        user: { id: 'admin', user: 'Admin', avatarUrl: './src/chat-ui/images/bot.png' },
        emptyChatTemplate: '#emptyChatTemplate',
        messageTemplate: (context) => messageTemplate(context),
        timeBreakTemplate: (context) => timeBreakTemplate(context),
        messageSend: () => {
            setTimeout(() => {
                var defaultResponse = "Unfortunately, I don't have information on that. Use any real-time data streaming service to provide chat updates.";
                var message = {
                    author: { id: 'bot', user: 'Bot', avatarUrl: './src/chat-ui/images/bot.png' },
                    text: defaultResponse
                };
                templateChatUI.addMessage(message);
            }, 500);
        },
    });
    templateChatUI.appendTo('#chatTemplate');

    function messageTemplate(context) {
        const isAdmin = context.message.author.id === 'admin';
        const userImage = !isAdmin ? 
            `<img class="message-user" src="${context.message.author.avatarUrl}" alt="${context.message.author.user}">` : '';
        const suggestions = context.message.suggestions && context.message.suggestions.length > 0 && !isAdmin ? 
            `<div class="message-suggestions">${context.message.suggestions.map(suggestion => `<button class="suggestion-button e-btn e-primary e-outline">${suggestion}</button>`).join('')}</div>` : '';
        return `<div class="message-wrapper">
            <div class="message-template">
                ${userImage}
                <div class="message-items e-card">
                    <div class="message-text">${context.message.text}</div>
                </div>
            </div>
            <div class="suggestion-container">
                ${suggestions}
            </div>
        </div>`;
    }

    function timeBreakTemplate(context) {
        var dateText = context.messageDate;
        if (context.messageDate.toDateString() === new Date().toDateString()) {
            dateText = 'Today';
        }
        return `<div class="timebreak-template">${dateText}</div>`;
    }

    function bindClickAction() {
        templateChatUI.element.querySelectorAll('.suggestion-button').forEach(suggestion => {
            suggestion.addEventListener('click', () => handleSuggestionClick(suggestion));
        });
    }

    function handleSuggestionClick(suggestion) {
        const message = window.templateMessagedata.find((message) => message.text === suggestion.innerText);
        if (message) {
            templateChatUI.addMessage(message.text);
            setTimeout(() => {
                var messageModel = {
                    author: { id: 'bot', user: 'Bot', avatarUrl: './src/chat-ui/images/bot.png' },
                    text: message.reply,
                    suggestions: message.suggestions
                };
                templateChatUI.addMessage(messageModel);
                bindClickAction();
                if (message.suggestions.length === 0) { templateChatUI.showFooter = true; }
            }, 500);
            suggestion.parentElement.innerHTML = '';
        }
    }

    // Initial bot message with suggestions
    setTimeout(() => {
        var message = {
            author: { id: 'bot', user: 'Bot', avatarUrl: './src/chat-ui/images/bot.png' },
            text: window.templateMessagedata[0].text,
            suggestions: window.templateMessagedata[0].suggestions
        };
        templateChatUI.addMessage(message);
        bindClickAction();
    }, 1500);
};