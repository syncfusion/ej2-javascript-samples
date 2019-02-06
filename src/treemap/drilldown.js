this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        drillStart: function (args) {
            if (args.item[Object.keys(args.item)[0]].length === 1) {
                args.treemap.levels[2].showHeader = true;
            }
            else {
                args.treemap.levels[2].showHeader = false;
            }
        },
        tooltipRendering: function (args) {
            if (args.item.groupIndex !== 2) {
                args.cancel = true;
            }
        },
        load: function (args) {
            var drilltheme = location.hash.split('/')[1];
            drilltheme = drilltheme ? drilltheme : 'Material';
            args.treemap.theme = (drilltheme.charAt(0).toUpperCase() + drilltheme.slice(1));
        },
        titleSettings: {
            text: 'List of countries by population',
            textStyle: { size: '15px' }
        },
        format: 'n',
        useGroupingSeparator: true,
        palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
        enableDrillDown: true,
        dataSource: window.Drilldown,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: '${Name} : ${Population}'
        },
        leafItemSettings: {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px' },
            border: { color: 'black', width: 0.5 }
        },
        levels: [
            { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } },
            { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } },
            { groupPath: 'Region', fill: '#336699', showHeader: false, border: { color: 'black', width: 0.5 } },
        ]
    });
    treemap.appendTo('#container');
};