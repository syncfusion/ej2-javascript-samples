var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = window.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = window.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = window.highcontrastColors[args.point.index % 10];
    }
    else {
        args.fill = window.bootstrapColors[args.point.index % 10];
    }
};
/**
 * Samples for Smart Axis Labels
 */
this.default = function () {
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: 'Hide'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelStyle: { size: '0px'  },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            lineStyle: { width: 0 },
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [{ x: 'South Korea', y: 39 }, { x: 'India', y: 61 },
                { x: 'Pakistan', y: 20 }, { x: 'Germany', y: 65 },
                { x: 'Australia', y: 16 }, { x: 'Italy', y: 29 },
                { x: 'France', y: 45 }, { x: 'United Arab Emirates', y: 10 },
                { x: 'Russia', y: 41 }, { x: 'Mexico', y: 31 },
                { x: 'Brazil', y: 76 }, { x: 'China', y: 51 }],
                xName: 'x', width: 2, name: 'Users',
                yName: 'y', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
            },
        ],
        //Initializing Chart Title
        title: 'Internet Users in Millions',
        //Initializing Tooltip
        tooltip : { enable: true },
        pointRender: labelRender,
        legendSettings: { visible: false },
           // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
           // custom code end
    });
    chart.appendTo('#smart-container');
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.primaryXAxis.labelIntersectAction = mode.value;
            chart.refresh();
        }
    });
    mode.appendTo('#selmode');
    var edgeMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.primaryXAxis.edgeLabelPlacement = edgeMode.value;
            chart.dataBind();
        }
    });
    edgeMode.appendTo('#edgemode');

    var labelMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: function () {
            chart.primaryXAxis.labelPosition = labelMode.value;
            chart.dataBind();
        }
    });
    labelMode.appendTo('#labelmode');
    document.getElementById('Trim').onchange = function () {
        var trim = document.getElementById('Trim');
        if (trim.checked) {
            chart.primaryXAxis.enableTrim = (trim.value === 'true');
        }
        else {
            chart.primaryXAxis.enableTrim = (trim.value === 'false');
        }
        chart.refresh();
    };
    var labelWidth = new ej.inputs.NumericTextBox({
        value: 34, min: 1, max: 120, width: 120, step: 1,
        change: function () {
            chart.primaryXAxis.maximumLabelWidth = labelWidth.value;
            chart.refresh();
        }
    });
    labelWidth.appendTo('#LabelWidth');
};