this.default = function () {
    /**
     * Smart Task Prioritizer Sample
     */
    ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit, ej.gantt.Selection);
    let gantt = new ej.gantt.Gantt({
        dataSource: window.tasksCollection,
        resources: window.resourceCollection,
        taskFields: {
            id: 'Id',
            name: 'Name',
            startDate: 'StartDate',
            endDate: 'EndDate',
            progress: 'Progress',
            parentID: 'ParentId',
            resourceInfo: 'resourceInfo',
            baselineStartDate: "BaselineStartDate",
            baselineEndDate: "BaselineEndDate",
        },
        resourceFields: {
            id: 'Id',
            name: 'Name',
            unit: 'MaxUnit',
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        rowDataBound: (args) => {
            if (args.data.taskData.isCritical) {
                args.row.style.backgroundColor = '#ffecd4';
            }
        },
        queryTaskbarInfo: (args) => {
            if (args.data.taskData.isCritical) {
                args.taskbarElement.parentElement.parentElement.style.backgroundColor = '#ffecd4';
            }
        },
        columns: [
            { field: 'Id', headerText: "Task Id" },
            { field: 'Name', headerText: 'Task Name', width: 250, clipMode: 'EllipsisWithTooltip' },
            { field: 'resourceInfo', headerText: 'Resources' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'EndDate', headerText: 'End Date' },
            { field: 'BaselineStartDate', headerText: 'BaselineStartDate' },
            { field: 'BaselineEndDate', headerText: 'BaselineStartDate' },
        ],
        toolbar: ['Prioritize Task'],
        toolbarClick: toolbarClick,
        labelSettings: {
            rightLabel: 'resourceInfo'
        },
        splitterSettings: {
            position: "23%"
        },
        readOnly: false,
        allowSelection: true,
        highlightWeekends: true,
        treeColumnIndex: 1,
        taskbarHeight: 20,
        rowHeight: 40,
        height: '550px',
    });

    gantt.appendTo('#Gantt');
    function toolbarClick(args) {
        if (args.item.text === 'Prioritize Task') {
            gantt.showSpinner();
            let input = `
      Analyze the 'TaskCollection' below to find critical tasks in the 'TaskCollection'. 
      Analyze if each task 'EndDate' is greater than the 'BaselineEndDate' date 
      (specifically analyze the date, not DateTime, because it's a JSON formatted string). 
      Focus on tasks where both 'EndDate' and 'BaselineEndDate' are not null and compare only dates, not time.
      If you find a critical tasks add an additional property to called isCritical and set it to true and return the modified 'TaskCollection'. No other explanation or content should be returned.
      Here is the 'TaskCollection': ${JSON.stringify(window.tasksCollection)}`;
            let aioutput = geminiModel(input);
            aioutput.then((result) => {
                let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
                cleanedJsonData = cleanedJsonData.replace(/\n}\n/g, '');
                let input1 = `
        Analyze the 'CriticalCollection' for each task in 'CriticalCollection' where the isCritical property is set to true, i want to add additional resource inside the resourceInfo.
        Adding of additional resources is based on unassigned resource, To find unassigned resources compare the 'ResourceCollection' with each task in 'TaskCollection' and if any of that resources is not assigned,
        Assign that unassigned resource to critical task and return the modified 'CriticalCollection' and also return the Id in which isCritical is set to true in a seperate property array called AddedResourceIds. No other explanation or content should be returned.
        Here is the 'TaskCollection': ${JSON.stringify(window.tasksCollection)}, 
        ResourceCollection: ${JSON.stringify(window.resourceCollection)},
        CriticalCollection: ${JSON.stringify(cleanedJsonData)}`;
                let aioutput1 = geminiModel(input1);
                aioutput1.then((result) => {
                    let cleanedJsonData1 = result.replace(/^```json\n|```\n?$/g, '');
                    let criticalTask1 = JSON.parse(cleanedJsonData1);
                    gantt.dataSource = criticalTask1.CriticalCollection
                    let modifiedtaskID = criticalTask1.AddedResourceIds;
                    let taskIdsString = modifiedtaskID.join(', ');
                    let csfooterElement = document.getElementById('csfooter');
                    if (csfooterElement) {
                        csfooterElement.innerText = ' Critical task containing Task Id: ' + taskIdsString + ' new resources has been added';
                    }
                    gantt.hideSpinner();
                })
            });
        }
    }
};