/**
 * Sample
 */
this.default = function () {
    var dashboard = new ej.layouts.DashboardLayout({
            columns: 6,
            cellSpacing: [5, 5],
            cellAspectRatio: 100 / 85,
            panels: [
                {
                    'sizeX': 2, 'sizeY': 1, 'row': 0, 'col': 0,
                    content: '#card1'
                },
                {
                    'sizeX': 2, 'sizeY': 1, 'row': 0, 'col': 2,
                    content: '#card2'
                },
                {
                    'sizeX': 2, 'sizeY': 1, 'row': 0, 'col': 4,
                    content: '#card3'
                },
                {
                    'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 0,
                    header: '<div>Active Visitors</div>', content: '<div id="pie"></div>'
                },
                {
                    'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 2,
                    header: '<div>Regional Map</div>', content: '<div id="map"></div>'
                },
                {
                    'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 4,
                    header: '<div>Visitors by Type</div>', content: '<div id="colChart"></div>'
                },
                {
                    'sizeX': 4, 'sizeY': 2, 'row': 3, 'col': 2,
                    header: '<div>Traffic History</div>', content: '<div id="visitorsChart"></div>'
                },
                {
                    'sizeX': 2, 'sizeY': 2, 'row': 3, 'col': 0,
                    header: '<div>Usage Statistics</div>', content: '<div id="pieChart"></div>'
                },
            ]
    });
    dashboard.appendTo('#editLayout');
    var sidebarInstance = new ej.navigations.Sidebar({
        type: 'Over',
        dockSize: '60px',
        enableDock: true,
        target: '#target',
        closeOnDocumentClick: true
    });
    sidebarInstance.appendTo('#dockSidebar');

    var atcObj = new ej.dropdowns.AutoComplete({
        placeholder: 'Search Here',
        width: '215px'
    });
    atcObj.appendTo('#search');
    var centerTitle = document.createElement('div');
    centerTitle.innerHTML = 'Active <br> users  &nbsp';
    centerTitle.style.position = 'absolute';
    centerTitle.style.visibility = 'hidden';
    var pie = new ej.charts.AccumulationChart({
        enableSmartLabels: true,
        selectionMode: 'Point',
        series: [
            {
                dataSource: window.expenseData,
                xName: 'Device', yName: 'Amount', startAngle: 0,
                endAngle: 360, innerRadius: '35%',
                radius:'100%',
                dataLabel: {
                    visible: true, position: 'Inside',
                    name: 'text',
                    font: { color: 'white', fontWeight: '600', size: '14px' }
                }, name: 'Revenue',
                palettes: ['#357cd2', '#00bdae', '#e36593'],
            }
        ],
        legendSettings: {
            visible: false, toggleVisibility: false,
            position: 'Right', height: '28%', width: '44%'
        },
        animationComplete: function (args) {
            centerTitle.style.fontSize = getFontSize(args.accumulation.initialClipRect.width);
            var rect = centerTitle.getBoundingClientRect();
            centerTitle.style.top = (args.accumulation.origin.y - rect.height / 2) + 'px';
            centerTitle.style.left = (args.accumulation.origin.x - rect.width / 2) + 'px';
            centerTitle.style.visibility = 'visible';
            var points = args.accumulation.visibleSeries[0].points;
            for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
                var point = points_1[_i];
                if (point.labelPosition === 'Outside' && point.labelVisible) {
                    var label = document.getElementById('pie_datalabel_Series_0_text_' + point.index);
                    label.setAttribute('fill', 'black');
                }
            }
        },
        textRender: function (args) {
            args.series.dataLabel.font.size = getFontSize(pie.initialClipRect.width);
            pie.animateSeries = true;
        },
        tooltip: {
            enable: true,
            header: '<b>${point.x}</b>',
            format: 'Composition : <b>${point.y}%</b>'
        },
        width: '100%',
        height: '100%',
        load: themeAccumulation
    });
    pie.appendTo('#pie');
    document.getElementById('pie').appendChild(centerTitle);
    pie.refresh();
    function getFontSize(width) {
        if (width > 300) {
            return '13px';
        }
        else if (width > 250) {
            return '13px';
        }
        else {
            return '13px';
        }
    }
    var linechartObj = new ej.charts.Chart({
        //Initializing Primary Y Axis
        primaryYAxis: {
            maximum: 4, interval: 1,
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'MMM',
            majorGridLines: { width: 0 },
            intervalType: 'Months',
            edgeLabelPlacement: 'Shift'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                name: 'Jan', xName: 'x', yName: 'y', type: 'SplineArea',
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.5 },
                    { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.5 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.6 },
                    { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.7 },
                    { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.2 }
                ],
                border: { color: 'transparent' },
                fill: 'rgb(239, 183, 202)',
                opacity: 0.5
            },
            {
                name: 'Feb', xName: 'x', yName: 'y', type: 'SplineArea',
                fill: 'rgb(14, 64, 152, .6)',
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.8 },
                    { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.2 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.6 },
                    { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.7 },
                    { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.4 }
                ],
                border: { color: 'transparent' },
                opacity: 0.5
            }
        ],
        legendSettings: { visible: false },
        height: '100%',
        width: '100%',
        load: themeChart
    });
    linechartObj.appendTo('#visitorsChart');
    linechartObj.refresh();
    var columnChartObj = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        width: '100%',
        height: '100%',
        margin: { top: 30},
        //Initializing Primary X Axis
        primaryYAxis: {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Desktop',
                dataSource: [{ x: 'Jan', y: 46 }, { x: 'Feb', y: 27 }, { x: 'Mar', y: 26 }],
                marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
            },
            {
                fill: '#e36593',
                dataSource: [{ x: 'Jan', y: 37 }, { x: 'Feb', y: 23 }, { x: 'Mar', y: 18 }],
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Mobile',
                marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
               
            },
            {
                dataSource: [{ x: 'Jan', y: 38 }, { x: 'Feb', y: 17 }, { x: 'Mar', y: 26 }],
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Tablet',
                marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        load: themeChart,
        legendSettings: { visible: false }
    });
    columnChartObj.appendTo('#colChart');
    columnChartObj.refresh();
    var maps = new ej.maps.Maps({
        height: '100%',
        width: '100%',
        zoomSettings: {
            enable: false
        },
        legendSettings: {
            visible: false
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/dashboard-layout/worldmap.json'),
                shapePropertyPath: 'continent',
                shapeDataPath: 'continent',
                dataSource: new ej.maps.MapAjax('./src/dashboard-layout/datasource.json'),
                shapeSettings: {
                    colorValuePath: 'color',
                },
                markerSettings: [
                    {
                        visible: true,
                        dataSource: [
                            { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
                            { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
                            { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' },
                            { latitude: -23.5268201, longitude: -46.6489927, name: 'Bom Retiro' },
                            { latitude: 43.6533855, longitude: -79.3729994, name: 'Toronto' },
                            { latitude: 48.8773406, longitude: 2.3299627, name: 'Paris' },
                            { latitude: 52.4643089, longitude: 13.4107368, name: 'Berlin' },
                            { latitude: 19.1555762, longitude: 72.8849595, name: 'Mumbai' },
                            { latitude: 35.6628744, longitude: 139.7345469, name: 'Minato' },
                            { latitude: 51.5326602, longitude: -0.1262422, name: 'London' }
                        ],
                        shape: 'Image',
                        imageUrl: 'https://ej2.syncfusion.com/demos/src/maps/images/ballon.png',
                        height: 20,
                        width: 20,
                        offset: {
                            y: -10,
                            x: 0
                        },
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name'
                        },
                        animationDuration: 0
                    },
                ]
            },
        ],
        load: themeMaps
    });
    maps.appendTo('#map');
    var pieChart = new ej.charts.AccumulationChart({
        series: [
            {
                dataSource: [
                    { 'x': 'Desktop', y: 37, text: '60%' }, { 'x': 'Mobile', y: 17, text: '10%' },
                    { 'x': 'Tablet', y: 19, text: '20%' }
                ],
                dataLabel: {
                    visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600' }
                },
                radius: '100%', xName: 'x', yName: 'y', startAngle: 0, endAngle: 360, innerRadius: '0%',
                explode: true, name: 'Usage', explodeOffset: '10%', explodeIndex: 2
            }
        ],
        center: { x: '50%', y: '50%' },
        enableSmartLabels: true,
        legendSettings: { visible: false },
        width: '100%',
        height: '100%',
        load: themeAccumulation
    });
    pieChart.appendTo('#pieChart');
    pieChart.refresh();
    function themeChart(args) {
        var lineTheme = location.hash.split('/')[1];
        lineTheme = lineTheme ? lineTheme: 'Material';
        args.chart.theme = (lineTheme.charAt(0).toUpperCase() + lineTheme.slice(1)).replace(/-dark/i, 'Dark');
    }
    function themeAccumulation(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
    }
    function themeMaps(args) {
        var mapTheme = location.hash.split('/')[1];
        mapTheme = mapTheme ? mapTheme : 'Material';
        args.maps.theme = (mapTheme.charAt(0).toUpperCase() + mapTheme.slice(1)).replace(/-dark/i, 'Dark');
    }
};
