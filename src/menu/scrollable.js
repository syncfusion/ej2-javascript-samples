/**
 * Scrollable Menu sample
 */
this.default = function() {
    // Menu items definition
    var menuItems = [
        {
            text: 'Appliances',
            id: 'appliances',
            items: [
                {
                    text: 'Kitchen',
                    items: [
                        { text: 'Electric Cookers' },
                        { text: 'Coffee Makers' },
                        { text: 'Blenders' },
                        { text: 'Microwave Ovens' }
                    ]
                },
                {
                    text: 'Television',
                    items: [
                        { text: 'Our Exclusive TVs' },
                        { text: 'Smart TVs' },
                        { text: 'Big Screen TVs' }
                    ]
                },
                {
                    text: 'Washing Machine'
                },
                {
                    text: 'Refrigerators'
                },
                {
                    text: 'Air Conditioners',
                    items: [
                        { text: 'Inverter ACs' },
                        { text: 'Split ACs' },
                        { text: 'Window ACs' },
                    ]
                },
                {
                    text: 'Water Purifiers'
                },
                {
                    text: 'Air Purifiers'
                },
                {
                    text: 'Chimneys'
                },
                {
                    text: 'Inverters'
                },
                {
                    text: 'Healthy Living'
                },
                {
                    text: 'Vacuum Cleaners'
                },
                {
                    text: 'Room Heaters'
                },
                {
                    text: 'New Launches'
                }
            ]
        },
        {
            text: 'Accessories',
            items: [
                {
                    text: 'Mobile',
                    id: 'mobile',
                    items: [
                        { text: 'Headphones' },
                        { text: 'Batteries' },
                        { text: 'Memory Cards' },
                        { text: 'Power Banks' },
                        { text: 'Mobile Cases' },
                        { text: 'Screen Protectors' },
                        { text: 'Data Cables' },
                        { text: 'Chargers' },
                        { text: 'Selfie Sticks' },
                        { text: 'OTG Cable' }
                    ]
                },
                {
                    text: 'Laptops'
                },
                {
                    text: 'Desktop PC',
                    items: [
                        { text: 'Pendrives' },
                        { text: 'External Hard Disks' },
                        { text: 'Monitors' },
                        { text: 'Keyboards' }
                    ]
                },
                {
                    text: 'Camera',
                    items: [
                        { text: 'Lens' },
                        { text: 'Tripods' }
                    ]
                }
            ]
        },
        {
            text: 'Fashion',
            items: [
                {
                    text: 'Men'
                },
                {
                    text: 'Women'
                }
            ]
        },
        {
            text: 'Home & Living',
            items: [
                {
                    text: 'Furniture'
                },
                {
                    text: 'Decor'
                },
                {
                    text: 'Smart Home Automation'
                },
                {
                    text: 'Dining & Serving'
                }
            ]
        },
        {
            text: 'Entertainment',
            items: [
                {
                    text: 'Televisions'
                },
                {
                    text: 'Home Theatres'
                },
                {
                    text: 'Gaming Laptops'
                }
            ]
        },
        {
            text: 'Contact Us'
        },
        {
            text: 'Help'
        }
    ];

    // Menu model definition 
    var menuOptions = {
        items: menuItems,
        cssClass: 'e-custom-scroll',
        // Allows to enable the scroll option
        enableScrolling: true,
        // Increased duration for smooth animation.
        animationSettings: { duration: 800 },
        beforeOpen: function(args) {
            // Restricting sub menu wrapper height
            if (args.parentItem.text === 'Appliances') {
                ej.base.closest(args.element, '.e-menu-wrapper').style.height = '320px';
            }
            if (args.parentItem.text === 'Mobile') {
                ej.base.closest(args.element, '.e-menu-wrapper').style.height = '260px';
            }
        }
    };

    // Menu initialization
    new ej.navigations.Menu(menuOptions, '#menu');
};
