this.default = function () {
    var content1 =  'In the Succinctly series, Syncfusion created a robust free library of more than 130 technical e-books formatted';
    var content2 =	'for PDF, Kindle, and EPUB.The Succinctly series was born in 2012 out of a desire to provide concise technical';
    var content3 =	'e-books for software developers. Each title in the Succinctly series is written by a carefully';
    var content4 =	'chosen expert and provides essential content';
	var dlgContent = content1 + content2 + content3 + content4;
     var dlgObj = new ej.popups.Dialog({
        header: 'About SYNCFUSION Succinctly Series',
        content: dlgContent,
        target: document.getElementById('target'),
        showCloseIcon: true,
        buttons: [
            {
                click: dlgButtonClick,
                buttonModel: { content: 'LEARN ABOUT SYNCFUSION, INC.'}
            }],
        width: '50%',
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
