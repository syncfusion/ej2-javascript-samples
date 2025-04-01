/**
 *  Sample for edit  functionalities
 */ var layoutColor;
 var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    if (selectedTheme.indexOf('dark') > -1) {
        if (selectedTheme.indexOf('material') > -1) {
            args.border.color = '#303030';
            this.layoutColor = '#303030';
        }
        else if (selectedTheme.indexOf('bootstrap5') > -1) {
            args.border.color = '#212529';
            this.layoutColor = '#212529';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
            this.layoutColor = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('fabric') > -1) {
            args.border.color = '#201f1f';
            this.layoutColor = '#201f1f';
        }
        else if (selectedTheme.indexOf('fluent') > -1) {
            args.border.color = '#252423';
            this.layoutColor = '#252423';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
            this.layoutColor = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('tailwind') > -1) {
            args.border.color = '#1F2937';
            this.layoutColor = '#1F2937';
        }
        else {
            args.border.color = '#222222';
            this.layoutColor = '#222222';
        }
    }
    else if (selectedTheme.indexOf('highcontrast') > -1) {
        args.border.color = '#000000';
        this.layoutColor = '#000000';
    }
    else if (selectedTheme.indexOf('fluent2-highcontrast') > -1) {
        args.border.color = '#000000';
        this.layoutColor = '#000000';
    }
    else {
        args.border.color = '#FFFFFF';
        this.layoutColor = '#FFFFFF';
    }
    if (selectedTheme.indexOf('highcontrast') > -1 || selectedTheme.indexOf('dark') > -1) {
        var element = document.querySelector('#header1');
        element.style.color = '#F3F2F1';
        var element1 = document.querySelector('#header2');
        element1.style.color = '#F3F2F1';
        var element2 = document.querySelector('#header3');
        element2.style.color = '#F3F2F1';
    }
     if (document.getElementById('defaultLayout')) {
         var layoutelement = document.querySelector('#layout_0template');
         layoutelement.style.background = this.layoutColor;
         var layoutelementBody = document.querySelector('#head1');
         layoutelementBody.style.setProperty('background', this.layoutColor);
         var layoutelement1 = document.querySelector('#layout_1template');
         layoutelement1.style.background = this.layoutColor;
         var layoutelement1Body = document.querySelector('#head2');
         layoutelement1Body.style.setProperty('background', this.layoutColor);
         var layoutelement2 = document.querySelector('#layout_2template');
         layoutelement2.style.background = this.layoutColor;
         var layoutelement2Body = document.querySelector('#head3');
         layoutelement2Body.style.setProperty('background', this.layoutColor);
     }
};
 this.default = function () {
    
    var dashboard = new ej.layouts.DashboardLayout({
        cellSpacing: [15, 15],
        cellAspectRatio: ej.base.Browser.isDevice ? 1 : 0.8,
        columns: ej.base.Browser.isDevice ? 2 : 8,
       
        panels: [{
            'sizeX': ej.base.Browser.isDevice ? 1 : 5, 'sizeY': ej.base.Browser.isDevice ? 1:  2, 'row': 0, 'col': 0,
            header: '<div class="title" id="header1">Sales - Yearly Performance</div>', content: '<div id="head1"  style="height:100%; width:100%"></div>'
        },
        {
            'sizeX': ej.base.Browser.isDevice ? 1 : 3, 'sizeY': ej.base.Browser.isDevice ? 1 : 2, 'row': 0, 'col': ej.base.Browser.isDevice ? 1 : 5,
            header: '<div class="title" id="header2">Product Wise Sales - 2024</div>', content: '<div id="head2"  style="height:100%; width:100%"></div>'
        },
        {
            'sizeX': ej.base.Browser.isDevice ? 1 : 8, 'sizeY': ej.base.Browser.isDevice ? 1 : 3, 'row': ej.base.Browser.isDevice ? 1 : 4, 'col': 0,
            header: '<div class="title" id="header3">Monthly Sales for 2024</div>', content: '<div id="head3"  style="height:100%; width:100%"></div>'
        }]
    
    });
    dashboard.appendTo('#defaultLayout');
    var linechartObj = new ej.charts.Chart({
        //Initializing Primary X Axis
     primaryYAxis: {
            minimum: 0, maximum: 100, majorTickLines: { width: 0 }, labelFormat: '{value}%', lineStyle: { width: 0 }, labelStyle: { size: '11px' }, titleStyle: { size: '13px' },
        },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', majorGridLines: { width: 0 }, labelStyle: { size: '11px' }
        },
        tooltip:{ enable: false },
        chartArea: { border: { width: 0 } },
        legendSettings:{ padding: 5, shapeHeight: 8, shapeWidth: 8, enableHighlight: true },
            height: '100%',
            width: '100%',
        //Initializing Chart Series
        series: [
            {
                dataSource: [   { Period: '2020', Percentage: 60 },
                { Period: '2021', Percentage: 56 },
                { Period: '2022', Percentage: 71 },
                { Period: '2023', Percentage: 85 },
                { Period: '2024', Percentage: 73 },],
                type:"Column", name:"Online" ,xName:"Period" ,yName:"Percentage", fill:'#2485FA', marker:{ dataLabel: { visible: true, position: 'Middle', font: { color: 'white' } } },
                cornerRadius: { topLeft: 4, topRight: 4}
            },
            {
                type:"Column",    name:"Retail" ,xName:"Period", yName:"Percentage", fill:'#FEC200', marker:{ dataLabel: { visible: true, position: 'Middle', font: { color: 'white' } } },
                cornerRadius: { topLeft: 4, topRight: 4},
                dataSource: [   { Period: '2020', Percentage: 40 },
                { Period: '2021', Percentage: 44 },
                { Period: '2022', Percentage: 29 },
                { Period: '2023', Percentage: 15 },
                { Period: '2024', Percentage: 27 },]                
            },
        ],
        load: lineChartTheme
    });
    linechartObj.appendTo('#head1');
    var pie = new ej.charts.AccumulationChart({
        enableSmartLabels: false,
        series: [
            {
                legendSettings:{ visible: false },
                tooltipMappingName :'Product',
                dataLabel:{
                    visible: true,
                    position: 'Outside', name: 'r',
                    connectorStyle: { length: '10px', type: 'Curve' }
                },
                palettes: ["#61EFCD", "#CDDE1F", "#FEC200", "#CA765A", "#2485FA", "#F57D7D", "#C152D2",
                "#8854D9", "#3D4EB8", "#00BCD7", "#4472c4", "#ed7d31", "#ffc000", "#70ad47", "#5b9bd5", "#c1c1c1", "#6f6fe2", "#e269ae", "#9e480e", "#997300"],
                dataSource: [
                    { Product: "TV : 30 (12%)", Percentage: 12, r: 'TV, 30<br>12%' },
                    { Product: "PC : 20 (8%)", Percentage: 8, r: 'PC, 20<br>8%' },
                    { Product: "Laptop : 40 (16%)", Percentage: 16, r: 'Laptop, 40<br>16%' },
                    { Product: "Mobile : 90 (36%)", Percentage: 36, r: 'Mobile, 90<br>36%' },
                    { Product: "Camera : 27 (11%)", Percentage: 11, r: 'Camera, 27<br>11%' },
                ],
                xName:"Product", yName:"Percentage", innerRadius:"40%", radius: "75%", startAngle: 270, endAngle: 270
            }

        ],
        pointRender: labelRender,
        tooltip: {
            enable: true, format: "${point.tooltip}", enableHighlight: true
        },
        enableBorderOnMouseMove:false,
        legendSettings: {
            visible: false, toggleVisibility: false
        },
       
        width: '99%',
        height: '100%',
        load: accumulationload
       
    });
    pie.appendTo('#head2');

    var chart = new ej.charts.Chart({
        //Initializing Primary Y Axis
        primaryYAxis: {
            majorTickLines: { width: 0 },
                minimum: 0, maximum: 12000, edgeLabelPlacement: 'Shift', labelFormat: '${value}', lineStyle: { width: 0 }, labelStyle: { size: '11px' }, titleStyle: { size: '13px' }
        },
        //Initializing Primary X Axis
        primaryXAxis: {
            majorTickLines: { width: 0 }, valueType: "Category", majorGridLines: { width: 0 }, labelStyle: { size: '11px' } 
        },
        legendSettings:{ enableHighlight: true }, tooltip:{ enable: true, shared: true, enableMarker: false }, chartArea:{ border: { width: 0 }},
        //Initializing Chart Series
        series: [
            {
                name: 'Online', xName: 'period', yName: 'percentage', type: 'SplineArea',
                width:2.5,
                fill: '#2485FA',
                dataSource: [
                    { period: 'Jan', percentage: 3600 }, { period: 'Feb', percentage: 6200 },
                    { period: 'Mar', percentage: 8100 }, { period: 'Apr', percentage: 5900 },
                    { period: 'May', percentage: 8900 }, { period: 'Jun', percentage: 7200 },
                    { period: 'Jul', percentage: 4300 }, { period: 'Aug', percentage: 4600 },
                    { period: 'Sep', percentage: 5500 }, { period: 'Oct', percentage: 6350 },
                    { period: 'Nov', percentage: 5700 }, { period: 'Dec', percentage: 8000 },
                ],
                border: { width: 2.75, color: '#2485FA' },
                opacity: 0.3
            },
            {
                border: { width: 2.75, color: '#FEC200'},  
                width:2.5,
                opacity: 0.3,
                dataSource: [
                    { period: 'Jan', percentage: 6400 }, { period: 'Feb', percentage: 5300 },
                    { period: 'Mar', percentage: 4900 }, { period: 'Apr', percentage: 5300 },
                    { period: 'May', percentage: 4200 }, { period: 'Jun', percentage: 6500 },
                    { period: 'Jul', percentage: 7900 }, { period: 'Aug', percentage: 3800 },
                    { period: 'Sep', percentage: 6800 }, { period: 'Oct', percentage: 3400 },
                    { period: 'Nov', percentage: 6400 }, { period: 'Dec', percentage: 6800 },
                ],
                name: 'Retail', xName: 'period', yName: 'percentage', type: 'SplineArea',
                fill: '#FEC200',
            }
        ],
        width: '99%',
        height: '100%',
        load: lineChartTheme

    });
    chart.appendTo('#head3');

    function lineChartTheme(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    }
    function accumulationload(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    }
    

   
};