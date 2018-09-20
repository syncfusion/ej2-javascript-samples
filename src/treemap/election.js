this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        load: function(args) {
            var legendtheme = location.hash.split('/')[1];
            legendtheme = legendtheme ? legendtheme : 'Material';
            args.treemap.theme = (legendtheme.charAt(0).toUpperCase() + legendtheme.slice(1));
        },
        titleSettings: {
            text: 'US Presidential election result - 2016',
            textStyle: { size: '15px' }
        },
        dataSource: window.electionData,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: ' <b>${Winner}<b><br>State : ${State}<br>Trump : ${Trump} %<br>Clinton : ${Clinton} %'
        },
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
            height: '10'
        },
        format: 'n',
        useGroupingSeparator: true,
        rangeColorValuePath: 'WinPercentage',
        equalColorValuePath: 'Winner',
        leafItemSettings: {
            labelPath: 'State',
            fill: '#6699cc',
            border: { color: 'white', width: 0.5 },
            colorMapping: [
                {
                    value: 'Trump', color: '#D84444'
                },
                {
                    value: 'Clinton', color: '#316DB5'
                }
            ]
        },
    });
    treemap.appendTo('#container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select legend type',
        width: 100,
        change: function () {
            treemap.legendSettings.mode = mode.value;
            treemap.refresh();
        }
    });
    mode.appendTo('#layoutMode');
};