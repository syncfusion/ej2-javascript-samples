/**
 * Sample for vertical chart
 */
this.default = function () {
    var interval;
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: { title: 'Time (s)', majorGridLines: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: { title: 'Velocity (m/s)', majorGridLines: { width: 0 }, minimum: -15, maximum: 15, interval: 5 },
        //Initializing Chart Series
        series: [
            {
                type: 'Line', xName: 'x', yName: 'y', dataSource: [{ x: 0, y: 0 }],
                animation: { enable: false }, width: 2
            }
        ],
        chartArea: {
            border: {
                width: 0
            }
        },
        isTransposed: true,
        //Initializing Chart Title
        title: 'Indonesia - Seismograph Analysis',
        //Initializing Tooltip
        tooltip: { enable: false },
        width: ej.base.Browser.isDevice ? '100%' : '80%',
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
           // custom code end
        loaded: function (args) {
            chart.loaded = null;
            interval =
                setInterval(function () {
                    chart.series[0].dataSource = liveData(chart.series[0].dataSource, chart.series[0]);
                    chart.refresh();
                }, 10);
        }
    });
    chart.appendTo('#vertical-container');
    var count = 0;
    function liveData(data, series) {
        count = count + 1;
        var newData = data;
        if (count > 350 || document.getElementById('vertical-container') === null) {
            clearInterval(interval);
        }
        else if (count > 300) {
            newData.push({ x: getXValue(data), y: getRandomArbitrary(0, 0) });
        }
        else if (count > 250) {
            newData.push({ x: getXValue(data), y: getRandomArbitrary(-2, 1) });
        }
        else if (count > 180) {
            newData.push({ x: getXValue(data), y: getRandomArbitrary(-3, 2) });
        }
        else if (count > 100) {
            newData.push({ x: getXValue(data), y: getRandomArbitrary(-7, 6) });
        }
        else if (count < 50) {
            newData.push({ x: getXValue(data), y: getRandomArbitrary(-3, 3) });
        }
        else {
            newData.push({ x: getXValue(data), y: getRandomArbitrary(-9, 9) });
        }
        return newData;
    }
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    function getXValue(data) {
        return data.length;
    }
};