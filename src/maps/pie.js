
    this.default = function () {
        var chart, chart1, chart2, chart3, chart4, chart5;
        var maps = new ej.maps.Maps({
            // custom code start
            load: function (args) {
                var pieTheme = location.hash.split('/')[1];
                pieTheme = pieTheme ? pieTheme : 'Material';
                args.maps.pieTheme = (pieTheme.charAt(0).toUpperCase() + pieTheme.slice(1));
            },
            // custom code end
            resize: function (args){
                chart.destroy();
                chart1.destroy();
                chart2.destroy();
                chart3.destroy();
                chart4.destroy();
                chart5.destroy();
            },
            loaded: function(args){
                chart = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    width: '70',
                    height: '70',
                    legendSettings:{
                        visible: false
                    },
                    tooltip: {
                        enable: true,
                        format: '${point.x} : ${point.y}%'
                    },
                    series: [
                        {
                            animation: {
                                enable: false
                            },
                            explode: true,
                            explodeIndex: 0,
                            explodeOffset: '20%',
                            name: 'Russia',
                            palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                            dataSource: [
                                { 'x': '0-14 years', y: 16 }, { 'x': '15-24 years', y: 11.5 },
                                { 'x': '25-54 years', y: 45.9 }, { 'x': '55-64 years', y: 13.5 },
                            ],
                            type: 'Pie',
                            xName: 'x',
                            yName: 'y'
                        }
                    ]
                });
                chart.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_0');
                chart1 = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    width: '70',
                    height: '70',
                    legendSettings:{
                        visible: false
                    },
                    tooltip: {
                        enable: true,
                        format: '${point.x} : ${point.y}%'
                    },
                    series: [
                        {
                            animation: {
                                enable: false
                            },
                            explode: true,
                        explodeIndex: 0,
                        explodeOffset: '20%',
                        name: 'Canada',
                        palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                        dataSource: [
                            { 'x': '0-14 years', y: 15.5 }, { 'x': '15-24 years', y: 12.9 },
                            { 'x': '25-54 years', y: 41.4 }, { 'x': '55-64 years', y: 13.3 },
                        ],
                        type: 'Pie',
                        xName: 'x',
                        yName: 'y'
                        }
                    ]
                });
                chart1.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_1');
                chart2 = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    width: '70',
                    height: '70',
                    legendSettings:{
                        visible: false
                    },
                    tooltip: {
                        enable: true,
                        format: '${point.x} : ${point.y}%'
                    },
                    series: [
                        {
                            animation: {
                                enable: false
                            },
                            explode: true,
                            explodeIndex: 0,
                            explodeOffset: '20%',
                            name: 'USA',
                            palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                            dataSource: [
                                { 'x': '0-14 years', y: 20 }, { 'x': '15-24 years', y: 13.7 },
                                { 'x': '25-54 years', y: 40.2 }, { 'x': '55-64 years', y: 12.3 },
                            ],
                            type: 'Pie',
                            xName: 'x',
                            yName: 'y'
                        }
                    ]
                });
                chart2.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_2');
                chart3 = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    width: '70',
                    height: '70',
                    legendSettings:{
                        visible: false
                    },
                    tooltip: {
                        enable: true,
                        format: '${point.x} : ${point.y}%'
                    },
                    series: [
                        {
                            animation: {
                                enable: false
                            },
                            explode: true,
                        explodeIndex: 0,
                        explodeOffset: '20%',
                        name: 'China',
                        palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                        dataSource: [
                            { 'x': '0-14 years', y: 17.2 }, { 'x': '15-24 years', y: 15.4 },
                            { 'x': '25-54 years', y: 46.9 }, { 'x': '55-64 years', y: 11.3 },
                        ],
                        type: 'Pie',
                        xName: 'x',
                        yName: 'y'
                        }
                    ]
                });
                chart3.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_3');
                chart4 = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    width: '70',
                    height: '70',
                    legendSettings:{
                        visible: false
                    },
                    tooltip: {
                        enable: true,
                        format: '${point.x} : ${point.y}%'
                    },
                    series: [
                        {
                            animation: {
                                enable: false
                            },
                            explode: true,
                            explodeIndex: 0,
                            explodeOffset: '20%',
                            name: 'Brazil',
                            palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                            dataSource: [
                                { 'x': '0-14 years', y: 24.2 }, { 'x': '15-24 years', y: 16.7 },
                                { 'x': '25-54 years', y: 43.6 }, { 'x': '55-64 years', y: 8.2 },
                            ],
                            type: 'Pie',
                            xName: 'x',
                            yName: 'y'
                        }
                    ]
                });
                chart4.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_4');
                chart5 = new ej.charts.AccumulationChart({
                    background: 'transparent',
                    width: '70',
                    height: '70',
                    legendSettings:{
                        visible: false
                    },
                    tooltip: {
                        enable: true,
                        format: '${point.x} : ${point.y}%'
                    },
                    series: [
                        {
                            animation: {
                                enable: false
                            },
                            explode: true,
                        explodeIndex: 0,
                        explodeOffset: '20%',
                        name: 'Australia',
                        palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],
                        dataSource: [
                            { 'x': '0-14 years', y: 18.1 }, { 'x': '15-24 years', y: 13.4 },
                            { 'x': '25-54 years', y: 42 }, { 'x': '55-64 years', y: 11.8 },
                        ],
                        type: 'Pie',
                        xName: 'x',
                        yName: 'y'
                        }
                    ]
                });
                chart5.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_5');
            },
            titleSettings: {
                text: 'Top 6 largest countries age group details',
                textStyle: {
                    size: '16px'
                }
            },
            zoomSettings: {
                enable: false
            },
            legendSettings: {
                visible: true,
                position: 'Bottom'
            },
            layers: [
                {
                    shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                    shapeSettings: {
                        fill: '#E5E5E5',
                        colorMapping: [
                            {
                                from: 0, to: 4, color: '#634D6F', label: '0-14 years',
                            },
                            {
                                from: 5, to: 14, color: '#B34D6D', label: '15-24 years'
                            },
                            {
                                from: 15, to: 59, color: '#557C5C', label: '25-54 years'
                            },
                            {
                                from: 60, to: 100, color: '#5E55E2', label: '55-64 years'
                            }
                        ]
                    },
                    markerSettings: [
                        {
                            visible: true,
                            template: '#template',
                            dataSource: [
                                { 'latitude': 61.938950426660604, 'longitude': 97.03125 },
                                { 'latitude': 57.70414723434193, 'longitude': -114.08203125 },
                                { 'latitude': 39.90973623453719, 'longitude': -103.0078125 },
                                { 'latitude': 35.746512259918504, 'longitude': 102.216796875 },
                                { 'latitude': -8.667918002363107, 'longitude': -52.55859375 },
                                { 'latitude': -23.725011735951796, 'longitude': 132.978515625 }
                            ],
                            animationDuration: 0
                        }
                    ]
                }
            ]
        });
        maps.appendTo('#container');        
    };