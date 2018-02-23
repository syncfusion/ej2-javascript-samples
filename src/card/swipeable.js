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
            if (!ele.classList.contains('e-card')) {
                return;
            }
            if (ele.parentElement.querySelector('.card-out')) {
                ele.parentElement.querySelector('.card-out').classList.remove('card-out');
            }
            if (ele.parentElement.querySelector('.card-out-left')) {
                ele.parentElement.querySelector('.card-out-left').classList.remove('card-out-left');
            }
            /*jshint -W030 */
            e.swipeDirection === 'Right' ? ele.classList.add('card-out') : ele.classList.add('card-out-left');
            ele.parentElement.insertBefore(ele, ele.parentElement.children[0]);
            swipeable();
            ele.style.removeProperty('left');
        }
        function touchScrollHandler(e) {
            var ele = ej.base.closest(e.originalEvent.target, '.e-card');
            var leftVal = Math.abs(parseInt(ele.style.left, 10));
            if (!ele.classList.contains('e-card')) {
                return;
            }
            if (isNaN(leftVal) || dir !== e.scrollDirection) {
                leftVal = 0;
            }
            if (e.scrollDirection === 'Down') {
                var index = [].slice.call(ele.parentElement.children).indexOf(ele);
                var len = ele.parentElement.childElementCount;
                var el = void 0;
                for (var i = index + 1; i < len; i++) {
                    el = ele.parentElement.children[i];
                    el.style.top = (parseInt(el.style.top, 10) + e.distanceY) + 'px';
                }
            }
            else {
                /*jshint -W030 */
                e.scrollDirection === 'Left' ? ele.style.left = -(leftVal + e.distanceX) + 'px' : ele.style.left = (leftVal + e.distanceX) + 'px';
            }
            dir = e.scrollDirection;
        }
    };