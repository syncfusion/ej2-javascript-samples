/**
 * Sample for Tooltip
 */
this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        title: 'Tooltip Customization',
        titleStyle: { size: '15px', color: 'grey' },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        // custom code end
        axes: [{
            radius: '90%',
            minimum: 0,
            maximum: 120,
            startAngle: 240,
            endAngle: 120,
            lineStyle: { width: 0 },
            majorTicks: { color: 'white', offset: -5, height: 12 },
            minorTicks: { width: 0 },
            labelStyle: { useRangeColor: true, font: { color: '#424242', size: '13px', fontFamily: 'Roboto' } },
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
            enableAnimation: false
        },
        tooltipRender: function (args) {
            var imageName, borderColor, textColor;
            if (args.pointer) {
                imageName = ((args.pointer.currentValue >= 0 && args.pointer.currentValue <= 50) ? 'min' : 'max');
                borderColor = ((args.pointer.currentValue >= 0 && args.pointer.currentValue <= 50) ? '#3A5DC8' : '#33BCBD');
				textColor = circulargauge.theme.toLowerCase() === 'highcontrast' ? 'White' : borderColor;
				if (circulargauge.theme.toLowerCase() === 'highcontrast') {
                    args.tooltip.template = '<div id="templateWrap" style="border:2px solid ' + borderColor +
                    ';background-color:black"><img src="src/circular-gauge/images/' + imageName + '.png"/><div class="des" style="color: ' +
                    textColor + '"><span>${value} MPH</span></div></div>';
                } else {
                    args.tooltip.template = '<div id="templateWrap" style="border:2px solid ' + borderColor +
                    '"><img src="src/circular-gauge/images/' + imageName + '.png"/><div class="des" style="color: ' +
                    borderColor + '"><span>${value} MPH</span></div></div>'; 
                }
                
            } else if (args.range) {
                imageName = ((args.range.start >= 0 && args.range.end <= 50)) ? 'min' : 'max';
                borderColor = ((args.range.start >= 0 && args.range.end <= 50)) ? '#3A5DC8' : '#33BCBD';
				textColor = circulargauge.theme.toLowerCase() === 'highcontrast' ? 'White' : borderColor;
                var start = args.range.start;
                var end = args.range.end;
                if (circulargauge.theme.toLowerCase() === 'highcontrast') {
                    args.tooltip.rangeSettings.template = '<div id=templateWrap style="padding:5px;border:2px solid' + borderColor + ';color: ' +
                    textColor + ';background-color:black"><img src="src/circular-gauge/images/' + imageName +
                    '.png"/> <span>' + start + ' - ' + end + ' MPH  </span> </div>';
                } else {
                    args.tooltip.rangeSettings.template = '<div id=templateWrap style="padding:5px;border:2px solid' + borderColor + ';color: ' +
                    borderColor + '"><img src="src/circular-gauge/images/' + imageName +
                    '.png"/> <span>' + start + ' - ' + end + ' MPH  </span> </div>';
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
        enablePointerDrag: true
    });
    circulargauge.appendTo('#tooltip-container');
};