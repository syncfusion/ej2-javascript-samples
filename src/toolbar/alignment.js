/**
 *  Toolbar sample to demonstrate alignment functionalities.
 */
this.default = function() {
     var ele = '<div class= "e-folder"><div class = "e-folder-name">Inbox(33)</div>';
     ele = ele +  '<div class ="e-mail-id">user@example.com</div></div> ';
     //Initialize Toolbar component
     var toolbarObj = new ej.navigations.Toolbar({
         items: [
            {
              prefixIcon: 'e-tbar-menu-icon tb-icons', tooltipText: 'Menu' },
            {
              template: ele,
              align: 'Center' },
            {
              prefixIcon: 'e-tbar-search-icon tb-icons', tooltipText: 'Search', align: 'Right' },
            {
              prefixIcon: 'e-tbar-settings-icon tb-icons', tooltipText: 'Popup', align: 'Right' } ]
    });
    //Render initialized Toolbar component
    toolbarObj.appendTo('#toolbar_align');
};