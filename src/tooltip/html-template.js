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
             '<div id="bird" style="float:right"><img src="./src/tooltip/images/bird.png" ' +
			 'alt="" width="125" height="125"/></div></div>' +
			 '<div>The <a href="https://en.wikipedia.org/wiki/Eastern_bluebird" target="_blank"> Eastern Bluebird</a>' +
             'is easily found in open fields and sparse woodland areas, including along woodland edges. These' +
             'are <i>cavity-nesting birds</i> and a pair of eastern bluebirds will raise 2-3 broods annually, with 2-8 light blue' +
			 'or whitish eggs per brood.</div>' +
			 '<div>' +
			 '<hr style="margin: 9px 0px"/>' +
             '<p>Eastern bluebirds can be very vocal in flocks.' +
             'Their calls include a rapid, mid-tone chatter and several long dropping pitch calls.</p>' +
			'<p>Source:&nbsp;' +
			'a href="https://en.wikipedia.org/wiki/Eastern_bluebird" target="_blank">https://en.wikipedia.org/wiki/Eastern_bluebird</a>' +
			'</p>' +
			'</div>' +
		    '</div>',
    //Raise beforeRender event
    beforeOpen: onBeforeRender
  });
  //Render initialized Tooltip component
  tooltip.appendTo('#content');

  //beforRender event handler for Tooltip
  function onBeforeRender() {
    var htmlcontent = document.getElementById('democontent');
    htmlcontent.style.display = 'block';
    tooltip.content = htmlcontent;
  }

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
