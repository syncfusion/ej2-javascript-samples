this.default = function () {
var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: window.showCheckBoxData,
    childMapping: 'subTasks',
    treeColumnIndex: 1,
    hierarchyCheckboxMode: 'self',
    editSettings: {allowDeleting: true},
    toolbar: ['Delete', 'Search'],
    allowFiltering: true,
    height: 380,
    columns: [
        {
            field: 'taskID',
            visible: false,
            isPrimaryKey: true
        },
        {
            field: 'taskName',
            headerText: 'Task Name',
            width: 270,
            showCheckbox: true
        },
        {
            field: 'assignee',
            headerText: 'Employee',
            width: 180
        },
        {
            field: 'designation',
            headerText: 'Designation',
            width: 220
        },
        {
            field: 'priority',
            headerText: 'Priority',
            width: 140
        },
        {
            field: 'status',
            headerText: 'Status',
            width: 120,
            textAlign: 'Center'
        },
        {
            field: 'progress',
            headerText: 'Progress',
            width: 120,
            textAlign: 'Right'
        }
    ],
    queryCellInfo: function (args) {
        if (args.column.field === 'status') {
            var status = args.data.status;
            var statusClass = status
                .toLowerCase()
                .replace(/\s+/g, '-');
            args.cell.innerHTML =
                '<span class="status-badge ' +
                statusClass +
                '">' +
                status +
                '</span>';
        }
    }
});
treeGridObj.appendTo('#TreeGrid');
var hierarchyModeData = [
    {
        id: 'Self',
        name: 'Self'
    },
    {
        id: 'Hierarchy',
        name: 'Hierarchy'
    },
    {
        id: 'FilteredHierarchy',
        name: 'Filtered Hierarchy'
    }
];
var hierarchyModeDropDown = new ej.dropdowns.DropDownList({
    dataSource: hierarchyModeData,
    fields: {
        text: 'name',
        value: 'id'
    },
    value: 'Self',
    width: '180px',
    change: function (args) {
        if (args.value === 'Hierarchy') {
            treeGridObj.hierarchyCheckboxMode = 'hierarchy';
        } else if (args.value === 'FilteredHierarchy') {
            treeGridObj.hierarchyCheckboxMode =
                'filteredHierarchy';
        } else {
            treeGridObj.hierarchyCheckboxMode = 'self';
        }
    }
});
hierarchyModeDropDown.appendTo('#hierarchyModes');
};