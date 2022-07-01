this.default = function () {
    window.getThumpImage = function (index) {
        var birds = ['cardinal', 'hunei', 'costa-rica', 'kaohsiung', 'bee-eater'];
        return 'src/carousel/images/' + birds[index] + '.png';
    };
    var carouselObj = new ej.navigations.Carousel({
        animationEffect: 'Fade',
        cssClass: 'templateCarousel',
        items: [
            { template: '#itemTemplate1' },
            { template: '#itemTemplate2' },
            { template: '#itemTemplate3' },
            { template: '#itemTemplate4' },
            { template: '#itemTemplate5' }
        ],
        previousButtonTemplate: '<button id="previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m13.5 7.01 13 13m-13 13 13-13"></path></svg></button>',
        nextButtonTemplate: '<button id="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m13.5 7.01 13 13m-13 13 13-13"></path></svg></button>',
        indicatorsTemplate: '#indicatorTemplate'
    });
    carouselObj.appendTo('#carousel');

    var prevBtn = new ej.buttons.Button({ cssClass: 'e-flat e-round nav-btn' });
    prevBtn.appendTo('#previous');

    var nextBtn = new ej.buttons.Button({ cssClass: 'e-flat e-round nav-btn' });
    nextBtn.appendTo('#next');
};
