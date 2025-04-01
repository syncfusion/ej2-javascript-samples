

 /* tslint:disable */

this.default = function () {
 
    //Initializes barcode control
    var barcodeEan13 = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px', height: '150px',
        type: 'Ean13',
        value: '9735940564824',
        mode: 'SVG',
        invalid: invalidInputEan13,
    });
    barcodeEan13.appendTo('#barcode');
    
    var canShowErrorEan13 = false;
    var customFn = function (args) {
        if (canShowErrorEan13) {
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
    function invalidInputEan13() {
        canShowErrorEan13 = true;
        formObject.validate();
    }

    var barcodeValueEan13 = new ej.inputs.TextBox({
        value: '9735940564824',
        change: function (args) {
            barcodeEan13.value = args.value.toString();
            displayTextEan13.value = args.value.toString();
        }
    });
    barcodeValueEan13.appendTo('#barcodeValue');
    var barcodeWidthEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeEan13.width = args.value.toString();
        }
    });
    barcodeWidthEan13.appendTo('#width');
    
    var barcodeHeightEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeEan13.height = args.value.toString();
        }
    });
    barcodeHeightEan13.appendTo('#height');

    var textVisibilityEan13 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeEan13.displayText.visibility = args.checked;
        }
    });
    textVisibilityEan13.appendTo('#textVisibility');

    var svgModeEan13 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeEan13.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeEan13.appendTo('#svgMode');

    var bgColorEan13 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeEan13.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorEan13.appendTo('#bgColor');

    var foreColorEan13 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeEan13.foreColor = args.currentValue.hex;
        }
    });
    foreColorEan13.appendTo('#foreColor');

    var marginLeftEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeEan13.margin.left = args.value;
        }
    });
    marginLeftEan13.appendTo('#marginLeft');

    var marginRightEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeEan13.margin.right = args.value;
        }
    });
    marginRightEan13.appendTo('#MarginRight');

    var marginTopEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeEan13.margin.top = args.value;
        }
    });
    marginTopEan13.appendTo('#marginTop');



    var marginBottomEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeEan13.margin.bottom = args.value;
        }
    });
    marginBottomEan13.appendTo('#MarginBottom');

    var textmarginLeftEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeEan13.displayText.margin.left = args.value;
        }
    });
    textmarginLeftEan13.appendTo('#TextmarginLeft');

    var textMarginRightEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeEan13.displayText.margin.right = args.value;
        }
    });
    textMarginRightEan13.appendTo('#TextMarginRight');

    var textmarginTopEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeEan13.displayText.margin.top = args.value;
        }
    });
    textmarginTopEan13.appendTo('#TextmarginTop');



    var textMarginBottomEan13 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeEan13.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomEan13.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionEan13 = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentEan13 = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionEan13(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeEan13.displayText.position = (positionValue.value) ;
    }

    function updateAligntEan13(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeEan13.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionEan13 = new ej.dropdowns.DropDownList({
        dataSource: positionEan13,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionEan13(args.value.toString());
        }
    });
    textPositionEan13.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignEan13 = new ej.dropdowns.DropDownList({
        dataSource: alignmentEan13,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntEan13(args.value.toString());
        }
    });
    textAlignEan13.appendTo('#textAlignment');

    var displayTextEan13 = new ej.inputs.TextBox({
        value: '9735940564824',
        change: function (args) {
            barcodeEan13.displayText.text = args.value.toString();
        }
    });
    displayTextEan13.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn12');
    document.getElementById('downloadBtn12').onclick = function () {
        barcodeEan13.exportImage("Barcode", 'PNG');
    };
};

