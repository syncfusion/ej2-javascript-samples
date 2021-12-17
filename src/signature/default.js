this.default = function () {
    
    var saveBtn = new ej.buttons.Button({disabled: true}, '#signsave');
    var clrBtn = new ej.buttons.Button({disabled: true}, '#signclear');
    var signature = new ej.inputs.Signature({
        change: function(args) {
            if (!signature.isEmpty()) {
                saveBtn.disabled = false;
                clrBtn.disabled = false;
            }
        }
    }, '#signature');
    document.getElementById('signsave').onclick = function (e) {
        signature.save();
    };
    document.getElementById('signclear').onclick = function (e) {
        signature.clear();
        if (signature.isEmpty()) {
            saveBtn.disabled = true;
            clrBtn.disabled = true;
        }
    };
};