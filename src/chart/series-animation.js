 /**
 * Sample for series animation
 */
 
 var lineIntervalId;
 var columnIntervalId;
 var splineIntervalId;
 var areaIntervalId;
 var barIntervalId;
 var bubbleIntervalId;
 var scatterIntervalId;
 var steplineIntervalId;
 var rangecolumnIntervalId;

    this.default = function () {
        var splinedata = shuffleArray([
            { x: '1', y: 30 },
            { x: '2', y: 10 },
            { x: '3', y: 80 },
            { x: '4', y: 20 },
            { x: '5', y: 30, },
            { x: '6', y: 5 },
            { x: '7', y: 69 },
            { x: '8', y: 15 },
            { x: '9', y: 60 },
            { x: '10', y: 70 }
        ]);
        var linedata = shuffleArray([
            { x: '1', y: 10 },
            { x: '2', y: 30 },
            { x: '3', y: 80 },
            { x: '4', y: 20 },
            { x: '5', y: 30, },
            { x: '6', y: 40 },
            { x: '7', y: 69 },
            { x: '8', y: 15 },
            { x: '9', y: 60 },
            { x: '10', y: 70 }
        ]);
        var columndata = shuffleArray([
            { x: '1', y: 90 },
            { x: '2', y: 10 },
            { x: '3', y: 50 },
            { x: '4', y: 20 },
            { x: '5', y: 30, },
            { x: '6', y: 70 },
            { x: '7', y: 9 }
        ]);
        var areadata = shuffleArray([
            { x: '1', y: 10 },
            { x: '2', y: 20 },
            { x: '3', y: 80 },
            { x: '4', y: 15 },
            { x: '5', y: 30, },
            { x: '6', y: 40 },
            { x: '7', y: 69 },
            { x: '8', y: 15 }
        ]);
        var bardata = shuffleArray([
            { x: '1', y: 90 },
            { x: '2', y: 10 },
            { x: '3', y: 50 },
            { x: '4', y: 20 },
            { x: '5', y: 30, },
            { x: '6', y: 70 },
            { x: '7', y: 9 }
        ]);
        var rangecolumndata = [
            { x: '1', low: 30, high: 60 },
            { x: '2', low: 42, high: 73 },
            { x: '3', low: 35, high: 80 },
            { x: '4', low: 20, high: 50 },
            { x: '5', low: 30, high: 80 },
            { x: '6', low: 10, high: 40 },
            { x: '7', low: 15, high: 69 }
        ];
        var steplinedata = shuffleArray([
            { x: '1', y: 10 },
            { x: '2', y: 30 },
            { x: '3', y: 80 },
            { x: '4', y: 20 },
            { x: '5', y: 30, },
            { x: '6', y: 40 },
            { x: '7', y: 69 },
            { x: '8', y: 15 },
            { x: '9', y: 60 },
            { x: '10', y: 70 }
        ]);
        var bubbledata = shuffleArray([
            { x: '1.5', y: 80, size: 5 },
            { x: '2', y: 60, size: 10 },
            { x: '3', y: 70, size: 8 },
            { x: '4', y: 13, size: 6 },
            { x: '5', y: 30, size: 9 },
            { x: '6', y: 20, size: 7 },
            { x: '6.5', y: 40, size: 11 }
        ]);
        function shuffleArray(array) {
            var _a;
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        var scatterdata = shuffleArray([
            { x: '1', y: 15, y1: 10 },
            { x: '1.25', y: 35, y1: 20 },
            { x: '1.5', y: 60, y1: 50 },
            { x: '1.75', y: 25, y1: 15 },
            { x: '2', y: 25, y1: 35 },
            { x: '2.25', y: 30, y1: 30 },
            { x: '2.5', y: 45, y1: 30 },
            { x: '2.75', y: 40, y1: 20 },
            { x: '3', y: 30, y1: 45 },
            { x: '3.25', y: 55, y1: 35 },
            { x: '3.5', y: 65, y1: 20 },
            { x: '3.75', y: 40, y1: 50 },
            { x: '4', y: 40, y1: 60 },
            { x: '4.25', y: 60, y1: 25 },
            { x: '4.5', y: 15, y1: 25 },
            { x: '4.75', y: 75, y1: 55 },
            { x: '5', y: 50, y1: 40 },
            { x: '5.25', y: 45, y1: 30 },
            { x: '5.5', y: 20, y1: 15 },
            { x: '5.75', y: 65, y1: 35 },
            { x: '6', y: 65, y1: 65 },
            { x: '6.25', y: 35, y1: 50 },
            { x: '6.5', y: 70, y1: 35 },
            { x: '6.75', y: 50, y1: 40 },
            { x: '7', y: 25, y1: 60 },
            { x: '7.25', y: 60, y1: 45 },
            { x: '7.5', y: 45, y1: 20 },
            { x: '7.75', y: 30, y1: 15 },
            { x: '8', y: 60, y1: 50 },
            { x: '8.25', y: 25, y1: 35 },
            { x: '8.5', y: 30, y1: 10 },
            { x: '8.75', y: 45, y1: 25 },
            { x: '9', y: 75, y1: 45 },
            { x: '9.25', y: 40, y1: 50 },
            { x: '9.5', y: 20, y1: 15 },
            { x: '9.75', y: 30, y1: 40 },
            { x: '10', y: 60, y1: 25 }
        ]);
        var scatterdata1 = shuffleArray([
            { x: '1', y: 60, y1: 45 },
            { x: '1.25', y: 40, y1: 30 },
            { x: '1.5', y: 25, y1: 10 },
            { x: '1.75', y: 15, y1: 50 },
            { x: '2', y: 15, y1: 65 },
            { x: '2.25', y: 35, y1: 50 },
            { x: '2.5', y: 40, y1: 30 },
            { x: '2.75', y: 60, y1: 25 },
            { x: '3', y: 65, y1: 25 },
            { x: '3.25', y: 30, y1: 15 },
            { x: '3.5', y: 20, y1: 60 },
            { x: '3.75', y: 50, y1: 40 },
            { x: '4', y: 50, y1: 35 },
            { x: '4.25', y: 55, y1: 50 },
            { x: '4.5', y: 75, y1: 15 },
            { x: '4.75', y: 45, y1: 60 },
            { x: '5', y: 45, y1: 50 },
            { x: '5.25', y: 35, y1: 30 },
            { x: '5.5', y: 30, y1: 20 },
            { x: '5.75', y: 55, y1: 40 },
            { x: '6', y: 70, y1: 55 },
            { x: '6.25', y: 60, y1: 25 },
            { x: '6.5', y: 15, y1: 40 },
            { x: '6.75', y: 40, y1: 15 },
            { x: '7', y: 30, y1: 25 },
            { x: '7.25', y: 60, y1: 35 },
            { x: '7.5', y: 60, y1: 35 },
            { x: '7.75', y: 25, y1: 15 },
            { x: '8', y: 25, y1: 10 },
            { x: '8.25', y: 50, y1: 30 },
            { x: '8.5', y: 45, y1: 65 },
            { x: '8.75', y: 55, y1: 20 },
            { x: '9', y: 50, y1: 60 },
            { x: '9.25', y: 30, y1: 45 },
            { x: '9.5', y: 10, y1: 20 },
            { x: '9.75', y: 40, y1: 35 },
            { x: '10', y: 55, y1: 15 }
        ]);
        var scatterdata2 = shuffleArray([
            { x: '1', y: 70, y1: 25 },
            { x: '1.25', y: 55, y1: 40 },
            { x: '1.5', y: 45, y1: 40 },
            { x: '1.75', y: 30, y1: 45 },
            { x: '2', y: 20, y1: 55 },
            { x: '2.25', y: 30, y1: 45 },
            { x: '2.5', y: 10, y1: 35 },
            { x: '2.75', y: 25, y1: 15 },
            { x: '3', y: 50, y1: 20 },
            { x: '3.25', y: 60, y1: 30 },
            { x: '3.5', y: 25, y1: 60 },
            { x: '3.75', y: 50, y1: 45 },
            { x: '4', y: 30, y1: 15 },
            { x: '4.25', y: 55, y1: 20 },
            { x: '4.5', y: 65, y1: 75 },
            { x: '4.75', y: 45, y1: 35 },
            { x: '5', y: 60, y1: 45 },
            { x: '5.25', y: 35, y1: 10 },
            { x: '5.5', y: 15, y1: 30 },
            { x: '5.75', y: 30, y1: 60 },
            { x: '6', y: 55, y1: 50 },
            { x: '6.25', y: 25, y1: 45 },
            { x: '6.5', y: 35, y1: 10 },
            { x: '6.75', y: 20, y1: 30 },
            { x: '7', y: 40, y1: 65 },
            { x: '7.25', y: 30, y1: 45 },
            { x: '7.5', y: 30, y1: 60 },
            { x: '7.75', y: 45, y1: 30 },
            { x: '8', y: 60, y1: 45 },
            { x: '8.25', y: 50, y1: 40 },
            { x: '8.5', y: 20, y1: 25 },
            { x: '8.75', y: 70, y1: 15 },
            { x: '9', y: 75, y1: 15 },
            { x: '9.25', y: 30, y1: 50 },
            { x: '9.5', y: 50, y1: 35 },
            { x: '9.75', y: 55, y1: 20 },
            { x: '10', y: 15, y1: 70 }
        ]);
        var scatterdata3 = shuffleArray([
            { x: '1', y: 20, y1: 30 },
            { x: '1.25', y: 30, y1: 20 },
            { x: '1.5', y: 35, y1: 60 },
            { x: '1.75', y: 40, y1: 30 },
            { x: '2', y: 55, y1: 20 },
            { x: '2.25', y: 45, y1: 35 },
            { x: '2.5', y: 60, y1: 45 },
            { x: '2.75', y: 25, y1: 30 },
            { x: '3', y: 45, y1: 15 },
            { x: '3.25', y: 50, y1: 45 },
            { x: '3.5', y: 50, y1: 35 },
            { x: '3.75', y: 15, y1: 40 },
            { x: '4', y: 15, y1: 70 },
            { x: '4.25', y: 45, y1: 55 },
            { x: '4.5', y: 75, y1: 10 },
            { x: '4.75', y: 60, y1: 25 },
            { x: '5', y: 30, y1: 55 },
            { x: '5.25', y: 45, y1: 35 },
            { x: '5.5', y: 60, y1: 25 },
            { x: '5.75', y: 40, y1: 45 },
            { x: '6', y: 10, y1: 50 },
            { x: '6.25', y: 20, y1: 65 },
            { x: '6.5', y: 65, y1: 40 },
            { x: '6.75', y: 30, y1: 30 },
            { x: '7', y: 25, y1: 65 },
            { x: '7.25', y: 35, y1: 40 },
            { x: '7.5', y: 20, y1: 45 },
            { x: '7.75', y: 60, y1: 50 },
            { x: '8', y: 35, y1: 60 },
            { x: '8.25', y: 25, y1: 45 },
            { x: '8.5', y: 30, y1: 15 },
            { x: '8.75', y: 50, y1: 70 },
            { x: '9', y: 45, y1: 75 },
            { x: '9.25', y: 20, y1: 35 },
            { x: '9.5', y: 40, y1: 50 },
            { x: '9.75', y: 45, y1: 30 },
            { x: '10', y: 50, y1: 25 }
        ]);
        var scatterdata4 = shuffleArray([
            { x: '1', y: 50, y1: 60 },
            { x: '1.25', y: 45, y1: 55 },
            { x: '1.5', y: 15, y1: 30 },
            { x: '1.75', y: 55, y1: 20 },
            { x: '2', y: 60, y1: 45 },
            { x: '2.25', y: 55, y1: 35 },
            { x: '2.5', y: 55, y1: 20 },
            { x: '2.75', y: 30, y1: 50 },
            { x: '3', y: 70, y1: 50 },
            { x: '3.25', y: 25, y1: 35 },
            { x: '3.5', y: 30, y1: 35 },
            { x: '3.75', y: 45, y1: 60 },
            { x: '4', y: 65, y1: 15 },
            { x: '4.25', y: 20, y1: 70 },
            { x: '4.5', y: 25, y1: 75 },
            { x: '4.75', y: 35, y1: 25 },
            { x: '5', y: 40, y1: 60 },
            { x: '5.25', y: 50, y1: 30 },
            { x: '5.5', y: 20, y1: 10 },
            { x: '5.75', y: 35, y1: 40 },
            { x: '6', y: 35, y1: 45 },
            { x: '6.25', y: 30, y1: 25 },
            { x: '6.5', y: 30, y1: 70 },
            { x: '6.75', y: 60, y1: 20 },
            { x: '7', y: 45, y1: 25 },
            { x: '7.25', y: 40, y1: 35 },
            { x: '7.5', y: 20, y1: 55 },
            { x: '7.75', y: 50, y1: 40 },
            { x: '8', y: 50, y1: 40 },
            { x: '8.25', y: 35, y1: 55 },
            { x: '8.5', y: 60, y1: 35 },
            { x: '8.75', y: 30, y1: 60 },
            { x: '9', y: 10, y1: 65 },
            { x: '9.25', y: 25, y1: 50 },
            { x: '9.5', y: 40, y1: 50 },
            { x: '9.75', y: 30, y1: 25 },
            { x: '10', y: 65, y1: 30 },
        ]);
        var tabObj = new ej.navigations.Tab({ heightAdjustMode: 'None', overflowMode: 'Scrollable', height: '500px', headerPlacement: 'Top', selected: tabSelected,
            items: [
                { header: { 'text': 'Line' }, content: '#lineCharts' },
                { header: { 'text': 'Column' }, content: '#columnCharts' },
                { header: { 'text': 'Spline' }, content: '#splineCharts' },
                { header: { 'text': 'Area' }, content: '#areaCharts' },
                { header: { 'text': 'Bar' }, content: '#barCharts' },
                { header: { 'text': 'Bubble' }, content: '#bubbleCharts' },
                { header: { 'text': 'Scatter' }, content: '#scatterCharts' },
                { header: { 'text': 'Step line' }, content: '#stepLineCharts' },
                { header: { 'text': 'Range column' }, content: '#rangeCharts' },
            ]
        });
        tabObj.appendTo('#element');
        function tabSelected(e) {
            var chartIds = [
                'lineCharts',
                'columnCharts',
                'splineCharts',
                'areaCharts',
                'barCharts',
                'bubbleCharts',
                'scatterCharts',
                'stepLineCharts',
                'rangeCharts'
            ];
            chartIds.forEach(function (id, index) {
                if (index === e.selectedIndex) {
                    var chartElement = document.getElementById(id);
                    if (chartElement) {
                        var chart = chartElement.ej2_instances[0];
                        chart.refresh();
                    }
                }
            });
        }
        
        var splineChart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function (args) {
                var chart = document.getElementById('splineCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.splineClearInterval();
                splineIntervalId = setInterval(function () {
                    var container = document.getElementById('splineCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = splinedata.map(function (item) {
                            var min = 10;
                            var max = 90;
                            var value = Math.floor(Math.random() * (max - min + 1)) + min;
                            return { x: item.x, y: value };
                        });
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                    }
                    else {
                        args.chart.splineClearInterval();
                    }
                }, 2000);
            },
            splineClearInterval: function() {
                if (splineIntervalId) {
                    clearInterval(splineIntervalId);
                    splineIntervalId = null;
                }
            },
            series: [{
                    dataSource: splinedata,
                    xName: 'x',
                    yName: 'y',
                    type: 'Spline',
                    width: 2.5,
                    marker: { visible: true, height: 8, width: 8, dataLabel: { visible: true, position: 'Outer' } },
                    animation: { enable: true }
                }]
        });
        splineChart.appendTo('#splineCharts');
        var lineChart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function(args) {
                var chart = document.getElementById('lineCharts');
                chart.setAttribute('title', '');
            },
            load: function(args) {
                loadChartTheme(args);
                args.chart.lineClearInterval();
                lineIntervalId = setInterval(function () {
                    var container = document.getElementById('lineCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = linedata.map(generateRandomValues);
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                        else {
                            args.chart.lineClearInterval();
                        }
                    }
                }, 2000);
            },
            lineClearInterval: function() {
                if (lineIntervalId) {
                    clearInterval(lineIntervalId);
                    lineIntervalId = null;
                }
            },
            series: [{
                    dataSource: linedata,
                    xName: 'x',
                    yName: 'y',
                    type: 'Line',
                    width: 2.5,
                    marker: { visible: true, height: 8, width: 8, dataLabel: { visible: true, position: 'Outer' } },
                    animation: { enable: true }
                }]
        });
        lineChart.appendTo('#lineCharts');
        var columnCharts = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function (args) {
                var chart = document.getElementById('columnCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.columnClearInterval();
                columnIntervalId = setInterval(function () {
                    var container = document.getElementById('columnCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = columndata.map(generateRandomValues);
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                        else {
                            args.chart.columnClearInterval();
                        }
                    }
                }, 2000);
            },
            columnClearInterval: function() {
                if (columnIntervalId) {
                    clearInterval(columnIntervalId);
                    columnIntervalId = null;
                }
            },
            series: [{
                    dataSource: columndata,
                    xName: 'x',
                    yName: 'y',
                    type: 'Column',
                    marker: { visible: false, dataLabel: { visible: true, position: 'Outer' } },
                    animation: { enable: true },
                    cornerRadius: { topLeft: 4, topRight: 4 }
                }]
        });
        columnCharts.appendTo('#columnCharts');
        var areaChart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function (args) {
                var chart = document.getElementById('areaCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.areaClearInterval();
                areaIntervalId = setInterval(function () {
                    var container = document.getElementById('areaCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = areadata.map(generateRandomValues);
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                        else {
                            args.chart.areaClearInterval();
                        }
                    }
                }, 2000);
            },
            areaClearInterval: function() {
                if (areaIntervalId) {
                    clearInterval(areaIntervalId);
                    areaIntervalId = null;
                }
            },
            series: [{
                    dataSource: areadata,
                    xName: 'x',
                    yName: 'y',
                    type: 'SplineArea',
                    marker: { visible: false, dataLabel: { visible: true, position: 'Outer' } },
                    animation: { enable: true }
                }]
        });
        areaChart.appendTo('#areaCharts');
        var barChart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function (args) {
                var chart = document.getElementById('barCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.barClearInterval();
                barIntervalId = setInterval(function () {
                    var container = document.getElementById('barCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = bardata.map(generateRandomValues);
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                        else {
                            args.chart.barClearInterval();
                        }
                    }
                }, 2000);
            },
            barClearInterval: function() {
                if (barIntervalId) {
                    clearInterval(barIntervalId);
                    barIntervalId = null;
                }
            },
            series: [{
                    dataSource: bardata,
                    xName: 'x',
                    yName: 'y',
                    type: 'Bar',
                    marker: { visible: false, dataLabel: { visible: true, position: 'Outer' } },
                    animation: { enable: true },
                    cornerRadius: { bottomRight: 4, topRight: 4 }
                }]
        });
        barChart.appendTo('#barCharts');
        var rangeChart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function (args){
                var chart = document.getElementById('rangeCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.rangecolumnClearInterval();
                rangecolumnIntervalId = setInterval(function () {
                    var container = document.getElementById('rangeCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = rangecolumndata.map(function (item) {
                            var highMin = 50;
                            var highMax = 95;
                            var lowMin = 5;
                            var lowMax = 45;
                            var highValue = Math.floor(Math.random() * (highMax - highMin + 1)) + highMin;
                            var lowValue = Math.floor(Math.random() * (lowMax - lowMin + 1)) + lowMin;
                            return { x: item.x, high: highValue, low: lowValue };
                        });
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                        else {
                            args.chart.rangecolumnClearInterval();
                        }
                    }
                }, 2000);
            },
            rangecolumnClearInterval: function() {
                if (rangecolumnIntervalId) {
                    clearInterval(rangecolumnIntervalId);
                    rangecolumnIntervalId = null;
                }
            },
            series: [{
                    dataSource: rangecolumndata,
                    xName: 'x',
                    high: 'high',
                    low: 'low',
                    type: 'RangeColumn',
                    columnSpacing: 0.1,
                    marker: { visible: false, dataLabel: { visible: true, position: 'Outer' } },
                    animation: { enable: true },
                    cornerRadius: { bottomRight: 4, bottomLeft: 4, topRight: 4, topLeft: 4 }
                }]
        });
        rangeChart.appendTo('#rangeCharts');
        var stepLineChart = new ej.charts.Chart({
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            primaryYAxis: {
                labelFormat: '{value}',
                maximum: 100,
                minimum: 0,
                edgeLabelPlacement: 'Shift',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            width: '100%',
            loaded: function (args) {
                var chart = document.getElementById('stepLineCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.steplineClearInterval();
                steplineIntervalId = setInterval(function () {
                    var container = document.getElementById('stepLineCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var newData = steplinedata.map(generateRandomValues);
                        if (args.chart.series.length > 0) {
                            args.chart.series[0].setData(newData, 1400);
                        }
                        else {
                            args.chart.steplineClearInterval();
                        }
                    }
                }, 2000);
            },
            steplineClearInterval: function() {
                if (steplineIntervalId) {
                    clearInterval(steplineIntervalId);
                    steplineIntervalId = null;
                }
            },
            series: [{
                    dataSource: steplinedata,
                    xName: 'x',
                    yName: 'y',
                    width: 2.5,
                    type: 'StepLine',
                    marker: { visible: false },
                    animation: { enable: true }
                }]
        });
        stepLineChart.appendTo('#stepLineCharts');
        var scatterChart = new ej.charts.Chart({
            primaryXAxis: {
                minimum: 1,
                interval: 1,
                maximum: 10,
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                edgeLabelPlacement: 'Shift'
            },
            primaryYAxis: {
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                minimum: 0,
                maximum: 80,
                interval: 10,
                rangePadding: 'None'
            },
            chartArea: { border: { width: 0 } },
            loaded: function (args) {
                var chart = document.getElementById('scatterCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                var index = 1;
                var datasets = [scatterdata, scatterdata1, scatterdata2, scatterdata3, scatterdata4];
                args.chart.scatterClearInterval();
                scatterIntervalId = setInterval(function () {
                    var container = document.getElementById('scatterCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        var scatterDataSource = datasets[index % datasets.length];
                        index++;
                        args.chart.series[0].setData(scatterDataSource, 2000);
                        args.chart.series[1].setData(scatterDataSource, 2000);
                    }
                    else {
                        args.chart.scatterClearInterval();
                    }
                }, 2000);
            },
            scatterClearInterval: function() {
                if (scatterIntervalId) {
                    clearInterval(scatterIntervalId);
                    scatterIntervalId = null;
                }
            },
            series: [
                {
                    dataSource: scatterdata,
                    xName: 'x',
                    yName: 'y',
                    type: 'Scatter',
                    marker: { visible: false, width: 8, height: 8, shape: 'Circle' },
                    animation: { enable: true }
                },
                {
                    dataSource: scatterdata,
                    xName: 'x',
                    yName: 'y1',
                    type: 'Scatter',
                    marker: { visible: false, width: 8, height: 8, shape: 'Circle' },
                    animation: { enable: true }
                }
            ]
        });
        scatterChart.appendTo('#scatterCharts');
        var bubbleChart = new ej.charts.Chart({
            primaryXAxis: {
                minimum: 1,
                maximum: 7,
                interval: 1,
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 }
            },
            primaryYAxis: {
                minimum: 0,
                maximum: 100,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: { border: { width: 0 } },
            pointRender: pointRenderer,
            loaded: function (args) {
                var chart = document.getElementById('bubbleCharts');
                chart.setAttribute('title', '');
            },
            load: function (args) {
                loadChartTheme(args);
                args.chart.bubbleClearInterval();
                bubbleIntervalId = setInterval(function () {
                    var container = document.getElementById('bubbleCharts');
                    if (container && container.children.length > 0 && container.id === args.chart.element.id) {
                        if (args.chart.series.length > 0) {
                            var newBubbleData = bubbledata.map(generateRandomBubbleData);
                            newBubbleData = shuffleArray(newBubbleData);
                            args.chart.series[0].setData(newBubbleData, 1400);
                        }
                        else {
                            args.chart.bubbleClearInterval();
                        }
                    }
                }, 2000);
            },
            bubbleClearInterval: function() {
                if (bubbleIntervalId) {
                    clearInterval(bubbleIntervalId);
                    bubbleIntervalId = null;
                }
            },
            legendSettings: { visible: false },
            series: [{
                    dataSource: bubbledata,
                    type: 'Bubble',
                    border: { width: 2 },
                    xName: 'x',
                    yName: 'y',
                    size: 'size',
                    animation: { enable: true }
                }]
        });
        bubbleChart.appendTo('#bubbleCharts');

        var generateRandomValues = function (item) {
            var min = 10;
            var max = 95;
            var value = Math.floor(Math.random() * (max - min + 1)) + min;
            return { x: item.x, y: value };
        };
        var generateRandomBubbleData = function (item) {
            var minYValue = 5;
            var maxYValue = 95;
            var randomYValue = Math.random() * (maxYValue - minYValue) + minYValue;
            var minSize = 3.5;
            var maxSize = 9.5;
            var randomSize = Math.random() * (maxSize - minSize) + minSize;
            return Object.assign({}, item, { y: randomYValue, size: randomSize });
        };
        function loadChartTheme(args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }

        function pointRenderer (args) {
            var bubbleMaterialColors = ["rgba(0, 189, 174, 0.5)", "rgba(64, 64, 65, 0.5)", "rgba(53, 124, 210, 0.5)", "rgba(229, 101, 144, 0.5)", "rgba(248, 184, 131, 0.5)", "rgba(112, 173, 71, 0.5)", "rgba(221, 138, 189, 0.5)",
                "rgba(127, 132, 232, 0.5)", "rgba(123, 180, 235, 0.5)", "rgba(234, 122, 87, 0.5)", "rgba(64, 64, 65, 0.5)", "rgba(0, 189, 174, 0.5)"];
            var bubbleFabricColors = ["rgba(68, 114, 196, 0.5)", "rgba(237, 125, 49, 0.5)", "rgba(255, 192, 0, 0.5)", "rgba(112, 173, 71, 0.5)", "rgba(91, 155, 213, 0.5)", "rgba(193, 193, 193, 0.5)", "rgba(111, 111, 226, 0.5)",
                "rgba(226, 105, 174, 0.5)", "rgba(158, 72, 14, 0.5)", "rgba(153, 115, 0, 0.5)", "rgba(68, 114, 196, 0.5)", "rgba(112, 173, 71, 0.5)", "rgba(255, 192, 0, 0.5)", "rgba(237, 125, 49, 0.5)"];
            var bubbleBootstrapColors = ["rgba(161, 110, 229, 0.5)", "rgba(247, 206, 105, 0.5)", "rgba(85, 165, 194, 0.5)", "rgba(125, 223, 30, 0.5)", "rgba(255, 110, 166, 0.5)", "rgba(121, 83, 172, 0.5)",
                "rgba(185, 155, 79, 0.5)", "rgba(64, 124, 146, 0.5)", "rgba(94, 167, 22, 0.5)", "rgba(185, 28, 82, 0.5)"];
            var bubbleHighContrastColors = ["rgba(121, 236, 228, 0.5)", "rgba(233, 130, 114, 0.5)", "rgba(223, 230, 182, 0.5)", "rgba(198, 231, 115, 0.5)", "rgba(186, 152, 255, 0.5)", "rgba(250, 131, 195, 0.5)", "rgba(0, 194, 122, 0.5)",
                "rgba(67, 172, 239, 0.5)", "rgba(214, 129, 239, 0.5)", "rgba(216, 188, 110, 0.5)"];
            var bubbleFluentColors = ["rgba(26, 201, 230, 0.5)", "rgba(218, 76, 178, 0.5)", "rgba(237, 187, 64, 0.5)", "rgba(175, 75, 207, 0.5)", "rgba(255, 114, 102, 0.5)", "rgba(27, 213, 101, 0.5)", "rgba(238, 153, 61, 0.5)",
            "rgba(88, 135, 255, 0.5)", "rgba(236, 84, 141, 0.5)", "rgba(125, 57, 192, 0.5)"];
            var bubbleMaterialDarkColors = ["rgba(158, 203, 8, 0.5)", "rgba(86, 174, 255, 0.5)", "rgba(197, 122, 255, 0.5)", "rgba(97, 234, 169, 0.5)", "rgba(235, 187, 62, 0.5)", "rgba(244, 92, 92, 0.5)", "rgba(138, 119, 255, 0.5)",
                "rgba(99, 199, 255, 0.5)", "rgba(255, 132, 176, 0.5)", "rgba(247, 201, 40, 0.5)"];
            var bubbleFluentDarkColors = ["rgba(26, 201, 230, 0.5)", "rgba(218, 76, 178, 0.5)", "rgba(237, 187, 64, 0.5)", "rgba(175, 75, 207, 0.5)", "rgba(255, 114, 102, 0.5)", "rgba(27, 213, 101, 0.5)", "rgba(238, 153, 61, 0.5)",
            "rgba(88, 135, 255, 0.5)", "rgba(236, 84, 141, 0.5)", "rgba(125, 57, 192, 0.5)"];
            var bubbleTailwindColors = ["rgba(90, 97, 246, 0.5)", "rgba(101, 163, 13, 0.5)", "rgba(51, 65, 85, 0.5)", "rgba(20, 184, 166, 0.5)", "rgba(139, 92, 246, 0.5)", "rgba(3, 105, 161, 0.5)", "rgba(249, 115, 22, 0.5)",
                "rgba(147, 51, 234, 0.5)", "rgba(245, 158, 11, 0.5)", "rgba(21, 128, 61, 0.5)"];
            var bubbleTailwindDarkColors = ["rgba(139, 92, 246, 0.5)", "rgba(34, 211, 238, 0.5)", "rgba(248, 113, 113, 0.5)", "rgba(74, 222, 128, 0.5)", "rgba(232, 121, 249, 0.5)", "rgba(252, 211, 77, 0.5)", "rgba(249, 115, 22, 0.5)",
                "rgba(45, 212, 191, 0.5)", "rgba(244, 114, 182, 0.5)", "rgba(16, 185, 129, 0.5)"];
            var bubbleTailwind3Colors = ["rgba(47, 64, 116, 0.5)", "rgba(3, 180, 180, 0.5)", "rgba(13, 114, 222, 0.5)", "rgba(255, 87, 51, 0.5)", "rgba(214, 51, 132, 0.5)", "rgba(243, 156, 18, 0.5)", "rgba(239, 41, 31, 0.5)", "rgba(145, 200, 34, 0.5)", "rgba(47, 64, 116, 0.5)", "rgba(3, 180, 180, 0.5)"];
            var bubbleTailwind3DarkColors = ["rgba(128, 41, 241, 0.5)", "rgba(26, 188, 156, 0.5)", "rgba(13, 114, 222, 0.5)", "rgba(255, 87, 51, 0.5)", "rgba(214, 51, 132, 0.5)", "rgba(243, 156, 18, 0.5)", "rgba(239, 41, 31, 0.5)", "rgba(145, 200, 34, 0.5)", "rgba(128, 41, 241, 0.5)", "rgba(26, 188, 156, 0.5)"];
            var bubbleBootstrap5Colors = ['rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(25, 135, 84, 0.5)', 'rgba(13, 202, 240, 0.5)','rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)'];
            var bubbleBootstrap5DarkColors = ['rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(25, 135, 84, 0.5)', 'rgba(13, 202, 240, 0.5)','rgba(253, 126, 20, 0.5)', 'rgba(102, 16, 242, 0.5)', 'rgba(111, 66, 193, 0.5)', 'rgba(214, 51, 132, 0.5)', 'rgba(220, 53, 69, 0.5)'];
            var bubbleMaterial3Colors = ["rgba(99, 85, 199, 0.5)", "rgba(0, 174, 224, 0.5)", "rgba(255, 180, 0, 0.5)", "rgba(247, 82, 63, 0.5)", "rgba(150, 60, 112, 0.5)", "rgba(253, 116, 0, 0.5)", "rgba(75, 224, 188, 0.5)", "rgba(33, 150, 245, 0.5)", "rgba(222, 61, 138, 0.5)", "rgba(22, 47, 136, 0.5)"];
            var bubbleMaterial3DarkColors = ["rgba(78, 170, 255, 0.5)", "rgba(250, 78, 171, 0.5)", "rgba(255, 245, 0, 0.5)", "rgba(23, 234, 88, 0.5)", "rgba(56, 255, 231, 0.5)", "rgba(255, 158, 69, 0.5)", "rgba(179, 243, 47, 0.5)", "rgba(185, 60, 228, 0.5)", "rgba(252, 86, 100, 0.5)", "rgba(155, 85, 255, 0.5)"];
            var bubbleFluent2Colors = ["rgba(98, 0, 238, 0.5)", "rgba(9, 175, 116, 0.5)", "rgba(0, 118, 229, 0.5)", "rgba(203, 53, 135, 0.5)", "rgba(231, 145, 15, 0.5)", "rgba(3, 100, 222, 0.5)", "rgba(102, 205, 21, 0.5)", "rgba(243, 169, 60, 0.5)",
            "rgba(16, 124, 16, 0.5)", "rgba(193, 156, 0, 0.5)"];
            var bubbleFluent2HighContrastColors = ["rgba(155, 180, 73, 0.5)", "rgba(42, 114, 213, 0.5)", "rgba(67, 183, 134, 0.5)", "rgba(63, 87, 154, 0.5)", "rgba(88, 78, 198, 0.5)", "rgba(232, 95, 156, 0.5)", "rgba(110, 122, 137, 0.5)", "rgba(234, 98, 102, 0.5)",
            "rgba(11, 106, 11, 0.5)", "rgba(193, 156, 0, 0.5)"];
            var bubbleFluent2DarkColors = ["rgba(155, 180, 73, 0.5)", "rgba(42, 114, 213, 0.5)", "rgba(67, 183, 134, 0.5)", "rgba(63, 87, 154, 0.5)", "rgba(88, 78, 198, 0.5)", "rgba(232, 95, 156, 0.5)", "rgba(110, 122, 137, 0.5)", "rgba(234, 98, 102, 0.5)",
            "rgba(11, 106, 11, 0.5)", "rgba(193, 156, 0, 0.5)"];
            
            
            var pointMaterialColors = ["#00bdae", "#404041", "#357cd2", "#e56590", "#f8b883", "#70ad47", "#dd8abd", "#7f84e8", "#7bb4eb",
                "#ea7a57", "#404041", "#00bdae"];
            var pointFabricColors = ["#4472c4", "#ed7d31", "#ffc000", "#70ad47", "#5b9bd5", "#c1c1c1", "#6f6fe2", "#e269ae", "#9e480e",
                "#997300", "#4472c4", "#70ad47", "#ffc000", "#ed7d31"];
            var pointBootstrapColors = ["#a16ee5", "#f7ce69", "#55a5c2", "#7ddf1e", "#ff6ea6", "#7953ac", "#b99b4f", "#407c92", "#5ea716",
                "#b91c52"];
            var pointHighContrastColors = ["#79ECE4", "#E98272", "#DFE6B6", "#C6E773", "#BA98FF", "#FA83C3", "#00C27A", "#43ACEF", "#D681EF",
                "#D8BC6E"];
            var pointFluentColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
                "#7D39C0"];
            var pointMaterialDarkColors = ["#9ECB08", "#56AEFF", "#C57AFF", "#61EAA9", "#EBBB3E", "#F45C5C", "#8A77FF", "#63C7FF", "#FF84B0",
                "#F7C928"];
            var pointFluentDarkColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
                "#7D39C0"];
            var pointTailwindColors = ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
            var pointTailwindDarkColors = ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6", "#10B981"];
            var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
            var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
            var pointBootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2',];
            var pointBootstrap5DarkColors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2',];
            var pointMaterial3Colors = ["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"];
            var pointMaterial3DarkColors = ["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7", "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"];
            var pointFluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
                "#C19C00"];
            var pointFluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
                "#0B6A0B", "#C19C00"];
            var pointFluent2DarkColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
                "#0B6A0B", "#C19C00"];
            
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';

            if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
                args.fill = bubbleFabricColors[args.point.index % 10];
                args.border.color = pointFabricColors[args.point.index % 10];
            } else if (selectedTheme === 'material-dark') {
                args.fill = bubbleMaterialDarkColors[args.point.index % 10];
                args.border.color = pointMaterialDarkColors[args.point.index % 10];
            } else if (selectedTheme === 'material') {
                args.fill = bubbleMaterialColors[args.point.index % 10];
                args.border.color = pointMaterialColors[args.point.index % 10];
            } else if (selectedTheme === 'bootstrap5-dark') {
                args.fill = bubbleBootstrap5DarkColors[args.point.index % 10];
                args.border.color = pointBootstrap5DarkColors[args.point.index % 10];
            } else if (selectedTheme === 'bootstrap5') {
                args.fill = bubbleBootstrap5Colors[args.point.index % 10];
                args.border.color = pointBootstrap5Colors[args.point.index % 10];
            } else if (selectedTheme === 'bootstrap') {
                args.fill = bubbleBootstrapColors[args.point.index % 10];
                args.border.color = pointBootstrapColors[args.point.index % 10];
            } else if (selectedTheme === 'bootstrap4') {
                args.fill = bubbleBootstrapColors[args.point.index % 10];
                args.border.color = pointBootstrapColors[args.point.index % 10];
            } else if (selectedTheme === 'bootstrap-dark') {
                args.fill = bubbleBootstrapColors[args.point.index % 10];
                args.border.color = pointBootstrapColors[args.point.index % 10];
            } else if (selectedTheme === 'highcontrast') {
                args.fill = bubbleHighContrastColors[args.point.index % 10];
                args.border.color = pointHighContrastColors[args.point.index % 10];
            } else if (selectedTheme === 'fluent-dark') {
                args.fill = bubbleFluentDarkColors[args.point.index % 10];
                args.border.color = pointFluentDarkColors[args.point.index % 10];
            } else if (selectedTheme === 'fluent') {
                args.fill = bubbleFluentColors[args.point.index % 10];
                args.border.color = pointFluentColors[args.point.index % 10];
            } else if (selectedTheme === 'tailwind-dark') {
                args.fill = bubbleTailwindDarkColors[args.point.index % 10];
                args.border.color = pointTailwindDarkColors[args.point.index % 10];
            } else if (selectedTheme === 'tailwind') {
                args.fill = bubbleTailwindColors[args.point.index % 10];
                args.border.color = pointTailwindColors[args.point.index % 10];
            }
            else if (selectedTheme === 'material3') {
                args.fill = bubbleMaterial3Colors[args.point.index % 10];
                args.border.color = pointMaterial3Colors[args.point.index % 10];
            }
            else if (selectedTheme === 'material3-dark') {
                args.fill = bubbleMaterial3DarkColors[args.point.index % 10];
                args.border.color = pointMaterial3DarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'fluent2') {
                args.fill = bubbleFluent2Colors[args.point.index % 10];
                args.border.color = pointFluent2Colors[args.point.index % 10];
            }
            else if (selectedTheme === 'fluent2-highcontrast') {
                args.fill = bubbleFluent2HighContrastColors[args.point.index % 10];
                args.border.color = pointFluent2HighContrastColors[args.point.index % 10];
            }
            else if (selectedTheme === 'fluent2-dark') {
                args.fill = bubbleFluent2DarkColors[args.point.index % 10];
                args.border.color = pointFluent2DarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'tailwind3-dark') {
                args.fill = bubbleTailwind3DarkColors[args.point.index % 10];
                args.border.color = pointTailwind3DarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'tailwind3') {
                args.fill = bubbleTailwind3Colors[args.point.index % 10];
                args.border.color = pointTailwind3Colors[args.point.index % 10];
            }
        }
    };