this.default = function () {

    var numberOtp = new ej.inputs.OtpInput({
        value: "1234",
        type: 'number'
    });
    numberOtp.appendTo('#numberOtp');

    var textOtp = new ej.inputs.OtpInput({
        value: "e3c7",
        type: 'text'
    });
    textOtp.appendTo("#textOtp");

    var passwordOtp = new ej.inputs.OtpInput({
        value: "1234",
        type: 'password'
    });
    passwordOtp.appendTo("#passwordOtp");
};
