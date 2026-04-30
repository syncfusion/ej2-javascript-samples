/* eslint-disable */

this.default = function () {
    var nodes = [
        // Sources - ordered top to bottom (Transportation highest at top)
        { id: 'Transportation' },
        { id: 'Industry' },
        { id: 'Commercial' },
        { id: 'Residential' },
        { id: 'Agriculture' },

        // Middle sub-processes
        { id: 'Road (Cars/Trucks)' },
        { id: 'Aviation & Other Transport' },
        { id: 'Direct Emissions' },
        { id: 'Indirect Electricity Use' },

        // Final sink/outcome
        { id: 'Atmosphere (Gross Emissions)' }
    ];

    var links = [
        // Transportation flows
        { sourceId: 'Transportation', targetId: 'Road (Cars/Trucks)', value: 1482 },
        { sourceId: 'Transportation', targetId: 'Aviation & Other Transport', value: 326 },

        // Industry flows
        { sourceId: 'Industry', targetId: 'Direct Emissions', value: 1416 },
        { sourceId: 'Industry', targetId: 'Indirect Electricity Use', value: 457 },

        // Commercial & Residential → mostly indirect electricity
        { sourceId: 'Commercial', targetId: 'Indirect Electricity Use', value: 600 },
        { sourceId: 'Residential', targetId: 'Indirect Electricity Use', value: 500 },

        // Agriculture → direct emissions (methane/N2O dominant)
        { sourceId: 'Agriculture', targetId: 'Direct Emissions', value: 664 },

        // Middle → Atmosphere (main sink)
        { sourceId: 'Road (Cars/Trucks)', targetId: 'Atmosphere (Gross Emissions)', value: 1482 },
        { sourceId: 'Aviation & Other Transport', targetId: 'Atmosphere (Gross Emissions)', value: 326 },
        { sourceId: 'Direct Emissions', targetId: 'Atmosphere (Gross Emissions)', value: 2080 },
        { sourceId: 'Indirect Electricity Use', targetId: 'Atmosphere (Gross Emissions)', value: 1557 }
    ];

    var sankey = new ej.charts.Sankey({
        width: '90%',
        height: '650px',
        title: ej.base.Browser.isDevice ? 'U.S. Greenhouse Gas Emissions' : 'U.S. Greenhouse Gas Emissions by Economic Sector (2022)',
        subTitle: 'Source: EPA 2022 GHG Inventory',
        orientation: 'Vertical',
        nodes: nodes,
        links: links,
        linkStyle: {
            opacity: 0.5,
            curvature: 0.55,
            colorType: 'Source'
        },
        nodeStyle: {
            width: 30,
            padding: 8,
            opacity: 1
        },
        labelSettings: {
            visible: ej.base.Browser.isDevice ? false : true,
        },
        tooltip: {
            enable: true,
            nodeTemplate: '${name}: ${value} MMT CO₂e',
            linkTemplate: ej.base.Browser.isDevice ? '${start.name}: ${start.out} MMT CO₂e → <br/> ${target.name}: ${target.in} MMT CO₂e' : '${start.name}: ${start.out} MMT CO₂e → ${target.name}: ${target.in} MMT CO₂e',
        },
        legendSettings: ej.base.Browser.isDevice ? {visible: false} : { visible: true, position: 'Right', margin: {left: 100} },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
    });
    sankey.appendTo('#sankey-orientation');
};