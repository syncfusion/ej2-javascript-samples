/**
 *  Sample for Default Message
 */
this.default = function () {
  var msgDefault = new ej.notifications.Message({
    content: "Editing is restricted"
  });
  msgDefault.appendTo('#msg_default');

  var msgInfo = new ej.notifications.Message({
    content: "Please read the comments carefully",
    severity: "Info"
  });
  msgInfo.appendTo('#msg_info');

  var msgSuccess = new ej.notifications.Message({
    content: "Your message has been sent successfully",
    severity: "Success"
  });
  msgSuccess.appendTo('#msg_success');

  var msgWarning = new ej.notifications.Message({
    content: "There was a problem with your network connection",
    severity: "Warning"
  });
  msgWarning.appendTo('#msg_warning');

  var msgError = new ej.notifications.Message({
    content: "A problem occurred while submitting your data",
    severity: "Error"
  });
  msgError.appendTo('#msg_error');
};
