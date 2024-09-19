
this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: new ej.data.DataManager(window.products).executeLocal(new ej.data.Query()),
        allowSelection: false,
        enableColumnVirtualization: false,
        enableHover: true,
        height: 400,
        columns: [
            { field: 'name', headerText: 'Name', textAlign: 'Right', width: 50 },
            { headerText: '2010', template: '#columnTemplate1', textAlign: 'Center', width: 100 },
            { headerText: '2011', template: '#columnTemplate2', textAlign: 'Center', width: 100 },
        ],
    });
    grid.appendTo('#Grid');
    var sparkline = {
        height: '50px',
        width: '150px',
        // custom code start
        load: function (args) {             
            var rangetheme = location.hash.split('/')[1];             
            rangetheme = rangetheme ? rangetheme : 'Fluent2';             
            args.sparkline.theme = (rangetheme.charAt(0).toUpperCase() + rangetheme.slice(1));         
        },
        // custom code end
        lineWidth: 2,
        fill: '#0d3c9b',
        dataSource: window.lineData[0],
        rangeBandSettings: [
            {
                startRange: 1, endRange: 3, color: '#bfd4fc'
            }
        ]
    };
    setTimeout(function () {
        for (var i = 1; i < 6; i++) {
            var first = new ej.charts.Sparkline(sparkline);
            first.dataSource = window.lineData[i];
            first.appendTo('#sparkline2010' + i);
            var second = new ej.charts.Sparkline(sparkline);
            second.dataSource = window.lineData[i + 5];
            second.appendTo('#sparkline2011' + i);
        }
    }, 500);
    var sliderChange1;
        var sliderChange2;
        var slider1 = new ej.inputs.Slider({
            value: 1,
            change: sliderChange1,
            max: 6, min: 0, type: 'MinRange',
        }, '#range-min');
        var slider2 = new ej.inputs.Slider({
            value: 3,
            change: sliderChange2,
            max: 6, min: 0, type: 'MinRange',
        }, '#range-max');
        slider1.change = sliderChange1 = function (e) {
            changeRangeMin(e.value);
        };
        slider2.change = sliderChange2 = function (e) {
            changeRangeMax(e.value);
        };
        var changeRangeMin = function (min) {
            for (var i = 1; i < 6; i++) {
                var first = ej.base.getInstance('#sparkline2010' + i, ej.charts.Sparkline);
                var second = ej.base.getInstance('#sparkline2011' + i, ej.charts.Sparkline);
                first.rangeBandSettings[0].startRange = min;
                second.rangeBandSettings[0].startRange = min;
                first.refresh();
                second.refresh();
            }
        };
        var changeRangeMax = function (max) {
            for (var i = 1; i < 6; i++) {
                var first = ej.base.getInstance('#sparkline2010' + i, ej.charts.Sparkline);
                var second = ej.base.getInstance('#sparkline2011' + i, ej.charts.Sparkline);
                first.rangeBandSettings[0].endRange = max;
                second.rangeBandSettings[0].endRange = max;
                first.refresh();
                second.refresh();
            }
        };
};