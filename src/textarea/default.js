/**
 * Sample for Textarea default functionalities.
 */
this.default = function () {
    var outlineTextArea = new ej.inputs.TextArea({
        placeholder: 'Outlined',
        cssClass: 'e-outline',
        floatLabelType: 'Auto'
    });
    outlineTextArea.appendTo('#outlined');
    var filledTextArea = new ej.inputs.TextArea({
        placeholder: 'Filled',
        cssClass: 'e-filled',
        floatLabelType: 'Auto',
    });
    filledTextArea.appendTo('#filled');
    var inputobj1 = new ej.inputs.TextArea({
        placeholder: 'Enter your comments',
        floatLabelType: 'Auto'
    });
    inputobj1.appendTo('#default');
    
    // custom code start
    var input = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group textarea');
    var focusFn = function(index) {
        return function () { getParentNode(input[index]).classList.add('e-input-focus'); };
    };

    var blurFn = function(index) {
        return function () { getParentNode(input[index]).classList.remove('e-input-focus'); };
    };
    for (var index = 0; index < input.length; index++) {
        //Focus Event binding for textarea component
        input[index].addEventListener('focus', focusFn(index));
        //Blur Event binding for textarea component
        input[index].addEventListener('blur', blurFn(index));
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