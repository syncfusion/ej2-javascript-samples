var centerTitle = document.createElement('div');
centerTitle.innerHTML = 'Browser Market Share';
centerTitle.style.position = 'absolute';
centerTitle.style.visibility = 'hidden';
var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#66CD15", "#F3A93C", "#107C10",
    "#C19C00"];

/**
 * Sample for Doughnut 
 */
this.default = function () {
    var count = 0;
	var pieinterval;
    var pie = new ej.charts.AccumulationChart({
        enableSmartLabels: true,
        //Initializing Series
        annotations: [{
            content: ej.base.Browser.isDevice ? " " :  "<div style='font-Weight:600;font-size:15px'>Internet Users <br> by Country<br>2025</div>" ,
            region:"Series",
            x:"50%",
            y:"50%"
        }],
        series: [
            {
                dataSource: [
                    { 'x': 'China', y: 35, text: '35%' },
                    { 'x': 'India', y: 30, text: '30%' },
                    { 'x': 'USA', y: 10.7, text: '10.7%' },
                    { 'x': 'Indonesia', y: 7, text: '7%' },
                    { 'x': 'Brazil', y: 5.3, text: '5.3%' },
                    { 'x': 'Others', y: 12, text: '12%' },
                ],
                xName: 'x', yName: 'y', 
                innerRadius: '50%', borderRadius: 3, border: { color: '#ffffff', width: 1 },
                dataLabel: {
                    visible: false
                },
            }
        ],
        selectionMode: 'Point',
        //Initializing Legend
        legendSettings: {
            visible: true, toggleVisibility: false,
            position: 'Bottom',textWrap: 'Wrap'
        },
        enableBorderOnMouseMove:false,
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        center:{ x: '50%', y:'50%'},
        tooltip: { enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>',header:"", enableHighlight: true },
         // custom code end
    });
    pie.appendTo('#doughnut-container');
    document.getElementById('doughnut-container').appendChild(centerTitle);
    function getFontSize(width) {
        if (width > 300) {
            return '13px';
        }
        else if (width > 250) {
            return '8px';
        }
        else {
            return '6px';
        }
    }
};