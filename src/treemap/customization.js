this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'US Gold medal categories in Summer Olympics - 2016',
            textStyle: { size: '15px' }
        },
        dataSource: window.Metals,
        weightValuePath: 'Gold',
        tooltipSettings: {
            visible: true,
            format: '${Sport} : ${Gold}'
        },
        leafItemSettings: {
            showLabels: !ej.base.Browser.isDevice,
            labelPath: 'Sport',
            fill: '#993399',
            templatePosition: 'Center',
            border: { color: 'black', width: 0.5 },
            labelFormat: ' ${Sport} - ${Gold}',
            labelTemplate: '<div style="pointer-events: none;"><img src="src/treemap/image/{{:GameImage}}"' +
                ' style="height:{{:ItemHeight}};width:{{:ItemWidth}};"></img></div>'
        }
    });
    treemap.appendTo('#container');
};