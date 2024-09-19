/**
 * Datalabel sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var labeltheme = location.hash.split('/')[1];
            labeltheme = labeltheme ? labeltheme : 'Material';
            args.maps.theme = (labeltheme.charAt(0).toUpperCase() +
            labeltheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        zoomSettings: {
            enable: false
        },
        layers: [
            {
                dataLabelSettings: {
                    visible: true,
                    labelPath: 'name',
                    smartLabelMode: 'Trim'
                },
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/usa.json'),
                shapePropertyPath:'iso_3166_2',
                shapeSettings: {
                    autofill: true
                },
				 tooltipSettings: {
                      visible: true,
                      valuePath: 'name',
                      textStyle: { fontFamily: 'Segeo UI' }
                    },
            }
        ]
    });
    maps.appendTo('#datalabel');
    // Code for Property Panel
    var intersectaction = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select intersect action',
        width: '100%',
        change: function () {
            maps.layers[0].dataLabelSettings.intersectionAction = intersectaction.value;
            maps.refresh();
        }
    });
    intersectaction.appendTo('#intersectaction');
    var smartlabelmode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select smartlabel mode',
        width: '100%',
        change: function () {
            maps.layers[0].dataLabelSettings.smartLabelMode = smartlabelmode.value;
            maps.refresh();
        }
    });
    smartlabelmode.appendTo('#smartlabelmode');
    document.getElementById('select').onchange = function () {
        var element = (document.getElementById('select'));
        maps.layers[0].dataLabelSettings.visible = element.checked;
        maps.refresh();
    };
};