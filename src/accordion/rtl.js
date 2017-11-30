/**
 * Accordion RTL Sample
 */
this.default = function () {
    //Initialize Accordion component
    var accordion = new ej.navigations.Accordion({
        enableRtl: true,
        items: [
             { header: 'Athletics', iconCss: 'e-athletics e-acrdn-icons', content: '#athletics', expanded: true },
             { header: 'Water Games', iconCss: 'e-water-game e-acrdn-icons', content: '#water_games' },
             { header: 'Racing', iconCss: 'e-racing-games e-acrdn-icons', content: '#racing_games' },
             { header: 'Indoor Games', iconCss: 'e-indoor-games e-acrdn-icons', content: '#indoor_games' }
        ]
    });
    //Render initialized Accordion component
    accordion.appendTo('#Accordion_rtl');
};