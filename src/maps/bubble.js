/**
 * Bubble sample
 */

this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var bubbletheme = location.hash.split('/')[1];
            bubbletheme = bubbletheme ? bubbletheme : 'Material';
            args.maps.theme = (bubbletheme.charAt(0).toUpperCase() +
            bubbletheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        bubbleRendering: function (args) {
            args.radius = args.data.value;
        },
        format: 'n',
        useGroupingSeparator: true,
        zoomSettings: {
            enable: true,
            toolbarSettings: {
                orientation:'Vertical',
                horizontalAlignment: 'Near',
            },
            pinchZooming: true
        },
        titleSettings: {
            text: 'Top 30 countries with highest Internet users',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        layers: [
            {
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapeSettings: {
                    fill: '#E5E5E5'
                },
                bubbleSettings: [
                    {
                        visible: true,
                        valuePath: 'value',
                        colorValuePath: 'color',
                        minRadius: 3,
                        maxRadius: 70,
						opacity: 0.8,
                        dataSource: window.internetUsers,
						tooltipSettings: {
                            visible: true,
                            valuePath: 'population',
                            template: '#template'
                        },
                    }
                ]
            }
        ]
    });
    maps.appendTo('#container');
};