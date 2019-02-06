this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: 380,
        contextMenuItems: [
            { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
            { text: 'Expand the Row', target: '.e-content', id: 'expandrow' }
        ],
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 80, textAlign: 'Right', editType: 'numericedit' },
            { field: 'taskName', headerText: 'Task Name', width: 210 },
            { field: 'startDate', headerText: 'Start Date', format: 'yMd', width: 100,
                editType: 'datepickeredit', textAlign: 'Right' },
            { field: 'endDate', headerText: 'End Date', format: 'yMd', width: 100, editType: 'datepickeredit', textAlign: 'Right' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right', editType: 'numericedit' },
            { field: 'progress', width: 80, headerText: 'Progress', textAlign: 'Right', editType: 'numericedit' },
            { field: 'priority', headerText: 'Priority', width: 90, editType: 'numericedit' }
        ],
        contextMenuOpen: function (arg) {
            var elem = arg.event.target;
            var uid = elem.closest('.e-row').getAttribute('data-uid');
            if (ej.base.isNullOrUndefined(ej.base.getValue('hasChildRecords', treeGridObj.grid.getRowObjectFromUID(uid).data))) {
                arg.cancel = true;
            }
            else {
                var flag = ej.base.getValue('expanded', treeGridObj.grid.getRowObjectFromUID(uid).data);
                var val = flag ? 'none' : 'block';
                document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
                val = !flag ? 'none' : 'block';
                document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
            }
        },
        contextMenuClick: function (args) {
            treeGridObj.getColumnByField('taskID');
            if (args.item.id === 'collapserow') {
                treeGridObj.collapseRow((treeGridObj.getSelectedRows()[0]), treeGridObj.getSelectedRecords()[0]);
            }
            else {
                treeGridObj.expandRow((treeGridObj.getSelectedRows()[0]), treeGridObj.getSelectedRecords()[0]);
            }
        }
    });
    treeGridObj.appendTo('#TreeGrid');
};