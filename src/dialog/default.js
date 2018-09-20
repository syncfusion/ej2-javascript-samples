this.default = function () {
	var dlgContent = 'In the Succinctly series, Syncfusion created a robust free library of more than 130 technical e-books formatted' +
					 'for PDF, Kindle, and EPUB. The Succinctly series was born in 2012 out of a desire to provide concise technical' + 
					 'e-books for software developers.  Each title in the Succinctly series is written by a carefully' + 
					 'chosen expert and provides essential content';
     var dlgObj = new ej.popups.Dialog({
        header: 'About SYNCFUSION Succinctly Series',
        content: dlgContent,
        target: document.getElementById('target'),
        showCloseIcon: true,
        buttons: [
            {
                click: dlgButtonClick,
                buttonModel: { content: 'Learn More', isPrimary: true }
            }],
        width: '500px',
        open: dialogOpen,
        close: dialogClose,
        animationSettings: { effect: 'none' }
    });
    dlgObj.appendTo('#dialog');
    document.getElementById('dialogButton').focus();
    var button = new ej.buttons.Button({});
    button.appendTo('#dialogButton');
    document.getElementById('dialogButton').onclick = function () {
        dlgObj.show();
    };
    function dlgButtonClick() {
        window.open('https://www.syncfusion.com/company/about-us');
    }
    function dialogClose() {
        document.getElementById('dialogButton').style.display = 'block';
    }
    function dialogOpen() {
        document.getElementById('dialogButton').style.display = 'none';
    }
};
