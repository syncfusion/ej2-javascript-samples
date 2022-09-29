this.default = function () {
    var items = [
        {
            text: 'Cut',
            iconCss: 'speeddial-icons speeddial-icon-cut'
        },
        {
            text: 'Copy',
            iconCss: 'speeddial-icons speeddial-icon-copy'
        },
        {
            text: 'Paste',
            iconCss: 'speeddial-icons speeddial-icon-paste'
        },
        {
            text: 'Delete',
            iconCss: 'speeddial-icons speeddial-icon-delete'
        },
        {
            text: 'Save',
            iconCss: 'speeddial-icons speeddial-icon-save'
        }
    ];
    var popupTemp = new ej.buttons.SpeedDial(
        {
            content: 'Feedback',
            openIconCss: 'speeddial-icons speeddial-icon-feedback',
            items: items,
            target: '#target',
            position: 'BottomLeft',
            cssClass:"popupSpeedDial",
            popupTemplate: '#popupTemplate'
        });
    popupTemp.appendTo('#btn1');

    var itemTemp = new ej.buttons.SpeedDial(
        {
            content: "Edit",
            openIconCss: 'speeddial-icons speeddial-icon-edit',
            items: items,
            target: '#target',
            position: 'BottomRight',
            itemTemplate: '#itemTemplate'
        });
    itemTemp.appendTo('#btn2');

    var inputNameObj = new ej.inputs.TextBox({
        placeholder:"Enter your name",
        floatLabelType:"Always",
        showClearButton:true,
    });
    inputNameObj.appendTo('#name');

    var inputEmailObj = new ej.inputs.TextBox({
        placeholder:"Enter your e-mail",
        floatLabelType:"Always",
        showClearButton:true,
    });
    inputEmailObj.appendTo('#email');

    var inputCommentObj = new ej.inputs.TextBox({
        placeholder:"Share your comments",
        floatLabelType:"Always",
        showClearButton:true,
    });
    inputCommentObj.appendTo('#comment');

    var button= new ej.buttons.Button({
        cssClass:"e-success",
        content:" Submit ",
    });
    button.appendTo("#primarybtn");

    document.getElementById('close-icon').addEventListener('click', function() {
        popupTemp.hide();
    }); 

    document.getElementById('primarybtn').addEventListener('click', function() {
        popupTemp.hide();
    });   

};
