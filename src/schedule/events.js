this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2018, 1, 15),
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
        appendElement('Schedule <b>load</b> event called<hr>');
    }
    function OnActionBegin() {
        appendElement('Schedule <b>Action Begin</b> event called<hr>');
    }
    function OnActionComplete() {
        appendElement('Schedule <b>Action Complete</b> event called<hr>');
    }
    function OnActionFailure() {
        appendElement('Schedule <b>Action Failure</b> event called<hr>');
    }
    function OnCellDoubleClick() {
        appendElement('SChedule <b>Cell Double Click</b> event called<hr>');
    }
    function OnCellClick() {
        appendElement('Schedule <b>Cell Click</b> event called<hr>');
    }
    function OnNavigating() {
        appendElement('Schedule <b>Navigating</b> event called<hr>');
    }
    function OnDestroyed() {
        appendElement('Schedule <b>Destroyed</b> event called<hr>');
    }
    function OnEventClick() {
        appendElement('Schedule <b>Event Click</b> event called<hr>');
    }
    function OnPopupOpen() {
        appendElement('Schedule <b>Popup Open</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
};