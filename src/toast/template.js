/**
 *  Sample Dynamic and Static template support
 */

this.default = function () {
    /* HTML static template toast customization */
    var toastObj = new ej.notifications.Toast({
        template: document.getElementById('template_toast_ele').innerHTML,
        position: !ej.base.Browser.isDevice ? { X: 'Right', Y: 'Bottom' } : { X: 'Center', Y: 'Top' },
        target: !ej.base.Browser.isDevice ? document.body : '#toast_template_target',
        extendedTimeout: 0,
        timeOut: 120000,
        open: onOpenToast, close: onToastClose, beforeOpen: onToastBeforeOpen
    });
    toastObj.appendTo('#toast_template');
    var toastData = [
        { from: ' Anjolie Stokes', subject: 'Networking Referral', image: { url: './src/toast/resource/laura.png' }, },
        { from: ' Ila Russo', subject: 'Business dinner invitation', image: { url: './src/toast/resource/janat.png' }, },
        { from: ' Camden Mcmillan', subject: 'Reference Request - Cameran Hester', image: { url: './src/toast/resource/camden.png' }, },
        { from: ' Chase Solomon', subject: 'New business relationship confirmation', image: { url: './src/toast/resource/chase.png' }, },
        {
            from: ' Inga Scott', subject: 'Application for Sales Associate', image: { url: './src/toast/resource/michael.png' },
        }
    ];
    var btnEle = document.getElementById('toast_mail_remainder');
    var alarm = document.getElementById('Alarm_turn_on');
    var snoozeFlag = false;
    btnEle.onclick = function () {
        toastObjEmail.show({ template: cardTemplateFn(toastData[toastFlag])[0].outerHTML });
        ++toastFlag;
        if (toastFlag === (toastData.length)) {
            toastFlag = 0;
        }
    };
    alarm.onclick = function () {
        toastObj.show();
    };
    var listObj = new ej.dropdowns.DropDownList({
        placeholder: 'Select a snooze time',
        popupHeight: '200px',
        change: listChange
    });
    function listChange(e) {
        snoozeFlag = true;
        toastObj.hide();
    }
    function onOpenToast(e) {
        var dismisBtn = document.getElementById('dismiss');
        var snooze = document.getElementById('snooze');
        snooze.onclick = function () {
            snoozeFlag = true;
            toastObj.hide();
        };
        dismisBtn.onclick = function () {
            toastObj.hide();
        };
    }
    function onToastClose(e) {
        alarm.style.display = 'inline-block';
        if (snoozeFlag) {
            //Set time out for toast based on selected time from drop down
            toastObj.show({ timeOut: (parseInt(listObj.value.toString(), 10) * 60000) });
            snoozeFlag = false;
        }
    }
    function onToastBeforeOpen(e) {
        alarm.style.display = 'none';
        listObj.appendTo(e.element.querySelector('#snoozeDD'));
    }
    setTimeout(function () {
        toastObj.show();
    }, 200);
    /* Create toast using template engine dynamically */
    var toastObjEmail = new ej.notifications.Toast({
        position: { X: 'Right' },
        newestOnTop: true,
        showCloseButton: true,
        timeOut: 0,
        animation: {
            hide: { effect: 'SlideRightOut' },
            show: { effect: 'SlideRightIn' }
        }, target : document.body
    });
    toastObjEmail.appendTo('#toast_custom');
    var toastFlag = 0;
    var cardTemplateFn = ej.base.compile((document.getElementById('toastEmail_template').innerHTML.trim()));
    setTimeout(function () {
        toastObjEmail.show({ template: cardTemplateFn(toastData[toastFlag])[0].outerHTML });
        ++toastFlag;
    }, 200);
    document.onclick = function (e) {
        var closestEle = ej.base.closest(e.target, '.e-toast-container');
        if (e.target !== alarm && e.target !== btnEle && closestEle !== toastObj.element && closestEle !== toastObjEmail.element) {
            toastObj.hide('All');
            toastObjEmail.hide('All');
        }
    };
};