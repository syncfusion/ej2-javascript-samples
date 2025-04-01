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
            content: ej.base.Browser.isDevice ? " " :  "<div style='font-Weight:600;font-size:15px'>Browser<br>Market<br>Share</div>" ,
            region:"Series",
            x:"52%",
            y:"50%"
        }],
        series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 57.28, text: '57.28%' },
                    { 'x': 'UC Browser', y: 4.37, text: '4.37%' },
                    { 'x': 'Internet Explorer', y: 6.12, text: '6.12%' },
                    { 'x': 'QQ', y: 5.96, text: '5.96%' },
                    { 'x': 'Edge', y: 7.48, text: '7.48%' },
                    { 'x': 'Others', y: 14.06, text: '18.76%' },
                ],
                xName: 'x', yName: 'y', startAngle: 30,
                innerRadius: '50%', radius: ej.base.Browser.isDevice ? '80%' : '85%',
                dataLabel: {
                    visible: true, position: 'Inside',
                    font: {fontWeight: '600', color: '#ffffff'}, 
                },
            }
        ],
        //Initializing Legend
        legendSettings: {
            visible: true, toggleVisibility: false,
            position: 'Bottom',
            maximumColumns: ej.base.Browser.isDevice ? 2 :3,
            fixedWidth: true
        },
        title: ej.base.Browser.isDevice ? 'Browser Market Share' : ' ',
        enableBorderOnMouseMove:false,
        textRender: function (args) {
            args.series.dataLabel.font.size = getFontSize(pie.initialClipRect.width);
            args.text = args.text + '%';
        },
        pointRender: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            if (selectedTheme === 'fluent2') {
                args.fill = fluent2Colors[args.point.index % 10];
            }
        },
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        center:{ x: '50%', y:'50%'},
        tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',header:"", enableHighlight: true },
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