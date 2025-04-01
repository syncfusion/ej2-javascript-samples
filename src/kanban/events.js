this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open', allowToggle: true },
            { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
            { headerText: 'Done', keyField: 'Close', allowToggle: true }
        ],
        swimlaneSettings: {
            keyField: 'Assignee'
        },
        created: OnCreate,
        actionBegin: OnActionBegin,
        actionComplete: OnActionComplete,
        actionFailure: OnActionFailure,
        dataBinding: OnDataBinding,
        dataBound: OnDataBound,
        cardRendered: OnCardRendered,
        queryCellInfo: OnQueryCellInfo,
        cardClick: OnCardClick,
        cardDoubleClick: OnCardDoubleClick,
        dragStart: OnDragStart,
        drag: OnDrag,
        dragStop: OnDragStop
    });
    kanbanObj.appendTo('#Kanban');
    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };
    function OnCreate() {
        appendElement('Kanban <b>Load</b> event called<hr>');
    }
    function OnActionBegin() {
        appendElement('Kanban <b>Action Begin</b> event called<hr>');
    }
    function OnActionComplete() {
        appendElement('Kanban <b>Action Complete</b> event called<hr>');
    }
    function OnActionFailure() {
        appendElement('Kanban <b>Action Failure</b> event called<hr>');
    }
    function OnDataBinding() {
        appendElement('Kanban <b>Data Binding</b> event called<hr>');
    }
    function OnDataBound() {
        appendElement('Kanban <b>Data Bound</b> event called<hr>');
    }
    function OnCardRendered(args) {
        appendElement('Kanban - ' + args.data.Id + ' - <b>Card Rendered</b> event called<hr>');
    }
    function OnQueryCellInfo() {
        appendElement('Kanban <b>Query Cell Info</b> event called<hr>');
    }
    function OnCardClick(args) {
        appendElement('Kanban - ' + args.data.Id + ' - <b>Card Click</b> event called<hr>');
    }
    function OnCardDoubleClick(args) {
        appendElement('Kanban - ' + args.data.Id + ' - <b>Card Double Click</b> event called<hr>');
    }
    function OnDragStart() {
        appendElement('Kanban <b>Drag Start</b> event called<hr>');
    }
    function OnDrag() {
        appendElement('Kanban <b>Drag</b> event called<hr>');
    }
    function OnDragStop() {
        appendElement('Kanban <b>Drag Stop</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
};