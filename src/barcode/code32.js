


 /* tslint:disable */
this.default = function () {
 
    //Initializes barcode control
    var barcodeCode32 = new ej.barcodegenerator.BarcodeGenerator({
        type: 'Code32',
        value: '01234567',
        width: '200px', height: '150px',
        invalid: invalidInputCode32,
        mode: 'SVG'
    });
    barcodeCode32.appendTo('#barcode_code32');
    
    var canShowError32 = false;
    var customFn =  function (args) {
        if (canShowError32) {
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
    function invalidInputCode32() {
        canShowError32 = true;
        formObject.validate();
    }

    var barcodeValue = new ej.inputs.TextBox({
        value: '01234567',
        change: function (args) {
            barcodeCode32.value = args.value.toString();
            displayTextCode32.value = args.value.toString();
        }
    });
    barcodeValue.appendTo('#barcodeValue_code32');

    var input = document.getElementById("barcodeValue_code32");
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    var barcodeWidthCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 200, step: 2, min: 150, max: 250,
        change: function (args){
            barcodeCode32.width = args.value.toString();
        }
    });
    barcodeWidthCode32.appendTo('#width_code32');
    
    var barcodeHeightCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 150, step: 2, min: 100, max: 200,
        change:function (args) {
            barcodeCode32.height = args.value.toString();
        }
    });
    barcodeHeightCode32.appendTo('#height_code32');

    var textVisibilityCode32 = new ej.buttons.CheckBox({
        checked: true,
        change:function (args) {
            barcodeCode32.displayText.visibility = args.checked;
        }
    });
    textVisibilityCode32.appendTo('#textVisibility_code32');

    var svgModeCode32 = new ej.buttons.CheckBox({
        checked: true,
        change:function (args){
            barcodeCode32.mode = args.checked ? 'SVG' : 'Canvas';
        }
    });
    svgModeCode32.appendTo('#svgMode_code32');

    var bgColorCode32 = new  ej.inputs.ColorPicker({
        value: '#ffffff',
        change: function (args){
            barcodeCode32.backgroundColor = args.currentValue.hex;
        }
    });
    bgColorCode32.appendTo('#bgColor_code32');

    var foreColorCode32 = new  ej.inputs.ColorPicker({
        value: '#000000',
        change: function (args) {
            barcodeCode32.foreColor = args.currentValue.hex;
        }
    });
    foreColorCode32.appendTo('#foreColor_code32');

    var marginLeftCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode32.margin.left = args.value;
        }
    });
    marginLeftCode32.appendTo('#marginLeft_code32');

    var marginRightCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        min: -10, max: 30,
        value: 10, step: 1,
        change: function (args) {
            barcodeCode32.margin.right = args.value;
        }
    });
    marginRightCode32.appendTo('#MarginRight_code32');

    var marginTopCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args){
            barcodeCode32.margin.top = args.value;
        }
    });
    marginTopCode32.appendTo('#marginTop_code32');



    var marginBottomCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 10, step: 1,
        min: -10, max: 30,
        change: function (args) {
            barcodeCode32.margin.bottom = args.value;
        }
    });
    marginBottomCode32.appendTo('#MarginBottom_code32');

    var textmarginLeftCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change: function (args) {
            barcodeCode32.displayText.margin.left = args.value;
        }
    });
    textmarginLeftCode32.appendTo('#TextmarginLeft_code32');

    var textMarginRightCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 40, step: 1, min: 40, max: 60,
        change:function (args){
            barcodeCode32.displayText.margin.right = args.value;
        }
    });
    textMarginRightCode32.appendTo('#TextMarginRight_code32');

    var textmarginTopCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args) {
            barcodeCode32.displayText.margin.top = args.value;
        }
    });
    textmarginTopCode32.appendTo('#TextmarginTop_code32');



    var textMarginBottomCode32 = new ej.inputs.NumericTextBox({
        enabled: true, format: '###.##',
        value: 0, step: 1, min: -10, max: 20,
        change: function (args){
            barcodeCode32.displayText.margin.bottom = args.value;
        }
    });
    textMarginBottomCode32.appendTo('#TextMarginBottom_code32');


    //FontType Collection
    var positionCode32 = [
        { type: 'Bottom', text: 'Bottom' },
        { type: 'Top', text: 'Top' },
    ];

    //FontType Collection
    var alignmentCode32 = [
        { type: 'Center', text: 'Center' },
        { type: 'Left', text: 'Left' },
        { type: 'Right', text: 'Right' },
    ];
    function updatePositionCode32(value) {
        var positionValue = ((document.getElementById('textPosition_code32')).ej2_instances[0]);
        barcodeCode32.displayText.position = (positionValue.value) ;
    }

    function updateAligntCode32(value) {
        var positionValue = ((document.getElementById('textAlignment_code32')).ej2_instances[0]);
        barcodeCode32.displayText.alignment = (positionValue.value);
    }

    //DropDownList used to apply for fontFamily of the Annotation
    var textPositionCode32 = new ej.dropdowns.DropDownList({
        dataSource: positionCode32,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updatePositionCode32(args.value.toString());
        }
    });
    textPositionCode32.appendTo('#textPosition_code32');

    //DropDownList used to apply for fontFamily of the Annotation
    var textAlignCode32 = new ej.dropdowns.DropDownList({
        dataSource: alignmentCode32,
        fields: { value: 'type', text: 'text' }, popupWidth: 150,
        width: '100%', placeholder: 'select position', index: 0,
        change: function (args) {
            updateAligntCode32(args.value.toString());
        }
    });
    textAlignCode32.appendTo('#textAlignment_code32');

    var displayTextCode32 = new ej.inputs.TextBox({
        value: '01234567',
        change: function (args) {
            barcodeCode32.displayText.text = args.value.toString();
        }
    });
    displayTextCode32.appendTo('#displayText_code32');
    var downloadButton = new ej.buttons.Button({});
    downloadButton.appendTo('#downloadBtn2_code32');
    document.getElementById('downloadBtn2_code32').onclick = function () {
        barcodeCode32.exportImage("Barcode", 'PNG');
    };
};

