/**
 * Menu API sample
 */

this.default = function() {
    //Menu datasource
    var data = [
        {
            header: 'Events',
            subItems: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ]
        },
        {
            header: 'Movies',
            subItems: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            header: 'Directory',
            subItems: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ]
        },
        {
            header: 'Queries',
            subItems: [
                { text: 'Our Policy' },
                { text: 'Site Map'},
                { text: '24x7 Support'}
            ]
        },
        { header: 'Services' }
    ];

    //Menu fields definition
    var menuFields = {
        text: ['header', 'text', 'value'],
        children: ['subItems', 'options']
    };

    //Menu initialization
    var menuObj = new ej.navigations.Menu({ items: data, fields: menuFields }, '#menu');

    //DropDownList initialization
    new ej.dropdowns.DropDownList(
    {
        value: 'Horizontal',
        popupHeight: '200px',
        change: function (args) {
            menuObj.orientation = args.value;
        }
    },
    '#ddl');    
    var headerData = [{ text: 'Events' }, { text: 'Movies'}, { text: 'Directory' }, { text: 'Queries' }, { text: 'Services' }];

    //MultiSelect initialization
    new ej.dropdowns.MultiSelect(
    {
        dataSource: headerData,
        popupHeight: '250px',
        width: '160px',
        mode: 'CheckBox',
        allowFiltering: false,
        placeholder: 'Select item',
        showDropDownIcon: true,
        change: function (args) {
            if (args.value) {
                menuObj.enableItems(['Events', 'Movies', 'Directory', 'Queries', 'Services'], true);
                menuObj.enableItems(args.value, false);
            }
        }
    },
    '#enableDisable');

    //CheckBox initialization
    new ej.buttons.CheckBox(
    {
        checked: false,
        change: function (args) {
            menuObj.showItemOnClick = args.checked;
        }
    },
    '#show-btn');
};
