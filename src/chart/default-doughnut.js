var centerTitle = document.createElement('div');
centerTitle.innerHTML = 'Expenses <br> Year  &nbsp 2013';
centerTitle.style.position = 'absolute';
centerTitle.style.visibility = 'hidden';
/**
 * Sample for Doughnut 
 */
this.default = function () {
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
                    name: 'text',
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
            centerTitle.style.top = (args.accumulation.center.y - rect.height / 2) + 'px';
            centerTitle.style.left = (args.accumulation.center.x - rect.width / 2) + 'px';
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
            pie.animateSeries = true;
        },
        //Initializing Tooltip
        tooltip: {
            enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}%</b>'
        },
        //Initializing Title
        title: 'Education Institutional Revenue',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
            args.accumulation.legendSettings.position = ej.base.Browser.isDevice ? 'Bottom' : 'Right';
        }
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