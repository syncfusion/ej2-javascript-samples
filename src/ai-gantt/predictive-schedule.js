this.default = function () {
    /**
     * Smart Predictive Scheduling Sample
     */
    ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit, ej.gantt.Selection);

    let gantt = new ej.gantt.Gantt({
        dataSource: window.HistoricalTaskData,
        renderBaseline: true,
        toolbar: ['Predective scheduling'],
        taskFields: {
            id: 'Id',
            name: 'Name',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            endDate: 'EndDate',
            baselineEndDate: 'BaselineEndDate',
            baselineStartDate: 'BaselineStartDate',
            parentID: 'ParentId',
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        columns: [
            { field: 'Id', headerText: 'Task ID' },
            { field: 'Name', headerText: 'Task Name', allowReordering: false },
            { field: 'StartDate', headerText: 'Start Date', allowSorting: false },
            { field: 'Duration', headerText: 'Duration', allowEditing: false },
            { field: 'Progress', headerText: 'Progress', allowFiltering: false },
        ],
        allowFiltering: true,
        gridLines: "Both",
        showColumnMenu: true,
        highlightWeekends: true,
        timelineSettings: {
            showTooltip: true,
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        },
        allowResizing: true,
        toolbarClick: toolbarClick,
        readOnly: false,
        taskbarHeight: 20,
        rowHeight: 40,
        height: '550px',
        allowUnscheduledTasks: true,
    });
    gantt.appendTo('#GanttContainer');

    function GetHistoricalCoolection() {
        let collection = "";
        collection = collection + JSON.stringify(window.HistoricalDataCollection2021) + JSON.stringify(window.HistoricalDataCollection2022) + JSON.stringify(window.HistoricalDataCollection2023) + JSON.stringify(window.HistoricalDataCollection2024) + JSON.stringify(window.HistoricalDataCollection2025);
        return collection;
    }

    function toolbarClick(args) {
        if (args.item.text === 'Predective scheduling') {
            gantt.showSpinner();
            let input = `You analyze the historical data collection of multiple years used for the Gantt Chart project management. Based on the existing historcal data set collection you need to modify the project schedule values for the below TaskDataCollection for the project management for the year of 2026. Avoid json tags with your response. No other explanation or content to be returned."
        + HistoricalDataCollections :` + GetHistoricalCoolection() + " TaskDataCollection: " + JSON.stringify(window.HistoricalTaskData) +
                "Return the result collection in json format named as 'TaskCollection' key - its contains the list of tasks collection";
            let aioutput = geminiModel(input);
            aioutput.then((result) => {
                let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
                let collection = JSON.parse(cleanedJsonData).TaskCollection;
                let currentData = gantt.currentViewData;
                for (let i = 0; i < collection.length; i++) {
                    collection[i].BaselineStartDate = new Date(currentData[i].StartDate);
                    collection[i].BaselineEndDate = new Date(currentData[i].EndDate);
                }
                gantt.dataSource = collection;
                gantt.hideSpinner();
            });
        }
    }
};