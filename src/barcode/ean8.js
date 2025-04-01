


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeEan8 = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Ean8',
        value: '11223344',
        invalid: invalidInputEan8,
    });
    barcodeEan8.appendTo('#barcode');


    var canShowErrorEan8 = false;
    var customFn = function (args) {
        if (canShowErrorEan8) {
            return false;
        }
        return true;
    };
    var options = {
        rules: {
            'password': { minLength: [customFn, 'Invalid input'] }
        }
    };
    var formObject = new ej.inputs.FormValidator('#form-element', options);
    function invalidInputEan8() {
        canShowErrorEan8 = true;
        formObject.validate();
    }

    var barcodeValueEan8 = new ej.inputs.TextBox({
        value: '11223344',
        change: function (args) {
            barcodeEan8.value = args.value.toString();
            displayTextEan8.vale= args.value.toString();
            
        }
    });
    barcodeValueEan8.appendTo('#barcodeValue');

    var barcodeWidthEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeEan8.width = args.value.toString();
        }
    });
    barcodeWidthEan8.appendTo('#width');
    
    var barcodeHeightEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeEan8.height = args.value.toString();
        }
    });
    barcodeHeightEan8.appendTo('#height');

    var textVisibilityEan8 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeEan8.displayText.visibility = args.checked;
        }
    });
    textVisibilityEan8.appendTo('#textVisibility');

    var svgModeEan8 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeEan8.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeEan8.appendTo('#svgMode');

    var bgColorEan8 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeEan8.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorEan8.appendTo('#bgColor');

    var foreColorEan8 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeEan8.foreColor = args.currentValue.hex;
        }
    });
    foreColorEan8.appendTo('#foreColor');

    var marginLeftEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeEan8.margin.left = args.value;
        }
    });
    marginLeftEan8.appendTo('#marginLeft');

    var marginRightEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeEan8.margin.right = args.value;
        }
    });
    marginRightEan8.appendTo('#MarginRight');

    var marginTopEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeEan8.margin.top = args.value;
        }
    });
    marginTopEan8.appendTo('#marginTop');



    var marginBottomEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeEan8.margin.bottom = args.value;
        }
    });
    marginBottomEan8.appendTo('#MarginBottom');

    var textmarginLeftEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeEan8.displayText.margin.left = args.value;
        }
    });
    textmarginLeftEan8.appendTo('#TextmarginLeft');

    var textMarginRightEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeEan8.displayText.margin.right = args.value;
        }
    });
    textMarginRightEan8.appendTo('#TextMarginRight');

    var textmarginTopEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeEan8.displayText.margin.top = args.value;
        }
    });
    textmarginTopEan8.appendTo('#TextmarginTop');



    var textMarginBottomEan8 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeEan8.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomEan8.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionEan8 = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentEan8 = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionEan8(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeEan8.displayText.position = (positionValue.value) ;
    }

    function updateAligntEan8(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeEan8.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionEan8 = new ej.dropdowns.DropDownList({
        dataSource: positionEan8,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionEan8(args.value.toString());
        }
    });
    textPositionEan8.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignEan8 = new ej.dropdowns.DropDownList({
        dataSource: alignmentEan8,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntEan8(args.value.toString());
        }
    });
    textAlignEan8.appendTo('#textAlignment');

    var displayTextEan8 = new ej.inputs.TextBox({
        value: '11223344',
        change: function (args) {
            barcodeEan8.displayText.text = args.value.toString();
        }
    });
    displayTextEan8.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn11');
    document.getElementById('downloadBtn11').onclick = function () {
        barcodeEan8.exportImage("Barcode", 'PNG');
    };
};

