/**
 * Toolbar sample to demonstrate popup mode feature.
 */
this.default = function() {
     //Initialize Toolbar component
     var toolbarObj = new ej.navigations.Toolbar({
        overflowMode: 'Popup',
        items: [
            {
                prefixIcon: 'e-cut-icon tb-icons', tooltipText: 'Cut', text: 'Cut', showTextOn: 'Overflow', overflow: 'Show' },
            {
                prefixIcon: 'e-copy-icon tb-icons', tooltipText: 'Copy', text: 'Copy', showTextOn: 'Overflow', overflow: 'Show'},
            {
                prefixIcon: 'e-paste-icon tb-icons', tooltipText: 'Paste', text: 'Paste', showTextOn: 'Overflow', overflow: 'Show'},
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-bold-icon tb-icons', tooltipText: 'Bold', text: 'Bold', showTextOn: 'Overflow', overflow: 'Show' },
            {
                prefixIcon: 'e-underline-icon tb-icons', tooltipText: 'Underline', text: 'Underline', showTextOn: 'Overflow',
                overflow: 'Show' },
            {
                prefixIcon: 'e-italic-icon tb-icons', tooltipText: 'Italic', text: 'Italic', showTextOn: 'Overflow', overflow: 'Show'},
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-bullets-icon tb-icons', text: 'Bullets', tooltipText: 'Bullets', overflow: 'Show'},
            {
                prefixIcon: 'e-numbering-icon tb-icons', text: 'Numbering', tooltipText: 'Numbering', overflow: 'Show'},
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-tbar-undo-icon tb-icons', tooltipText: 'Undo', text: 'Undo' },
            {
                prefixIcon: 'e-tbar-redo-icon tb-icons', tooltipText: 'Redo', text: 'Redo' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-alignleft-icon tb-icons', tooltipText: 'Align-Left', showTextOn : 'Overflow',
                overflow: 'Show', text: 'Left' },
            {
                prefixIcon: 'e-alignright-icon tb-icons', tooltipText: 'Align-Right',
                showTextOn : 'Overflow', overflow: 'Show', text: 'Right' },
            {
                prefixIcon: 'e-aligncenter-icon tb-icons', tooltipText: 'Align-Center',
                showTextOn : 'Overflow', overflow: 'Show', text: 'Center' },
            {
                prefixIcon: 'e-alignjustify-icon tb-icons', tooltipText: 'Align-Justify',
                showTextOn : 'Overflow', overflow: 'Show', text: 'Justify' },
            {
                type: 'Separator' },
            {
                prefixIcon: 'e-radar-icon tb-icons', text: 'Radar', tooltipText: 'Radar Chart' , showTextOn : 'Overflow' },
            {
                prefixIcon: 'e-line-icon tb-icons', text: 'Line', tooltipText: 'Line Chart' , showTextOn : 'Overflow' },
            {
                prefixIcon: 'e-doughnut-icon tb-icons', text: 'Doughnut', tooltipText: 'Doughnut Chart' , showTextOn : 'Overflow' },
            {
                prefixIcon: 'e-bubble-icon tb-icons', text: 'Bubble', tooltipText: 'Bubble Chart' , showTextOn : 'Overflow' },
            {
                prefixIcon: 'e-table-icon tb-icons', text: 'Table', tooltipText: 'Table' , showTextOn : 'Overflow' },
            {
                prefixIcon: 'e-picture-icon tb-icons', text: 'Picture', tooltipText: 'Picture' , showTextOn : 'Overflow' },
            {
                text: 'Design', prefixIcon: 'e-design-icon tb-icons' , tooltipText: 'Design' , showTextOn : 'Overflow'
        }],
    });
    //Render initialized Toolbar component
    toolbarObj.appendTo('#toolbar_pop');
    var today = new Date();
    var ele = '<div class = "e-tool-name">' + today.toLocaleString('en-us', { month: 'long' }) + ' ' + today.getFullYear() + '</div>';
    var toolbarObj1 = new ej.navigations.Toolbar({
            overflowMode: 'Popup',
            items: [
                {
                    template: ele,
                    overflow: 'Show'
                },
                {
                    prefixIcon: 'e-icon-day e-icons', tooltipText: 'Today', text: 'Today', overflow: 'Hide', align: 'Right'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-icon-week e-icons', tooltipText: 'Week', text: 'Week', overflow: 'Hide', align: 'Right'
                },
                {
                    prefixIcon: 'e-icon-month e-icons', tooltipText: 'Month', text: 'Month', overflow: 'Hide', align: 'Right'
                },
                {
                    prefixIcon: 'e-icon-year e-icons', tooltipText: 'Year', text: 'Year', overflow: 'Hide', align: 'Right'
                },
                {
                    prefixIcon: 'e-print e-icons', tooltipText: 'Print', text: 'Print', overflow: 'Hide', showAlwaysInPopup: true
                },
                {
                    prefixIcon: 'e-reccurence-icon e-icons', tooltipText: 'Sync', text: 'Sync', overflow: 'Hide', showAlwaysInPopup: true
                }
            ]
        });
        toolbarObj1.appendTo('#toolbar_popalways');
};