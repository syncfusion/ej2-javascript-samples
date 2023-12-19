this.default = function() {

    var orientationSteps = [
        { iconCss: 'sf-icon-ordered', label: 'Orders' },
        { iconCss: 'sf-icon-review', label: 'Review' },
        { iconCss: 'sf-icon-package', label: 'Packing' },
        { iconCss: 'sf-icon-delivery', label: 'Shipping' }
    ];

    var stepperOrientation = new ej.navigations.Stepper ({
        activeStep: 1,
        orientation: 'horizontal',
        labelPosition: 'end',
        steps: orientationSteps
    });
    stepperOrientation.appendTo('#orientation-stepper');

    window.updateOrientation = function(args) {
        stepperOrientation.orientation = args.value;
    };
    window.updateLabelPosition = function(args) {
        stepperOrientation.labelPosition = args.value;
    };
};