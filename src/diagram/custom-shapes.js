// Enable ripple effect on the window
ej.base.enableRipple(window.ripple);
// Inject necessary dependencies for the diagram
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.charts.Chart);/**

 * Getting started -  Html Node
 */

// tslint:disable-next-line:max-func-body-length
// Set up initial variables and data structures required for data processing and visualization

var pie;
var grid;
var dataSource = new ej.data.DataManager(window.expenseData);
var tempData = dataSource.dataSource.json;
var pieRenderingData = [];
var pieLegendData = [];
var columnIncomeDS = [];
var columnExpenseDS = [];
var lineDS = [];
var tempChartIncomeDS = {};
var tempChartExpenseDS = {};
var tempChartLineDS = {};
var curDateTime;
var lineD = [];
var expTotal;
var groupValue;
var pieRenderData = [];


// Define predicates for filtering data based on date range
var predicateStart = new ej.data.Predicate('DateTime', 'greaterthanorequal', window.startDate);
var predicateEnd = new ej.data.Predicate('DateTime', 'lessthanorequal', window.endDate);
//Compound predicate by combining predicateStart and predicateEnd
var predicate = predicateStart.and(predicateEnd);
this.default = function () {

    var shape = { type: 'HTML' };
    var constraints = ej.diagrams.NodeConstraints.Default & ~(ej.diagrams.NodeConstraints.Resize | ej.diagrams.NodeConstraints.Rotate);
    var nodes = [{
        id: 'node', offsetX: 10, offsetY: 100, width: 1050, height: 450, shape: shape, constraints: constraints
    },
    {
        id: 'node2', offsetX: 276, offsetY: 550, width: 512, height: 408, shape: shape, constraints: constraints
    },
    {
        id: 'node3', offsetX: -257, offsetY: 550, width: 512, height: 408, shape: shape, constraints: constraints
    },
    {
        id: 'node4', offsetX: 409, offsetY: -151, width: 250, height: 30, shape: shape, constraints: constraints
    },
    {
        id: 'node5', offsetX: -434, offsetY: -157, width: 250, height: 30,
        style: { fill: 'transparent', strokeColor: 'transparent' },
        constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Select,
        annotations: [{
            content: "EXPENSE TRACKER",
            style: { fontSize: 16, color: "#797979", bold: true }
        }]
    }];

    //initialize the diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '900px', nodes: nodes,
        backgroundColor: '#F5F5F5',
        nodeTemplate: '#nodetemplate',
        created: function () { diagram.fitToPage(); }
    });
    diagram.appendTo('#diagram');
    getTotalExpense();
    initialRender();
    // Initialize pie chart and grid
    pie = new ej.charts.AccumulationChart({
        enableSmartLabels: true, width: '100%', height: '350px', series: getSeries(),
        legendSettings: { visible: true }, textRender: function (args) {
            args.series.dataLabel.font.size = '13px';
            pie.animateSeries = true; if (args.text.indexOf('Others') > -1) { args.text = 'Others'; }
        },
    });
    pie.appendTo('#pieChart');
    createLegendData('pie');
    grid = new ej.grids.Grid({
        width: '40%', dataSource: pieRenderData, rowTemplate: '#rowtemplate',
        columns: [{ width: '10%', textAlign: 'Center' },
        { width: '50%' },
        { width: '20%' },
        { width: '20%' }],
    });
    grid.appendTo('#grid');

    // Initialize date range picker
    var dateRangePickerObject = new ej.calendars.DateRangePicker({
        format: 'MM/dd/yyyy', change: onDateRangeChange, startDate: window.startDate,
        min: new Date(2017, 5, 1), max: new Date(2017, 10, 30),
        endDate: window.endDate, showClearButton: false, allowEdit: false,
        presets: [
            { label: 'Last Month', start: new Date('10/1/2017'), end: new Date('10/31/2017') },
            { label: 'Last 3 Months', start: new Date('9/1/2017'), end: new Date('11/30/2017') },
            { label: 'All Time', start: new Date('6/1/2017'), end: new Date('11/30/2017') }
        ]
    });
    dateRangePickerObject.appendTo('#daterange');
    window.startDate = dateRangePickerObject.startDate;
    window.endDate = dateRangePickerObject.endDate;
    
};
//Function to get series data for the pie chart
function getSeries() {
    var series = [
        {
            dataSource: pieRenderingData, xName: 'text', yName: 'y', radius: '83%', startAngle: 0, endAngle: 360,
            innerRadius: '50%', dataLabel: {
                name: 'x', visible: true, position: 'Outside', connectorStyle: { length: '10%' },
                font: { color: 'Black', size: '14px', fontFamily: 'Roboto' }
            },
            animation: { enable: false },
            palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                '#8854D9', '#3D4EB8', '#00BCD7']
        }
    ];
    return series;
}

