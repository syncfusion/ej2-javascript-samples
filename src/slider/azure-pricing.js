this.default = function () {
    // tslint:disable-next-line:max-func-body-length
    var objElements = ['#xSmallBtn', '#smallBtn', '#mediumBtn', '#largeBtn', '#xLargeBtn'];
    var buttonObj = { obj: ej.buttons.Button, prop: { cssClass: 'e-info', isPrimary: true } };
    var proceessorElem, memoryElem, storageElem, elemValue, finalValue, discountValue;

    //cPanel Check Box
    var panelCheckBox = new ej.buttons.CheckBox({
        checked: false,
        label: 'Not required cPanel included',
        change: sliderValueChange
    });
    panelCheckBox.appendTo('#cPanel');

    //Discount Check Box
    var discountCheckBox = new ej.buttons.CheckBox({
        checked: false,
        label: '12 Months <span class = "offer" > Save 25%.</span> Pay Monthly',
        change: sliderValueChange
    });
    discountCheckBox.appendTo('#discount');

    //Processor Slider
    var processorSlider = new ej.inputs.Slider({
        min: 1,
        max: 16,
        value: 4,
        change: onChangeProcessor,
        created: onCreateProcessor
    });
    processorSlider.appendTo('#processor-slider');

    //Memory Slider
    var memorySlider = new ej.inputs.Slider({
        max: 12,
        min: 1,
        value: 4,
        change: onChangeMemory,
        created: onCreateMemory
    });

    memorySlider.appendTo('#memory-slider');

    //Storage Slider
    var storageSlider = new ej.inputs.Slider({
        min: 10,
        max: 500,
        value: 300,
        step: 10,
        change: onChangeStorage,
        created: onCreateStorage
    });
    storageSlider.appendTo('#storage-slider');

    //Signup Button
    var button = new ej.buttons.Button({ isPrimary: true });
    button.appendTo('#btn');

    //Render price range buttons
    for (var i = 0; i < objElements.length; i++) {
        buttonObj.obj = new ej.buttons.Button(buttonObj.prop);
        buttonObj.obj.appendTo(objElements[i]);
    }

    // Render price Dialog
    var alertDialogObj = new ej.popups.Dialog({
        content: '<div id = "dialog-content"><div id = "dialog-header">Cloud Price Details</div>' +
            '<div id="processorDialog"><span id="processorPriceName">Processor Price</span><span id="processorPrice"></span></div>' +
            '<div id="MemoryDialog"><span id="memoryPriceName">Memory Price</span><span id="memoryPrice"></span></div>' +
            '<div id="StorgeDialog"><span id="storgePriceName">Storge Price</span><span id="storgePrice"></span></div>' +
            '<div id="CloudDialog"><span id="cloudPriceName">Estimated Price</span><span id="cloudPrice"></span></div></div>',
        showCloseIcon: false,
        buttons: [{
            click: alertDlgBtnClick, buttonModel: { content: 'Close', isPrimary: true }
        }],
        closeOnEscape: false, width: '360px',
        target: document.getElementById('pricing-slider'),
        animationSettings: { effect: 'None' },
        visible: false
    });
    alertDialogObj.appendTo('#alertDialog');

    //Sets processor value
    function onCreateProcessor() {
        document.getElementById('processor').innerHTML = processorSlider.value + '  ' + 'CORE';
    }
    //Sets memory value
    function onCreateMemory(args) {
        document.getElementById('memory').innerHTML = memorySlider.value + '  ' + 'GB';
    }
    //Sets storage value
    function onCreateStorage(args) {
        document.getElementById('storage').innerHTML = storageSlider.value + '  ' + 'GB';
        sliderValueChange();
    }

    //Processor Slider value change method
    function onChangeProcessor(args) {
        onChange(document.getElementById('processor'), args.value, 'CORE');
    }

    //Memory Slider value change method
    function onChangeMemory(args) {
        onChange(document.getElementById('memory'), args.value, 'GB');
    }

    //Storage Slider value change method
    function onChangeStorage(args) {
        onChange(document.getElementById('storage'), args.value, 'GB');
    }
    //common method for Slider value change
    function onChange(elem, value, notation) {
        elem.innerText = value + '  ' + notation;
        sliderValueChange();
    }

    //method to calculate monthly cloud price based on slider value
    function sliderValueChange() {
        elemValue = document.getElementById('value');
        var porcessorValue = processorSlider.value;
        var memoryValue = memorySlider.value;
        var storageValue = storageSlider.value;
        //formula to calculate cloud price based on slider value
        finalValue = Number(((((porcessorValue * memoryValue) * 1000) + ((porcessorValue * memoryValue) * storageValue) + ((porcessorValue * memoryValue) * 100)) / 12).toFixed(2));
        if (document.getElementById('cPanel').ej2_instances[0].checked) {
            finalValue = Number((finalValue - 10).toFixed(2));
        }
        if (document.getElementById('discount').ej2_instances[0].checked) {
            finalValue = Number((finalValue - ((finalValue * 25) / 100)).toFixed(2));
        }
        elemValue.innerText = finalValue.toString();
    }

    //common method to change the slider value
    function sliderPriceValue(processor, memory, storage) {
        processorSlider.value = processor;
        memorySlider.value = memory;
        storageSlider.value = storage;
    }

    //change the slider value based on workload
    document.getElementById('xSmallBtn').onclick = function (e) {
        sliderPriceValue(1, 1, 10);
    };
    document.getElementById('smallBtn').onclick = function (e) {
        sliderPriceValue(1, 2, 10);
    };
    document.getElementById('mediumBtn').onclick = function (e) {
        sliderPriceValue(4, 4, 300);
    };
    document.getElementById('largeBtn').onclick = function (e) {
        sliderPriceValue(12, 6, 100);
    };
    document.getElementById('xLargeBtn').onclick = function (e) {
        sliderPriceValue(8, 12, 300);
    };

    //Show price dialog
    document.getElementById('btn').onclick = function (e) {
        var processorPrice = document.getElementById('processorPrice');
        onChange(processorPrice, processorSlider.value, 'CORE');
        var memoryPrice = document.getElementById('memoryPrice');
        onChange(memoryPrice, memorySlider.value, 'GB');
        var storgePrice = document.getElementById('storgePrice');
        onChange(storgePrice, storageSlider.value, 'GB');
        var cloudPrice = document.getElementById('cloudPrice');
        cloudPrice.innerText = '$' + finalValue;
        sliderValueChange();
        alertDialogObj.show();
    };

    //hide price dialog
    function alertDlgBtnClick() {
        alertDialogObj.hide();
    }
};