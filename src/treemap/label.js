this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var labeltheme = location.hash.split('/')[1];
            labeltheme = labeltheme ? labeltheme : 'Material';
            args.treemap.theme =  (labeltheme.charAt(0).toUpperCase() +
            labeltheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Countries ordered based on Population - 2017',
            textStyle: { size: '15px', fontFamily: 'Segeo UI' }
        },
        dataSource: window.Country_Population,
        tooltipSettings: {
            visible: true,
            format: '${Country} : ${Population}',
            textStyle: {
                fontFamily: 'Segeo UI'
            }
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            width: '300px',
            height: '10',
            position: 'Top',
            textStyle: {
                fontFamily: 'Segeo UI'
            }
        },
        format: 'n',
        useGroupingSeparator: true,
        rangeColorValuePath: 'Population',
        weightValuePath: 'Population',
        leafItemSettings: {
            showLabels: true,
            labelPath: 'Country',
            fill: 'red',
            labelStyle: {
                fontFamily: 'Segeo UI'
            },
            colorMapping: [
                {
                    to: 10000000000,
                    from: 100000000,
                    label: '200M - 1.3M',
                    color: '#4B134F'
                }, { to: 100000000, from: 20000000, label: '20M - 200M', color: '#8C304D' },
                { to: 20000000, from: 100000, label: '0.1M - 20M', color: '#C84B4B' }
            ]
        },
    });
    treemap.appendTo('#container');
    // code for property panel
    var labelMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Label Action',
        width: '100%',
        change: function () {
            treemap.leafItemSettings.interSectAction = labelMode.value;
            treemap.refresh();
        }
    });
    labelMode.appendTo('#labels');
};