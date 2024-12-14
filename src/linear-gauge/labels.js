this.default = function () {
    document.getElementById('horizontal').onclick = function (e) {
        if (e.currentTarget != null) {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.backgroundColor = "#0074E3";
            document.getElementById('vertical').style.color = "black";
            document.getElementById('vertical').style.backgroundColor = "white";
        }
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className = "col-xs-12 col-sm-12 col-lg-12 col-md-12";
        gauge1.width = gauge2.width = gauge3.width = gauge4.width = '450px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = '150px';
        gauge1.orientation = gauge2.orientation = gauge3.orientation = gauge4.orientation = "Horizontal";
    };
    document.getElementById('vertical').onclick = function (e) {
        gauge1.orientation = gauge2.orientation = gauge3.orientation = gauge4.orientation = "Vertical";
        document.getElementById('container1').className = document.getElementById('container2').className =
        document.getElementById('container3').className = document.getElementById('container4').className = "col-xs-5 col-sm-5 col-lg-3 col-md-3";
        if (e.currentTarget != null) {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.backgroundColor = "#0074E3";
            document.getElementById('horizontal').style.color = "black";
            document.getElementById('horizontal').style.backgroundColor = "white";
        }
        gauge4.width = gauge3.width = gauge2.width = gauge1.width = '200px';
        gauge1.height = gauge2.height = gauge3.height = gauge4.height = '350px';
    };
    
    var gauge1 = new ej.lineargauge.LinearGauge({
        title: 'Custom labels',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        background:'transparent',
        animationDuration: 1500,
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 0,
            }],
            majorTicks: {
                interval: 5, height: 7, width: 1
            },
            minorTicks: {
                interval: 2.5, height: 3
            },
            minimum: 5,
            maximum: 20,
            opposedPosition: true,
            labelStyle: { format: '${value}', font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var selectedLabelTheme1 = location.hash.split('/')[1];
            selectedLabelTheme1 = selectedLabelTheme1 ? selectedLabelTheme1 : 'Material';
            args.gauge.theme = (selectedLabelTheme1.charAt(0).toUpperCase() +
                selectedLabelTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge1.appendTo('#gauge1');

    var gauge2 = new ej.lineargauge.LinearGauge({
        axisLabelRender: function (args) {
            if (args.text == "20")
                args.text = "Ordered";
            else if (args.text == "15")
                args.text = "Packed";
            else if (args.text == "10")
                args.text = "Shipped";
            else if (args.text == "5")
                args.text = "Delivered";
            else
                args.text = " ";
        },
        background:'transparent',
        title: 'Text labels',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        axes: [{
            line: {
                width: 5
            },
            pointers: [{
                width: 15,
                height: 15,
                value: 20,
                color: '#0DC9AB',
                placement: 'Near',
                markerType: 'Circle',
                offset: 7
            }, {
                width: 15,
                height: 15,
                value: 15,
                color: '#0DC9AB',
                placement: 'Near',
                markerType: 'Circle',
                offset: 7
            },
            {
                width: 15,
                height: 15,
                value: 10,
                color: '#0DC9AB',
                placement: 'Near',
                markerType: 'Circle',
                offset: 7
            },
            {
                width: 15,
                height: 15,
                value: 5,
                color: '#E5E7EB',
                placement: 'Near',
                markerType: 'Circle',
                offset: 7
            }
            ],
            ranges: [{
                start: 10,
                end: 15,
                startWidth: 5,
                endWidth: 5,
                color: '#0DC9AB'
            },
            {
                start: 15,
                end: 20,
                startWidth: 5,
                endWidth: 5,
                color: '#0DC9AB'
            }
            ],
            majorTicks: {
                interval: 5, height: 0
            },
            minorTicks: {
                interval: 2.5, height: 0
            },
            minimum: 5,
            maximum: 20,
            opposedPosition: true,
            labelStyle: { offset: 10, font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var selectedLabelTheme2 = location.hash.split('/')[1];
            selectedLabelTheme2 = selectedLabelTheme2 ? selectedLabelTheme2 : 'Material';
            args.gauge.theme = (selectedLabelTheme2.charAt(0).toUpperCase() +
                selectedLabelTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            if (args.gauge.theme === "Fluent2Dark" || args.gauge.theme === 'Fluent2HighContrast') {
                args.gauge.axes[0].pointers[3].color = "#292827"; 
            } else if (args.gauge.theme === 'Bootstrap5Dark') {
                args.gauge.axes[0].pointers[3].color = '#343A40';
            } else if (args.gauge.theme === 'Tailwind3Dark') {
                args.gauge.axes[0].pointers[3].color = '#282F3C';
            } else if (args.gauge.theme === 'Material3') {
                args.gauge.axes[0].pointers[3].color = '#C4C7C5';
            } else if (args.gauge.theme === 'Material3Dark') {
                args.gauge.axes[0].pointers[3].color = '#938F99';
            }
            // custom code end
           
        }
    });
    gauge2.appendTo('#gauge2');

    var gauge3 = new ej.lineargauge.LinearGauge({
        title: 'Label offset',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        background:'transparent',
        animationDuration: 1500,
        axes: [{
            line: {
                width: 5
            },
            pointers: [
                {
                    width: 0,
                }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true,
            majorTicks: {
                interval: 20, height: 7, width: 1
            },
            minorTicks: {
                interval: 10, height: 3
            },
            labelStyle: { offset: 5, font: { fontFamily: 'inherit' } }
        }],
        load: function (args) {
            // custom code start
            var selectedLabelTheme3 = location.hash.split('/')[1];
            selectedLabelTheme3 = selectedLabelTheme3 ? selectedLabelTheme3 : 'Material';
            args.gauge.theme = (selectedLabelTheme3.charAt(0).toUpperCase() +
                selectedLabelTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        } 
    });
    gauge3.appendTo('#gauge3');

    var gauge4 = new ej.lineargauge.LinearGauge({
        title: 'Label customization',
        titleStyle: {
            fontFamily: "inherit",
            fontWeight: '499'
        },
        background:'transparent',
        animationDuration: 1500,
        axes: [{
            line: {
                width: 5
            },
            majorTicks: {
                interval: 20,
                height: 7,
                width: 1
            },
            minorTicks: {
                interval: 10,
                height: 3
            },
            labelStyle: {
                font: { fontFamily: 'inherit', color: '#F93106' }
            },
            pointers: [
                {
                    width: 0
                }
            ],
            minimum: 0,
            maximum: 100,
            opposedPosition: true
        }],
        load: function (args) {
            // custom code start
            var selectedLabelTheme4 = location.hash.split('/')[1];
            selectedLabelTheme4 = selectedLabelTheme4 ? selectedLabelTheme4 : 'Material';
            args.gauge.theme = (selectedLabelTheme4.charAt(0).toUpperCase() +
                selectedLabelTheme4.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    gauge4.appendTo('#gauge4');
};