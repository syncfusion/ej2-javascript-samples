this.default = function () {
    var switchObj = new ejs.buttons.Switch({ checked: true });
    switchObj.appendTo('#checked');

    switchObj = new ejs.buttons.Switch({});
    switchObj.appendTo('#unchecked');

    switchObj = new ejs.buttons.Switch({ disabled: true });
    switchObj.appendTo('#disabled');

    var elemArray = document.querySelectorAll('.switch-control label');
    for (var i = 0, len = elemArray.length; i < len; i++) {
        elemArray[i].addEventListener('mouseup', rippleHandler);
        elemArray[i].addEventListener('mousedown', rippleHandler);
    }

    // Function to handle ripple effect for Switch with label.
    function rippleHandler(e) {
        var rippleSpan = this.nextElementSibling.querySelector('.e-ripple-container');
        if (rippleSpan) {
            ejs.buttons.rippleMouseHandler(e, rippleSpan);
        }
    }
};