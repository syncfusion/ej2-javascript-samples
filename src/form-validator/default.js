this.default = function () {
    // Initialize the Submit Button.
    var buttonFormValidate = new ej.buttons.Button({
        isPrimary: true
    });
    buttonFormValidate.appendTo('#validateSubmit');
    // Initialize the Reset Button.
    var buttonReset = new ej.buttons.Button({});
    buttonReset.appendTo('#resetbtn');

    var options = {
        rules: {
            User: { required: true },
            DOB: { date: [true, 'Enter valid format'] },
            Email: { email: [true, 'Enter valid Email'] },
            City: { required: true },
            State: { required: true },
        }
    };
    // Initialize the FormValidator.
    var formObj = new ej.inputs.FormValidator('#formId', options);
    document.getElementById('formId').addEventListener("submit", function (e) {
        e.preventDefault();
        if (formObj.validate()) {
            alert('Customer details added!');
            formObj.reset();
        }
    });

};