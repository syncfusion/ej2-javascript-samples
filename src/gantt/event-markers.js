this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.EventmarkerData,
        height: '650px',
        rowHeight: 46,
        taskbarHeight: 25,
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
            parentID: 'ParentId'
        },
        timelineSettings: {
            topTier: {
                unit: 'Week',
                format: 'EEE MMM dd'
            },
            bottomTier: {
                unit: 'Day',
                format: ''
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', headerText: 'Name', width: 280 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' }
        ],
        eventMarkers: [
            {
                day: new Date("04/01/2025"),
                label: "Product Concept Analysis"
            },
            {
                day: new Date("04/07/2025"),
                label: "Research Phase"
            },
            {
                day: new Date("04/07/2025"),
                label: "Demand Analysis",
                top: '150px'
            },
            {
                day: new Date("04/17/2025"),
                label: "Design Phase",
                top: '200px'
            },
            {
                day: new Date("04/17/2025"),
                label: "Competitor Analysis",
                top: '422px'
            },
            {
                day: new Date("05/23/2025"),
                label: "Prototype Testing Phase"
            },
            {
                day: new Date("05/29/2025"),
                label: "Production Launch",
                top: '5px'
            },
            {
                day: new Date("06/26/2025"),
                label: "Market Deployment"
            }
        ],
        labelSettings: {
            leftLabel: 'TaskName'
        },
        splitterSettings: {
            columnIndex: 2
        },
        projectStartDate: new Date('03/26/2025'),
        projectEndDate: new Date('07/20/2025')
     });
    ganttChart.appendTo('#EventMarkers');
};