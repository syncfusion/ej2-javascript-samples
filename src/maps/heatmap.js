/**
 * Heatmap sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        format: 'n',
        useGroupingSeparator: true,
        titleSettings: {
            text: "State wise India's population - 2011",
            textStyle: {
                size: '16px'
            }
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Bottom',
            height: '10',
			width: '350',
            alignment: 'Center',
            labelDisplayMode: 'Trim'
        },
        zoomSettings: {
            enable: false
        },
        layers: [
            {
                shapeData: window.India,
                shapePropertyPath: 'NAME_1',
                shapeDataPath: 'Name',
                dataSource: window.india_Population,
                tooltipSettings: {
                        visible: true,
                        valuePath: 'population',
                        format: 'State: ${Name} <br> Population: ${population} <br>'
                    },
                shapeSettings: {
                    border: {
                        width: 0.2,
                        color: 'white'
                    },
                    colorValuePath: 'population',
                     colorMapping: [{
                        from: 60000, to: 400000, color: '#9fdfdf', label: '<0.4M'
                    },
                    {
                        from: 400000, to: 10000000, color: '#79d2d2', label: '0.4-10M'
                    },
                    {
                        from: 10000000, to: 20000000, color: '#53C6C6', label: '10-20M'
                    },
                    {
                        from: 20000000, to: 70000000, color: '#39acac', label: '20-70M'
                    },
                    {
                        from: 70000000, to: 100000000, color: '#339999', label: '70-100M'
                    },
                    {
                        from: 100000000, to: 200000000, color: '#2d8686', label: '>100M'
                    }

                 ]
                }
            }
        ]
    });
    maps.appendTo('#container');
};