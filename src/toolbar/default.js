/**
 *  Toolbar sample to demonstrate default functionalities.
 */
this.default = function() {
    //Initialize Toolbar component
     var toolbarObj = new ej.navigations.Toolbar({
           items: [
            {
                prefixIcon: 'e-icons e-cut', tooltipText: 'Cut' },
            {
                prefixIcon: 'e-icons e-copy', tooltipText: 'Copy' },
            {
                prefixIcon: 'e-icons e-paste', tooltipText: 'Paste' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-bold', tooltipText: 'Bold' },
            {
                prefixIcon: 'e-icons e-underline', tooltipText: 'Underline' },
            {
                prefixIcon: 'e-icons e-italic', tooltipText: 'Italic' },
            {
                prefixIcon: 'e-icons e-paint-bucket', tooltipText: 'Color-Picker' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-align-left', tooltipText: 'Align-Left' },
            {
                prefixIcon: 'e-icons e-align-right', tooltipText: 'Align-Right' },
            {
                prefixIcon: 'e-icons e-align-center', tooltipText: 'Align-Center' },
            {
                prefixIcon: 'e-icons e-justify', tooltipText: 'Align-Justify'},
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-list-unordered', tooltipText: 'Bullets'},
            {
                prefixIcon: 'e-icons e-list-ordered', tooltipText: 'Numbering' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-undo', tooltipText: 'Undo' },
            {
                prefixIcon: 'e-icons e-redo', tooltipText: 'Redo' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-upload-1', tooltipText: 'Upload' },
            {
                prefixIcon: 'e-icons e-download', tooltipText: 'Download' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-increase-indent', tooltipText: 'Text Indent' },
            {
                prefixIcon: 'e-icons e-decrease-indent', tooltipText: 'Text Outdent' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-erase', tooltipText: 'Clear' },
            {
                prefixIcon: 'e-icons e-refresh', tooltipText: 'Reload' },
            {
                prefixIcon: 'e-icons e-export', tooltipText: 'Export'
            }]
    });
    //Render initialized Toolbar component
    toolbarObj.appendTo('#toolbar_default');
};