/**
 * Sample for stock chart
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var removeSecondaryElement;
var datasrc;
var data1 = [];
var value;
this.renderPeriodSelectorChart = function (data1) {
    var chart = new ej.charts.Chart({
        series: [{
            dataSource: data1, width: 2, type: 'Candle', animation: { enable: true }, xName: 'date', low: 'Low',
            high: 'High', close: 'Close', volume: 'Volume', open: 'Open', name: 'Bitcoin', bearFillColor: '#2ecd71',
            bullFillColor: '#e74c3d', yName: 'Close'
        }], width: ej.base.Browser.isDevice ? '100%' : '88%', crosshair: { enable: true },
        annotations: [{ content: '<div id="annotation"></div>', coordinateUnits: 'Pixel', region: 'Chart', x: '15%', y: '25%' }],
        zoomSettings: { enableMouseWheelZooming: true, mode: 'X', toolbarItems: [] }, tooltip: { enable: true, shared: true },
        chartArea: { border: { width: 0 } }, theme: theme, legendSettings: { visible: false }, height: '250',
        axisLabelRender: function (args) {
            if (args.axis.opposedPosition) {
                var value_1 = Math.round(Number(args.text)) / 1000;
                args.text = '$' + String(value_1) + 'k';
            }
        }, primaryYAxis: { labelFormat: 'n0', opposedPosition: true, lineStyle: { width: 0 } },
        tooltipRender: function (args) {
            if (args.text.length > 0) {
                var text = args.text.split('<br/>');
                var html = '<table><thead>' + text[0] + '</thead>';
                var value_2;
                for (var i = 1; i < text.length; i++) {
                    value_2 = text[i].split(':');
                    html += '<tr><td style="opacity:0.5">' + value_2[0] + ':</td><td style="padding-left: 5px;">$' +
                        (+value_2[1].split(' <b>')[1].split('</b>')[0]).toFixed(2) + '</td></tr>';
                }
                html += '</table>';
                chart.setAnnotationValue(0, '<div id="annotation" style="line-height: 18px;font-size:13px;background: #fff; opacity:0.9; color: #464e56; ' +
                    ' box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px; border-radius: 3px">' + html + '</div>');
            }
            args.text = '';
        }, primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift' },
        chartMouseMove: function () {
            if (!ej.charts.withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
                removeSecondaryElement();
            }
        },
        load: function (args) {
            args.chart.tooltip.format = args.chart.series[0].type === 'Candle' ?
                '${point.x}<br/>High : <b>${point.high}</b><br/>Low : <b>${point.low}</b><br/>' +
                'Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b>' :
                '${point.x}<br/>Close : <b>${point.close}</b>';
                document.getElementById('switch').style.display = "block";
        }, axisRangeCalculated: function (args) { chart.setAnnotationValue(0, '<div></div>'); },
    });
    chart.appendTo('#chart');
    removeSecondaryElement = function () {
        setTimeout(function () {
            if (ej.charts.getElement('annotation')) {
                ej.base.remove(ej.charts.getElement('annotation'));
            }
        }, 2000);
    };
    var rangeTop = new ej.charts.RangeNavigator({
        loaded: function (args) {
            if (!ej.base.Browser.isDevice) {
                document.getElementById('container_Secondary_Element').style.transform = 'translate(13%)';
            }
        }, disableRangeSelector: true, width: ej.base.Browser.isDevice ? '100%' : '80%',
        load: function (args) {
            args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf('e-bigger') > -1 ? 56 : 42;
        }, labelPosition: 'Outside', valueType: 'DateTime', dataSource: data1, xName: 'date', yName: 'Close', theme: theme,
        periodSelectorSettings: {
            periods: [{ text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
            { text: '6M', interval: 6, intervalType: 'Months' }, { text: '1Y', interval: 1, intervalType: 'Years', selected: true },
            { text: '2Y', interval: 2, intervalType: 'Years' }, { text: 'ALL' }], position: 'Top',
        }
    });
    rangeTop.appendTo('#container');
    var switchObj = new ej.buttons.Switch({
        change: function (args) {
            chart.series[0].type = !args.checked ? 'Line' : 'Candle';
            chart.annotations[0].content = '';
            chart.refresh();
        }, name: 'Closing Value', cssClass: 'custom-iOS', value: 'Closing value', checked: true,
    });
    switchObj.appendTo('#switch');
    var rangeBottom = new ej.charts.RangeNavigator({
        labelPosition: 'Outside', valueType: 'DateTime', series: [{ dataSource: data1, xName: 'date', yName: 'Close' }],
        changed: function (args) {
            rangeTop.periodSelectorModule.datePicker.startDate = args.start;
            rangeTop.periodSelectorModule.datePicker.endDate = args.end;
            rangeTop.dataBind();
            chart.primaryXAxis.zoomFactor = 1;
            chart.primaryXAxis.zoomPosition = 0;
            var filterData = data1.filter(function (data) {
                return (data.date.getTime() >= args.start.getTime() &&
                    data.date.getTime() <= args.end.getTime());
            });
            chart.series[0].animation.enable = false;
            chart.series[0].dataSource = filterData;
            chart.setAnnotationValue(0, '<div id="annotation"></div>');
            chart.refresh();
        }, width: ej.base.Browser.isDevice ? '100%' : '80%', value: [new Date('2017-04-30'), new Date('2018-04-30')], theme: theme,
    });
    rangeBottom.appendTo('#range');
    rangeTop.changed = function (args) {
        rangeBottom.rangeSlider.setSlider(args.start.getTime(), args.end.getTime(), false, false);
        var filterData = data1.filter(function (data) {
            return (data.date.getTime() >= args.start.getTime() &&
                data.date.getTime() <= args.end.getTime());
        });
        chart.series[0].animation.enable = false;
        chart.series[0].dataSource = filterData;
        chart.refresh();
        chart.setAnnotationValue(0, '<div id="annotation"></div>');
    };
};
this.default = function () {
    var datasrc;
    var data1 = [];
    var value;
    var j = 2100;
    var fetchApi = new ej.base.Fetch('./src/range-navigator/data-source/period-data.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        datasrc = data;
        for (var i = 0; i < datasrc.length - 20; i++) {
            value = datasrc[i];
            data1.push({
                High: value.High, Low: value.Low, Close: value.Close, Open: value.Open, date: new Date(2010, 6, j)
            });
            j++;
        }
        _this.renderPeriodSelectorChart(data1);
    };
};