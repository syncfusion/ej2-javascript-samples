this.default = function () {
    document.getElementById('card_flip').onclick = function (e) {
        var cardEle = e.currentTarget;
        if (cardEle.classList.contains('e-flipped')) {
            cardEle.classList.remove('e-flipped');
        }
        else {
            cardEle.classList.add('e-flipped');
        }
    };
    document.getElementById('card_flip').onblur = function (e) {
        var cardEle = e.currentTarget;
        cardEle.classList.remove('e-flipped');
    };
    document.getElementById('card_flip_profile').onclick = function (e) {
        var cardEle = e.currentTarget;
        if (cardEle.classList.contains('e-flipped')) {
            cardEle.classList.remove('e-flipped');
        }
        else {
            cardEle.classList.add('e-flipped');
        }
    };
    document.getElementById('card_flip_profile').onblur = function (e) {
        var cardEle = e.currentTarget;
        cardEle.classList.remove('e-flipped');
    };
};