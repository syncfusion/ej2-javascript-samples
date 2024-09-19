/**
 * Sample for Area Series
 */
 this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime', minimum: new Date(1973, 1, 1), maximum: new Date(2018, 1, 1), labelFormat: 'y', majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'In Billions (USD)', labelFormat: '{value}', interval: 5, minimum: 0, maximum: 25, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        annotations: [
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white; font-size: 8px;">8-TRACK</div>' : '<div style="font-weight: bold; color: white; font-size: 11px;">8-TRACK</div>',
                region: 'Series',
                x: '8%',
                y: '95%'
            },
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white;font-size: 8px;">VINYL</div>' : '<div style="font-weight: bold; color: white;font-size: 11px;">VINYL</div>',
                region: 'Series',
                x: '12%',
                y: '80%'
            },
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white;font-size: 8px;">CASSETTE</div>' : '<div style="font-weight: bold; color: white;font-size: 11px;">CASSETTE</div>',
                region: 'Series',
                x: '35%',
                y: '87%'
            },
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white;font-size: 8px;">COMPACT DISC</div>' : '<div style="font-weight: bold; color: white;font-size: 11px;">COMPACT DISC</div>',
                region: 'Series',
                x: '63%',
                y: '70%'
            },
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white;font-size: 8px;">OTHERS</div>' : '<div style="font-weight: bold; color: white;font-size: 11px;">OTHERS</div>',
                region: 'Series',
                x: '75%',
                y: '98%'
            },
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white; font-size: 6px;">DOWNLOAD</div>' : '<div style="font-weight: bold; color: white; font-size: 11px;">DOWNLOAD</div>',
                region: 'Series',
                x: '85%',
                y: '92%'
            },
            {
                content: ej.base.Browser.isDevice ? '<div style="font-weight: bold; color: white;font-size: 7px;"></div>' : '<div style="font-weight: bold; color: white;font-size: 11px;">STREAMING</div>',
                region: 'Series',
                x: '93%',
                y: '96%'
            },
        ],
        //Initializing Chart Series
        series: [
            {
                type: 'Area',
                dataSource: [{ x: new Date(1990, 0, 1), y: 0.69 }, { x: new Date(1992, 0, 1), y: 2.86 }, { x: new Date(1995, 0, 1), y: 10.2 },
                { x: new Date(1996, 0, 1), y: 13.0 }, { x: new Date(1997, 0, 1), y: 14.35 }, { x: new Date(1998, 0, 1), y: 15.17 },
                { x: new Date(1999, 0, 1), y: 14.89 }, { x: new Date(2000, 0, 1), y: 18.96 }, { x: new Date(2001, 0, 1), y: 18.78 },
                { x: new Date(2004, 0, 1), y: 14.25 }, { x: new Date(2005, 0, 1), y: 14.24 }, { x: new Date(2006, 0, 1), y: 12.34 },
                { x: new Date(2007, 0, 1), y: 9.34 }, { x: new Date(2008, 0, 1), y: 4.45 }, { x: new Date(2010, 0, 1), y: 1.46 },
                { x: new Date(2011, 1, 1), y: 0.64 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1,
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(2004, 0, 1), y: 0.48 }, { x: new Date(2007, 0, 1), y: 1.45 }, { x: new Date(2012, 0, 1), y: 2.82 },
                { x: new Date(2013, 0, 1), y: 2.58 }, { x: new Date(2015, 0, 1), y: 2.01 }, { x: new Date(2016, 0, 1), y: 1.61 },
                { x: new Date(2017, 0, 1), y: 0.8 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1,
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(2011, 0, 1), y: 0.48 }, { x: new Date(2013, 0, 1), y: 1.61 }, { x: new Date(2015, 0, 1), y: 2.12 },
                { x: new Date(2017, 0, 1), y: 7.18 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1,
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(1976, 0, 1), y: 0.08 }, { x: new Date(1979, 0, 1), y: 1.85 }, { x: new Date(1980, 0, 1), y: 2.0 },
                { x: new Date(1982, 0, 1), y: 3.55 }, { x: new Date(1984, 0, 1), y: 5.4 }, { x: new Date(1985, 0, 1), y: 5.24 },
                { x: new Date(1988, 0, 1), y: 6.94 }, { x: new Date(1989, 0, 1), y: 6.85 }, { x: new Date(1990, 0, 1), y: 7.02 },
                { x: new Date(1992, 0, 1), y: 5.81 }, { x: new Date(1993, 0, 1), y: 5.32 }, { x: new Date(1994, 0, 1), y: 4.03 },
                { x: new Date(1997, 0, 1), y: 2.25 }, { x: new Date(1998, 0, 1), y: 2.01 }, { x: new Date(1999, 0, 1), y: 0.8 },
                { x: new Date(2001, 0, 1), y: 0.4 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1,
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(1973, 0, 1), y: 7.74 }, { x: new Date(1974, 0, 1), y: 7.58 }, { x: new Date(1976, 0, 1), y: 8.23 },
                { x: new Date(1977, 0, 1), y: 9.68 }, { x: new Date(1978, 0, 1), y: 10.16 }, { x: new Date(1979, 0, 1), y: 8.15 },
                { x: new Date(1981, 0, 1), y: 6.77 }, { x: new Date(1982, 0, 1), y: 5.64 }, { x: new Date(1984, 0, 1), y: 4.35 },
                { x: new Date(1985, 0, 1), y: 2.5 }, { x: new Date(1989, 0, 1), y: 0.64 }, { x: new Date(1990, 0, 1), y: 0 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1,
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(1973, 0, 1), y: 2.58 }, { x: new Date(1975, 0, 1), y: 2.25 }, { x: new Date(1977, 0, 1), y: 3.55 },
                { x: new Date(1978, 0, 1), y: 2.42 }, { x: new Date(1981, 0, 1), y: -0.24 }, { x: new Date(1982, 0, 1), y: -0 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1
            },
            {
                type: 'Area',
                dataSource: [{ x: new Date(1988, 0, 1), y: -0.16 }, { x: new Date(1989, 0, 1), y: -0.17 }, { x: new Date(1990, 0, 1), y: -0.08 },
                { x: new Date(1992, 0, 1), y: 0.08 }, { x: new Date(1996, 0, 1), y: 0.161 }, { x: new Date(1998, 0, 1), y: 0.48 },
                { x: new Date(1999, 0, 1), y: 0.16 }, { x: new Date(2001, 0, 1), y: 0.4 }, { x: new Date(2002, 0, 1), y: 0.32 },
                { x: new Date(2003, 0, 1), y: 0.807 }, { x: new Date(2005, 0, 1), y: 1.12 }, { x: new Date(2006, 0, 1), y: 1.614 },
                { x: new Date(2008, 0, 1), y: 1.21 }, { x: new Date(2009, 0, 1), y: 1.12 }, { x: new Date(2011, 0, 1), y: 0.64 },
                { x: new Date(2013, 0, 1), y: 0.161 }, { x: new Date(2018, 0, 1), y: -0.08 }],
                xName: 'x', width: 2, border: { width: 1.5, color: 'white' },
                yName: 'y',
                opacity: 1
            },
        ],
        //Initializing Chart Title
        title: 'US Music Sales By Format',
        width: ej.base.Browser.isDevice ? '100%' : '75%',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
         // custom code end
    });
    chart.appendTo('#area-container');
};