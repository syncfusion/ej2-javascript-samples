this.default = function () {

    var userAvatar = 'src/rich-text-editor-ui/images/1.png';
    var userName = 'Selma Rose';

    var editor = new ej.richtexteditorui.RichTextEditorUI({
        placeholder: 'Write your comment...',
        toolbarSettings: {
            items: [
                'Bold', 'Italic', 'Underline', '|',
                'Formats', 'BulletFormatList', 'NumberFormatList', '|',
                'Link', 'Undo', 'Redo'
            ]
        }
    });

    editor.appendTo('#editor');

    var comments = [
        {
            id: 1,
            author: 'Jane Smith',
            avatar: 'src/rich-text-editor-ui/images/2.png',
            content: 'Has anyone tried the new <b>rich text editor</b>? I love how clean the toolbar looks now.',
            date: 'Sep 3, 2026',
            time: '02:10 PM'
        },
        {
            id: 2,
            author: 'Mark Johnson',
            avatar: 'src/rich-text-editor-ui/images/3.png',
            content: 'I am also enjoying the updated UI. The <i>inline editing</i> experience feels really smooth!',
            date: 'Sep 3, 2026',
            time: '10:24 AM'
        }
    ];

    var listView = new ej.lists.ListView({
        dataSource: comments,
        template: function (data) {
            return '<div class="comment-item">' +
                '<img class="comment-avatar" src="' + data.avatar + '" alt="' + data.author + '">' +
                '<div class="comment-body">' +
                '<div class="comment-actions">' +
                '<button class="e-btn e-icons e-copy e-icon-btn e-flat e-small action-btn copy-btn" title="Copy"></button>' +
                '<button class="e-btn e-icons e-trash e-icon-btn e-flat e-small action-btn delete-btn" title="Delete"></button>' +
                '</div>' +
                '<div class="comment-header">' +
                '<span class="comment-author">' + data.author + '</span>' +
                '<span class="comment-time">commented on ' + data.date + ' at ' + data.time + '</span>' +
                '</div>' +
                '<div class="comment-text">' + data.content + '</div>' +
                '</div>' +
                '</div>';
        }
    });

    listView.appendTo('#commentsList');

    var clearEditor = function () {
        editor.value = '';
        editor.refresh();
    };

    document.getElementById('updateBtn').addEventListener('click', function () {
        var content = editor.getHtml();

        if (!content || !content.replace(/<[^>]*>/g, '').trim()) {
            return;
        }

        var now = new Date();

        comments = [{
            id: now.getTime(),
            author: userName,
            avatar: userAvatar,
            content: content,
            date: now.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            time: now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            })
        }].concat(comments);

        listView.dataSource = comments;
        clearEditor();
    });

    document.getElementById('discardBtn').addEventListener('click', function () {
        clearEditor();
    });

    document.getElementById('commentsList').addEventListener('click', function (e) {

        var target = e.target.closest('.action-btn');

        if (!target) {
            return;
        }

        var item = target.closest('.e-list-item');
        var id = Number(item.getAttribute('data-uid'));

        var comment = comments.find(function (c) {
            return c.id === id;
        });

        if (!comment) {
            return;
        }

        if (target.classList.contains('copy-btn')) {
            navigator.clipboard.writeText(
                comment.content.replace(/<[^>]*>/g, '')
            );
        } else if (target.classList.contains('delete-btn')) {

            comments = comments.filter(function (c) {
                return c.id !== id;
            });

            listView.dataSource = comments;
        }
    });
};

