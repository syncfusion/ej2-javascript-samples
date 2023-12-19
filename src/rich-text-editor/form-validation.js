/**
 * Rich Text Editor form-validation sample
 */
 

this.default = function() {

    var defaultRTE = new ej.richtexteditor.RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' });
    defaultRTE.appendTo('#defaultRTE');

    new ej.inputs.FormValidator('#form-element');
    document.querySelector('.form-vertical').addEventListener('submit', function (e) {
        if(document.querySelector('.e-rte-content .e-content').textContent.trim() === '' ) {
            e.preventDefault();
        }
    });
};
