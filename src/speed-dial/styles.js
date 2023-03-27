this.default = function () {
    var items = [
        {
            text:'Cut',
            iconCss:'speeddial-icons speeddial-icon-cut'
        },
        {
            text:'Copy',
            iconCss:'speeddial-icons speeddial-icon-copy'
        },
        {
            text:'Paste',
            iconCss:'speeddial-icons speeddial-icon-paste'
        },
        {
            text:'Delete',
            iconCss:'speeddial-icons speeddial-icon-delete'
        },
        {
            text:'Save',
            iconCss:'speeddial-icons speeddial-icon-save'
        }
    ];
    var itemLabel = [
        {
            text:'Cut'
        },
        {
            text:'Copy'
        },
        {
            text:'Paste'
        },
        {
            text:'Delete'
        },
        {
            text:'Save'
        }
    ];
    var tooltItem= [
        {
            title:'Cut',
            iconCss:'speeddial-icons speeddial-icon-cut'
        },
        {
            title:'Copy',
            iconCss:'speeddial-icons speeddial-icon-copy'
        },
        {
            title:'Paste',
            iconCss:'speeddial-icons speeddial-icon-paste'
        },
        {
            title:'Delete',
            iconCss:'speeddial-icons speeddial-icon-delete'
        },
        {
            title:'Save',
            iconCss:'speeddial-icons speeddial-icon-save'
        }
    ];
    var iconLabel = new ej.buttons.SpeedDial(
        {
            content: 'Edit',
            openIconCss: 'speeddial-icons speeddial-icon-edit',
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
            openIconCss: 'speeddial-icons speeddial-icon-edit',
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
