ej.richtexteditorui.RichTextEditorUI.Inject(
    ej.richtexteditorui.SlashCommand
);

this.default = function () {
    var editor = new ej.richtexteditorui.RichTextEditorUI({
        toolbarSettings: {
            items: [
                'Bold', 'Italic', 'Underline', '|',
                'FontColor', 'BackgroundColor', '|',
                'FontName', 'FontSize', '|',
                'Table', 'Image', 'Link', '|',
                'Formats', 'Alignment',
                'NumberFormatList', 'BulletFormatList', '|',
                'Undo', 'Redo'
            ]
        },
        slashCommandSettings: {
            enable: true
        },
        created: create,
        destroyed: destroyed,
        focused: focus,
        blurred: blur,
        actionBegin: actionBegin,
        actionComplete: actionComplete,
        change: change,
        itemClick: itemClick,
        updatedToolbarStatus: updatedToolbarStatus,
        beforeDialogOpen: beforeDialogOpen,
        beforeDialogClose: beforeDialogClose,
        beforeFileUpload: beforeFileUpload
    });

    editor.appendTo('#defaultRTE');

    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');

    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };

    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;

        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }

    function create() {
        appendElement('Rich Text Editor UI <b>create</b> event called<hr>');
    }

    function destroyed() {
        appendElement('Rich Text Editor UI <b>destroyed</b> event called<hr>');
    }

    function focus() {
        appendElement('Rich Text Editor UI <b>focus</b> event called<hr>');
    }

    function blur() {
        appendElement('Rich Text Editor UI <b>blur</b> event called<hr>');
    }

    function actionBegin(args) {
        appendElement('<b>' + args.action + '</b> action is called<hr>');
    }

    function actionComplete(args) {
        appendElement('<b>' + args.action + '</b> action is completed<hr>');
    }

    function change() {
        appendElement('Rich Text Editor UI <b>change</b> event called<hr>');
    }

    function itemClick(args) {
        appendElement('Rich Text Editor UI <b>toolbar click</b> event called (itemId: ' + args.itemId + ')<hr>');
    }

    function updatedToolbarStatus() {
        appendElement('Rich Text Editor UI <b>updatedToolbarStatus</b> event called<hr>');
    }

    function beforeDialogOpen() {
        appendElement('Rich Text Editor UI <b>beforeDialogOpen</b> event called<hr>');
    }

    function beforeDialogClose() {
        appendElement('Rich Text Editor UI <b>beforeDialogClose</b> event called<hr>');
    }

    function beforeFileUpload() {
        appendElement('Rich Text Editor UI <b>beforeFileUpload</b> event called<hr>');
    }
};