this.default = function () {
    // Initialize the Submit Button.
    var buttonFormValidate = new ej.buttons.Button({
        isPrimary: true
    });
    buttonFormValidate.appendTo('#validateSubmit');
    // Initialize the Reset Button.
    var buttonReset = new ej.buttons.Button();
    buttonReset.appendTo('#resetbtn');
    var options = {
        // Initialize the CustomPlacement.
        customPlacement: function (inputElement, errorElement) {
            inputElement.parentElement.appendChild(errorElement);
        }
    };

    // Initialize the FormValidator.
    var formObj = new ej.inputs.FormValidator('#formId', options);
};