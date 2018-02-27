
    this.default = function () {
        var sendButton = new ej.buttons.Button({});
        var iconTemp = '<button id="sendButton" class="e-control e-btn e-primary" data-ripple="true">' + 'Send</button>';
        var headerImg = '<img class="img2" src="src/dialog/images/1.png" alt="header image">';
		var message = 'Greetings Nancy! When will you share me the source files of the project';
        
        var dialogObj = new ej.popups.Dialog({
            footerTemplate: ' <input id="inVal" class="e-input" type="text" placeholder="Enter your message here!"/>' + iconTemp,
            header: headerImg + '<div title="Nancy" class="e-icon-settings e-icons" style="padding: 3px;"> Nancy </div>',
           	content: '<div class="dialogContent"><span class="dialogText">' + message + '</span></div>',
            showCloseIcon: true,
            target: document.getElementById('target'),
            width: '55%',
            open: dialogOpen,
            close: dialogClose,
            height: '86%',
        });
        dialogObj.appendTo('#template'); 
        sendButton.appendTo('#sendButton');

        document.getElementById('targetButton').onclick = function() {
            dialogObj.show();
        };
        (document.getElementById('sendButton')).onkeydown = function(e)  {
            if (e.keyCode === 13) { updateTextValue(); }
        };
        (document.getElementById('inVal')).onkeydown = function(e)  {
            if (e.keyCode === 13) { updateTextValue(); }
        };
        document.getElementById('sendButton').onclick = function(e)  {
            updateTextValue();
        };
        function updateTextValue ()  {
            var enteredVal = document.getElementById('inVal');
            var dialogTextElement = document.getElementsByClassName('dialogText')[0];
            var dialogTextWrap  = document.getElementsByClassName('dialogContent')[0];
            dialogTextElement.innerHTML = enteredVal.value;
            enteredVal.value = '';
        }
        function dialogClose() {
            document.getElementById('targetButton').style.display = 'block';
        }
        function dialogOpen() {
            document.getElementById('targetButton').style.display = 'none';
        }
    };