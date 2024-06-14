this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        height: '450px',
        treeColumnIndex: 1,
        highlightWeekends: true,
        allowSelection: true,
        allowReordering: true,
        allowSorting: true,
        allowResizing: true,
        enableContextMenu: true,
        showColumnMenu: true,
        load: load,
        created: created,
        dataBound: dataBound,
        toolbarClick: toolbarClick,
        beforeTooltipRender: beforeTooltipRender,
        actionBegin: actionBegin,
        actionComplete: actionComplete,
        cellEdit: cellEdit,
        endEdit: endEdit,
        taskbarEditing: taskbarEditing,
        taskbarEdited: taskbarEdited,
        rowSelecting: rowSelecting,
        rowSelected: rowSelected,
        rowDeselecting: rowDeselecting,
        rowDeselected: rowDeselected,
        columnDragStart: columnDragStart,
        columnDrag: columnDrag,
        columnDrop: columnDrop,
        expanding: expanding,
        expanded: expanded,
        collapsing: collapsing,
        collapsed: collapsed,
        columnMenuClick: columnMenuClick,
        columnMenuOpen: columnMenuOpen,
        contextMenuClick: contextMenuClick,
        contextMenuOpen: contextMenuOpen,
        resizeStart: resizeStart,
        resizing: resizing,
        resizeStop: resizeStop,
        splitterResizeStart: splitterResizeStart,
        splitterResizing: splitterResizing,
        splitterResized: splitterResized,
        recordDoubleClick: recordDoubleClick,
        onTaskbarClick: onTaskbarClick,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', width: 75 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ],
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
        },
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
    });
    ganttChart.appendTo('#Events');

    function load() {
        appendElement('Gantt <b>load</b> event called<hr>');
    }
    function created() {
        appendElement('Gantt <b>created</b> event called<hr>');
    }
    function dataBound() {
        appendElement('Gantt <b>dataBound</b> event called<hr>');
    }
    function toolbarClick() {
        appendElement('Gantt <b>toolbarClick</b> event called<hr>');
    }
    function beforeTooltipRender() {
        appendElement('Gantt <b>beforeTooltipRender</b> event called<hr>');
    }
    function actionBegin() {
        appendElement('Gantt <b>actionBegin</b> event called<hr>');
    }
    function actionComplete() {
        appendElement('Gantt <b>actionComplete</b> event called<hr>');
    }
    function cellEdit() {
        appendElement('Gantt <b>cellEdit</b> event called<hr>');
    }
    function endEdit() {
        appendElement('Gantt <b>endEdit</b> event called<hr>');
    }
    function taskbarEditing() {
        appendElement('Gantt <b>taskbarEditing</b> event called<hr>');
    }
    function taskbarEdited() {
        appendElement('Gantt <b>taskbarEdited</b> event called<hr>');
    }
    function rowSelecting() {
        appendElement('Gantt <b>rowSelecting</b> event called<hr>');
    }
    function rowSelected() {
        appendElement('Gantt <b>rowSelected</b> event called<hr>');
    }
    function rowDeselecting() {
        appendElement('Gantt <b>rowDeselecting</b> event called<hr>');
    }
    function rowDeselected() {
        appendElement('Gantt <b>rowDeselected</b> event called<hr>');
    }
    function columnDragStart() {
        appendElement('Gantt <b>columnDragStart</b> event called<hr>');
    }
    function columnDrag() {
        appendElement('Gantt <b>columnDrag</b> event called<hr>');
    }
    function columnDrop() {
        appendElement('Gantt <b>columnDrop</b> event called<hr>');
    }
    function expanding() {
        appendElement('Gantt <b>expanding</b> event called<hr>');
    }
    function expanded() {
        appendElement('Gantt <b>expanded</b> event called<hr>');
    }
    function collapsing() {
        appendElement('Gantt <b>collapsing</b> event called<hr>');
    }
    function collapsed() {
        appendElement('Gantt <b>collapsed</b> event called<hr>');
    }
    function columnMenuClick() {
        appendElement('Gantt <b>columnMenuClick</b> event called<hr>');
    }
    function columnMenuOpen(args) {
        if (args.parentItem != null) {
            args.element.querySelectorAll('li')[ganttChart.treeColumnIndex].style.display = 'none';
        }
        appendElement('Gantt <b>columnMenuOpen</b> event called<hr>');
    }
    function contextMenuClick() {
        appendElement('Gantt <b>contextMenuClick</b> event called<hr>');
    }
    function contextMenuOpen() {
        appendElement('Gantt <b>contextMenuOpen</b> event called<hr>');
    }
    function resizeStart() {
        appendElement('Gantt <b>resizeStart</b> event called<hr>');
    }
    function resizing() {
        appendElement('Gantt <b>resizing</b> event called<hr>');
    }
    function resizeStop() {
        appendElement('Gantt <b>resizeStop</b> event called<hr>');
    }
    function splitterResizeStart() {
        appendElement('Gantt <b>splitterResizeStart</b> event called<hr>');
    }
    function splitterResizing() {
        appendElement('Gantt <b>splitterResizing</b> event called<hr>');
    }
    function splitterResized() {
        appendElement('Gantt <b>splitterResized</b> event called<hr>');
    }
    function recordDoubleClick() {
        appendElement('Gantt <b>recordDoubleClick</b> event called<hr>');
    }
    function onTaskbarClick() {
        appendElement('Gantt <b>onTaskbarClick</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }

    var Clear = new ej.buttons.Button();
    Clear.appendTo('#clear');
    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };
};
