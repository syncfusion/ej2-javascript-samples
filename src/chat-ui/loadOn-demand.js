this.default = function () {
    var currentUserModel = {
        id: "user1",
        user: "Albert"
    };

    var michaleUserModel = {
        id: "user2",
        user: "Michale Suyama",
        avatarUrl: './src/chat-ui/images/andrew.png'
    };

    var chatMessages = [];
    var baseDate = new Date();
    baseDate.setDate(baseDate.getDate() - 3);
    var dayIncrement = 24 * 60 * 60 * 1000;
    var authorNames = ["Albert", "Michale"];

    for (var i = 1; i <= 200; i++) {
        if (i % 50 === 1 && i !== 1) {
            // Increment the day only every 50 messages except the very first one
            baseDate = new Date(baseDate.getTime() + dayIncrement);
        }
        var authorIndex = i % 2;

        chatMessages.push({
            text: 'Message ' + i + ' from ' + authorNames[authorIndex],
            author: authorIndex === 0 ? currentUserModel : michaleUserModel,
            timeStamp: new Date((baseDate.getTime() - ((200 * 60 * 1000)) + ((60 * 1000) * i)))
        });
    }

    // Initializes the Chat UI control
    var chatUI = new ej.interactivechat.ChatUI({
        headerText: 'Michale Suyama',
        headerIconCss: "chat_user2_avatar",
        messages: chatMessages,
        user: currentUserModel,
        showTimeBreak: true,
        loadOnDemand: true
    });
    // Render initialized Chat UI.
    chatUI.appendTo('#loadOnDemand');
};