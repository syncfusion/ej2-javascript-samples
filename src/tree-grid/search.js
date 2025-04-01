this.default = function () {
    var mode = [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ];
    var grid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        height: 350,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        toolbar: ['Search'],
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 80 },
            { field: 'taskName', headerText: 'Task Name', width: 200 },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
            { field: 'priority', headerText: 'Priority', textAlign: 'Left', width: 100 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
    var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: mode,
        width: '100px',
        fields: { text: 'mode', value: 'id' },
        value: 'Parent',
        change: function (e) {
            var mode = e.value;
            grid.search('');
            grid.searchSettings.hierarchyMode = mode;
        }
    });
    dropDownMode.appendTo('#search-mode');
};