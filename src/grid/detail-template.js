this.default = function () {
    var taskData = [];
    var salesData = [];
    var grid = new ej.grids.Grid({
        dataSource: window.employeeDetail,
        detailTemplate: '#detailtemplate',
        height: 600,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox' },
        columns: [
            { headerText: 'Image', textAlign: 'Center', width: 70, template:'#employeeImageTemplate' },
            { field: 'EmployeeID', headerText: 'ID', width: 70 },
            { field: 'Name', headerText: 'Name', width: 70 },
            { field: 'MailID', headerText: 'Email ID', width: 70, template:'#mailIDTemplate' },
            { field: 'SoftwareTeam', headerText: 'Team(s)', width: 70 },
            { field: 'ReportTo', headerText: 'Reporter', width: 70 }
        ],
        detailDataBound: function(args) {
            var rowData = args.data;
            taskData = window.taskDetail.filter(function (task) { return task.Assignee === rowData.Name; });
            salesData = generateData(taskData);
            var tabObj = new ej.navigations.Tab({
                animation: {
                    previous: { effect: 'None', duration: 0, easing: '' },
                    next: { effect: 'None', duration: 0, easing: '' }
                }
            });
            tabObj.appendTo(args.detailElement.querySelector('#tab'));
            var kanbanObj = new ej.kanban.Kanban({
                dataSource: taskData,
                keyField: 'Status',
                columns: [
                    { headerText: 'Open', keyField: 'Open' },
                    { headerText: 'In Progress', keyField: 'InProgress' },
                    { headerText: 'Testing', keyField: 'Testing' },
                    { headerText: 'Done', keyField: 'Close' }
                ],
                cardSettings: {
                    template: '#cardTemplate',
                    headerField: 'Id',
                }
            });
            kanbanObj.appendTo(args.detailElement.querySelector('#taskTemplate'));
            var chart = new ej.charts.Chart({
                primaryXAxis: {
                    valueType: 'Category',
                    title: 'Status'
                },
                height: '302px',
                title: 'Burndown Chart',
                tooltip: { enable: true },
                series: [
                    {
                        dataSource: salesData,
                        xName: 'taskid',
                        yName: 'estimatedHours',
                        type: 'Line',
                        name: 'Estimated Hours',
                        marker: { visible: true, width: 10, height: 10 }
                    },
                    {
                        dataSource: salesData,
                        xName: 'taskid',
                        yName: 'spentHours',
                        type: 'Line',
                        name: 'Spent Hours',
                        marker: { visible: true, width: 10, height: 10 }
                    }
                ],
                legendSettings: { visible: true }
            });
            var chartsContainer = args.detailElement.querySelector('#chartTemplate');
            if (chartsContainer) {
                taskData.forEach(function(data) {
                    chartsContainer.id = 'chartTemplate_' + data.Assignee;
                    chart.appendTo(chartsContainer);
                });
            }
        }
    });
    grid.appendTo('#Grid');

    function generateData(taskData) {
        var statusCategories = ['Open', 'InProgress', 'Testing', 'Close'];
        var statusData = statusCategories.map(function(status) {
            var filteredTasks = taskData.filter(function(task) { return task.Status === status;});
            var estimatedHours = filteredTasks.reduce(function(sum, task) { return sum + task.Estimate;}, 0);
            var spentHours = filteredTasks.reduce(function(sum, task) { return sum + task.Spent;}, 0);
            var taskid = '';
            if (filteredTasks.length) {
                taskid = filteredTasks[0].Id;
            }
            return { spentHours: spentHours, estimatedHours: estimatedHours, status: status, taskid: taskid };
        });
        return statusData;
    }
    window.employeeTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'image';
        var imgElement = document.createElement('img');
        imgElement.src = 'src/grid/images/' + e.EmployeeID.replace('Emp100', '') + '.png';
        imgElement.alt = e.EmployeeID;
        divElement.appendChild(imgElement);
        return divElement.outerHTML;
    };
};