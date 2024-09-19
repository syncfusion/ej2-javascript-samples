this.default = function () { 
    var textColor = '#000000';   
    var gauge = new ej.lineargauge.LinearGauge({
        orientation: 'Horizontal',
        background:'transparent',
        animationDuration: 3000,
        axes: [{
            minimum: 0,
            maximum: 12000,
            line: { width: 30 },
            opposedPosition: true,
            pointers: [{
                value: 8446,
                height: 40,
                width: 40,
                placement: 'Near',
                offset: -40,
                markerType: 'Image',
                imageUrl: './src/linear-gauge/images/step-count.png'
            }],
            ranges: [
                {
                    start: 0,
                    end: 8456,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#0DC9AB',
                    offset: 0
                }
            ],
            majorTicks: {
                interval: 12000, height: 10, width: 1
            },
            minorTicks: {
                height: 0
            },
            labelStyle: {
                font: { fontFamily: 'inherit' }
            }
        }],
        annotations: [{
            content: "<div style=\"width: 70px;\"> <p align=\"center\" style=\"font-size:10px;margin-left:56px;margin-top:18px;font-weight: 400;color:" + textColor + ";\">STEPS</p> <p align=\"center\" style=\"font-size: 23px;margin-top:-15px;margin-left:46px;color: #0DC9AB;font-weight: 600;\">8456</p></div>",
            axisIndex: 0,
            axisValue: 12000,
            x: 10,
            y: 0, zIndex: '1',
        },
        {
            content: "<div style=\"width: 145px;font-size: 19px;margin-left:142px;color:" + textColor + ";\"> Sun, 7 February </div>",
            axisIndex: 0,
            axisValue: 0,
            x: 0,
            y: -100, zIndex: '1',
        }],
        load: function (args) {            
            // custom code start            
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            textColor = args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';
            args.gauge.annotations[0].content = "<div style=\"width: 70px;\"> <p align=\"center\" style=\"font-size:10px;margin-left:56px;margin-top:18px;font-weight: 400;color:" + textColor + ";\">STEPS</p> <p align=\"center\" style=\"font-size: 23px;margin-top:-15px;margin-left:46px;color: #0DC9AB;font-weight: 600;\">8456</p></div>";
            args.gauge.annotations[1].content = "<div style=\"width: 145px;font-size: 19px;margin-left:142px;color:" + textColor + ";\"> Sun, 7 February </div>";
            // custom code end
        },
    });
    gauge.appendTo('#stepcounter');
};