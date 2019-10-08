var centerTitle = document.createElement('div');
centerTitle.innerHTML = 'Expenses in Year';
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
        series: [
            {
                dataSource: [
                    { 'x': 'Net-tution and Fees', y: 21, text: '21%' },
                    { 'x': 'Self-supporting Operations', y: 21, text: '21%' },
                    { 'x': 'Private Gifts', y: 8, text: '8%' },
                    { 'x': 'All Other', y: 8, text: '8%' },
                    { 'x': 'Local Revenue', y: 4, text: '4%' },
                    { 'x': 'State Revenue', y: 21, text: '21%' },
                    { 'x': 'Federal Revenue', y: 16, text: '16%' }
                ],
                xName: 'x',
                yName: 'y',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '40%',
                dataLabel: {
                    visible: true, position: 'Inside',
                    font: {
                        color: 'white',
                        fontWeight: '600',
                        size: '14px'
                    },
                },
                name: 'Revenue'
            }
        ],
        //Initializing Legend
        legendSettings: {
            visible: true, toggleVisibility: false,
            position: 'Right',
            height: '28%',
            width: '44%'
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
                    var label = document.getElementById('doughnut-container_datalabel_Series_0_text_' + point.index);
                    label.setAttribute('fill', 'black');
                }
            }
        },
        textRender: function (args) {
            args.series.dataLabel.font.size = getFontSize(pie.initialClipRect.width);
            args.text = args.text + '%';
        },
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            args.accumulation.legendSettings.position = ej.base.Browser.isDevice ? 'Bottom' : 'Right';
        },
        loaded: function (args) {
            pie.loaded = null;
            pieinterval = setInterval( function () {
                    if (document.getElementById('doughnut-container')) {
                        if (count === 0) {
                            pie.series[0].dataSource = [{ 'x': 'Net-tution and Fees', y: 13, text: '13%' },
                                { 'x': 'Self-supporting Operations', y: 13, text: '13%' },
                                { 'x': 'Private Gifts', y: 17, text: '17%' }, { 'x': 'All Other', y: 18, text: '18%' },
                                { 'x': 'Local Revenue', y: 12, text: '12%' }, { 'x': 'State Revenue', y: 17, text: '17%' },
                                { 'x': 'Federal Revenue', y: 10, text: '10%' }
                            ];
                            pie.animate();
                            count++;
                        }
                        else if (count === 1) {
                            pie.series[0].dataSource = [
                                { 'x': 'Net-tution and Fees', y: 55, text: '55%' }, { 'x': 'Self-supporting Operations', y: 14, text: '14%' },
                                { 'x': 'Private Gifts', y: 4, text: '4%' }, { 'x': 'All Other', y: 6, text: '6%' },
                                { 'x': 'Local Revenue', y: 11, text: '11%' }, { 'x': 'State Revenue', y: 5, text: '5%' },
                                { 'x': 'Federal Revenue', y: 6, text: '6%' }
                            ];
                            pie.animate();
                            count++;
                        }
                        else if (count === 2) {
                            pie.series[0].dataSource = [
                                { 'x': 'Net-tution and Fees', y: 8, text: '8%' }, { 'x': 'Self-supporting Operations', y: 26, text: '26%' },
                                { 'x': 'Private Gifts', y: 12, text: '12%' }, { 'x': 'All Other', y: 18, text: '18%' },
                                { 'x': 'Local Revenue', y: 15, text: '15%' }, { 'x': 'State Revenue', y: 11, text: '11%' },
                                { 'x': 'Federal Revenue', y: 9, text: '9%' }
                            ];
                            pie.animate();
                            count++;
                        }
                        else if (count === 3) {
                            pie.series[0].dataSource = [
                                { 'x': 'Net-tution and Fees', y: 10, text: '10%' }, { 'x': 'Self-supporting Operations', y: 7, text: '7%' },
                                { 'x': 'Private Gifts', y: 17, text: '17%' }, { 'x': 'All Other', y: 14, text: '14%' },
                                { 'x': 'Local Revenue', y: 21, text: '21%' }, { 'x': 'State Revenue', y: 14, text: '14%' },
                                { 'x': 'Federal Revenue', y: 17, text: '17%' }
                            ];
                            pie.animate();
                            count++;
                        }
                        else if (count === 4) {
                            pie.series[0].dataSource = [
                                { 'x': 'Net-tution and Fees', y: 13, text: '13%' }, { 'x': 'Self-supporting Operations', y: 6, text: '6%' },
                                { 'x': 'Private Gifts', y: 9, text: '9%' }, { 'x': 'All Other', y: 9, text: '9%' },
                                { 'x': 'Local Revenue', y: 7, text: '7%' }, { 'x': 'State Revenue', y: 13, text: '13%' },
                                { 'x': 'Federal Revenue', y: 39, text: '39%' }
                            ];
                            pie.animate();
                            count = 0;
                        }
                    } else {
                        clearInterval(pieinterval);
                    }
                },
                3000);
        }
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