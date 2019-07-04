


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeQrCode = new ej.barcodegenerator.QRCodeGenerator({
        width: '200px',
        height: '150px',
        mode: 'SVG',
        type: 'QRCode',
        displayText: { visibility: false },
        invalid: invalidInputQrCode,
        value: 'Syncfusion',
    });
    barcodeQrCode.appendTo('#barcode');
    var canShowQrCode = false;
    var customFn = function (args) {
        if (canShowQrCode) {
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
    function invalidInputQrCode() {
        canShowQrCode = true;
        formObject.validate();
    }
    
    var barcodeValue = new ej.inputs.TextBox({
        value: 'Syncfusion',
        change: function (args) {
            barcodeQrCode.value = args.value.toString();
            displayTextQrCode.value = args.value.toString();
        }
    });
    barcodeValue.appendTo('#barcodeValue');

    var errorCorrectionLevel = [
        { value: '7', text: 'Low' },
        { value: '15', text: 'Medium' },
        { value: '25', text: 'Quartile' },
        { value: '30', text: 'High' },
    ];
    var barcodeWidthQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeQrCode.width = args.value.toString();
        }
    });
    barcodeWidthQrCode.appendTo('#width');
    
    var barcodeHeightQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change:function (args) {
            barcodeQrCode.height = args.value.toString();
        }
    });
    barcodeHeightQrCode.appendTo('#height');

    var textVisibilityQrCode = new ej.buttons.CheckBox({
        checked: true,
        change:function (args) {
            barcodeQrCode.displayText.visibility = args.checked;
        }
    });
    textVisibilityQrCode.appendTo('#textVisibility');

    var svgModeQrCode = new ej.buttons.CheckBox({
        checked: true,
        change:function (args) {
            barcodeQrCode.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeQrCode.appendTo('#svgMode');

    var bgColorQrCode = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change:function (args) {
            barcodeQrCode.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorQrCode.appendTo('#bgColor');

    var foreColorQrCode = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeQrCode.foreColor = args.currentValue.hex;
        }
    });
    foreColorQrCode.appendTo('#foreColor');

    var marginLeftQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeQrCode.margin.left = args.value;
        }
    });
    marginLeftQrCode.appendTo('#marginLeft');

    var marginRightQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeQrCode.margin.right = args.value;
        }
    });
    marginRightQrCode.appendTo('#MarginRight');

    var marginTopQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeQrCode.margin.top = args.value;
        }
    });
    marginTopQrCode.appendTo('#marginTop');



    var marginBottomQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeQrCode.margin.bottom = args.value;
        }
    });
    marginBottomQrCode.appendTo('#MarginBottom');

    var textmarginLeftQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeQrCode.displayText.margin.left = args.value;
        }
    });
    textmarginLeftQrCode.appendTo('#TextmarginLeft');

    var textMarginRightQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeQrCode.displayText.margin.right = args.value;
        }
    });
    textMarginRightQrCode.appendTo('#TextMarginRight');

    var textmarginTopQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeQrCode.displayText.margin.top = args.value;
        }
    });
    textmarginTopQrCode.appendTo('#TextmarginTop');



    var textMarginBottomQrCode = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeQrCode.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomQrCode.appendTo('#TextMarginBottom');


    var version = new ej.inputs.NumericTextBox({
        format: '###.##',
        min: 1, max: 40,
        value: 1, step: 1,
        change: function (args) {
            barcodeQrCode.version = (Number(args.value));
        }
    });
    version.appendTo('#Version');


    //FontType Collection
    var positionQrCode = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    
    var alignmentQrCode = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionQrCode(value) {
        var positionValue = ((document.getElementById('textPosition')).ej2_instances[0]);
        barcodeQrCode.displayText.position = (positionValue.value) ;
    }

    function updateAligntQrCode(value) {
        var positionValue = ((document.getElementById('textAlignment')).ej2_instances[0]);
        barcodeQrCode.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionQrCode = new ej.dropdowns.DropDownList({
        dataSource: positionQrCode,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionQrCode(args.value.toString());
        }
    });
    textPositionQrCode.appendTo('#textPosition');

    var errorCorrectionQrCode= new ej.dropdowns.DropDownList({
        dataSource: errorCorrectionLevel,
        value: 'Medium',
        change: function (args) {
            barcodeQrCode.errorCorrectionLevel = (Number(args.itemData.value));
        }
    });
    errorCorrectionQrCode.appendTo('#errorCorrection');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignQrCode = new ej.dropdowns.DropDownList({
        dataSource: alignmentQrCode,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntQrCode(args.value.toString());
        }
    });
    textAlignQrCode.appendTo('#textAlignment');

    var displayTextQrCode = new ej.inputs.TextBox({
        value: '123456',
        change: function (args) {
            barcodeQrCode.displayText.text = args.value.toString();
        }
    });
    displayTextQrCode.appendTo('#displayText');
  
};

