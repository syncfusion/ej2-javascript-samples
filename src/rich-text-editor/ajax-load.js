/**
 * Rich Text Editor Ajax content sample
 */
var defaultRTE;
this.default = function() {
    var fetch = new ej.base.Fetch('./src/rich-text-editor/ajax-content.html', 'GET');
    fetch.send().then(function(data) {
        defaultRTE = new ej.richtexteditor.RichTextEditor({ value: data });
        defaultRTE.appendTo('#defaultRTE');
    });
};