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
            args.treemap.theme = (defaultheme.charAt(0).toUpperCase() +
            defaultheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Car Sales by Country - 2017',
            textStyle: { size: '15px', fontFamily: 'Segeo UI' }
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
            textStyle: {
                fontFamily : 'Segeo UI'
            }
        },
        palette: ['#C33764', '#AB3566', '#993367', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'],
        tooltipSettings: {
            visible: true,
            textStyle: {
                fontFamily : 'Segeo UI'
            }
        },
        weightValuePath: 'Sales',
        leafItemSettings: {
            labelPath: 'Company',
            border: { color: 'white', width: 0.5 },
            labelStyle:{
                fontFamily : 'Segeo UI'
            }
        },
        levels: [
            {
                groupPath: 'Continent', border: { color: 'white', width: 0.5 }, headerStyle: { fontFamily: 'Segoe UI' }
            }
        ]
    });
    treemap.appendTo('#default-container');
};