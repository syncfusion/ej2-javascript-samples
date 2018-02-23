/**
 * Earthquake sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        centerPosition: {
            latitude: 1.5053645409602877,
            longitude: 105.14038085937499
        },
        zoomSettings: {
            enable: false,
            zoomFactor: 3.5,
        },
        mapsArea: {
            background: '#AEE2FA'
        },
        titleSettings: {
            text: '7.6 Magnitude earthquake strikes Sumatra - 2009',
            textStyle: {
                size: '18px'
            }
        },
        layers: [
            {
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                shapeData: window.Asia,
                markerSettings: [{
                        visible: true,
                        height: 100,
                        width: 100,
                        template: '#template',
                        animationDuration: 0,
                        dataSource: [{
                                latitude: 1.625758360412755, longitude: 98.5693359375
                            }]
                    }],
                shapeSettings: {
                    fill: '#FFFDCF',
                    border: {
                        color: '#3497C3 ',
                        width: 0.5
                    }
                },
                dataLabelSettings: {
                    visible: true,
                    labelPath: 'name',
                    smartLabelMode: 'Hide'
                }
            }
        ]
    });
    maps.appendTo('#maps');    
};