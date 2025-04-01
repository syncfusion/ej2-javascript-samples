/**
 * Sample for Step Line Series
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double',
            minimum: 2006,
            maximum: 2025,
            interval: 3,
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 0,
            maximum: 20,
            interval: 4,
            title: 'Sales in million',
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'StepLine',
                dataSource: [
                    { x: 2007, y: 6.0, album: 'High School Musical 2', artist: 'Various Artists' },
                    { x: 2008, y: 6.8, album: 'Viva la Vida or Death and All His Friends', artist: 'Coldplay' },
                    { x: 2009, y: 8.3, album: 'I Dreamed a Dream', artist: 'Susan Boyle' },
                    { x: 2010, y: 5.7, album: 'Recovery', artist: 'Eminem' },
                    { x: 2011, y: 18.1, album: '21', artist: 'Adele' },
                    { x: 2012, y: 8.3, album: '21', artist: 'Adele' },
                    { x: 2013, y: 4.0, album: 'Midnight Memories', artist: 'One Direction' },
                    { x: 2014, y: 10.0, album: 'Frozen', artist: 'Various Artists' },
                    { x: 2015, y: 17.4, album: '25', artist: 'Adele' },
                    { x: 2016, y: 2.5, album: 'Lemonade', artist: 'Beyoncé' },
                    { x: 2017, y: 6.1, album: '÷', artist: 'Ed Sheeran' },
                    { x: 2018, y: 3.5, album: 'The Greatest Showman', artist: 'Hugh Jackman & Various Artists' },
                    { x: 2019, y: 3.3, album: '5x20 All the Best!! 1999–2019', artist: 'Arashi' },
                    { x: 2020, y: 4.8, album: 'Map of the Soul: 7', artist: 'BTS' },
                    { x: 2021, y: 4.68, album: '30', artist: 'Adele' },
                    { x: 2022, y: 7.2, album: 'Greatest Works of Art', artist: 'Jay Chou' },
                    { x: 2023, y: 6.4, album: 'FML', artist: 'Seventeen' },
                    { x: 2024, y: 5.6, album: 'The Tortured Poets Department', artist: 'Taylor Swift' }
                ],
                xName: 'x', width: 3,
                yName: 'y',
                marker: {
                    dataLabel: { visible: true, font: { fontWeight: '600' } }
                }
            }
        ],

        //Initializing Chart title
        title: 'Worldwide Best-Selling Albums by Year',
        subTitle: 'Source: wikipedia.org',
        //Initializing Usr Interaction Tooltip
        tooltip: {
            enable: true,
            showNearestTooltip: true,
            header: "<b>${point.x}</b>",
            enableHighlight: true,
            enableMarker: false
        },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        legendSettings: { visible: false },
        // custom code start
        load: function (args) {
            var stepTheme = location.hash.split('/')[1];
            stepTheme = stepTheme ? stepTheme : 'Fluent2';
            args.chart.theme = (stepTheme.charAt(0).toUpperCase() +
                stepTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        // custom code end
        tooltipRender: function (args) {
            var data = args.series.dataSource[args.point.index];
            args.text = "Sales: <b>" + data.y + "M</b><br/>Album: <b>" + data.album + "</b><br/>Artist: <b>" + data.artist + "</b>";
        }
    });
    chart.appendTo('#sLine-container');
};