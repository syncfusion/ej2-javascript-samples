/**
 * Sample for export gauge
 */
this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        // custom code start
        load: function (args) {
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
            selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        allowPdfExport : true,
        allowImageExport: true,
        allowPrint : true,
        // custom code end
        axes: [{
            radius: '80%',
            startAngle: 0,
            endAngle: 0,
            direction: "AntiClockWise",
            majorTicks: {
                position: 'Outside',
                width: 1,
                height: 25,
                interval: 10,
                useRangeColor: true
            },
            lineStyle: { width: 0 },
            minorTicks: {
                position: 'Outside',
                width: 1,
                height: 8,
                interval: 2,
                useRangeColor: true
            },
            ranges: [
                {
                    start: 0, end: 32,
                    radius: '90%',
                    startWidth: 10, endWidth: 35,
                    color: '#F8A197',
                },
                {
                    start: 32, end: 70,
                    radius: '90%',
                    startWidth: 10, endWidth: 35,
                    color: '#C45072',
                },
                {
                    start: 70, end: 100,
                    radius: '90%',
                    startWidth: 10, endWidth: 35,
                    color: '#1B679F',
                }],
            labelStyle: {
                font: {
                    color: '#424242',
                    fontFamily: 'Roboto',
                    size: '12px',
                    fontWeight: 'Regular'
                },
                hiddenLabel: 'Last',
                offset: 2,
                position: 'Outside',
                useRangeColor: true
            },
            pointers: []
        }]

    });
    circulargauge.appendTo('#gauge');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: '90px'
    });
    mode.appendTo('#type');
    var exportGauge = new ej.buttons.Button({
        iconCss: 'e-icons e-play-icon1', cssClass: 'e-flat', isPrimary: true,
    });
    exportGauge.appendTo('#export');
    document.getElementById('export').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        circulargauge.export(mode.value, fileName);
    };
    var printGauge = new ej.buttons.Button({
        iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true,
    });
    printGauge.appendTo('#print');
    document.getElementById('print').onclick = function () {
        circulargauge.print();
    };
};