// Function to handle date range change
function onDateRangeChange(args) {
    window.startDate = args.startDate;
    window.endDate = args.endDate;
    predicateStart = new ej.data.Predicate('DateTime', 'greaterthanorequal', args.startDate);
    predicateEnd = new ej.data.Predicate('DateTime', 'lessthanorequal', args.endDate);
    predicate = predicateStart.and(predicateEnd);
    initialRender();
    getTotalExpense();
    pie.series = getSeries();
    pie.dataBind();
    pie.refresh();
    createLegendData('pieUpdate');
    grid.dataSource = pieRenderData;
    grid.dataBind();
    grid.refresh();
}
function initialRender() {
    //DataManager is a class provided by Syncfusion's Essential JS 2 library for data operations.
    new ej.data.DataManager(window.expenseData)
        .executeQuery(new ej.data.Query().where(predicate.and('TransactionType', 'equal', 'Expense')))
        .then(function (e) {
            getColumnChartExpenseDS(e);
        });
    new ej.data.DataManager(window.expenseData)
        .executeQuery(new ej.data.Query().where(predicate.and('TransactionType', 'equal', 'Income')))
        .then(function (e) {
            getColumnChartIncomeDS(e);
            var columnChartObj = new ej.charts.Chart({
                width: '100%', height: '400px',
                primaryXAxis: { labelFormat: 'MMM', valueType: 'DateTime', intervalType: 'Months', edgeLabelPlacement: 'Shift' },
                primaryYAxis: { minimum: 3000, maximum: 9000, labelFormat: 'c0' },
                useGroupingSeparator: true,
                series: [{
                    type: 'Column', dataSource: columnIncomeDS, xName: 'DateTime', width: 2, yName: 'Amount',
                    name: 'Income', legendShape: 'Circle', marker: { visible: true, height: 10, width: 10 },
                    border: { width: 0.5, color: '#A16EE5' },
                    fill: '#A16EE5', animation: { enable: false },
                },
                {
                    type: 'Column', legendShape: 'Circle', name: 'Expense', dataSource: columnExpenseDS, xName: 'DateTime',
                    width: 2, yName: 'Amount', marker: { visible: true, height: 10, width: 10 }, fill: '#4472C4',
                    animation: { enable: false },
                },
                ],
                annotations: [{
                    content: '<p style="font-family:Roboto;font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: #797979 !important;">Income - Expense</p>',
                    x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart'
                }],
                margin: { top: 90 },
                legendSettings: { visible: true },
                titleStyle: { textAlignment: 'Near', fontWeight: '500', size: '16', color: '#000' },
                tooltip: { fill: '#707070', enable: true, shared: true, format: '${series.name} : ${point.y}', header: 'Month - ${point.x} ', }
            });
            columnChartObj.appendTo('#barChart');
            var content = '<p style="font-family:Roboto;font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: #797979 !important;">Account - Balance</p>';
            getLineChartDS();
            var linechartObj = new ej.charts.Chart({
                width: '100%', height: '400px',
                primaryXAxis: { valueType: 'DateTime', labelFormat: 'MMM', majorGridLines: { width: 0 }, intervalType: 'Months' },
                primaryYAxis: { maximum: 1800, interval: 300, labelFormat: 'c0', },
                useGroupingSeparator: true,
                chartArea: { border: { width: 0 } },
                annotations: [{ content: content, x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart' }],
                titleStyle: {
                    textAlignment: 'Near', fontWeight: '500', size: '16', color: '#000'
                },
                series: [{
                    type: 'Area', dataSource: lineDS, xName: 'DateTime', width: 2, marker: {
                        visible: true, width: 10, height: 10,
                        fill: 'white', border: { width: 2, color: '#0470D8' },
                    }, yName: 'Amount', name: 'Amount', fill: 'rgba(4, 112, 216, 0.3)',
                    border: { width: 0.5, color: '#0470D8' }
                },
                ],
                margin: { top: 90 }, tooltip: {
                    fill: '#707070', enable: true, shared: true, format: '${series.name} : ${point.y}',
                    header: 'Month - ${point.x} '
                }
            });
            linechartObj.appendTo('#lineChart');
        });
}

// Function to calculate total expenses and prepare data for pie chart rendering
function getTotalExpense() {
    //Calculate total expense
    expTotal = 0;
    //This array will store unique expense categories extracted from the data.
    var category = [];
    //This array will store the expense data for each category.
    var legendData = [];
    //This array will store data in a format suitable for rendering the pie chart.
    var renderingData = [];
    // Iterate through each expense item in the data
    tempData.forEach(function (item) {
        if (item.TransactionType === 'Expense' && window.startDate.valueOf() <= item.DateTime.valueOf() && window.endDate.valueOf() >= item.DateTime.valueOf()) {
            expTotal += Number(item.Amount);
            legendData.push(item);
            if (category.indexOf(item.Category) < 0) {
                category.push(item.Category);
            }
        }
    });
    // Iterate through each unique expense category
    category.forEach(function (str) {
        var total = 0;
        legendData.forEach(function (item) {
            if (str === item.Category) {
                total += Number(item.Amount);
            }
        });
        var percent = ((total / expTotal) * 100).toFixed(2) + '%';
        renderingData.push({ x: str, y: total, text: percent });
    });
    pieRenderingData = new ej.data.DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal((new ej.data.Query().sortByDesc('y')));
    if (pieRenderingData.length > 10) {
        var temp = new ej.data.DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal((new ej.data.Query().sortByDesc('y').range(0, 9)))[8];
        groupValue = temp.y - 1;
        var hiGridData = new ej.data.DataManager(JSON.parse(JSON.stringify(renderingData))).executeLocal((new ej.data.Query().sortByDesc('y').skip(9)));
    }
}
// Function to get data for column chart (expense) ( bar & line chart)
function getColumnChartExpenseDS(e) {
    columnExpenseDS = [];
    tempChartExpenseDS = [];
    var result = objectAssign(e);
    for (var i = 0; i < result.length - 1; i++) {
        var cur = result[i];
        if (cur.DateTime.getMonth() in tempChartExpenseDS) {
            curDateTime = tempChartExpenseDS[cur.DateTime.getMonth()];
            tempChartExpenseDS[cur.DateTime.getMonth()].Amount = parseInt(curDateTime.Amount, 0) + parseInt(cur.Amount, 0);
        } else {
            tempChartExpenseDS[cur.DateTime.getMonth()] = cur;
            tempChartExpenseDS[cur.DateTime.getMonth()].DateTime = new Date(new Date(tempChartExpenseDS[cur.DateTime.getMonth()].DateTime.setHours(0, 0, 0, 0)).setDate(1));
        }
    }
    for (var data in tempChartExpenseDS) {
        columnExpenseDS.push(tempChartExpenseDS[data]);
    }
}

// Function to get data for column chart (income)( bar & line chart)
function getColumnChartIncomeDS(e) {
    columnIncomeDS = [];
    tempChartIncomeDS = [];
    var result = objectAssign(e);
    for (var i = 0; i < result.length - 1; i++) {
        var cur = result[i];
        if (cur.DateTime.getMonth() in tempChartIncomeDS) {
            curDateTime = tempChartIncomeDS[cur.DateTime.getMonth()];
            tempChartIncomeDS[cur.DateTime.getMonth()].Amount = parseInt(curDateTime.Amount, 0) + parseInt(cur.Amount, 0);
        } else {
            tempChartIncomeDS[cur.DateTime.getMonth()] = cur;
            tempChartIncomeDS[cur.DateTime.getMonth()].DateTime = new Date(new Date(tempChartIncomeDS[cur.DateTime.getMonth()].DateTime.setHours(0, 0, 0, 0)).setDate(1));
        }
    }
    for (var data in tempChartIncomeDS) {
        columnIncomeDS.push(tempChartIncomeDS[data]);
    }
}

// Function to combine objects and arrays
function objectAssign(e) {
    var result = [];
    var obj;
    obj = ej.base.extend(obj, e.result, {}, true);
    for (var data = 0; data <= Object.keys(e.result).length; data++) {
        result.push(obj[data]);
    }
    return result;
}

// Function to prepare data for the line chart
function getLineChartDS() {
    lineD = [];
    lineDS = [];
    tempChartLineDS = [];
    tempChartLineDS = columnIncomeDS.concat(columnExpenseDS);
    for (var i = 0; i < tempChartLineDS.length; i++) {
        var cur = tempChartLineDS[i];
        if (cur.DateTime.getMonth() in lineD) {
            curDateTime = lineD[cur.DateTime.getMonth()];
            lineD[cur.DateTime.getMonth()].Amount = Math.abs((parseInt(curDateTime.Amount, 0) - parseInt(cur.Amount, 0)));
        } else {
            lineD[cur.DateTime.getMonth()] = cur;
        }
    }
    for (var data = 0; data <= lineD.length; data++) {
        if (lineD[data]) {
            lineDS.push(lineD[data]);
        }
    }
}

// Function to create legend data for the pie chart (% value in pie chart)
function createLegendData(initiate) {
    if (pieRenderingData.length > 10) {
        pie.series[0].groupTo = groupValue.toString();
        pie.dataBind();
        pie.refresh();
    }
    if (initiate === 'pieUpdate' || pieLegendData.length === 0) {
        pieLegendData = [];
        pieLegendData = pie.visibleSeries[0].points;
    }
    pie.legendSettings.visible = false;
    pie.dataBind();
    for (var i = 0; i < pieLegendData.length; i++) {
        var data = pieLegendData[i];
        if (data.text.indexOf('Others') > -1) {
            data.x = ((data.y / expTotal) * 100).toFixed(2).toString() + '%';
        }
        pieRenderData.push(data);
    }
}
