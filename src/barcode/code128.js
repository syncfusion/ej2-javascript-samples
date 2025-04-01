


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeCode128 = new ej.barcodegenerator.BarcodeGenerator({
        type: 'Code128',
        value: 'SYNCFUSION',
        width: '200px', height: '150px',
        mode: 'SVG',
        invalid: invalidInputCode128,
    });
    barcodeCode128.appendTo('#barcode');
    
    var canShowError128 = false;
    var customFn = function (args){
        if (canShowError128) {
            return false;
        }
        return true;
    };
    var options = {
        rules: {
            'password': { minLength: [customFn, 'Invalid input'] }
        },
        
    };
    var formObject = new ej.inputs.FormValidator('#form-element', options);
    function invalidInputCode128() {
        canShowError128 = true;
        formObject.validate();
    }

    var barcodeValueCode128 = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode128.value = args.value.toString();
            displayTextCode128.value = args.value.toString();
        }
    });
    barcodeValueCode128.appendTo('#barcodeValue');

    var barcodeWidthCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args){
            barcodeCode128.width = args.value.toString();
        }
    });
    barcodeWidthCode128.appendTo('#width');
    
    var barcodeHeightCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode128.height = args.value.toString();
        }
    });
    barcodeHeightCode128.appendTo('#height');

    var textVisibilityCode128 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode128.appendTo('#textVisibility');

    var svgModeCode128 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode128.appendTo('#svgMode');

    var bgColorCode128 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode128.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode128.appendTo('#bgColor');

    var foreColorCode128 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode128.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode128.appendTo('#foreColor');

    var marginLeftCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128.margin.left = args.value;
        }
    });
    marginLeftCode128.appendTo('#marginLeft');

    var marginRightCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode128.margin.right = args.value;
        }
    });
    marginRightCode128.appendTo('#MarginRight');

    var marginTopCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128.margin.top = args.value;
        }
    });
    marginTopCode128.appendTo('#marginTop');



    var marginBottomCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128.margin.bottom = args.value;
        }
    });
    marginBottomCode128.appendTo('#MarginBottom');

    var textmarginLeftCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode128.appendTo('#TextmarginLeft');

    var textMarginRightCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode128.appendTo('#TextMarginRight');

    var textmarginTopCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode128.appendTo('#TextmarginTop');



    var textMarginBottomCode128 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode128.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCode128 = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    //FontType Collection
    var alignmentCode128 = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode128(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCode128.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode128(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCode128.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode128 = new ej.dropdowns.DropDownList({
        dataSource: positionCode128,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode128(args.value.toString());
        }
    });
    textPositionCode128.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode128 = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode128,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode128(args.value.toString());
        }
    });
    textAlignCode128.appendTo('#textAlignment');

    var displayTextCode128 = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode128.displayText.text = args.value.toString();
        }
    });
    displayTextCode128.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn6');
    document.getElementById('downloadBtn6').onclick = function () {
        barcodeCode128.exportImage("Barcode", 'PNG');
    };
};

