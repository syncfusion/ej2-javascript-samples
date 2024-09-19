this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        allowPdfExport: true,
        allowImageExport: true,
        allowPrint: true,
        background:'transparent',
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
                    fontFamily: 'inherit',
                    size: '12px',
                    fontWeight: 'Regular'
                },
                hiddenLabel: 'Last',
                offset: 2,
                position: 'Outside',
                useRangeColor: true
            },
            pointers: []
        }],
        load: function (args) {
            // custom code start
            var selectedExportTheme = location.hash.split('/')[1];
            selectedExportTheme = selectedExportTheme ? selectedExportTheme : 'Material';
            args.gauge.theme = (selectedExportTheme.charAt(0).toUpperCase() +
                selectedExportTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: '100%'
    });
    mode.appendTo('#type');
    var exportGauge = new ej.buttons.Button({
        isPrimary: true
    });
    exportGauge.appendTo('#export');
    var fileText = new ej.inputs.TextBox({
        value: 'Circular Gauge',
        width: '100%'
    });
    fileText.appendTo('#fileName');
    document.getElementById('export').onclick = function () {
        var fileName = (document.getElementById('fileName')).value;
        circulargauge.export(mode.value, fileName);
    };
    var printGauge = new ej.buttons.Button({
        isPrimary: true
    });
    printGauge.appendTo('#print');
    document.getElementById('print').onclick = function () {
        circulargauge.print();
    };
};
