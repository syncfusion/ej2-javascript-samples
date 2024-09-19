/**
 * Maps tooltip sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var tooltiptheme = location.hash.split('/')[1];
            tooltiptheme = tooltiptheme ? tooltiptheme : 'Material';
            args.maps.theme = (tooltiptheme.charAt(0).toUpperCase() +
            tooltiptheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        tooltipRender: function (args) {
            if (!args.options.data) {
                args.cancel = true;
            }
            },
        titleSettings: {
            text: 'Finalist in Cricket World Cup',
            titleStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        zoomSettings: {
            enable: false
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Left',
            orientation: 'Vertical',
            height: '70%',
            width: '10',
            textStyle: {
                fontFamily: 'Segeo UI'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapePropertyPath: 'name',
                shapeDataPath: 'name',
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/tooltip-datasource.json'),
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name',
                    template: '#template'
                },
                shapeSettings: {
                    fill: '#E5E5E5',
                    colorMapping: [
                        {
                            value: '1',
                            color: '#b3daff'
                        },
                        {
                            color: '#80c1ff',
                            value: '2'
                        },
                        {
                            color: '#1a90ff',
                            value: '3'
                        },
                        {
                            color: '#005cb3',
                            value: '7'
                        }
                    ],
                    colorValuePath: 'value1'
                }
            }
        ]
    });
    maps.appendTo('#container');
};