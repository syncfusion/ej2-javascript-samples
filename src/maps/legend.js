/**
 * Legend sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var legendtheme = location.hash.split('/')[1];
            legendtheme = legendtheme ? legendtheme : 'Material';
            args.maps.theme = (legendtheme.charAt(0).toUpperCase() +
            legendtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        zoomSettings: {
            enable: false
        },
        tooltipRender: function (args) {
            if (!args.options.data) {
                args.cancel = true;
            }
        },
        titleSettings: {
            text: 'Population density (per square kilometer) - 2015',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
        legendSettings: {
            visible: true,
            position: 'Top',
            textStyle: { fontFamily: 'Segeo UI' }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/legend-datasource.json'),
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name',
                    format: '${name} : ${density}',
                    textStyle: { fontFamily: 'Segeo UI' }
                },
                shapeSettings: {
                    colorValuePath: 'density',
                    fill: '#E5E5E5',
                    colorMapping: [
                        {
                            from: 0.00001, to: 100, color: 'rgb(153,174,214)', label: '<100'
                        },
                        {
                            from: 100, to: 200, color: 'rgb(115,143,199)', label: '100 - 200'
                        },
                        {
                            from: 200, to: 300, color: 'rgb(77,112,184)', label: '200 - 300'
                        },
                        {
                            from: 300, to: 500, color: 'rgb(38,82,168)', label: '300 - 500'
                        },
                        {
                            from: 500, to: 19000, color: 'rgb(0,51,153)', label: '>500'
                        },
                        {
                            color: null, label: null
                        }
                    ]
                }
            }
        ]
    });
    maps.appendTo('#container');
    // Code for Property Panel
    var legendPosition = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Legend Position',
        width: '100%',
        change: function () {
            maps.legendSettings.position = legendPosition.value;
            if (legendPosition.value === 'Left' || legendPosition.value === 'Right') {
                maps.legendSettings.orientation = 'Vertical';
                if (maps.legendSettings.mode === 'Interactive') {
                    maps.legendSettings.height = '70%';
                    maps.legendSettings.width = '10';
                }
                else {
                    maps.legendSettings.height = '';
                    maps.legendSettings.width = '';
                }
            }
            else {
                maps.legendSettings.orientation = 'Horizontal';
                if (maps.legendSettings.mode === 'Interactive') {
                    maps.legendSettings.height = '10';
                    maps.legendSettings.width = '';
                }
            }
            maps.refresh();
        }
    });
    legendPosition.appendTo('#legendPosition');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select layoutMode type',
        width: '100%',
        change: function () {
            maps.legendSettings.mode = mode.value;
            if (mode.value === 'Interactive') {
                if (maps.legendSettings.orientation === 'Horizontal' || maps.legendSettings.orientation === 'None') {
                    maps.legendSettings.height = '10';
                    maps.legendSettings.width = '';
                }
                else {
                    maps.legendSettings.height = '70%';
                    maps.legendSettings.width = '10';
                }
            }
            else {
                maps.legendSettings.height = '';
                maps.legendSettings.width = '';
            }
            maps.refresh();
        }
    });
    mode.appendTo('#legendMode');
    var opacity;
    var highlightCheckBox = new ej.buttons.CheckBox({
        change: opacity, checked: false
    }, '#opacity');
    highlightCheckBox.change = opacity = function (e) {
        if (e.checked) {
            maps.layers[0].shapeSettings.colorMapping[5].color = 'lightgrey';
            maps.layers[0].shapeSettings.colorMapping[5].label = 'No Data';
        }
        else {
            maps.layers[0].shapeSettings.colorMapping[5].color = null;
            maps.layers[0].shapeSettings.colorMapping[5].label = null;
        }
        maps.refresh();
    };
    var toggleLegend;
    var legendCheckBox = new ej.buttons.CheckBox({
        change: toggleLegend, checked: false 
    }, '#toggleLegend');
    legendCheckBox.change = toggleLegend = function (e) {
        maps.legendSettings.toggleLegendSettings.enable = e.checked;
        maps.refresh();
    };
};
