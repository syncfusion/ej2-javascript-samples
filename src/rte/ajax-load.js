/**
 * RichTextEditor Ajax content sample
 */
var defaultRTE;
this.default = function() {
    var ajax = new ej.base.Ajax('./src/rte/ajax-content.html', 'GET', false);
    ajax.send().then(function(data) {
        defaultRTE = new ej.richtexteditor.RichTextEditor({ value: data });
        defaultRTE.appendTo('#defaultRTE');
    });
};