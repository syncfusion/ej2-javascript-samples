this.default = function () {
    var filtertype = [
        { id: 'Menu', type: 'Menu' },
        { id: 'Excel', type: 'Excel' },
    ];
    var mode = [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ];
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        height: 350,
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
            { field: 'taskName', headerText: 'Task Name', width: 220 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 140, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 120 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    var dropDownFilterType = new ej.dropdowns.DropDownList({
        dataSource: filtertype,
        fields: { text: 'type', value: 'id' },
        value: 'Menu',
        width: '100px',
        change: function (e) {
            var dropSelectedValue = e.value;
            treeGridObj.filterSettings.type = dropSelectedValue;
            treeGridObj.clearFiltering();
        }
    });
    dropDownFilterType.appendTo('#filterType');
    var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: mode,
        fields: { text: 'mode', value: 'id' },
        value: 'Parent',
        width: '100px',
        change: function (e) {
            var mode = e.value;
            treeGridObj.filterSettings.hierarchyMode = mode;
            treeGridObj.clearFiltering();
        }
    });
    dropDownMode.appendTo('#menu-mode');
};