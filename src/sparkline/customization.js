this.default = function () {
    // custom code start
    var sparkload = function(args) {
        var customtheme = location.hash.split('/')[1];
        customtheme = customtheme ? customtheme : 'Fluent2';
        args.sparkline.theme = (customtheme.charAt(0).toUpperCase() + customtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    // custom code end
    var percentage = new ej.charts.Sparkline({
        // custom code start
        load: sparkload,    
        // custom code end   
        lineWidth: 1,
        type: 'Column',
        valueType: 'Category',
        height: '200px',
        width: '180px',
        dataSource: [
            { x: 0, xval: 'AUDI', yval: 1 },
            { x: 1, xval: 'BMW', yval: 5 },
            { x: 2, xval: 'BUICK', yval: -1 },
            { x: 3, xval: 'CETROEN', yval: -6 },           
            { x: 6, xval: 'FORD', yval: -2 },
            { x: 7, xval: 'HONDA', yval: 7 },
            { x: 8, xval: 'HYUNDAI', yval: -9 },
            { x: 9, xval: 'JEEP', yval: 0 },
            { x: 4, xval: 'CHEVROLET', yval: 0 },
            { x: 5, xval: 'FIAT', yval: 1 },
            { x: 10, xval: 'KIA', yval: -10 },
            { x: 11, xval: 'MAZDA', yval: 3 },            
            { x: 14, xval: 'OPEL/VHALL', yval: -6 },
            { x: 15, xval: 'PEUGEOT', yval: 0 },
            { x: 16, xval: 'RENAULT', yval: 7 },
            { x: 17, xval: 'SKODA', yval: 5 },
            { x: 12, xval: 'MERCEDES', yval: 13 },
            { x: 13, xval: 'NISSAN', yval: 5 },
            { x: 18, xval: 'SUBARU', yval: 5 },
            { x: 19, xval: 'SUZUKI', yval: 11 },
            { x: 20, xval: 'TOYOTA', yval: 5 },
            { x: 21, xval: 'VOLKSWAGEN', yval: 3 },
        ],
        xName: 'xval', yName: 'yval',
        markerSettings: {
            fill: 'red',
            size: 5
        },
        tooltipSettings: {
            format: '${xval}: ${yval}',
            trackLineSettings: {
                color: 'red',
                width: 1
            }
        },
        axisSettings: {
            lineSettings: {
                color: 'red',
                width: 2
            }
        }
    });
    percentage.appendTo('#percentage');
    var sales = new ej.charts.Sparkline({
        load: sparkload,
        height: '200px',
        width: '180px',
        lineWidth: 1,
        type: 'Column',
        valueType: 'Category',
        dataSource: [
            { x: 0, xval: 'AUDI', yval: 1847613 },
            { x: 1, xval: 'BMW', yval: 2030331 },
            { x: 2, xval: 'BUICK', yval: 1465823 },
            { x: 3, xval: 'CETROEN', yval: 999888 },
            { x: 4, xval: 'CHEVROLET', yval: 3857388 },
            { x: 5, xval: 'FIAT', yval: 1503806 },
            { x: 6, xval: 'FORD', yval: 5953122 },
            { x: 7, xval: 'HONDA', yval: 4967689 },
            { x: 8, xval: 'HYUNDAI', yval: 3951176 },
            { x: 9, xval: 'JEEP', yval: 1390130 },
            { x: 10, xval: 'KIA', yval: 2511293 },
            { x: 11, xval: 'MAZDA', yval: 1495557 },
            { x: 12, xval: 'MERCEDES', yval: 2834181 },
            { x: 13, xval: 'NISSAN', yval: 4834694 },
            { x: 14, xval: 'OPEL/VHALL', yval: 996559 },
            { x: 15, xval: 'PEUGEOT', yval: 1590300 },
            { x: 16, xval: 'RENAULT', yval: 2275227 },
            { x: 17, xval: 'SKODA', yval: 1180672 },
            { x: 18, xval: 'SUBARU', yval: 1050390 },
            { x: 19, xval: 'SUZUKI', yval: 2891415 },
            { x: 20, xval: 'TOYOTA', yval: 7843423 },
            { x: 21, xval: 'VOLKSWAGEN', yval: 6639250 },
        ],
        xName: 'xval', yName: 'yval',
        axisSettings: {
            lineSettings: {
                color: 'red',
                width: 2
            }
        },
        markerSettings: {
            fill: 'red',
            size: 5
        },
        tooltipSettings: {
            format: '${xval}: ${yval}',
            trackLineSettings: {
                color: 'red',
                width: 1
            }
        }
    });
    sales.appendTo('#sales');
    // Code for Property Panel
    var sampleChange;
    var sampleValue = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Sales Percentage',
        width: '100%',
        change: sampleChange
    });
    var sliderChange;
    var slider = new ej.inputs.Slider({
        value: 0, type: 'MinRange',
        change: sliderChange,
        max: 100, min: 0
    }, '#range');
    var allchange;
    var allCheckBox = new ej.buttons.CheckBox({
        checked: true, change: allchange
    }, '#all');
    var otherchange;
    var negativeCheckBox = new ej.buttons.CheckBox({
        change: otherchange, disabled: true
    }, '#negative');
    var firstCheckBox = new ej.buttons.CheckBox({
        change: otherchange, disabled: true
    }, '#first');
    var lastCheckBox = new ej.buttons.CheckBox({
        change: otherchange, disabled: true
    }, '#last');
    var highCheckBox = new ej.buttons.CheckBox({
        change: otherchange, disabled: true
    }, '#high');
    var lowCheckBox = new ej.buttons.CheckBox({
        change: otherchange, disabled: true
    }, '#low');
    var markerchange;
    var markerCheckBox = new ej.buttons.CheckBox({
        change: markerchange
    }, '#marker');
    var datalabelchange;
    var datalabelCheckBox = new ej.buttons.CheckBox({
        change: datalabelchange
    }, '#datalabel');
	var enableRTLchange;
    var enableRTLCheckBox = new ej.buttons.CheckBox({
        change: enableRTLchange
    }, '#enableRTL');
    var tooltipchange;
    var tooltipCheckBox = new ej.buttons.CheckBox({
        change: tooltipchange
    }, '#tooltip');
    var trackerchange;
    var trackerCheckBox = new ej.buttons.CheckBox({
        change: trackerchange
    }, '#trackline');
    var axislinechange;
    var axislineCheckBox = new ej.buttons.CheckBox({
        change: axislinechange
    }, '#axis1');
    sampleValue.change = sampleChange = function (drop) {
        if (drop.value === 'salespercentage') {
            slider.min = 0;
            slider.max = 10;
        }
        else {
            slider.min = 0;
            slider.max = 5000000;
        }
        if ((drop.value === 'salespercentage' && percentage.markerSettings.visible.length) ||
            (drop.value === 'salescount' && sales.markerSettings.visible.length)) {
            markerCheckBox.checked = true;
        }
        else {
            markerCheckBox.checked = false;
        }
        markerCheckBox.change = markerchange = function (e) {
            var boolean = e.checked;
            var spark = drop.value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.markerSettings.visible = getVisible();
            }
            else {
                spark.markerSettings.visible = [];
            }
            spark.refresh();
        };
        if ((drop.value === 'salespercentage' && percentage.dataLabelSettings.visible.length) ||
            (drop.value === 'salescount' && sales.dataLabelSettings.visible.length)) {
            datalabelCheckBox.checked = true;
        }
        else {
            datalabelCheckBox.checked = false;
        }
        var spark = drop.value === 'salespercentage' ? percentage : sales;
        if (!markerCheckBox.checked && !datalabelCheckBox.checked) {
            allCheckBox.checked = false;
            negativeCheckBox.checked = false;
            firstCheckBox.checked = false;
            lastCheckBox.checked = false;
            highCheckBox.checked = false;
            lowCheckBox.checked = false;
        }
        if (markerCheckBox.checked) {
            var spark_1 = drop.value === 'salespercentage' ? percentage : sales;
            allCheckBox.checked = spark_1.markerSettings.visible.indexOf('All') > -1;
            negativeCheckBox.checked = spark_1.markerSettings.visible.indexOf('Negative') > -1;
            firstCheckBox.checked = spark_1.markerSettings.visible.indexOf('Start') > -1;
            lastCheckBox.checked = spark_1.markerSettings.visible.indexOf('End') > -1;
            highCheckBox.checked = spark_1.markerSettings.visible.indexOf('High') > -1;
            lowCheckBox.checked = spark_1.markerSettings.visible.indexOf('Low') > -1;
        }
        if (datalabelCheckBox.checked) {
            var spark_2 = drop.value === 'salespercentage' ? percentage : sales;
            allCheckBox.checked = spark_2.dataLabelSettings.visible.indexOf('All') > -1;
            negativeCheckBox.checked = spark_2.dataLabelSettings.visible.indexOf('Negative') > -1;
            firstCheckBox.checked = spark_2.dataLabelSettings.visible.indexOf('Start') > -1;
            lastCheckBox.checked = spark_2.dataLabelSettings.visible.indexOf('End') > -1;
            highCheckBox.checked = spark_2.dataLabelSettings.visible.indexOf('High') > -1;
            lowCheckBox.checked = spark_2.dataLabelSettings.visible.indexOf('Low') > -1;
        }
        datalabelCheckBox.change = datalabelchange = function (e) {
            var boolean = e.checked;
            var spark = drop.value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.dataLabelSettings.visible = getVisible();
            }
            else {
                spark.dataLabelSettings.visible = [];
            }
            spark.refresh();
        };
        if ((drop.value === 'salespercentage' && percentage.tooltipSettings.visible === true) ||
            (drop.value === 'salescount' && sales.tooltipSettings.visible === true)) {
            tooltipCheckBox.checked = true;
        }
        else {
            tooltipCheckBox.checked = false;
        }
        if ((drop.value === 'salespercentage' && percentage.enableRtl === true) ||
        (drop.value === 'salescount' && sales.enableRtl === true)) {
            enableRTLCheckBox.checked = true;
        }
        else {
            enableRTLCheckBox.checked = false;
        }
        tooltipCheckBox.change = tooltipchange = function (e) {
            var boolean = e.checked;
            var spark = drop.value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.tooltipSettings.visible = true;
            }
            else {
                spark.tooltipSettings.visible = false;
            }
            spark.refresh();
        };
        if ((drop.value === 'salespercentage' && percentage.tooltipSettings.trackLineSettings.visible === true) ||
            (drop.value === 'salescount' && sales.tooltipSettings.trackLineSettings.visible === true)) {
            trackerCheckBox.checked = true;
        }
        else {
            trackerCheckBox.checked = false;
        }
        trackerCheckBox.change = trackerchange = function (e) {
            var boolean = e.checked;
            var spark = drop.value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.tooltipSettings.trackLineSettings.visible = true;
            }
            else {
                spark.tooltipSettings.trackLineSettings.visible = false;
            }
            spark.refresh();
        };
        if ((drop.value === 'salespercentage' && percentage.axisSettings.lineSettings.visible === true) ||
            (drop.value === 'salescount' && sales.axisSettings.lineSettings.visible === true)) {
            axislineCheckBox.checked = true;
        }
        else {
            axislineCheckBox.checked = false;
        }
        axislineCheckBox.change = axislinechange = function (e) {
            var boolean = e.checked;
            var spark = drop.value === 'salespercentage' ? percentage : sales;
            if (boolean) {
                spark.axisSettings.lineSettings.visible = true;
            }
            else {
                spark.axisSettings.lineSettings.visible = false;
            }
            spark.refresh();
        };
        if (drop.value === 'salespercentage' && percentage.axisSettings.value !== 0) {
            slider.value = percentage.axisSettings.value;
            slider.min = 0;
            slider.max = 10;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + percentage.axisSettings.value;
        }
        if (drop.value === 'salescount' && sales.axisSettings.value !== 0) {
            slider.value = sales.axisSettings.value;
            slider.min = 0;
            slider.max = 5000000;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + sales.axisSettings.value;
        }
        slider.change = sliderChange = function (e) {
            var spark = drop.value === 'salespercentage' ? percentage : sales;
            spark.axisSettings.value = e.value;
            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;
            spark.refresh();
        };
        allCheckBox.checked = !(negativeCheckBox.checked || highCheckBox.checked || lowCheckBox.checked ||
            firstCheckBox.checked || lastCheckBox.checked);
        negativeCheckBox.disabled = highCheckBox.disabled = lowCheckBox.disabled = firstCheckBox.disabled =
            lastCheckBox.disabled = allCheckBox.checked;
    };
    sampleValue.appendTo('#spark');
    if (sampleValue.value === 'salespercentage') {
        slider.min = 0;
        slider.max = 10;
    }
    else {
        slider.min = 0;
        slider.max = 5000000;
    }
    allCheckBox.change = allchange = function (e) {
        var checked = e.checked;
        negativeCheckBox.disabled = checked;
        firstCheckBox.disabled = checked;
        lastCheckBox.disabled = checked;
        highCheckBox.disabled = checked;
        lowCheckBox.disabled = checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        spark.markerSettings.visible = (checked && markerCheckBox.checked) ? ['All'] : (markerCheckBox.checked) ? getVisible() : [];
        spark.dataLabelSettings.visible = (checked && datalabelCheckBox.checked) ? ['All'] :
            (datalabelCheckBox.checked) ? getVisible() : [];
        spark.refresh();
    };
    negativeCheckBox.change = otherchange = firstCheckBox.change = lastCheckBox.change = highCheckBox.change =
        lowCheckBox.change = function (e) {
            processMarkerLabel(e);
        };
    var processMarkerLabel = function (e) {
        var checked = e.checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        if (markerCheckBox.checked) {
            spark.markerSettings.visible = getVisible();
            spark.refresh();
        }
        if (datalabelCheckBox.checked) {
            spark.dataLabelSettings.visible = getVisible();
            spark.refresh();
        }
    };
    var getVisible = function () {
        var visible = [];
        if (allCheckBox.checked) {
            return ['All'];
        }
        if (negativeCheckBox.checked) {
            visible.push('Negative');
        }
        if (firstCheckBox.checked) {
            visible.push('Start');
        }
        if (lastCheckBox.checked) {
            visible.push('End');
        }
        if (highCheckBox.checked) {
            visible.push('High');
        }
        if (lowCheckBox.checked) {
            visible.push('Low');
        }
        return visible;
    };
    markerCheckBox.change = markerchange = function (e) {
        var boolean = e.checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.markerSettings.visible = getVisible();
        }
        else {
            spark.markerSettings.visible = [];
        }
        spark.refresh();
    };
    datalabelCheckBox.change = datalabelchange = function (e) {
        var boolean = e.checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.dataLabelSettings.visible = getVisible();
        }
        else {
            spark.dataLabelSettings.visible = [];
        }
        spark.refresh();
    };
	enableRTLCheckBox.change = enableRTLchange = function (e) {
		var boolean = e.checked;
		var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
		if(boolean == true) {
			spark.enableRtl = true;
		} 
		else {
			spark.enableRtl = false;
		}
		spark.refresh();
	};
    tooltipCheckBox.change = tooltipchange = function (e) {
        var boolean = e.checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.tooltipSettings.visible = true;
            spark.tooltipSettings.format = '${xval}: ${yval}';
        }
        else {
            spark.tooltipSettings.visible = false;
        }
        spark.refresh();
    };
    trackerCheckBox.change = trackerchange = function (e) {
        var boolean = e.checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.tooltipSettings.trackLineSettings.visible = true;
            spark.tooltipSettings.trackLineSettings.color = 'red';
            spark.tooltipSettings.trackLineSettings.width = 1;
        }
        else {
            spark.tooltipSettings.trackLineSettings.visible = false;
        }
        spark.refresh();
    };
    axislineCheckBox.change = axislinechange = function (e) {
        var boolean = e.checked;
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        if (boolean) {
            spark.axisSettings.lineSettings.visible = true;
            spark.axisSettings.lineSettings.color = 'red';
            spark.axisSettings.lineSettings.width = 2;
        }
        else {
            spark.axisSettings.lineSettings.visible = false;
        }
        spark.refresh();
    };
    slider.change = sliderChange = function (e) {
        var spark = sampleValue.value === 'salespercentage' ? percentage : sales;
        spark.axisSettings.value = e.value;
        document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;
        spark.refresh();
    };
};