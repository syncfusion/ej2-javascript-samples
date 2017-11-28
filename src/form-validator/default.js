this.default = function() {
    var buttonFormValidate = new ej.buttons.Button();
    buttonFormValidate.appendTo('#validateSubmit');
    var buttonReset = new ej.buttons.Button();
    buttonReset.appendTo('#resetbtn');
    var options = {
        customPlacement: function(inputElement, errorElement) {
            inputElement.parentElement.appendChild(errorElement);
        }
    };

    var formObj = new ej.inputs.FormValidator('#formId', options);
};