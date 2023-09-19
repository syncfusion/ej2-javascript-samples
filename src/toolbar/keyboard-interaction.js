/**
 * Toolbar keyboard interaction sample.
 */
this.default = function () {
    //Initialize Toolbar component
    var toolbarObj = new ej.navigations.Toolbar({
        overflowMode: 'Popup',
        items: [
            { prefixIcon: 'e-cut-icon tb-icons', text: 'Cut', tooltipText: 'Cut', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-copy-icon tb-icons', text: 'Copy', tooltipText: 'Copy', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-paste-icon tb-icons', text: 'Paste', tooltipText: 'Paste', showTextOn: 'Overflow', overflow: 'Show' },
            { type: 'Separator' },
            { prefixIcon: 'e-bold-icon tb-icons', text: 'Bold', tooltipText: 'Bold', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-underline-icon tb-icons', text: 'Underline', tooltipText: 'Underline', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-italic-icon tb-icons', text: 'Italic', tooltipText: 'Italic', showTextOn: 'Overflow', overflow: 'Show' },
            { type: 'Separator' },
            { prefixIcon: 'e-bullets-icon tb-icons', text: 'Bullets', tooltipText: 'Bullets', overflow: 'Show' },
            { prefixIcon: 'e-numbering-icon tb-icons', text: 'Numbering', tooltipText: 'Numbering', overflow: 'Show' },
            { type: 'Separator' },
            { prefixIcon: 'e-tbar-undo-icon tb-icons', text: 'Undo', tooltipText: 'Undo' },
            { prefixIcon: 'e-tbar-redo-icon tb-icons', text: 'Redo', tooltipText: 'Redo' },
            { type: 'Separator' },
            { prefixIcon: 'e-alignleft-icon tb-icons', text: 'Left', tooltipText: 'Align-Left', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-alignright-icon tb-icons', text: 'Right', tooltipText: 'Align-Right', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-aligncenter-icon tb-icons', text: 'Center', tooltipText: 'Align-Center', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-alignjustify-icon tb-icons', text: 'Justify', tooltipText: 'Align-Justify', showTextOn: 'Overflow', overflow: 'Show' },
            { type: 'Separator' },
            { prefixIcon: 'e-radar-icon tb-icons', text: 'Radar', tooltipText: 'Radar Chart', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-line-icon tb-icons', text: 'Line', tooltipText: 'Line Chart', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-doughnut-icon tb-icons', text: 'Doughnut', tooltipText: 'Doughnut Chart', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-bubble-icon tb-icons', text: 'Bubble', tooltipText: 'Bubble Chart', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-table-icon tb-icons', text: 'Table', tooltipText: 'Table', showTextOn: 'Overflow', overflow: 'Show' },
            { prefixIcon: 'e-picture-icon tb-icons', text: 'Picture', tooltipText: 'Picture', showTextOn: 'Overflow', overflow: 'Show' },
            { text: 'Design', prefixIcon: 'e-design-icon tb-icons', tooltipText: 'Design', showTextOn: 'Overflow', overflow: 'Show' }
        ]
    });
    //Render initialized Toolbar component
    toolbarObj.appendTo('#toolbar_keyboard_interaction');
    document.body.addEventListener('keydown', function (e) {
        var tabElement = document.querySelector(
            '#toolbar_keyboard_interaction .e-toolbar-items .e-toolbar-item .e-tbar-btn'
        );
        if (e.altKey && e.keyCode === 74 && tabElement) {
            tabElement.focus();
        }
    });
};