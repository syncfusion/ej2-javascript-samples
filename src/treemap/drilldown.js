this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        drillStart: function (args) {
            if (args.item[Object.keys(args.item)[0]].length === 1) {
                args.treemap.levels[2].showHeader = true;
            }
            else {
                args.treemap.levels[2].showHeader = false;
            }
        },
        tooltipRendering: function (args) {
            if (args.item.groupIndex !== 2) {
                args.cancel = true;
            }
        },
        // custom code start
        load: function (args) {
            var drilltheme = location.hash.split('/')[1];
            drilltheme = drilltheme ? drilltheme : 'Material';
            args.treemap.theme = (drilltheme.charAt(0).toUpperCase() + drilltheme.slice(1));
        },
        // custom code end
        titleSettings: {
            text: 'List of countries by population',
            textStyle: { size: '15px' }
        },
        format: 'n',
        useGroupingSeparator: true,
        palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
        enableDrillDown: true,
        dataSource: window.Drilldown,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: '${Name} : ${Population}'
        },
        leafItemSettings: {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px' },
            border: { color: 'black', width: 0.5 }
        },
        levels: [
            { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } },
            { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } },
            { groupPath: 'Region', fill: '#336699', showHeader: false, border: { color: 'black', width: 0.5 } },
        ]
    });
    treemap.appendTo('#container');
    var breadCrumbChange;
    var breadCrumbCheckBox = new ej.buttons.CheckBox({
        change: breadCrumbChange, checked: false
    }, '#breadCrumb');
    breadCrumbCheckBox.change = breadCrumbChange = function (e) {
        treemap.enableBreadcrumb = e.checked;
        var breadCrumbText = document.getElementById('connectorText');
        if (e.checked) {
            breadCrumbText.disabled = false;
        }
        else {
            breadCrumbText.disabled = true;
        }
        treemap.refresh();
    };
    var drillChange;
    var drillViewCheckBox = new ej.buttons.CheckBox({
        change: drillChange, checked: false
    }, '#drillView');
    drillViewCheckBox.change = drillChange = function (e) {
        treemap.drillDownView = e.checked;
        treemap.refresh();
    };
    document.getElementById('connectorText').onchange = function () {
        var value = document.getElementById('connectorText').value;
        treemap.breadcrumbConnector = value;
        treemap.refresh();
    };
    var header = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Selection selection type',
        width: 80,
        change: function () {
            for (var i = 0; i < treemap.levels.length - 1; i++) {
                treemap.levels[i].headerAlignment = header.value;
            }
            treemap.refresh();
        }
    });
    header.appendTo('#header');
    var label = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Selection selection type',
        width: 80,
        change: function () {
            treemap.levels[2].headerAlignment = label.value;
            treemap.refresh();
        }
    });
    label.appendTo('#label');
};