this.default = function () {
    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function (args) {
            var printtheme = location.hash.split('/')[1];
            printtheme = printtheme ? printtheme : 'Material';
            args.treemap.theme = (printtheme.charAt(0).toUpperCase() +
            printtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        allowPdfExport : true,
        allowImageExport: true,
        allowPrint : true,
        // custom code end
        titleSettings: {
            text: 'Top 10 best selling smartphone brands - 2017',
            textStyle: { size: '15px', fontFamily: 'Segoe UI' }
        },
        dataSource: window.ProductSale,
        layoutType: 'SliceAndDiceVertical',
        weightValuePath: 'Percentage',
        rangeColorValuePath: 'Percentage',
        tooltipSettings: {
            visible: true,
            format: '${Product} (+${Percentage}) %',
            textStyle: { fontFamily: 'Segoe UI' }
        },
        leafItemSettings: {
            labelPath: 'Product',
            fill: '#6699cc',
            border: { color: 'black', width: 0.5 },
            labelPosition: 'Center',
            labelStyle: { fontFamily: 'Segoe UI' },
            interSectAction: 'Hide',
            labelFormat: '${Product} (+${Percentage}) %',
            colorMapping: [
                {
                    from: 1.3,
                    to: 22,
                    color: '#FAB665',
                    minOpacity: 0.5,
                    maxOpacity: 1
                }
            ]
        },
    });
    treemap.appendTo('#container');
    // code for property panel
    var togglebtn = new ej.buttons.Button({
        cssClass: 'e-info', isPrimary: true
    });
    togglebtn.appendTo('#togglebtn');
    document.getElementById('togglebtn').onclick = function () {
        treemap.print();
    };
    var mode = new ej.dropdowns.DropDownList({
        index: 0,
        width: '100%'
    });
    mode.appendTo('#mode');
    var togglebtn1 = new ej.buttons.Button({
        cssClass: 'e-info', isPrimary: true
    });
    togglebtn1.appendTo('#togglebtn1');
    var fileText = new ej.inputs.TextBox({
        value: 'TreeMap',
        width: '100%'
    });
    fileText.appendTo('#fileName');
    document.getElementById('togglebtn1').onclick = function () {
        var fileName = fileText.value;
        treemap.export(mode.value, fileName);
    };
};