/**
 * Sample for Stacked Column with Smart Labels
 */
this.default = function () {
    ej.charts.Chart.Inject(ej.charts.StackingColumnSeries, ej.charts.Category, ej.charts.DataLabel, ej.charts.Tooltip, ej.charts.Legend, ej.charts.Highlight);

    var chartData = [
        { x: 'Q1 2025', samsung: 72.3, apple: 56.2, xiaomi: 42.7, oppo: 7.4, vivo: 5.2, others: 70.7 },
        { x: 'Q2 2025', samsung: 75.9, apple: 57.1, xiaomi: 43.9, oppo: 6.2, vivo: 3.9, others: 4.9 },
        { x: 'Q3 2025', samsung: 80.1, apple: 60.3, xiaomi: 46.0, oppo: 4.8, vivo: 3.9, others: 78.9 },
        { x: 'Q4 2025', samsung: 85.5, apple: 62.7, xiaomi: 48.9, oppo: 6.4, vivo: 5.8, others: 81.5 }
    ];

    var seriesColors = ['#6355C7', '#00AEE0', '#FFB400', '#4CAF50', '#E56590', '#9B59B6'];
    var smallValueThreshold = 3;

    var createSmartLabelSettings = function (seriesColor) {
        return {
            visible: true,
            position: 'Top',
            format: '{value}M',
            labelIntersectAction: 'RelocateHorizontally',
            font: { color: '#FFFFFF', fontWeight: '700', size: '12px', fontFamily: 'Segoe UI' },
            margin: { left: 24, right: 24, top: 12, bottom: 12 },
            smartLabelSettings: {
                background: seriesColor,
                border: { color: seriesColor, width: 1.5 },
                connectorLineStyle: { color: seriesColor, width: 2 },
                pointerShape: 'Arrow'
            },
            rx: 7,
            ry: 7
        };
    };

    var hideTinyLabels = function (args) {
        if (!args.point || typeof args.point.y !== 'number') {
            return;
        }
        if (args.point.y < smallValueThreshold) {
            args.cancel = true;
        }
    };

    var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category',
            visible: true,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        primaryYAxis: {
            visible: true,
            title: 'Shipments (Millions of Units)',
            labelFormat: '{value}M',
            minimum: 0,
            maximum: 400,
            interval: 50,
            majorGridLines: { color: '#E2E8F0', width: 1 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },
        chartArea: {
            background: 'transparent',
            border: { width: 0 }
        },
        series: [
            {
                dataSource: chartData,
                xName: 'x',
                yName: 'samsung',
                type: 'StackingColumn',
                name: 'Samsung',
                fill: seriesColors[0],
                columnWidth: 0.5,
                marker: { dataLabel: createSmartLabelSettings(seriesColors[0]) }
            },
            {
                dataSource: chartData,
                xName: 'x',
                yName: 'apple',
                type: 'StackingColumn',
                name: 'Apple',
                fill: seriesColors[1],
                columnWidth: 0.5,
                marker: { dataLabel: createSmartLabelSettings(seriesColors[1]) }
            },
            {
                dataSource: chartData,
                xName: 'x',
                yName: 'xiaomi',
                type: 'StackingColumn',
                name: 'Xiaomi',
                fill: seriesColors[2],
                columnWidth: 0.5,
                marker: { dataLabel: createSmartLabelSettings(seriesColors[2]) }
            },
            {
                dataSource: chartData,
                xName: 'x',
                yName: 'oppo',
                type: 'StackingColumn',
                name: 'OPPO',
                fill: seriesColors[3],
                columnWidth: 0.5,
                marker: { dataLabel: createSmartLabelSettings(seriesColors[3]) }
            },
            {
                dataSource: chartData,
                xName: 'x',
                yName: 'vivo',
                type: 'StackingColumn',
                name: 'vivo',
                fill: seriesColors[4],
                columnWidth: 0.5,
                marker: { dataLabel: createSmartLabelSettings(seriesColors[4]) }
            },
            {
                dataSource: chartData,
                xName: 'x',
                yName: 'others',
                type: 'StackingColumn',
                name: 'Others',
                fill: seriesColors[5],
                columnWidth: 0.5,
                marker: { dataLabel: createSmartLabelSettings(seriesColors[5]) }
            }
        ],
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Global Smartphone Shipments by Vendor (2025)',
        subTitle: 'Smart labels automatically reposition small stacked-segment labels to avoid overlap.',
        legendSettings: { visible: true, position: 'Bottom', enableHighlight: true },
        tooltip: {
            enable: true,
            shared: true,
            format: '${series.name}: <b>${point.y}</b>',
            header: '${point.x}'
        },
        textRender: hideTinyLabels
    });

    chart.appendTo('#container');
};