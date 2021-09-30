this.default = function () {
  var reminderInterval;
  var data = new ej.base.extend([], window.getReminderEvents(), null, true);

  var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    timezone: 'UTC',
    eventSettings: { dataSource: data },
    created: function () {
      reminderInterval = setInterval(refreshEventReminder, 5000);
    },
    destroyed: function () {
      if (reminderInterval) {
        clearInterval(reminderInterval);
      }
    }
  });
  scheduleObj.appendTo('#Schedule');

  var toastObjReminder = new ej.notifications.Toast({
    cssClass: 'e-schedule-reminder e-toast-info',
    position: { X: 'Right', Y: 'Top' },
    newestOnTop: true,
    showCloseButton: true,
    timeOut: 0,
    target: '.e-schedule',
    animation: {
      hide: { effect: 'SlideRightOut' },
      show: { effect: 'SlideRightIn' }
    }
  });
  toastObjReminder.appendTo('#schedule-reminder');

  function refreshEventReminder() {
    var eventCollection = scheduleObj.getCurrentViewEvents();
    eventCollection.forEach(function (event, i) {
      var dateFormat = function (date) { return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()); };
      var startTime = dateFormat(event[scheduleObj.eventFields.startTime]);
      var currentTime = dateFormat(new Date(new Date().toUTCString().slice(0, -3)));
      var difference = startTime.getTime() - currentTime.getTime();
      if (startTime.getTime() >= currentTime.getTime() && difference > -1 && difference <= 5000) {
        toastObjReminder.show({
          template: (ej.base.compile(document.getElementById('reminder-template').innerHTML.trim())(event)[0]).outerHTML
        });
      }
    });
  }
};
