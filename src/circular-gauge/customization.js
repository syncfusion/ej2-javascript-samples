/**
 * Sample for customization of gauge
 */
function customGauge1() {
    var customGauge1 = new ej.circulargauge.CircularGauge({
        centerY: '70%',
        // custom code start
        load: function (args) {
            var selecTheme = location.hash.split('/')[1];
            selecTheme = selecTheme ? selecTheme : 'Material';
            args.gauge.theme = (selecTheme.charAt(0).toUpperCase() + selecTheme.slice(1));
        },
        // custom code end
        axes: [{
            annotations: [{
                content: '<div style="color:#666666;font-size:35px;">1800</div>',
                angle: 0,
                radius: '110%', zIndex: 1
            }],
            lineStyle: { width: 0 },
            startAngle: 300, endAngle: 60,
            radius: '80%',
            labelStyle: { font: { size: '0px' } },
            majorTicks: { width: 0 },
            minorTicks: { height: 0 },
            minimum: 999, maximum: 2000,
            ranges: [{
                start: 1000, end: 2000,
                radius: '90%',
                startWidth: 30, endWidth: 30,
                color: '#E0E0E0'
            }],
            pointers: [{
                type: 'RangeBar',
                value: 1800, radius: '90%',
                color: '#FFDD00', animation: { duration: 0 },
                pointerWidth: 30
            }, {
                radius: '90%', value: 1800,
                color: '#424242',
                animation: { duration: 0 },
                pointerWidth: 9,
                cap: { radius: 10, color: '#424242', border: { width: 0 } }
            }]
        }]
    });
    return customGauge1;
}
function customGauge2() {
    var customGauge2 = new ej.circulargauge.CircularGauge({
        axes: [{
            annotations: [{
                content: '<div style="color:#666666;font-size:35px;">50.5GB</div>',
                angle: 180, radius: '0%', zIndex: 1
            }, {
                content: '<div style="color:#757575;font-size:15px;">Used</div>',
                angle: 180, radius: '25%',
                textStyle: {
                    fontFamily: 'Roboto',
                    color: '#9E9E9E',
                    fontStyle: 'Bold',
                    fontWeight: 'Regular',
                    size: '14px'
                }, zIndex: 1
            }],
            lineStyle: { width: 0 },
            startAngle: 180, endAngle: 180,
            radius: '80%',
            labelStyle: { font: { size: '0px' } },
            majorTicks: { width: 0 },
            minorTicks: { height: 0 },
            minimum: 0, maximum: 100,
            ranges: [{
                start: 0, end: 100,
                radius: '80%', startWidth: 30,
                endWidth: 30, color: '#E0E0E0'
            }],
            pointers: [{
                type: 'RangeBar',
                value: 50.5, radius: '80%',
                color: '#FF2680', animation: { duration: 0 },
                pointerWidth: 30
            }]
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        }
        // custom code end
    });
    return customGauge2;
}

this.default = function () {
    var random = new ej.circulargauge.CircularGauge(customGauge1());
    random.appendTo('#cutomization-container');
    var usage = new ej.circulargauge.CircularGauge(customGauge2());
    usage.appendTo('#cutomization-container1');
    var gauge = random;
    var isUsage = false;
    var barColor;
    var rangeColor;
    var pointerColor;
    barColor = new ej.dropdowns.DropDownList({
        index: 0,
        width: 120,
        change: function () {
            gauge.axes[0].pointers[0].color = barColor.value.toString();
            gauge.refresh();
        }
    });
    barColor.appendTo('#barColor');
    rangeColor = new ej.dropdowns.DropDownList({
        index: 0,
        width: 120,
        change: function () {
            gauge.axes[0].ranges[0].color = rangeColor.value.toString();
            gauge.refresh();
        }
    });
    rangeColor.appendTo('#rangeColor');
    pointerColor = new ej.dropdowns.DropDownList({
        index: 0,
        width: 120,
        change: function () {
            var color = pointerColor.value.toString();
            if (!isUsage) {
                gauge.axes[0].pointers[1].color = color;
                gauge.axes[0].pointers[1].cap.border.color = color;
                gauge.axes[0].pointers[1].cap.color = color;
            }
            gauge.refresh();
        }
    });
    pointerColor.appendTo('#pointerColor');
    // Code for Property panel
    document.getElementById('usage').onclick = function () {
         document.getElementById('cutomization-container').style.display = 'none';
         document.getElementById('cutomization-container1').style.display = 'block';
        gauge = usage;
        isUsage = true;
        var element = document.getElementById('currentValue');
        element.min = '0.5';
        element.max = '100';
        element.value = usage.axes[0].pointers[0].value.toString();
        document.getElementById('currentPointerValue').innerHTML =
            'Current Value <span> &nbsp;&nbsp;&nbsp;' + usage.axes[0].pointers[0].value + '</span>';
        barColor.value = usage.axes[0].pointers[0].color;
        rangeColor.value = usage.axes[0].ranges[0].color;
        pointerColor.enabled = false;
        var pointElement = document.getElementById('pointColor');
        pointElement.className = 'e-disabled';
        var currentElement = document.getElementById('usage');
        var existElement = document.getElementById('random');
        var currentLine = document.getElementById('usage_line');
        var exisLine = document.getElementById('random_line');
        currentLine.style.display = 'block';
        exisLine.style.display = 'none';
    };
    document.getElementById('random').onclick = function () {
        if (usage.element) {
             document.getElementById('cutomization-container1').style.display = 'none';
             document.getElementById('cutomization-container').style.display = 'block';
            gauge = random;
            isUsage = false;
            var currentElement = document.getElementById('random');
            var existElement = document.getElementById('usage');
            var exisLine = document.getElementById('usage_line');
            var currentLine = document.getElementById('random_line');
            currentLine.style.display = 'block';
            exisLine.style.display = 'none';
            var element = document.getElementById('currentValue');
            var pointElement = document.getElementById('pointColor');
            pointElement.className = 'e-enabled';
            pointerColor.enabled = true;
            element.min = '1000';
            element.max = '2000';
            element.value = random.axes[0].pointers[0].value.toString();
            document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' +
            random.axes[0].pointers[0].value + '</span>';
            barColor.value = random.axes[0].pointers[0].color;
            rangeColor.value = random.axes[0].ranges[0].color;
            pointerColor.value = random.axes[0].pointers[1].color;
        }
        
    };
    document.getElementById('currentValue').onpointermove = document.getElementById('currentValue').ontouchmove =
        document.getElementById('currentValue').onchange = function () {
            var value = +document.getElementById('currentValue').value;
            if (isUsage) {
                gauge.setPointerValue(0, 0, value);
            }
            else {
                gauge.setPointerValue(0, 0, value);
                gauge.setPointerValue(0, 1, value);
            }
            gauge.setAnnotationValue(0, 0, '<div style="color:#666666;font-size:35px;">' + value + (isUsage ? 'GB' : '') + '</div>');
            document.getElementById('currentPointerValue').innerHTML = 'Current Value <span> &nbsp;&nbsp;&nbsp;' + value + '</span>';
        };

    var selectedTheme = location.hash.split('/')[1];
    var color;
    if (selectedTheme === 'bootstrap') {
        color = '#a16ee5';
    }
    else if (selectedTheme === 'fabric') {
        color = '#1783FF';
    }
    else {
        color = '#ff4081';
    }
    var exisLine = document.getElementById('usage_line');
    var currentLine = document.getElementById('random_line');
    exisLine.style.background = color;
    currentLine.style.background = color;
};