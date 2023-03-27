this.default = function() {
    var formatPainterRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['FormatPainter', 'Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', 'SuperScript', 'SubScript', '|',
                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
                'Outdent', 'Indent', '|', 'CreateTable', 'CreateLink', 'Image', '|', 'Undo', 'Redo', 'SourceCode', 'FullScreen']
        }
    });
    formatPainterRTE.appendTo('#formatPainterRTE');
    var allowedFormatInput = new ej.inputs.TextBox({
        placeholder: "span; strong; em; sup, sub; code;",
        floatLabelType: 'Never',
        cssClass: 'e-outline',
        blur: setAllowedFormats
    });
    allowedFormatInput.appendTo('#allowedFormatInput');
    var deniedFormatInput = new ej.inputs.TextBox({
        placeholder: "span(important)[title]{background-color,color};",
        floatLabelType: 'Never',
        cssClass: 'e-outline',
        blur: setdeniedFormats
    });
    deniedFormatInput.appendTo('#deniedFormatInput');
    function setAllowedFormats(e) {
        formatPainterRTE.formatPainterSettings.allowedFormats = e.value;
        formatPainterRTE.dataBind();
    }
    function setdeniedFormats(e) {
        formatPainterRTE.formatPainterSettings.deniedFormats = e.value;
        formatPainterRTE.dataBind();
    }
};
