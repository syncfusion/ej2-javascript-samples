this.default = function () {
    var jsonTableData = [
        { 'Region': 'USA', '2000': 93, '2004': 101, '2008': 112, '2012': 103, '2016': 121 },
        { 'Region': 'GBR', '2000': 28, '2004': 30, '2008': 49, '2012': 65, '2016': 67 },
        { 'Region': 'China', '2000': 58, '2004': 63, '2008': 100, '2012': 91, '2016': 70 },
        { 'Region': 'Russia', '2000': 89, '2004': 90, '2008': 60, '2012': 69, '2016': 55 },
        { 'Region': 'Germany', '2000': 56, '2004': 49, '2008': 41, '2012': 44, '2016': 42 },
        { 'Region': 'Japan', '2000': 18, '2004': 37, '2008': 25, '2012': 38, '2016': 41 },
        { 'Region': 'France', '2000': 38, '2004': 33, '2008': 43, '2012': 35, '2016': 42 },
        { 'Region': 'KOR', '2000': 28, '2004': 30, '2008': 32, '2012': 30, '2016': 21 },
        { 'Region': 'Italy', '2000': 34, '2004': 32, '2008': 27, '2012': 28, '2016': 28 }];
    var heatmap = new ej.heatmap.HeatMap({
        titleSettings: {
            text: 'Olympic Medal Achievements of most Successful Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
        xAxis: {
            labels: ['China', 'France', 'GBR', 'Germany', 'Italy', 'Japan', 'KOR', 'Russia', 'USA'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            title : {text: 'Olympic Year',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
            },
            labels: ['2000', '2004', '2008', '2012', '2016'],
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: jsonTableData,
        dataSourceSettings: {
            isJsonData: true,
            adaptorType: 'Table',
            xDataMapping: 'Region',
        },
        paletteSettings: {
            palette: [{ color: '#F0C27B' },
            { color: '#4B1248' }
            ],
        },
        cellSettings: {
            border: {
                width: 1,
                radius: 4,
                color: 'white'
            },
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings:{
            textStyle: {
                 fontFamily: 'inherit'
             }
         },
        tooltipRender: function (args) {
            args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' Medals'];
        },
        load: function (args) {
            // custom code start
            var jsonRowTheme = location.hash.split('/')[1];
            jsonRowTheme = jsonRowTheme ? jsonRowTheme : 'Material';
            args.heatmap.theme = (jsonRowTheme.charAt(0).toUpperCase() +
            jsonRowTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
            // custom code end
        }
    });
    heatmap.appendTo('#container');
};
