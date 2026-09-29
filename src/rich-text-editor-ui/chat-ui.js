this.default = function () {
    var currentUserModel = {
        id: 'user1',
        user: 'Albert'
    };

    var michaleUserModel = {
        id: 'user2',
        user: 'Michale Suyama',
        avatarUrl: './src/rich-text-editor-ui/images/2.png'
    };

    var chatMessages = [
        {
            id: 'chat-message-1',
            author: currentUserModel,
            text: 'Hi Michale, are we on track for the deadline?'
        },
        {
            id: 'chat-message-2',
            author: michaleUserModel,
            text: 'Yes, the design phase is complete.'
        },
        {
            id: 'chat-message-3',
            author: currentUserModel,
            text: 'I will review it and send feedback by today.'
        },
        {
            id: 'chat-message-4',
            author: michaleUserModel,
            text: 'Okay.'
        }
    ];

    var chatUI;
    var chatRTE;
    var messageCount = chatMessages.length;
    var selectedReplyMessage = null;

    function footerTemplate() {
        return (
            '<div class="custom-footer">' +
            '<div id="editor"></div>' +
            '</div>'
        );
    }

    function onCreate() {

        var sendBtn = chatRTE.element.querySelector('#editor_toolbar_send_tbar');

        if (!sendBtn) {
            return;
        }

        sendBtn.onclick = function () {

            var html = chatRTE.getHtml();
            var plainText = html.replace(/<[^>]*>/g, '').trim();

            if (!plainText) {
                return;
            }

            var message = {
                id: 'chat-message-' + (++messageCount),
                author: currentUserModel,
                text: html
            };

            if (selectedReplyMessage) {
                message.replyTo = {
                    user: selectedReplyMessage.author,
                    text: selectedReplyMessage.text,
                    messageID: selectedReplyMessage.id
                };
            }

            chatUI.addMessage(message);

            var replyPreview =
                chatUI.element.querySelector('.e-footer .e-reply-wrapper');

            if (replyPreview) {
                replyPreview.remove();
            }

            selectedReplyMessage = null;

            chatRTE.value = '';
            chatRTE.dataBind();
            chatRTE.focus();
        };
    }

    chatUI = new ej.interactivechat.ChatUI({
        headerText: 'Michale Suyama',
        headerIconCss: 'chat_user2_avatar',
        messages: chatMessages,
        user: currentUserModel,
        showTimeBreak: true,
        loadOnDemand: true,
        footerTemplate: footerTemplate,

        messageToolbarSettings: {
            itemClicked: function (args) {

                var item = args.item.properties || args.item;

                if (item.tooltipText === 'Reply') {
                    selectedReplyMessage =
                        args.message.properties || args.message;
                }
            }
        },

        created: function () {

            chatRTE = new ej.richtexteditorui.RichTextEditorUI({
                placeholder: 'Type a message...',
                valueFormat: 'html',

                slashCommandSettings: {
                    enable: true
                },

                toolbarSettings: {
                    position: 'Bottom',
                    items: [
                        'Bold',
                        'Italic',
                        'Underline',
                        '|',
                        'FontColor',
                        'BackgroundColor',
                        '|',
                        'BulletFormatList',
                        'NumberFormatList',
                        '|',
                        'Link',
                        'Image',
                        '|',
                        {
                            align: 'Right',
                            id: 'send_tbar',
                            tooltipText: 'Send Message',
                            actionId: 'sendMessage',
                            prefixIcon: 'e-icons e-send'
                        }
                    ]
                },

                created: onCreate
            });

            chatRTE.appendTo('#editor');
        }
    });

    chatUI.appendTo('#chatContainer');
};