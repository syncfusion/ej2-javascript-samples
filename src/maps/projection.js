/**
 * Projection sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        titleSettings: {
            text: 'Members of the UN Security Council',
            textStyle: {
                size: '16px'
            },
            subtitleSettings: {
                text: '- In 2017',
                alignment: 'Far',
                textStyle: { 
                 } 
                }
        },
        legendSettings: {
            visible: true
        },
        zoomSettings: {
            enable: false
        },
        layers: [
            {
                shapeData: window.WorldMap,
                shapeDataPath: 'Country',
                shapePropertyPath: 'name',
                dataSource: window.unCountries,
                tooltipSettings: {
                    visible: true,
                    valuePath: 'Country',
                },
                shapeSettings: {
                    fill: '#E5E5E5',
                    colorMapping: [
                        {
                            value: 'Permanent',
                            color: '#EDB46F'
                        },
                        {
                            color: '#F1931B',
                            value: 'Non-Permanent'
                        }
                    ],
                    colorValuePath: 'Membership'
                }
            }
        ]
    });
    maps.appendTo('#container');
    var projection = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select projection type',
        width: 120,
        change: function () {
            maps.projectionType = projection.value;
            maps.refresh();
        }
    });
    projection.appendTo('#projectiontype');
};