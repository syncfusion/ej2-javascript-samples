this.default = function () {
    var defaultCarouselObj = new ej.navigations.Carousel({
        cssClass: 'indicator-type',
        items: [
            { template: '<div class="e-slide">Slide 1</div>' },
            { template: '<div class="e-slide">Slide 2</div>' },
            { template: '<div class="e-slide">Slide 3</div>' },
            { template: '<div class="e-slide">Slide 4</div>' },
            { template: '<div class="e-slide">Slide 5</div>' }
        ],
        indicatorsType: "Default",
        autoPlay: false
    });
    defaultCarouselObj.appendTo('#default-carousel');

    var dynamicCarouselObj = new ej.navigations.Carousel({
        cssClass: 'indicator-type',
        items: [
            { template: '<div class="e-slide">Slide 1</div>' },
            { template: '<div class="e-slide">Slide 2</div>' },
            { template: '<div class="e-slide">Slide 3</div>' },
            { template: '<div class="e-slide">Slide 4</div>' },
            { template: '<div class="e-slide">Slide 5</div>' }
        ],
        indicatorsType: "Dynamic",
        autoPlay: false
    });
    dynamicCarouselObj.appendTo('#dynamic-carousel');

    var fractionCarouselObj = new ej.navigations.Carousel({
        cssClass: 'indicator-type',
        items: [
            { template: '<div class="e-slide">Slide 1</div>' },
            { template: '<div class="e-slide">Slide 2</div>' },
            { template: '<div class="e-slide">Slide 3</div>' },
            { template: '<div class="e-slide">Slide 4</div>' },
            { template: '<div class="e-slide">Slide 5</div>' }
        ],
        indicatorsType: "Fraction",
        autoPlay: false
    });
    fractionCarouselObj.appendTo('#fraction-carousel');

    var progressCarouselObj = new ej.navigations.Carousel({
        cssClass: 'indicator-type',
        items: [
            { template: '<div class="e-slide">Slide 1</div>' },
            { template: '<div class="e-slide">Slide 2</div>' },
            { template: '<div class="e-slide">Slide 3</div>' },
            { template: '<div class="e-slide">Slide 4</div>' },
            { template: '<div class="e-slide">Slide 5</div>' }
        ],
        indicatorsType: "Progress",
        autoPlay: false
    });
    progressCarouselObj.appendTo('#progress-carousel');    
};
