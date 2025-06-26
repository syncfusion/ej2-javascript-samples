this.default = function() {

    var chatUiInst = new ej.interactivechat.ChatUI({
        messages: window.communityMessagedata,
        user: { user: 'Alice', id: 'admin' },
        headerIconCss: "chat_header_icon",
        headerText: 'Design Community',
        showTimeBreak: true,
        timeStampFormat: 'MM/dd hh:mm a',
        messageToolbarSettings: {
            items: [
                { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
                { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
                { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
                { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
                { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
            ],
            itemClicked: function (args) {
                if (args.item.prefixIcon === 'e-icons e-chat-forward') {
                    var newMessageObj = {
                        id: 'chat-message-' + (chatUiInst.messages.length + 1).toString(),
                        isForwarded: true,
                        isPinned: args.message.isPinned,
                        author: args.message.author,
                        text: args.message.text,
                        timeStamp: args.message.timeStamp,
                        timeStampFormat: args.message.timeStampFormat,
                        status: args.message.status,
                        replyTo: args.message.replyTo
                    };
                    chatUiInst.addMessage(newMessageObj);
                }
            }
        }
    });
    chatUiInst.appendTo('#chatui');

    const chatProperties = [
        { id: 'chatTimestamp', checked: true, property: 'showTimeStamp' },
        { id: 'chatTimebreak', checked: true, property: 'showTimeBreak' },
        { id: 'chatHeader', checked: true, property: 'showHeader' },
        { id: 'chatFooter', checked: true, property: 'showFooter' },
        { id: 'compactmode', checked: false, property: 'enableCompactMode' }
    ];
    
    chatProperties.forEach(toggle => {
        new ej.buttons.Switch({
            checked: toggle.checked,
            change: (args) => {
                chatUiInst[toggle.property] = args.checked;
            }
        }).appendTo(`#${toggle.id}`);
    });

    new ej.dropdowns.DropDownList({
        placeholder: 'Format',
        width: '180px',
        change: (args) => {
            chatUiInst.timeStampFormat = args.itemData.value;
        }
    }, '#chat_dateformats');

    new ej.dropdowns.MultiSelect({
        placeholder: 'Typing users...',
        select: (args) => {
            const user = { user: args.itemData.value, avatarBgColor: '#87cefa'};
            if (['Laura', 'Charlie'].includes(args.itemData.value)) {
                user.avatarBgColor = args.itemData.value === 'Charlie' ? '#e6cdde' : '#dec287';
                user.avatarUrl = `./src/chat-ui/images/${args.itemData.value.toLowerCase()}.png`;
            }
            chatUiInst.typingUsers = [...chatUiInst.typingUsers, user];
        },
        removed: (args) => {
            chatUiInst.typingUsers = chatUiInst.typingUsers.filter(user => user.user !== args.itemData.value);
        }
    }, '#chat_typingUsers');
};