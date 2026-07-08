


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcode = new ej.barcodegenerator.DataMatrixGenerator({
        mode: 'SVG',
        value: 'Syncfusion',
        displayText: { visibility: false },
        height: 200, width: 200,
    });
    barcode.appendTo('#barcode_datamatrix');
    var canShowError = false;
    var customFn = function (args) {
        if (canShowError) {
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
    function invalidInput() {
        canShowError = true;
        formObject.validate();
    }
    
    var barcodeValue = new ej.inputs.TextBox({
        value: 'Syncfusion',
        change: function (args) {
            barcode.value = args.value.toString();
            displayText.value = args.value.toString();
        }
        
    });
    barcodeValue.appendTo('#barcodeValue_datamatrix');

    var input = document.getElementById("barcodeValue_datamatrix");
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    var barcodeWidth = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args) {
            barcode.width = args.value.toString();
        }
    });
    barcodeWidth.appendTo('#width_datamatrix');
    
    var barcodeHeight = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change: function (args) {
            barcode.height = args.value.toString();
        }
    });
    barcodeHeight.appendTo('#height_datamatrix');

    var textVisibility = new ej.buttons.CheckBox({
        checked: false,
        change: function (args) {
            barcode.displayText.visibility = args.checked;
        }
    });
    textVisibility.appendTo('#textVisibility_datamatrix');

    var svgMode = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            barcode.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgMode.appendTo('#svgMode_datamatrix');

    var bgColor = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args) {
            barcode.backgroundColor = args.currentValue.hex;
        }
    });
    bgColor.appendTo('#bgColor_datamatrix');

    var foreColor = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcode.foreColor = args.currentValue.hex;
        }
    });
    foreColor.appendTo('#foreColor_datamatrix');

    var marginLeft = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcode.margin.left = args.value;
        }
    });
    marginLeft.appendTo('#marginLeft_datamatrix');

    var marginRight = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcode.margin.right = args.value;
        }
    });
    marginRight.appendTo('#MarginRight_datamatrix');

    var marginTop = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcode.margin.top = args.value;
        }
    });
    marginTop.appendTo('#marginTop_datamatrix');



    var marginBottom = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcode.margin.bottom = args.value;
        }
    });
    marginBottom.appendTo('#MarginBottom_datamatrix');

    var textmarginLeft = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcode.displayText.margin.left = args.value;
        }
    });
    textmarginLeft.appendTo('#TextmarginLeft_datamatrix');

    var textMarginRight = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcode.displayText.margin.right = args.value;
        }
    });
    textMarginRight.appendTo('#TextMarginRight_datamatrix');

    var textmarginTop = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcode.displayText.margin.top = args.value;
        }
    });
    textmarginTop.appendTo('#TextmarginTop_datamatrix');



    var textMarginBottom = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcode.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottom.appendTo('#TextMarginBottom_datamatrix');


    //FontType Collection
    var position = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    var alignment = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePosition(value) {
        var positionValue = ((document.getElementById('textPosition_datamatrix')).ej2_instances[0]);
        barcode.displayText.position = (positionValue.value) ;
    }

    function updateAlignt(value) {
        var positionValue = ((document.getElementById('textAlignment_datamatrix')).ej2_instances[0]);
        barcode.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPosition = new ej.dropdowns.DropDownList({
        dataSource: position,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePosition(args.value.toString());
        }
    });
    textPosition.appendTo('#textPosition_datamatrix');

    var pdfDataMatrixEncodingValue = [
        { value: 'Auto', text: 'Auto' },
        { value: 'ASCII', text: 'ASCII' },
        { value: 'ASCIINumeric', text: 'ASCIINumeric' },
        { value: 'Base256', text: 'Base256' },
    ];
    var matrixSize = [
        { value: '0', text: 'Auto' },
        { value: '6', text: 'Size10x10' },
        { value: '12', text: 'Size12x12' },
        { value: '20', text: 'Size14x14' },
        { value: '23', text: 'Size16x16' },
        { value: '24', text: 'Size18x18' },
        { value: '24', text: 'Size20x20' },
        { value: '24', text: 'Size22x22' },
        { value: '24', text: 'Size24x24' },
        { value: '24', text: 'Size26x26' },
        { value: '24', text: 'Size32x32' },
        { value: '24', text: 'Size36x36' },
        { value: '24', text: 'Size40x40' },
        { value: '24', text: 'Size44x44' },
        { value: '24', text: 'Size48x48' },
        { value: '24', text: 'Size52x52' },
        { value: '24', text: 'Size64x64' },

        { value: '24', text: 'Size72x72' },
        { value: '24', text: 'Size80x80' },
        { value: '24', text: 'Size88x88' },
        { value: '24', text: 'Size96x96' },
        { value: '24', text: 'Size104x104' },
        { value: '24', text: 'Size120x120' },
        { value: '24', text: 'Size132x132' },
        { value: '24', text: 'Size144x144' },
        { value: '24', text: 'Size8x18' },
        { value: '24', text: 'Size8x32' },
        { value: '24', text: 'Size12x26' },
        { value: '24', text: 'Size12x36' },
        { value: '24', text: 'Size16x36' },
        { value: '24', text: 'Size16x48' },
    ];

    var encoding = new  ej.dropdowns.DropDownList({
        dataSource: pdfDataMatrixEncodingValue,
        value: 'Auto',
        change: function (args) {
            barcode.encoding = ((args.itemData.value.toString()));
        }
    });
    encoding.appendTo('#PdfDataMatrixEncoding_datamatrix');

    var size = new ej.dropdowns.DropDownList({
        dataSource: matrixSize,
        value: 'Auto',
        change: function (args) {
            barcode.size = (Number(args.itemData.value));
        }
    });
    size.appendTo('#MatrixSize_datamatrix');



    //DropDownList used to apply for fontFamily of the Annotation
    var textAlign = new ej.dropdowns.DropDownList({
        dataSource: alignment,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAlignt(args.value.toString());
        }
    });
    textAlign.appendTo('#textAlignment_datamatrix');

    var displayText = new ej.inputs.TextBox({
        value: '123456',
        change: function (args) {
            barcode.displayText.text = args.value.toString();
        }
    });
    displayText.appendTo('#displayText_datamatrix');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn10_datamatrix');
    document.getElementById('downloadBtn10_datamatrix').onclick = function () {
        barcode.exportImage("DataMatrix", 'PNG');
    };
};

