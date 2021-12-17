this.default = function () {
  var items = [
    {
        text: "Program Files",
        iconCss: "e-bicons e-folder"
    },
    {
        text: "Commom Files",
        iconCss: "e-bicons e-folder"
    },
    {
        text: "Services",
        iconCss: "e-bicons e-folder"
    },
    {
        text: "Config.json",
        iconCss: "e-bicons e-file"
    }
  ];
  
    new ej.navigations.Breadcrumb({
      items: items,
      created: createdHandler,
      itemClick: clickHandler,
      beforeItemRender: beforeItemRenderHandler,
      enableNavigation: false
    }, '#events');
  
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');
  
    document.getElementById('clear').onclick = function() {
      document.getElementById('EventLog').innerHTML = '';
    };
  
    function createdHandler() {
      logEvent('created');
    }
  
    function clickHandler(args) {
      logEvent(args.name);
    }
  
    function beforeItemRenderHandler(args) {
      logEvent(args.name);
    }
  
   function logEvent(eventName) {
    var span = document.createElement('span');
    span.innerHTML = 'Breadcrumb <b>' + eventName  + '</b> event is triggered<hr>';
    var log = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
    }

    // To refresh Breadcrumb control state when reset button clicked
    new ej.buttons.Button({ cssClass: 'e-small' }, '#reset').element.onclick = function() {
    var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
    for (var a = 0; a < breadcrumbs.length; a++) {
        breadcrumb = breadcrumbs[a];
        breadcrumbInst = ej.base.getComponent(breadcrumb, 'breadcrumb');
        breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
    }
  };
};
