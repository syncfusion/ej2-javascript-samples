this.default = function () {
    var treegridObj = new ej.treegrid.TreeGrid({
        dataSource: window.textdata,
        childMapping: 'Children',
        treeColumnIndex: 0,
        rowDataBound: function (args) {
            var data = ej.grids.getObject('EmployeeID', args.data);
            var spkline = args.row.querySelector('#spkline' + data);
            var spkarea = args.row.querySelector('#spkarea' + data);
            var spkwl = args.row.querySelector('#spkwl' + data);
            var line = new ej.charts.Sparkline({
                height: '50px',
                width: '150px', load: sparkload,
                lineWidth: 2,
                valueType: 'Numeric',
                fill: '#3C78EF',
                dataSource: getSparkData('line', +data)
            });
            line.appendTo(spkline);
            var column = new ej.charts.Sparkline({
                height: '50px',
                width: '150px', load: sparkload,
                type: 'Column',
                valueType: 'Numeric',
                fill: '#3C78EF',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', +data)
            });
            column.appendTo(spkarea);
            var winloss = new ej.charts.Sparkline({
                height: '50px',
                width: '150px', load: sparkload,
                type: 'WinLoss',
                valueType: 'Numeric',
                fill: '#3C78EF',
                tiePointColor: 'darkgray',
                negativePointColor: '#f7a816',
                dataSource: getSparkData('column', +data)
            });
            winloss.appendTo(spkwl);
        },
        rowHeight: 83,
        columns: [
            { field: 'EmpID', headerText: 'Employee ID', width: 180 },
            { field: 'Name', headerText: 'Name', width: 170 },
            { field: 'DOB', headerText: 'DOB', width: 110, textAlign: 'Right', format: 'yMd' },
            {
                headerText: 'Tax per annum', textAlign: 'Center',
                template: '#columnTemplate1', width: 170
            },
            {
                headerText: 'One day index', textAlign: 'Center',
                template: '#columnTemplate2', width: 170
            },
            {
                headerText: 'Year GR', textAlign: 'Center',
                template: '#columnTemplate3', width: 180
            },
        ],
        width: 'auto',
        height: 359
    });
    treegridObj.appendTo('#TreeGrid');
};	
// custom code start
function sparkload (args) {
    var theme = location.hash.split('/')[1];
    theme = theme ? theme : 'Material';
    args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
}	
// custom code end
function getSparkData (type, count) {
    if (type === 'line') {
        return window.lineData[count];
    }
    else {
        return window.columnData[count];
    }
}
