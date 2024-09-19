window.render = function (args) {
    for (var i = 0; i < 51; i++) {
        var line = new ej.charts.Sparkline({
            height: '50px',
            width: '150px'
        });
        line.appendTo('#spkline' + i);
        var column = new ej.charts.Sparkline({
            height: '50px',
            width: '150px',
            type: 'Column',
        });
        column.appendTo('#spkarea' + i);
        var winloss_1 = new ej.charts.Sparkline({
            height: '50px',
            width: '150px',
            type: 'WinLoss',
        });
        winloss_1.appendTo('#spkwl' + i);
    }
};
window.winloss = function () {
    var windata = [];
    var r;
    for (var i = 1; i <= 12; i++) {
        r = Math.random();
        if (r <= 0.2) {
            windata.push(-Math.random() * 10);
        }
        else {
            windata.push(Math.random() * 10);
        }
    }
    return windata;
};

window.getSparkData = function (type, count) {
    if (type === 'line') {
        return window.lineData[count];
    }
    else {
        return window.columnData[count];
    }
};
this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: new ej.data.DataManager(window.orderdata).executeLocal(new ej.data.Query().take(20)),
        allowSelection: false,
        enableColumnVirtualization: false,
        enableHover: true,
        height: 400,
        columns: [
            { field: 'EmployeeID', headerText: 'ID', textAlign: 'Right', width: 40 },
            { field: 'CustomerID', headerText: 'Name', width: 60 },
            { field: 'OrderDate', headerText: 'Order Date', width: 65, format: 'yMd', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 70 },
            { headerText: 'Tax per annum', template: '#columnTemplate1', textAlign: 'Center', width: 100 },
            { headerText: 'One Day Index', template: '#columnTemplate2', textAlign: 'Center', width: 100 },
            { headerText: 'Year GR', template: '#columnTemplate3', textAlign: 'Center', width: 100 }
        ],
    });
    grid.appendTo('#Grid');
    // custom code start
    function load(args) {
        var gridtheme = location.hash.split('/')[1];
        gridtheme = gridtheme ? gridtheme : 'Fluent2';                          
        args.sparkline.theme = (gridtheme.charAt(0).toUpperCase() + gridtheme.slice(1));                  
    }
    // custom code end
    setTimeout(function () {
        for (var i = 1; i < 21; i++) {
            var line = new ej.charts.Sparkline({
                height: '50px',
                width: '150px',
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                dataSource: getSparkData('line', i)
            });
            line.appendTo('#spkline' + i);
            var column = new ej.charts.Sparkline({
                height: '50px',
                width: '150px',
                type: 'Column',
                valueType: 'Numeric',
                fill: '#3C78EF',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', i)
            });
            column.appendTo('#spkarea' + i);
            var winloss_1 = new ej.charts.Sparkline({
                height: '50px',
                width: '150px',
                type: 'WinLoss',
                valueType: 'Numeric',
                fill: '#3C78EF',
                tiePointColor: 'darkgray',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', i)
            });
            winloss_1.appendTo('#spkwl' + i);
        }
    }, 500);
};