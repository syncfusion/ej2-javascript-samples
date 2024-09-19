this.default = function () {
    // custom code start
    var liveload = function(args) {
        var livetheme = location.hash.split('/')[1];
        livetheme = livetheme ? livetheme : 'Fluent2';
        args.sparkline.theme = (livetheme.charAt(0).toUpperCase() + livetheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    // custom code end
    var spark = new ej.charts.Sparkline({
            height: '130px',
            width: '90%',
            // custom code start
            load: liveload,
            // custom code end
            axisSettings: {
                minY: 0, maxY: 150
            },
            containerArea: {
                background: 'white',
                border: {
                    color: '#dcdfe0',
                    width: 2
                }
            },
            border: {
                color: '#0358a0',
                width: 1
            },
            fill: '#e8f2fc',
            type: 'Area',
            valueType: 'Numeric',
            dataSource: [
                { x: 0, yval: 50 },
                { x: 1, yval: 30 },
                { x: 2, yval: 20 },
                { x: 3, yval: 30 },
                { x: 4, yval: 50 },
                { x: 5, yval: 40 },
                { x: 6, yval: 20 },
                { x: 7, yval: 10 },
                { x: 8, yval: 30 },
                { x: 9, yval: 10 },
                { x: 10, yval: 40 },
                { x: 11, yval: 50 },
                { x: 12, yval: 10 },
                { x: 13, yval: 30 },
                { x: 14, yval: 50 },
                { x: 15, yval: 20 },
                { x: 16, yval: 10 },
                { x: 17, yval: 40 },
                { x: 18, yval: 30 },
                { x: 19, yval: 40 }
            ],
            xName: 'x', yName: 'yval'
    });
    spark.appendTo('#spark-container1');
    var temp1 = spark.dataSource.length - 1;
    function update() {
        if (spark.element.className.indexOf('e-sparkline') > -1) {
            var value = ((Math.random() * 100) + 5) % 50;
            spark.dataSource.push({ x: ++temp1, yval: value });
            spark.dataSource.shift();
            spark.refresh();
            var cpu = document.getElementById('cpu');
            if (cpu) {
            cpu.innerHTML = ((value / 150) * 100).toFixed(0) + '% ' + ((value * 3) / 100).toFixed(2) + 'GHz';
            }
        }
    }
    var time = setInterval(update, 1000);
    var spark1 = new ej.charts.Sparkline({
        height: '130px',
            width: '90%',
            // custom code start
            load: liveload,
            // custom code end
            lineWidth: 1,           
            containerArea: {
                background: 'white',
                border: {
                    color: '#dcdfe0',
                    width: 2
                }
            },
            axisSettings: {
                minY: 4, maxY: 8
            },
            border: {
                color: '#b247c6',
                width: 1
            },
            type: 'Area',
            fill: '	#f5e8fc',
            valueType: 'Numeric',
            xName: 'x', yName: 'yval',            
            dataSource: [               
                { x: 3, yval: 6.07 },
                { x: 4, yval: 6.05 },
                { x: 5, yval: 6.09 },
                { x: 6, yval: 6.08 },
                { x: 0, yval: 6.05 },
                { x: 1, yval: 6.03 },
                { x: 2, yval: 6.02 },
                { x: 7, yval: 6.01 },
                { x: 8, yval: 6.03 },
                { x: 9, yval: 6.01 },               
                { x: 14, yval: 6.05 },
                { x: 15, yval: 6.03 },
                { x: 16, yval: 6.01 },
                { x: 17, yval: 6.09 },
                { x: 10, yval: 6.07 },
                { x: 11, yval: 6.05 },
                { x: 12, yval: 6.01 },
                { x: 13, yval: 6.06 },
                { x: 18, yval: 6.06 },
                { x: 19, yval: 6.05 }
            ]
    });
    spark1.appendTo('#spark-container2');
    var temp2 = spark1.dataSource.length - 1;
    function update1() {
        if (spark1.element.className.indexOf('e-sparkline') > -1) {
            var value = Math.random();
            if (value > 0.6) {
                value = 6 + (value / 10);
            }
            else {
                value = 6 - (value / 10);
            }
            spark1.dataSource.push({ x: ++temp2, yval: value });
            spark1.dataSource.shift();
            spark1.refresh();
            var memory = document.getElementById('memory');
            var gb = parseFloat(value.toString().replace('0', '')).toFixed(1);
            if (memory) {
            memory.innerHTML = gb + '/15.8 GB (' + ((value / 15.8) * 100).toFixed(0) + '%)';
            }
        }
    }
    var time1 = setInterval(update1, 1000);
    var spark2 = new ej.charts.Sparkline({
        height: '130px',
            width: '90%',
            // cudtom code start
            load: liveload,
            // custom code end
            xName: 'x', yName: 'yval',            
            lineWidth: 1,
            axisSettings: {
                minY: 0, maxY: 130
            },            
            border: {
                color: '#27ad66',
                width: 1
            },
            containerArea: {
                background: 'white',
                border: {
                    color: '#dcdfe0',
                    width: 2
                }
            },
            type: 'Area',
            fill: '#e0f9d1',
            valueType: 'Numeric',
            dataSource: [
                { x: 15, yval: 30 },
                { x: 16, yval: 10 },
                { x: 17, yval: 20 },
                { x: 18, yval: 60 },
                { x: 19, yval: 50 },
                { x: 0, yval: 50 },
                { x: 1, yval: 30 },
                { x: 2, yval: 20 },
                { x: 3, yval: 70 },
                { x: 4, yval: 50 },
                { x: 5, yval: 20 },                
                { x: 10, yval: 70 },
                { x: 11, yval: 50 },
                { x: 12, yval: 10 },
                { x: 6, yval: 80 },
                { x: 7, yval: 10 },
                { x: 8, yval: 30 },
                { x: 9, yval: 10 },
                { x: 13, yval: 60 },
                { x: 14, yval: 50 }                
            ]
    });
    spark2.appendTo('#spark-container3');
    var temp3 = spark2.dataSource.length - 1;
    function update2() {
        if (spark2.element.className.indexOf('e-sparkline') > -1) {
            var value = ((Math.random() * 100) + 5) % 80;
            spark2.dataSource.push({ x: ++temp3, yval: value });
            spark2.dataSource.shift();
            spark2.refresh();
            var disk = document.getElementById('disk');
            if (disk) {
            disk.innerHTML = value.toFixed(0) + '%';
            }
        }
    }
    var time2 = setInterval(update2, 1000);
    var spark3 = new ej.charts.Sparkline({
        height: '130px',
            width: '90%',
            // custom code start 
            load: liveload,
            // custom code end
            lineWidth: 1,
            axisSettings: {
                minY: 0, maxY: 120
            },
            xName: 'x', yName: 'yval',            
            containerArea: {
                background: 'white',
                border: {
                    color: '#dcdfe0',
                    width: 2
                }
            },
            border: {
                color: '#AA907A',
                width: 1
            },
            type: 'Area',
            fill: '#F2D8C7',
            valueType: 'Numeric',
            dataSource: [
                { x: 0, yval: 50 },
                { x: 1, yval: 30 },
                { x: 2, yval: 20 },
                { x: 3, yval: 70 },
                { x: 4, yval: 50 },
                { x: 5, yval: 20 },
                { x: 6, yval: 80 },
                { x: 7, yval: 10 },
                { x: 8, yval: 30 },
                { x: 9, yval: 10 },
                { x: 10, yval: 70 },
                { x: 11, yval: 50 },
                { x: 12, yval: 10 },
                { x: 13, yval: 60 },
                { x: 14, yval: 50 },
                { x: 15, yval: 30 },
                { x: 16, yval: 10 },
                { x: 17, yval: 20 },
                { x: 18, yval: 60 },
                { x: 19, yval: 50 }
            ],
    });
    spark3.appendTo('#spark-container4');
    var temp4 = spark3.dataSource.length - 1;
    function update4() {
        if (spark3.element.className.indexOf('e-sparkline') > -1) {
            var value = ((Math.random() * 100) + 5) % 80;
            spark3.dataSource.push({ x: ++temp3, yval: value });
            spark3.dataSource.shift();
            spark3.refresh();
            var net = document.getElementById('net');
            if (net) {
            net.innerHTML = 'R: ' + value.toFixed(0) + 'Kbps';
            }
        }
    }
    var time4 = setInterval(update4, 1000);
};