/**
 * Sample for grouping in Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [ { x: 'China', y: 40, text: 'China: 40' },
                    { x: 'Japan', y: 20, text: ej.base.Browser.isDevice ? 'Japan:<br> 20' : 'Japan: 20' },
                    { x: 'Australia', y: 18, text: ej.base.Browser.isDevice ? 'Australia:<br> 18' : 'Australia: 18' },
                    { x: 'France', y: 16, text: 'France: 16' },
                    { x: 'Netherlands', y: 15, text: 'Netherlands: 15' },
                    { x: 'Great Britain', y: 14, text: 'Great Britain: 14' },
                    { x: 'South Korea', y: 13, text: 'South Korea: 13' },
                    { x: 'Germany', y: 12, text: ej.base.Browser.isDevice ? 'Germany:<br> 12' : 'Germany: 12' },
                    { x: 'Italy', y: 12, text: ej.base.Browser.isDevice ? 'Italy:<br> 12' : 'Italy: 12' },
                    { x: 'Canada', y: 9, text: ej.base.Browser.isDevice ? 'CA: 9' : 'Canada: 9' },
                    { x: 'Hungary', y: 6, text: ej.base.Browser.isDevice ? 'HU: 6' : 'Hungary: 6' },
                    { x: 'Spain', y: 5, text: 'Spain: 5' },
                    { x: 'Kenya', y: 4, text: 'Kenya: 4' },
                    { x: 'Brazil', y: 3, text: 'Brazil: 3' }
                ],
                animation: { enable: true },
                explode: true,
                dataLabel: {
                    visible: true,
                    name: 'text',
                    position: 'Outside',
                    connectorStyle: { type: 'Curve', length: ej.base.Browser.isDevice ? '10px' : '20px' },
                    font: {
                        fontWeight : '600', size: ej.base.Browser.isDevice ? '8px' : '13px'
                    }
                },
                radius: ej.base.Browser.isDevice ? '40%' : '55%', 
                xName: 'x',
                yName: 'y',
                name:'Summer Olympics',
                groupTo: '9',
				groupMode: 'Point',
                startAngle: -20,
                endAngle: 340, borderRadius: 3, border: { width: 1, color: '#ffffff' },
                innerRadius: '0%',
            }
        ],
        enableSmartLabels: true,
        legendSettings: {
            visible: false,
        },
        //Initializing Tooltip
        tooltip: { enable: true , header:'', format:"<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", enableHighlight: true },
        enableBorderOnMouseMove:false,
        //Initializing Title
        title: 'Summer Olympic 2024 - Gold Medals',
        subTitle: 'Source: wikipedia.org',
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