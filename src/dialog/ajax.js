this.default = function () {
    // Request to load AJAX content
    var ajax = new ej.base.Ajax('./src/dialog/twitter.html', 'GET', true);
    ajax.send().then();
    // Rendering Dialog on AJAX success
    ajax.onSuccess = function (data) {
        var dialogObj = new ej.popups.Dialog({
            header: 'Twitter',
            showCloseIcon: true,
            width: '500px',
            target: document.getElementById('target'),
            animationSettings: { effect: 'None' },
            open: dialogOpen,
            close: dialogClose,
            content: data
        });
        dialogObj.appendTo('#dialog');
        document.getElementById('dialogBtn').focus();
        var button = new ej.buttons.Button({});
        button.appendTo('#dialogBtn');
        document.getElementById('dialogBtn').onclick = function () {
            dialogObj.show();
        };
        function dialogClose() {
            document.getElementById('dialogBtn').style.display = 'block';
        }
        function dialogOpen() {
            document.getElementById('dialogBtn').style.display = 'none';
        }
    };
};