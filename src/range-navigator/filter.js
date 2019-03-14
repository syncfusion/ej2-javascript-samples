/**
 * Sample range navigator with filter functionalities
 */
 var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
    this.renderFilterChart = function (datasrc) {
        var grid = new ej.grids.Grid({
            height: '350',
            width: ej.base.Browser.isDevice ? '100%' : '80%',
            columns: [
                { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Center' },
                { field: 'FirstName', headerText: 'Name', textAlign: 'Center' },
                { field: 'Title', headerText: 'Title', textAlign: 'Center' },
                {
                    field: 'HireDate', headerText: 'Hire Date', textAlign: 'Center',
                    format: { skeleton: 'yMd', type: 'date' }
                }
            ],
        });
        grid.appendTo('#grid');
        var range = new ej.charts.RangeNavigator({
            animationDuration: 500,
            width: ej.base.Browser.isDevice ? '100%' : '80%',
            value: [new Date(1992, 5, 1), new Date(1993, 4, 1)],
            valueType: 'DateTime',
            allowSnapping: true,
            intervalType: 'Quarter',
            enableGrouping: true,
            groupBy: 'Years',
            enableDeferredUpdate: true,
            dataSource: datasrc, xName: 'HireDate', yName: 'yValue',
            changed: function (args) {
                grid.dataSource = datasrc.filter(function (data) {
                    return (data.HireDate >= new Date(+args.start) && data.HireDate <= new Date(+args.end));
                });
                grid.refresh();
            },
            theme: theme
        });
        range.appendTo('#container');
    };
    this.default = function () {
        var datasrc;
        var ajax = new ej.base.Ajax('./src/range-navigator/data-source/grid-data.json', 'GET', true);
        ajax.send().then();
        ajax.onSuccess = function (data) {
            datasrc = JSON.parse(data);
            datasrc.map(function (data) {
                data.HireDate = new Date(data.HireDate);
            });
            _this.renderFilterChart(datasrc);
        };
    };