/**
 * Maps zooming sample
 */
this.default = function () {   
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var zoomtheme = location.hash.split('/')[1];
            zoomtheme = zoomtheme ? zoomtheme : 'Material';
            args.maps.theme = (zoomtheme.charAt(0).toUpperCase() + zoomtheme.slice(1));
        },
        // custom code end
        zoomSettings: {
            enable: true,
            toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
            pinchZooming: true
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                shapePropertyPath: 'continent',
                shapeDataPath: 'continent',
                shapeSettings: {
                    autofill: true,
                    colorValuePath: 'color'
                },
                dataSource: new ej.maps.MapAjax('./src/maps/map-data/zooming-datasource.json'),
            }
        ]
    });
    maps.appendTo('#mapszooming');
    // Code for Property Panel
    var sliderChange;
        var slider = new ej.inputs.Slider({
            value: 500,
            min: 0, max: 1000, step: 250,
            change: sliderChange
        }, '#range');
        slider.change = sliderChange = function (e) {
            maps.layers[0].animationDuration = e.value;
            maps.refresh();
            document.getElementById('dur').innerHTML = e.value.toString() + ' ms';
        };
    document.getElementById('mousewheel').onchange = function () {
        var element = (document.getElementById('mousewheel'));
        maps.zoomSettings.mouseWheelZoom = element.checked;
        maps.refresh();
    };
    document.getElementById('pinch').onchange = function () {
        var element = (document.getElementById('pinch'));
        maps.zoomSettings.pinchZooming = element.checked;
        maps.refresh();
    };
    document.getElementById('zoom').onchange = function () {
        var element = (document.getElementById('zoom'));
        maps.zoomSettings.enable = element.checked;
        maps.refresh();
    };
    document.getElementById('doubletap').onchange = function () {
        var element = (document.getElementById('doubletap'));
        maps.zoomSettings.doubleClickZoom = element.checked;
        var ele1 = document.getElementById('singletap');
        if (element.checked) {
            ele1.disabled = true;
        }
        else {
            ele1.disabled = false;
        }
		maps.refresh();
    };
    document.getElementById('singletap').onchange = function () {
        var element = (document.getElementById('singletap'));
        var ele1 = document.getElementById('doubletap');
        maps.zoomSettings.zoomOnClick = element.checked;
        if (element.checked) {
            ele1.disabled = true;
        }
        else {
            ele1.disabled = false;
        }
		maps.refresh();
    };
};