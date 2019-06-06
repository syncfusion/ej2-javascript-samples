/**
 * Hamburger Menu sample.
 */
this.default = function() {

    // Menu items definition 
    var menuItems = [
        {
            "text": "Accessories",
            "items": [
                {
                    "text": "Mobile",
                    "id": "mobile",
                    "items": [
                        {
                            "text": "Headphones"
                        },
                        {
                            "text": "Batteries"
                        },
                        {
                            "text": "Memory Cards"
                        }
                    ]
                },
                {
                    "text": "Laptops"
                },
                {
                    "text": "Desktop PC",
                    "items": [
                        {
                            "text": "Pendrives"
                        },
                        {
                            "text": "External Hard Disks"
                        }
                    ]
                },
                {
                    "text": "Camera",
                    "items": [
                        {
                            "text": "Lens"
                        },
                        {
                            "text": "Tripods"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Fashion",
            "items": [
                {
                    "text": "Men"
                },
                {
                    "text": "Women"
                }
            ]
        },
        {
            "text": "Home & Living",
            "items": [
                {
                    "text": "Furniture"
                },
                {
                    "text": "Decor"
                },
                {
                    "text": "Smart Home Automation"
                },
                {
                    "text": "Dining & Serving"
                }
            ]
        },
        {
            "text": "Entertainment",
            "items": [
                {
                    "text": "Televisions"
                },
                {
                    "text": "Home Theatres"
                },
                {
                    "text": "Gaming Laptops"
                }
            ]
        },
        {
            "text": "Contact Us"
        },
        {
            "text": "Help"
        }
    ];

    //Menu initialization
    var menuObj = new ej.navigations.Menu(
        {
            // custom code start
            created: function() {
                if (ej.base.Browser.isDevice) {
                    ej.base.select('.property-section').remove();
                    ej.base.select('#layoutcontainer').removeAttribute('class');
                    ej.base.select('#layoutcontainer').removeAttribute('id');
                    ej.base.select('#menu').style.height = '363px';
                }
            },
            // custom code end
            items: menuItems,
            //Enable the hamburger mode.
            hamburgerMode: true,
            //Enable the item show on click.
            showItemOnClick: true,
            // Increased duration for smooth animation.
            animationSettings: { duration: 800 }
        },
        '#menu');

    //DropDownList initialization
    new ej.dropdowns.DropDownList(
        {
            value: 'mobile',
            popupHeight: '200px',
            change: function (args) {
                var container = document.querySelector('#layoutcontainer');
                switch (args.value) {
                    case 'mobile':
                    case 'tablet':
                        menuObj.close();
                        container.classList.add('deviceLayout');
                        container.classList[args.value === 'mobile' ? 'remove' : 'add']('tabletview');
                        menuObj.element.parentElement.classList[args.value === 'mobile' ? 'remove' : 'add']('e-menu-icon-right');
                        menuObj.hamburgerMode = true;
                        menuObj.showItemOnClick = true;
                    break;
                    case 'desktop':
                        container.classList.remove('deviceLayout', 'tabletview');
                        menuObj.hamburgerMode = false;
                        menuObj.showItemOnClick = false;
                    break;
                }
            }
        },
        '#ddlViewMode');
};
