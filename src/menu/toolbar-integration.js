/**
 * Menu - toolbar integration sample
 */

this.default = function () {
    var menuTemplate = '<ul id="menu"></ul>';
    var searchTemplate = '<div class="e-input-group"><input class="e-input" type="text" placeholder="Search" /><span class="e-input-group-icon em-icons e-search"></span></div>';
    var dropDownBtnTemplate = '<button id="userDBtn">Andrew</button>';

    // Initialize Toolbar component
    new ej.navigations.Toolbar(
        {
            created: create,
            items: [
                { template: menuTemplate },
                { template: searchTemplate, align: 'right' },
                { template: dropDownBtnTemplate, align: 'right' },
                { prefixIcon: 'em-icons e-shopping-cart', align: 'right' },
            ]
        },
        '#shoppingtoolbar');

    function create() {
        // Menu items definition 
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

        // Initialize Menu component
        new ej.navigations.Menu({ items: menuItems }, '#menu');

        // Initialize DropDownButton component
        new ej.splitbuttons.DropDownButton({ items: userData }, '#userDBtn');

        this.refreshOverflow();
        this.element.querySelector('.e-shopping-cart').classList.remove('e-icons');
    }
};