/**
 *  Sample for Message with icon
 */
this.default = function () {
  var showButton = new ej.buttons.Button({ content: 'Show Default Message', cssClass: "e-outline e-primary msg-hidden" });
  showButton.appendTo('#btn1');
  showButton.element.onclick = function () {
    show(msgDefaultIcon, showButton);
  };

  var infoButton = new ej.buttons.Button({ content: 'Show Info Message', cssClass: "e-outline e-primary e-info msg-hidden" });
  infoButton.appendTo('#btn2');
  infoButton.element.onclick = function () {
    show(msgInfoIcon, infoButton);
  };

  var successButton = new ej.buttons.Button({ content: 'Show Success Message', cssClass: "e-outline e-primary e-success msg-hidden" });
  successButton.appendTo('#btn3');
  successButton.element.onclick = function () {
    show(msgSuccessIcon, successButton);
  };

  var warningButton = new ej.buttons.Button({ content: 'Show Warning Message', cssClass: "e-outline e-primary e-warning msg-hidden" });
  warningButton.appendTo('#btn4');
  warningButton.element.onclick = function () {
    show(msgWarningIcon, warningButton);
  };

  var errorButton = new ej.buttons.Button({ content: 'Show Error Message', cssClass: "e-outline e-primary e-danger msg-hidden" });
  errorButton.appendTo('#btn5');
  errorButton.element.onclick = function () {
    show(msgErrorIcon, errorButton);
  };

  var msgDefaultIcon = new ej.notifications.Message({
    content: "Editing is restricted",
    showCloseIcon: true,
    closed: function () {
      showButton.element.classList.remove('msg-hidden');
    }
  });
  msgDefaultIcon.appendTo('#msg_default_icon');

  var msgInfoIcon = new ej.notifications.Message({
    content: "Please read the comments carefully",
    severity: "Info",
    showCloseIcon: true,
    closed: function () {
      infoButton.element.classList.remove('msg-hidden');
    }
  });
  msgInfoIcon.appendTo('#msg_info_icon');

  var msgSuccessIcon = new ej.notifications.Message({
    content: "Your message has been sent successfully",
    severity: "Success",
    showCloseIcon: true,
    closed: function () {
      successButton.element.classList.remove('msg-hidden');
    }
  });
  msgSuccessIcon.appendTo('#msg_success_icon');

  var msgWarningIcon = new ej.notifications.Message({
    content: "There was a problem with your network connection",
    severity: "Warning",
    showCloseIcon: true,
    closed: function () {
      warningButton.element.classList.remove('msg-hidden');
    }
  });
  msgWarningIcon.appendTo('#msg_warning_icon');

  var msgErrorIcon = new ej.notifications.Message({
    content: "A problem occurred while submitting your data",
    severity: "Error",
    showCloseIcon: true,
    closed: function () {
      errorButton.element.classList.remove('msg-hidden');
    }
  });
  msgErrorIcon.appendTo('#msg_error_icon');

  var severityCheckbox = new ej.buttons.CheckBox({
    label: 'Severity Icon',
    name: 'icons',
    value: 'severity-icon',
    checked: true,
    change: function (args) {
      changeProp("showIcon", args.checked);
    }
  });
  severityCheckbox.appendTo('#showIcon');

  var CloseCheckbox = new ej.buttons.CheckBox({
    label: 'Close Icon',
    name: 'icons',
    value: "close-icon",
    checked: true,
    change: function (args) {
      changeProp("showCloseIcon", args.checked);
    }
  });
  CloseCheckbox.appendTo('#showCloseIcon');

  function show(message, btn) {
    message.visible = true;
    btn.element.classList.add('msg-hidden');
  }

  function changeProp(prop, value) {
    var msgTypes = ["default", "info", "success", "warning", "error"];
    for (var i = 0; i <= 4; i++) {
      var msgObj = ej.base.getComponent(document.getElementById("msg_" + msgTypes[i] + "_icon"), "message");
      if (msgObj) {
        if (value) {
          msgObj[prop] = true;
        }
        else {
          msgObj[prop] = false;
        }
      }
    }
  }
};
