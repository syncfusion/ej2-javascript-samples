this.default = function () {   
    var dropdownlistObj;
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.resourceAllocationData,
        height: '450px',
        allowSelection: true,
        highlightWeekends: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
            work:'work',
            resourceInfo: 'resources',
            type:'taskType'
        },
        resources: resourceAllocationResources,
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'unit'
        },
        queryTaskbarInfo: function (args) {
            if (args.data.ganttProperties.resourceNames) {
                var resourceName = args.data.ganttProperties.resourceNames;
                if (resourceName.split('[')[0].includes('Rose Fuller')) {
                    args.taskbarBgColor = '#539ed6';
                    args.milestoneColor = '#539ed6';
                    args.progressBarBgColor = '#1c5d8e';
                    args.taskbarBorderColor = '#1c5d8e';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Van Jack')) {
                    args.taskbarBgColor = '#ff826b';
                    args.milestoneColor = '#ff826b';
                    args.progressBarBgColor = '#b24531';
                    args.taskbarBorderColor = '#b24531';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Bergs Anton')) {
                    args.taskbarBgColor = '#ef6fbb';
                    args.milestoneColor = '#ef6fbb';
                    args.progressBarBgColor = '#a53576';
                    args.taskbarBorderColor = '#a53576';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Fuller King')) {
                    args.taskbarBgColor = '#87b972';
                    args.milestoneColor = '#87b972';
                    args.progressBarBgColor = '#4a7537';
                    args.taskbarBorderColor = '#4a7537';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Tamer Vinet')) {
                    args.taskbarBgColor = '#a496cf';
                    args.milestoneColor = '#a496cf';
                    args.progressBarBgColor = '#635688';
                    args.taskbarBorderColor = '#635688';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                }
            }
            if (args.taskbarType === 'ParentTask') {
                args.taskbarBgColor = '#adadad';
                args.progressBarBgColor = '#6b6b6b';
                if (args.data.ganttProperties.progress === 0) {
                    args.taskLabelColor = 'black';
                }
            }
        },
        taskType:"FixedWork",
        workUnit:"Hour",
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', visible: false},
            { field: 'TaskName', headerText: 'Task Name', width: '180'},
            {
                field: 'resources',
                headerText: 'Resources',
                width: '190',
                template: '#resColumnTemplate',
                editType: "dropdownedit",
                edit: {
                    read: function () {
                        // Get the selected value from the dropdown
                        var value = dropdownlistObj.value;
                        if (value == null) {
                            // If no value is selected, retain the existing resource(s)
                            value = ganttChart.treeGridModule.currentEditRow[ganttChart.taskFields.resourceInfo];
                        } else {
                            // Update the resource info with the selected value
                            ganttChart.treeGridModule.currentEditRow[ganttChart.taskFields.resourceInfo] = [value];
                        }
                        return value;
                    },
                    destroy: function () {
                        // Clean up the dropdown instance
                        dropdownlistObj.destroy();
                    },
                    write: function (args) {
                        // Ensure the currentEditRow object is initialized
                        ganttChart.treeGridModule.currentEditRow = {};
            
                        // Retrieve the existing resource(s) from the row data or set default
                        var existingResourceIds = ganttChart.treeGridModule.getResourceIds(args.rowData);
                        var selectedValue = (existingResourceIds && existingResourceIds.length > 0) ? existingResourceIds[0] : null;
            
                        // Initialize the DropDownList
                        dropdownlistObj = new ej.dropdowns.DropDownList({
                            dataSource: new ej.data.DataManager(ganttChart.resources),
                            fields: { text: ganttChart.resourceFields.name, value: ganttChart.resourceFields.id },
                            enableRtl: ganttChart.enableRtl,
                            popupHeight: '350px',
                            // Set the existing resource(s) as the selected value
                            value: selectedValue,
                        });
                        // Append the dropdown to the element
                        dropdownlistObj.appendTo(args.element);
                    },
                },
            },
            { field: 'work', width:'110'},
            { field: 'Duration', width: '100' },
            { field: 'taskType', headerText: 'Task Type', width: '110'}
        ],
        editDialogFields: [
            { type: 'Resources' }
        ],
        addDialogFields: [
            { type: 'Resources' }
        ],
        cellEdit: function (args) {
            // Restrict editing based on row data
            if (args.rowData.TaskID === 1 || args.rowData.TaskID === 5) { // Example: Prevent editing Task ID 1
                args.cancel = true; // Cancel editing for this specific cell
            }
        },
        actionBegin: function (args) {
            if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
                // Restrict editing based on row data for dialog
                if (args.rowData.TaskID === 1 || args.rowData.TaskID === 5) {
                    args.cancel = true; // Cancel editing for this specific row dialog
                }
                args.Resources.selectionSettings = {};
                args.Resources.columns.splice(0, 1);
            }
        },
        actionComplete: function (args) {
            if (args.requestType === 'add' && !args.data.TaskName) {
                var taskName = 'Task Name ' + args.data.TaskID;
                args.data.TaskName = taskName;
                args.data.ganttProperties.taskName = taskName;
                args.data.taskData.TaskName = taskName;
            }
        },
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
        splitterSettings: {
            columnIndex: 2
        },
        labelSettings: {
            rightLabel: 'resources',
            taskLabel: '${Progress}%'
        },
        projectStartDate: new Date('03/28/2024'),
        projectEndDate: new Date('07/28/2024')
     });
    ganttChart.appendTo('#resource');
};