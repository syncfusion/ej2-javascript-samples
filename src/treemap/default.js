this.default = function () {
    var tooltipRender = function (args) {
        args.item.data.Sales = args.item.weight;
        args.treemap.tooltipSettings.format = args.item.groupIndex === 0 ? 'Country: ${Continent}<br>Sales: ${Sales}' :
            'Country: ${Continent}<br>Company: ${Company}<br>Sales: ${Sales}';
    };
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var defaultheme = location.hash.split('/')[1];
            defaultheme = defaultheme ? defaultheme : 'Material';
            args.treemap.theme = (defaultheme.charAt(0).toUpperCase() + defaultheme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'Car Sales by Country - 2017',
            textStyle: { size: '15px' }
        },
        itemMove: tooltipRender,
        itemClick: tooltipRender,
        rangeColorValuePath: 'Sales',
        format: 'n',
        useGroupingSeparator: true,
        dataSource: window.CarSales,
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
        },
        palette: ['#C33764', '#AB3566', '#993367', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'],
        tooltipSettings: {
            visible: true
        },
        weightValuePath: 'Sales',
        leafItemSettings: {
            labelPath: 'Company',
            border: { color: 'white', width: 0.5 }
        },
        levels: [
            {
                groupPath: 'Continent', border: { color: 'white', width: 0.5 },
            }
        ]
    });
    treemap.appendTo('#default-container');
};