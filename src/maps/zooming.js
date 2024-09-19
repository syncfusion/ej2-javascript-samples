/**
 * Maps zooming sample
 */
this.default = function () {   
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var zoomtheme = location.hash.split('/')[1];
            zoomtheme = zoomtheme ? zoomtheme : 'Material';
            args.maps.theme = (zoomtheme.charAt(0).toUpperCase() +
            zoomtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        zoomSettings: {
            enable: true,
            toolbarSettings:{
                buttonSettings: {
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
                }
            },
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
                animationDuration: 500,
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
            document.getElementById('dur').innerHTML = e.value.toString();
        };    
    var enableMouseWheelChange;
    var enableMouseWheelCheckbox = new ej.buttons.CheckBox({
        change: enableMouseWheelChange, checked: true,
    }, '#mousewheel');
    enableMouseWheelCheckbox.change = enableMouseWheelChange =  function (e) {        
        maps.zoomSettings.mouseWheelZoom = e.checked;
        maps.refresh();
    };
    var enablePinchChange;
    var enablePinchCheckbox = new ej.buttons.CheckBox({
        change: enablePinchChange, checked: true,
    }, '#pinch');
    enablePinchCheckbox.change = enablePinchChange =  function (e) {
        maps.zoomSettings.pinchZooming = e.checked;
        maps.refresh();
    };
    var enableZoomChange;
    var enableZoomCheckbox = new ej.buttons.CheckBox({
        change: enableZoomChange, checked: true,
    }, '#zoom');
    enableZoomCheckbox.change = enableZoomChange =  function (e) {
        maps.zoomSettings.enable = e.checked;
        maps.refresh();
    };
    var enablePanChange;
    var enablePanCheckbox = new ej.buttons.CheckBox({
        change: enablePanChange, checked: true,
    }, '#pan');
    enablePanCheckbox.change = enablePanChange =  function (e) {
        maps.zoomSettings.enablePanning = e.checked;
        maps.refresh();
    };
    var enableDoubleChange;
    var enableDoubleCheckbox = new ej.buttons.CheckBox({
        change: enableDoubleChange, checked: false,
    }, '#doubletap');
    var enableSingleChange;
    var enableSingleCheckbox = new ej.buttons.CheckBox({
        change: enableSingleChange, checked: false,
    }, '#singletap');
    enableSingleCheckbox.change = enableDoubleChange =  function (e) {
        maps.zoomSettings.zoomOnClick = e.checked;
        var ele1 = document.getElementById('doubletap');
        if (e.checked) {            
            ele1.disabled = true;
        }
        else {
            ele1.disabled = false;
        }
        maps.refresh();
    };
    enableDoubleCheckbox.change = enableDoubleChange =  function (e) {
        maps.zoomSettings.doubleClickZoom = e.checked;
        var ele1 = document.getElementById('singletap');
        if (e.checked) {            
            ele1.disabled = true;
        }
        else {
            ele1.disabled = false;
        }
        maps.refresh();
    };
};
