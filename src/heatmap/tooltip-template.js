this.default = function () {
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Crude Oil Production of Non-OPEC Countries (in Million barrels per day)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Canada', 'China', 'Egypt', 'Mexico', 'Norway', 'Russia', 'UK', 'USA'],
            labelRotation: 45,
            labelIntersectAction: 'None',
        },
        yAxis: {
            labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
        },
        dataSource: window.defaultTableDataSource,
        cellSettings: {
            border: {
                width: 0
            },
            format: '{value} M'
        },
        legendSettings: {
            visible: false,
        },
        paletteSettings: {
            palette: [{ value: 0, color: '#C2E7EC' },
            { value: 0.6, color: '#AEDFE6' },
            { value: 0.75, color: '#9AD7E0' },
            { value: 1, color: '#86CFDA' },
            { value: 1.5, color: '#72C7D4' },
            { value: 2, color: '#5EBFCE' },
            { value: 2.5, color: '#4AB7C8' },
            { value: 3, color: '#36AFC2' },
            { value: 3.5, color: '#309DAE' },
            { value: 5, color: '#2B8C9B' },
            { value: 5.5, color: '#257A87' },
            { value: 6, color: '#206974' },
            { value: 8, color: '#1B5761' },
            { value: 9, color: '#15464D' },
            { value: 9.5, color: '#000000' },
            ],
            type: 'Fixed'
        },
        tooltipSettings: {
            fill: '#265259',
            textStyle: {
                color: '#FFFFFF',
                size:"12px"
            },
            border:{
                width:1,
                color:"#98BABF"
            }
        },
        tooltipRender: function (args) {
            args.content = ['In ' + args.yLabel + ', the ' + args.xLabel + ' produced ' + args.value + ' million barrels per day'];
        },
        load: function (args) {
            var templateTheme = location.hash.split('/')[1];
            templateTheme = templateTheme ? templateTheme : 'Material';
            args.heatmap.theme = (templateTheme.charAt(0).toUpperCase() + templateTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
    });
    heatmap.appendTo('#container');
};
