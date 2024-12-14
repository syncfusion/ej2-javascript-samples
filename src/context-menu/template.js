this.default = function() {

    //ContextMenu items definition
    var menuItems = [
        {
            answerType: 'Selection',
            description: "Choose from options",
            iconCss: 'e-icons e-list-unordered'
        },
        {
            answerType: 'Yes / No',
            description: "Select Yes or No",
            iconCss: 'e-icons e-check-box',
        },
        {
            answerType: 'Text',
            description: "Type own answer",
            iconCss: 'e-icons e-caption',
            items: [
                {
                    answerType: 'Single line',
                    description: "Type answer in a single line",
                    iconCss: 'e-icons e-text-form',
                },
                {
                    answerType: 'Multiple line',
                    description: "Type answer in multiple line",
                    iconCss: 'e-icons e-text-wrap'
                }
            ]
        },
        {
            answerType: 'None',
            iconCss: 'e-icons e-mouse-pointer',
            description: "No answer required"
        },
    ];

    var menuOptions = {
        target: '#contextmenutarget',
        items: menuItems,
        itemTemplate: "#cmenuTemplate",
        beforeOpen: function(args) {
            if (args.element.classList.contains('e-ul')) {
                args.element.classList.add('e-contextMenu-template')
            }
        }
    };
    
    var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');
    if (ej.base.Browser.isDevice) {
        ej.base.select('#contextmenutarget').textContent = 'Right-click or touch and hold to open the Context Menu and select the answer type';
        menuObj.animationSettings.effect = 'ZoomIn';
    }
    else {
        ej.base.select('#contextmenutarget').textContent = 'Right click/Touch hold to open the Context Menu and select the answer type';
        menuObj.animationSettings.effect = 'SlideDown';
    }
};
