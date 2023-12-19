this.default = function() {

    var templateContent = [
        "<p>To get started, click the <b>Continue</b> button to move on to the next step.</p><button class='e-btn e-primary' onclick='event.stopPropagation(); clickAction(false, `continue`)'>CONTINUE</button>",
        "<p>This is the second step. To proceed to next step, click <b>Continue</b>; to go back to the previous step, click the <b>Back</b> button.</p><button class='e-btn e-primary' onclick='event.stopPropagation(); clickAction(false, `continue`)'>CONTINUE</button><button class='e-btn' onclick='event.stopPropagation(); clickAction(true, `back`)'>BACK</button>",
        "<p>If everything looks correct, click <b>Continue</b> to move on.<br/>If not, you can click <b>Back</b> to revisit the previous step.</p><button class='e-btn e-primary' onclick='event.stopPropagation(); clickAction(false, `continue`)'>CONTINUE</button><button class='e-btn' onclick='event.stopPropagation(); clickAction(true, `back`)'>BACK</button>",
        "<p>Congratulations! You've reached the final step.</p><button class='e-btn e-primary' onclick='event.stopPropagation(); clickAction(false, `finish`)'>FINISH</button><button class='e-btn' onclick='event.stopPropagation(); clickAction(true, `back`)'>BACK</button>"
    ];
    var finishContent = "<p>Congratulations! You've reached the final step.</p><button class='e-btn e-primary' onclick='event.stopPropagation(); clickAction(false, `finish`)'>FINISH</button><button class='e-btn' onclick='event.stopPropagation(); clickAction(true, `back`)'>BACK</button>";
    var resetContent = "<p>To start over again with the first step, click <b>Reset</b>.</p><button class='e-btn e-primary' onclick='event.stopPropagation(); clickAction(false, `reset`)'>RESET</button>";

    var stepperTemplate = [
        { iconCss: 'e-icons e-check', text: 'Step 1' },
        { iconCss: 'e-icons e-check', text: 'Step 2' },
        { iconCss: 'e-icons e-check', text: 'Step 3' },
        { iconCss: 'e-icons e-check', text: 'Step 4' }
    ];

    var stepperWithTemplate = new ej.navigations.Stepper({
        steps: stepperTemplate,
        linear: true,
        orientation: "vertical",
        template: '<span class="e-step ${step.iconCss}"></span><span class="e-text-step">${step.text}</span><br/><div class="stepper-content"></div>',
        created: function() {
            stepperWithTemplate.activeStep = 1;
            handleContent(stepperWithTemplate, false);
        },
        stepClick: function(args) {
            handleContent(args, args.previousStep > args.activeStep ? true : false);
        }
    });
    stepperWithTemplate.appendTo('#template-stepper');

    window.clickAction = function (isBackButton, buttonType) {
        switch (buttonType) {
            case 'continue':
                stepperWithTemplate.nextStep();
                break;
            case 'back':
                stepperWithTemplate.previousStep();
                break;
        }
        updateContent(stepperWithTemplate, isBackButton ? true : false, buttonType);
    };

    function updateContent(stepperWithTemplate, isBackButton, buttonType) {
        if (buttonType === 'continue' || buttonType === 'back') {
            handleContent(stepperWithTemplate, isBackButton);
        }
        if (buttonType === 'finish' || buttonType === 'reset') {
            var activeElement = document.querySelectorAll('.stepper-content');
            if (buttonType === 'finish') {
                activeElement[stepperWithTemplate.activeStep].innerHTML = resetContent;
                stepperWithTemplate.steps[stepperWithTemplate.activeStep].status = 'completed';
            }
            if (buttonType === 'reset') {
                activeElement[stepperWithTemplate.activeStep].innerHTML = finishContent;
                activeElement[stepperWithTemplate.activeStep].innerHTML = '';
                stepperWithTemplate.reset();
                activeElement[stepperWithTemplate.activeStep].innerHTML = templateContent[stepperWithTemplate.activeStep];
            }
        }
    }

    function handleContent(args, isBackClicked) {
        var activeElement = document.querySelectorAll('.stepper-content');
        activeElement[args.activeStep].innerHTML = templateContent[args.activeStep];
        if (activeElement && !isBackClicked) {
            activeElement[args.activeStep - 1].innerHTML = '';
        }
        if (isBackClicked) {
            if (activeElement[args.activeStep + 1])
            activeElement[args.activeStep + 1].innerHTML = '';
        }
    }
};
