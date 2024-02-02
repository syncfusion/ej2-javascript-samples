/**
 * Rich Text Editor form-validation sample
 */
 

this.default = function() {

    var formValidatorOptions = {
        rules: {
          defaultRTE: {
              required: true,
              minLength: [
              function() {
                  var contentElement = document.querySelector('.e-rte-content .e-content');
                  var textContent = contentElement.textContent.trim();
                  var imgElements = contentElement.querySelectorAll('img');
                  var textLengthValid = textContent.length >= 20;
                  return imgElements.length > 0 || textLengthValid;
              },'Please enter at least 20 characters'],
          },
        },
      };
      var formObject = new ej.inputs.FormValidator('#form-element',formValidatorOptions);
      
      var defaultRTE = new ej.richtexteditor.RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' });
      defaultRTE.appendTo('#defaultRTE');
};
