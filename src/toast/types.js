/**
 *  Sample for types of toast
 */
this.default = function () {
    var toastObj = new ej.notifications.Toast({
        position: {
            X: 'Right'
        }, target: document.body,
        close: onclose,
        beforeOpen: onBeforeOpen
    });
    toastObj.appendTo('#toast_type');
    var toasts = [
        { title: 'Warning!', content: 'There was a problem with your network connection.', cssClass: 'e-toast-warning', icon: 'e-warning toast-icons' },
        { title: 'Success!', content: 'Your message has been sent successfully.', cssClass: 'e-toast-success', icon: 'e-success toast-icons' },
        { title: 'Error!', content: 'A problem has been occurred while submitting your data.', cssClass: 'e-toast-danger', icon: 'e-error toast-icons' },
        { title: 'Information!', content: 'Please read the comments carefully.', cssClass: 'e-toast-info', icon: 'e-info toast-icons' }
    ];
    setTimeout(function () {
        toastObj.show(toasts[3]);
    }, 200);
    var infoBtn = document.getElementById('info_Toast');
    var warnBtn = document.getElementById('warning_Toast');
    var successBtn = document.getElementById('success_Toast');
    var errorBtn = document.getElementById('error_Toast');
    document.onclick = function (e) {
        if (e.target !== infoBtn && e.target !== warnBtn && e.target !== successBtn && e.target !== errorBtn) {
            toastObj.hide('All');
        }
    };

    function onclose (e){
        if (e.toastContainer.childElementCount === 0 ) {
            document.getElementById('hideTosat').style.display = 'none';
        }
     }
   
    function onBeforeOpen (){
        document.getElementById('hideTosat').style.display = 'inline-block';
     }

    document.getElementById('hideTosat').onclick = function () {
        toastObj.hide('All');
    };
    infoBtn.onclick = function () {
        toastObj.show(toasts[3]);
    };
    warnBtn.onclick = function () {
        toastObj.show(toasts[0]);
    };
    successBtn.onclick = function () {
        toastObj.show(toasts[1]);
    };
    errorBtn.onclick = function () {
        toastObj.show(toasts[2]);
    };
};