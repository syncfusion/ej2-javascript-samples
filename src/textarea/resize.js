/**
 * Textarea sample for resize behaviour.
 */
this.default = function () {
    var textareaObj = new ej.inputs.TextArea({
        placeholder: 'Enter your comments',
        floatLabelType: 'Auto',
        resizeMode: 'Vertical'
    });
    textareaObj.appendTo('#resize');
    var resize = new ej.dropdowns.DropDownList({
        popupHeight: '200px',
        // bind the change event
        change: function (args) {
            switch (args.value) {
                case 'Both':
                    textareaObj.resizeMode = 'Both';
                    break;
                case 'Vertical':
                    textareaObj.resizeMode = 'Vertical';
                    break;
                case 'Horizontal':
                    textareaObj.resizeMode = 'Horizontal';
                    break;
                case 'None':
                    textareaObj.resizeMode = 'None';
                    break;
            }
        }
    });
    resize.appendTo('#select');
};
