/**
 * Rich Text Editor Paste Cleanup sample
 */
this.default = function() {
    var defaultRTE =  new ej.richtexteditor.RichTextEditor({
        pasteCleanupSettings: {
            prompt: true,
            plainText: false,
            keepFormat: false
        }
    });
    defaultRTE.appendTo('#defaultRTE');
    var formatOption = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function(args) { valueChange(); }
    });
    formatOption.appendTo('#formattingOption');
    function valueChange() {
        if (formatOption.value === 'prompt') {
            defaultRTE.pasteCleanupSettings.prompt = true;
        } else if (formatOption.value === 'plainText') {
            defaultRTE.pasteCleanupSettings.prompt = false;
            defaultRTE.pasteCleanupSettings.plainText = true;
        } else if (formatOption.value === 'keepFormat') {
            defaultRTE.pasteCleanupSettings.prompt = false;
            defaultRTE.pasteCleanupSettings.plainText = false;
            defaultRTE.pasteCleanupSettings.keepFormat = true;
        } else if (formatOption.value === 'cleanFormat') {
            defaultRTE.pasteCleanupSettings.prompt = false;
            defaultRTE.pasteCleanupSettings.plainText = false;
            defaultRTE.pasteCleanupSettings.keepFormat = false;
        }
        defaultRTE.dataBind();
    }
    var allowedStylePropsElem = document.getElementById('allowedStyleProperties');
    var deniedTagsElem = document.getElementById('deniedTags');
    var deniedAttrsElem = document.getElementById('deniedAttributes');
    allowedStylePropsElem.addEventListener('blur', function(e) {
        onPasteCleanupSettingsChange((e.target).value, 'allowedStyleProps');
        defaultRTE.dataBind();
    });
    deniedAttrsElem.addEventListener('blur', function(e) {        
        onPasteCleanupSettingsChange((e.target).value, 'deniedAttrs');
        defaultRTE.dataBind();
    });
    deniedTagsElem.addEventListener('blur', function(e) {
        onPasteCleanupSettingsChange((e.target).value, 'deniedTags');
        defaultRTE.dataBind();
    });

    function onPasteCleanupSettingsChange(value, settingsProperty) {
        if (value) {
            var arrayValue = value.split(',').map(function (item) {
                return item.trim().replace(/^['"]|['"]$/g, '');
            });
            defaultRTE.pasteCleanupSettings[settingsProperty] = arrayValue.filter(function (prop) {
                return prop !== '';
            });
        }
    }
};
