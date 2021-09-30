/**
 * Gradient color.
 */
this.default = function () {
    var rangeLinearGradient = {
        startValue: '0%',
        endValue: '100%',
        colorStop: [
            { color: '#9E40DC', offset: '0%', opacity: 0.9 },
            { color: '#E63B86', offset: '70%', opacity: 0.9 }]      
    };
    var rangeRadialGradient = {
        radius: '50%',
    innerPosition: { x: '50%', y: '50%' },
    outerPosition: { x: '50%', y: '50%' },
    colorStop: [
        { color: '#9E40DC', offset: '90%', opacity: 0.9 },
        { color: '#E63B86', offset: '160%', opacity: 0.9 }]    
    };
    var pointerLinearGradient = {
        startValue: '0%',
        endValue: '100%',
        colorStop: [
            { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
            { color: '#E63B86', offset: '70%', opacity: 0.9 }]    
    };
    var pointerRadialGradient = {
        radius: '50%',
        innerPosition: { x: '50%', y: '50%' },
        outerPosition: { x: '50%', y: '50%' },
        colorStop: [
            { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
            { color: '#E63B86', offset: '60%', opacity: 0.9 }]     
    };
    var gauge = new ej.circulargauge.CircularGauge({        
        load: function (args) {
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
            selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        axes: [{
            lineStyle: { width: 0, color: 'transparent' },
            startAngle: 210, endAngle: 150, minimum: 0, maximum: 100, radius: '80%',
            labelStyle: { font: { fontFamily: 'Roboto',
            size: '12px',
            fontWeight: 'Regular' }, offset: 10 },
            majorTicks: { width: 0, interval: 10 },
            minorTicks: { width: 0 },
            ranges: [
                {
                    start: 0, end: 120, startWidth: 18, endWidth: 18, color: '#E63B86',
                    linearGradient: rangeLinearGradient,
                    roundedCornerRadius: 10    
                }],
            pointers: [{
                animation: { enable: false }, value: 65, radius: '85%', color: '#E63B86',
                pointerWidth: 12,
                cap: { radius: 12 , border: {color: '#E63B86', width: 2.5}, color: 'white' },
                needleTail: { length: '0%'},
                needleStartWidth: 2
            }]
        }]
    });
    gauge.appendTo('#gauge');

     // Code for property panel
     function changeGradient() {
        if (gradientType.value == 1 && element.value == 0) {
            gauge.axes[0].ranges[0].linearGradient = null;
            gauge.axes[0].ranges[0].radialGradient = rangeRadialGradient;
            gauge.axes[0].pointers[0].linearGradient = null;
            gauge.axes[0].pointers[0].radialGradient = null;
            gauge.refresh();
        }
        if (element.value == 0 && gradientType.value == 0) {
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
        placeholder: 'Select Range Bar Color',
        width: 145,
        change: function () {
            changeGradient();
        }
    });
    gradientType.appendTo('#gradientType');

    var element = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 145,
        change: function () {
            changeGradient();
        }
    });
    element.appendTo('#element');
};
