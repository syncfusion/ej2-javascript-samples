this.default = function () {
    var defaultObj = new ej.inputs.Slider({
        value: 30
    });
    defaultObj.appendTo('#default');
    var minRangeObj = new ej.inputs.Slider({
        value: 30,
        type: 'MinRange'
    });
    minRangeObj.appendTo('#minrange');
    var rangeObj = new ej.inputs.Slider({
        value: [30, 70],
        type: 'Range'
    });
    rangeObj.appendTo('#range');
};