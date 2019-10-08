/**
 * Sample for Doughnut chart
 */
this.default = function () {
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                dataSource: [{  x:  'Labour',  y:  18,  text:  '18%'  }, {  x:  'Legal',  y:  8,  text:  '8%'  },
                {  x:  'Production',  y:  15,  text:  '15%'  }, {  x:  'License',  y:  11,  text:  '11%'  },
                {  x:  'Facilities',  y:  18,  text:  '18%'  }, {  x:  'Taxes',  y:  14,  text:  '14%'  },
                {  x:  'Insurance',  y:  16,  text:  '16%'  }],
                dataLabel: {
                    visible: true,
                    name: 'text',
                    position: 'Inside',
                    font: {
                        fontWeight: '600',
                        color: '#ffffff'
                    }
                },
                radius: '70%', xName: 'x',
                yName: 'y', startAngle: 0,
                endAngle: 360, innerRadius: '40%', name: 'Project',
                explode: true, explodeOffset: '10%', explodeIndex: 3
            }
        ],
        enableSmartLabels: true,
        legendSettings: {
            visible: true, position: 'Top'
        },
        //Initializing Tooltip
        tooltip: { enable: true },
        //Initializing Title
        title: 'Project Cost Breakdown',
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
         // custom code end
    });
    pie.appendTo('#container');
};