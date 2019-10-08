/**
 *   Sample for CSS input boxes.
 */
this.default = function () {
    var outlineTextbox = new ej.inputs.TextBox({
        placeholder: 'Outlined',
        cssClass: 'e-outline',
        floatLabelType: 'Auto'
    });
    outlineTextbox.appendTo('#outlined');
    var filledTextbox = new ej.inputs.TextBox({
        placeholder: 'Filled',
        cssClass: 'e-filled',
        floatLabelType: 'Auto',
    });
    filledTextbox.appendTo('#filled');
    var inputobj1 = new ej.inputs.TextBox({
        placeholder: 'First Name',
        floatLabelType: 'Auto'
    });
    inputobj1.appendTo('#firstname');
    var inputobj2 = new ej.inputs.TextBox({
        placeholder: 'Last Name',
        floatLabelType: 'Auto',
        enableRtl: true
    });
    inputobj2.appendTo('#lastname');
    //custom code start
    var inputObject = {};
    var input = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');
    var inputIcon = document.querySelectorAll('.e-input-group-icon');
    var focusFn = function(index) {
        return function () { getParentNode(input[index]).classList.add('e-input-focus'); };
    };

    var blurFn = function(index) {
        return function () { getParentNode(input[index]).classList.remove('e-input-focus'); };
    };

    var mouseupFn = function () {
        var ele = this;
        setTimeout(function () { ele.classList.remove('e-input-btn-ripple'); }, 500);
    };

    for (var i = 0; i < input.length; i++) {
        //Focus Event binding for input component
        input[i].addEventListener('focus', focusFn(i));
        //Blur Event binding for input component
        input[i].addEventListener('blur', blurFn(i));
    }
    for (var j = 0; j < inputIcon.length; j++) {
        inputIcon[j].addEventListener('mousedown', function () {
            this.classList.add('e-input-btn-ripple');
        });
        inputIcon[j].addEventListener('mouseup', mouseupFn);
    }
    function getParentNode(element) {
        var parentNode = element.parentNode;
        if (parentNode.classList.contains('e-input-in-wrap')) {
            return parentNode.parentNode;
        }
        return parentNode;
    }
    //custom code end
};