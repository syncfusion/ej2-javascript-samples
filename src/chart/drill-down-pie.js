/**
 * Drill Down Sample
 */
this.default = function () {
    var asiaPacific = [{ x: 'China', y: 66.7 }, { x: 'Japan', y: 17.8 }, { x: 'India', y: 11.1 }, { x: 'South Korea', y: 3.3 }, { x: 'Others', y: 1.1 }];
    var europe = [{ x: 'Germany', y: 32 }, { x: 'UK', y: 20 }, { x: 'France', y: 16 }, { x: 'Italy', y: 12 }, { x: 'Spain', y: 8 }, { x: 'Others', y: 12 }];
    var northAmerica = [{ x: 'USA', y: 75 }, { x: 'Canada', y: 15 }, { x: 'Mexico', y: 10 }];
    var latinAmerica = [{ x: 'Brazil', y: 57.1 }, { x: 'Argentina', y: 21.4 }, { x: 'Chile', y: 14.3 }, { x: 'Others', y: 7.1 }];
    var middleEastAfrica = [{ x: 'South Africa', y: 33.3 }, { x: 'Egypt', y: 26.7 }, { x: 'UAE', y: 23.3 }, { x: 'Others', y: 16.7 }];
    var clickInstance = {
        //Initializing Series
        series: [
            {
                type: 'Pie', dataSource: asiaPacific, xName: 'x', yName: 'y',
                dataLabel: { visible: true, font: { fontWeight: '600' }, position: ej.base.Browser.isDevice ? 'Inside' : 'Outside', enableRotation: ej.base.Browser.isDevice ? true : false, connectorStyle: { type: 'Curve' , length: ej.base.Browser.isDevice ? '5%' : '10%'}}, innerRadius: '40%', radius: '80%'
            }
        ], textRender: function (args) {
            args.text = args.point.x + ' ' + args.point.y + '%';
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
            if (selectedTheme.indexOf('highcontrast') > -1) {
                args.accumulation.annotations[0].content = '#white' ;
                args.accumulation.series[0].dataLabel.font.color = "white";
            }
            if (args.accumulation.theme.indexOf('Dark') > -1){
                args.accumulation.annotations[0].content = '#white' ;
                args.accumulation.series[0].dataLabel.font.color = "white";
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
                    clickInstance.series[0].dataSource = asiaPacific;
                    ej.charts.getElement('text').innerHTML = 'Asia-Pacific';
                    clickInstance.title = 'Automobile Sales in the Asia-Pacific region';
                    break;
                case 1:
                    clickInstance.series[0].dataSource = europe;
                    ej.charts.getElement('text').innerHTML = 'Europe';
                    clickInstance.title = 'Automobile Sales in the Europe region';
                    break;
                case 2:
                    clickInstance.series[0].dataSource = northAmerica;
                    ej.charts.getElement('text').innerHTML = 'North America';
                    clickInstance.title = 'Automobile Sales in the North America region';
                    break;
                case 3:
                    clickInstance.series[0].dataSource = latinAmerica;
                    ej.charts.getElement('text').innerHTML = 'Latin America';
                    clickInstance.title = 'Automobile Sales in the Latin America region';
                    break;
                case 4:
                    clickInstance.series[0].dataSource = middleEastAfrica;
                    ej.charts.getElement('text').innerHTML = 'Middle East & Africa region';
                    clickInstance.title = 'Automobile Sales in the Middle East & Africa region';
                    break;
            }
            pie = new ej.charts.AccumulationChart(clickInstance);
            var selectedTheme = location.hash.split('/')[1];
            if (selectedTheme.indexOf('highContrast') > -1 || selectedTheme.indexOf('dark') > -1) {
                pie.annotations = [{
                    content: '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;"><img src="./src/chart/images/white.png" id="back" alt="White Icon"/><div>', region: 'Series', x: '50%', y: '50%'
                }];
            }
            else {
                pie.annotations = [{
                    content: '<div id="back" style="cursor:pointer; padding: 3px; width: 30px; height: 30px;">' + '<img src="./src/chart/images/back.png" id="imgback" alt="Back Icon"/>', region: 'Series', x: '50%', y: '50%'
                }];
            }
            pie.series[0].animation.enable = false;
            pie.series[0].dataLabel.font.size = ej.base.Browser.isDevice ? '6px' : '12px';
            pie.series[0].radius = '80%';
            pie.series[0].startAngle = -30;
            pie.series[0].endAngle = 330;
            pie.appendTo('#drill-container');
            ej.charts.getElement('symbol').style.visibility = 'visible';
            ej.charts.getElement('category').style.visibility = 'visible';
            ej.charts.getElement('text').style.visibility = 'visible';
        }
    };
    var instance = {
        series: [
            {
                dataSource: [{ x: 'Asia-Pacific', y: 45 }, { x: 'Europe', y: 25 }, { x: 'North America', y: 25 }, {x: 'Latin America', y: 7}, { x: 'Middle East & Africa', y: 3 }],
                dataLabel: {
                    visible: true, position: 'Outside', enableRotation : false,
                    connectorStyle: { type: 'Curve', length: ej.base.Browser.isDevice ? '5%' : '10%' }, font: { fontWeight: '600', color: 'black', size: ej.base.Browser.isDevice ? '6px' : '12px' }},
                radius: '70%', xName: 'x', yName: 'y', startAngle: -30, endAngle: 330, innerRadius: '0%', borderRadius: 3, border: {color: '#ffffff', width: 1} }
        ], enableSmartLabels: false,enableBorderOnMouseMove:false,   legendSettings: { visible: false }, chartMouseClick: pointClick,
        textRender: function (args) { args.text = args.point.x + ' ' + args.point.y + '%'; },
        tooltip: { enable: false, format: '${point.x} <br> ${point.y} %' },
        title: 'Automobile Sales by Region - 2023', subTitle: 'Source: wikipedia.org',
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
            if (selectedTheme === 'highcontrast' || selectedTheme === 'fluent2-highcontrast') {
                args.accumulation.series[0].dataLabel.font.color = "white";
            }
            if (args.accumulation.theme.indexOf('Dark') > -1){
                args.accumulation.series[0].dataLabel.font.color = "white";
            }
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