this.default = function () {
    var treemap = new ej.treemap.TreeMap({                
        // custom code start
        load: function (args) {
            var drilltheme = location.hash.split('/')[1];
            drilltheme = drilltheme ? drilltheme : 'Material';
            args.treemap.theme = (drilltheme.charAt(0).toUpperCase() + drilltheme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'List of Countries by Unemployment Rate',
            textStyle: { size: '15px' }
        },
        format: 'n',
        useGroupingSeparator: true,
        palette: ['#5B244D', '#6F3953', ' #87525A', '#A26F63', '#BA896B', '#D5A574', '#F1C37D'],
        enableDrillDown: true,
        renderDirection: 'TopRightBottomLeft',
        enableRtl: true,
        dataSource: window.RTLData,
        weightValuePath: 'Size',
        tooltipSettings: {
            visible: true,
            format: '${Size} : ${Name}'
        },
        leafItemSettings: {
            labelPath: 'Name',
            showLabels: true,            
        },
        levels: [
            { groupPath: 'Continent', border: { color: 'black', width: 0.5 }, headerAlignment: 'Far' },
            { groupPath: 'Country', border: { color: 'black', width: 0.5 }, headerAlignment: 'Far' }
        ]
    });
    treemap.appendTo('#container');    
};