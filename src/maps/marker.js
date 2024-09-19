/**
 * Marker sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var markertheme = location.hash.split('/')[1];
            markertheme = markertheme ? markertheme : 'Material';
            args.maps.theme = (markertheme.charAt(0).toUpperCase() +
            markertheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        useGroupingSeparator: true,
        format: 'n',
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: 'Top 25 populated cities in the world',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                dataSource: window.topPopulation,
                shapeSettings: {
                    fill: '#C3E6ED'
                },
                markerSettings: [
                    {
                        dataSource: window.topPopulation,
                        visible: true,
                        animationDuration: 0,
                        shape: 'Circle',
                        fill: 'white',
                        width: 10,
                        border: { width: 2, color: '#285255' },
                        tooltipSettings: {
                            template: '#template',
                            visible: true,
                            valuePath: 'population',
                            textStyle: { fontFamily: 'Segeo UI' }
                        }
                    },
                ]
            }
        ]
    });
    maps.appendTo('#container');
    var MarkerShape;
    var MarkerShapeCheckBox = new ej.buttons.CheckBox({
        change: MarkerShape, checked: false
    }, '#shape');
    MarkerShapeCheckBox.change = MarkerShape = function (e) {
        if (e.checked) {
            maps.layers[0].markerSettings[0].shapeValuePath = 'shape';
            maps.refresh();
        }
        else {
            maps.layers[0].markerSettings[0].shapeValuePath = null;
        }
    };
    var markerColor;
    var markerColorCheckBox = new ej.buttons.CheckBox({
        change: markerColor, checked: false
    }, '#color');
    markerColorCheckBox.change = markerColor = function (e) {
        if (e.checked) {
            maps.layers[0].markerSettings[0].colorValuePath = 'color';
        }
        else {
            maps.layers[0].markerSettings[0].colorValuePath = null;
        }
    };
};