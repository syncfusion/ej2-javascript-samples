/**
 * Adaptive Tree Grid sample
 */
 this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        enableAdaptiveUI: true,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
        height: '100%',
        columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 135, validationRules: { required: true, number: true }, textAlign: 'Right'  },
            { field: 'taskName', headerText: 'Task Name', width: 280, validationRules: { required: true },textAlign: 'Left' },
            { field: 'duration', headerText: 'Duration', width: 140, validationRules: { required: true },textAlign: 'Right'  },
            { field: 'progress', headerText: 'Progress', width: 145, textAlign: 'Right'  },
        ],
        load: function() {
            if (!ej.base.Browser.isDevice) {
                treegrid.grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
            }
        }
    });
    if (ej.base.Browser.isDevice) {
        treegrid.appendTo('#adaptivedevice');
        document.getElementsByClassName('e-mobile-layout')[0].style.display = 'none';
    } else {
        treegrid.appendTo('#TreeGrid');
    }
};