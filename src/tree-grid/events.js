this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        editSettings: { allowEditing: true },
        load: load,
        created: create,
        actionBegin: actionBegin,
        actionComplete: actionComplete,
        allowReordering: true,
        allowSorting: true,
        dataBound: dataBound,
        rowSelecting: rowSelecting,
        rowSelected: rowSelected,
        rowDeselected: rowDeselected,
        columnDragStart: columnDragStart,
        columnDrag: columnDrag,
        columnDrop: columnDrop,
        beginEdit: beginEdit,
        expanding: expanding,
        expanded : expanded,
        collapsing: collapsing,
        collapsed: collapsed,
        columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 110 },
            { field: 'taskName', headerText: 'Task Name', width: 210, validationRules: { required: true } },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', editType: 'datepickeredit', format: 'yMd', width: 110 },
            { field: 'progress', headerText: 'Progress', width: 110, textAlign: 'Right',
                editType: 'numericedit', edit: { params: {  format: 'n'}}
            },
        ],
        pageSettings: { pageCount: 5, pageSize: 11 }
    });
    treeGridObj.appendTo('#TreeGrid');
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');
    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };
    function beginEdit() {
        appendElement('TreeGrid <b>beginEdit</b> event called<hr>');
    }
    function rowDeselected() {
        appendElement('TreeGrid <b>rowDeselected</b> event called<hr>');
    }
    function columnDragStart() {
        appendElement('TreeGrid <b>columnDragStart</b> event called<hr>');
    }
    function columnDrop() {
        appendElement('TreeGrid <b>columnDrop</b> event called<hr>');
    }
    function columnDrag() {
        appendElement('TreeGrid <b>columnDrag</b> event called<hr>');
    }
    function load() {
        appendElement('TreeGrid <b>load</b> event called<hr>');
    }
    function create() {
        appendElement('TreeGrid <b>create</b> event called<hr>');
    }
    function actionBegin() {
        appendElement('TreeGrid <b>actionBegin</b> event called<hr>');
    }
    function actionComplete() {
        appendElement('TreeGrid <b>actionComplete</b> event called<hr>');
    }
    function dataBound() {
        appendElement('TreeGrid <b>dataBound</b> event called<hr>');
    }
    function rowSelecting() {
        appendElement('TreeGrid <b>rowSelecting</b> event called<hr>');
    }
    function rowSelected() {
        appendElement('TreeGrid <b>rowSelected</b> event called<hr>');
    }
    function expanding() {
        appendElement('TreeGrid <b>expanding</b> event called<hr>');
    }
    function expanded() {
        appendElement('TreeGrid <b>expanded</b> event called<hr>');
    }
    function collapsing() {
        appendElement('TreeGrid <b>collapsing</b> event called<hr>');
    }
    function collapsed() {
        appendElement('TreeGrid <b>collapsed</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
};