


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
    barcodeCode39.appendTo('#barcode_code39');
    
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
    barcodeValueCode39.appendTo('#barcodeValue_code39');

    var input = document.getElementById("barcodeValue_code39");
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    var barcodeWidthCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCode39.width = args.value.toString();
        }
    });
    barcodeWidthCode39.appendTo('#width_code39');
    
    var barcodeHeightCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode39.height = args.value.toString();
        }
    });
    barcodeHeightCode39.appendTo('#height_code39');

    var textVisibilityCode39 = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode39.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode39.appendTo('#textVisibility_code39');

    var svgModeCode39 = new ej.buttons.CheckBox({
        checked: true,
        change:function (args) {
            barcodeCode39.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode39.appendTo('#svgMode_code39');

    var bgColorCode39 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode39.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode39.appendTo('#bgColor_code39');

    var foreColorCode39 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode39.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode39.appendTo('#foreColor_code39');

    var marginLeftCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode39.margin.left = args.value;
        }
    });
    marginLeftCode39.appendTo('#marginLeft_code39');

    var marginRightCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode39.margin.right = args.value;
        }
    });
    marginRightCode39.appendTo('#MarginRight_code39');

    var marginTopCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode39.margin.top = args.value;
        }
    });
    marginTopCode39.appendTo('#marginTop_code39');



    var marginBottomCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode39.margin.bottom = args.value;
        }
    });
    marginBottomCode39.appendTo('#MarginBottom_code39');

    var textmarginLeftCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode39.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode39.appendTo('#TextmarginLeft_code39');

    var textMarginRightCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode39.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode39.appendTo('#TextMarginRight_code39');

    var textmarginTopCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode39.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode39.appendTo('#TextmarginTop_code39');



    var textMarginBottomCode39 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode39.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode39.appendTo('#TextMarginBottom_code39');


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
        var positionValue = ((document.getElementById('textPosition_code39')).ej2_instances[0]);
        barcodeCode39.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode39(value) {
        var positionValue = ((document.getElementById('textAlignment_code39')).ej2_instances[0]);
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
    textPositionCode39.appendTo('#textPosition_code39');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode39 = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode39,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode39(args.value.toString());
        }
    });
    textAlignCode39.appendTo('#textAlignment_code39');

    var displayTextCode39 = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode39.displayText.text = args.value.toString();
        }
    });
    displayTextCode39.appendTo('#displayText_code39');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn3_code39');
    document.getElementById('downloadBtn3_code39').onclick = function () {
        barcodeCode39.exportImage("Barcode", 'PNG');
    };
};

