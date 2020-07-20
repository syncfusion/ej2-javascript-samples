this.default = function () {
    var defaultObj = new ej.inputs.Slider({
        value: 30,
        enableRtl: true
    });
    defaultObj.appendTo('#default');
    var minRangeObj = new ej.inputs.Slider({
        value: 30,
        type: 'MinRange',
        enableRtl: true
    });
    minRangeObj.appendTo('#minrange');
    var rangeObj = new ej.inputs.Slider({
        value: [30, 70],
        type: 'Range',
        enableRtl: true
    });
    rangeObj.appendTo('#range');
};