this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: [],
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        emptyRecordTemplate: '#emptytemplate',
        toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Search'],
        editSettings: {
            allowAdding: true,
            allowDeleting: true,
            allowEditing: true
        },
        filterSettings: { type: 'Menu' },
        columns: [
            {
                field: 'taskID',
                headerText: 'Task ID',
                type: 'number',
                textAlign: 'Right',
                isPrimaryKey: true,
                validationRules: { required: true, min: 0 },
                width: 100
            },
            {
                field: 'taskName',
                headerText: 'Task Name',
                type: 'string',
                textAlign: 'Left',
                validationRules: { required: true },
                width: 120,
                clipMode: 'EllipsisWithTooltip'
            },
            {
                field: 'priority',
                headerText: 'Priority',
                type: 'string',
                editType: 'dropdownedit',
                edit: {
                    params: {
                        dataSource: [
                            { priority: 'Low' },
                            { priority: 'Medium' },
                            { priority: 'High' },
                            { priority: 'Critical' }
                        ]
                    }
                },
                textAlign: 'Left',
                width: 100
            },
            {
                field: 'assignee',
                headerText: 'Assignee',
                type: 'string',
                textAlign: 'Left',
                width: 100
            },
            {
                field: 'status',
                headerText: 'Status',
                type: 'string',
                textAlign: 'Left',
                editType: 'dropdownedit',
                edit: {
                    params: {
                        dataSource: [
                            { status: 'Low' },
                            { status: 'Open' },
                            { status: 'Inprogress' },
                            { status: 'Review-Request' },
                            { status: 'Review-Reject' },
                            { status: 'Closed' }
                        ]
                    }
                },
                width: 100
            },
            {
                field: 'duration',
                headerText: 'Duration in Days',
                type: 'number',
                editType: 'numericedit',
                textAlign: 'Right',
                width: 140
            }
        ],
        dataBound: function() {
            var isEmpty = this.flatData.length === 0;
            if (treegrid.searchSettings.key === '' || treegrid.searchSettings.key === undefined) {
                this.toolbarModule.enableItems([this.element.id + '_gridcontrol_searchbar'], !isEmpty);
            }

            var filterMenuDivs = this.element.querySelectorAll('.e-filtermenudiv');
            var treeGridInstance = this;
            filterMenuDivs.forEach(function(div) {
                if (isEmpty && !treeGridInstance.grid.filterSettings.columns.length) {
                    div.classList.add('e-disabled');
                    div.style.cursor = 'default';
                } else {
                    div.classList.remove('e-disabled');
                    div.style.removeProperty('cursor');
                }
            });
        },
        actionComplete: function(args) {
            var searchBarId = this.element.id + '_gridcontrol_searchbar';
            if (args.action === 'clearFilter' && this.flatData.length) {
                this.toolbarModule.enableItems([searchBarId], true);
            } else if ((args.requestType === 'delete' || args.requestType === 'searching') && treegrid.flatData.length === 0 && treegrid.searchSettings.key === '') {
                this.toolbarModule.enableItems([searchBarId], false);
            } else if (args.requestType === 'filterAfterOpen' && !this.flatData.length) {
                var hasMatchingColumn = args.filterModel.filterSettings.columns.some(function(col) {
                    return col.field === args.columnName;
                });
                args.filterModel.dlgObj[hasMatchingColumn && args.filterModel.filterSettings.columns.length ? 'show' : 'hide']();
            }
        }
    });
    treegrid.appendTo('#TreeGrid');
};