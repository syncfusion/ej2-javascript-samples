this.default = function () {
    // custom code start
    var sparkload = function(args) {
        var selectedtheme = location.hash.split('/')[1];
        selectedtheme = selectedtheme ? selectedtheme : 'Fluent2';
        args.sparkline.theme = (selectedtheme.charAt(0).toUpperCase() + selectedtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    // custom code end
    var sparkmodel1 = {
        // custom code start
        load: sparkload,
        // custom code end
        height: '50px',
        width: '90%', 
        lineWidth: 2,
        type: 'Line',
        valueType: 'Category',
        fill: '#3C78EF',
        negativePointColor: '#fc5070',
        format: 'n',
        useGroupingSeparator: true,
        tooltipSettings: {
            visible: true,
            trackLineSettings: {
                visible: true,
                color: '#fc5070',
                width: 2
            }
        },
        xName: 'xval'
    };
    var sparkmodel2 = {
        // custom code start
        load: sparkload,
        // custom code end 
        valueType: 'Category',
        fill: '#3C78EF',
        opacity: 1,
        height: '50px',
        width: '90%', 
        lineWidth: 2,
        type: 'Area',
        border: {
            color: '#fc5070',
            width: 2
        },
        negativePointColor: '#fc5070',
        tooltipSettings: {
            visible: true,
        },
        xName: 'xval'
    };
    var sparkmodel3 = {
        // custom code start
        load: sparkload,
        // custom code end
        negativePointColor: '#fc5070',
        tooltipSettings: {
            visible: true,
        },
        height: '50px',
        width: '90%', 
        lineWidth: 2,
        type: 'WinLoss',
        valueType: 'Category',
        fill: '#3C78EF',        
        xName: 'xval'
    };
    var sparkmodel4 = {
        // custom code start
        load: sparkload,
        // custom code end
        valueType: 'Category',
        fill: '#3C78EF',
        negativePointColor: '#fc5070',  
        height: '50px',
        width: '90%', 
        lineWidth: 2,
        type: 'Column',              
        tooltipSettings: {
            visible: true,
        },
        xName: 'xval'
    };
    var australia1 = new ej.charts.Sparkline(sparkmodel1);
    australia1.dataSource = window.defaultSparkData;
    australia1.yName = 'yval';
    australia1.tooltipSettings.format = '${xval} : ${yval}';
    australia1.appendTo('#p-australia');
    var canada1 = new ej.charts.Sparkline(sparkmodel1);
    canada1.dataSource = window.defaultSparkData;
    canada1.yName = 'yval1';
    canada1.tooltipSettings.format = '${xval} : ${yval1}';
    canada1.appendTo('#p-canada');
    var china1 = new ej.charts.Sparkline(sparkmodel1);
    china1.dataSource = window.defaultSparkData;
    china1.yName = 'yval2';
    china1.tooltipSettings.format = '${xval} : ${yval2}';
    china1.appendTo('#p-china');
    var france1 = new ej.charts.Sparkline(sparkmodel1);
    france1.dataSource = window.defaultSparkData;
    france1.yName = 'yval3';
    france1.tooltipSettings.format = '${xval} : ${yval3}';
    france1.appendTo('#p-france');
    var germany1 = new ej.charts.Sparkline(sparkmodel1);
    germany1.dataSource = window.defaultSparkData;
    germany1.tooltipSettings.format = '${xval} : ${yval4}';
    germany1.yName = 'yval4';
    germany1.appendTo('#p-germany');
    var india1 = new ej.charts.Sparkline(sparkmodel1);
    india1.dataSource = window.defaultSparkData;
    india1.tooltipSettings.format = '${xval} : ${yval5}';
    india1.yName = 'yval5';
    india1.appendTo('#p-india');
    var russia1 = new ej.charts.Sparkline(sparkmodel1);
    russia1.dataSource = window.defaultSparkData;
    russia1.tooltipSettings.format = '${xval} : ${yval6}';
    russia1.yName = 'yval6';
    russia1.appendTo('#p-russia');
    var sweden1 = new ej.charts.Sparkline(sparkmodel1);
    sweden1.dataSource =  window.defaultSparkData;
    sweden1.tooltipSettings.format = '${xval} : ${yval7}';
    sweden1.yName = 'yval7';
    sweden1.appendTo('#p-sweden');
    var uk1 = new ej.charts.Sparkline(sparkmodel1);
    uk1.dataSource = window.defaultSparkData;
    uk1.tooltipSettings.format = '${xval} : ${yval8}';
    uk1.yName = 'yval8';
    uk1.appendTo('#p-uk');
    var us1 = new ej.charts.Sparkline(sparkmodel1);
    us1.dataSource = window.defaultSparkData;
    us1.tooltipSettings.format = '${xval} : ${yval9}';
    us1.yName = 'yval9';
    us1.appendTo('#p-us');
    var australia2 = new ej.charts.Sparkline(sparkmodel2);
    australia2.dataSource = window.defaultSparkData;
    australia2.yName = 'yval10';
    australia2.tooltipSettings.format = '${xval} : ${yval10}';
    australia2.appendTo('#d-australia');
    var canada2 = new ej.charts.Sparkline(sparkmodel2);
    canada2.dataSource = window.defaultSparkData;
    canada2.tooltipSettings.format = '${xval} : ${yval11}';
    canada2.yName = 'yval11';
    canada2.appendTo('#d-canada');
    var china2 = new ej.charts.Sparkline(sparkmodel2);
    china2.yName = 'yval12';
    china2.tooltipSettings.format = '${xval} : ${yval12}';
    china2.dataSource = window.defaultSparkData;
    china2.appendTo('#d-china');
    var france2 = new ej.charts.Sparkline(sparkmodel2);
    france2.dataSource = window.defaultSparkData;
    france2.tooltipSettings.format = '${xval} : ${yval13}';
    france2.yName = 'yval13';
    france2.appendTo('#d-france');
    var germany2 = new ej.charts.Sparkline(sparkmodel2);
    germany2.dataSource = window.defaultSparkData;
    germany2.tooltipSettings.format = '${xval} : ${yval14}';
    germany2.yName = 'yval14';
    germany2.appendTo('#d-germany');
    var india2 = new ej.charts.Sparkline(sparkmodel2);
    india2.dataSource = window.defaultSparkData;
    india2.tooltipSettings.format = '${xval} : ${yval15}';
    india2.yName = 'yval15';
    india2.appendTo('#d-india');
    var russia2 = new ej.charts.Sparkline(sparkmodel2);
    russia2.dataSource = window.defaultSparkData;
    russia2.tooltipSettings.format = '${xval} : ${yval16}';
    russia2.yName = 'yval16';
    russia2.appendTo('#d-russia');
    var sweden2 = new ej.charts.Sparkline(sparkmodel2);
    sweden2.dataSource = window.defaultSparkData;
    sweden2.tooltipSettings.format = '${xval} : ${yval17}';
    sweden2.yName = 'yval17';
    sweden2.appendTo('#d-sweden');
    var uk2 = new ej.charts.Sparkline(sparkmodel2);
    uk2.yName = 'yval18';
    uk2.tooltipSettings.format = '${xval} : ${yval18}';
    uk2.dataSource = window.defaultSparkData;
    uk2.appendTo('#d-uk');
    var us2 = new ej.charts.Sparkline(sparkmodel2);
    us2.yName = 'yval19';
    us2.dataSource = window.defaultSparkData;
    us2.tooltipSettings.format = '${xval} : ${yval19}';
    us2.appendTo('#d-us');
    var australia3 = new ej.charts.Sparkline(sparkmodel3);
    australia3.yName = 'yval20';
    australia3.tooltipSettings.format = '${xval} : ${yval20}';
    australia3.dataSource = window.defaultSparkData;
    australia3.appendTo('#g-australia');
    var canada3 = new ej.charts.Sparkline(sparkmodel3);
    canada3.yName = 'yval21';
    canada3.tooltipSettings.format = '${xval} : ${yval21}';
    canada3.dataSource = window.defaultSparkData;
    canada3.appendTo('#g-canada');
    var china3 = new ej.charts.Sparkline(sparkmodel3);
    china3.yName = 'yval22';
    china3.tooltipSettings.format = '${xval} : ${yval22}';
    china3.dataSource = window.defaultSparkData;
    china3.appendTo('#g-china');
    var france3 = new ej.charts.Sparkline(sparkmodel3);
    france3.yName = 'yval23';
    france3.tooltipSettings.format = '${xval} : ${yval23}';
    france3.dataSource = window.defaultSparkData;
    france3.appendTo('#g-france');
    var germany3 = new ej.charts.Sparkline(sparkmodel3);
    germany3.yName = 'yval24';
    germany3.tooltipSettings.format = '${xval} : ${yval24}';
    germany3.dataSource = window.defaultSparkData;
    germany3.appendTo('#g-germany');
    var india3 = new ej.charts.Sparkline(sparkmodel3);
    india3.yName = 'yval25';
    india3.tooltipSettings.format = '${xval} : ${yval25}';
    india3.dataSource = window.defaultSparkData;
    india3.appendTo('#g-india');
    var russia3 = new ej.charts.Sparkline(sparkmodel3);
    russia3.yName = 'yval26';
    russia3.tooltipSettings.format = '${xval} : ${yval26}';
    russia3.dataSource = window.defaultSparkData;
    russia3.appendTo('#g-russia');
    var sweden3 = new ej.charts.Sparkline(sparkmodel3);
    sweden3.yName = 'yval27';
    sweden3.tooltipSettings.format = '${xval} : ${yval27}';
    sweden3.dataSource = window.defaultSparkData;
    sweden3.appendTo('#g-sweden');
    var uk3 = new ej.charts.Sparkline(sparkmodel3);
    uk3.yName = 'yval28';
    uk3.tooltipSettings.format = '${xval} : ${yval28}';
    uk3.dataSource = window.defaultSparkData;
    uk3.appendTo('#g-uk');
    var us3 = new ej.charts.Sparkline(sparkmodel3);
    us3.tooltipSettings.format = '${xval} : ${yval29}';
    us3.yName = 'yval29';
    us3.dataSource = window.defaultSparkData;
    us3.appendTo('#g-us');
    var australia4 = new ej.charts.Sparkline(sparkmodel4);
    australia4.dataSource = window.defaultSparkData;
    australia4.yName = 'yval30';
    australia4.tooltipSettings.format = '${xval} : ${yval30}';
    australia4.axisSettings.minY = 12;
    australia4.appendTo('#b-australia');
    var canada4 = new ej.charts.Sparkline(sparkmodel4);
    canada4.dataSource = window.defaultSparkData;
    canada4.axisSettings.minY = 10.20;
    canada4.tooltipSettings.format = '${xval} : ${yval31}';
    canada4.yName = 'yval31';
    canada4.appendTo('#b-canada');
    var china4 = new ej.charts.Sparkline(sparkmodel4);
    china4.dataSource = window.defaultSparkData;
    china4.tooltipSettings.format = '${xval} : ${yval32}';
    china4.yName = 'yval32';
    china4.axisSettings.minY = 12;
    china4.appendTo('#b-china');
    var france4 = new ej.charts.Sparkline(sparkmodel4);
    france4.dataSource = window.defaultSparkData;
    france4.tooltipSettings.format = '${xval} : ${yval33}';
    france4.yName = 'yval33';
    france4.axisSettings.minY = 11.5;
    france4.appendTo('#b-france');
    var germany4 = new ej.charts.Sparkline(sparkmodel4);
    germany4.dataSource = window.defaultSparkData;
    germany4.axisSettings.minY = 8;
    germany4.tooltipSettings.format = '${xval} : ${yval34}';
    germany4.yName = 'yval34';
    germany4.appendTo('#b-germany');
    var india4 = new ej.charts.Sparkline(sparkmodel4);
    india4.dataSource = window.defaultSparkData;
    india4.axisSettings.minY = 19;
    india4.tooltipSettings.format = '${xval} : ${yval35}';
    india4.yName = 'yval35';
    india4.appendTo('#b-india');
    var russia4 = new ej.charts.Sparkline(sparkmodel4);
    russia4.dataSource = window.defaultSparkData;
    russia4.axisSettings.minY = 9.5;
    russia4.yName = 'yval36';
    russia4.tooltipSettings.format = '${xval} : ${yval36}';
    russia4.appendTo('#b-russia');
    var sweden4 = new ej.charts.Sparkline(sparkmodel4);
    sweden4.dataSource = window.defaultSparkData;
    sweden4.axisSettings.minY = 10;
    sweden4.tooltipSettings.format = '${xval} : ${yval37}';
    sweden4.yName = 'yval37';
    sweden4.appendTo('#b-sweden');
    var uk4 = new ej.charts.Sparkline(sparkmodel4);
    uk4.dataSource = window.defaultSparkData;
    uk4.axisSettings.minY = 10;
    uk4.tooltipSettings.format = '${xval} : ${yval38}';
    uk4.yName = 'yval38';
    uk4.appendTo('#b-uk');
    var us4 = new ej.charts.Sparkline(sparkmodel4);
    us4.dataSource = window.defaultSparkData;
    us4.axisSettings.minY = 13;
    us4.tooltipSettings.format = '${xval} : ${yval39}';
    us4.yName = 'yval39';
    us4.appendTo('#b-us');
};