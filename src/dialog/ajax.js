this.default = function () {
	var lessContent1 = 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform.Much like its';
	var lessContent2 = 'counterpart, the Spring Creators Update, the release is set to deliver more features to Windows 10';
	var lessContent3 = 'forboth developers and users with particular emphasis this time around on app modernization, mixed reality';
    var lessContent4 = 'and gamedevelopment and software updates. App modernization is the term Microsoft used in its press event.';
	var lessContent5 = 'features that hat will affect most Windows 10 users and developers.';
	var lessContent = lessContent1 + lessContent2 +lessContent3 +lessContent4 + lessContent5;
    // Rendering Dialog on AJAX success
        var dialogObj = new ej.popups.Dialog({
            header: '<img class="img1" src="src/dialog/images/2.png">What’s Coming from Microsoft this Fall',
            showCloseIcon: true,
            width: '500px',
            target: document.getElementById('target'),
            animationSettings: { effect: 'None' },
            open: dialogOpen,
            close: dialogClose,
            content: lessContent,
            buttons: [{
                click: dlgButtonClick,
                buttonModel: { content: 'More Details' }
            }]
        });
        dialogObj.appendTo('#dialog');
        document.getElementById('dialogBtn').focus();
        var button = new ej.buttons.Button({});
        button.appendTo('#dialogBtn');
        document.getElementById('dialogBtn').onclick = function () {
            dialogObj.show();
        };

        function dlgButtonClick() {
            if (this.btnObj[0].properties.content === 'More Details') {
            // Request to load AJAX content
            var ajax = new ej.base.Ajax('./src/dialog/blog.html', 'GET', true);
            ajax.send().then();
             // Rendering Dialog on AJAX success
            ajax.onSuccess = function(data) {
               dialogObj.setProperties ({content: data});
            };
            dialogObj.buttons = [{click: dlgButtonClick, buttonModel: { content: 'Less Details' }}];
            dialogObj.height = '250px';
            } else {
                dialogObj.content = lessContent;
                dialogObj.buttons = [{click: dlgButtonClick, buttonModel: { content: 'More Details' }}];
            }
        }

        function dialogClose() {
            document.getElementById('dialogBtn').style.display = 'block';
        }
        function dialogOpen() {
            document.getElementById('dialogBtn').style.display = 'none';
        }
};