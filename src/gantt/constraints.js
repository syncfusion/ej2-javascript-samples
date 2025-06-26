this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.constraintData,
        taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                constraintType: 'ConstraintType',
                constraintDate: 'ConstraintDate',
                dependency: 'Predecessor',
                parentID: 'parentID',
                notes: 'info',
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
            allowSelection: true,
            gridLines: 'Both',
            height: '450px',
            treeColumnIndex: 1,
            highlightWeekends: true,
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'MMM dd, y',
                },
                bottomTier: {
                    unit: 'Day',
                }
            },
            eventMarkers: [
              {
                day: new Date('03/25/2025'),
                label: 'Project StartDate'
              }, {
                day: new Date('08/28/2025'),
                label: 'Project EndDate'
              }
           ],
            columns: [
                { field: 'TaskID', visible: false},
                { field: 'TaskName', headerText: 'Job Name', width: '200', clipMode: 'EllipsisWithTooltip'},
                { field: 'StartDate'},
                { field: 'Duration'},
                { field: 'ConstraintType',width: '180'},
                { field: 'ConstraintDate'},
                { field: 'EndDate'},
                { field: 'Predecessor' },
                { field: 'Progress'},
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: '#rightLabel',
            },
            splitterSettings: {
                columnIndex: 4
            },
            projectStartDate: new Date('03/25/2025'),
            projectEndDate: new Date('09/01/2025')
    });
    ganttChart.appendTo('#Constraint');
    window.getConstraintText = function (value) {
        var map = {
            0: 'As Soon As Possible',
            1: 'As Late As Possible',
            2: 'Must Start On',
            3: 'Must Finish On',
            4: 'Start No Earlier Than',
            5: 'Start No Later Than',
            6: 'Finish No Earlier Than',
            7: 'Finish No Later Than'
        };
        return map[value];
    };
};
