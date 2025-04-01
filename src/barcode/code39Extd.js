

 /* tslint:disable */

this.default = function () {
 
    //Initializes barcode control
    var barcodeCode39Extension = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'Code39Extension',
        value: 'SYNCFUSION',
        invalid: invalidInputCode39Extension,
    });
    barcodeCode39Extension.appendTo('#barcode');
    
    var canShowError39 = false;
    var customFn =  function (args) {
        if (canShowError39) {
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
    function invalidInputCode39Extension() {
        canShowError39 = true;
        formObject.validate();
    }

    var barcodeValueCode39Extension = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode39Extension.value = args.value.toString();
            displayTextCode39Extension.value = args.value.toString();
        }
    });
    barcodeValueCode39Extension.appendTo('#barcodeValue');

    var barcodeWidthCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change:  function (args) {
            barcodeCode39Extension.width = args.value.toString();
        }
    });
    barcodeWidthCode39Extension.appendTo('#width');
    
    var barcodeHeightCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change:  function (args) {
            barcodeCode39Extension.height = args.value.toString();
        }
    });
    barcodeHeightCode39Extension.appendTo('#height');

    var textVisibilityCode39Extension = new ej.buttons.CheckBox({
        checked: true,
        change:  function (args) {
            barcodeCode39Extension.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode39Extension.appendTo('#textVisibility');

    var svgModeCode39Extension = new ej.buttons.CheckBox({
        checked: true,
        change:  function (args) {
            barcodeCode39Extension.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode39Extension.appendTo('#svgMode');

    var bgColorCode39Extension = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change:  function (args) {
            barcodeCode39Extension.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode39Extension.appendTo('#bgColor');

    var foreColorCode39Extension = new  ej.inputs.ColorPicker({
        value: '#000000',
        change:  function (args) {
            barcodeCode39Extension.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode39Extension.appendTo('#foreColor');

    var marginLeftCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change:  function (args) {
            barcodeCode39Extension.margin.left = args.value;
        }
    });
    marginLeftCode39Extension.appendTo('#marginLeft');

    var marginRightCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change:  function (args) {
            barcodeCode39Extension.margin.right = args.value;
        }
    });
    marginRightCode39Extension.appendTo('#MarginRight');

    var marginTopCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change:  function (args) {
            barcodeCode39Extension.margin.top = args.value;
        }
    });
    marginTopCode39Extension.appendTo('#marginTop');



    var marginBottomCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change:  function (args) {
            barcodeCode39Extension.margin.bottom = args.value;
        }
    });
    marginBottomCode39Extension.appendTo('#MarginBottom');

    var textmarginLeftCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change:  function (args) {
            barcodeCode39Extension.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode39Extension.appendTo('#TextmarginLeft');

    var textMarginRightCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change:  function (args) {
            barcodeCode39Extension.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode39Extension.appendTo('#TextMarginRight');

    var textmarginTopCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change:  function (args) {
            barcodeCode39Extension.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode39Extension.appendTo('#TextmarginTop');



    var textMarginBottomCode39Extension = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change:  function (args) {
            barcodeCode39Extension.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode39Extension.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCode39Extension = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    //FontType Collection
    var alignmentCode39Extension = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode39Extension(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCode39Extension.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode39Extension(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCode39Extension.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode39Extension = new ej.dropdowns.DropDownList({
        dataSource: positionCode39Extension,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change:  function (args) {
            updatePositionCode39Extension(args.value.toString());
        }
    });
    textPositionCode39Extension.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode39Extension = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode39Extension,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode39Extension(args.value.toString());
        }
    });
    textAlignCode39Extension.appendTo('#textAlignment');

    var displayTextCode39Extension = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change:  function (args) {
            barcodeCode39Extension.displayText.text = args.value.toString();
        }
    });
    displayTextCode39Extension.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn4');
    document.getElementById('downloadBtn4').onclick = function () {
        barcodeCode39Extension.exportImage("Barcode", 'PNG');
    };
};

