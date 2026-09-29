this.default = function () {
    var editor = new ej.richtexteditorui.RichTextEditorUI({
        placeholder: 'Compose your email...',
        slashCommandSettings: {
            enable: true
        },
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
                'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignment', '|',
                'FontName', 'FontSize', '|',
                'NumberFormatList', 'BulletFormatList', '|',
                'Table', 'Image', 'Link', '|',
                'Subscript', 'Superscript'
            ]
        }
    });

    editor.appendTo('#editor');

    var emailData = [
        { Name: 'Selma Rose', Eimg: '2', EmailId: 'selma@gmail.com' },
        { Name: 'Maria', Eimg: '1', EmailId: 'maria@gmail.com' },
        { Name: 'Russo Kay', Eimg: '8', EmailId: 'russo@gmail.com' },
        { Name: 'Robert', Eimg: 'dp', EmailId: 'robert@gmail.com' },
        { Name: 'Camden Kate', Eimg: '9', EmailId: 'camden@gmail.com' },
        { Name: 'Garth', Eimg: '7', EmailId: 'garth@gmail.com' },
        { Name: 'Andrew James', Eimg: 'pic04', EmailId: 'james@gmail.com' },
        { Name: 'Olivia', Eimg: '5', EmailId: 'olivia@gmail.com' },
        { Name: 'Sophia', Eimg: '6', EmailId: 'sophia@gmail.com' },
        { Name: 'Margaret', Eimg: '3', EmailId: 'margaret@gmail.com' },
        { Name: 'Ursula Ann', Eimg: 'dp', EmailId: 'ursula@gmail.com' },
        { Name: 'Laura Grace', Eimg: '4', EmailId: 'laura@gmail.com' },
        { Name: 'Albert', Eimg: 'pic03', EmailId: 'albert@gmail.com' },
        { Name: 'William', Eimg: '10', EmailId: 'william@gmail.com' }
    ];

    var itemTemplate =
        '<table class="mail-item"><tr>' +
        '<td><img class="mail-item-img" src="src/rich-text-editor-ui/images/${Eimg}.png" alt="${Name}" /></td>' +
        '<td><span class="mail-item-name">${Name}</span>' +
        '<span class="mail-item-email">${EmailId}</span></td>' +
        '</tr></table>';

    var valueTemplate =
        '<div class="mail-value">' +
        '<img class="mail-value-img" src="src/rich-text-editor-ui/images/${Eimg}.png" alt="${Name}" />' +
        '<span class="mail-value-name">${Name}</span>' +
        '</div>';

    var toRecipient = new ej.dropdowns.MultiSelect({
        dataSource: emailData,
        fields: {
            text: 'Name',
            value: 'EmailId'
        },
        mode: 'Box',
        allowFiltering: true,
        allowCustomValue: true,
        placeholder: 'Recipients',
        itemTemplate: itemTemplate,
        valueTemplate: valueTemplate
    });

    toRecipient.appendTo('#toRecipient');

    var ccRecipient = new ej.dropdowns.MultiSelect({
        dataSource: emailData,
        fields: {
            text: 'Name',
            value: 'EmailId'
        },
        mode: 'Box',
        allowFiltering: true,
        allowCustomValue: true,
        placeholder: 'Cc',
        itemTemplate: itemTemplate,
        valueTemplate: valueTemplate
    });

    ccRecipient.appendTo('#ccRecipient');

    var toast = new ej.notifications.Toast({
        position: {
            X: 'Right',
            Y: 'Top'
        },
        showProgressBar: false,
        newestOnTop: true,
        timeOut: 2500,
        showCloseButton: true
    });

    toast.appendTo('#mailToast');

    var showToast = function (title, message) {
        toast.show({
            title: title,
            content: message,
            cssClass: 'e-toast-success'
        });
    };

    var clearComposer = function () {
        toRecipient.value = [];
        toRecipient.dataBind();

        ccRecipient.value = [];
        ccRecipient.dataBind();

        var subjectInput = document.getElementById('subject');

        if (subjectInput) {
            subjectInput.value = '';
        }
    };

    var sendButton = document.getElementById('sendMail');

    if (sendButton) {
        sendButton.addEventListener('click', function () {
            clearComposer();
            editor.value = '';
            editor.refresh();
            showToast('Mail Composer', 'Mail sent successfully.');
        });
    }

    var discardButton = document.getElementById('discardMail');

    if (discardButton) {
        discardButton.addEventListener('click', function () {
            clearComposer();
            editor.value = '';
            editor.refresh();
            showToast('Mail Composer', 'Mail discarded. Composer cleared.');
        });
    }
};