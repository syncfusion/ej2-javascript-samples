/**
 * Sample for grouping in Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [ { 'x': 'Australia', y: 26, text: 'Australia: 26' },
                { 'x': 'Russia', y: 19, text: 'Russia: 19' },
                { 'x': 'Germany', y: 17, text: 'Germany: 17' },
                { 'x': 'Japan', y: 12, text: 'Japan: 12' },
                { 'x': 'China', y: 10, text: 'China: 10' },
                { 'x': 'South Korea', y: 9, text: 'South Korea: 9' },
                { 'x': 'Great Britain', y: 27, text: 'Great Britain: 27' },
                { 'x': 'Italy', y: 8, text: 'Italy: 8' },
                { 'x': 'France', y: 8, text: 'France: 8' },
                { 'x': 'Spain', y: 7, text: 'Spain: 7' },
                { 'x': 'Hungary', y: 8, text: 'Hungary: 8' },
                { 'x': 'Brazil', y: 7, text: 'Brazil: 7' },
                { 'x': 'Netherlands', y: 8, text: 'Netherlands: 8' },
                { 'x': 'Kenya', y: 6, text: 'Kenya: 6' },
                ],
                animation: { enable: true },
                explode: true,
                dataLabel: {
                    visible: true,
                    position: 'Outside',
                    connectorStyle: { type: 'Curve', length: '20px' },
                    font: {
                        fontWeight : '600'
                    }
                },
                radius: ej.base.Browser.isDevice ? '40%' : '70%', 
                xName: 'x',
                yName: 'y',
                groupTo: '9',
				groupMode: 'Point',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '0%',
            }
        ],
        pointRender: function (args) {
            if (args.point.isClubbed || args.point.isSliced) {
                args.fill = '#D3D3D3';
            }
        },
        enableSmartLabels: true,
        legendSettings: {
            visible: false,
        },
        textRender: function (args) {
            args.text = args.point.x + ' ' + args.point.y;
        },
        //Initializing Tooltip
        tooltip: { enable: true ,format:"<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", enableHighlight: true },
        enableBorderOnMouseMove:false,
        //Initializing Title
        title: 'Rio Olympic Gold Medals',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });
    pie.appendTo('#grouping-container');
    function clubchange(value) {
        pie.series[0].groupTo = value.toString();
        pie.series[0].animation.enable = false;
        document.getElementById('clubvalue').innerHTML = value.toString();
        pie.removeSvg();
        pie.refreshSeries();
        pie.refreshChart();
    }
    document.getElementById('clubpoint').onchange = function (e) {
        clubchange(+document.getElementById('clubpoint').value);
    };  
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            var currentValue = mode.value === 'Point' ? 9 : 8;
            document.getElementById('clubpoint').value = currentValue.toString();
            pie.series[0].groupMode = mode.value;
            clubchange(currentValue);
        }
    });
    mode.appendTo('#mode');
};