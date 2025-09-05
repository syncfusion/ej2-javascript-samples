var chartData = [
    { Month: 'January', Value: 19173 },
    { Month: 'February', Value: 17726 },
    { Month: 'March', Value: 19874 },
    { Month: 'April', Value: 19391 },
    { Month: 'May', Value: 20072 },
    { Month: 'June', Value: 19233 }
];

this.default = function () {
    var hasData = false;

    var chart = new ej.charts.Chart({
        title: 'Milk Production in US - 2025',
        subTitle: 'Source: nass.usda.gov',
        primaryXAxis: { valueType: 'Category',majorGridLines: { width: 0 },majorTickLines: { width: 0 }},
        primaryYAxis: { title: 'Production (in million pounds)', titleStyle: { fontWeight: '600' },majorTickLines: { width: 0 },lineStyle: { width: 0 }},
        series: [{
            dataSource: [],
            xName: 'Month',
            yName: 'Value',
            type: 'Line',
            marker:
            {
                visible: true,
                width:7,
                height:7
            },
            width:2,
        }],
        chartArea: {
        border: { width: 0 }   
        },
        tooltip: { enable: true,header: 'Milk Production', format: '${point.x} : <b>${point.y}M</b>' },
        animation: { enable: true },
        noDataTemplate: '<div id="noDataTemplateContainer" class="light-bg">' +
                    '<div class="template-align">' +
                        '<img src="src/chart/images/no-data.png" alt="No Data"/>' +
                    '</div>' +
                    '<div class="template-align">' +
                        '<p style="font-size: 15px; margin: 10px 0 0;"><strong>No data available to display.</strong></p>' +
                    '</div>' +
                    '<div class="template-align">' +
                        '<button id="loadDataBtn" style="margin-top: 15px;"></button>' +
                    '</div>' +
                '</div>',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        loaded: function (args) {
            var selectedTheme = args.chart.theme;
            var noDataDiv = document.getElementById("noDataTemplateContainer");
            if (noDataDiv) {
                noDataDiv.className = selectedTheme.indexOf("Dark") > -1 || selectedTheme.indexOf("HighContrast") > -1 ? 'dark-bg' : 'light-bg';
            }
            var btnElem = document.getElementById('loadDataBtn');
            if (btnElem) {
                var loadBtn = new ej.buttons.Button({
                    content: 'Load Data',
                    iconCss: 'e-icons e-refresh',
                    cssClass: 'e-outline',
                    isPrimary: false
                }, btnElem);

                loadBtn.element.addEventListener('click', function () {
                    hasData = true;
                    chart.series[0].dataSource = chartData;

                    var values = chartData.map(function (d) { return d.Value; });
                    var min = Math.min.apply(null, values);
                    var max = Math.max.apply(null, values);
                    var range = max - min;
                    chart.primaryYAxis.minimum = Math.floor(min - range * 0.1);
                    chart.primaryYAxis.maximum = Math.ceil(max + range * 0.1);
                    chart.primaryYAxis.interval = Math.ceil(range / 5);
                    chart.series[0].animation.enable = true;
                    chart.noDataTemplate = '';
                    chart.refresh();
                });
            }
        }
    });

    chart.appendTo('#container');
};
