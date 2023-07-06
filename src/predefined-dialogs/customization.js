this.default = function () {
    var dialogObj;
    var alertBtn = new ej.buttons.Button({cssClass: 'e-danger'});
    alertBtn.appendTo('#alertBtn');
    document.getElementById('alertBtn').onclick = function () {
        document.getElementById("status").style.display="none";
        dialogObj = ej.popups.DialogUtility.alert({
            title: '',
            content: '<div class="new" style="display: flex;flex-direction: column;align-items: center;"><p><span class="circle-border"><span class="e-icons e-check" style="font-size: 30px; color: green; font-weight: 700;"></span></span></p><p><b style="font-size:25px; font-weight: 500 !important;">Good job!</b></p><p>You clicked the button!</p></div>',
            okButton: { text: 'OK',click:alertOkAction.bind(this)},
            position: { X: 'center', Y: 'center' },
            width:'240px',
            closeOnEscape: true
        });
    };
    function alertOkAction() {
        dialogObj.hide();
        document.getElementById("status").innerHTML = "The user closed the Alert dialog.";
        document.getElementById("status").style.display="block";
    }
    var confirmBtn = new ej.buttons.Button({cssClass: 'e-success'});
    confirmBtn.appendTo('#confirmBtn');
        document.getElementById('confirmBtn').onclick = function () {
            document.getElementById("status").style.display="none";
            dialogObj = ej.popups.DialogUtility.confirm({
                title: ' Delete file',
                content: '<p ><span class= "e-icons e-changes-reject" style="float: left;padding-right: 10px;font-size: 25px;display: inline;"></span>Are you sure you want to permanently delete this file?</p><p class="fileEdit"><span class= "e-icons e-image" style="font-size: 50px;"></span><span>failed personas.png<br/>Item type:PNG File<br/>Dimenstion: 1384 * 782<br/>Size:374 KB<br/>Original Location: C:/Users/Images</span></p>',
                okButton: { text: 'YES',click:confirmOkAction.bind(this)},
                cancelButton: { text: 'No',click:confirmCancelAction.bind(this)},
                position: { X: 'center', Y: 'center' },
                width:'420px',
                closeOnEscape: true
            });
        };
        var confirmOkAction = function () {
             dialogObj.hide();
             document.getElementById("status").innerHTML = " The user confirmed the dialog box";
             document.getElementById("status").style.display="block";
        };
        var confirmCancelAction = function () {
             dialogObj.hide();
             document.getElementById("status").innerHTML = "The user canceled the dialog box.";
             document.getElementById("status").style.display="block";
        };

        var promptBtn = new ej.buttons.Button({isPrimary: true});
        promptBtn.appendTo('#promptBtn');
        document.getElementById('promptBtn').onclick = function () {
            document.getElementById("status").style.display="none";
            dialogObj = ej.popups.DialogUtility.confirm({
                title: 'Join Wi-Fi network',
                content: '<table class="Table"><tbody><tr><td>SSID: <b>AndroidAP</b></td></tr><tr> <td>Password:</td> </tr> <tr> <td> <span class="e-input-group"> <input type="password" id="password" name="Required" class="e-input"> </span> </td> </tr> </tbody> </table> ',
                okButton: { text: 'OK',click:promptOkAction.bind(this)},
                cancelButton: { click:promptCancelAction.bind(this)},
                position: { X: 'center', Y: 'center' },
                width: '240px',
                closeOnEscape: true
            });
        };
        function promptOkAction() {
            var value;
            value = document.getElementById("password").value;
            if (value == "") {
                dialogObj.hide();
                document.getElementById("status").innerHTML = "The user's input is returned as\" \" ";
                document.getElementById("status").style.display="block";
            }
            else {
                dialogObj.hide();
                document.getElementById("status").innerHTML = "The user's input is returned as" + " " + value;
                document.getElementById("status").style.display="block";
            }
        }
        function promptCancelAction() {
            dialogObj.hide();
            document.getElementById("status").innerHTML = "The user canceled the dialog box.";
            document.getElementById("status").style.display="block";
        }


};
