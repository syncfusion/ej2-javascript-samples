this.default = function() {

    var iconOnly = [
        { iconCss: 'sf-icon-cart' },
        { iconCss: 'sf-icon-user' },
        { iconCss: 'sf-icon-transport' },
        { iconCss: 'sf-icon-payment' },
        { iconCss: 'sf-icon-success' }
    ];
    var customText = [
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
        { text: '5' }
    ];
    var labelOnly = [
        { label: 'Cart' },
        { label: 'Address' },
        { label: 'Delivery' },
        { label: 'Payment' },
        { label: 'Ordered' }
    ];
    var iconWithLabel = [
        { label: 'Cart', iconCss: 'sf-icon-cart' },
        { label: 'Address', iconCss: 'sf-icon-user' },
        { label: 'Delivery', iconCss: 'sf-icon-transport' },
        { label: 'Payment', iconCss: 'sf-icon-payment', optional: true },
        { label: 'Ordered', iconCss: 'sf-icon-success' }
    ];

    var iconLabelStepper = new ej.navigations.Stepper({
        steps: iconWithLabel,
        created: function() {
            iconLabelStepper.activeStep = 2;
        }
    });

    var iconStepper = new ej.navigations.Stepper({
        steps: iconOnly,
        created: function() {
            iconStepper.activeStep = 2;
        }
    });

    var indicatorStepper = new ej.navigations.Stepper({
        steps: customText,
        stepType: 'indicator',
        created: function() {
            indicatorStepper.activeStep = 2;
        }
    });

    var labelStepper = new ej.navigations.Stepper({
        steps: labelOnly,
        created: function() {
            labelStepper.activeStep = 2;
        }
    });
    
    indicatorStepper.appendTo('#customText');
    iconStepper.appendTo('#iconOnly');
    iconLabelStepper.appendTo('#iconWithLabel');
    labelStepper.appendTo('#labelOnly');

};