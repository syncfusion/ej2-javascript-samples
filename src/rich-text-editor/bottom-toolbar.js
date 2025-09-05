/*jshint esversion: 6 */
this.default = function () {
    var currentUserModel = {
        id: 'user1',
        user: 'Albert',
    };
    var michaleUserModel = {
        id: 'user2',
        user: 'Michale Suyama',
        avatarUrl: '//ej2.syncfusion.com/demos/src/chat-ui/images/andrew.png'
    };
    var chatMessages = [
        {
            author: currentUserModel,
            text: 'Hi Michale, are we on track for the deadline?',
        },
        {
            author: michaleUserModel,
            text: 'Yes, the design phase is complete.',
        },
        {
            author: currentUserModel,
            text: 'I will review it and send feedback by today.',
        },
        {
            author: michaleUserModel,
            text: 'Okay.',
        }
    ];
    var chatRTE;
    var chatUI = new ej.interactivechat.ChatUI({
        headerText: 'Michale Suyama',
        headerIconCss: "chat_user2_avatar",
        messages: chatMessages,
        user: currentUserModel,
        showTimeBreak: true,
        loadOnDemand: true,
        messageToolbarSettings: {
            items: [
                { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
                { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
            ]
        },
        footerTemplate: footerTemplate,
        created: function () {
            chatRTE = new ej.richtexteditor.RichTextEditor({
                toolbarSettings: {
                    position: "Bottom",
                    items: [
                        'Bold', 'Italic', 'Underline', 'InlineCode', '|', 'FontColor', 'BackgroundColor', '|', 'Alignments', 'Blockquote', '|', 'Orderedlist', 'UnOrderedlist', '|', 'CreateLink', 'Image', 'CreateTable', 'EmojiPicker'
                    ]
                },
                placeholder: 'Type something...',
                created: function () {
                    chatRTE.focusIn();
                }
            });
            chatRTE.appendTo('#editor');
        }
    });
    chatUI.appendTo('#chatContainer');
    function isValidContent(html) {
        if (!html || html.trim().length === 0) return false;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        // Check for meaningful text
        var textContent = tempDiv.innerHTML
            .replace(/<br\s*\/?>/gi, '')
            .replace(/&nbsp;/gi, '')
            .replace(/<[^>]*>/g, '')
            .trim();
        if (textContent.length > 0) return true;
        // Check for media elements
        var mediaTags = ['img', 'table', 'audio', 'video', 'iframe'];
        for (var tag of mediaTags) {
            if (tempDiv.getElementsByTagName(tag).length > 0) return true;
        }
        return false;
    }
    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'sendMessage') {
            if (chatRTE && chatRTE.value) {
                if (isValidContent(chatRTE.value)) {
                    var value = chatRTE.value;
                    chatRTE.value = null;
                    chatRTE.dataBind();
                    chatUI.addMessage({
                        author: currentUserModel,
                        text: value
                    });
                    chatRTE.clearUndoRedo();
                    chatRTE.focusIn();
                }
            }
        } else if (event.target && event.target.id === 'cancelMessage') {
            chatRTE.value = null;
            chatRTE.dataBind();
            chatRTE.clearUndoRedo();
            chatRTE.focusIn();
        }
    });
    function footerTemplate() {
        return '<div class="custom-footer">' +
            '<div id="editor"></div>' +
            '<button id="sendMessage" class="e-btn e-primary e-icons e-send e-send-1 e-icon-btn e-small" style="float: right;margin: 4px;"></button>' +
            '<button id="cancelMessage" class="e-btn e-secondary e-icons e-trash e-delete-3 e-icon-btn e-small" style="float: right; margin: 4px;"></button>' +
            '</div>';
    }
};
