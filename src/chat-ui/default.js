this.default = function() {
    var chatUser1 = new ej.interactivechat.ChatUI({
        headerText: 'Albert',
        headerIconCss: "chat_user1_avatar",
        messages: window.chatMessagedata,
        user: { id: 'user2', user: 'Reena', avatarUrl: './src/chat-ui/images/reena.png' },
        userTyping: (args) => { handleUserTyping(args, chatUser2); },
        headerToolbar: {
            items: [
                { type: 'Input', template: '<button id="dduser1Menu" style="border: none; background: none !important;"></button>', align: 'Right' }
            ]
        },
        messageSend: (args) => {
            chatUser1.suggestions = [];
            chatUser2.messages = chatUser2.messages.concat([args.message]);
        }
    });
    chatUser1.appendTo('#chatUser1');

    var chatUser2 = new ej.interactivechat.ChatUI({
        headerText: 'Reena',
        headerIconCss: "chat_user2_avatar",
        messages: window.chatMessagedata,
        suggestions: window.defaultChatSuggestions,
        user: { id: 'user1', user: 'Albert', avatarUrl: './src/chat-ui/images/andrew.png' },
        headerToolbar: {
            items: [
                { type: 'Input', template: '<button id="dduser2Menu" style="border: none; background: none !important;"></button>', align: 'Right' }]
        },
        messageSend: (args) => {
            chatUser2.suggestions = [];
            chatUser1.messages = chatUser1.messages.concat([args.message]);
        },
        userTyping: (args) => { handleUserTyping(args, chatUser1); }
    });
    chatUser2.appendTo('#chatUser2');

    function handleUserTyping(args, otherChatUser) {
        if (!args.isTyping) {
            otherChatUser.typingUsers = otherChatUser.typingUsers.filter(userItem => userItem.user !== args.user.user);
        } else {
            if (!otherChatUser.typingUsers.some(userItem => userItem.user === args.user.user)) {
                otherChatUser.typingUsers = [...otherChatUser.typingUsers, args.user];
            }
        }
    }
    const dropdownConfig = (chatUser) => ({
        items: [
            { text: 'Mute', iconCss: 'e-icons e-eye-slash' },
            { separator: true },
            { text: 'Delete', iconCss: 'e-icons e-trash' }
        ],
        iconCss: 'e-icons e-more-horizontal-1',
        cssClass: 'e-caret-hide',
        select: (args) => {
            if (['Mute', 'Unmute'].includes(args.item.text)) {
                args.item.text = args.item.text === 'Mute' ? 'Unmute' : 'Mute';
            }
            if (args.item.text === 'Delete') {
                chatUser.messages = [];
            }
        }
    });

    new ej.splitbuttons.DropDownButton(dropdownConfig(chatUser1), '#dduser1Menu');
    new ej.splitbuttons.DropDownButton(dropdownConfig(chatUser2), '#dduser2Menu');

};