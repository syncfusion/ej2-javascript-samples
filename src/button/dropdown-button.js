this.default = function() {
    // DropDownButton items declaration
    var items = [
        {
            text: 'Dashboard',
            iconCss: 'e-ddb-icons e-dashboard'
        },
        {
            text: 'Notifications',
            iconCss: 'e-ddb-icons e-notifications',
        },
        {
            text: 'User Settings',
            iconCss: 'e-ddb-icons e-settings',
        },
        {
            text: 'Log Out',
            iconCss: 'e-ddb-icons e-logout'
        }];

    var btnObj = new ej.splitbuttons.DropDownButton({ items: items, iconCss: 'e-ddb-icons e-profile' });
    btnObj.appendTo('#iconbtn');

    btnObj = new ej.splitbuttons.DropDownButton({ items: items });
    btnObj.appendTo('#textbtn');

    btnObj = new ej.splitbuttons.DropDownButton({ items: items, iconCss: 'e-ddb-icons e-profile' });
    btnObj.appendTo('#icontextbtn');

    btnObj = new ej.splitbuttons.DropDownButton({items: items, cssClass: 'e-caret-hide'});
    btnObj.appendTo('#custombtn'); 
};