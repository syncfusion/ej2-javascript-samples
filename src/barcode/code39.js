


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeCode39 = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Code39',
        value: 'SYNCFUSION',
        invalid: invalidInputCode39,
    });
    barcodeCode39.appendTo('#barcode');
    
    var canShowError39Value = false;
    var customFn =  function (args) {
        if (canShowError39Value) {
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
    function invalidInputCode39() {
        canShowError39Value = true;
        formObject.validate();
    }

    var barcodeValueCode39 = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode39.value = args.value.toString();
            displayTextCode39.value = args.value.toString();
        }
    });
    barcodeValueCode39.appendTo('#barcodeValue');

    var barcodeWidthCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCode39.width = args.value.toString();
        }
    });
    barcodeWidthCode39.appendTo('#width');
    
    var barcodeHeightCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode39.height = args.value.toString();
        }
    });
    barcodeHeightCode39.appendTo('#height');

    var textVisibilityCode39 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode39.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode39.appendTo('#textVisibility');

    var svgModeCode39 = new ej.buttons.CheckBox({
        checked: true,
        change:function (args) {
            barcodeCode39.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode39.appendTo('#svgMode');

    var bgColorCode39 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode39.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode39.appendTo('#bgColor');

    var foreColorCode39 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode39.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode39.appendTo('#foreColor');

    var marginLeftCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode39.margin.left = args.value;
        }
    });
    marginLeftCode39.appendTo('#marginLeft');

    var marginRightCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode39.margin.right = args.value;
        }
    });
    marginRightCode39.appendTo('#MarginRight');

    var marginTopCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode39.margin.top = args.value;
        }
    });
    marginTopCode39.appendTo('#marginTop');



    var marginBottomCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode39.margin.bottom = args.value;
        }
    });
    marginBottomCode39.appendTo('#MarginBottom');

    var textmarginLeftCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode39.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode39.appendTo('#TextmarginLeft');

    var textMarginRightCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode39.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode39.appendTo('#TextMarginRight');

    var textmarginTopCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode39.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode39.appendTo('#TextmarginTop');



    var textMarginBottomCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode39.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode39.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCode39 = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    //FontType Collection
    var alignmentCode39 = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode39(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCode39.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode39(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCode39.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode39 = new ej.dropdowns.DropDownList({
        dataSource: positionCode39,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode39(args.value.toString());
        }
    });
    textPositionCode39.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode39 = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode39,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode39(args.value.toString());
        }
    });
    textAlignCode39.appendTo('#textAlignment');

    var displayTextCode39 = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode39.displayText.text = args.value.toString();
        }
    });
    displayTextCode39.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn3');
    document.getElementById('downloadBtn3').onclick = function () {
        barcodeCode39.exportImage("Barcode", 'PNG');
    };
};

