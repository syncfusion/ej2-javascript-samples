



this.default = function () {
 
    //Initializes barcode control
    var barcodeCode128A = new ej.barcodegenerator.BarcodeGenerator({
        type: 'Code128A',
        value: 'SYNCFUSION',
        width: '200px', height: '150px',
        mode: 'SVG',
        invalid: invalidInputCode128A,
    });
    barcodeCode128A.appendTo('#barcode_code128A');
    
    var canShowErrorCode128A = false;
    var customFn = function (args) {
        if (canShowErrorCode128A) {
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
    function invalidInputCode128A() {
        canShowErrorCode128A = true;
        formObject.validate();
    }

    var barcodeValueCode128A = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode128A.value = args.value.toString();
            displayTextCode128A = args.value.toString();
        }
    });
    barcodeValueCode128A.appendTo('#barcodeValue_code128A');

    var input = document.getElementById("barcodeValue_code128A");
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    var barcodeWidthCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcodeCode128A.width = args.value.toString();
        }
    });
    barcodeWidthCode128A.appendTo('#width_code128A');
    
    var barcodeHeightCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcodeCode128A.height = args.value.toString();
        }
    });
    barcodeHeightCode128A.appendTo('#height_code128A');

    var textVisibilityCode128A = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128A.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode128A.appendTo('#textVisibility_code128A');

    var svgModeCode128A = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcodeCode128A.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode128A.appendTo('#svgMode_code128A');

    var bgColorCode128A = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcodeCode128A.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode128A.appendTo('#bgColor_code128A');

    var foreColorCode128A = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode128A.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode128A.appendTo('#foreColor_code128A');

    var marginLeftCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128A.margin.left = args.value;
        }
    });
    marginLeftCode128A.appendTo('#marginLeft_code128A');

    var marginRightCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode128A.margin.right = args.value;
        }
    });
    marginRightCode128A.appendTo('#MarginRight_code128A');

    var marginTopCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128A.margin.top = args.value;
        }
    });
    marginTopCode128A.appendTo('#marginTop_code128A');



    var marginBottomCode128A= new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode128A.margin.bottom = args.value;
        }
    });
    marginBottomCode128A.appendTo('#MarginBottom_code128A');

    var textmarginLeftCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128A.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode128A.appendTo('#TextmarginLeft_code128A');

    var textMarginRightCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode128A.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode128A.appendTo('#TextMarginRight_code128A');

    var textmarginTopCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128A.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode128A.appendTo('#TextmarginTop_code128A');



    var textMarginBottomCode128A = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode128A.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode128A.appendTo('#TextMarginBottom_code128A');


    //FontType Collection
    var positionCode128A = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    //FontType Collection
    var alignmentCode128A = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];

    function updatePositionCode128A(value) {
        var positionValue = ((document.getElementById('textPosition_code128A')).ej2_instances[0]);
        barcodeCode128A.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode128A(value) {
        var positionValue = ((document.getElementById('textAlignment_code128A')).ej2_instances[0]);
        barcodeCode128A.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode128A = new ej.dropdowns.DropDownList({
        dataSource: positionCode128A,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode128A(args.value.toString());
        }
    });
    textPositionCode128A.appendTo('#textPosition_code128A');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode128A = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode128A,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode128A(args.value.toString());
        }
    });
    textAlignCode128A.appendTo('#textAlignment_code128A');

    var displayTextCode128A = new ej.inputs.TextBox({
        value: 'SYNCFUSION',
        change: function (args) {
            barcodeCode128A.displayText.text = args.value.toString();
        }
    });
    displayTextCode128A.appendTo('#displayText_code128A');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn7_code128A');
    document.getElementById('downloadBtn7_code128A').onclick = function () {
        barcodeCode128A.exportImage("Barcode", 'PNG');
    };
};

