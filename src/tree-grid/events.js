this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        childMapping: 'subtasks',
        height: 350,
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
        appendElement('Tree Grid <b>beginEdit</b> event called<hr>');
    }
    function rowDeselected() {
        appendElement('Tree Grid <b>rowDeselected</b> event called<hr>');
    }
    function columnDragStart() {
        appendElement('Tree Grid <b>columnDragStart</b> event called<hr>');
    }
    function columnDrop() {
        appendElement('Tree Grid <b>columnDrop</b> event called<hr>');
    }
    function columnDrag() {
        appendElement('Tree Grid <b>columnDrag</b> event called<hr>');
    }
    function load() {
        appendElement('Tree Grid <b>load</b> event called<hr>');
    }
    function create() {
        appendElement('Tree Grid <b>create</b> event called<hr>');
    }
    function actionBegin() {
        appendElement('Tree Grid <b>actionBegin</b> event called<hr>');
    }
    function actionComplete() {
        appendElement('Tree Grid <b>actionComplete</b> event called<hr>');
    }
    function dataBound() {
        appendElement('Tree Grid <b>dataBound</b> event called<hr>');
    }
    function rowSelecting() {
        appendElement('Tree Grid <b>rowSelecting</b> event called<hr>');
    }
    function rowSelected() {
        appendElement('Tree Grid <b>rowSelected</b> event called<hr>');
    }
    function expanding() {
        appendElement('Tree Grid <b>expanding</b> event called<hr>');
    }
    function expanded() {
        appendElement('Tree Grid <b>expanded</b> event called<hr>');
    }
    function collapsing() {
        appendElement('Tree Grid <b>collapsing</b> event called<hr>');
    }
    function collapsed() {
        appendElement('Tree Grid <b>collapsed</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
};