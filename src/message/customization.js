/**
 *  Sample for Message customization
 */
this.default = function () {
  var msgLeft = new ej.notifications.Message({
    content: "Your license has been activated successfully",
    severity: "Success"
  });
  msgLeft.appendTo('#msg_content_left');

  var msgCenter = new ej.notifications.Message({
    content: "The license will expire today",
    cssClass: "e-content-center",
    severity: 'Warning'
  });
  msgCenter.appendTo('#msg_content_center');

  var msgRight = new ej.notifications.Message({
    content: "The license key is invalid",
    cssClass: "e-content-right",
    severity: 'Error'
  });
  msgRight.appendTo('#msg_content_right');

  var msgIcon = new ej.notifications.Message({
    cssClass: "custom"
  });
  msgIcon.appendTo('#msg_icon');
};
