/**
 * Dynamic marker
 */
this.default = function () {
var markerCheck = true;
var lineCheck;
var connectLineCheck;
var navigationLines = [];
var latitude = [];
var longitude = [];
    var maps = new ej.maps.Maps({
        zoomSettings: {
            enable: true
        },
        layers: [
            {
                urlTemplate:'https://tile.openstreetmap.org/level/tileX/tileY.png'
            },
        ],
        load: function (args) {        // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.maps.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        click: function (args) {
            if (markerCheck) {
                addMarker(args);
            }
            if (lineCheck && !connectLineCheck) {
                addLine(args, widthCheck.value);
            }
            if (connectLineCheck) {
                addLine(args, widthCheck.value, true);
            }
            if (markerCheck || lineCheck || connectLineCheck) {
                maps.refresh();
                if (togglebtn.disabled && (maps.layers[0].markerSettings.length ||
                maps.layers[0].navigationLineSettings.length)) {
                    togglebtn.disabled = false;
                }
            }
        }
    });
    maps.appendTo('#container');
    var markerCheckBox= new ej.buttons.CheckBox(
        {
            change: function(e) {
                markerCheck = e.checked;
                markerShape.enabled = e.checked;
            }, checked: true
        },
        '#marker');

    var lineCheckBox = new ej.buttons.CheckBox(
        {
            change: function (e) {
                lineCheck = e.checked;
                if (e.checked) {
                    connectlineCheckBox.disabled = false;
                    connectlineCheckBox.checked = false;
                    widthCheck.disabled = false;
                } else {
                    connectLineCheck = e.checked;
                    emptySavedLinePositions();
                    connectlineCheckBox.disabled = true;
                    connectlineCheckBox.checked = false;
                    widthCheck.disabled = true;
                }
            }
        },
        '#line');


    var connectlineCheckBox = new ej.buttons.CheckBox(
        {
            disabled: true,
            change: function (e) {
                connectLineCheck = e.checked;
                if (!e.checked) {
                    emptySavedLinePositions();
                }
            }
        },
        '#connect');

    var markerShape = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select marker shape',
        width: '100%'
    });
    markerShape.appendTo('#type');

    var widthCheck= document.getElementById('width');

    var togglebtn = new ej.buttons.Button({
        cssClass: 'e-info',
        isPrimary: true,
        disabled: true
    });
    togglebtn.appendTo('#togglebtn');

    document.getElementById('togglebtn').onclick = function () {
        maps.layers[0].markerSettings = [];
        maps.layers[0].navigationLineSettings = [];
        navigationLines = [];
        emptySavedLinePositions();
        togglebtn.disabled = true;
    };
    var emptySavedLinePositions = function () {
        latitude = [];
        longitude = [];
    };
    var addMarker = function (args) {
        if (args.latitude !== null && args.longitude !== null) {
            var layerIndex = (args.target.indexOf('_LayerIndex_') !== -1) ?
                parseFloat(args.target.split('_LayerIndex_')[1].split('_')[0]) : 0;
            var marker;
            var dynamicMarker = maps.layersCollection[layerIndex].markerSettings;
            dynamicMarker.push(new ej.maps.MarkerSettings(maps, 'markerSettings', marker));
            var markerIndex = dynamicMarker.length - 1;
            dynamicMarker[markerIndex].visible = true;
            dynamicMarker[markerIndex].dataSource = [
                { latitude: args.latitude, longitude: args.longitude, name: 'dynamicmarker' }
            ];
            dynamicMarker[markerIndex].animationDuration = 0;
            dynamicMarker[markerIndex].fill = '#DB4537';
            dynamicMarker[markerIndex].shape = (markerShape.value !== 'Image') ? markerShape.value : 'Image';
            dynamicMarker[markerIndex].height = (markerShape.value !== 'Image') ? 12 : 20;
            dynamicMarker[markerIndex].width = (markerShape.value !== 'Image') ? 12 : 20;
            dynamicMarker[markerIndex].imageUrl = (markerShape.value !== 'Image') ? '' : 'src/maps/images/ballon.png';
        }
    };

    var addLine = function (lineArgs, lineWidth, connectiveLine) {
        if (lineArgs.latitude != null && lineArgs.longitude != null) {
            latitude.push(lineArgs.latitude);
            longitude.push(lineArgs.longitude);
        }
        if (latitude.length >= 2) {
            navigationLines.push({
                'visible': true,
                'latitude': [latitude[(latitude.length - 2)], latitude[(latitude.length - 1)]],
                'longitude': [longitude[(longitude.length - 2)], longitude[(longitude.length - 1)]],
                'angle': 0,
                'color': 'blue',
                'width': (lineWidth > 5) ? 5 : (((5 >= lineWidth) && (lineWidth >= 1)) ? lineWidth : 1)
            });
            maps.layers[0].navigationLineSettings = navigationLines;
            if (!connectiveLine) {
                emptySavedLinePositions();
            }
        }
    };
};