this.default = function () {
    var jsonCellData = [
        { 'rowId': 'Improbable', 'columnId': 'Negligible', 'value': '2', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Low', 'value': '4', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Moderate', 'value': '6', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Significant', 'value': '8', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Improbable', 'columnId': 'Catastrophic', 'value': '10', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Remote', 'columnId': 'Negligible', 'value': '4', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Remote', 'columnId': 'Low', 'value': '16', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Remote', 'columnId': 'Moderate', 'value': '24', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Remote', 'columnId': 'Significant', 'value': '32', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Remote', 'columnId': 'Catastrophic', 'value': '40', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Negligible', 'value': '6', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Occasional', 'columnId': 'Low', 'value': '24', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Moderate', 'value': '36', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Significant', 'value': '48', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Occasional', 'columnId': 'Catastrophic', 'value': '60', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Negligible', 'value': '8', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Probable', 'columnId': 'Low', 'value': '32', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Moderate', 'value': '48', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Significant', 'value': '64', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Probable', 'columnId': 'Catastrophic', 'value': '80', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Negligible', 'value': '10', 'image': './src/heatmap-chart/images/green-cross.png' },
        { 'rowId': 'Frequent', 'columnId': 'Low', 'value': '40', 'image': './src/heatmap-chart/images/orange-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Moderate', 'value': '60', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Significant', 'value': '80', 'image': './src/heatmap-chart/images/red-tick.png' },
        { 'rowId': 'Frequent', 'columnId': 'Catastrophic', 'value': '100', 'image': './src/heatmap-chart/images/red-tick.png' }
    ];
    var heatmap = new ej.heatmap.HeatMap({
        xAxis: {
            labels: ["Improbable", "Remote", "Occasional", "Probable", "Frequent"],
            textStyle: {
                fontFamily: 'inherit'
            },
            title: {
                text: 'LIKELIHOOD',
                textStyle: {
                    fontFamily: 'inherit'
                }
            },
        },
        yAxis: {
            labels: ["Negligible", "Low", "Moderate", "Significant", "Catastrophic"],
            textStyle: {
                fontFamily: 'inherit'
            },
            title: {
                text: 'IMPACT',
                textStyle: {
                    fontFamily: 'inherit'
                }
            },
        },
        dataSource: jsonCellData,
        dataSourceSettings: {
            isJsonData: true,
            adaptorType: 'Cell',
            xDataMapping: 'rowId',
            yDataMapping: 'columnId',
            valueMapping: 'value'
        },
        paletteSettings: {
            type: 'Fixed',
            palette: [{ value: "2", color: "#61c961" },
                { value: "24", color: "#fcc81c" },
                { value: "48", color: "#ff6354" }
            ],
        },
        cellSettings: {
            labelTemplate: '<div><img alt="Description of the label template" src="${image}" style="width: 35px; height: 35px;"/></div>',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
            visible: false
        },
        tooltipSettings: {
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        load: function (args) {
            // custom code start
            var labelTemplateTheme = location.hash.split('/')[1];
            labelTemplateTheme = labelTemplateTheme ? labelTemplateTheme : 'Material';
            args.heatmap.theme = (labelTemplateTheme.charAt(0).toUpperCase() +
                labelTemplateTheme.slice(1)).replace(/-dark/i, "Dark").replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    heatmap.appendTo('#container');
};
