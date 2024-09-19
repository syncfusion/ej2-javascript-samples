this.default = function () {
    var orderData = [
        {
            'Country': 'Germany',
            'Sales': 500,
            'Target': 400,
            'vsTarget': 300
        }, {
            'Country': 'USA',
            'Sales': 1000,
            'Target': 600,
            'vsTarget': 360
        }, {
            'Country': 'UK',
            'Sales': 600,
            'Target': 700,
            'vsTarget': -100
        }
    ];
    function dataSampleGauge1() {
        var dataSampleGauge1 = new ej.circulargauge.CircularGauge({
            background:'transparent',
            axes: [{
                startAngle: 230,
                endAngle: 130,
                majorTicks: { width: 0 },
                lineStyle: { width: 0 },
                minorTicks: { width: 0 },
                labelStyle: { format:'positive {value}', font: { size: '0', fontFamily: 'inherit' } },
                annotations: [{
                    description:'Positive arrow',
                    content: '#germany',
                    angle: 180, zIndex: 1,
                    radius: '30%'
                }, {
                    description:'Germany',
                    content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">Germany</div>',
                    angle: 180, zIndex: 1,
                    radius: '65%'
                }],
                ranges: [{
                    start: 0, end: 50,
                    startWidth: 15, endWidth: 15,
                    color: '#EC121C'
                }, {
                    start: 50, end: 100,
                    startWidth: 15, endWidth: 15,
                    color: '#45EA0C'
                }],
                pointers: [{
                    value: 75, radius: '60%',
                    animation: { enable: false },
                    color: '#777777', pointerWidth: 5,
                    cap: {
                        radius: 6,
                        border: { width: 0 },
                        color: '#777777'
                    },
                    needleTail: {
                        length: '25%',
                        color: '#777777'
                    }
                }]
            }],
            load: function (args) {
                // custom code start
                var dataSampleTheme1 = location.hash.split('/')[1];
                dataSampleTheme1 = dataSampleTheme1 ? dataSampleTheme1 : 'Material';
                args.gauge.theme = (dataSampleTheme1.charAt(0).toUpperCase() +
                    dataSampleTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
                // custom code end
            }
        });
        return dataSampleGauge1;
    }
    function dataSampleGauge2() {
        var dataSampleGauge2 = new ej.circulargauge.CircularGauge({
            background:'transparent',
            axes: [{
                annotations: [{
                    description:'Positive arrow',
                    content: '#usa',
                    angle: 180, zIndex: 1,
                    radius: '30%'
                }, {
                    description:'USA',
                    content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">USA</div>',
                    angle: 180, zIndex: 1,
                    radius: '65%'
                }],
                startAngle: 230,
                endAngle: 130,
                majorTicks: { width: 0 },
                lineStyle: { width: 0 },
                minorTicks: { width: 0 },
                labelStyle: { format:'positive {value} ', font: { size: '0' } },
                ranges: [{
                    start: 0, end: 50,
                    startWidth: 15, endWidth: 15,
                    color: '#EC121C'
                }, {
                    start: 50, end: 100,
                    startWidth: 15, endWidth: 15,
                    color: '#45EA0C'
                }],
                pointers: [{
                    value: 60, radius: '60%',
                    animation: { enable: false },
                    color: '#777777', pointerWidth: 5,
                    cap: {
                        radius: 6,
                        border: { width: 0 },
                        color: '#777777'
                    },
                    needleTail: {
                        length: '25%',
                        color: '#777777'
                    }
                }]
            }],
            load: function (args) {
                // custom code start
                var dataSampleTheme2 = location.hash.split('/')[1];
                dataSampleTheme2 = dataSampleTheme2 ? dataSampleTheme2 : 'Material';
                args.gauge.theme = (dataSampleTheme2.charAt(0).toUpperCase() +
                    dataSampleTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
                // custom code end
            }
        });
        return dataSampleGauge2;
    }
    function dataSampleGauge3() {
        var dataSampleGauge3 = new ej.circulargauge.CircularGauge({
            background:'transparent',
            axes: [{
                annotations: [{
                    description:'Negative arrow',
                    content: '#uk',
                    angle: 180, zIndex: 1,
                    radius: '30%'
                }, {
                    description:'UK',
                    content: '<div style="color:#9E9E9E;font-size:16px;font-family:Roboto">UK</div>',
                    angle: 180, zIndex: 1,
                    radius: '65%'
                }],
                startAngle: 230,
                minorTicks: { width: 0 },
                labelStyle: { format:'negative {value}', font: { size: '0' } },
                endAngle: 130,
                majorTicks: { width: 0 },
                lineStyle: { width: 0 },
                ranges: [{
                    start: 0, end: 50,
                    startWidth: 15, endWidth: 15,
                    color: '#EC121C'
                }, {
                    start: 50, end: 100,
                    startWidth: 15, endWidth: 15,
                    color: '#45EA0C'
                }],
                pointers: [{
                    value: 25, radius: '60%',
                    animation: { enable: false },
                    color: '#777777', pointerWidth: 5,
                    cap: {
                        radius: 6,
                        border: { width: 0 },
                        color: '#777777'
                    },
                    needleTail: {
                        length: '25%',
                        color: '#777777'
                    }
                }]
            }],
            load: function (args) {
                // custom code start
                var dataSampleTheme3 = location.hash.split('/')[1];
                dataSampleTheme3 = dataSampleTheme3 ? dataSampleTheme3 : 'Material';
                args.gauge.theme = (dataSampleTheme3.charAt(0).toUpperCase() +
                    dataSampleTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
                // custom code end
            }
        });
        return dataSampleGauge3;
    }
    var germany = new ej.circulargauge.CircularGauge(dataSampleGauge1(), '#container1');
    var usa = new ej.circulargauge.CircularGauge(dataSampleGauge2(), '#container2');
    var uk = new ej.circulargauge.CircularGauge(dataSampleGauge3(), '#container3');
    var data = new ej.data.DataManager(orderData).executeLocal(new ej.data.Query().take(15));
    var grid = new ej.grids.Grid({
        dataSource: data,
        columns: [
            { field: 'Country', headerText: 'Country', width: 80 },
            { field: 'Sales', headerText: 'Sales $', width: 80 },
            { field: 'Target', headerText: 'Target $', width: 80 },
            { field: 'vsTarget', headerText: 'vs Target', width: 80 }
        ]
    });
    grid.appendTo('#container5');
    this.toolTipInterval1 = setInterval(function () {
        if (document.getElementById('container5')) {
            var value1 = Math.round(Math.random() * (90 - 55) + 55);
            var value2 = Math.round(Math.random() * (75 - 60) + 60);
            var value3 = Math.round(Math.random() * (40 - 10) + 10);
            var gridData1 = 4 * value1;
            var gridData2 = 6 * value2;
            var gridData3 = 7 * value3;
            var orderData_1 = [
                {
                    'Country': 'Germany',
                    'Sales': 500,
                    'Target': 400,
                    'vsTarget': gridData1
                }, {
                    'Country': 'USA',
                    'Sales': 1000,
                    'Target': 600,
                    'vsTarget': gridData2
                }, {
                    'Country': 'UK',
                    'Sales': 600,
                    'Target': 700,
                    'vsTarget': -gridData3
                }
            ];
            var data_1 = new ej.data.DataManager(orderData_1).executeLocal(new ej.data.Query().take(3));
            grid.dataSource = data_1;
            grid.refresh();
            germany.axes[0].pointers[0].animation.enable = true;
            usa.axes[0].pointers[0].animation.enable = true;
            uk.axes[0].pointers[0].animation.enable = true;
            germany.setPointerValue(0, 0, value1);
            usa.setPointerValue(0, 0, value2);
            uk.setPointerValue(0, 0, value3);
            germany.setAnnotationValue(0, 0, '#germany');
            usa.setAnnotationValue(0, 0, '#usa');
            uk.setAnnotationValue(0, 0, '#uk');
        }
        else {
            clearInterval(this.toolTipInterval1);
        }
    }, 2000);
};