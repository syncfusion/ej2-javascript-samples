/**
 * Maps zooming sample
 */
this.default = function () {   
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        zoomSettings: {
            enable: true,
            toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
            pinchZooming: true
        },
        layers: [
            {
                shapeData: window.WorldMap,
                shapePropertyPath: 'continent',
                shapeDataPath: 'continent',
                shapeSettings: {
                    autofill: true,
                    colorValuePath: 'color'
                },
                dataSource: window.randomcountriesData
            }
        ]
    });
    maps.appendTo('#mapszooming');
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
		maps.zoomSettings.zoomOnClick = (!element.checked);
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
		maps.zoomSettings.doubleClickZoom = (!element.checked);
        if (element.checked) {
            ele1.disabled = true;
        }
        else {
            ele1.disabled = false;
        }
		maps.refresh();
    };
};