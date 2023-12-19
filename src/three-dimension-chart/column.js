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
    var pointTailwindColors = ["rgba(90, 97, 246, 0.5)", "rgba(101, 163, 13, 0.5)", "rgba(51, 65, 85, 0.5)", "rgba(20, 184, 166, 0.5)", "rgba(139, 92, 246, 0.5)", "rgba(3, 105, 161, 0.5)", "rgba(249, 115, 22, 0.5)",
        "rgba(147, 51, 234, 0.5)", "rgba(245, 158, 11, 0.5)", "rgba(21, 128, 61, 0.5)"
    ];
    var pointTailwindDarkColors = ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6",
        "#10B981"];
    var pointBootstrap5Colors = ["#6355C7", "#FFB400", "#2196F5", "#F7523F", "#963C70", "#4BE0BC", "#FD7400", "#C9E422", "#0C7DA0",
        "#162F88"];
    var pointBootstrap5DarkColors = ["#8F80F4", "#FFD46D", "#6CBDFF", "#FF7F71", "#FF6DB3", "#63F5D2", "#FCAA65", "#ECFF77", "#EF8EFF",
        "#5F82FD"];
    var pointMaterial3Colors = ["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"];
    var pointMaterial3DarkColors = ["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7", "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"];
    var labelRender = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
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
        } else if (selectedTheme === 'material3') {
            args.fill = pointMaterial3Colors[args.point.index % 10];
        }
        else if (selectedTheme === 'material3-dark') {
            args.fill = pointMaterial3DarkColors[args.point.index % 10];
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
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
        // custom code end
    });
    chart3D.appendTo('#column-container');
};