// Create an Internationalization instance
var intlObj = new ej.base.Internationalization();

window.weekDate = function (dateString) {
 	var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var date = gantt.locale === 'ar' ? parseArabicDate(dateString) : parseDateString(dateString);
    return intlObj.formatDate(date, { skeleton: 'E' });
};

window.formatDate = function (dateString) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var date = gantt.locale === 'ar' ? parseArabicDate(dateString) : parseDateString(dateString);
    return intlObj.formatDate(date, { skeleton: 'd' });
};

window.imageString = function (date) {
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
    var imageDate = gantt.locale === 'ar' ? parseArabicDate(date) : parseDateString(date);
    return "src/gantt/images/"+ imageDate.getDay() +".svg" ;
};

function parseDateString(dateString) {
    // Check if the date string is in the format "DD.MM.YYYY"
    if (dateString.includes('.')) {
        var parts = dateString.split('.');
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1; // Months are 0-based in JavaScript
        var year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
    // Fallback to default date parsing
    return new Date(dateString);
}

function convertArabicNumeralsToWestern(arabicNumerals) {
    var arabicToWesternMap = { '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9' };
    return arabicNumerals.replace(/[\u0660-\u0669]/g, function (match) { return arabicToWesternMap[match]; });
}
function parseArabicDate(arabicDateString) {
    // To convert the 'arabicDateString' Arabic Date to ISO Date format
    var normalizedDate = convertArabicNumeralsToWestern(arabicDateString);
    var parts = normalizedDate.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var year = parseInt(parts[2], 10);
    return new Date(year, month, day);
}

this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.timelineTemplate,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency:'Predecessor',
            child: 'subtasks'
        },
        splitterSettings: {
            columnIndex: 1
        },
        treeColumnIndex: 1,
        allowSelection: true,
        showColumnMenu: false,
        timelineSettings: {
            topTier: {
                unit: 'Day',
            },
            timelineUnitSize: 200,
        },
        labelSettings: {
            leftLabel: 'TaskName',
            taskLabel: 'Progress'
        },
        columns: [
            { field: 'TaskID', headerText: 'Task ID' ,visible: false},
            { field: 'TaskName', headerText: 'Task Name', width: 300  },
            { field: 'StartDate', headerText: 'Start Date'},
            { field: 'Duration', headerText: 'Duration'},
            { field: 'Progress', headerText: 'Progress'},
        ],
        height: '450px',
        allowUnscheduledTasks: true,
        projectStartDate: new Date('03/31/2024'),
        projectEndDate: new Date('04/23/2024'),
        timelineTemplate:"#TimelineTemplates"
    });
    ganttChart.appendTo('#Timeline');
};
