this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        //custom code start
        load: function(args) {
            var layouttheme = location.hash.split('/')[1];
            layouttheme = layouttheme ? layouttheme : 'Material';
            args.treemap.theme = (layouttheme.charAt(0).toUpperCase() +
            layouttheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Top 10 countries by GDP Nominal - 2015',
            textStyle: { size: '15px', fontFamily: 'Segeo UI' }
        },
        dataSource: window.econmics,
        weightValuePath: 'GDP',
        tooltipSettings: {
            visible: true,
            format: '${State}<br>Rank : ${Rank}',
            textStyle: {
                fontFamily: 'Segeo UI'
            }
        },
        rangeColorValuePath: 'GDP',
        leafItemSettings: {
            labelPath: 'State',
            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',
            labelStyle: {
                color: '#000000',
                fontFamily: 'Segeo UI'
            },
            border: {
                color: '#000000',
                width: 0.5
            },
            colorMapping: [
                {
                    from: 1550,
                    to: 17946,
                    color: '#9cbb59',
                    minOpacity: 0.7,
                    maxOpacity: 1,
                }
            ]
        },
    });
    treemap.appendTo('#layout-container');
    // code for property panel
    var layoutMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select layoutMode type',
        width: '100%',
        change: function () {
            treemap.layoutType = layoutMode.value;
            treemap.refresh();
        }
    });
    layoutMode.appendTo('#layoutMode');
    var highlightMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Rendering Direction',
        width: '100%',
        change: function () {
            treemap.renderDirection = highlightMode.value;
            treemap.refresh();
        }
    });
    highlightMode.appendTo('#highlightMode');
};