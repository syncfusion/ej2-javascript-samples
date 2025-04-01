this.default = function () {
    // custom code start
    var seriesload = function(args) {
        var seriestheme = location.hash.split('/')[1];
        seriestheme = seriestheme ? seriestheme : 'Fluent2';
        args.sparkline.theme = (seriestheme.charAt(0).toUpperCase() + seriestheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    // custom code end
    var line = new ej.charts.Sparkline({
        lineWidth: 1,
        type: 'Line',
        fill: '#3C78EF',
        height: '80px',
        width: '90%',
        // custom code start
        load: seriesload, 
        // custom code end
        tooltipSettings: {
            trackLineSettings: {
                visible: true
            },
            visible: true,
            format: '${x} : ${yval}'           
        },       
        valueType: 'Numeric',
        dataSource: [
            { x: 1, yval: 5 },
            { x: 2, yval: 6 },
            { x: 3, yval: 5 },
            { x: 4, yval: 7 },
            { x: 5, yval: 4 },
            { x: 6, yval: 3 },
            { x: 7, yval: 9 },
            { x: 8, yval: 5 },
            { x: 9, yval: 6 },
            { x: 10, yval: 5 },
            { x: 11, yval: 7 },
            { x: 12, yval: 8 },
            { x: 13, yval: 4 },
            { x: 14, yval: 5 },
            { x: 15, yval: 3 },
            { x: 16, yval: 4 },
            { x: 17, yval: 11 },
            { x: 18, yval: 10 },
            { x: 19, yval: 2 },
            { x: 20, yval: 12 },
            { x: 21, yval: 4 },
            { x: 22, yval: 7 },
            { x: 23, yval: 6 },
            { x: 24, yval: 8 },
        ],
        xName: 'x', yName: 'yval',        
        markerSettings: {
            visible: ['All'],
            size: 2.5,
            fill: 'blue',
        }
    });
    line.appendTo('#line');
    var area = new ej.charts.Sparkline({
        border: { color: '#3C78EF', width: 2 },
        valueType: 'Category',
        axisSettings: {
            lineSettings: {
                visible: true
            }
        },
        height: '80px',
        width: '90%',
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1,
        type: 'Area',
        opacity: 1,
        fill: '#b2cfff',        
        dataSource: [            
            { x: 1, xval: 'Jan', yval: 34 },
            { x: 2, xval: 'Feb', yval: 36 },
            { x: 3, xval: 'Mar', yval: 32 },
            { x: 4, xval: 'Apr', yval: 35 },
            { x: 5, xval: 'May', yval: 40 },
            { x: 6, xval: 'Jun', yval: 38 },
            { x: 7, xval: 'Jul', yval: 33 },
            { x: 8, xval: 'Aug', yval: 37 },
            { x: 9, xval: 'Sep', yval: 34 },
            { x: 10, xval: 'Oct', yval: 31 },
            { x: 11, xval: 'Nov', yval: 30 },
            { x: 12, xval: 'Dec', yval: 29 },
        ],
        xName: 'xval', yName: 'yval',
        tooltipSettings: {
            format: '${xval} : ${yval}°C',
            visible: true,            
            trackLineSettings: {
                visible: true
            }
        }
    });
    area.appendTo('#area');
    var column = new ej.charts.Sparkline({
       
        fill: '#3C78EF',
        type: 'Column',
        valueType: 'Category',
        highPointColor: '#14aa21',
        xName: 'xval', yName: 'yval',        
        dataSource: [
            { x: 1, xval: 'Jan', yval: 10 },
            { x: 2, xval: 'Feb', yval: 6 },
            { x: 3, xval: 'Mar', yval: 8 },
            { x: 4, xval: 'Apr', yval: -5 },
            { x: 5, xval: 'May', yval: 11 },
            { x: 6, xval: 'Jun', yval: 5 },
            { x: 7, xval: 'Jul', yval: -2 },
            { x: 8, xval: 'Aug', yval: 7 },
            { x: 9, xval: 'Sep', yval: -3 },
            { x: 10, xval: 'Oct', yval: 6 },
            { x: 11, xval: 'Nov', yval: 8 },
            { x: 12, xval: 'Dec', yval: 10 },    
        ],
        height: '80px',
        width: '90%', 
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1,
        tooltipSettings: {
            visible: true,
            format: '${xval} : ${yval}',
        }
    });
    column.appendTo('#column');
    var winloss = new ej.charts.Sparkline({
        height: '80px',
        width: '90%',
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1,
        type: 'WinLoss',
        fill: '#3C78EF',
        negativePointColor: '#fc5070',
        valueType: 'Numeric',
        dataSource: [12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10],
        tooltipSettings: {
            format: '${x} : ${y}',
        }
    });
    winloss.appendTo('#winloss');
    var pie1 = new ej.charts.Sparkline({
        height: '40px',
        width: '100%',
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1,
        type: 'Pie',
        valueType: 'Category',
        xName: 'x', yName: 'y',
        dataSource: [{ x: 'Gold', y: 46 }, { x: 'Silver', y: 37 }, { x: 'Bronze', y: 38 }],
        tooltipSettings: {
            visible: true,
            format: '${x} : ${y}',
        }
    });
    pie1.appendTo('#pie1');
    var pie2 = new ej.charts.Sparkline({
      
        type: 'Pie',
        valueType: 'Category',
        xName: 'x', yName: 'y',
        height: '40px',
        width: '100%',
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1,
        dataSource: [{ x: 'Gold', y: 27 }, { x: 'Silver', y: 23 }, { x: 'Bronze', y: 17 }],
        tooltipSettings: {
            visible: true,
            format: '${x} : ${y}',
        }
    });
    pie2.appendTo('#pie2');
    var pie3 = new ej.charts.Sparkline({
        dataSource: [{ x: 'Gold', y: 26 }, { x: 'Silver', y: 18 }, { x: 'Bronze', y: 26 }],
        tooltipSettings: {
            visible: true,
            format: '${x} : ${y}',
        },
        height: '40px',
        width: '100%',
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1,
        type: 'Pie',
        valueType: 'Category',
        xName: 'x', yName: 'y',
        
    });
    pie3.appendTo('#pie3');
    var pie4 = new ej.charts.Sparkline({
        type: 'Pie',
        dataSource: [{ x: 'Gold', y: 19 }, { x: 'Silver', y: 17 }, { x: 'Bronze', y: 19 }],
        tooltipSettings: {
            visible: true,
            format: '${x} : ${y}',
        },
        valueType: 'Category',
        xName: 'x', yName: 'y',
        height: '40px',
        width: '100%',
        // custom code start
        load: seriesload,
        // custom code end
        lineWidth: 1
    });
    pie4.appendTo('#pie4');
};