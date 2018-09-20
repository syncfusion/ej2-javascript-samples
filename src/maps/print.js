/**
 * Projection sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        load: function (args) {
            var printtheme = location.hash.split('/')[1];
            printtheme = printtheme ? printtheme : 'Material';
            args.maps.theme = (printtheme.charAt(0).toUpperCase() + printtheme.slice(1));
        },
        tooltipRender: function (args) {
            if (args.options.toString().indexOf('population') > -1) {
                args.cancel = true;
            }
        },
        format: 'n',
        useGroupingSeparator: true,
        titleSettings: {
            text: 'State-wise US population - 2010',
            textStyle: {
                size: '16px'
            },
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Bottom',
            height: '10',
            width: '350',
            labelDisplayMode: 'Trim',
            alignment: 'Center'
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax(location.origin + location.pathname + 'src/maps/map-data/usa.json'),
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                dataSource: new ej.maps.MapAjax(location.origin + location.pathname + 'src/maps/map-data/print-datasource.json'),
                shapeSettings: {
                    border: {
                        width: 0.5,
                        color: 'gray'
                    },
                    colorValuePath: 'population',
                    colorMapping: [
                        {
                            from: 580000 , to: 2800000, color: '#dae8f1', label: '<3M'
                        },
                        {
                            from: 2800000, to: 5280000, color: '#b0cde1', label: '3-6M'
                        },
                        {
                            from: 5280000, to:  8260000, color: '#90bad8', label: '6-9M'
                        },
                        {
                            from: 8260000, to: 11660000, color: '#6ea7d2', label: '9-12M'
                        },
                        {
                            from: 11660000, to: 19600000, color: '#4c96cb', label: '12-20M'
                        },
                        {
                            from: 19600000, to: 26500000, color: '#3182bd', label: '20-25M'
                        },
                        {
                            from: 26500000, to: 38400000, color: '#004374', label: '>25M'
                        }
                    ]
                },
                tooltipSettings: {
                    visible: true,
                    valuePath: 'population',
                    format: 'State: ${name} <br> Population: ${population}'
                }
            }
        ]
    });
    maps.appendTo('#print-container');
    var togglebtn = new ej.buttons.Button({
        iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true,
    });
    togglebtn.appendTo('#togglebtn');
    document.getElementById('togglebtn').onclick = function () {
        maps.print();
    };
};