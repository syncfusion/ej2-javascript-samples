


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeCode128B = new ej.barcodegenerator.BarcodeGenerator({
        type: 'Code128B',
        value: 'SYNCFUSION',
        width: '200px', height: '150px',
        mode: 'SVG',
        invalid: invalidInputCode128B,
    });
    barcodeCode128B.appendTo('#barcode');
    
    var canShowErrorCode128B = false;
    var customFn = function (args) {
        if (canShowErrorCode128B) {
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
    function invalidInputCode128B() {
        canShowErrorCode128B = true;
        formObject.validate();
    }

    var barcodeValueCode128B = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode128B.value = args.value.toString();
            displayTextCode128B.value = args.value.toString();
        }
    });
    barcodeValueCode128B.appendTo('#barcodeValue');

    var barcodeWidthCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCode128B.width = args.value.toString();
        }
    });
    barcodeWidthCode128B.appendTo('#width');
    
    var barcodeHeightCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode128B.height = args.value.toString();
        }
    });
    barcodeHeightCode128B.appendTo('#height');

    var textVisibilityCode128B = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128B.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode128B.appendTo('#textVisibility');

    var svgModeCode128B = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128B.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode128B.appendTo('#svgMode');

    var bgColorCode128B = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode128B.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode128B.appendTo('#bgColor');

    var foreColorCode128B = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode128B.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode128B.appendTo('#foreColor');

    var marginLeftCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128B.margin.left = args.value;
        }
    });
    marginLeftCode128B.appendTo('#marginLeft');

    var marginRightCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode128B.margin.right = args.value;
        }
    });
    marginRightCode128B.appendTo('#MarginRight');

    var marginTopCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128B.margin.top = args.value;
        }
    });
    marginTopCode128B.appendTo('#marginTop');



    var marginBottomCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128B.margin.bottom = args.value;
        }
    });
    marginBottomCode128B.appendTo('#MarginBottom');

    var textmarginLeftCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128B.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode128B.appendTo('#TextmarginLeft');

    var textMarginRightCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128B.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode128B.appendTo('#TextMarginRight');

    var textmarginTopCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128B.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode128B.appendTo('#TextmarginTop');



    var textMarginBottomCode128B = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128B.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode128B.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCode128B = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentCode128B = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode128B(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCode128B.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode128B(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCode128B.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode128B = new ej.dropdowns.DropDownList({
        dataSource: positionCode128B,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode128B(args.value.toString());
        }
    });
    textPositionCode128B.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode128B = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode128B,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode128B(args.value.toString());
        }
    });
    textAlignCode128B.appendTo('#textAlignment');

    var displayTextCode128B = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode128B.displayText.text = args.value.toString();
        }
    });
    displayTextCode128B.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn8');
    document.getElementById('downloadBtn8').onclick = function () {
        barcodeCode128B.exportImage("Barcode", 'PNG');
    };
};

