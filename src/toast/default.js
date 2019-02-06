/**
 *  Sample for Basic Toast
 */
this.default = function () {
    var toastObj = new ej.notifications.Toast({
        position: {
            X: 'Right'
        },
        close: onclose,
        beforeOpen: onBeforeOpen,
    });
    var btnEleShow = document.getElementById('toastBtnShow');
    var btnEleHide = document.getElementById('toastBtnHide');
    document.onclick = function (e) {
        if (e.target !== btnEleShow) {
            toastObj.hide('All');
        }
    };
    btnEleShow.onclick = function () {
        toastObj.show();
    };
    btnEleHide.onclick = function () {
        toastObj.hide('All');
    };
    
    function onclose(e) {
        if (e.toastContainer.childElementCount === 0 ) {
            btnEleHide.style.display = 'none';
        }
    }
  
    function onBeforeOpen(){
          btnEleHide.style.display = 'inline-block';
    }

    toastObj.appendTo('#toast_default');
    setTimeout(function () {
        toastObj.show({
            title: 'Adaptive Tiles Meeting', content: 'Conference Room 01 / Building 135 10:00 AM-10:30 AM',
            icon: 'e-meeting', target : document.body
        });
    }, 200);
};