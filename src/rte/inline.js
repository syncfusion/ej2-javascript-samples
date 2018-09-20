/*jshint esversion: 6 */
/**
 * RichTextEditor Inline sample
 */
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        inlineMode: {
            enable: true,
            onSelection: true
        },
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline',
                'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
                'CreateLink']
        },
        format: {
            width: 'auto'
        },
        fontFamily: {
            width: 'auto'
        }
    });
    defaultRTE.appendTo("#defaultRTE");
    var select = new ej.buttons.CheckBox({
        // set false for enable the checked state at initial rendering
        checked: true,
        label: 'Show on Selection',
        // bind change event
        change: function (args) {
            defaultRTE.inlineMode.onSelection = args.checked;
            defaultRTE.dataBind();
        }
    });
    select.appendTo('#select');
};
