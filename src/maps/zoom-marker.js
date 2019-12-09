/**
 * Marker zooming sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var markerzooming = location.hash.split('/')[1];
            markerzooming = markerzooming ? markerzooming : 'Material';
            args.maps.theme = (markerzooming.charAt(0).toUpperCase() + markerzooming.slice(1));
        },
        // custom code end
        useGroupingSeparator: true,
        zoomSettings: {
            enable: true,
            mouseWheelZoom: false,
            pinchZooming: false
        },
        format: 'n',
        titleSettings: {
            text: 'Capitals of South American countries',
            textStyle: {
                size: '16px'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                dataSource: window.southAmericaCountryCapitals,
                shapeSettings: {
                    fill: '#C3E6ED',
                    border: {
                        color: 'black',
                        width: 0.3
                    }
                },
                markerSettings: [
                    {
                        dataSource: window.southAmericaCountryCapitals,
                        visible: true,
                        animationDuration: 0,
                        height: 20,
                        width: 20,
                        shape: 'Image',
                        imageUrl: 'src/maps/images/ballon.png',
                        tooltipSettings: {
                            format:  '<b>Capital</b> : ${name}<br><b>Country</b> : ${Country}',
                            visible: true,
                            valuePath: 'name',
                        }
                    },
                ]
            }
        ]
    });
    maps.appendTo('#container');
    var zoomIntiatally;
    var zoomIntiatallyCheckBox = new ej.buttons.CheckBox({
        change: zoomIntiatally, checked: false
    }, '#zoom');
    zoomIntiatallyCheckBox.change = zoomIntiatally = function (e) {
        maps.zoomSettings.shouldZoomInitially = e.checked;
    };
};