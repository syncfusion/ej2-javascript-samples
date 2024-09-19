this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var selecttheme = location.hash.split('/')[1];
            selecttheme = selecttheme ? selecttheme : 'Material';
            args.treemap.theme = (selecttheme.charAt(0).toUpperCase() +
            selecttheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        titleSettings: {
            text: 'Import and Export details of US',
            textStyle: { fontFamily: 'Segoe UI' }
        },
        dataSource: window.importData,
        weightValuePath: 'sales',
        levels: [
            { groupPath: 'dataType', fill: '#c5e2f7', headerStyle: { size: '16px' }, headerAlignment: 'Center', groupGap: 5 },
            { groupPath: 'product', fill: '#a4d1f2', headerAlignment: 'Center', groupGap: 2 }
        ],
        leafItemSettings: {
            labelPath: 'type',
            fill: '#8ebfe2',
            labelPosition: 'Center',
            gap: 10,
            labelStyle: { fontFamily: 'Segoe UI' }
        },
        selectionSettings: {
            enable: true,
            fill: '#58a0d3',
            border: { width: 0.3, color: 'black' },
            opacity: '1'
        },
        highlightSettings: {
            enable: true,
            fill: '#71b0dd',
            border: { width: 0.3, color: 'black' },
            opacity: '1'
        }
    });
    treemap.appendTo('#import-container');
    var highlightChange;
    var highlightCheckBox = new ej.buttons.CheckBox({
        change: highlightChange, checked: true
    }, '#highlightEnable');
    var selectionChange;
    var selectionCheckBox = new ej.buttons.CheckBox({
        change: selectionChange, checked: true
    }, '#SelectionEnable');
    highlightCheckBox.change = highlightChange = function (e) {
        treemap.highlightSettings.enable = e.checked;
        treemap.refresh();
    };
    selectionCheckBox.change = selectionChange = function (e) {
        treemap.selectionSettings.enable = e.checked;
        treemap.refresh();
    };
    var highlightMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select highlight type',
        width: '100%',
        change: function () {
            treemap.highlightSettings.mode = highlightMode.value;
            treemap.refresh();
        }
    });
    highlightMode.appendTo('#highlightMode');
    var selectionMode = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Selection selection type',
        width: '100%',
        change: function () {
            treemap.selectionSettings.mode = selectionMode.value;
            treemap.refresh();
        }
    });
    selectionMode.appendTo('#selectionMode');
};