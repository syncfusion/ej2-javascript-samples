this.default = function () {
    var carouselObj = new ej.navigations.Carousel({
        cssClass: 'partial-carousel',
        items: [
            { template: '<figure class="img-container"><img src="src/carousel/images/bridge.jpg" alt="bridge" style="height:100%;width:100%;" /><figcaption class="img-caption">Golden Gate Bridge, San Francisco</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="src/carousel/images/trees.jpg" alt="trees" style="height:100%;width:100%;" /><figcaption class="img-caption">Spring Flower Trees</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="src/carousel/images/waterfall.jpg" alt="waterfall" style="height:100%;width:100%;" /><figcaption class="img-caption">Oddadalen Waterfalls, Norway</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="src/carousel/images/sea.jpg" alt="sea" style="height:100%;width:100%;" /><figcaption class="img-caption">Anse Source d`Argent, Seychelles</figcaption></figure>' },
            { template: '<figure class="img-container"><img src="src/carousel/images/rocks.jpeg" alt="rocks" style="height:100%;width:100%;" /><figcaption class="img-caption">Stonehenge, England</figcaption></figure>' }
        ],
        partialVisible: true
    });
    carouselObj.appendTo('#carousel');
};
