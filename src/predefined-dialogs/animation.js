this.default = function () {
    var dialogArgs = { 
        title: ' Delete Multiple Items',
        content: "Are you sure you want to permanently delete these items?",
        position: { X: 'center', Y: 'center' },
        animationSettings: { effect: 'Zoom',duration: 400},
        width:'420px',
        closeOnEscape: true
    };

    var button = new ej.buttons.Button({cssClass: 'e-success'});
    button.appendTo('#confirmBtn');
    document.getElementById("confirmBtn").onclick = function confirmBtnAction( ) {
        ej.popups.DialogUtility.confirm(dialogArgs);
    };
    var animationObj = new ej.dropdowns.DropDownList({
        index: 2,     
        placeholder: 'Animation effect',     
        popupHeight: '200px', 
        floatLabelType: 'Always',
        change: function(){ valueChange();  }
    });
    animationObj.appendTo('#effectDropdown');
    function valueChange() {
        var effect = animationObj.value;
        dialogArgs.animationSettings.effect = effect;
    }


   

};
