/**
 * Sample for Column Series
 */

this.default = function () {
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
    var pointBootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2'];
    var pointBootstrap5DarkColors =  ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2'];
    var pointMaterial3Colors = ["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"];
    var pointMaterial3DarkColors = ["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7", "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"];
    var pointFluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
    "#C19C00"];
    var pointFluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
    "#0B6A0B", "#C19C00"];
    var labelRender = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = pointFabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material-dark') {
            args.fill = pointMaterialDarkColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = pointMaterialColors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap5-dark') {
            args.fill = pointBootstrap5DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap5') {
            args.fill = pointBootstrap5Colors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap') {
            args.fill = pointBootstrapColors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap4') {
            args.fill = pointBootstrapColors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap-dark') {
            args.fill = pointBootstrapColors[args.point.index % 10];
        } else if (selectedTheme === 'highcontrast') {
            args.fill = pointHighContrastColors[args.point.index % 10];
        } else if (selectedTheme === 'fluent-dark') {
            args.fill = pointFluentDarkColors[args.point.index % 10];
        } else if (selectedTheme === 'fluent') {
            args.fill = pointFluentColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind-dark') {
            args.fill = pointTailwindDarkColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind') {
            args.fill = pointTailwindColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind3-dark') {
            args.fill = pointTailwind3DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind3') {
            args.fill = pointTailwind3Colors[args.point.index % 10];
        } else if (selectedTheme === 'material3') {
            args.fill = pointMaterial3Colors[args.point.index % 10];
        } else if (selectedTheme === 'material3-dark') {
            args.fill = pointMaterial3DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'fluent2') {
            args.fill = pointFluent2Colors[args.point.index % 10];
        } else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
            args.fill = pointFluent2HighContrastColors[args.point.index % 10];
        }
    };
    var chart3D = new ej.charts.Chart3D({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelRotation:  -45,
            labelPlacement: 'BetweenTicks'
        },
        primaryYAxis:
        {
            maximum: 150000, interval: 30000
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', yName: 'y', columnSpacing: 0.1,
                dataSource: [{ x: 'Tesla', y: 137429 },{ x: 'Aion', y: 80308 }, { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 }, { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 }, { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 } ],
            }
        ],
        wallColor: 'transparent',
        enableRotation: true,
        rotation: 7,
        tilt: 10,
        depth: 100,
        height: '400',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        //Initializing Chart title
        title: 'Top Selling Electric Cars in China',
        tooltip: { enable: true, header: "${point.x}", format: 'Sales Count : <b>${point.y}' },
        legendSettings: { enableHighlight: true, visible: false },
        axisLabelRender: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                var value = Number(args.text) / 1000;
                args.text = (typeof value === 'number' && !isNaN(value)) ? String(value) + 'k' : args.text;
            }
        },
        pointRender: labelRender,
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });
    chart3D.appendTo('#column-container');
};
