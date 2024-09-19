/**
 * Drill Down Sample
 */
this.default = function () {
    var suvs = [{ x: 'Toyota', y: 8 }, { x: 'Ford', y: 12 }, { x: 'GM', y: 17 }, { x: 'Renault', y: 6 }, { x: 'Fiat', y: 3 },
    { x: 'Hyundai', y: 16 }, { x: 'Honda', y: 8 }, { x: 'Maruthi', y: 10 }, { x: 'BMW', y: 20 }];
    var cars = [{ x: 'Toyota', y: 7 }, { x: 'Chrysler', y: 12 }, { x: 'Nissan', y: 9 }, { x: 'Ford', y: 15 }, { x: 'Tata', y: 10 },
    { x: 'Mahindra', y: 7 }, { x: 'Renault', y: 8 }, { x: 'Skoda', y: 5 }, { x: 'Volkswagen', y: 15 }, { x: 'Fiat', y: 3 }];
    var pickups = [{ x: 'Nissan', y: 9 }, { x: 'Chrysler', y: 4 }, { x: 'Ford', y: 7 }, { x: 'Toyota', y: 20 },
    { x: 'Suzuki', y: 13 }, { x: 'Lada', y: 12 }, { x: 'Bentley', y: 6 }, { x: 'Volvo', y: 10 }, { x: 'Audi', y: 19 }];
    var minivans = [{ x: 'Hummer', y: 11 }, { x: 'Ford', y: 5 }, { x: 'GM', y: 12 }, { x: 'Chrysler', y: 3 }, { x: 'Jaguar', y: 9 },
    { x: 'Fiat', y: 8 }, { x: 'Honda', y: 15 }, { x: 'Hyundai', y: 4 }, { x: 'Scion', y: 11 }, { x: 'Toyota', y: 17 }];
    var clickInstance = {
        //Initializing Series
        series: [
            {
                type: 'Pie', dataSource: suvs, xName: 'x', yName: 'y',radius: ej.base.Browser.isDevice ? '90%' : '80%',
                dataLabel: { visible: true, font: { fontWeight: '600' }, position: ej.base.Browser.isDevice ? 'Inside' : 'Outside', enableRotation:true , connectorStyle: { type: 'Curve',length: '20px'}}, innerRadius: '30%'
            }
        ], textRender: function (args) {
            args.text = args.point.x + ' ' + args.point.y + ' %';
        }, annotations: [{
            content: '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
            '<img src="./src/chart/images/back.png" id="back" alt="Back Icon"/>', region: 'Series', x: '50%', y: '50%'
        }], chartMouseClick: function (args) {
            if (args.target.indexOf('back') > -1) {
                var tooltip = document.getElementsByClassName('e-tooltip-wrap')[0];
                if (tooltip) {
                    tooltip.remove();
                }
                pie.destroy();
                pie.removeSvg();
                pie = null;
                pie = new ej.charts.AccumulationChart(instance);
                pie.series[0].animation.enable = false;
                pie.appendTo('#drill-container');
                ej.charts.getElement('category').style.visibility = 'hidden';
                ej.charts.getElement('symbol').style.visibility = 'hidden';
                ej.charts.getElement('text').style.visibility = 'hidden';
            }
        },
        legendSettings: { visible: false }, enableSmartLabels: true,
      
        //Initializing Tooltip
        tooltip: { enable: false, format: '${point.x} <br> ${point.y} %' },
        enableBorderOnMouseMove:false,
         // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (selectedTheme === 'highcontrast') {
                args.accumulation.annotations[0].content = '#white' ;
            }
            if (args.accumulation.theme.indexOf('Dark') > -1){
                args.accumulation.annotations[0].content = '#white' ;
            }
        }
         // custom code end
    };
    var pointClick = function (args) {
        var index = ej.charts.indexFinder(args.target);
        if (ej.charts.getElement(pie.element.id + '_Series_' + index.series + '_Point_' + index.point)) {
            var tooltip = document.getElementsByClassName('e-tooltip-wrap')[0];
            if (tooltip) {
                tooltip.remove();
            }
            pie.destroy();
            pie.removeSvg();
            pie = null;
            switch (index.point) {
                case 0:
                    clickInstance.series[0].dataSource = suvs;
                    ej.charts.getElement('text').innerHTML = 'SUV';
                    clickInstance.title = 'Automobile Sales in the SUV Segment';
                    break;
                case 1:
                    clickInstance.series[0].dataSource = cars;
                    ej.charts.getElement('text').innerHTML = 'Car';
                    clickInstance.title = 'Automobile Sales in the Car Segment';
                    break;
                case 2:
                    clickInstance.series[0].dataSource = pickups;
                    ej.charts.getElement('text').innerHTML = 'Pickup';
                    clickInstance.title = 'Automobile Sales in the Pickup Segment';
                    break;
                case 3:
                    clickInstance.series[0].dataSource = minivans;
                    ej.charts.getElement('text').innerHTML = 'Minivan';
                    clickInstance.title = 'Automobile Sales in the Minivan Segment';
                    break;
            }
            pie = new ej.charts.AccumulationChart(clickInstance);
            pie.series[0].animation.enable = false;
            pie.appendTo('#drill-container');
            ej.charts.getElement('symbol').style.visibility = 'visible';
            ej.charts.getElement('category').style.visibility = 'visible';
            ej.charts.getElement('text').style.visibility = 'visible';
        }
    };
    var instance = {
        series: [
            {
                dataSource: [{ x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 }, { x: 'Minivan', y: 23 }],
                dataLabel: {
                    visible: true, position: 'Inside', enableRotation: false, 
                    font: { fontWeight: '600', color: 'white' }
                },
                radius: '70%', xName: 'x', yName: 'y', startAngle: 0, endAngle: 360, innerRadius: '0%', 
                explode: false
            }
        ], enableSmartLabels: false,enableBorderOnMouseMove:false,   legendSettings: { visible: false }, chartMouseClick: pointClick,
        textRender: function (args) { args.text = args.point.x + ' ' + args.point.y + ' %'; },
        tooltip: { enable: false, format: '${point.x} <br> ${point.y} %' },
        title: 'Automobile Sales by Category',
        chartMouseMove: function (args) {
            if (args.target.indexOf("drill-container_Series_0_") > -1) {
                document.getElementById(args.target).style.cursor = 'pointer';
            }
        },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    };
    var pie = new ej.charts.AccumulationChart(instance);
    pie.appendTo('#drill-container');
    ej.charts.getElement('category').onclick = function (e) {
        var tooltip = document.getElementsByClassName('e-tooltip-wrap')[0];
        if (tooltip) {
            tooltip.remove();
        }
        pie.destroy();
        pie.removeSvg();
        pie = null;
        pie = new ej.charts.AccumulationChart(instance);
        pie.series[0].animation.enable = false;
        pie.appendTo('#drill-container');
        e.target.style.visibility = 'hidden';
        ej.charts.getElement('symbol').style.visibility = 'hidden';
        ej.charts.getElement('text').style.visibility = 'hidden';
    };
};