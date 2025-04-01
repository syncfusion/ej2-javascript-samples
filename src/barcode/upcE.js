


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeUpcE = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px', height: '150px',
        type: 'UpcE',
        value: '123456',
        mode: 'SVG',
        invalid: invalidInputUpcE,
    });
    barcodeUpcE.appendTo('#barcode');
    
    var canShowErrorupcE = false;
    var customFn = function (args) {
        if (canShowErrorupcE) {
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
    function invalidInputUpcE() {
        canShowErrorupcE = true;
        formObject.validate();
    }

    var barcodeValueUpcE = new ej.inputs.TextBox({
        value: '123456',
        change: function (args) {
            barcodeUpcE.value = args.value.toString();
            displayTextUpcE.value = args.value.toString();
        }
    });
    barcodeValueUpcE.appendTo('#barcodeValue');

    var barcodeWidthUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeUpcE.width = args.value.toString();
        }
    });
    barcodeWidthUpcE.appendTo('#width');
    
    var barcodeHeightUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeUpcE.height = args.value.toString();
        }
    });
    barcodeHeightUpcE.appendTo('#height');

    var textVisibilityUpcE = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeUpcE.displayText.visibility = args.checked;
        }
    });
    textVisibilityUpcE.appendTo('#textVisibility');

    var svgModeUpcE = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeUpcE.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeUpcE.appendTo('#svgMode');

    var bgColorUpcE = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeUpcE.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorUpcE.appendTo('#bgColor');

    var foreColorUpcE = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeUpcE.foreColor = args.currentValue.hex;
        }
    });
    foreColorUpcE.appendTo('#foreColor');

    var marginLeftUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeUpcE.margin.left = args.value;
        }
    });
    marginLeftUpcE.appendTo('#marginLeft');

    var marginRightUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeUpcE.margin.right = args.value;
        }
    });
    marginRightUpcE.appendTo('#MarginRight');

    var marginTopUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeUpcE.margin.top = args.value;
        }
    });
    marginTopUpcE.appendTo('#marginTop');



    var marginBottomUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeUpcE.margin.bottom = args.value;
        }
    });
    marginBottomUpcE.appendTo('#MarginBottom');

    var textmarginLeftUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeUpcE.displayText.margin.left = args.value;
        }
    });
    textmarginLeftUpcE.appendTo('#TextmarginLeft');

    var textMarginRightUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeUpcE.displayText.margin.right = args.value;
        }
    });
    textMarginRightUpcE.appendTo('#TextMarginRight');

    var textmarginTopUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeUpcE.displayText.margin.top = args.value;
        }
    });
    textmarginTopUpcE.appendTo('#TextmarginTop');



    var textMarginBottomUpcE = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeUpcE.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomUpcE.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionUpcE = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentUpcE = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionUpcE(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeUpcE.displayText.position = (positionValue.value) ;
    }

    function updateAligntUpcE(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeUpcE.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionUpcE = new ej.dropdowns.DropDownList({
        dataSource: positionUpcE,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionUpcE(args.value.toString());
        }
    });
    textPositionUpcE.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignUpcE = new ej.dropdowns.DropDownList({
        dataSource: alignmentUpcE,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntUpcE(args.value.toString());
        }
    });
    textAlignUpcE.appendTo('#textAlignment');

    var displayTextUpcE = new ej.inputs.TextBox({
        value: '123456',
        change: function (args) {
            barcodeUpcE.displayText.text = args.value.toString();
        }
    });
    displayTextUpcE.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn14');
    document.getElementById('downloadBtn14').onclick = function () {
        barcodeUpcE.exportImage("Barcode", 'PNG');
    };
};

