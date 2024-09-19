/**
 * Marker template sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var templateTheme = location.hash.split('/')[1];
            templateTheme = templateTheme ? templateTheme : 'Material';
            args.maps.theme = (templateTheme.charAt(0).toUpperCase() +
            templateTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: ' Australia cities weather detail',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/australia.json'),
                shapePropertyPath: 'STATE_NAME',
                markerSettings: [
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div><img alt="Marker weather clear image" class="markerTemplate" src="src/maps/images/weather-clear.png"/>' +
                            '<p style="font-family: Segeo UI">{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Perth', latitude: -31.950527, longitude: 115.860457, Temperature: 31.6 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div><img alt="Marker weather cloud image" class="markerTemplate" src="src/maps/images/weather-clouds.png"/>' +
                            '<p style="font-family: Segeo UI">{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Adelaide', latitude: -34.928499, longitude: 138.600746, Temperature: 28.5 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div><img alt="Marker weather clear image" class="markerTemplate" src="src/maps/images/weather-clear.png"/>' +
                            '<p style="font-family: Segeo UI">{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Townsville', latitude: -19.2589635, longitude: 146.8169483, Temperature: 31.3 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div><img alt="Marker weather rain image" class="markerTemplate" src="src/maps/images/weather-rain.png"/>' +
                            '<p style="font-family: Segeo UI">{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Sydney', latitude: -33.868820, longitude: 151.209296, Temperature: 26.4 }
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div><img alt="Marker weather clear image" class="markerTemplate" src="src/maps/images/weather-clear.png"/>' +
                            '<p style="font-family: Segeo UI">{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Alice Springs', latitude: -23.698042, longitude: 133.880747, Temperature: 36.4 },
                        ]
                    },
                    {
                        height: 30,
                        width: 30,
                        visible: true,
                        template: '<div><img alt="Marker weather cloud image" class="markerTemplate" src="src/maps/images/weather-clouds.png"/>' + 
                        '<p style="font-family: Segeo UI">{{:Name}}:{{:Temperature}}°C</p></div>',
                        dataSource: [
                            { Name: 'Brisbane', latitude: -27.469771, longitude: 153.025124, Temperature: 29.1 }
                        ]
                    }
                ],
                tooltipSettings: {
                    visible: false
                },
                shapeSettings: {
                    autofill: true,
                    palette: ['#E2B247', '#88DB46', '#42C4E2', '#C08AF8', '#52BACC', '#F4CE2F', '#6986ED'],
                    border: {
                        width: 0.5,
                        color: 'white'
                    },
                }
            }
        ]
    });
    maps.appendTo('#markertemp');
};