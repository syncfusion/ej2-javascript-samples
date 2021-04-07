/**
 *  Sample for Animation and Advanced APIs in toast
 */
this.default = function () {
    var toastObj = new ej.notifications.Toast({
        position: {
            X: 'Right', Y :'Bottom'
        },
         target: document.body,
         beforeOpen: onBeforeOpen,
         close: onclose
    });
    toastObj.appendTo('#toastApi');
    var checkBoxObj = new ej.buttons.CheckBox({ label: 'Show Close Button', change: closeOnChange });
    checkBoxObj.appendTo('#closeButton');
    var checkBoxObj1 = new ej.buttons.CheckBox({ label: 'Show Progress Bar', change: OnProgressChange });
    checkBoxObj1.appendTo('#progressBar');
    var checkBoxObj2 = new ej.buttons.CheckBox({ label: 'Newest On Top', checked: true, change: closeNewestOnChange });
    checkBoxObj2.appendTo('#newestOnTop');
    var checkBoxObj3 = new ej.buttons.CheckBox({ label: 'Prevent Duplicates', change: OnPrevDubChange });
    checkBoxObj3.appendTo('#prevDuplicates');
    var checkBoxObj4 = new ej.buttons.CheckBox({ label: 'Action Buttons', change: OnactionBtnChange });
    checkBoxObj4.appendTo('#actionButtons');
    var btnEleShow = document.getElementById('toastBtnShow');
    var btnEleHide = document.getElementById('toastBtnHide');
    var prevDuplicates = false;
    btnEleShow.onclick = function () { showToast(); };
    btnEleHide.onclick = function () { toastObj.hide('All'); };

    document.onclick = function (e){
        if (e.target !== btnEleShow) {
            toastObj.hide('All');
        }
    };


    function showToast() {
        var title = document.getElementById('toast_input_title').value;
        var content = document.getElementById('toast_input_content').value;
        if (title === '' && content === '') {
            content = 'You have created a Toast message';
        }
        var showDuration = parseInt(document.getElementById('showDuration').value, 10);
        var hideDuration = parseInt(document.getElementById('hideDuration').value, 10);
        var timeOut = parseInt(document.getElementById('timeOut').value, 10);
        toastObj.show({
            title: title, content: content, timeOut: timeOut,
            animation: {
                show: { duration: showDuration },
                hide: { duration: hideDuration }
            }
        });
    }
    var dropDownListShow = new ej.dropdowns.DropDownList({
        placeholder: 'Select an Animation', change: showChange, value: "SlideBottomIn"
    });
    dropDownListShow.appendTo('#ShowAnimation');
    var dropDownListHide = new ej.dropdowns.DropDownList({
        placeholder: 'Select an Animation',
        change: hideChange, value: "SlideBottomOut"
    });
    dropDownListHide.appendTo('#HideAnimation');
    var dropDownListShowEase = new ej.dropdowns.DropDownList({
        placeholder: 'Select an Easing',
        change: onShowEase
    });
    dropDownListShowEase.appendTo('#ShowEasing');
    var dropDownListProgressDirection = new ej.dropdowns.DropDownList({
        placeholder: 'ProgressDirection',
        floatLabelType: 'Auto',
        change: onProgressDirectionChange
    });
    dropDownListProgressDirection.appendTo('#progressDirection');
    var dropDownListHideEase = new ej.dropdowns.DropDownList({
        placeholder: 'Select an Easing',
        change: onHideEase
    });
    dropDownListHideEase.appendTo('#HideEasing');
    function onShowEase(e) {
        toastObj.animation.show.easing = dropDownListShowEase.value.toString();
    }
    function onHideEase(e) {
        toastObj.animation.hide.easing = dropDownListHideEase.value.toString();
    }
    function showChange(e) {
        toastObj.animation.show.effect = dropDownListShow.value;
    }
    function hideChange(e) {
        toastObj.animation.hide.effect = dropDownListHide.value;
    }
    function onProgressDirectionChange() {
        toastObj.progressDirection = dropDownListProgressDirection.value.toString();
    }
    function onclose(e) {
        if (e.toastContainer.childElementCount === 0) {
            btnEleHide.style.display = 'none';
        }
    }

    function onBeforeOpen(e) {
        btnEleHide.style.display = 'inline-block';
        if (prevDuplicates) {
            e.cancel = preventDuplicate(e);
        }
    }
    function preventDuplicate(e) {
        var toastEle = e.element;
        var toasts = e.toastObj.element.children;
        for (var i = 0; i < toasts.length; i++) {
            var toastTitle = toasts[i].querySelector('.e-toast-title');
            var toastMessage = (toasts[i]).querySelector('.e-toast-message');
            if (toastTitle && toastTitle.isEqualNode(toastEle.querySelector('.e-toast-title'))) {
                return true;
            }
            if (!toastTitle && toastMessage && toastMessage.isEqualNode(toastEle.querySelector('.e-toast-message'))) {
                return true;
            }
        }
        return false;
    }
    function closeOnChange(e) {
        if(e.checked) toastObj.showCloseButton = true;
        else toastObj.showCloseButton = false;
    }
    function OnProgressChange(e) {
        if(e.checked)  toastObj.showProgressBar = true;
        else toastObj.showProgressBar = false;
    }
    function closeNewestOnChange(e) {
        if(e.checked) toastObj.newestOnTop = true;
        else toastObj.newestOnTop = false;
    }
    function OnPrevDubChange(e) {
        prevDuplicates = e.checked;
    }
    function onActionBtnClick(e) {
        alert('Action button is clicked');
    }
    function OnactionBtnChange(e) {
        if (e.checked) {
            toastObj.buttons = [{ model: { content: '<div class="e-toast-btn"> Click Here </div>' }, click: onActionBtnClick }];
        }
        else {
            toastObj.buttons = [];
        }
    }
};