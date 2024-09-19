this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var legendtheme = location.hash.split('/')[1];
            legendtheme = legendtheme ? legendtheme : 'Material';
            args.treemap.theme = (legendtheme.charAt(0).toUpperCase() +
            legendtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        resize: function (args) {
            if (args.currentSize.width > args.currentSize.height && args.treemap.legendSettings.position === 'Auto') {
                treemap.legendSettings.orientation = 'Vertical';
                if (treemap.legendSettings.mode === 'Interactive') {
                    treemap.legendSettings.height = '70%';
                    treemap.legendSettings.width = '10';
                }
                else {
                    treemap.legendSettings.height = '';
                    treemap.legendSettings.width = '';
                }
            }
            else {
                treemap.legendSettings.orientation = 'Horizontal';
                if (treemap.legendSettings.mode === 'Default') {
                    treemap.legendSettings.height = '';
                    treemap.legendSettings.width = '';
                }
                else {
                    treemap.legendSettings.height = '10';
                    treemap.legendSettings.width = '';
                }
            }
        },
        titleSettings: {
            text: 'US Presidential election result - 2016',
            textStyle: { size: '15px', fontFamily: 'Segoe UI' }
        },
        dataSource: window.electionData,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: ' <b>${Winner}</b><br>State : ${State}<br>Trump : ${Trump} %<br>Clinton : ${Clinton} %',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
            height: '10',
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        format: 'n',
        useGroupingSeparator: true,
        rangeColorValuePath: 'WinPercentage',
        equalColorValuePath: 'Winner',
        leafItemSettings: {
            labelPath: 'State',
            labelStyle: {
                fontFamily: 'Segoe UI'
            },
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
    // code for property panel
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select legend type',
        width: '100%',
        change: function () {
            treemap.legendSettings.mode = mode.value;
            if (mode.value === 'Interactive') {
                if (treemap.legendSettings.orientation === 'Horizontal' || treemap.legendSettings.orientation === 'None') {
                    treemap.legendSettings.height = '10';
                    treemap.legendSettings.width = '';
                }
                else {
                    treemap.legendSettings.height = '70%';
                    treemap.legendSettings.width = '10';
                }
            }
            else {
                treemap.legendSettings.height = '';
                treemap.legendSettings.width = '';
            }
            treemap.refresh();
        }
    });
    mode.appendTo('#layoutMode');
    var legendPosition = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Legend Position',
        width: '100%',
        change: function () {
            treemap.legendSettings.position = legendPosition.value;
            if (legendPosition.value === 'Left' || legendPosition.value === 'Right') {
                treemap.legendSettings.orientation = 'Vertical';
                if (treemap.legendSettings.mode === 'Interactive') {
                    treemap.legendSettings.width = '10';
                    treemap.legendSettings.height = '70%';
                }
                else {
                    treemap.legendSettings.height = '';
                    treemap.legendSettings.width = '';
                }
            }
            else if (legendPosition.value === 'Auto') {
                if (treemap.availableSize.width > treemap.availableSize.height) {
                    treemap.legendSettings.orientation = 'Vertical';
                    if (treemap.legendSettings.mode === 'Interactive') {
                        treemap.legendSettings.height = '70%';
                        treemap.legendSettings.width = '10';
                    }
                    else {
                        treemap.legendSettings.width = '';
                        treemap.legendSettings.height = '';
                    }
                }
                else {
                    treemap.legendSettings.orientation = 'Horizontal';
                    if (treemap.legendSettings.mode === 'Interactive') {
                        treemap.legendSettings.width = '';
                        treemap.legendSettings.height = '10';
                    }
                    else {
                        treemap.legendSettings.height = '';
                        treemap.legendSettings.width = '';
                    }
                }
            }
            else {
                treemap.legendSettings.orientation = 'Horizontal';
                if (treemap.legendSettings.mode === 'Interactive') {
                    treemap.legendSettings.height = '10';
                    treemap.legendSettings.width = '';
                }
            }
            treemap.refresh();
        }
    });
    legendPosition.appendTo('#legendPosition');
};