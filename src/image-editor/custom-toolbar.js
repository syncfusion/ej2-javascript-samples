/**
 * Custom Toolbar sample
 */

 this.default = function () {
    var image = document.getElementById('previewImgContainer');
    if (ejs.base.Browser.isDevice && image) {
        image.src = 'src/image-editor/images/flower.png';
    }
    var currentToolbar = 'main';
    var activeObjIndex;
    var tempShapeSettings;
    var isShapeCustomizing = false;
    var isTextEditing = false;
    var isShapeSelected = false;
    var filter = 'default';
    var imageData;
    var toolbars = ['filter', 'rectangle', 'ellipse', 'line', 'text', 'edittext', 'freehanddraw'];
    var presetColors = {
        'custom': ['#ffffff', '#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
        '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
    };
    ejs.base.EventHandler.add(document, 'keydown', keyDownEventHandler, this);
    ejs.base.EventHandler.add(document.getElementById('image-editor-container'), 'dblclick', doubleClickEvent, this);
    var button = new ejs.buttons.Fab({
        iconCss: 'e-icons e-edit',
        position: 'BottomRight',
        target: '.image-preview-container',
        isPrimary: true,
        content: 'Edit Image'
    });
    button.appendTo('#edit');
    button.element.setAttribute('title', 'Edit');
    var imageEditorObj;
    imageEditorObj = new ejs.imageeditor.ImageEditor({
        theme: 'Material',
        toolbar: [],
        showQuickAccessToolbar: false,
        shapeChanging: function (args) {
            if (args.action === 'select') {
                isShapeSelected = true;
                updateToolbar(args, true);
            }
            else if (args.action === 'insert') {
                activeObjIndex = args.currentShapeSettings.id;
                tempShapeSettings = args.currentShapeSettings;
            }
        },
        shapeChange: function (args) {
            if (args.action === 'apply' && !isShapeCustomizing && !isShapeSelected) {
                isTextEditing = false;
                setTimeout(function () {
                    refreshToolbar('main');
                }, 1);
            }
        },
        click: function () {
            if (toolbars.indexOf(currentToolbar) !== -1) {
                refreshToolbar('main');
            }
        },
        fileOpened: function () {
            imageData = imageEditorObj.getImageData();
        },
        zoomSettings: { minZoomFactor: 0.1, maxZoomFactor: 50 }
    });
    imageEditorObj.appendTo('#imageEditor');
    var toolbarObj = new ejs.navigations.Toolbar({
        items: [
            {
                id: 'cancel', prefixIcon: 'e-icons e-close', tooltipText: 'Cancel', align: 'Center'
            },
            {
                id: 'undo', prefixIcon: 'e-icons e-undo', tooltipText: 'Undo', align: 'Center', disabled: true
            },
            {
                id: 'redo', prefixIcon: 'e-icons e-redo', tooltipText: 'Redo', align: 'Center', disabled: true
            },
            {
                id: 'ok', prefixIcon: 'e-icons e-save', tooltipText: 'Save', align: 'Center'
            }
        ],
        clicked: toolbarClicked.bind(this),
        created: function () {
            var toolbarArea = document.getElementById('top-toolbar');
            toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        }
    });
    toolbarObj.appendTo('#top-toolbar');
    toolbarObj = new ejs.navigations.Toolbar({
        items: [
            {
                id: 'cropAndTransform', prefixIcon: 'e-icons e-crop', tooltipText: 'Crop and Transform', align: 'Center'
            },
            {
                id: 'back', prefixIcon: 'e-icons e-arrow-left', tooltipText: 'Back', align: 'Center', visible: false
            },
            {
                id: 'rotateLeft', prefixIcon: 'e-icons e-transform-left', tooltipText: 'Rotate Left', align: 'Center', visible: false
            },
            {
                id: 'rotateRight', prefixIcon: 'e-icons e-transform-right', tooltipText: 'Rotate Right', align: 'Center', visible: false
            },
            {
                id: 'addText', prefixIcon: 'e-icons e-text-annotation', tooltipText: 'Text', align: 'Center'
            },
            {
                id: 'fontColor', cssClass: 'top-icon e-text-fontColor', tooltipText: 'Font Color', align: 'Center', visible: false,
                type: 'Input', template: '<button id="' + 'imageEditor_fontColorBtn"></button>'
            },
            {
                id: 'shapes', prefixIcon: 'e-icons e-shapes', tooltipText: 'Annotations', align: 'Center',
                template: '<button id="' + 'imageEditor_annotationButton"></button>'
            },
            {
                id: 'fillColor', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-fill', tooltipText: 'Fill Color', align: 'Center', visible: false,
                type: 'Input', template: '<button id="' + 'imageEditor_fillColorBtn"></button>'
            },
            {
                id: 'strokeColor', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-stroke', tooltipText: 'Stroke Color', align: 'Center', visible: false,
                type: 'Input', template: '<button id="' + 'imageEditor_borderColorBtn"></button>'
            },
            {
                id: 'penStrokeColor', prefixIcon: 'e-icons e-copy', cssClass: 'top-icon e-pen-stroke-color',
                tooltipText: 'Stroke Color', align: 'Center', visible: false,
                type: 'Input', template: '<button id="' + 'imageEditor_penColorBtn"></button>'
            },
            {
                id: 'remove', prefixIcon: 'e-icons e-trash', tooltipText: 'Remove', align: 'Center', visible: false, disabled: false
            },
            {
                id: 'editText', prefixIcon: 'e-icons e-annotation-edit', cssClass: 'top-icon e-annotation-edit',
                tooltipText: 'Edit Text', align: 'Center', visible: false, disabled: false
            },
            {
                id: 'addPen', prefixIcon: 'e-icons e-free-pen', tooltipText: 'Pen', align: 'Center'
            },
            {
                id: 'filters', prefixIcon: 'e-icons e-filters', tooltipText: 'Filters', align: 'Center'
            }
        ],
        created: function () {
            renderAnnotationBtn();
            createFontColor();
            createShapeColor();
            createPenColor();
            var toolbarArea = document.getElementById('bottom-toolbar');
            toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        },
        clicked: toolbarClicked.bind(this)
    });
    toolbarObj.appendTo('#bottom-toolbar');
    document.getElementById('edit').onclick = function () {
        document.getElementById('imagePreviewContainer').style.display = 'none';
        document.getElementById('image-editor-container').style.display = 'block';
        imageEditorObj.open(document.getElementById('previewImgContainer').src);
        var toolbarArea = document.getElementById('top-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        toolbarArea = document.getElementById('bottom-toolbar');
        toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        refreshToolbar('main');
    };
    function toolbarClicked(args) {
        var item = args.item.id.toLowerCase();
        var dimension = imageEditorObj.getImageDimension();
        var imageData;
        var canvas;
        switch (item) {
            case 'back':
                apply();
                refreshToolbar('main');
                break;
            case 'cancel':
                isTextEditing = false;
                if (currentToolbar === 'main') {
                    document.getElementById('image-editor-container').style.display = 'none';
                    document.getElementById('imagePreviewContainer').style.display = 'block';
                    imageEditorObj.reset();
                }
                else {
                    if ((isShapeCustomizing || isShapeSelected) && tempShapeSettings && tempShapeSettings.id) {
                        imageEditorObj.updateShape(tempShapeSettings);
                    }
                    imageEditorObj.clearSelection(true);
                    refreshToolbar('main');
                }
                break;
            case 'undo':
                if (currentToolbar === 'pen') {
                    imageEditorObj.freeHandDraw(false);
                }
                isTextEditing = false;
                imageEditorObj.undo();
                refreshToolbar('main');
                break;
            case 'redo':
                if (currentToolbar === 'pen') {
                    imageEditorObj.freeHandDraw(false);
                }
                isTextEditing = false;
                imageEditorObj.redo();
                refreshToolbar('main');
                break;
            case 'ok':
                isTextEditing = false;
                if (currentToolbar === 'main') {
                    imageData = imageEditorObj.getImageData();
                    canvas = document.createElement('canvas');
                    canvas.width = imageData.width;
                    canvas.height = imageData.height;
                    canvas.getContext('2d').putImageData(imageData, 0, 0);
                    document.getElementById('previewImgContainer').src = canvas.toDataURL();
                    imageEditorObj.open(imageData);
                    document.getElementById('image-editor-container').style.display = 'none';
                    document.getElementById('imagePreviewContainer').style.display = 'block';
                }
                else {
                    apply();
                    refreshToolbar('main');
                }
                break;
            case 'cropandtransform':
                imageEditorObj.select('custom');
                refreshToolbar('crop');
                break;
            case 'rotateleft':
                imageEditorObj.rotate(-90);
                break;
            case 'rotateright':
                imageEditorObj.rotate(90);
                break;
            case 'addtext':
                imageEditorObj.drawText(dimension.x + (dimension.width / 2) - 65, dimension.y + (dimension.height / 2) - 15, 'Add Text', 'Arial', 30, false, false, '#fff', true);
                isShapeSelected = true;
                refreshToolbar('text');
                break;
            case 'remove':
                if (ejs.base.isNullOrUndefined(activeObjIndex) && tempShapeSettings && tempShapeSettings.id) {
                    activeObjIndex = tempShapeSettings.id;
                }
                if (isTextEditing) {
                    tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
                    activeObjIndex = tempShapeSettings.id;
                }
                imageEditorObj.deleteShape(activeObjIndex);
                refreshToolbar('main');
                break;
            case 'edittext':
                isTextEditing = true;
                imageEditorObj.enableTextEditing();
                refreshToolbar('edittext');
                break;
            case 'addpen':
                imageEditorObj.freeHandDraw(true);
                refreshToolbar('pen');
                break;
            case 'filters':
                refreshToolbar('filter');
                break;
        }
    }
    function refreshToolbar(type, isEvent) {
        var toolbar = ejs.base.getComponent('bottom-toolbar', 'toolbar');
        var items = [];
        var filterToolbar;
        var itemModel;
        var dimension = imageEditorObj.getImageDimension();
        var shapeSettings;
        document.getElementById('filter-toolbar').style.display = 'none';
        currentToolbar = type;
        switch (type) {
            case 'main':
                items = ['cropAndTransform', 'addText', 'shapes', 'addPen', 'filters'];
                break;
            case 'crop':
                items = ['rotateLeft', 'rotateRight'];
                break;
            case 'text':
            case 'edittext':
                items = ['back', 'fontColor', 'remove', 'editText'];
                break;
            case 'rectangle':
                items = ['back', 'fillColor', 'strokeColor', 'remove'];
                if (!isEvent) {
                    imageEditorObj.drawRectangle(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50, 200, 100, 2, '#fff', null, null, true);
                    isShapeSelected = true;
                }
                break;
            case 'ellipse':
                items = ['back', 'fillColor', 'strokeColor', 'remove'];
                if (!isEvent) {
                    imageEditorObj.drawEllipse(dimension.x + (dimension.width / 2) - 100, dimension.y + (dimension.height / 2) - 50, 100, 50, 2, '#fff', null, null, true);
                    isShapeSelected = true;
                }
                break;
            case 'line':
                items = ['back', 'strokeColor', 'remove'];
                if (!isEvent) {
                    imageEditorObj.drawLine(dimension.x + (dimension.width / 2) - 200, dimension.y + (dimension.height / 2) - 100, dimension.x + (dimension.width / 2) + 200, dimension.y + (dimension.height / 2) + 100, 2, '#fff', true);
                    isShapeSelected = true;
                }
                break;
            case 'pen':
            case 'freehanddraw':
                items = ['back', 'penStrokeColor', 'remove'];
                break;
            case 'filter':
                document.getElementById('filter-toolbar').style.display = 'block';
                itemModel = [
                    {
                        id: 'default', tooltipText: 'Default', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_defaultCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Default' + '</span></div></div>'
                    },
                    {
                        id: 'chrome', tooltipText: 'Chrome', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_chromeCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Chrome' + '</span></div></div>'
                    },
                    {
                        id: 'cold', tooltipText: 'Cold', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_coldCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Cold' + '</span></div></div>'
                    },
                    {
                        id: 'warm', tooltipText: 'Warm', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_warmCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Warm' + '</span></div></div>'
                    },
                    {
                        id: 'grayscale', tooltipText: 'Grayscale', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_grayscaleCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Grayscale' + '</span></div></div>'
                    },
                    {
                        id: 'sepia', tooltipText: 'Sepia', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_sepiaCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Sepia' + '</span></div></div>'
                    },
                    {
                        id: 'invert', tooltipText: 'Invert', align: 'Center',
                        template: '<div class="filter-wrapper" style="box-sizing: content-box;"><canvas id=' + 'imageEditor_invertCanvas' + '></canvas><div style="text-align:center;"><span>' + 'Invert' + '</span></div></div>'
                    }
                ];
                if (document.querySelector('#' + 'filter-toolbar').classList.contains('e-control')) {
                    createCanvasFilter();
                } else {
                    filterToolbar = new ejs.navigations.Toolbar({
                        width: '100%',
                        items: itemModel,
                        clicked: function (args) {
                            filterImage(args.item.id);
                        },
                        created: function () {
                            createCanvasFilter();
                            filterToolbar.refreshOverflow();
                        }
                    });
                    filterToolbar.appendTo('#filter-toolbar');
                }
                items = ['default', 'chrome', 'cold', 'warm', 'grayscale', 'sepia', 'invert'];
                break;
        }
        for (var i = 0; i < toolbar.items.length; i++) {
            if (items.indexOf(toolbar.items[i].id) !== -1) {
                toolbar.items[i].visible = true;
                if (toolbar.items[i].id.toLowerCase() === 'edittext') {
                    if (type === 'edittext') {
                        toolbar.items[i].disabled = true;
                        focusTextarea();
                    } else {
                        toolbar.items[i].disabled = false;
                    }
                }
            }
            else {
                toolbar.items[i].visible = false;
            }
            if (toolbar.items[i].id === 'remove') {
                if (type === 'pen') {
                    toolbar.items[i].disabled = true;
                }
                else {
                    toolbar.items[i].disabled = false;
                }
            }
        }
        var enableUndo = imageEditorObj.canUndo();
        var enableRedo = imageEditorObj.canRedo();
        var topToolbar = ejs.base.getComponent('top-toolbar', 'toolbar');
        for (i = 0; i < topToolbar.items.length; i++) {
            if (topToolbar.items[i].id === 'undo') {
                topToolbar.items[i].disabled = !enableUndo;
            }
            else if (topToolbar.items[i].id === 'redo') {
                topToolbar.items[i].disabled = !enableRedo;
            }
            else if (topToolbar.items[i].id === 'ok') {
                if (currentToolbar === 'main') {
                    topToolbar.items[i].visible = true;
                    topToolbar.items[i].tooltipText = 'Save';
                    topToolbar.items[i].prefixIcon = 'e-icons e-save';
                }
                else if (currentToolbar === 'crop' || currentToolbar === 'filter') {
                    topToolbar.items[i].visible = true;
                    topToolbar.items[i].tooltipText = 'Apply';
                    topToolbar.items[i].prefixIcon = 'e-icons e-check-tick';
                }
                else {
                    topToolbar.items[i].visible = false;
                }
            }
            else if (topToolbar.items[i].id === 'cancel') {
                if (currentToolbar === 'main' || currentToolbar === 'crop') {
                    topToolbar.items[i].visible = true;
                }
                else {
                    topToolbar.items[i].visible = false;
                }
            }
        }
        setTimeout(function () {
            var toolbarArea = document.getElementById('bottom-toolbar');
            toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
            toolbarArea = document.getElementById('top-toolbar');
            toolbarArea.style.left = (toolbarArea.parentElement.parentElement.clientWidth / 2) - (toolbarArea.clientWidth / 2) + 'px';
        }, 1);
    }

    function focusTextarea() {
        setTimeout(function () {
            document.querySelector('.e-textarea').focus();
        }, 1);
    }

    function updateToolbar(args, isEvent) {
        var type = args.currentShapeSettings.type.toLowerCase();
        refreshToolbar(type, isEvent);
        if (isEvent) {
            tempShapeSettings = args.currentShapeSettings;
            activeObjIndex = tempShapeSettings.id;
        }
        setTimeout(function () {
            var selFillElem = document.querySelector('.e-fill.e-template .e-dropdownbtn-preview');
            var selStrokeElem = document.querySelector('.e-stroke.e-template .e-dropdownbtn-preview');
            var selTextStrokeElem = document.querySelector('#imageEditor_fontColorBtn .e-dropdownbtn-preview');
            var selPenStrokeElem = document.querySelector('.e-pen-stroke-color.e-template .e-dropdownbtn-preview');
            if (selFillElem && (type === 'rectangle' || type === 'ellipse')) {
                if (args.currentShapeSettings.fillColor === '') {
                    selFillElem.classList.add('e-nocolor-item');
                }
                else {
                    selFillElem.classList.remove('e-nocolor-item');
                    selFillElem.style.background = args.currentShapeSettings.fillColor;
                }
                if (document.querySelector('#' + 'imageEditor_shapeFill')) {
                    ejs.base.getComponent('imageEditor_shapeFill', 'colorpicker').value = args.currentShapeSettings.fillColor;
                }
            }
            if (selStrokeElem && (type === 'rectangle' || type === 'ellipse' || type === 'line')) {
                selStrokeElem.style.background = args.currentShapeSettings.strokeColor;
                if (document.querySelector('#' + 'imageEditor_shapeStroke')) {
                    ejs.base.getComponent('imageEditor_shapeStroke', 'colorpicker').value = args.currentShapeSettings.strokeColor;
                }
            }
            if (selTextStrokeElem && type === 'text') {
                selTextStrokeElem.style.background = args.currentShapeSettings.color;
                if (document.querySelector('#' + 'imageEditor_textFont')) {
                    ejs.base.getComponent('imageEditor_textFont', 'colorpicker').value = args.currentShapeSettings.color;
                }
            }
            if (selPenStrokeElem && type === 'freehanddraw') {
                selPenStrokeElem.style.background = args.currentShapeSettings.strokeColor;
                if (document.querySelector('#' + 'imageEditor_penStroke')) {
                    ejs.base.getComponent('imageEditor_penStroke', 'colorpicker').value = args.currentShapeSettings.strokeColor;
                }
            }
        }, 10);
    }
    function toPascalCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    function filterImage(type) {
        imageEditorObj.applyImageFilter(type);
        filter = type;
    }
    function renderDropDownButton(id, items, iconCss, cssClass, popup) {
        iconCss = iconCss === '' ? '' : 'e-icons ' + iconCss;
        var drpDownBtn = new ejs.splitbuttons.DropDownButton({ items: items, iconCss: iconCss, cssClass: cssClass,
            createPopupOnClick: popup,
            open: function (args) {
                if (ejs.base.Browser.isDevice) {
                    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top - args.element.parentElement.offsetHeight + 'px';
                }
            },
            select: function (args) {
                refreshToolbar(args.item.id);
            }
        });
        drpDownBtn.appendTo('#' + id);
    }
    function renderColorPicker(type, id, value, cssClass, noColor, mode, inline, showButtons, target, iconCss, ddbCssClass, ddbId, dropdownPreview, colors) {
        var shapeSetting;
        var colorpicker = new ejs.inputs.ColorPicker({
            modeSwitcher: false, noColor: noColor, value: value, inline: inline,
            showButtons: showButtons, mode: mode, cssClass: cssClass,
            presetColors: colors,
            columns: 4,
            change: function (args) {
                isShapeCustomizing = true;
                if (type === 'pen-color') {
                    if (tempShapeSettings && tempShapeSettings.id && tempShapeSettings.id.split('_')[0] === 'pen') {
                        shapeSetting = { id: tempShapeSettings.id, type: ejs.imageeditor.ShapeType.FreehandDraw,
                            startX: tempShapeSettings.startX, startY: tempShapeSettings.startY,
                            strokeColor: args.currentValue.hex, strokeWidth: tempShapeSettings.strokeWidth,
                            opacity: tempShapeSettings.opacity, points: tempShapeSettings.points };
                        imageEditorObj.updateShape(shapeSetting, true);
                        tempShapeSettings.strokeColor = args.currentValue.hex;
                        isShapeSelected = true;
                    }
                    else {
                        shapeSetting = { id: null, type: ejs.imageeditor.ShapeType.FreehandDraw, startX: null, startY: null,
                            strokeColor: args.currentValue.hex };
                        imageEditorObj.updateShape(shapeSetting);
                    }
                }
                else {
                    shapeSetting = imageEditorObj.getShapeSetting(activeObjIndex);
                    if (type === 'font-color') {
                        shapeSetting.color = args.value;
                    }
                    else if (type === 'shape-fill') {
                        shapeSetting.fillColor = args.value;
                    }
                    else if (type === 'shape-stroke') {
                        shapeSetting.strokeColor = args.value;
                    }
                    tempShapeSettings = shapeSetting;
                    imageEditorObj.updateShape(shapeSetting, true);
                    isShapeSelected = true;
                    if (isTextEditing) {
                        imageEditorObj.enableTextEditing();
                    }
                }
                isShapeCustomizing = false;
                if (type === 'shape-fill') {
                    if (args.currentValue.rgba === '') {
                        dropdownBtn.element.children[0].classList.add('e-nocolor-item');
                    }
                    else {
                        dropdownBtn.element.children[0].classList.remove('e-nocolor-item');
                        dropdownBtn.element.children[0].style.backgroundColor = args.currentValue.rgba;
                    }
                }
                else {
                    dropdownBtn.element.children[0].style.backgroundColor = args.currentValue.rgba;
                }
                dropdownBtn.toggle();
            },
            beforeClose: function () {
                dropdownBtn.toggle();
            }
        }, '#' + id);
        var dropdownBtn = new ejs.splitbuttons.DropDownButton({
            open: function (args) {
                var parenElem = args.element.parentElement;
                if (ejs.base.Browser.isDevice) {
                    parenElem.style.top = dropdownBtn.element.getBoundingClientRect().top -
                        parenElem.offsetHeight + 'px';
                    parenElem.style.left = args.element.parentElement.offsetLeft + 'px';
                }
            },
            target: target,
            iconCss: iconCss,
            cssClass: ddbCssClass
        }, '#' + ddbId);
        colorpicker.inline = true;
        colorpicker.value = colorpicker.getValue(colorpicker.value, 'rgba');
        if (type === 'shape-fill') {
            document.querySelector(dropdownPreview).classList.add('e-nocolor-item');
        }
        else {
            document.querySelector(dropdownPreview).style.background = colorpicker.value;
        }
    }
    function renderAnnotationBtn() {
        var items = [
            { text: 'Rectangle', id: 'rectangle', iconCss: 'e-icons e-rectangle' },
            { text: 'Ellipse', id: 'ellipse', iconCss: 'e-icons e-circle' },
            { text: 'Line', id: 'line', iconCss: 'e-icons e-line' },
        ];
        renderDropDownButton('imageEditor' + '_annotationButton', items, 'e-shapes', 'e-image-popup', false);
    }
    function createFontColor() {
        document.querySelector('.e-template.e-text-fontColor').appendChild(imageEditorObj.createElement('input', {
            id: 'imageEditor_textFont'
        }));
        renderColorPicker('font-color', 'imageEditor_textFont', tempShapeSettings && tempShapeSettings.color != null ? tempShapeSettings.color : '#fff', 'e-text-font-color', false, 'Palette', true, false, '.e-text-font-color', 'e-dropdownbtn-preview', 'e-ie-ddb-popup', 'imageEditor_fontColorBtn', '.e-text-fontColor.e-template .e-dropdownbtn-preview', presetColors);
    }
    function createShapeColor() {
        var parent = imageEditorObj;
        var id = 'imageEditor';
        document.querySelector('.e-template.e-fill').appendChild(parent.createElement('input', {
            id: id + '_shapeFill'
        }));
        var colors = ejs.base.extend({}, presetColors, {}, true);
        colors.custom[0] = '';
        document.querySelector('.e-template.e-stroke').appendChild(parent.createElement('input', {
            id: id + '_shapeStroke'
        }));
        renderColorPicker('shape-fill', 'imageEditor_shapeFill', '', 'e-shape-fill-color', true, 'Palette', true, false, '.e-shape-fill-color', 'e-dropdownbtn-preview', 'e-ie-ddb-popup', 'imageEditor_fillColorBtn', '.e-fill.e-template .e-dropdownbtn-preview', colors);
        renderColorPicker('shape-stroke', 'imageEditor_shapeStroke', '#fff', 'e-shape-stroke-color', false, 'Palette', true, false, '.e-shape-stroke-color', 'e-dropdownbtn-preview', 'e-ie-ddb-popup', 'imageEditor_borderColorBtn', '.e-stroke.e-template .e-dropdownbtn-preview', presetColors);
    }
    function createPenColor() {
        var parent = imageEditorObj;
        var id = 'imageEditor';
        document.querySelector('.e-template.e-pen-stroke-color').appendChild(parent.createElement('input', {
            id: id + '_pen_stroke'
        }));
        renderColorPicker('pen-color', 'imageEditor_pen_stroke', '#fff', 'e-pen-color', false, 'Palette', true, false, '.e-pen-color', 'e-dropdownbtn-preview', 'e-ie-ddb-popup', 'imageEditor_penColorBtn', '.e-pen-stroke-color.e-template .e-dropdownbtn-preview', presetColors);
    }
    function createCanvasFilter() {
        var inMemoryCanvas = document.createElement('canvas');
        var inMemoryContext = inMemoryCanvas.getContext('2d');
        inMemoryCanvas.width = imageData.width;
        inMemoryCanvas.height = imageData.height;
        inMemoryContext.putImageData(imageData, 0, 0);
        updateFilterCanvas('_defaultCanvas', 'default', inMemoryCanvas);
        updateFilterCanvas('_chromeCanvas', 'chrome', inMemoryCanvas);
        updateFilterCanvas('_coldCanvas', 'cold', inMemoryCanvas);
        updateFilterCanvas('_warmCanvas', 'warm', inMemoryCanvas);
        updateFilterCanvas('_grayscaleCanvas', 'grayscale', inMemoryCanvas);
        updateFilterCanvas('_sepiaCanvas', 'sepia', inMemoryCanvas);
        updateFilterCanvas('_invertCanvas', 'invert', inMemoryCanvas);
    }
    function updateFilterCanvas(selector, type, inMemoryCanvas) {
        var filter = document.querySelector('#imageEditor' + selector);
        if (filter) {
            var ctx = filter.getContext('2d');
            ctx = filter.getContext('2d');
            filter.style.width = '100px';
            filter.style.height = '100px';
            ctx.filter = imageEditorObj.getImageFilter(toPascalCase(type));
            ctx.drawImage(inMemoryCanvas, 0, 0, 300, 150);
        }
    }
    function keyDownEventHandler(e) {
        if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
            e.preventDefault();
        }
        switch (e.key) {
            case (e.ctrlKey && 's'):
                imageEditorObj.export();
                break;
            case (e.ctrlKey && 'z'):
                isTextEditing = false;
                refreshToolbar('main');
                break;
            case (e.ctrlKey && 'y'):
                isTextEditing = false;
                refreshToolbar('main');
                break;
            case 'Delete':
                if (ejs.base.isNullOrUndefined(activeObjIndex) && tempShapeSettings && tempShapeSettings.id ) {
                    activeObjIndex = tempShapeSettings.id;
                }
                if (activeObjIndex) {
                    imageEditorObj.deleteShape(activeObjIndex);
                }
                refreshToolbar('main');
                break;
            case 'Escape':
                if (currentToolbar === 'crop') {
                    imageEditorObj.clearSelection(true);
                    refreshToolbar('main');
                }
                break;
            case 'Enter':
                if (!e.target.closest('.e-textarea')) {
                    apply();
                    refreshToolbar('main');
                }
                break;
        }
    }
    function doubleClickEvent(e) {
        if (e.type === 'dblclick' && e.target.closest('.e-textarea')) {
            isTextEditing = true;
        }
    }
    function apply() {
        if (currentToolbar === 'crop') {
            imageEditorObj.crop();
        }
        else if (currentToolbar === 'pen') {
            if (activeObjIndex && activeObjIndex.split('_')[0] === 'pen') {
                tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
            }
            else {
                var shapeSettings = imageEditorObj.getShapeSettings();
                if (shapeSettings.length > 0) {
                    tempShapeSettings = shapeSettings[shapeSettings.length - 1].id.split('_')[0] === 'pen' ? shapeSettings[shapeSettings.length - 1] : null;
                    if (tempShapeSettings) {
                        imageEditorObj.selectShape(tempShapeSettings.id);
                    } else {
                        imageEditorObj.freeHandDraw(false);
                    }
                } else {
                    imageEditorObj.freeHandDraw(false);
                    return;
                }
            }
            if (tempShapeSettings) {
                imageEditorObj.updateShape(tempShapeSettings);
            }
        } else if (currentToolbar === 'freehanddraw' && tempShapeSettings) {
            imageEditorObj.updateShape(tempShapeSettings);
        } else if (currentToolbar !== 'filter' && activeObjIndex) {
            tempShapeSettings = imageEditorObj.getShapeSetting(activeObjIndex);
            imageEditorObj.updateShape(tempShapeSettings);
        }
        tempShapeSettings = null; activeObjIndex = null;
    }
};
