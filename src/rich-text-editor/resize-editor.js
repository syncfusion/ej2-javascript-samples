/*jshint esversion: 6 */
/**
 * Rich Text Editor Resizable sample
 */
this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        enableResize: true,
        height: 250
    });
    defaultRTE.appendTo("#defaultRTE");
};