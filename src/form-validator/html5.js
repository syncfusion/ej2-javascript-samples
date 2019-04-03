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
    document.getElementById('formId').addEventListener("submit", function (e) {
        e.preventDefault();
        if (formObj.validate()) {
            alert('Your form has been submitted.');
            formObj.reset();
        }
    });
    document.getElementById('minlen').addEventListener('change', function (e) {
        var floatElementInput = e.currentTarget;
        var floatElement = floatElementInput.parentElement.getElementsByClassName('e-float-text')[0];
        if (floatElementInput.value.length > 0) {
            floatElement.classList.remove('e-label-bottom');
            floatElement.classList.add('e-label-top');
        } else {
            floatElement.classList.remove('e-label-top');
            floatElement.classList.add('e-label-bottom');
        }
    });

};