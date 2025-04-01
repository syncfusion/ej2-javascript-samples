this.default = function() {

    var chatMessages = {
        user1: window.integrationMessagedata,
        admin: window.botMessagedata,
        user2: window.walterMessagedata,
        user3: window.lauraMessagedata,
        team: window.teamsMessagedate,
        user4: window.suyamaMessagedata
    };

    var chatUiInst = new ej.interactivechat.ChatUI({
        headerText: 'Albert',
        headerIconCss: "chat_user1_avatar",
        messages: chatMessages.user1,
        user: { id: 'user1', user: 'Albert', avatarUrl: './src/chat-ui/images/andrew.png' },
        headerToolbar: { items: [ { iconCss: 'sf-icon-phone-call', align: 'Right', tooltipText: 'Audio call' }] },
        messageSend: function(args) {
            chatUiInst.suggestions = [];
            setTimeout(() => {
                if (args.message.author.id === 'admin') {
                    var foundMessage = window.botData.find((message) => message.text === args.message.text);
                    var defaultResponse = "Use any real-time data streaming service to provide chat updates.";
                    var message = {
                        author: { id: 'bot', user: 'Bot', avatarUrl: './src/chat-ui/images/bot.png' },
                        text: foundMessage?.reply || defaultResponse
                    };
                    chatUiInst.addMessage(message);
                    chatUiInst.suggestions = foundMessage?.suggestions || [];
                }
            }, 500);
        }
    });
    chatUiInst.appendTo('#integration-chat');

    new ej.layouts.Splitter({
        paneSettings: [ { size: 'auto', resizable: false, cssClass:"chat-leftContent" }, { size: '80%', resizable: false, cssClass: "chat-rightContent" } ]
    }, '#splitter');

    var template = '<div ${if(category!==null)} class = "clearfix desc e-list-wrapper e-list-multi-line e-list-avatar" ${else} ' +
    'class = "clearfix e-list-wrapper e-list-multi-line e-list-avatar" ${/if}> ${if(imgSrc!=="")}' +
    '<img class="e-avatar" src="./src/chat-ui/images/${imgSrc}.png" alt="image" style="border-radius: 50%;"/> ' +
    '${/if} <span class="e-list-item-header">${title} </span>' +
    '${if(message!=="")} <div class="chat_message" style="font-size: 12px;">' +
    '${message} </div> ${/if} </div>';

    var templateObj = new ej.lists.ListView({
        dataSource:  window.integrationListTemplateData,
        template: template,
        headerTitle: 'Chats',
        cssClass: 'e-list-template',
        showHeader: true,
        actionComplete: () => {
            templateObj.selectItem(window.integrationListTemplateData[0]);
        },
        select: function(args) {
            chatMessages[chatUiInst.user.id] = chatUiInst.messages;
            chatUiInst.suggestions = [];
            setupChatUser(args.index);
            if(args.index >= 0) toggleListView();
        }

    });
    templateObj.appendTo('#listview_template');

    function setupChatUser(index) {
        const userSettings = [
            { headerText: 'Albert', headerIconCss: 'chat_user1_avatar', user: { id: 'user1', user: 'Albert', avatarUrl: './src/chat-ui/images/andrew.png' }, messages: chatMessages.user1 },
            { headerText: 'Decor bot', headerIconCss: 'chat_bot_avatar', user: { id: 'admin', user: 'Admin', avatarUrl: './src/chat-ui/images/bot.png' }, messages: chatMessages.admin , suggestions: window.chatSuggestions },
            { headerText: 'Charlie', headerIconCss: 'chat_user2_avatar', user: { id: 'user2', user: 'Charlie', avatarUrl: './src/chat-ui/images/charlie.png' }, messages: chatMessages.user2 },
            { headerText: 'Laura Callahan', headerIconCss: 'chat_user3_avatar', user: { id: 'user3', user: 'Laura', avatarUrl: './src/chat-ui/images/laura.png' }, messages: chatMessages.user3 },
            { headerText: 'New Dev Team', headerIconCss: 'chat_team_avatar', user: { id: 'team', user: 'Admin', avatarUrl: './src/chat-ui/images/calendar.png' }, messages: chatMessages.team },
            { headerText: 'Reena', headerIconCss: 'chat_user4_avatar', user: { id: 'user4', user: 'Albert' }, messages: chatMessages.user4 }
        ];
        Object.assign(chatUiInst, userSettings[index]);
        chatUiInst.dataBind();
    }

    function createButton(iconCss, elementId) {
        new ej.buttons.Button({ iconCss, cssClass: 'e-flat', iconPosition: 'Top' }).appendTo(elementId);
    }
    
    createButton('e-icons e-stamp', '#activitybtn');
    createButton('e-icons e-comment-show', '#chatbtn');
    createButton('e-icons e-month', '#calendarbtn');
    createButton('e-icons e-people', '#teamsbtn');

    function toggleListView() {
        const listPopup = document.getElementById('toggle-chat-list');
        if (window.innerWidth < 1200) listPopup.style.display = listPopup.style.display === 'none' || listPopup.style.display === '' ? 'block' : 'none';
    }
    
    // Attach event listeners to buttons or other UI elements to trigger toggling
    document.getElementById('chatbtn').addEventListener('click', toggleListView);

};