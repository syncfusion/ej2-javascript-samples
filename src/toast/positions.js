/**
 *  Sample for Positioning options in Toast
 */
this.default = function () {
    var toastObj = new ej.notifications.Toast({
        title: 'Matt sent you a friend request',
        content: 'You have a friend request yet to accept.',
        icon: 'e-laura',
        target: document.body,
        position: { X: 'Right', Y: 'Bottom' },
        close: onclose,
        beforeOpen: onBeforeOpen
    });

    if (!ej.base.isDevice) {
        toastObj.width = 350;
        toastObj.dataBind();
    }
    var listObj = new ej.dropdowns.DropDownList({
        index: 5,
        placeholder: 'Select a position',
        popupHeight: '200px',
        change: valueChange
    });
    listObj.appendTo('#position');
    var radioButton = new ej.buttons.RadioButton({ label: 'Target', name: 'toast', value: 'Target', change: checkboxChange });
    radioButton.appendTo('#radio1');
    radioButton = new ej.buttons.RadioButton({ label: 'Global', name: 'toast', value: 'Global', checked: true, change: checkboxChange1 });
    radioButton.appendTo('#radio2');
    radioButton = new ej.buttons.RadioButton({ label: 'Position', name: 'toastPos', value: 'Position', checked: true, change: checkboxChange2 });
    radioButton.appendTo('#dropdownRadio');
    radioButton = new ej.buttons.RadioButton({ label: 'Custom', name: 'toastPos', value: 'Custom', change: checkboxChange3 });
    radioButton.appendTo('#customRedio');
    var initialWid = toastObj.width.toString();
    toastObj.appendTo('#toast_pos');
    toastShow(200);
    function toastShow(timeOutDelay) {
        setTimeout(function () {
            toastObj.show();
        }, timeOutDelay);
    }
    var btnEle = document.getElementById('show_Toast');
    var hideBtn = document.getElementById('hideTosat');
    btnEle.onclick = function () {
        if (customFlag) {
            setcustomPosValue();
        }
        toastObj.show();
    };
    document.getElementById('hideTosat').onclick = function () {
        toastObj.hide('All');
    };
    document.onclick = function (e) {
        if (e.target !== btnEle && toastObj.target === document.body) {
            toastObj.hide('All');
        }
    };

    function onclose(e) {
        if (e.toastContainer.childElementCount === 0) {
            hideBtn.style.display = 'none';
        }
    }

    function onBeforeOpen() {
        hideBtn.style.display = 'inline-block';
    }

    var customFlag = false;
    function checkboxChange(e) {
        if (this.checked) {
            toastObj.hide('All');
            toastObj.target = '#toast_pos_target';
            toastShow(1000);
        }
    }
    function checkboxChange1(e) {
        if (this.checked) {
            toastObj.hide('All');
            toastObj.target = document.body;
            toastShow(1000);
        }
    }
    function checkboxChange2(e) {
        if (this.checked) {
            toastObj.hide('All');
            document.getElementById('dropdownChoose').style.display = 'table-cell';
            document.getElementById('customChoose').style.display = 'none';
            setToastPosValue(listObj.value.toString());
            customFlag = false;
            toastShow(1000);
        }
    }
    function checkboxChange3(e) {
        if (this.checked) {
            toastObj.hide('All');
            document.getElementById('dropdownChoose').style.display = 'none';
            document.getElementById('customChoose').style.display = 'table-cell';
            setcustomPosValue();
            customFlag = true;
            toastShow(1000);
        }
    }
    //To set custom position values
    function setcustomPosValue() {
        toastObj.width = initialWid;
        toastObj.position.X = parseInt(document.getElementById('xPos').value, 10);
        toastObj.position.Y = parseInt(document.getElementById('yPos').value, 10);
    }
    //Pre defined postions available based on target
    function setToastPosValue(value) {
        toastObj.width = initialWid;
        switch (value) {
            case 'topleft':
                toastObj.position.X = 'Left';
                toastObj.position.Y = 'Top';
                break;
            case 'topright':
                toastObj.position.X = 'Right';
                toastObj.position.Y = 'Top';
                break;
            case 'topcenter':
                toastObj.position.X = 'Center';
                toastObj.position.Y = 'Top';
                break;
            case 'topfullwidth':
                toastObj.width = '100%';
                toastObj.position.X = 'Center';
                toastObj.position.Y = 'Top';
                break;
            case 'bottomleft':
                toastObj.position.X = 'Left';
                toastObj.position.Y = 'Bottom';
                break;
            case 'bottomright':
                toastObj.position.X = 'Right';
                toastObj.position.Y = 'Bottom';
                break;
            case 'bottomcenter':
                toastObj.position.X = 'Center';
                toastObj.position.Y = 'Bottom';
                break;
            case 'bottomfullwidth':
                toastObj.width = '100%';
                toastObj.position.X = 'Center';
                toastObj.position.Y = 'Bottom';
                break;
        }
    }
    function valueChange(e) {
        toastObj.hide('All');
        setToastPosValue(e.value.toString());
        toastShow(1000);
    }
};