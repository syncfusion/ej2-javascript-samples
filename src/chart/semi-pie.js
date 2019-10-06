/**
 * Sample for semi Pie chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [
                    { x: 'Australia', y: 53, text: 'AUS: 14%' },
                    { x: 'China', y: 56, text: 'CHN: 15%' },
                    { x: 'India', y: 61, text: 'IND: 16%' },
                    { x: 'Japan', y: 13, text: 'JPN: 3%' },
                    { x: 'South Africa', y: 79, text: 'ZAF: 21%' },
                    { x: 'United Kingdom', y: 71, text: 'UK: 19%' },
                    { x: 'United States', y: 45, text: 'USA: 12%' }
                ],
                xName: 'x',
                yName: 'y',
                startAngle: 270,
                endAngle: 90,
                radius: '90%', explode: true,
                innerRadius: '40%', 
                name: 'Agricultural',                
                dataLabel: {
                    visible: true, position: 'Outside',
                    connectorStyle: { length: '10%' }, name: 'text',
                    font: { size: '14px' }
                },
            }
        ],
        enableAnimation: false,
        //Initializing Tooltip
        tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },
        legendSettings: {
            visible: false,
        },
        //Initializing Title
        title: 'Agricultural Land Percentage',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    pie.appendTo('#semi-container');
    document.getElementById('inner-radius').onpointermove = document.getElementById('inner-radius').ontouchmove =
        document.getElementById('inner-radius').onchange = function (e) {
            var innerradius = +document.getElementById('inner-radius').value;
            pie.series[0].innerRadius = innerradius + '%';
            document.getElementById('innerradius').innerHTML = (innerradius / 100).toFixed(2);
            pie.series[0].animation.enable = false;
            pie.removeSvg();
            pie.refreshSeries();
            pie.refreshChart();
        };
    document.getElementById('range-min').onpointermove = document.getElementById('range-min').ontouchmove =
        document.getElementById('range-min').onchange = function (e) {
            var rangeMin = (document.getElementById('range-min'));
            pie.series[0].startAngle = parseFloat(rangeMin.value);
            document.getElementById('startangle').innerHTML = rangeMin.value;
            pie.series[0].animation.enable = false;
            pie.removeSvg();
            pie.refreshSeries();
            pie.refreshChart();
        };
    document.getElementById('range-max').onpointermove = document.getElementById('range-max').ontouchmove =
        document.getElementById('range-max').onchange = function (e) {
            var rangeMax = (document.getElementById('range-max'));
            pie.series[0].endAngle = parseFloat(rangeMax.value);
            document.getElementById('endangle').innerHTML = rangeMax.value;
            pie.series[0].animation.enable = false;
            pie.removeSvg();
            pie.refreshSeries();
            pie.refreshChart();
        };
};