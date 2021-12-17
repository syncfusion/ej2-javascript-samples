this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data },
        created: OnCreate,
        actionBegin: OnActionBegin,
        actionComplete: OnActionComplete,
        actionFailure: OnActionFailure,
        cellClick: OnCellClick,
        cellDoubleClick: OnCellDoubleClick,
        destroyed: OnDestroyed,
        navigating: OnNavigating,
        eventClick: OnEventClick,
        popupOpen: OnPopupOpen,
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');
    var btn = new ej.buttons.Button();
    btn.appendTo('#clear');
    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };

    function OnCreate() {
        appendElement('Schedule <b>load</b> event is triggered<hr>');
    }
    function OnActionBegin() {
        appendElement('Schedule <b>Action Begin</b> event is triggered<hr>');
    }
    function OnActionComplete() {
        appendElement('Schedule <b>Action Complete</b> event is triggered<hr>');
    }
    function OnActionFailure() {
        appendElement('Schedule <b>Action Failure</b> event is triggered<hr>');
    }
    function OnCellDoubleClick() {
        appendElement('SChedule <b>Cell Double Click</b> event is triggered<hr>');
    }
    function OnCellClick() {
        appendElement('Schedule <b>Cell Click</b> event is triggered<hr>');
    }
    function OnNavigating() {
        appendElement('Schedule <b>Navigating</b> event is triggered<hr>');
    }
    function OnDestroyed() {
        appendElement('Schedule <b>Destroyed</b> event is triggered<hr>');
    }
    function OnEventClick() {
        appendElement('Schedule <b>Event Click</b> event is triggered<hr>');
    }
    function OnPopupOpen() {
        appendElement('Schedule <b>Popup Open</b> event is triggered<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
};