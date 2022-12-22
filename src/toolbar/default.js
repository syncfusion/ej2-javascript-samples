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
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-align-left', tooltipText: 'Align-Left' },
            {
                prefixIcon: 'e-icons e-align-right', tooltipText: 'Align-Right' },
            {
                prefixIcon: 'e-icons e-align-center', tooltipText: 'Align-Center' },
            {
                prefixIcon: 'e-icons e-justify', tooltipText: 'Align-Justify' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-icons e-list-unordered', tooltipText: 'Bullets' },
            {
                prefixIcon: 'e-icons e-list-ordered', tooltipText: 'Numbering' 
            }]
    });
    //Render initialized Toolbar component
    toolbarObj.appendTo('#toolbar_default');

    var items = [
        {
            prefixIcon: 'e-icons e-cut', tooltipText: 'Cut', text: 'Cut'
        },
        {
            prefixIcon: 'e-icons e-copy', tooltipText: 'Copy', text: 'Copy'
        },
        {
            prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', text: 'Paste'
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-icons e-bold', tooltipText: 'Bold', text: 'Bold'
        },
        {
            prefixIcon: 'e-icons e-underline', tooltipText: 'Underline', text: 'Underline'
        },
        {
            prefixIcon: 'e-icons e-italic', tooltipText: 'Italic', text: 'Italic'
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-icons e-list-unordered', text: 'Bullets', tooltipText: 'Bullets'
        },
        {
            prefixIcon: 'e-icons e-list-ordered', text: 'Numbering', tooltipText: 'Numbering'
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-icons e-undo', tooltipText: 'Undo', text: 'Undo'
        },
        {
            prefixIcon: 'e-icons e-redo', tooltipText: 'Redo', text: 'Redo'
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-icons e-align-left', tooltipText: 'Align-Left', text: 'Left'
        },
        {
            prefixIcon: 'e-icons e-align-right', tooltipText: 'Align-Right', text: 'Right'
        },
        {
            prefixIcon: 'e-icons e-align-center', tooltipText: 'Align-Center', text: 'Center'
        },
        {
            prefixIcon: 'e-icons e-justify', tooltipText: 'Align-Justify', text: 'Justify'
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-icons e-increase-indent', tooltipText: 'Text-Indent', text: 'Indent'
        },
        {
            prefixIcon: 'e-icons e-decrease-indent', text: 'Outdent', tooltipText: 'Text-Outdent'
        },
        {
            prefixIcon: 'e-icons e-erase', text: 'Clear', tooltipText: 'Clear'
        }
    ];

    var toolbarObj1 = new ej.navigations.Toolbar({
        overflowMode: 'Scrollable',
        items: new ej.base.extend([], items, null, true)
    });
    toolbarObj1.appendTo('#toolbar_Scrollable');

    var toolbarObj2 = new ej.navigations.Toolbar({
        overflowMode: 'Popup',
        items: new ej.base.extend([], items, null, true)
    });
    toolbarObj2.appendTo('#toolbar_popup');

    var toolbarObj3 = new ej.navigations.Toolbar({
        overflowMode: 'Extended',
        items: new ej.base.extend([], items, null, true)
    });
    toolbarObj3.appendTo('#toolbar_Extended');

    var toolbarObj4 = new ej.navigations.Toolbar({
        overflowMode: 'MultiRow',
        items: new ej.base.extend([], items, null, true)
    });
    toolbarObj4.appendTo('#toolbar_MultiRow');
};