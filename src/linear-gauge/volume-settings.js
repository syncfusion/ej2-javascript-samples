ej.lineargauge.LinearGauge.Inject(ej.lineargauge.Annotations);
var textColor = '#000000';
this.default = function () {
    var gauge1 = new ej.lineargauge.LinearGauge({
        container: {
            width: 30,
            roundedCornerRadius: 15,
            type: 'RoundedRectangle',
            border: { width: 1 },
            backgroundColor: 'transparent'
        },
        background:'transparent',
        axes: [{
            minimum: 0,
            maximum: 100,
            line: {
                width: 0
            },
            pointers: [{
                value: 100,
                width: 30,
                color: '#0074E3',
                type: 'Bar',
                position: 'Cross',
                roundedCornerRadius: 15,
                offset: -15
            }],
            majorTicks: {
                interval: 20,
                height: 0
            },
            minorTicks: {
                interval: 10, height: 0
            },
            labelStyle: {
                format:'Music {value} %',
                font: { size: '0px' }
            }
        }],
        annotations: [{
            axisIndex: 0,
            axisValue: 100,
            x: 1,
            y: 0, zIndex: '1',
        }, {
            content: '<div class="sf-icon-music" style="width:16px"></div>',
            axisIndex: 0,
            axisValue: 11,
            x: 9,
            y: 1, zIndex: '1',
        }
        ],
        load: function (args1) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args1.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');            
            // custom code end            
            textColor = args1.gauge.theme.indexOf('Dark') > -1 || args1.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';
            args1.gauge.annotations[0].content = "<div style=\"width: 70px;font-size: 16px;margin-left:64px;margin-top: -31px;font-family:inherit;color:" + textColor + ";\">100%</div>";
        }
    });
    gauge1.appendTo('#gauge1');

    var gauge2 = new ej.lineargauge.LinearGauge({
        container: {
            width: 30,
            roundedCornerRadius: 15,
            type: 'RoundedRectangle',
            border: { width: 1 },
            backgroundColor: 'transparent'
        },
        background:'transparent',
        axes: [{
            minimum: 0,
            maximum: 100,
            line: {
                width: 0
            },
            pointers: [{
                value: 85,
                width: 30,
                color: '#0074E3',
                type: 'Bar',
                position: 'Cross',
                roundedCornerRadius: 15,
                offset: -15
            }],
            majorTicks: {
                interval: 20,
                height: 0
            },
            minorTicks: {
                interval: 10, height: 0
            },
            labelStyle: {
                format:'Bell {value} %',
                font: { size: '0px' }
            }
        }],
        annotations: [{
            axisIndex: 0,
            axisValue: 100,
            x: 1,
            y: 0, zIndex: '1',
        }, {
            content: '<div class="sf-icon-bell" style="width:16px"></div>',
            axisIndex: 0,
            axisValue: 11,
            x: 9,
            y: 1, zIndex: '1',
        }],
        load: function (args2) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args2.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end            
            textColor = args2.gauge.theme.indexOf('Dark') > -1 || args2.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';
            args2.gauge.annotations[0].content = "<div style=\"width: 70px;font-size: 16px;margin-left:73px;margin-top: -31px;font-family:inherit;color:" + textColor + ";\"> 85%</div>";
        }
    });
    gauge2.appendTo('#gauge2');

    var gauge3 = new ej.lineargauge.LinearGauge({
        container: {
            width: 30,
            roundedCornerRadius: 15,
            type: 'RoundedRectangle',
            border: { width: 1 },
            backgroundColor: 'transparent'
        },
        background:'transparent',
        axes: [{
            minimum: 0,
            maximum: 100,
            line: {
                width: 0
            },
            pointers: [{
                value: 65,
                width: 30,
                color: '#0074E3',
                type: 'Bar',
                position: 'Cross',
                roundedCornerRadius: 15,
                offset: -15
            }],
            majorTicks: {
                interval: 20,
                height: 0
            },
            minorTicks: {
                interval: 10, height: 0
            },
            labelStyle: {
                format:'Clock {value} %',
                font: { size: '0px' }
            }
        }],
        annotations: [{
            axisIndex: 0,
            axisValue: 100,
            x: 0,
            y: 0, zIndex: '1',
        }, {
            content: '<div class="sf-icon-clock" style="width:16px"></div>',
            axisIndex: 0,
            axisValue: 11,
            x: 9,
            y: 1, zIndex: '1',
        }],
        load: function (args3) {
            // custom code start
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args3.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end            
            textColor = args3.gauge.theme.indexOf('Dark') > -1 || args3.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';
            args3.gauge.annotations[0].content = "<div style=\"width: 70px;font-size: 16px;margin-left:71px;margin-top: -31px;font-family:inherit;color:" + textColor + ";\"> 65%</div>";
        }
    });
    gauge3.appendTo('#gauge3');
};
