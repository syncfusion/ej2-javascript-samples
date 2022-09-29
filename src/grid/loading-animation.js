this.default = function () {
    var indicatortypes = [
        { id: 'Shimmer', type: 'Shimmer' },
        { id: 'Spinner', type: 'Spinner' },
    ];
    var data = new ej.data.DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/UrlDataSource',
        adaptor: new ej.data.UrlAdaptor()
    });
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        allowFiltering: true,
        allowSorting: true,
        loadingIndicator: { indicatorType: 'Shimmer' },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', width: 130,  textAlign: 'Right' },
            { field: 'Employees', headerText: 'Employee Name', width: 150 },
            { field: 'Designation', headerText: 'Designation', width: 120 },
            { field: 'CurrentSalary', headerText: 'Current Salary', format: "C2", textAlign: 'Right', width: 140 }
        ],
        pageSettings: { pageCount: 3 }
    });
    grid.appendTo('#Grid');

    var dropDownListObject = new ej.dropdowns.DropDownList({
        dataSource: indicatortypes,
        fields: { text: 'type', value: 'id' },
        value: 'Shimmer',
        change: function (e) {
            if (dropDownListObject.value === 'Shimmer') {
                grid.loadingIndicator.indicatorType = 'Shimmer';
                grid.refresh();
            } else {
                grid.loadingIndicator.indicatorType = 'Spinner';
                grid.refresh();
            }
        },
    });
    dropDownListObject.appendTo('#animation');
};