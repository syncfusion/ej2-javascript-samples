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
    span.innerHTML = 'Breadcrumb <b>' + eventName  + '</b> event called<hr>';
    var log = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
    }
};
