this.default = function () {
    var treemap = new ej.treemap.TreeMap({                
        load: function (args) {         // custom code start
            var rtlTheme = location.hash.split('/')[1];
            rtlTheme = rtlTheme ? rtlTheme : 'Material';
            args.treemap.theme = (rtlTheme.charAt(0).toUpperCase() +
                rtlTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        
        titleSettings: {              // custom code end
            text: 'List of Countries by Unemployment Rate',
            textStyle: { size: '15px', fontFamily: 'Segoe UI' }
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
            format: '${Size} : ${Name}',
            textStyle: { fontFamily: 'Segoe UI' }
        },
        leafItemSettings: {
            labelPath: 'Name',
            showLabels: true,
            labelStyle: { fontFamily: 'Segoe UI' }           
        },
        levels: [
            { groupPath: 'Continent', border: { color: 'black', width: 0.5 }, headerAlignment: 'Far', headerStyle: { fontFamily: 'Segoe UI' } },
            { groupPath: 'Country', border: { color: 'black', width: 0.5 }, headerAlignment: 'Far', headerStyle: { fontFamily: 'Segoe UI' } }
        ]
    });
    treemap.appendTo('#container');    
};