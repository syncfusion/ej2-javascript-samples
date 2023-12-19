this.default = function () {
    var carouselObj = new ej.navigations.Carousel({
        autoPlay: false,
        cssClass: 'kb-carousel',
        items: [
            { template: '#itemTemplate1' },
            { template: '#itemTemplate2' },
            { template: '#itemTemplate3' },
            { template: '#itemTemplate4' }
        ],
        showPlayButton: true
    });
    carouselObj.appendTo('#carousel');

    //Focus the Carousel Control (alt+j) key combination
    document.body.addEventListener('keydown', function (e) {
        if (e.altKey && e.keyCode === 74 && carouselObj.element) {
            carouselObj.element.firstElementChild.focus();
        }
    });
};
