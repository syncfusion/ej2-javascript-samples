/**
 * Projection sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var projecttheme = location.hash.split('/')[1];
            projecttheme = projecttheme ? projecttheme : 'Material';
            args.maps.theme = (projecttheme.charAt(0).toUpperCase() + projecttheme.slice(1));
        },
        // custom code end
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
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapeDataPath: 'Country',
                shapePropertyPath: 'name',
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/projection-datasource.json'),
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
    // Code for Property Panel
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