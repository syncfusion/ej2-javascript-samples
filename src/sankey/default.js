/* eslint-disable */

this.default = function () {
    var nodes = [
        { id: 'Electricity Generation', offset: -120 },

        { id: 'Residential', offset: 38 },
        { id: 'Commercial', offset: 36 },
        { id: 'Industrial', offset: 34 },
        { id: 'Transportation', offset: 32 },

        { id: 'Rejected Energy', offset: -40 },
        { id: 'Energy Services' },

        { id: 'Solar' },
        { id: 'Nuclear' },
        { id: 'Wind' },
        { id: 'Geothermal' },
        { id: 'Natural Gas' },
        { id: 'Coal' },
        { id: 'Biomass' },
        { id: 'Petroleum', offset: -10 }
    ];

    var links = [
        // All generation inputs
        { sourceId: 'Solar', targetId: 'Electricity Generation', value: 454 },
        { sourceId: 'Nuclear', targetId: 'Electricity Generation', value: 185 },
        { sourceId: 'Wind', targetId: 'Electricity Generation', value: 47.8 },
        { sourceId: 'Geothermal', targetId: 'Electricity Generation', value: 40 },
        { sourceId: 'Natural Gas', targetId: 'Electricity Generation', value: 800 },
        { sourceId: 'Coal', targetId: 'Electricity Generation', value: 28.7 },
        { sourceId: 'Biomass', targetId: 'Electricity Generation', value: 50 },

        // Electricity Generation + direct sources → Residential
        { sourceId: 'Electricity Generation', targetId: 'Residential', value: 182 },
        { sourceId: 'Natural Gas', targetId: 'Residential', value: 400 },
        { sourceId: 'Petroleum', targetId: 'Residential', value: 50 },

        // Electricity Generation + direct sources → Commercial
        { sourceId: 'Electricity Generation', targetId: 'Commercial', value: 351 },
        { sourceId: 'Natural Gas', targetId: 'Commercial', value: 300 },

        // Electricity Generation + direct sources → Industrial
        { sourceId: 'Electricity Generation', targetId: 'Industrial', value: 641 },
        { sourceId: 'Natural Gas', targetId: 'Industrial', value: 786 },
        { sourceId: 'Biomass', targetId: 'Industrial', value: 563 },
        { sourceId: 'Petroleum', targetId: 'Industrial', value: 300 },

        // Electricity Generation + direct sources → Transportation
        { sourceId: 'Electricity Generation', targetId: 'Transportation', value: 20 },
        { sourceId: 'Natural Gas', targetId: 'Transportation', value: 51 },
        { sourceId: 'Biomass', targetId: 'Transportation', value: 71 },
        { sourceId: 'Petroleum', targetId: 'Transportation', value: 2486 },

        // Sectors → Rejected Energy
        { sourceId: 'Residential', targetId: 'Rejected Energy', value: 432 },
        { sourceId: 'Commercial', targetId: 'Rejected Energy', value: 351 },
        { sourceId: 'Industrial', targetId: 'Rejected Energy', value: 972 },
        { sourceId: 'Transportation', targetId: 'Rejected Energy', value: 1920 },

        // Sectors → Energy Services
        { sourceId: 'Residential', targetId: 'Energy Services', value: 200 },
        { sourceId: 'Commercial', targetId: 'Energy Services', value: 300 },
        { sourceId: 'Industrial', targetId: 'Energy Services', value: 755 },
        { sourceId: 'Transportation', targetId: 'Energy Services', value: 637 }
    ];

    var sankey = new ej.charts.Sankey({
        width: '90%',
        height: ej.base.Browser.isDevice ? '600' : '450',  // increased for better spacing
        title: 'California Energy Consumption in 2023',
        subTitle: 'Source: Lawrence Livermore National Laboratory',
        nodes: nodes,
        links: links,
        linkStyle: {
            opacity: 0.6,
            curvature: 0.55,
            colorType: 'Source'
        },

        labelSettings: {
            visible: ej.base.Browser.isDevice ? false : true,
        },
        tooltip: {
            enable: true,
            nodeTemplate: '${name}: ${value} TBtu',
            linkTemplate: ej.base.Browser.isDevice ? '${start.name}: ${start.out} TBtu → <br/> ${target.name}: ${target.in} TBtu' : '${start.name}: ${start.out} TBtu → ${target.name}: ${target.in} TBtu',
        },
        legendSettings: { visible: true, position: 'Bottom', itemPadding: 8 },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light')
                .replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
    });
    sankey.appendTo('#sankey-container');
};