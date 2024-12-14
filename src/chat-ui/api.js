this.default = function() {

    var chatUiInst = new ej.interactivechat.ChatUI({
        messages: window.communityMessagedata,
        user: { user: 'Alice', id: 'admin' },
        headerIconCss: "chat_header_icon",
        headerText: 'Design Community',
        showTimeBreak: true,
        timeStampFormat: 'MM/dd hh:mm a'
    });
    chatUiInst.appendTo('#chatui');

    const chatProperties = [
        { id: 'chatTimestamp', checked: true, property: 'showTimeStamp' },
        { id: 'chatTimebreak', checked: true, property: 'showTimeBreak' },
        { id: 'chatHeader', checked: true, property: 'showHeader' },
        { id: 'chatFooter', checked: true, property: 'showFooter' }
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
            const user = { user: args.itemData.value, avatarBgColor: '#bacbe4'};
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