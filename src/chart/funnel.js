/**
 * Sample for Funnel Chart
 */
this.default = function () {
    var pointRenderer = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
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
    
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = pointFabricColors[0];
        } else if (selectedTheme === 'material-dark') {
            args.fill = pointMaterialDarkColors[0];
        } else if (selectedTheme === 'material') {
            args.fill = pointMaterialColors[0];
        } else if (selectedTheme === 'bootstrap5-dark') {
            args.fill = pointBootstrap5DarkColors[0];
        } else if (selectedTheme === 'bootstrap5') {
            args.fill = pointBootstrap5Colors[0];
        } else if (selectedTheme === 'bootstrap') {
            args.fill = pointBootstrapColors[0];
        } else if (selectedTheme === 'bootstrap4') {
            args.fill = pointBootstrapColors[0];
        } else if (selectedTheme === 'bootstrap-dark') {
            args.fill = pointBootstrapColors[0];
        } else if (selectedTheme === 'highcontrast') {
            args.fill = pointHighContrastColors[0];
        } else if (selectedTheme === 'fluent-dark') {
            args.fill = pointFluentDarkColors[0];
        } else if (selectedTheme === 'fluent') {
            args.fill = pointFluentColors[0];
        } else if (selectedTheme === 'tailwind-dark') {
            args.fill = pointTailwindDarkColors[0];
        } else if (selectedTheme === 'tailwind') {
            args.fill = pointTailwindColors[0];
        } else if (selectedTheme === 'material3-dark') {
            args.fill = pointMaterial3DarkColors[0];
        } else if (selectedTheme === 'material3') {
            args.fill = pointMaterial3Colors[0];
        } else if (selectedTheme === 'fluent2') {
            args.fill = pointFluent2Colors[0];
        } else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
            args.fill = pointFluent2HighContrastColors[0];
        } else if (selectedTheme === 'tailwind3-dark') {
            args.fill = pointTailwind3DarkColors[0];
        } else if (selectedTheme === 'tailwind3') {
            args.fill = pointTailwind3Colors[0];
        }
    };
    var data = [
        { x: "Candidates Applied", y: 170, text: "Applications Received: 170" },
        { x: "Initial Validation", y: 145, text: "Initial Validation: 145" },
        { x: "Screening", y: 105, text: ej.base.Browser.isDevice ? "Screening <br> Completed: 105" : "Screening Completed: 105" },
        { x: "Telephonic Interview", y: 85, text: ej.base.Browser.isDevice ? "Phone <br> Interview: 85" : "Phone Interview: 85" },
        { x: "Personal Interview", y: 58, text: ej.base.Browser.isDevice ? "Final <br> Interview: 58" : "Final Interview: 58" },
        { x: "Hired", y: 30, text: "Final <br> Selections: 30" }
    ];
    var chart = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [{
            type: 'Funnel', dataSource: data, xName: 'x', yName: 'y',
            name: '2017 Population',
            dataLabel: {
                visible: true, position: 'Inside',
                name: 'text', font: { fontWeight: '600', size: ej.base.Browser.isDevice ? '11px' : '13px' }, connectorStyle: { length: '20px' }
            },
            explode: false,
            funnelMode: 'Trapezoidal'
        }],
        legendSettings: { visible: false },
        //Initializing tooltip
        tooltip: { enable: false, format: '${point.x} : <b>${point.y}</b>' },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var funnelTheme = location.hash.split('/')[1];
            funnelTheme = funnelTheme ? funnelTheme : 'Fluent2';
            args.accumulation.theme = (funnelTheme.charAt(0).toUpperCase() +
                funnelTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        pointRender: pointRenderer,
        //Initializing Title
        title: 'Recruitment Funnel: From Application to Hiring',
    });
    chart.appendTo('#funnel-container');
};