this.default = function () {
    /**
     * Smart Progress Predictor Sample
     */
    ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit, ej.gantt.Selection, ej.gantt.DayMarkers);
    let gantt = new ej.gantt.Gantt({
        dataSource: window.taskDataCollection,
        enableContextMenu: true,
        allowSorting: true,
        allowReordering: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: "ParentTaskID"
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        columns: [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'Progress' },
            { field: 'StartDate' },
            { field: 'Duration' },
        ],
        toolbar: ['Predict milestone'],
        toolbarClick: toolbarClick,
        splitterSettings: {
            position: "28%"
        },
        allowSelection: true,
        treeColumnIndex: 1,
        height: '550px',
        projectStartDate: new Date('4/1/2026'),
        projectEndDate: new Date('6/2/2026')
    });

    gantt.appendTo('#Gantt');

    function toolbarClick(args) {
        if (args.item.text === 'Predict milestone') {
            gantt.showSpinner();
            let input =
                "You analyze the multiple year HistoricalTaskDataCollections and current TaskDataCollection to predict project completion dates and milestones based on current progress and historical trends. Ignore the null or empty values, and collection values based parent child mapping. Avoid json tags with your response. No other explanation or content to be returned." +
                " HistoricalTaskDataCollections :" + getHistoricalCollection() +
                " TaskDataCollection: " + JSON.stringify(TaskDataCollection) +
                " Generate a JSON object named 'TaskDetails' containing:" +
                "- Key 'MilestoneTaskDate' with a list of milestone dates 'MilestoneDate' with 'TaskName' - task name. A milestone date is defined as the end date of tasks with a duration of 0 and only give current based milestone." +
                "- Key 'ProjectCompletionDate' indicating the latest end date among all tasks." +
                "- Key 'Summary' providing a summary of the project completion date and milestones.Ensure milestones are defined correctly based on tasks with a duration of 0, and the project completion date reflects the latest end date of all tasks "
            let aioutput = geminiModel(input);
            aioutput.then((result) => {
                let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
                let dataset = JSON.parse(cleanedJsonData);
                const eventMarkers = dataset.MilestoneTaskDate
                    .map((milestone) => ({
                        day: new Date(milestone["MilestoneDate"]),
                        label: milestone["TaskName"]
                    }));
                let projectDetailes = {
                    day: new Date(dataset.ProjectCompletionDate),
                    label: "Project completion date"
                }
                eventMarkers.push(projectDetailes)
                console.log(eventMarkers)
                gantt.eventMarkers = eventMarkers;

                gantt.hideSpinner();
            });
        }
        function getHistoricalCollection() {
            let historicalDataCollection = '';
            const word = window.ganttData;
            for (let year = 2021; year < 2026; year++) {
                historicalDataCollection += "HistoricalTaskDataCollection" + year + ":" + JSON.stringify(word["TaskDataCollection" + year]);
            }

            return historicalDataCollection;
        }
    }
};