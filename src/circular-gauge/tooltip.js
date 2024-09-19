this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        background:'transparent',
        animationDuration: 2000,
        axes: [{
            radius: '90%',
            minimum: 0,
            maximum: 120,
            startAngle: 240,
            endAngle: 120,
            lineStyle: { width: 0 },
            majorTicks: { color: 'white', offset: -3.7, height: 10 },
            minorTicks: { width: 0 },
            labelStyle: { useRangeColor: true, font: { color: '#424242', size: '13px', fontFamily: 'Segoe UI' } },
            pointers: [{
                value: 70,
                radius: '60%',
                color: '#33BCBD',
                cap: { radius: 10, border: { color: '#33BCBD', width: 5 } },
                animation: { enable: true, duration: 1500 }
            }],
            ranges: [{
                start: 0,
                end: 50,
                startWidth: 10, endWidth: 10,
                radius: '102%',
                color: '#3A5DC8',
            }, {
                start: 50,
                end: 120,
                radius: '102%',
                startWidth: 10, endWidth: 10,
                color: '#33BCBD',
            }]
        }],
        tooltip: {
            type: ['Pointer', 'Range'],
            enable: true,
            showAtMousePosition: true,
            format: 'Current Value:  {value}',
            enableAnimation: false,
            textStyle: {
                size: '13px',
                fontFamily: 'inherit'
            },
            rangeSettings: {
                showAtMousePosition: true, format: "Start Value: {start} <br/> End Value: {end}", textStyle: {
                    size: '13px',
                    fontFamily: 'inherit'
                }
            }
        },
        dragEnd: function (args) {
            if (args.currentValue >= 0 && args.currentValue <= 50) {
                args.pointer.color = '#3A5DC8';
                args.pointer.cap.border.color = '#3A5DC8';
                args.pointer.value = args.currentValue;
                args.pointer.animation.enable = false;
            }
            else {
                args.pointer.color = '#33BCBD';
                args.pointer.cap.border.color = '#33BCBD';
                args.pointer.value = args.currentValue;
                args.pointer.animation.enable = false;
            }
            circulargauge.refresh();
        },
        enablePointerDrag: true,
        load: function (args) {
            // custom code start
            var selectedTooltipTheme = location.hash.split('/')[1];
            selectedTooltipTheme = selectedTooltipTheme ? selectedTooltipTheme : 'Material';
            args.gauge.theme = (selectedTooltipTheme.charAt(0).toUpperCase() +
                selectedTooltipTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    circulargauge.appendTo('#tooltip-container');
};