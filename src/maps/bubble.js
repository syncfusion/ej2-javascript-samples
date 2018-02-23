/**
 * Bubble sample
 */

this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        bubbleRendering: function (args) {
            args.radius = args.data.value;
        },
        format: 'n',
        useGroupingSeparator: true,
        zoomSettings: {
            enable: true,
            horizontalAlignment: 'Near',
            toolBarOrientation: 'Vertical',
            pinchZooming: true
        },
        titleSettings: {
            text: 'Top 30 countries with highest Internet users',
            textStyle: {
                size: '16px'
            }
        },
        layers: [
            {
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                shapeData: window.WorldMap,
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