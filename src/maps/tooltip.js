/**
 * Maps tooltip sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        tooltipRender: function (args) {
            if (args.content.toString().indexOf('undefined') > -1) {
              args.cancel = true;
            }
            },
        titleSettings: {
            text: 'Finalist in Cricket World Cup',
            titleStyle: {
                size: '16px'
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
                width: '10'
            },
        layers: [
            {
                shapeData: window.WorldMap,
                shapePropertyPath: 'name',
                shapeDataPath: 'name',
                dataSource: window.worldCup,
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