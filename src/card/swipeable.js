    this.default = function () {
        var ele = document.getElementById('horizontal_product');
        var dir;
        swipeable();
        var touch = new ej.base.Touch(ele, { swipe: touchSwipeHandler });
        var temp = 0;
        var cards = document.querySelectorAll('#horizontal_product .e-card');
        [].slice.call(cards).forEach(function (ele) {
            ele.querySelector('img').onmousedown = function () { return false; };
        });
        function swipeable() {
            var fanStructuteCard = document.querySelectorAll('#horizontal_product .e-card');
            var len = fanStructuteCard.length;
            [].slice.call(fanStructuteCard).forEach(function (ele) {
                ele.style.removeProperty('transform');
            });
            var transformRatio = 2;
            var temp;
            var divide = (parseInt((len / 2).toString(), 10));
            temp = transformRatio;
            for (var i = divide - 1; i >= 0; i--) {
                fanStructuteCard[i].style.transform = 'rotate(' + (temp) + 'deg)';
                temp += transformRatio;
            }
            transformRatio = 2;
            temp = transformRatio;
            for (var j = divide + 1; j < len; j++) {
                fanStructuteCard[j].style.transform = 'rotate(' + (-temp) + 'deg)';
                temp += transformRatio;
            }
        }
        function touchSwipeHandler(e) {
            var ele = ej.base.closest(e.originalEvent.target, '.e-card');
            if (ej.base.isNullOrUndefined(ele)) {
                return;
            }
            if (ele.parentElement.querySelector('.card-out')) {
                ele.parentElement.querySelector('.card-out').classList.remove('card-out');
            }
            if (ele.parentElement.querySelector('.card-out-left')) {
                ele.parentElement.querySelector('.card-out-left').classList.remove('card-out-left');
            }
            /*jshint -W030 */
            if (e.swipeDirection === 'Right') {
                ele.classList.add('card-out');
            } else if (e.swipeDirection === 'Left') {
                ele.classList.add('card-out-left');
            } else {
                return;
            }
            ele.parentElement.insertBefore(ele, ele.parentElement.children[0]);
            swipeable();
            ele.style.removeProperty('left');
        }
    };