/**
 * Default appearance of the range navigator
 */
var _this = this;
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
var themes = ['Material', 'Fabric', 'Bootstrap', 'HighContrast', 'Bootstrap5', 'Tailwind', 'MaterialDark', 'FabricDark', 'BootstrapDark', 'TailwindDark', 'Fluent', 'FluentDark', 'Material3', 'Material3Dark' , 'Bootstrap5Dark', 'Fluent2', 'Fluent2HighContrast', 'Fluent2Dark', 'tailwind3', 'tailwind3dark'];
var borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4', '#FD7E14',  '#5A61F6', '#00bdae', '#4472c4', '#5ECB9B',  '#8B5CF6', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#FD7E14', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
var regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(52, 58, 64, 0.1)', 'rgba(79, 70, 229, 0.3)',
    'rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)', 'rgba(173, 181, 189, 0.1)', 'rgba(139, 92, 246, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(26, 201, 230, 0.3)','rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(143, 128, 244, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];
this.renderDefaultChart = function (datasrc) {
    var range = new ej.charts.RangeNavigator({
        valueType: 'DateTime',
        tooltip: { enable: true, displayMode: 'Always' },
        value: [new Date('2017-09-01'), new Date('2018-02-01')],
        labelFormat: 'MMM-yy',
        navigatorStyleSettings: {
            unselectedRegionColor: 'transparent',
            selectedRegionColor: regionColor[themes.indexOf(theme)]
        },
        series: [
            {
                dataSource: datasrc,
                xName: 'x', yName: 'y', type: 'Area', width: 2,
                fill: 'url(#' + selectedTheme + '-gradient-chart)',
                border: { width: 2, color: borderColor[themes.indexOf(theme)] }
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        theme: theme
    });
    range.appendTo('#container');
};
this.default = function () {
    var datasrc;
    var fetchApi = new ej.base.Fetch('./src/range-navigator/data-source/default_data.json', 'GET', true);
    fetchApi.send().then();
    fetchApi.onSuccess = function (data) {
        datasrc = data;
        datasrc.map(function (data) {
            data.x = new Date(data.x);
        });
        _this.renderDefaultChart(datasrc);
    };
};