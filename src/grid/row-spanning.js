this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.columnSpanData,
        queryCellInfo: QueryCellEvent,
        gridLines: 'Both',
        enableHover: false,
        allowSelection: false,
            columns: [
                { field: 'EmployeeID', headerText: 'Employee ID', freeze: 'Left', isPrimaryKey: true, textAlign: 'Right', width: 150 },
                { field: 'EmployeeName', headerText: 'Employee Name', width: 200 },
                { field: '9:00', headerText: '9.00 AM', width: 120 },
                { field: '9:30', headerText: '9.30 AM', width: 120 },
                { field: '10:00', headerText: '10.00 AM', width: 120 },
                { field: '10:30', headerText: '10.30 AM', width: 120 },
                { field: '11:00', headerText: '11.00 AM', width: 120 },
                { field: '11:30', headerText: '11.30 AM', width: 120 },
                { field: '12:00', headerText: '12.00 PM', width: 120 },
                { field: '12:30', headerText: '12.30 PM', width: 120 },
                { field: '1:00', headerText: '1.00 PM', width: 120 },
                { field: '1:30', headerText: '1.30 PM', width: 120 },
                { field: '2:00', headerText: '2.00 PM', width: 120 },
                { field: '2:30', headerText: '2.30 PM', width: 120 },
                { field: '3:00', headerText: '3.00 PM', width: 120 },
                { field: '3:30', headerText: '3.30 PM', width: 120 },
                { field: '4:00', headerText: '4.00 PM', width: 120 },
                { field: '4:30', headerText: '4.30 PM', width: 120 },
                { field: '5:00', headerText: '5.00 PM', width: 120 }
            ],
        width: 'auto',
        height: 'auto',
        allowTextWrap: true,
    });
    grid.appendTo('#Grid');
};
function QueryCellEvent(args) {
    var data = args.data;
    switch (data.EmployeeID) {
            case 10001:
                if (args.column.field === '9:00' || args.column.field === '2:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '1:00') {
                    args.colSpan = 3;
                    args.rowSpan = 10;
                } else if (args.column.field === '4:30') {
                    args.colSpan = 2;
                    args.rowSpan = 2;
                } else if (args.column.field === 'EmployeeName') {
                     args.rowSpan = 2;
                 }
                break;
            case 10002:
                if (args.column.field === '9:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '2:30') {
                    args.colSpan = 2;
                    args.rowSpan = 5;
                } else if (args.column.field === '3:30') {
                    args.colSpan = 2;
                }
                break;
            case 10003:
                if (args.column.field === '9:00') {
                    args.colSpan = 3;
                    args.rowSpan = 2;
                } else if (args.column.field === '10:30' || args.column.field === '3:30' || args.column.field === '4:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                }
                break;
            case 10004:
                if (args.column.field === '11:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '4:00') {
                    args.colSpan = 2;
                }
                break;
            case 10005:
                if (args.column.field === '9:00') {
                    args.colSpan = 4;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '3:30') {
                    args.colSpan = 2;
                    args.rowSpan = 2;
                } else if (args.column.field === '4:30') {
                    args.colSpan = 2;
                }
                break;
        default: rowSpanIteration(args, data.EmployeeID);
        }
}
function rowSpanIteration(args, value) {
    switch (value) {
        case 10006:
                if (args.column.field === '9:00' || args.column.field === '4:30') {
                    args.colSpan = 2;
                } else if (args.column.field === '10:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                }
                break;
        case 10007:
                if (args.column.field === '9:00' || args.column.field === '10:30' || args.column.field === '3:00') {
                    args.colSpan = 2;
                } else if (args.column.field === '11:30' || args.column.field === '4:00') {
                    args.colSpan = 3;
                }
                break;
            case 10008:
                if (args.column.field === '9:00' || args.column.field === '10:30') {
                    args.colSpan = 3;
                } else if (args.column.field === '2:30') {
                    args.colSpan = 3;
                    args.rowSpan = 2;
                } else if (args.column.field === '4:00') {
                    args.colSpan = 2;
                }
                break;
            case 10009:
                if (args.column.field === '9:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '11:30') {
                    args.colSpan = 3;
                    args.rowSpan = 2;
                } else if (args.column.field === '4:30') {
                    args.colSpan = 2;
                }
                break;
            case 10010:
                if (args.column.field === '9:00' || args.column.field === '2:30' || args.column.field === '4:00') {
                    args.colSpan = 3;
                } else if (args.column.field === '10:30') {
                    args.colSpan = 2;
                }
                break;
            }
    }