var fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
'#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
var materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
    '#ea7a57', '#404041', '#00bdae'];
var bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
    '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
var highcontrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
var fluentColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
    "#7D39C0"];
var fluentDarkColors =  ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
"#7D39C0"];
var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
    "#C19C00"];
var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
    "#0B6A0B", "#C19C00"];
var pointTailwindColors = ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
var pointTailwindDarkColors =  ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6", "#10B981"];
var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = highcontrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent') {
        args.fill = fluentColors[args.point.index % 10];
    } 
    else if (selectedTheme === 'fluent-dark') {
        args.fill = fluentDarkColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % 10];
    } 
    else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
        args.fill = fluent2HighContrastColors[args.point.index % 10];
    }else if (selectedTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind3') {
        args.fill = pointTailwind3Colors[args.point.index % 10];
    } else if (selectedTheme === 'tailwind3-dark') {
        args.fill = pointTailwind3DarkColors[args.point.index % 10];
    }
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
/**
 * Samples for Smart Axis Labels
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: 'Hide',
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelStyle: { size: '0px'  },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            lineStyle: { width: 0 },
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [{ x: 'South Korea', y: 39 }, { x: 'India', y: 61 },
                { x: 'Pakistan', y: 20 }, { x: 'Germany', y: 65 },
                { x: 'Australia', y: 16 }, { x: 'Italy', y: 29 },
                { x: 'France', y: 45 }, { x: 'United Arab Emirates', y: 10 },
                { x: 'Russia', y: 41 }, { x: 'Mexico', y: 31 },
                { x: 'Brazil', y: 76 }, { x: 'China', y: 51 }],
                xName: 'x', width: 2, name: 'Users',
                yName: 'y', marker: { dataLabel: { visible: true, enableRotation: ej.base.Browser.isDevice ? true : false, angle: -90, position: 'Top', format: "{value}M", font: { fontWeight: '600' } } }
            },
        ],
        //Initializing Chart Title
        title: 'Internet Users in Millions',
        //Initializing Tooltip
        tooltip : { enable: true, header: '', format: '<b>${point.x}</b> <br> Internet Users : <b>${point.y}M</b>' },
        pointRender: labelRender,
        legendSettings: { visible: false },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
           // custom code end
    });
    chart.appendTo('#smart-container');
    chart.series[0].animation.enable = false;
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.primaryXAxis.labelIntersectAction = mode.value;
            chart.refresh();
        }
    });
    mode.appendTo('#selmode');
    var edgeMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.primaryXAxis.edgeLabelPlacement = edgeMode.value;
            chart.dataBind();
        }
    });
    edgeMode.appendTo('#edgemode');

    var labelMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.primaryXAxis.labelPosition = labelMode.value;
            chart.dataBind();
        }
    });
    labelMode.appendTo('#labelmode');
    document.getElementById('Trim').onchange = function () {
        var trim = document.getElementById('Trim');
        if (trim.checked) {
            chart.primaryXAxis.enableTrim = (trim.value === 'true');
            chart.series[0].animation.enable = false;
        }
        else {
            chart.primaryXAxis.enableTrim = (trim.value === 'false');
        }
        chart.refresh();
    };
    var labelWidth = new ej.inputs.NumericTextBox({
        value: 34, min: 1, max: 120, width: 120, step: 1,
        change: function () {
            chart.primaryXAxis.maximumLabelWidth = labelWidth.value;
            chart.refresh();
        }
    });
    labelWidth.appendTo('#LabelWidth');
};