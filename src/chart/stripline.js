/**
 * Sample for StripLine
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', majorGridLines: { width: 0 },
            //Initializing StripLines
            stripLines: [
                {
                    start: -1, end: 1.5, text: 'Winter', color: 'url(#winter)',
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                    border: { width: 0 }, rotation: -90, visible: true
                }, {
                    start: 1.5, end: 3.5, text: 'Summer', color: 'url(#summer)',
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                    border: { width: 0 }, rotation: -90, visible: true
                }, {
                    start: 3.5, end: 4.5, text: 'Spring', color: 'url(#spring)',
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                    border: { width: 0 }, rotation: -90, visible: true
                }, {
                    start: 4.5, end: 5.5, text: 'Autumn', color: 'url(#autumn)',
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                    border: { width: 0 }, rotation: -90, visible: true
                }, {
                    start: 5.5, end: 7, text: 'Winter', color: 'url(#winter)',
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                    border: { width: 0 }, rotation: -90, visible: true
                }
            ]
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 10, maximum: 40, interval: 5,
            lineStyle: { color: '#808080' }, labelFormat: '{value} °C', rangePadding: 'None',
            stripLines: [
                {
                    start: 30, end: 40, text: 'High Temperature', color: '#ff512f', visible: false,
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 },
                }, {
                    start: 20, end: 30, text: 'Average Temperature', color: '#fc902a', visible: false,
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 },
                }, {
                    start: 10, end: 20, text: 'Low Temperature', visible: false,
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' }, border: { width: 0 }, color: '#f9d423'
                }
            ]
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: [
                    { x: 'Sun', y: 28 }, { x: 'Mon', y: 27 }, { x: 'Tue', y: 33 }, { x: 'Wed', y: 36 },
                    { x: 'Thu', y: 28 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 31 }
                ],
                xName: 'x', width: 2, yName: 'y', fill: '#ffffff', type: 'Line', name: 'Weather',
                marker: { visible: true, width: 10, height: 10, border: { width: 2, color: '#ffffff' }, fill: '#666666' },
            },
        ],
        //Initializing Chart Title
        title: 'Weather Report',
        //Initializing Tooltip
        tooltip: {
            enable: true
        },
        legendSettings: { visible: true },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
    });
    chart.appendTo('#strip-container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            if (mode.value === 'Vertical') {
                for (var i = 0; i < 3; i++) {
                    chart.primaryYAxis.stripLines[i].visible = false;
                }
                for (var j = 0; j <= 4; j++) {
                    chart.primaryXAxis.stripLines[j].visible = true;
                }
            } else {
                for (var k = 0; k < 3; k++) {
                    chart.primaryYAxis.stripLines[k].visible = true;
                }
                for (var m = 0; m <= 4; m++) {
                    chart.primaryXAxis.stripLines[m].visible = false;
                }
            }
            chart.refresh();
        }
    });
    mode.appendTo('#mode');
};