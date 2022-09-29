/**
 *  Sample for Message with variants
 */
this.default = function () {
  var msgDefault = new ej.notifications.Message({});
  msgDefault.appendTo('#msg_default');

  var msgInfo = new ej.notifications.Message({
    severity: "Info"
  });
  msgInfo.appendTo('#msg_info');

  var msgSuccess = new ej.notifications.Message({
    severity: "Success"
  });
  msgSuccess.appendTo('#msg_success');

  var msgWarning = new ej.notifications.Message({
    severity: "Warning"
  });
  msgWarning.appendTo('#msg_warning');

  var msgError = new ej.notifications.Message({
    severity: "Error"
  });
  msgError.appendTo('#msg_error');

  var msgDefaultOutlined = new ej.notifications.Message({
    variant: "Outlined"
  });
  msgDefaultOutlined.appendTo('#msg_default_outlined');

  var msgInfoOutlined = new ej.notifications.Message({
    severity: "Info",
    variant: "Outlined"
  });
  msgInfoOutlined.appendTo('#msg_info_outlined');

  var msgSuccessOutlined = new ej.notifications.Message({
    severity: "Success",
    variant: "Outlined"
  });
  msgSuccessOutlined.appendTo('#msg_success_outlined');

  var msgWarningOutlined = new ej.notifications.Message({
    severity: "Warning",
    variant: "Outlined"
  });
  msgWarningOutlined.appendTo('#msg_warning_outlined');

  var msgErrorOutlined = new ej.notifications.Message({
    severity: "Error",
    variant: "Outlined"
  });
  msgErrorOutlined.appendTo('#msg_error_outlined');

  var msgDefaultFilled = new ej.notifications.Message({
    variant: "Filled"
  });
  msgDefaultFilled.appendTo('#msg_default_filled');

  var msgInfoFilled = new ej.notifications.Message({
    severity: "Info",
    variant: "Filled"
  });
  msgInfoFilled.appendTo('#msg_info_filled');

  var msgSuccessFilled = new ej.notifications.Message({
    severity: "Success",
    variant: "Filled"
  });
  msgSuccessFilled.appendTo('#msg_success_filled');

  var msgWarningFilled = new ej.notifications.Message({
    severity: "Warning",
    variant: "Filled"
  });
  msgWarningFilled.appendTo('#msg_warning_filled');

  var msgErrorFilled = new ej.notifications.Message({
    severity: "Error",
    variant: "Filled"
  });
  msgErrorFilled.appendTo('#msg_error_filled');
};
