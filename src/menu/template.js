/**
 * Menu Template sample
 */
ej.base.enableRipple(false);

this.default = function() {

    var data = [
        {
            category: 'Products',
            options: [
                { value: 'JavaScript' },
                { value: 'Angular' },
                { value: 'ASP.NET Core' },
                { value: 'ASP.NET MVC' }
            ]
        },
        {
            category: 'Services',
            options: [
                {
                    support: [
                        { value: 'Application Development', count: '1200+' },
                        { value: 'Maintenance & Support', count: '3700+' },
                        { value: 'Quality Assurance' },
                        { value: 'Cloud Integration', count: '900+' }
                    ]
                }
            ]
        },
        { 
            category: 'About Us',
            options: [
                {
                    about: {
                        value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                    }
                }
            ]
        },
        { category: 'Careers' },
        { category: 'Sign In' },
    ];

    var menuFields = {
        text: ['category', 'value'],
        children: ['options'],
        template: '#menuTemplate'
    };

    //Menu model definition 
    var menuOptions = {
        items: data,
        fields: menuFields
    };
    
    //Menu initialization
    var menuObj = new ej.navigations.Menu(menuOptions, '#menu');
};
