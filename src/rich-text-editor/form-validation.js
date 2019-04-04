/**
 * RichTextEditor form-validation sample
 */
 

this.default = function() {

    var defaultRTE = new ej.richtexteditor.RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' });
    defaultRTE.appendTo('#defaultRTE');

    new ej.inputs.FormValidator('#form-element');
};
