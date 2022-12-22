this.default = function () {

var right = new ej.inputs.Rating({
    showLabel: true,
    value: 3.0
});
right.appendTo('#rating1');

var left = new ej.inputs.Rating({
    showLabel: true,
    labelPosition: 'Left',
    value: 3.0
});
left.appendTo('#rating2');

var template = new ej.inputs.Rating({
    showLabel: true,
    labelTemplate: '<span>${value} out of 5</span>',
    value: 3.0
});
template.appendTo('#rating3');

var top = new ej.inputs.Rating({
    showLabel: true,
    labelPosition: 'Top',
    value: 3.0
});
top.appendTo('#rating4');

var bottom = new ej.inputs.Rating({
    showLabel: true,
    labelPosition: 'Bottom',
    value: 3.0
});
bottom.appendTo('#rating5');
};
