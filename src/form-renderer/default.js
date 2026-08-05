this.default = function () {
    var formRenderer = new ej.formrenderer.FormRenderer({
        schema: window.userRegistration
    });
    formRenderer.appendTo('#form-renderer-control');

    var onChange = function (args) {
        if (args.value === 'userRegistration') {
            formRenderer.schema = window.userRegistration;
        } else if (args.value === 'customerservice') {
            formRenderer.schema = window.customerService;
        } else if (args.value === 'doctorsAppointment') {
            formRenderer.schema = window.doctorsAppointment;
        }
        formRenderer.refresh();
    };

    var radioButton = new ej.buttons.RadioButton({
        label: 'User Registration', name: 'formSchemaOption', value: 'userRegistration', change: onChange, checked: true
    });
    radioButton.appendTo('#userResignation');
    radioButton = new ej.buttons.RadioButton({
        label: 'Customer Service', name: 'formSchemaOption', value: 'customerservice', change: onChange
    });
    radioButton.appendTo('#customerService');
    radioButton = new ej.buttons.RadioButton({
        label: 'Doctor Appointment', name: 'formSchemaOption', value: 'doctorsAppointment', change: onChange
    });
    radioButton.appendTo('#doctorsAppointment');
};