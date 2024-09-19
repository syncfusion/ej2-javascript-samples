this.default = function () {
    /**
     * Smart Image Editor Sample
     */
    ej.base.enableRipple(true);

    let colorPickerVal = '';

    const wrapperDiv = document.getElementById('wrapper-container');
    let toolbar = [];

    let dragElement = document.getElementsByClassName('magic-eraser')[0];
    dragElement ? new ej.base.Draggable(dragElement, { clone: false }) : null;
    dragElement = document.getElementsByClassName('bg-changer')[0];
    dragElement ? new ej.base.Draggable(dragElement, { clone: false }) : null;

    const closeBtn = new ej.buttons.Button({ iconCss: 'e-icons e-close', cssClass: 'e-small e-round', isPrimary: true });
    closeBtn.appendTo('#remove-btn');

    const eraseBtn = new ej.buttons.Button({ cssClass: 'e-primary' });
    eraseBtn.appendTo('#eraseBtn');

    const changeBGBtn = new ej.buttons.Button({ cssClass: 'e-primary' });
    changeBGBtn.appendTo('#bgChangeBtn');

    const bgCloseBtn = new ej.buttons.Button({ iconCss: 'e-icons e-close', cssClass: 'e-small e-round', isPrimary: true });
    bgCloseBtn.appendTo('#bg-change-remove-btn');

    let defaultColorPicker = new ej.inputs.ColorPicker(
        {
            change: change
        }, '#color-picker');

    const colorPicker = new ej.inputs.ColorPicker(
        {
            mode: 'Palette',
            modeSwitcher: false,
            inline: true,
            showButtons: false,
            columns: 6,
            presetColors: {
                'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                    '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
            },
            beforeTileRender: (args) => {
                args.element.classList.add('e-circle-palette');
                args.element.appendChild(ej.base.createElement('span', { className: 'e-circle-selection' }));
            },
            change: change
        },
        '#circle-palette');

    /**
     * Triggers while changing colors.
     */
    function change(args) {
        colorPickerVal = args.currentValue.hex;
    }

    const outlineTextBox = new ej.inputs.TextBox({
        placeholder: 'Example: Waterfalls, Mountains, etc..',
        cssClass: 'e-outline'
    });
    outlineTextBox.appendTo('#outlined');

    const imageEditorObj = new ej.imageeditor.ImageEditor({
        fileOpened: () => {
            setTimeout(() => {
                imageEditorObj.update();
            }, 200);
            toolbar = imageEditorObj.toolbar;
        },
        created: () => {
            imageEditorObj.open('images/image-ai.png');
        }
    });
    imageEditorObj.appendTo('#imageeditor');

    //Toolbar component Template elements.
    const folderEle = '<div class= "e-folder"><div class= "e-folder-name">AI Image Editor</div></div>';

    //Initialization of TreeView datasource. 
    const treeData = [
        { id: "1", name: "Magic Eraser", imageUrl: "images/object-remover.gif" },
        { id: "2", name: "Change Background", imageUrl: "images/change-bg.png" },
        { id: "2", name: "Remove Background", imageUrl: "images/remove-bg.png" }
    ]

    // Defines the rendering code blocks for the Toolbar component.
    const toolbarObj = new ej.navigations.Toolbar({
        cssClass: "defaultToolbar",
        height: "50px",
        clicked: ToolbarCliked,
        items: [
            { prefixIcon: "e-tbar-menu-icon tb-icons", tooltipText: "Menu" },
            { template: folderEle, cssClass: "e-folder" }
        ]
    });
    toolbarObj.appendTo("#defaultToolbar");

    //Defines the rendering code blocks for the Sidebar component.
    const sideObj = new ej.navigations.Sidebar({
        width: "200px",
        target: ".maincontent",
        position: 'Left'
    });
    sideObj.appendTo("#defaultSidebar");

    //Defines the rendering code blocks for the TreeView component.
    const treeObj = new ej.navigations.TreeView({
        nodeSelected: OnSelect,
        fields: { dataSource: treeData, id: "id", text: "name", selected: "selected", parentID: "pid", hasChildren: "hasChild", expanded: "expanded" }
    });
    treeObj.appendTo("#defaultTree");

    // Specifies the event handler for the Toolbar clicked event.
    function ToolbarCliked(args) {
        if (args.item.tooltipText == "Menu") {
            sideObj.toggle();
            setTimeout(() => {
                imageEditorObj.update();
            }, 500);
        }
    }

    // Specifies the event handler for the TreeView nodeSelected event.
    function OnSelect(args) {
        if (args.nodeData.text == "Magic Eraser") {
            (document.getElementsByClassName('bg-changer')[0]).style.display = 'none';
            (document.getElementsByClassName('magic-eraser')[0]).style.display = 'block';
            imageEditorObj.update();
            (imageEditorObj).selectMaskImage(400, 125, 360, 400);
            treeObj.selectedNodes = [];
        }
        else if (args.nodeData.text == "Change Background") {
            (document.getElementsByClassName('magic-eraser')[0]).style.display = 'none';
            (document.getElementsByClassName('bg-changer')[0]).style.display = 'block';
            treeObj.selectedNodes = [];
        }
        else if (args.nodeData.text == "Remove Background") {
            ej.popups.showSpinner(imageEditorObj.element);
            wrapperDiv.style.opacity = '0.5';
            const imageData = imageEditorObj.getImageData();
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imageData.width; canvas.height = imageData.height;
            (ctx).putImageData(imageData, 0, 0);
            let url = canvas.toDataURL();
            url = url.split(",")[1];
            const file = base64ToFile(canvas.toDataURL(), 'image.png');
            removeBG(file);
        }
    }

    if (closeBtn.element) {
        closeBtn.element.onclick = () => {
            (document.getElementsByClassName('magic-eraser')[0]).style.display = 'none';
            imageEditorObj.discard();
        }
    }

    if (bgCloseBtn.element) {
        bgCloseBtn.element.onclick = () => {
            (document.getElementsByClassName('bg-changer')[0]).style.display = 'none';
            colorPicker.refresh(); colorPickerVal = '';
            const val = (colorPicker.element.parentElement).querySelector('.e-selected');
            if (val) {
                val.classList.remove('e-selected');
            }
        }
    }

    if (eraseBtn.element) {
        eraseBtn.element.onclick = () => {
            ej.popups.showSpinner(imageEditorObj.element);
            wrapperDiv.style.opacity = '0.5';
            let maskUrl = (imageEditorObj).getMaskImageUrl();
            const imageData = imageEditorObj.getImageData();
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imageData.width; canvas.height = imageData.height;
            (ctx).putImageData(imageData, 0, 0);
            let url = canvas.toDataURL();
            const file = base64ToFile(url, 'image.png');
            const maskFile = base64ToFile(maskUrl, 'mask.png');
            let aiOutput = StabilityAiModelMagicEraser(file, maskFile);
            aiOutput.then((result) => {
                imageEditorObj.baseImg.src = result;
                setTimeout(() => {
                    ej.popups.hideSpinner(imageEditorObj.element);
                    wrapperDiv.style.opacity = '1';
                    treeObj.selectedNodes = [];
                }, 100);
                (document.getElementsByClassName('magic-eraser')[0]).style.display = 'none';
            });
        }
    }

    if (changeBGBtn.element) {
        changeBGBtn.element.onclick = () => {
            ej.popups.showSpinner(imageEditorObj.element);
            wrapperDiv.style.opacity = '0.5';
            const imageData = imageEditorObj.getImageData();
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imageData.width; canvas.height = imageData.height;
            (ctx).putImageData(imageData, 0, 0);
            let url = canvas.toDataURL();
            url = url.split(",")[1];
            const file = base64ToFile(canvas.toDataURL(), 'image.png');
            if (outlineTextBox.value && outlineTextBox.value !== '') {
                let prompt = outlineTextBox.value;
                let searchPrompt = 'Background of the image';
                let aiOutput = StabilityAiModel(file, prompt, searchPrompt);
                aiOutput.then((result) => {
                    imageEditorObj.baseImg.src = result;
                    setTimeout(() => {
                        ej.popups.hideSpinner(imageEditorObj.element);
                        wrapperDiv.style.opacity = '1';
                        treeObj.selectedNodes = [];
                        colorPicker.refresh(); colorPickerVal = '';
                        const val = (colorPicker.element.parentElement).querySelector('.e-selected');
                        if (val) {
                            val.classList.remove('e-selected');
                        }
                    }, 100);
                    (document.getElementsByClassName('bg-changer')[0]).style.display = 'none';
                });
            } else {
                removeBG(file, true);
            }
        }
    }

    function base64ToFile(base64String, fileName) {
        const byteString = atob(base64String.split(',')[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const intArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([intArray], { type: 'image/png' });
        const file = new File([blob], fileName, { type: 'image/png' });
        return file;
    }

    function removeBG(file, setColor) {
        let aiOutput = StabilityAiModelBGRemover(file);
        aiOutput.then((result) => {
            imageEditorObj.baseImg.src = result;
            if (setColor) {
                imageEditorObj.updateImage('', colorPickerVal);
            }
            setTimeout(() => {
                ej.popups.hideSpinner(imageEditorObj.element);
                wrapperDiv.style.opacity = '1';
                treeObj.selectedNodes = [];
            }, 100);
        });
    }
};