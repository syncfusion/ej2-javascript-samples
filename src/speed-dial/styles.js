this.default = function () {
    var items = [
        {
            text: 'Home',
            iconCss: 'speeddial-icons speeddial-icon-house'
        },
        {
            text: 'Contacts',
            iconCss: 'speeddial-icons speeddial-icon-people'
        },
        {
            text: 'Search',
            iconCss: 'speeddial-icons speeddial-icon-search'
        },
        {
            text: 'Message',
            iconCss: 'speeddial-icons speeddial-icon-message'
        }
    ];
    var itemLabel = [
        {
            text: 'Home'
        },
        {
            text: 'Contacts'
        },
        {
            text: 'Search'
        },
        {
            text: 'Message'
        }
    ];
    var tooltItem= [
        {
            title:'Home',
            iconCss:'speeddial-icons speeddial-icon-house'
        },
        {
            title:'Contacts',
            iconCss:'speeddial-icons speeddial-icon-people'
        },
        {
            title:'Search',
            iconCss:'speeddial-icons speeddial-icon-search'
        },
        {
            title:'Message',
            iconCss:'speeddial-icons speeddial-icon-message'
        }
    ];
    var iconLabel = new ej.buttons.SpeedDial(
        {
            content: 'Edit',
            openIconCss: 'speeddial-icons speeddial-icon-menu',
            iconPosition: 'Left',
            items: items,
            target: '#target',
            position: 'BottomCenter'
        });
    iconLabel.appendTo('#btn1');

    var label = new ej.buttons.SpeedDial(
        {
            content: 'Edit',
            items: itemLabel,
            target: '#target',
            position: 'BottomLeft'
        });
    label.appendTo('#btn2');

    var labelTooltip = new ej.buttons.SpeedDial(
        {
            openIconCss: 'speeddial-icons speeddial-icon-menu',
            closeIconCss: 'speeddial-icons speeddial-icon-close',
            items: tooltItem,
            position: 'BottomRight',
            target: '#target',
            cssClass: "tooltip-speeddial"
        });
    labelTooltip.appendTo('#btn3');

    var tooltip = new ej.popups.Tooltip({
        target: ".tooltip-speeddial .e-speeddial-li",
        position: 'LeftCenter'
    });
    tooltip.appendTo("#target");
};
