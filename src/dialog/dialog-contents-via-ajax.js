this.default = function () {
	var lessContent = 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform.' +
					   'Much like its counter part, the Spring Creators Update, the release is set to deliver more features to Windows 10' + 
					   'for both developers and users with particular emphasis this time around on app modernization, mixed reality' +
					   'and game development and software updates. App modernization is the term Microsoft used in its press event.' +
					   'Features that will affect most Windows 10 users and developers.';
    // Rendering Dialog on AJAX success
        var dialogObj = new ej.popups.Dialog({
            header: '<img class="img1" src="src/dialog/images/2.png" alt="Microsoft roadmap">What’s Coming from Microsoft this Fall',
            showCloseIcon: true,
            width: '500px',
            target: document.getElementById('target'),
            animationSettings: { effect: 'None' },
            open: dialogOpen,
            close: dialogClose,
            content: lessContent,
            buttons: [{
                click: dlgButtonClick,
                buttonModel: { content: 'More Details', isPrimary: true }
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
            var fetchApi = new ej.base.Fetch('./src/dialog/blog.html', 'GET');
            fetchApi.send().then();
             // Rendering Dialog on AJAX success
            fetchApi.onSuccess = function(data) {
               dialogObj.setProperties ({content: data});
            };
            dialogObj.buttons = [{click: dlgButtonClick, buttonModel: { content: 'Less Details', isPrimary: true }}];
            } else {
                dialogObj.content = lessContent;
                dialogObj.buttons = [{click: dlgButtonClick, buttonModel: { content: 'More Details', isPrimary: true }}];
            }
        }

        function dialogClose() {
            document.getElementById('dialogBtn').style.display = 'block';
        }
        function dialogOpen() {
            document.getElementById('dialogBtn').style.display = 'none';
        }
};