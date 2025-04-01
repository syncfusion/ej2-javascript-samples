


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeCode93 = new ej.barcodegenerator.BarcodeGenerator({
        type: 'Code93',
        value: '01234567',
        width: '200px', height: '150px',
        mode: 'SVG',
        invalid: invalidInputCode93,
    });
    barcodeCode93.appendTo('#barcode');
    
    var canShowError93 = false;
    var customFn =  function (args) {
        if (canShowError93) {
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
    function invalidInputCode93() {
        canShowError93 = true;
        formObject.validate();
    }

    var barcodeValueCode93 = new ej.inputs.TextBox({
        value: '01234567',
        change: function (args) {
            barcodeCode93.value = args.value.toString();
            displayTextCode93.value = args.value.toString();
        }
    });
    barcodeValueCode93.appendTo('#barcodeValue');

    var barcodeWidthCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCode93.width = args.value.toString();
        }
    });
    barcodeWidthCode93.appendTo('#width');
    
    var barcodeHeightCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode93.height = args.value.toString();
        }
    });
    barcodeHeightCode93.appendTo('#height');

    var textVisibilityCode93 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode93.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode93.appendTo('#textVisibility');

    var svgModeCode93 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode93.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode93.appendTo('#svgMode');

    var bgColorCode93 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode93.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode93.appendTo('#bgColor');

    var foreColorCode93 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode93.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode93.appendTo('#foreColor');

    var marginLeftCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode93.margin.left = args.value;
        }
    });
    marginLeftCode93.appendTo('#marginLeft');

    var marginRightCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode93.margin.right = args.value;
        }
    });
    marginRightCode93.appendTo('#MarginRight');

    var marginTopCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode93.margin.top = args.value;
        }
    });
    marginTopCode93.appendTo('#marginTop');



    var marginBottomCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode93.margin.bottom = args.value;
        }
    });
    marginBottomCode93.appendTo('#MarginBottom');

    var textmarginLeftCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode93.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode93.appendTo('#TextmarginLeft');

    var textMarginRightCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode93.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode93.appendTo('#TextMarginRight');

    var textmarginTopCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode93.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode93.appendTo('#TextmarginTop');



    var textMarginBottomCode93 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode93.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode93.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCode93 = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    //FontType Collection
    var alignmentCode93 = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode93(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCode93.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode93(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCode93.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode93 = new ej.dropdowns.DropDownList({
        dataSource: positionCode93,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode93(args.value.toString());
        }
    });
    textPositionCode93.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode93 = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode93,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode93(args.value.toString());
        }
    });
    textAlignCode93.appendTo('#textAlignment');

    var displayTextCode93 = new ej.inputs.TextBox({
        value: '01234567',
        change: function (args) {
            barcodeCode93.displayText.text = args.value.toString();
        }
    });
    displayTextCode93.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn5');
    document.getElementById('downloadBtn5').onclick = function () {
        barcodeCode93.exportImage("Barcode", 'PNG');
    };
};

