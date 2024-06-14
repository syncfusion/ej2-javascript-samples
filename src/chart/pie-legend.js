var centerTitle = document.createElement('div');
centerTitle.innerHTML = 'Browser Market Share';
centerTitle.style.position = 'absolute';
centerTitle.style.visibility = 'hidden';
/**
 * Sample for Doughnut 
 */
this.default = function () {
    var count = 0;
	var pieinterval;
    var pie = new ej.charts.AccumulationChart({
        enableSmartLabels: true,
        //Initializing Selection Mode
        selectionMode: 'Point',
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
                    { 'x': 'Internet Explorer', y: 6.12 },
                    { 'x': 'Chrome', y: 57.28 },
                    { 'x': 'Safari', y: 4.73 },
                    { 'x': 'QQ', y: 5.96 },
                    { 'x': 'UC Browser', y: 4.37 },
                    { 'x': 'Edge', y: 7.48 },
                    { 'x': 'Others', y: 14.06 },
                ],
                xName: 'x', yName: 'y', startAngle: 30,
                 innerRadius: '45%',radius:'80%',
                dataLabel: {
                    visible: true, position: 'Inside',
                    font: {fontWeight: '600', color: '#ffffff'}, 
                },
            }
        ],
        //Initializing Legend
        legendSettings: {
            visible: true, toggleVisibility: false,
            position: ej.base.Browser.isDevice ? 'Bottom' : 'Right', height: ej.base.Browser.isDevice ? '20%' : '30%', width: ej.base.Browser.isDevice ? '95%' : '20%',
            textWrap: 'Wrap',
            maximumLabelWidth: 66,
        },
        title: ej.base.Browser.isDevice ? 'Browser Market Share' : ' ',
        enableBorderOnMouseMove:false,
        textRender: function (args) {
            args.series.dataLabel.font.size = getFontSize(pie.initialClipRect.width);
            args.text = args.text + '%';
        },
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            args.accumulation.legendSettings.position = ej.base.Browser.isDevice ? 'Bottom' : 'Right';
        },
        center:{ x: '50%', y:'50%'},
        tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',header:"" },
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