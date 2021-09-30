/**
 * Gradient color
 */
this.default = function () {
    var rangeLinearGradient = {
        startValue: "0%",
        endValue: "100%",
        colorStop: [{ color: "#fef3f9", offset: "0%", opacity: 1 },
        { color: " #f54ea2", offset: "100%", opacity: 1 }
        ]
    };
    var rangeRadialGradient = {
        radius: "65%",
        outerPosition: { x: "50%", y: "70%" },
        innerPosition: { x: "60%", y: "60%" },
        colorStop: [{ color: "#fff5f5", offset: "5%", opacity: 0.9 },
        { color: " #f54ea2", offset: "100%", opacity: 0.9 }
        ]
    };
    var pointerLinearGradient = {
        startValue: "0%",
        endValue: "100%",
        colorStop: [{ color: "#fef3f9", offset: "0%", opacity: 1 },
        { color: " #f54ea2", offset: "100%", opacity: 1 }
        ],
    };
    var pointerRadialGradient = {
        radius: "60%",
        outerPosition: { x: "50%", y: "50%" },
        innerPosition: { x: "50%", y: "50%" },
        colorStop: [{ color: "#fff5f5", offset: "0%", opacity: 0.9 },
        { color: "#f54ea2", offset: "100%", opacity: 0.8 }
        ]
    };
    var gauge = new ej.lineargauge.LinearGauge({
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        orientation: 'Horizontal',
        container: {
            width: 30,
            offset: 30
        },
        axes: [{
            line: {
                width: 0
            },
            majorTicks: {
                interval: 25,
                height: 0
            },
            minorTicks: {
                height: 0
            },
            labelStyle: {
                offset: 55
            },
            pointers: [
                {
                    value: 80,
                    height: 25,
                    width: 35,
                    placement: 'Near',
                    offset: -44,
                    markerType: 'Triangle',
                    color : "#f54ea2",
                }
            ],
            ranges: [{
                start: 0,
                end: 80,
                startWidth: 30,
                endWidth: 30,
                color:  "#f54ea2",
                offset: 30,
                linearGradient: rangeLinearGradient,
            }
            ]
        }]        
    });
    gauge.appendTo('#gauge');

    function changeGradient() {
        if (gradientType.value == 1 && element.value == 0) {
            gauge.axes[0].ranges[0].linearGradient = null;
            gauge.axes[0].ranges[0].radialGradient = rangeRadialGradient;
            gauge.axes[0].pointers[0].linearGradient = null;
            gauge.axes[0].pointers[0].radialGradient = null;
            gauge.refresh();
        }
        if (element.value == 0 &&  gradientType.value == 0) {
            gauge.axes[0].ranges[0].linearGradient = rangeLinearGradient;
            gauge.axes[0].ranges[0].radialGradient = null;
            gauge.axes[0].pointers[0].linearGradient = null;
            gauge.axes[0].pointers[0].radialGradient = null;
            gauge.refresh();
        }
        if (gradientType.value == 1 && element.value == 1) {
            gauge.axes[0].pointers[0].radialGradient = pointerRadialGradient;
            gauge.axes[0].pointers[0].linearGradient = null;
            gauge.axes[0].ranges[0].linearGradient = null;
            gauge.axes[0].ranges[0].radialGradient = null;
            gauge.refresh();
        }
        if (gradientType.value == 0 && element.value == 1) {
            gauge.axes[0].pointers[0].linearGradient = pointerLinearGradient;
            gauge.axes[0].pointers[0].radialGradient = null;
            gauge.axes[0].ranges[0].linearGradient = null;
            gauge.axes[0].ranges[0].radialGradient = null;
            gauge.refresh();
        }
    }
     var gradientType = new ej.dropdowns.DropDownList({
        index: 0,
        width: 145,
        change: function () {
            changeGradient();
        }
    });
    gradientType.appendTo('#gradientType');

    var element = new ej.dropdowns.DropDownList({
        index: 0,
        width: 145,
        change: function () {
            changeGradient();
        }
    });
    element.appendTo('#element');
};


    