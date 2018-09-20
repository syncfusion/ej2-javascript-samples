/**
 * Menu - toolbar integration sample
 */
ej.base.enableRipple(false);

this.default = function() {
    var menuTemplate = '<ul id="menu"></ul>';
    var searchTemplate = '<div class="e-input-group"><input class="e-input" type="text" placeholder="Search" /><span class="e-icons e-search"></span></div>';
    var dropDownBtnTemplate = '<button id="userDBtn">Andrew</button>';
    var cartTemplate = '<div class="e-tool-name"><span class="e-icons e-shopping-cart"></span></div>';

    //Initialize Toolbar component
    var toolbarObj = new ej.navigations.Toolbar({
        items: [
            { template: menuTemplate },
            { template: searchTemplate + dropDownBtnTemplate + cartTemplate },
        ]
    });

    //Render initialized Toolbar component
    toolbarObj.appendTo('#shoppingtoolbar');

    //Menu items definition 
    var menuItems = [
        { 
            text: 'Appliances',
            items: [
                { 
                    text: 'Kitchen',
                    items: [
                        { text: 'Electric Cookers' },
                        { text: 'Coffee Makers' },
                        { text: 'Blenders' }
                    ]
                },
                { 
                    text: 'Washing Machine',
                    items: [
                        { text: 'Fully Automatic' },
                        { text: 'Semi Automatic' }
                    ]
                },
                { 
                    text: 'Air Conditioners',
                    items: [
                        { text: 'Inverter ACs' },
                        { text: 'Split ACs' },
                        { text: 'Window ACs' }
                    ]
                }
            ]
        },
        { 
            text: 'Accessories',
            items: [
                { 
                    text: 'Mobile',
                    items: [
                        { text: 'Headphones' },
                        { text: 'Memory Cards' },
                        { text: 'Power Banks' }
                    ]
                },
                { 
                    text: 'Computer',
                    items: [
                        { text: 'Pendrives' },
                        { text: 'External Hard Disks' },
                        { text: 'Monitors' }
                    ]
                }
            ]
        },
        { 
            text: 'Fashion',
            items: [
                { 
                    text: 'Men',
                    items: [
                        { text: 'Shirts' },
                        { text: 'Jackets' },
                        { text: 'Track Suits' }
                    ]
                },
                { 
                    text: 'Women',
                    items: [
                        { text: 'Kurtas' },
                        { text: 'Salwars' },
                        { text: 'Sarees' }
                    ]
                }
            ]
        },
        { 
            text: 'Home & Living',
            items: [
                { 
                    text: 'Furniture',
                    items: [
                        { text: 'Beds' },
                        { text: 'Mattresses' },
                        { text: 'Dining Tables' }
                    ]
                },
                { 
                    text: 'Decor',
                    items: [
                        { text: 'Clocks' },
                        { text: 'Wall Decals' },
                        { text: 'Paintings' }
                    ]
                }
            ]
        }
    ];

    var userData = [
        { text: 'My Profile' },
        { text: 'Orders' },
        { text: 'Rewards' },
        { text: 'Logout' }
    ];

    //Menu model definition 
    var menuOptions = {
        items: menuItems
    };

    //Initialize Menu component
    var menuObj = new ej.navigations.Menu(menuOptions, '#menu');

    //Initialize DropDownButton component
    var btnObj = new ej.splitbuttons.DropDownButton({ items: userData });
    btnObj.appendTo('#userDBtn');

};
