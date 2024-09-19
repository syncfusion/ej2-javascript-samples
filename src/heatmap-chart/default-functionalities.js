function getDatasource() {
    var dataSource = [];
    for (var x = 0; x < 12; x++) {
        dataSource.push([]);
        for (var y = 0; y < 6; y++) {
            dataSource[x].push(getRndInteger(0, 100));
        }
    }
    return dataSource;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },              
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
            textStyle: {
                fontFamily: 'inherit'                
            }
        },
        yAxis: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings:{
           textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        cellSettings: {
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        load: function (args) {
            // custom code start
            var defaultTheme = location.hash.split('/')[1];
            defaultTheme = defaultTheme ? defaultTheme : 'Material';
            args.heatmap.theme = (defaultTheme.charAt(0).toUpperCase() +
            defaultTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        },
        dataSource: getDatasource(),
    });
    heatmap.appendTo('#container');
};