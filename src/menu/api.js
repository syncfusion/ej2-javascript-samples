/**
 * Menu API sample
 */
this.default = function() {
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
    var menuFields = {
        iconCss: 'icon',
        text: ['header', 'text', 'value'],
        children: ['subItems', 'options']
    };
    var menuOptions = {
        items: data,
        fields: menuFields
    };
    var menuObj = new ej.navigations.Menu(menuOptions, '#menu');
    menuObj.enableItems(['Queries'], false);
    var ddlObj = new ej.dropdowns.DropDownList(
    {
        value: 'horizontal',
        popupHeight: '200px',
        change: function (args) {
            menuObj.orientation = args.value;
        }
    },
    '#ddl');
    var enableItems = [{ text: 'Queries' }];
    var enableddlObj = new ej.dropdowns.DropDownList(
    {
        value: '',
        dataSource: enableItems,
        popupHeight: '400px',
        change: function(args) {
            if (args.value) {
                menuObj.enableItems([args.value], true);
                var itemIdx = enableddlObj.dataSource.indexOf(args.itemData);
                if (itemIdx > -1) {
                    var newDataSouce = []; 
                    ej.base.merge(newDataSouce, enableddlObj.dataSource);
                    newDataSouce.splice(itemIdx, 1);
                    enableddlObj.dataSource = newDataSouce;
                    enableddlObj.dataBind();

                    newDataSouce = [args.itemData];
                    ej.base.merge(newDataSouce, disableddlObj.dataSource);
                    newDataSouce.push(args.itemData);
                    disableddlObj.dataSource = newDataSouce;
                    disableddlObj.dataBind();
                }
            }
        }
    },
    '#enableddl');
    var disableItems = [{ text: 'Events' }, { text: 'Movies'}, { text: 'Directory' }, { text: 'Services' }];
    var disableddlObj = new ej.dropdowns.DropDownList(
    {
        value: '',
        dataSource: disableItems,
        popupHeight: '400px',
        change: function (args) {
            if (args.value) {
                menuObj.enableItems([args.value], false);
                var itemIdx = disableddlObj.dataSource.indexOf(args.itemData);
                if (itemIdx > -1) {
                    var newDataSouce = []; 
                    ej.base.merge(newDataSouce, disableddlObj.dataSource);
                    newDataSouce.splice(itemIdx, 1);
                    disableddlObj.dataSource = newDataSouce;
                    disableddlObj.dataBind();

                    newDataSouce = [];
                    ej.base.merge(newDataSouce, enableddlObj.dataSource);
                    newDataSouce.push(args.itemData);
                    enableddlObj.dataSource = newDataSouce;
                    enableddlObj.dataBind();
                }
            }
        }
    },
    '#disableddl');
    var showBtn = new ej.buttons.CheckBox(
    {
        checked: false,
        change: function (args) {
            menuObj.showItemOnClick = args.checked;
        }
    },
    '#show-btn');
};
