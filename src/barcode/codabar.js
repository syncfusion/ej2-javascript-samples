

 /* tslint:disable */

this.default = function () {
 
    //Initializes barcode control
    var barcodeCodabar = new ej.barcodegenerator.BarcodeGenerator({
        width: '200px',
        height: '150px',
        mode: 'SVG',
        invalid: invalidInputCodabar,
        type: 'Codabar',
        value: '123456789',
    });
    barcodeCodabar.appendTo('#barcode');
    
    var canShowErrorCodabar = false;
    var customFn = function (args) {
        if (canShowErrorCodabar) {
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
    function invalidInputCodabar() {
        canShowErrorCodabar = true;
        formObject.validate();
    }

    var barcodeValueCodabar = new ej.inputs.TextBox({
        value: '123456789',
        change: function (args) {
            barcodeCodabar.value = args.value.toString();
            barcodeCodabar.value = args.value.toString();
        }
    });
    barcodeValueCodabar.appendTo('#barcodeValue');

    var barcodeWidthCodabar = new ej.inputs.NumericTextBox({
        width:100,
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCodabar.width = args.value.toString();
        }
    });
    barcodeWidthCodabar.appendTo('#width');
    
    var barcodeHeightCodabar = new ej.inputs.NumericTextBox({
        width:100,
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCodabar.height = args.value.toString();
        }
    });
    barcodeHeightCodabar.appendTo('#height');

    var textVisibilityCodabar = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCodabar.displayText.visibility = args.checked;
        }
    });
    textVisibilityCodabar.appendTo('#textVisibility');

    var svgModeCodabar = new ej.buttons.CheckBox({
        checked: true,
        change:function (args) {
            barcodeCodabar.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCodabar.appendTo('#svgMode');

    var bgColorCodabar = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args){
            barcodeCodabar.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCodabar.appendTo('#bgColor');

    var foreColorCodabar = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCodabar.foreColor = args.currentValue.hex;
        }
    });
    foreColorCodabar.appendTo('#foreColor');

    var marginLeftCodabar = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCodabar.margin.left = args.value;
        }
    });
    marginLeftCodabar.appendTo('#marginLeft');

    var marginRightCodabar = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCodabar.margin.right = args.value;
        }
    });
    marginRightCodabar.appendTo('#MarginRight');

    var marginTopCodabar = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change:function (args) {
            barcodeCodabar.margin.top = args.value;
        }
    });
    marginTopCodabar.appendTo('#marginTop');



    var marginBottomCodabar = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change:function (args){
            barcodeCodabar.margin.bottom = args.value;
        }
    });
    marginBottomCodabar.appendTo('#MarginBottom');

    var textmarginLeftCodabar = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCodabar.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCodabar.appendTo('#TextmarginLeft');

    var textMarginRightCodabar = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCodabar.displayText.margin.right = args.value;
        }
    });
    textMarginRightCodabar.appendTo('#TextMarginRight');

    var textmarginTopCodabar = new ej.inputs.NumericTextBox({
        width:100,
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCodabar.displayText.margin.top = args.value;
        }
    });
    textmarginTopCodabar.appendTo('#TextmarginTop');



    var textMarginBottomCodabar = new ej.inputs.NumericTextBox({
        width:100,
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCodabar.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCodabar.appendTo('#TextMarginBottom');


    //FontType Collection
    var positionCodabar = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignmentCodabar = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCodabar(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeCodabar.displayText.position = (positionValue.value) ;
    }

    function updateAligntCodabar(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeCodabar.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCodabar = new ej.dropdowns.DropDownList({
        dataSource: positionCodabar,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change:function (args){
            updatePositionCodabar(args.value.toString());
        }
    });
    textPositionCodabar.appendTo('#textPosition');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCodabar = new ej.dropdowns.DropDownList({
        dataSource: alignmentCodabar,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args){
            updateAligntCodabar(args.value.toString());
        }
    });
    textAlignCodabar.appendTo('#textAlignment');

    var displayTextCodabar = new ej.inputs.TextBox({
        value: '123456789',
        change: function (args) {
            barcodeCodabar.displayText.text = args.value.toString();
        }
    });
    displayTextCodabar.appendTo('#displayText');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn1');
    document.getElementById('downloadBtn1').onclick = function () {
        barcodeCodabar.exportImage("Barcode", 'PNG');
    };
};

