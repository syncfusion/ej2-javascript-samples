/**
 * Sample for stock chart
 */
    var index = 0;
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
    var removeSecondaryElement;
    var periodsValue = {
        position: 'Top',
        periods: [
            { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
            { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
            { text: '1Y', interval: 1, intervalType: 'Years' },
            { text: '2Y', interval: 2, intervalType: 'Years', selected: true
            },
            { text: 'All' }
        ]
    };
    var annotationString = '<div id="annotation" style="line-height: 18px;' +
        ' font-size: 13px;background: #fff; opacity:0.9; color: #464e56; ' +
        ' box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px;' +
        ' border-radius: 3px">';
    removeSecondaryElement = function () {
        setTimeout(function () {
            if (ej.charts.getElement('annotation')) {
                ej.base.remove(ej.charts.getElement('annotation'));
            }
        }, 2000);
    };
    var range;
    var pointColors = [];
    var chartSeries = [{
            dataSource: window.chartData, width: 2, type: 'Candle', animation: { enable: true },
            xName: 'x', yName: 'y', low: 'low', high: 'high', close: 'close', volume: 'volume', open: 'open',
            name: 'Apple Inc', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d'
        }, {
            dataSource: window.chartData, width: 2, type: 'Column', animation: { enable: true },
            xName: 'x', yName: 'volume', yAxisName: 'secondary'
        }];
    var getContent = function (value) {
        var text = value.split('<br/>');
        var html = '<table><thead>' + text[0] + '</thead>';
        for (var i = 1; i < text.length; i++) {
            var value1 = text[i].split(':');
            if (i === text.length - 1) {
                html += '<tr><td style="opacity:0.5">' + value1[0] + '</td><td style="padding-left: 5px;">' +
                    Math.round(((+value1[1].split('</b>')[0].split('<b>')[1]) / 10000000)) + 'B';
            }
            else {
                html += '<tr><td style="opacity:0.5">' + value1[0] + '</td><td style="padding-left: 5px;">$' +
                    (+value1[1].split(' <b>')[1].split('</b>')[0]).toFixed(2) + '</td></tr>';
            }
        }
        return html;
    };
    this.default = function () {
        var chart = new ej.charts.Chart({
            primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
            annotations: [
                { content: '<div id="annotation"></div>', coordinateUnits: 'Pixel', region: 'Chart', x: '15%', y: '20%' }
            ],
            primaryYAxis: {
                crosshairTooltip: { enable: true }, labelFormat: 'n0', plotOffset: 25,
                rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }, rangePadding: 'None', majorGridLines: { width: 0 }
            }, rows: [{ height: '30%' }, { height: '70%' }],
            axes: [{
                    name: 'secondary', opposedPosition: true, rowIndex: 0,
                    majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, rangePadding: 'None'
                }], height: '350',
            axisLabelRender: function (args) {
                if (args.axis.name === 'secondary') {
                    args.text = Math.round((args.value / 10000000)) + 'B';
                }
                else if (args.axis.orientation === 'Vertical') {
                    args.text = '$' + Math.round(args.value);
                }
            },
            axisRangeCalculated: function (args) {
                chart.setAnnotationValue(0, '<div></div>');
            },
            loaded: function (args) {
                var labels = (args.chart.axisCollections[0]).visibleLabels;
                var maxValue = args.chart.axisCollections[0].visibleRange.max;
                if (args.chart.primaryXAxis.stripLines.length === 1) {
                    for (var i = 0; i < labels.length; i += 2) {
                        args.chart.primaryXAxis.stripLines.push({
                            start: new Date(labels[i].value), end: labels[i + 1] ? new Date(labels[i + 1].value) : new Date(maxValue),
                            zIndex: 'Behind', border: { width: 0, color: 'transparent' }, rotation: null,
                            opacity: 0.7, textStyle: {}, text: '', color: 'whitesmoke', visible: true
                        });
                    }
                    args.chart.refresh();
                }
            },
            series: chartSeries, tooltip: {
                enable: true, shared: true,
                format: '${point.x}<br/>High : <b>${point.high}</b><br/>Low :' +
                    ' <b>${point.low}</b><br/>Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b><br/>Volume : <b>${point.volume}</b>'
            },
            indicators: [{
                    type: 'Tma', period: 3, fastPeriod: 8, slowPeriod: 5, seriesName: 'Apple Inc', macdType: 'Both', width: 2,
                    macdPositiveColor: '#2ecd71', macdNegativeColor: '#e74c3d', fill: '#6063ff'
                }],
            tooltipRender: function (args) {
                if (args.series.type === 'Candle') {
                    chart.setAnnotationValue(0, annotationString + (getContent(args.text) + '</table>') + '</div>');
                }
                args.text = '';
            },
            pointRender: function (args) {
                if (args.series.type === 'Candle') {
                    pointColors.push(args.fill);
                }
                else {
                    args.fill = pointColors[args.point.index];
                }
            },
            chartMouseLeave: function (args) { removeSecondaryElement(); },
            chartMouseMove: function (args) {
                if (!ej.charts.withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
                    removeSecondaryElement();
                }
            }, margin: { top: 0 }, chartArea: { border: { width: 1, color: 'whitesmoke' } },
            zoomSettings: { enableMouseWheelZooming: true, enablePinchZooming: true, mode: 'XY', toolbarItems: [] }, crosshair: { enable: true, lineType: 'Both' },
            width: ej.base.Browser.isDevice ? '100%' : '80%', theme: theme, legendSettings: { visible: false }
        });
        chart.appendTo('#chart');
        range = new ej.charts.RangeNavigator({
            valueType: 'DateTime',
            disableRangeSelector: true,
            dataSource: window.chartData, xName: 'x', yName: 'close', theme: theme,
            width: ej.base.Browser.isDevice ? '100%' : '75%',
            load: function (args) {
                args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf('e-bigger') > -1 ? 56 : 42;
            }, periodSelectorSettings: periodsValue,
            loaded: function (args) {
                if (!ej.base.Browser.isDevice) {
                    document.getElementById('container_Secondary_Element').style.transform = 'translate(14%)';
                }
                var value = range.svgObject.getBoundingClientRect().left - range.element.getBoundingClientRect().left;
                document.getElementById('stockRange').style.transform = 'translateX(' + (value - 10) + 'px)';
            },
            changed: function (args) {
                var data = window.chartData.filter(function (data) {
                    return (data.x.getTime() >= args.start.getTime() &&
                        data.x.getTime() <= args.end.getTime());
                });
                chart.series[0].animation.enable = false;
                chart.primaryXAxis.zoomPosition = 0;
                chart.primaryXAxis.zoomFactor = 1;
                chart.series[1].animation.enable = false;
                chart.primaryXAxis.stripLines = [{ visible: true }];
                chart.indicators[0].animation.enable = false;
                pointColors = [];
                chart.series[0].dataSource = data;
                chart.series[1].dataSource = data;
                chart.refresh();
                chart.setAnnotationValue(0, '<div id="annotation"></div>');
            }
        });
        range.appendTo('#container');
};