this.default = function () {

    var options = {
        // Initialize the CustomPlacement.
        customPlacement: function (inputElement, errorElement) {
            inputElement = inputElement.closest('.form-group').querySelector('.error');
            inputElement.parentElement.appendChild(errorElement);
        },

        rules: {
            'Name': {
                required: true
            },
            'Email': {
                required: true
            },
            'Emp': {
                required: true
            },
            'Position': {
                required: true
            },
            'cSalary': {
                required: true
            }
        }
    };

    // Initialize the FormValidator.
    var formObj = new ej.inputs.FormValidator('#form', options);

    // Initialize external Button  and handle the form submit from external Button click action.
    var externalButton = new ej.buttons.Button({
        isPrimary: true
    });
    externalButton.appendTo('#submitBtn');

    // // Add mousedown event to external button element
    document.getElementById('submitBtn').addEventListener('mousedown', externalSubmit);

    function externalSubmit(event) {
        // Validate the form from external validate method
        var formStatus = formObj.validate();
        if (formStatus) {
            formObj.element.reset();
            resume.clearAll(); 
            confirm.show();
        }
    }


    // Initialize Position dropdown
    var positions = new ej.dropdowns.DropDownList({
        dataSource: window.positions,
        fields: {
            text: 'Name'
        },
        popupHeight: '200px',
        placeholder: 'Position',
        floatLabelType: 'Auto'
    });
    positions.appendTo('#position');

    // Initialize the Resume with uploader
    var resume = new ej.inputs.Uploader({
        autoUpload: false,
        allowedExtensions: '.doc, .docx'
    });
    resume.appendTo('#resume');
    resume.buttons = {
        browse: 'Browse'
    };
    resume.dataBind();

    // Initialize Current Salary with currency textbox
    var currentSalary = new ej.inputs.NumericTextBox({
        format: 'c2',
        placeholder: 'Current Salary',
        floatLabelType: 'Auto'
    });
    currentSalary.appendTo('#current-salary');

    // Initialize the Expected Salary with slider
    var expectedSalary = new ej.inputs.Slider({
        value: [0.2, 0.4],
        min: 0,
        max: 1,
        type: 'Range',
        step: 0.2,
        tooltip: {
            placement: 'before',
            isVisible: true,
            format: 'P0'
        },
        ticks: {
            placement: 'after',
            largeStep: 0.1,
            smallStep: 0,
            showSmallTicks: true,
            format: 'P0'
        },
        placeholder: 'Expected Salary'
    });
    expectedSalary.appendTo('#expected-salary');

    // Intialization the confirmation popup using dialog
    var confirm = new ej.popups.Dialog({
        width: '335px',
        visible: false,
        content: 'We appreciate your interest in our company. We will validate your profile and contact you soon...',
        target: document.getElementById('confirmation'),
        isModal: true,
        animationSettings: {
            effect: 'Zoom'
        }
    });
    confirm.appendTo('#confirmationDialog');

    confirm.overlayClick = function () {
        confirm.hide();
    };
};