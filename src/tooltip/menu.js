/**
 * menu sample
 */
this.default = function () {

  //Initialize Toolbar component
  var toolbarObj = new ej.navigations.Toolbar({
    items: [
      {
        prefixIcon: 'e-copy-icon tb-icons',
        text: 'Wireless & networks',
        overflow: 'Hide',
        tooltipText: 'Wireless'
      },
      {
        prefixIcon: 'e-copy-icon tb-icons',
        text: 'Device',
        overflow: 'Hide',
        tooltipText: 'Device'
      },
      {
        prefixIcon: 'e-copy-icon tb-icons',
        text: 'Personal',
        overflow: 'Hide',
        tooltipText: 'Personal'
      }
    ]
  });
  //Render initialized Toolbar component
  toolbarObj.appendTo('#toolbar-menu');

  //Initialize Tooltip component
  var tip = new ej.popups.Tooltip({
    //Set tooltip target
    target: '#toolbar-menu button',
    //Raise beforeRender event
    beforeRender: onBeforeRender,
    //Set tooltip width
    width: 170,
    //Set tooltip cssClass
    cssClass: 'e-tooltip-menu-settings',
    //Set tooltip open mode
    opensOn: 'Click',
    //Set tooltip position
    position: 'BottomCenter',
    windowCollision: true
  });
  //Render initialized Tooltip component
  tip.appendTo('#tooltip-menu');

  //Define an array of JSON data
  var data1 = [
    { Name: 'WI-FI', id: '1', icon: 'wifi' },
    { Name: 'Bluetooth', id: '2', icon: 'bluetooth' },
    { Name: 'SIM cards', id: '3', icon: 'sim' }
  ];
  var data2 = [
    { Name: 'Display', icon: 'display' },
    { Name: 'Sound', icon: 'sound' },
    { Name: 'Battery', icon: 'battery' },
    { Name: 'Users', icon: 'user' }
  ];
  var data3 = [
    { Name: 'Location', icon: 'location' },
    { Name: 'Security', icon: 'security' },
    { Name: 'Language', icon: 'language' }
  ];

  //Initialize ListView component
  var listObj = new ej.lists.ListView({
    //Map appropriate columns to fields property
    fields: { text: 'Name', iconCss: 'icon' },
    //Set true to show icons
    showIcon: true
  });

  var listObjects = [data1, data2, data3];
  //beforRender event handler for Tooltip
  function onBeforeRender(args) {
    var data = [
      { title: 'Wireless' },
      { title: 'Device' },
      { title: 'Personal' }
    ];
    for (var i = 0; i < data.length; i++) {
      if (data[i].title === args.target.parentElement.getAttribute('title')) {
        var list = document.createElement('div');
        list.id = 'tooltipMenu-list';
        listObj.dataSource = listObjects[i];
        listObj.appendTo(list);
        tip.content = list;
      }
    }
  }

  //Attached scroll and click event listners in right pane
  if (document.getElementById('right-pane')) {
    document.getElementById('right-pane').addEventListener('click', onClick);
    document.getElementById('right-pane').addEventListener('scroll', onScroll);
  }

  //click event handler to close Tooltip while navigating to other tabs in right pane
  function onClick(args) {
    var targetEle = ej.base.closest(args.target, '.e-toolbar-item');
    if (!targetEle) {
      if (document.getElementsByClassName('e-tooltip-wrap').length > 0) {
        tip.close();
      }
    }
  }

  //scroll event handler to close Tooltip while perfomring page scroll
  function onScroll() {
    if (document.getElementsByClassName('e-tooltip-wrap').length > 0) {
      tip.close();
    }
  }
};
