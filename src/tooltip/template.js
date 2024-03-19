/**
 * Tooltip template sample
 */

this.default = function () {

    //Initialize Toolbar component
    var toolbarObj = new ej.navigations.Toolbar({
        items: [
            {
                prefixIcon: 'e-cut-icon tb-icons', tooltipText: 'Cut'
            },
            {
                prefixIcon: 'e-copy-icon tb-icons', tooltipText: 'Copy'
            },
            {
                prefixIcon: 'e-paste-icon tb-icons', tooltipText: 'Paste'
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-bold-icon tb-icons', tooltipText: 'Bold'
            },
            {
                prefixIcon: 'e-underline-icon tb-icons', tooltipText: 'Underline'
            },
            {
                prefixIcon: 'e-italic-icon tb-icons', tooltipText: 'Italic'
            }
        ]
    });

    //Render initialized Toolbar component
    toolbarObj.appendTo('#Toolbar');

    //Initialize Tooltip component
    var tooltip = new ej.popups.Tooltip({

        //Set tooltip target
        target: '#Toolbar [title]',

        //Raise beforeRender event
        beforeRender: onBeforeRender,

        //Set true to show Tip pointer
        showTipPointer: false,

        //Set tooltip offsetX
        offsetX: 70,

        //Set tooltip width
        width: 170,
        
        //Set tooltip position
        position: 'BottomCenter',

        windowCollision: true,

    });

    //Render initialized Tooltip component
    tooltip.appendTo('#Tooltip');

};

/**
 * Tooltip content customization.
 */

function onBeforeRender(args) {
    var data = [
        { title: 'Bold', name: 'Bold (Ctrl+B)', description: 'Makes your text bold.' },
        { title: 'Underline', name: 'Underline (Ctrl+U)', description: 'Underline your text.' },
        { title: 'Italic', name: 'Italic (Ctrl+I)', description: 'Italicize your text.' },
        {
            title: 'Cut', name: 'Cut (Ctrl+X)',
            description: 'Remove the selection and put it on the Clipboard so you can paste it somewhere else.'
        },
        {
            title: 'Copy', name: 'Copy (Ctrl+C)',
            description: 'Put a copy of a selection on the Clipboard so you can paste it somewhere else.'
        },
        { title: 'Paste', name: 'Paste (Ctrl+V)', description: 'Add content on the Clipboard to your document.' }
    ];
    for (var i = 0; i < data.length; i++) {
        if (data[i].title === args.target.getAttribute('title')) {
            this.content = '<h6>' + data[i].name + '</h6><p>' + data[i].description + '</p>';
        }
    }
}