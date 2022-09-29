/**
 *  Sample for Message template
 */
this.default = function () {
  var showButton = new ej.buttons.Button({ content: 'Show pull request', cssClass: "e-outline e-primary e-success msg-hidden" });
  showButton.appendTo('#btn');
  showButton.element.onclick = function () {
    msgTemplate.visible = true;
    showButton.element.classList.add('msg-hidden');
  };

  var msgTemplate = new ej.notifications.Message({
    severity: "Success",
    closed: function () {
      showButton.element.classList.remove('msg-hidden');
    }
  });
  msgTemplate.appendTo('#msg_template');

  var button = new ej.buttons.Button({ cssClass: 'e-link', content: 'Dismiss' });
  button.appendTo('#closeBtn');
  button.element.onclick = function () {
    msgTemplate.visible = false;
  };

  var commitButton = new ej.buttons.Button({ cssClass: 'e-link', content: 'View commit' });
  commitButton.appendTo('#commitBtn');
};
