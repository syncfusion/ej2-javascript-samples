this.default = function () {
    document.getElementById('showcarddata').onclick = function () {
        revealShow();
       
    };
    document.getElementById('card-reveal_collapse').onclick = function (e) {
        var cardEle = e.currentTarget.parentNode.parentNode.parentElement;
        var revealEle = cardEle.querySelector('#card_reveal');
        revealEle.classList.add('e-reveal-hide');
        revealEle.classList.remove('e-reveal-show');
        var revealedEle = cardEle.querySelector('#card_revealed');
        revealedEle.classList.add('e-reveal-show');
        revealedEle.classList.remove('e-reveal-hide');
    };
    document.getElementById('showcarddata_icon').onclick = function () {
        revealShow();
    };  
    function revealShow() {
        var cEle = document.getElementById('card_revealed');
        var cardEle = cEle.parentNode.parentNode;
        var revealEle = cardEle.querySelector('#card_reveal');
        revealEle.classList.add('e-reveal-show');
        revealEle.classList.remove('e-reveal-hide');
        var revealedEle = cardEle.querySelector('#card_revealed');
        revealedEle.classList.add('e-reveal-hide');
        revealedEle.classList.remove('e-reveal-show');
    }
};