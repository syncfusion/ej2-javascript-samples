

 /* tslint:disable */

this.default = function () {
 
    //Initializes barcode control
    var barcodeUpcA = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px', height: '150px',
        type: 'UpcA',
        mode:'SVG',
        value: '72527273070',
        invalid: invalidInputUpcA,
    });
    barcodeUpcA.appendTo('#barcode');
    
    var canShowErrorupcA = false;
    var customFn = function (args) {
        if (canShowErrorupcA) {
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
    function invalidInputUpcA() {
        canShowErrorupcA = true;
        formObject.validate();
    }

    var barcodeValueUpcA = new ej.inputs.TextBox({
        value: '72527273070',
        change: function (args) {
            barcodeUpcA.value = args.value.toString();
            displayTextUpcA.value = args.value.toString();
        }
    });
    barcodeValueUpcA.appendTo('#barcodeValue');

    var barcodeWidthUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeUpcA.width = args.value.toString();
        }
    });
    barcodeWidthUpcA.appendTo('#width');
    
    var barcodeHeightUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeUpcA.height = args.value.toString();
        }
    });
    barcodeHeightUpcA.appendTo('#height');

    var textVisibilityUpcA = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeUpcA.displayText.visibility = args.checked;
        }
    });
    textVisibilityUpcA.appendTo('#textVisibility');

    var svgModeUpcA = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeUpcA.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeUpcA.appendTo('#svgMode');

    var bgColorUpcA = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeUpcA.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorUpcA.appendTo('#bgColor');

    var foreColorUpcA = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeUpcA.foreColor = args.currentValue.hex;
        }
    });
    foreColorUpcA.appendTo('#foreColor');

    var marginLeftUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeUpcA.margin.left = args.value;
        }
    });
    marginLeftUpcA.appendTo('#marginLeft');

    var marginRightUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeUpcA.margin.right = args.value;
        }
    });
    marginRightUpcA.appendTo('#MarginRight');

    var marginTopUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeUpcA.margin.top = args.value;
        }
    });
    marginTopUpcA.appendTo('#marginTop');



    var marginBottomUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeUpcA.margin.bottom = args.value;
        }
    });
    marginBottomUpcA.appendTo('#MarginBottom');

    var textmarginLeftUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeUpcA.displayText.margin.left = args.value;
        }
    });
    textmarginLeftUpcA.appendTo('#TextmarginLeft');

    var textMarginRightUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeUpcA.displayText.margin.right = args.value;
        }
    });
    textMarginRightUpcA.appendTo('#TextMarginRight');

    var textmarginTopUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeUpcA.displayText.margin.top = args.value;
        }
    });
    textmarginTopUpcA.appendTo('#TextmarginTop');



    var textMarginBottomUpcA = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeUpcA.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomUpcA.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionUpcA = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentUpcA = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionUpcA(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeUpcA.displayText.position = (positionValue.value) ;
    }

    function updateAligntUpcA(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeUpcA.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionUpcA = new ej.dropdowns.DropDownList({
        dataSource: positionUpcA,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionUpcA(args.value.toString());
        }
    });
    textPositionUpcA.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignUpcA = new ej.dropdowns.DropDownList({
        dataSource: alignmentUpcA,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntUpcA(args.value.toString());
        }
    });
    textAlignUpcA.appendTo('#textAlignment');

    var displayTextUpcA = new ej.inputs.TextBox({
        value: '72527273070',
        change: function (args) {
            barcodeUpcA.displayText.text = args.value.toString();
        }
    });
    displayTextUpcA.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn15');
    document.getElementById('downloadBtn15').onclick = function () {
        barcodeUpcA.exportImage("Barcode", 'PNG');
    };
};

