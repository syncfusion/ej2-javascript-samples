/**
 * Datalabel sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
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
                shapeData: window.USA,
                shapeSettings: {
                    autofill: true
                },
				 tooltipSettings: {
                      visible: true,
                      valuePath: 'name'
                    },
            }
        ]
    });
    maps.appendTo('#datalabel');
    var intersectaction = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select intersect action',
        width: 120,
        change: function () {
            maps.layers[0].dataLabelSettings.intersectionAction = intersectaction.value;
            maps.refresh();
        }
    });
    intersectaction.appendTo('#intersectaction');
    var smartlabelmode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select smartlabel mode',
        width: 120,
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