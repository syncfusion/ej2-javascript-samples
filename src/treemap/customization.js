this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.treemap.theme = (theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'US Gold medal categories in Summer Olympics - 2016',
            textStyle: { size: '15px', fontFamily: 'Segeo UI' }
        },
        dataSource: window.Metals,
        weightValuePath: 'Gold',
        tooltipSettings: {
            visible: true,
            format: '${Sport} : ${Gold}',
            textStyle: {
                fontFamily: 'Segeo UI'
            }
        },
        leafItemSettings: {
            showLabels: !ej.base.Browser.isDevice,
            labelPath: 'Sport',
            fill: '#993399',
            textStyle: {
                fontFamily: 'Segeo UI'
            },
            templatePosition: 'Center',
            border: { color: 'black', width: 0.5 },
            labelFormat: ' ${Sport} - ${Gold}',
            labelTemplate: '<div style="pointer-events: none;"><img alt="Custom label template for illustrations" src="src/treemap/image/{{:GameImage}}"' +
                ' style="height:{{:ItemHeight}};width:{{:ItemWidth}};"></img></div>'
        }
    });
    treemap.appendTo('#container');
};