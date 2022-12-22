this.default = function () {

var rating = new ej.inputs.Rating({ value:3.0 });
rating.appendTo('#rating1');

var tooltipTemplate = new ej.inputs.Rating({
    tooltipTemplate: '<span>${value} Star</span>',
    value: 3.0
});
tooltipTemplate.appendTo('#rating2');

};