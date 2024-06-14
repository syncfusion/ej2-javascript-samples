this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: projectNewData,
            height: '450px',
            highlightWeekends: true,
            showColumnMenu: true,
            enableContextMenu: true,
            allowFiltering: true,
            enableUndoRedo: true,
            allowSorting: true,
            allowResizing: true,
            allowReordering: true,
            undoRedoActions:['Sorting','Add','ColumnReorder','ColumnResize','ColumnState','Delete','Edit','Filtering','Indent','Outdent','NextTimeSpan','PreviousTimeSpan','RowDragAndDrop','Search'],
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
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            columns: [
                { field: 'TaskID', headerText: 'ID', width: 100 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor', headerText: 'Dependency' }
            ],
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search', 
            'Undo', 'Redo'],
            treeColumnIndex: 1,
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024')
    });
    ganttChart.appendTo('#UndoRedo');
};
