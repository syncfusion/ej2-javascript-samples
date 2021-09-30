/**
 *  Sample for dashboard panels
 */
this.default = function() {
    var dashboardInstance = new ej.layouts.DashboardLayout({
        cellSize: [290, 140],
        cellSpacing: [5, 5],
        swapping: true,
        floating: true
    });
    dashboardInstance.appendTo('#default');

    //ContextMenu items definition 
    var menuItems = [
        { text: 'Info' },
        { text: 'Export' },
        { text: 'Remove' }
    ];

    var chartData = [
        { x: 2011, y: 28 }, { x: 2012, y: 25 }, { x: 2013, y: 26 }, { x: 2014, y: 27 },
        { x: 2015, y: 32 }, { x: 2016, y: 35 }, { x: 2018, y: 30 }
    ];
    var chartData2 = [
        { x: 2011, y: 13 }, { x: 2012, y: 22 }, { x: 2013, y: 25 }, { x: 2014, y: 27 },
        { x: 2015, y: 28 }, { x: 2016, y: 35 }, { x: 2018, y: 40 }
    ];
    var chart = new ej.charts.Chart({
        primaryYAxis: {
            title: "Revenue Status"
        },
        series: [{
            dataSource: chartData,
            xName: 'x', yName: 'y',
            //Series type as line
            type: 'Line',
            marker: {
                visible: true,
                width: 5, height: 5,
                shape: 'Circle'
            }
        }, {
            dataSource: chartData2,
            xName: 'x', yName: 'y',
            type: 'Line',
            marker: {
                visible: true,
                width: 5, height: 5,
                shape: 'Circle'
            }
        }],
        height: '240px',
        legendSettings: { visible: true },
        tooltip: { enable: true }
    });
    chart.appendTo('#chart_element');

    var piechart = new ej.charts.AccumulationChart({
        series: [
            {
                dataSource: [{ x: 'Support', y: 80 }, { x: 'Development', y: 90 }, { x: 'Sales', y: 70 }, { x: 'Facilities', y: 60 }, { x: 'License', y: 75 }],
                type: 'Pie',
                xName: 'x',
                yName: 'y',
                legendShape: 'Rectangle'
            }
        ],
        height: '240px',
        width: '550px',
        legendSettings: { visible: true },
        tooltip: { enable: true }
    });
    piechart.appendTo('#pie_chart');

    var menuOptions = {
        target: '.contextmenutarget',
        items: menuItems
    };
    var chartMenuInstance = new ej.navigations.ContextMenu(menuOptions, '#chartTarget');
    var pieChartInstance = new ej.navigations.ContextMenu(menuOptions, '#pieTarget');
};
