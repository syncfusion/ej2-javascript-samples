this.default = function () {
    var mode = [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ];
    var dropDownFilter;
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        height: 350,
        allowFiltering: true,
        filterSettings: { type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate' },
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 80 },
            { field: 'taskName', headerText: 'Task Name', width: 200 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 100, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90,
                filterBarTemplate: {
                    create: function (args) {
                        var dd = document.createElement('input');
                        dd.id = 'duration';
                        return dd;
                    },
                    write: function (args) {
                        var dataSource = ['All', '1', '3', '4', '5', '6', '8', '9'];
                        dropDownFilter = new ej.dropdowns.DropDownList({
                            dataSource: dataSource,
                            value: 'All',
                            change: function (e) {
                                var valuenum = +e.value;
                                var id = dropDownFilter.element.id;
                                var value = e.value;
                                if (value !== 'All') {
                                    treeGridObj.filterByColumn(id, 'equal', valuenum);
                                }
                                else {
                                    treeGridObj.removeFilteredColsByField(id);
                                }
                            }
                        });
                        dropDownFilter.appendTo('#duration');
                    }
                } }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: mode,
        fields: { text: 'mode', value: 'id' },
        value: 'Parent',
        width: '100px',
        change: function (e) {
            var mode = e.value;
            treeGridObj.filterSettings.hierarchyMode = mode;
            treeGridObj.clearFiltering();
            dropDownFilter.value = 'All';
        }
    });
    dropDownMode.appendTo('#filter-mode');
};