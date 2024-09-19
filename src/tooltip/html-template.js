/**
 * HTML template sample
 */
this.default = function() {

  //Initialize Button component
  var button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
  //Render initialized Button component
  button.appendTo('#content');

  //Initialize Tooltip component
  var tooltip = new ej.popups.Tooltip({
    cssClass: 'e-tooltip-template-css',
    //Set tooltip open mode
    opensOn: 'Click',
    //Set tooltip content
    content: '<div id="democontent" class="democontent">' +
			 '<div class="info">' +
		     '<h3 style="margin-top:10px">Eastern Bluebird</h3>' +
         '<hr style="margin: 9px 0px"/>' +
             '<div id="bird" style="float:right"><img src="./src/tooltip/images/bird.png" ' +
			 'alt="" width="125" height="125"/></div></div>' +
			 '<div>The <a href="https://en.wikipedia.org/wiki/Eastern_bluebird" target="_blank"> Eastern Bluebird</a>' +
             ' is easily found in open fields and sparse woodland areas, including along woodland edges.</div>' +
		    '</div>',

    //Set tooltip position
    position: 'BottomCenter',
    //Set tooltip height
    height:'Auto',
    windowCollision: true
  });
  //Render initialized Tooltip component
  tooltip.appendTo('#content');

  //Attached scroll and click event listners in right pane
  if (document.getElementById('right-pane')) {
    document.getElementById('right-pane').addEventListener('click', onClick);
    document.getElementById('right-pane').addEventListener('scroll', onScroll);
  }

  //scroll event handler to close Tooltip while perfomring page scroll
  function onScroll() {
    if (document.getElementsByClassName('e-tooltip-wrap').length > 0) {
      tooltip.close();
    }
  }

  //click event handler to close Tooltip while navigating to other tabs in right pane
  function onClick(args) {
    if (args.target.parentNode.className === 'e-tab-text') {
      if (document.getElementsByClassName('e-tooltip-wrap').length > 0) {
        tooltip.close();
      }
    }
  }
};
