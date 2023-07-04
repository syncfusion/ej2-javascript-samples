this.default = function () {
    var dialogObj;
    var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
    alertBtn.appendTo('#alertBtn');
    document.getElementById('alertBtn').onclick = function () {
        document.getElementById("statusText").style.display="none";
        dialogObj = ej.popups.DialogUtility.alert({
            title: 'Low Battery',
            content: '10% of battery remaining',
            okButton: { click:alertBtnClick.bind(this)},
            position: { X: 'center', Y: 'center' },
            closeOnEscape: true
        });
    };
    function alertBtnClick() {
        dialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user closed the Alert dialog.";
        document.getElementById("statusText").style.display="block";
    }
    var confirmBtn = new ej.buttons.Button({cssClass: 'e-success'});
        confirmBtn.appendTo('#confirmBtn');
        document.getElementById('confirmBtn').onclick = function () {
            document.getElementById("statusText").style.display="none";
            dialogObj = ej.popups.DialogUtility.confirm({
                title: ' Delete Multiple Items',
                content: "Are you sure you want to permanently delete these items?",
                okButton: { click:confirmOkAction.bind(this)},
                cancelButton: { click:confirmCancelAction.bind(this)},
                position: { X: 'center', Y: 'center' },
                closeOnEscape: true
            });
        };
        var confirmOkAction = function () {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = " The user confirmed the dialog box";
            document.getElementById("statusText").style.display="block";
        };
        var confirmCancelAction = function () {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "The user canceled the dialog box.";
            document.getElementById("statusText").style.display="block";
        };
        var promptBtn = new ej.buttons.Button({isPrimary: true});
        promptBtn.appendTo('#promptBtn');
        document.getElementById('promptBtn').onclick = function () {
            document.getElementById("statusText").style.display="none";
            dialogObj = ej.popups.DialogUtility.confirm({
                title: 'Join Chat Group',
                content: '<p>Enter your name:</p> <input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
                okButton: { click:promptOkAction.bind(this)},
                cancelButton: { click:promptCancelAction.bind(this)},
                position: { X: 'center', Y: 'center' },
                closeOnEscape: true
        });
        };
        function promptOkAction() {
            var value;
            value = document.getElementById("inputEle").value;
            if (value == "") {
                dialogObj.hide();
                document.getElementById("statusText").innerHTML = "The user's input is returned as\" \" ";
                document.getElementById("statusText").style.display="block";
            }
            else {
                dialogObj.hide();
                document.getElementById("statusText").innerHTML = "The user's input is returned as" + " " + value;
                document.getElementById("statusText").style.display="block";
            }
        }
        function promptCancelAction() {
            dialogObj.hide();
            document.getElementById("statusText").innerHTML = "The user canceled the prompt dialog";
            document.getElementById("statusText").style.display="block";
        }
};
