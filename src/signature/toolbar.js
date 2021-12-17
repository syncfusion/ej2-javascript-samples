this.default = function () {
    
    var signature = new ej.inputs.Signature({
        maxStrokeWidth: 2,
        change: function(args) {
            if (!signature.isEmpty()) {
                var saveBtn = ej.base.getComponent(document.getElementById("save-option"), 'split-btn');
                clearButton();
                saveBtn.disabled = false;
            }
            updateUndoRedo();
        }
    }, '#signature');
    var items = [
        {
            text: 'Png'
        },
        {
            text: 'Jpeg'
        },
        {
            text: 'Svg'
        }
    ];

    var toolbarObj = new ej.navigations.Toolbar({
        width: '100%',
        items: [
            { text: 'Undo', prefixIcon: 'e-icons e-undo', tooltipText: 'Undo (Ctrl + Z)' },
            {  text: 'Redo', prefixIcon: 'e-icons e-redo', tooltipText: 'Redo (Ctrl + Y)' },
            { type: 'Separator' },
            { tooltipText: 'Save (Ctrl + S)', type: 'Button', template: '<button id="save-option"></button>' },
            { type: 'Separator' },
            { tooltipText: 'Stroke Color', type: 'Input', template: '<input id="stroke-color" type="color"/>' },
            { type: 'Separator' },
            { tooltipText: 'Background Color', type: 'Input', template: '<input id="bg-color" type="color"/>' },
            { type: 'Separator' },
            { tooltipText: 'Stroke Width', type: 'Input', template: '<input id="stroke-width" type="text"/>' },
            { type: 'Separator' },
            { text: 'Clear', prefixIcon: 'e-sign-icons e-clear', tooltipText: 'Clear' },
            { tooltipText: 'Disabled', type: 'Input', template: new ej.buttons.CheckBox({ label: 'Disabled', checked: false, change: disabledChange}), align: 'Right' }
        ],
        created: function(args) {
            var ddl = new ej.dropdowns.DropDownList({
                dataSource:  [1, 2, 3, 4, 5],
                width: '60',
                value: 2,
                change: function(args) {
                    signature.maxStrokeWidth = args.value;
                } 
            });
            ddl.appendTo('#stroke-width');
            new ej.splitbuttons.SplitButton({content: 'Save', iconCss: 'e-sign-icons e-save', items: items, select: onSelect, disabled: true }, '#save-option');
            var strokeColor = new ej.inputs.ColorPicker({
                presetColors: {
                    'custom': ['#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                        '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
                },
                modeSwitcher: false,
                columns: 4,
                beforeTileRender: function(args) {
                    args.element.classList.add('e-circle-palette');
                    args.element.appendChild(ej.base.createElement('span', { className: 'e-circle-selection' }));
                },
                showButtons: false, mode: 'Palette', cssClass: 'e-stroke-color', change: strokeColorChanged});
            strokeColor.appendTo('#stroke-color');
            var bgColor = new ej.inputs.ColorPicker({
                noColor: true,
                modeSwitcher: false,
                columns: 4,
				beforeTileRender: function(args) {
                    args.element.classList.add('e-circle-palette');
                    args.element.appendChild(ej.base.createElement('span', { className: 'e-circle-selection' }));
                },
                presetColors: {
                    'custom': ['#ffffff', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                        '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
                },
                showButtons: false, mode: 'Palette', cssClass: 'e-bg-color', change: bgColorChanged});
            bgColor.appendTo('#bg-color');
            ej.base.addClass([strokeColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
            ej.base.addClass([bgColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
            clearButton();
            var toolbarlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
            for (var i = 0; i < toolbarlItems.length; i++) {
                if (toolbarlItems[i].children[0].classList.contains('e-undo')) {
                    var undoButton = ej.base.getComponent(toolbarlItems[i] , 'btn');
                    undoButton.disabled = true;
                }
                if (toolbarlItems[i].children[0].classList.contains('e-redo')) {
                    var redoButton= ej.base.getComponent(toolbarlItems[i], 'btn');
                    redoButton.disabled = true;
                }
            }
        },
        clicked: function(args) {
            var saveBtn = ej.base.getComponent(document.getElementById("save-option"), 'split-btn');
            if (signature.disabled && args.item.tooltipText != 'Disabled') {
                return;
            }
            switch (args.item.tooltipText) {
                case 'Undo (Ctrl + Z)':
                    if (signature.canUndo()) {
                        signature.undo();
                        updateUndoRedo();
                        updateSaveBtn();
                    }
                    break;
                case 'Redo (Ctrl + Y)':
                    if (signature.canRedo()) {
                        signature.redo();
                        updateUndoRedo();
                        updateSaveBtn();
                    }
                    break;
                case 'Clear':
                    signature.clear();
                    if (signature.isEmpty()) {
                        clearButton();
                        saveBtn.disabled = true;
                    }
                    break;
            }
        }
    });
    toolbarObj.appendTo('#toolbar');

    function onSelect(args) {
        signature.save(args.item.text, 'Signature');
    }

    function strokeColorChanged(args) {
        if (signature.disabled) {
            return;
        }
        var selElem = this.element.nextElementSibling.querySelector('.e-selected-color');
        selElem.style.borderBottomColor = args.currentValue.rgba;
        signature.strokeColor = args.currentValue.rgba;
    }

    function bgColorChanged(args) {
        if (signature.disabled) {
            return;
        }
        var selElem = this.element.nextElementSibling.querySelector('.e-selected-color');
        signature.backgroundColor = args.currentValue.rgba;
        selElem.style.borderBottomColor = args.currentValue.rgba;
    }

    function clearButton() {
        var tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
        for (var i = 0; i < tlItems.length; i++) {
            if (tlItems[i].children[0].classList.contains('e-clear')) {
                var clrBtn = ej.base.getComponent(tlItems[i], 'btn');
                if (signature.isEmpty()) {
                    clrBtn.disabled = true;
                } else {
                    clrBtn.disabled = false;
                }
            }
        }
    }

    function disabledChange(args) {
        signature.disabled = args.checked;
    }

    document.getElementById('save-option').onclick = function (e) {
        signature.save();
    };

    function updateSaveBtn() {
        var saveBtn = ej.base.getComponent(document.getElementById("save-option"), 'split-btn');
        if (signature.isEmpty()) {
            saveBtn.disabled = true;
        }
    }

    function updateUndoRedo() {
        var undoButton; var redoButton;
        var tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
        for (var i = 0; i < tlItems.length; i++) {
            if (tlItems[i].children[0].classList.contains('e-undo')) {
                undoButton = ej.base.getComponent(tlItems[i], 'btn'); 
            }
            if (tlItems[i].children[0].classList.contains('e-redo')) {
                redoButton = ej.base.getComponent(tlItems[i], 'btn');
            }
        }
        if (signature.canUndo()) {
            undoButton.disabled = false;
        } else {
            undoButton.disabled = true;
        }
        if (signature.canRedo()) {
            redoButton.disabled = false;
        } else {
            redoButton.disabled = true;
        }
    }
};