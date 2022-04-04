this.default = function () {
   var carouselObj = new ej.navigations.Carousel({
      cssClass: 'api-carousel',
      interval: 3000,
      items: [
         { template: '#itemTemplate1' },
         { template: '#itemTemplate2' },
         { template: '#itemTemplate3' },
         { template: '#itemTemplate4' },
         { template: '#itemTemplate5' }
      ]
   });
   carouselObj.appendTo('#carousel');

   var buttonsVisibility = new ej.dropdowns.DropDownList({
      change: function (args) {
         carouselObj.buttonsVisibility = args.value;
         carouselObj.dataBind();
      }
   });
   buttonsVisibility.appendTo('#buttonsVisibility');

   var interval = new ej.dropdowns.DropDownList({
      change: function (args) {
         carouselObj.interval = args.value;
         carouselObj.dataBind();
      }
   });
   interval.appendTo('#interval');

   var showIndicators = new ej.buttons.Switch({
      checked: true,
      change: function (args) {
         carouselObj.showIndicators = args.checked;
         carouselObj.dataBind();
      }
   });
   showIndicators.appendTo('#showIndicators');

   var showPlayButton = new ej.buttons.Switch({
      checked: false,
      change: function (args) {
         carouselObj.showPlayButton = args.checked;
         carouselObj.dataBind();
      }
   });
   showPlayButton.appendTo('#showPlayButton');

   var autoPlay = new ej.buttons.Switch({
      checked: true,
      change: function (args) {
         carouselObj.autoPlay = args.checked;
         carouselObj.dataBind();
      }
   });
   autoPlay.appendTo('#autoPlay');

   var infiniteLoop = new ej.buttons.Switch({
      checked: true,
      change: function (args) {
         carouselObj.loop = args.checked;
         carouselObj.dataBind();
      }
   });
   infiniteLoop.appendTo('#infinite');

};
