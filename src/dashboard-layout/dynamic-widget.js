/**
 *  Sample for edit  functionalities
 */
this.default = function () {
    var dashboard = new ej.layouts.DashboardLayout({
        cellSpacing: [10, 10],
        cellAspectRatio: 100 / 85,
        columns:2,
        allowDragging: false,
        allowResizing: false,
        resizeStop: onPanelResize,
        panels: [{
            'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
            header: '<div>Line Chart</div>', content: '<div id="linechart" style="height:100%; width:100%"></div>'
        },
        {
            'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 1,
            header: '<div>Pie Chart</div>', content: '<div id="pie" style="height:100%; width:100%"></div>'
        },
        {
            'sizeX': 2, 'sizeY': 1, 'row': 1, 'col': 0,
            header: '<div>Spline Chart</div>', content: '<div id="chart" style="height:100%; width:100%"></div>'
        }]

    });
    dashboard.appendTo('#defaultLayout');
    var toggleBtn = new ej.buttons.Button({
        cssClass: 'e-outline e-flat e-primary',
        iconCss: 'edit',
        isToggle: true
    });
    toggleBtn.appendTo('#togglebtn');
    toggleBtn.element.onclick = function () {
        if (toggleBtn.element.classList.contains('e-active')) {
            dashboardObject.allowDragging = true;
            dashboardObject.allowResizing = true;         
            toggleBtn.content = "SAVE";
            toggleBtn.iconCss = "save";
            document.getElementById('dialogBtn').style.display = 'block';
        } else {
            dashboardObject.allowResizing = false;
            dashboardObject.allowDragging = false;
            toggleBtn.content = "EDIT";
            toggleBtn.iconCss = "edit";
            document.getElementById('dialogBtn').style.display = 'none';
        }
    };

    function onPanelResize(args) {
        if (args.element && args.element.querySelector('.e-panel-container .e-panel-content div')) {
            var chartObj = (args.element.querySelector('.e-panel-container .e-panel-content div')).ej2_instances[0];
            chartObj.height = '95%';
            chartObj.width = '100%';
            chartObj.refresh();
        }
    }



    var linechartObj = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryYAxis: {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        height: '100%',
        width: '99%',
        //Initializing Chart Series
        series: [
            {
                dataSource: [{ x: 'Jan', y: 46 }, { x: 'Feb', y: 27 }, { x: 'Mar', y: 26 }],
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Jan', fill: '#00bdae',
                marker: {
                    dataLabel: {
                        visible: false, position: 'Top', font: {
                            fontWeight: '600', color: '#ffffff'
                        }
                    }
                }
            },
            {
                marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Feb', fill: '#e56691',
                dataSource: [{ x: 'Jan', y: 37 }, { x: 'Feb', y: 23 }, { x: 'Mar', y: 18 }]                
            },
            {
                dataSource: [{ x: 'Jan', y: 38 }, { x: 'Feb', y: 17 }, { x: 'Mar', y: 26 }],
                type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Mar', fill: '#357cd2',
                marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        load: lineChartTheme
    });
    linechartObj.appendTo('#linechart');
    var pie = new ej.charts.AccumulationChart({
        series: [
            {
                
                palettes: ['#00bdae', '#357cd2', '#e56691'],
                dataSource: [
                    { 'x': 'Jan', y: 12.5, text: 'January' },
                    { 'x': 'Feb', y: 25, text: 'February' },
                    { 'x': 'Mar', y: 50, text: 'March' },
                ],
                xName: 'x', 
                radius: '100%', startAngle: 0, yName: 'y', innerRadius: '40%', endAngle: 360, 
                name: 'Earnings',
                dataLabel: {
                    visible: true,
                    name: 'value',
                    position: 'Inside'
                }
            }

        ],
        tooltip: {
            enable: true,
            header: '<b>${point.x}</b>',
            format: 'Composition : <b>${point.y}%</b>'
        },

        legendSettings: {
            visible: false, toggleVisibility: false
        },
        width: '99%',
        height: '100%',
        load: themeAccumulation
    });
    pie.appendTo('#pie');

    var chart = new ej.charts.Chart({
        //Initializing Primary Y Axis
        primaryYAxis: {
            maximum: 4, interval: 1,
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'MMM',
            majorGridLines: { width: 0 },
            intervalType: 'Months',
            edgeLabelPlacement: 'Shift'
        },
        //Initializing Chart Series
        series: [
            {
                name: 'Jan', xName: 'x', yName: 'y', type: 'SplineArea',
                fill: 'rgb(239, 183, 202)',
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.5 },
                    { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.7 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.6 },
                    { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.9 },
                    { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.2 }
                ],
                border: { color: 'transparent' },
                opacity: 0.5
            },
            {
                border: { color: 'transparent' },
                opacity: 0.5,
                dataSource: [
                    { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.7 },
                    { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.1 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.6 },
                    { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.7 },
                    { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.2 }
                ],
                name: 'Feb', xName: 'x', yName: 'y', type: 'SplineArea',
                fill: 'rgb(0, 189, 174)',
            }
        ],
        width: '99%',
        height: '100%',
        load: lineChartTheme
    });
    chart.appendTo('#chart');


    var dashboardObject = document.getElementById('defaultLayout').ej2_instances[0];

    var dialogObj = new ej.popups.Dialog({
        width: '500px',
        header: 'Add a widget',
        showCloseIcon: true,
        animationSettings: { effect: 'Zoom' },
        content: document.getElementById('dialogcontent'),
        target: document.getElementById('target'),
        isModal: true,
        height: '260px',
        visible: false
    });
    dialogObj.appendTo('#modalDialog');
    dialogObj.hide();

    var count = 3;
    document.getElementById('dialogBtn').onclick = function () {

        dialogObj.show();
        window.lineTemplateClick = function() {
            var countValue = count.toString();
            var panel = [{
                'id': '_layout' + countValue, 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
                header: '<div>Line Chart</div>', content: '<div id=_line' + countValue + ' style="height:100%; width:100%"></div>'
            }];
            count = count + 1;
            dashboardObject.addPanel(panel[0]);

            var linechartObj = new ej.charts.Chart({
                chartArea: { border: { width: 0 } },
                 //Initializing Primary X Axis
                 primaryXAxis: {
                    valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
                },
                width: '99%',
                //Initializing Primary X Axis
                primaryYAxis: {
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
                },
                height: '100%',
                //Initializing Chart Series
                series: [
                    {
                        type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Jan', fill: '#00bdae',
                        dataSource: [{ x: 'Jan', y: 46 }, { x: 'Feb', y: 27 }, { x: 'Mar', y: 26 }],
                        marker: {
                            dataLabel: {
                                visible: false, position: 'Top', font: {
                                    fontWeight: '600', color: '#ffffff'
                                }
                            }
                        }
                    },
                    {
                        type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Feb', fill: '#e56691',
                        dataSource: [{ x: 'Jan', y: 37 }, { x: 'Feb', y: 23 }, { x: 'Mar', y: 18 }],
                        marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
                    },
                    {
                        type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Mar', fill: '#357cd2',
                        dataSource: [{ x: 'Jan', y: 38 }, { x: 'Feb', y: 17 }, { x: 'Mar', y: 26 }],
                        marker: { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
                    }
                ],
                load: lineChartTheme
            });
            linechartObj.appendTo('#' + '_line' + countValue);
            linechartObj.refresh();
            dialogObj.hide();
        };
        window.pieTemplateClick = function() {
            var  countValue = count.toString();
            var panel = [{
                'id': '_layout' + countValue, 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
                header: '<div>Pie Chart</div>', content: '<div id=_pie' + countValue + ' style="height:100%; width:100%"></div>'
            }];
            count = count + 1;
            dashboardObject.addPanel(panel[0]);
            var pie = new ej.charts.AccumulationChart({
                series: [
                    {
                        dataSource: [
                            { 'x': 'Jan', y: 12.5, text: 'January' },
                            { 'x': 'Feb', y: 25, text: 'February' },
                            { 'x': 'Mar', y: 50, text: 'March' },
                        ],
                        palettes: ['#00bdae', '#357cd2', '#e56691'],
                        radius: '100%', xName: 'x', yName: 'y', startAngle: 0, endAngle: 360, innerRadius: '40%', name: 'Earnings',
                        dataLabel: {
                            visible: true,
                            name: 'value',
                            position: 'Inside'
                        }
                    }

                ],
                tooltip: {
                    enable: true,
                    header: '<b>${point.x}</b>',
                    format: 'Composition : <b>${point.y}%</b>'
                },

                legendSettings: {
                    visible: false, toggleVisibility: false
                },
                width: '99%',
                height: '100%',
                load: themeAccumulation
            });
            pie.appendTo('#' + '_pie' + countValue);
            pie.refresh();
            dialogObj.hide();
        };
        window.splineTemplateClick = function() {
            var countValue = count.toString();
            var panel = [{
                'id': '_layout' + countValue, 'sizeX': 2, 'sizeY': 1, 'row': 0, 'col': 0,
                header: '<div>Spline Chart</div>', content: '<div id=_spline' + countValue + ' style="height:100%; width:100%"></div>'
            }];
            count = count + 1;
            dashboardObject.addPanel(panel[0]);
            var chart = new ej.charts.Chart({
                //Initializing Primary X Axis
                primaryXAxis: {
                    valueType: 'DateTime',
                    labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    intervalType: 'Months',
                    edgeLabelPlacement: 'Shift'
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    maximum: 4, interval: 1,
                    labelFormat: '{value}',
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 }
                },
                chartArea: {
                    border: {
                        width: 0
                    }
                },
                //Initializing Chart Series
                series: [
                    {
                        dataSource: [
                            { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.4 },
                            { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.6 },
                            { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.5 },
                            { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.8 },
                            { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.1 }
                        ],
                        name: 'Jan', xName: 'x', yName: 'y', type: 'SplineArea',
                        border: { color: 'transparent' },
                        fill: 'rgb(239, 183, 202)',
                        opacity: 0.5
                    },
                    {
                        dataSource: [
                            { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.7 },
                            { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.1 },
                            { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.7 },
                            { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.8 },
                            { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.3 }
                        ],
                        name: 'Feb', xName: 'x', yName: 'y', type: 'SplineArea',
                        border: { color: 'transparent' },
                        fill: 'rgb(0, 189, 174)',
                        opacity: 0.5
                    }
                ],
                width: '99%',
                height: '100%',
                load: lineChartTheme
            });
            chart.appendTo('#' + '_spline' + countValue);
            chart.refresh();
            dialogObj.hide();
        };
    };

    function lineChartTheme(args) {
        var chartTheme = location.hash.split('/')[1];
        chartTheme = chartTheme ? chartTheme: 'Material';
        args.chart.theme = (chartTheme.charAt(0).toUpperCase() + chartTheme.slice(1)).replace(/-dark/i, 'Dark');
    }
    function themeAccumulation(args) {
        var pieTheme = location.hash.split('/')[1];
        pieTheme = pieTheme ? pieTheme : 'Material';
        args.accumulation.theme = (pieTheme.charAt(0).toUpperCase() + pieTheme.slice(1)).replace(/-dark/i, 'Dark');
    }
};
