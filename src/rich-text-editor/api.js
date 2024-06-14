/*jshint esversion: 6 */
/**
 * Rich Text Editor API sample
 */
this.default = function() {
    var defaultAPI = new ej.richtexteditor.RichTextEditor({
        showCharCount: true,
        maxLength: 1000
    });
    defaultAPI.appendTo("#defaultRTE");

    var maxLength = new ej.inputs.NumericTextBox({
        value: 1000,
        min: 555,
        max: 2000,
        placeholder : "Maximum Length",
        format: 'n0',
        change: function (e) {
            defaultAPI.maxLength = maxLength.value;
        }
    });
    maxLength.appendTo('#maxlength');
    var readonly = new ej.buttons.CheckBox({
        // set false for disable the checked state at initial rendering
        checked: false,
        // bind change event
        change: function (args) {
            defaultAPI.readonly = (args).checked;
        }
    });
    readonly.appendTo('#readonly');
    var enable = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        // bind change event
        change: function (args) {
            defaultAPI.enabled = (args).checked;
        }
    });
    enable.appendTo('#enable');
    var enablehtml = new ej.buttons.CheckBox({
        // set false for disable the checked state at initial rendering
        checked: false,
        // bind change event
        change: function (args) {
            defaultAPI.enableHtmlEncode = (args).checked;
        }
    });
    enablehtml.appendTo('#enablehtml');
    document.getElementById('getVal').onclick = function () {
        alert(defaultAPI.value);
    };
    document.getElementById('selectHtml').onclick = function () {
        alert(defaultAPI.getSelection());
    };
    document.getElementById('selectall').onclick = function () {
        defaultAPI.selectAll();
    };
};