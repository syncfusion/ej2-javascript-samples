this.default = function () {

    var basicOtp = new ej.inputs.OtpInput({
        separator: "-",
        placeholder: "X",
        input: handleOtpChange
    });
    basicOtp.appendTo("#basicOtp");

    var disableSwitch = new ej.buttons.Switch({
        change: function (args) {
            basicOtp.disabled = args.checked;
        }
    });
    disableSwitch.appendTo('#disabled');

    var lengthTextBox = new ej.inputs.NumericTextBox({
        min: 1,
        max: 6,
        value: 4,
        format: '0',
        change: function (args) {
            var value = parseInt(args.value);
            if (!args.value) {
                lengthTextBox.value = value = 1;
                lengthTextBox.dataBind();
            }
            basicOtp.length = value;
            document.getElementById('placeholder').maxLength = basicOtp.length;
        }
    });
    lengthTextBox.appendTo('#length');

    var separatorTextBox = new ej.inputs.TextBox({
        cssClass: 'e-underline',
        input: function (args) {
            basicOtp.separator = args.value;
        }
    });
    separatorTextBox.appendTo('#separator');

    var placeholderTextBox = new ej.inputs.TextBox({
        cssClass: 'e-underline',
        input: function (args) {
            basicOtp.placeholder = args.value;
        }
    });
    placeholderTextBox.appendTo('#placeholder');

    var stlyingModeList = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function () {
            basicOtp.stylingMode = stlyingModeList.value;
        }
    });
    stlyingModeList.appendTo('#otpStylingMode');

    var validationList = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function () {
            basicOtp.cssClass = (validationList.value == "") ? "" : "e-" + validationList.value;
        }
    });
    validationList.appendTo('#otpValidation');

    /* OTP Validation & Submission */
    var verifyBtn = document.getElementById('verify-btn');
    var resetBtn = document.getElementById('reset-btn');

    function handleOtpChange(event) {
        var otpLength = event.value.toString().length;
        verifyBtn.disabled = otpLength !== basicOtp.length;
        resetBtn.disabled = !otpLength;
    }

    resetBtn.addEventListener('click', function () {
        basicOtp.value = "";
        verifyBtn.disabled = resetBtn.disabled = true;
    });

    verifyBtn.addEventListener('click', function () {
        alert("Entered OTP value is : " + basicOtp.value);
    });
};
