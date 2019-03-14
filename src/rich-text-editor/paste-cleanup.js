/**
 * RichTextEditor Paste Cleanup sample
 */
this.default = function() {
    var defaultRTE =  new ej.richtexteditor.RichTextEditor({
        pasteCleanupSettings: {
            prompt: true,
            plainText: false,
            keepFormat: false,
            deniedTags: [],
            deniedAttrs: [],
            allowedStyleProps: []
        }
    });
    defaultRTE.appendTo('#defaultRTE');
    var prompt = new ej.buttons.RadioButton({
        checked: true,
        change: function(e) {
            defaultRTE.pasteCleanupSettings.prompt = prompt.checked;
            defaultRTE.dataBind();
        }
    });
    prompt.appendTo('#prompt');
    var plainText = new ej.buttons.RadioButton({
        change: function(e) {
            defaultRTE.pasteCleanupSettings.plainText = plainText.checked;
            if (defaultRTE.pasteCleanupSettings.plainText) {
                defaultRTE.pasteCleanupSettings.prompt = false;
            } else {
                defaultRTE.pasteCleanupSettings.keepFormat = false;
            }
            defaultRTE.dataBind();
        }
    });
    plainText.appendTo('#plainText');
    var keepFormat = new ej.buttons.RadioButton({
        change: function(e) {
            defaultRTE.pasteCleanupSettings.keepFormat = keepFormat.checked;
            if (defaultRTE.pasteCleanupSettings.keepFormat) {
                defaultRTE.pasteCleanupSettings.plainText = false;
                defaultRTE.pasteCleanupSettings.prompt = false;
            }
            defaultRTE.dataBind();
        }
    });
    keepFormat.appendTo('#keepFormat');
    var cleanFormat = new ej.buttons.RadioButton({
        change: function(e) {
            defaultRTE.pasteCleanupSettings.prompt = false;
            defaultRTE.pasteCleanupSettings.plainText = false;
            defaultRTE.pasteCleanupSettings.keepFormat = false;
            defaultRTE.dataBind();
        }
    });
    cleanFormat.appendTo('#cleanFormat');
    var allowedStylePropsElem = document.getElementById('allowedStyleProperties');
    var deniedTagsElem = document.getElementById('deniedTags');
    var deniedAttrsElem = document.getElementById('deniedAttributes');
    allowedStylePropsElem.addEventListener('blur', function(e) {
        defaultRTE.pasteCleanupSettings.allowedStyleProps = (eval)('[' + (e.target).value + ']' );// jshint ignore:line
        defaultRTE.dataBind();
    });
    deniedAttrsElem.addEventListener('blur', function(e) {
        defaultRTE.pasteCleanupSettings.deniedAttrs = (eval)('[' + (e.target).value + ']' );// jshint ignore:line
        defaultRTE.dataBind();
    });
    deniedTagsElem.addEventListener('blur', function(e) {
        defaultRTE.pasteCleanupSettings.deniedTags = (eval)('[' + (e.target).value + ']' );// jshint ignore:line
        defaultRTE.dataBind();
    });
};
