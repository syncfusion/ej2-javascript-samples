/**
 *  Toolbar sample to demonstrate default functionalities.
 */
this.default = function() {
    //Initialize Toolbar component
     var toolbarObj = new ej.navigations.Toolbar({
           items: [
            {
                prefixIcon: 'e-cut-icon tb-icons', tooltipText: 'Cut' },
            {
                prefixIcon: 'e-copy-icon tb-icons', tooltipText: 'Copy' },
            {
                prefixIcon: 'e-paste-icon tb-icons', tooltipText: 'Paste' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-bold-icon tb-icons', tooltipText: 'Bold' },
            {
                prefixIcon: 'e-underline-icon tb-icons', tooltipText: 'Underline' },
            {
                prefixIcon: 'e-italic-icon tb-icons', tooltipText: 'Italic' },
            {
                prefixIcon: 'e-color-icon tb-icons', tooltipText: 'Color-Picker' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-alignleft-icon tb-icons', tooltipText: 'Align-Left' },
            {
                prefixIcon: 'e-alignright-icon tb-icons', tooltipText: 'Align-Right' },
            {
                prefixIcon: 'e-aligncenter-icon tb-icons', tooltipText: 'Align-Center' },
            {
                prefixIcon: 'e-alignjustify-icon tb-icons', tooltipText: 'Align-Justify'},
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-bullets-icon tb-icons', tooltipText: 'Bullets'},
            {
                prefixIcon: 'e-numbering-icon tb-icons', tooltipText: 'Numbering' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-ascending-icon tb-icons', tooltipText: 'Sort A - Z' },
            {
                prefixIcon: 'e-descending-icon tb-icons', tooltipText: 'Sort Z - A' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-upload-icon tb-icons', tooltipText: 'Upload' },
            {
                prefixIcon: 'e-download-icon tb-icons', tooltipText: 'Download' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-indent-icon tb-icons', tooltipText: 'Text Indent' },
            {
                prefixIcon: 'e-outdent-icon tb-icons', tooltipText: 'Text Outdent' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-clear-icon tb-icons', tooltipText: 'Clear' },
            {
                prefixIcon: 'e-reload-icon tb-icons', tooltipText: 'Reload' },
            {
                prefixIcon: 'e-export-icon tb-icons', tooltipText: 'Export'
            }]
    });
    //Render initialized Toolbar component
    toolbarObj.appendTo('#toolbar_default');
};