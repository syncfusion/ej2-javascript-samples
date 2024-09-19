this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function (args) {
            var tooltheme = location.hash.split('/')[1];
            tooltheme = tooltheme ? tooltheme : 'Material';
            args.treemap.theme = (tooltheme.charAt(0).toUpperCase() +
            tooltheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end 
        tooltipSettings: {
            visible: true,
            template: '#Tooltip'
        },
        titleSettings: {
            text: 'Country wise International Airport count in South America',
            textStyle: {
                size: '15px',
                fontFamily: 'Segeo UI'
            }
        },
        dataSource: window.Airport_Count,
        weightValuePath: 'Count',
        equalColorValuePath: 'Count',
        legendSettings: {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
            textStyle: {
                fontFamily: 'Segeo UI'
            }
        },
        leafItemSettings: {
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            labelStyle: {
                size: '13px',
                fontFamily: 'Segeo UI'
            },
            fill: '#6699cc',
            border: { width: 1, color: 'white' },
            colorMapping: [
                {
                    value: '25',
                    color: '#634D6F'
                },
                {
                    value: '12',
                    color: '#B34D6D'
                },
                {
                    value: '9',
                    color: '#557C5C'
                },
                {
                    value: '7',
                    color: '#44537F'
                },
                {
                    value: '6',
                    color: '#637392'
                },
                {
                    value: '3',
                    color: '#7C754D'
                },
                {
                    value: '2',
                    color: '#2E7A64'
                },
                {
                    value: '1',
                    color: '#95659A'
                },
            ]
        },
    });
    treemap.appendTo('#container');
};