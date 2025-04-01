this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        height: 380,
        contextMenuItems: [
            { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
            { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
            { text: 'Collapse All', target: '.e-headercontent', id: 'collapseall' },
            { text: 'Expand All', target: '.e-headercontent', id: 'expandall' }
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
            var row = elem.closest('.e-row');
            var uid = row && row.getAttribute('data-uid');
            var items = [].slice.call(document.querySelectorAll('.e-menu-item'));
            for (var i = 0; i < items.length; i++) {
              items[i].setAttribute('style','display: none;');
            }
            if (elem.closest('.e-row')) {
              if (ej.base.isNullOrUndefined(uid) || 
              ej.base.isNullOrUndefined(ej.base.getValue('hasChildRecords', treeGridObj.grid.getRowObjectFromUID(uid).data))||
              !ej.base.getValue('hasChildRecords', treeGridObj.grid.getRowObjectFromUID(uid).data)) {
                arg.cancel = true;
              } else {
                var flag = ej.base.getValue('expanded', treeGridObj.grid.getRowObjectFromUID(uid).data);
                var val = flag ? 'none' : 'block';
                document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
                val = !flag ? 'none' : 'block';
                document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
              }
            } else {
              var len = treeGridObj.element.querySelectorAll('.e-treegridexpand').length;
              if (len !== 0) {
                 document.querySelectorAll('li#collapseall')[0].setAttribute('style', 'display: block;');
              } else {
                document.querySelectorAll('li#expandall')[0].setAttribute('style', 'display: block;');
              }
            }
        },
        contextMenuClick: function (args) {
            if (args.item.id === 'collapserow') {
                treeGridObj.collapseRow(treeGridObj.getSelectedRows()[0], treeGridObj.getSelectedRecords()[0]);
            } else if (args.item.id === 'expandrow') {
                treeGridObj.expandRow(treeGridObj.getSelectedRows()[0], treeGridObj.getSelectedRecords()[0]);
            } else if (args.item.id === 'collapseall') {
                treeGridObj.collapseAll();
            } else if (args.item.id === 'expandall') {
                treeGridObj.expandAll();
            }
        }
    });
    treeGridObj.appendTo('#TreeGrid');
};