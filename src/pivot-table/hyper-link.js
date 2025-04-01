/**
 * Pivot Table Hyperlink Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var operators = ['Equals', 'NotEquals', 'GreaterThan', 'GreaterThanOrEqualTo',
        'LessThan', 'LessThanOrEqualTo', 'Between', 'NotBetween'];
    var measures = [
        { value: 'In_Stock', text: 'In Stock' },
        { value: 'Sold', text: 'Units Sold' },
        { value: 'Amount', text: 'Sold Amount' }
    ];
    var options = [
        { value: 'allcells', text: 'All cells' },
        { value: 'rowheader', text: 'Row headers' },
        { value: 'columnheader', text: 'Column headers' },
        { value: 'valuecells', text: 'Value cells' },
        { value: 'summarycells', text: 'Summary cells' },
        { value: 'conditional', text: 'Condition based option' },
        { value: 'headertext', text: 'Header based option' }
    ];
    var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
        dataSource: window.Pivot_Data,
        expandAll: true
    },
    hyperlinkSettings: {
        showValueCellHyperlink: true,
        cssClass: 'e-custom-class'
    },
    hyperlinkCellClick: function (args) {
        var cell = '';
        if (args.currentCell.className.indexOf('e-stot') > -1 || args.currentCell.className.indexOf('e-gtot') > -1 || args.currentCell.className.indexOf('e-summary') > -1) {
            cell += 'Summary ';
        }
        if ((args.currentCell.querySelector('.e-headercelldiv') && !(args.data).indexObject) ||
            args.currentCell.className.indexOf('e-cellvalue') > -1) {
            cell += 'Value Header ';
        } else if (args.currentCell.parentElement.className.indexOf('e-rowsheader') > -1 || args.currentCell.className.indexOf('e-rowsheader') > -1) {
            cell += 'Row Header ';
        }
        else if (args.currentCell.className.indexOf('e-columnsheader') > -1 ||
            args.currentCell.className.indexOf('e-pivotcell-container') > -1) {
            cell += 'Column Header ';
        }
        else if (args.currentCell.className.indexOf('e-valuescontent') > -1) {
            cell += 'Value ';
        }
        if (args.currentCell.querySelector('a') && 
        (args.currentCell.querySelector('a').innerText === 'France' || args.currentCell.querySelector('a').innerText === 'Germany')) {
            var country = args.currentCell.querySelector('a').innerText;
            args.currentCell.querySelector('a').setAttribute('data-url',(country === 'France' ?
             'https://en.wikipedia.org/wiki/France' : 'https://en.wikipedia.org/wiki/Germany'));
            args.cancel = false;
        } else {
            appendElement('<b>' + cell + '</b>' +' cell click event called<hr>');
        }
    },
    showTooltip: false,
    gridSettings: { columnWidth: 140 },
    width: '100%',
    height: 600
    });
    pivotObj.appendTo('#PivotView');

    var optionsdll = new ej.dropdowns.DropDownList({
        dataSource: options,
        fields: { value: 'value', text: 'text' },
        value: 'valuecells',
        width: '100%',
        change: function (args) {
            document.querySelector('.text1cls').style.display = 'none';
            document.querySelector('.text2cls').style.display = 'none';
            document.querySelector('.measurecls').style.display = 'none';
            document.querySelector('.conditioncls').style.display = 'none';
            document.querySelector('.input1cls').style.display = 'none';
            document.querySelector('.input2cls').style.display = 'none';
            document.querySelector('.textinputcls').style.display = 'none';
            document.querySelector('.updatecls').style.display = 'none';
            if (args.value == 'allcells') {
                pivotObj.hyperlinkSettings = {
                    showHyperlink: true,
                    showRowHeaderHyperlink: false,
                    showColumnHeaderHyperlink: false,
                    showValueCellHyperlink: false,
                    showSummaryCellHyperlink: false,
                    headerText: undefined,
                    conditionalSettings: []
                };
            } else if (args.value == 'rowheader') {
                pivotObj.hyperlinkSettings = {
                    showHyperlink: false,
                    showRowHeaderHyperlink: true,
                    showColumnHeaderHyperlink: false,
                    showValueCellHyperlink: false,
                    showSummaryCellHyperlink: false,
                    headerText: undefined,
                    conditionalSettings: []
                };
            } else if (args.value == 'columnheader') {
                pivotObj.hyperlinkSettings = {
                    showHyperlink: false,
                    showRowHeaderHyperlink: false,
                    showColumnHeaderHyperlink: true,
                    showValueCellHyperlink: false,
                    showSummaryCellHyperlink: false,
                    headerText: undefined,
                    conditionalSettings: []
                };
            }else if (args.value == 'valuecells') {
                pivotObj.hyperlinkSettings = {
                    showHyperlink: false,
                    showRowHeaderHyperlink: false,
                    showColumnHeaderHyperlink: false,
                    showValueCellHyperlink: true,
                    showSummaryCellHyperlink: false,
                    headerText: undefined,
                    conditionalSettings: []
                };
            }else if (args.value == 'summarycells') {
                pivotObj.hyperlinkSettings = {
                    showHyperlink: false,
                    showRowHeaderHyperlink: false,
                    showColumnHeaderHyperlink: false,
                    showValueCellHyperlink: false,
                    showSummaryCellHyperlink: true,
                    headerText: undefined,
                    conditionalSettings: []
                };
            }else if (args.value == 'conditional') {
                document.querySelector('.text1cls').style.display = '';
                document.querySelector('.measurecls').style.display = '';
                document.querySelector('.conditioncls').style.display = '';
                document.querySelector('.input1cls').style.display = '';
                if (operatorddl.value === 'Between' || operatorddl.value === 'NotBetween') {
                    document.querySelector('.input2cls').style.display = '';
                }
                document.querySelector('.updatecls').style.display = '';
            } else if (args.value == 'headertext') {
                document.querySelector('.text2cls').style.display = '';
                document.querySelector('.textinputcls').style.display = '';
                document.querySelector('.updatecls').style.display = '';
            }
        }
    });
    optionsdll.appendTo('#hyperlinks');
    var measuresddl = new ej.dropdowns.DropDownList({
        dataSource: measures,
        fields: { value: 'value', text: 'text' },
        value: 'In_Stock',
        width: '100%'
    });
    measuresddl.appendTo('#hyperlinks-measures');
    var operatorddl = new ej.dropdowns.DropDownList({
        value: 'NotEquals',
        dataSource: operators,
        change: function (args) {
            if (args.value === 'Between' || args.value === 'NotBetween') {
                document.querySelector('.input2cls').style.display = '';
            }
            else {
                document.querySelector('.input2cls').style.display = 'none';
            }
        }
    });
    operatorddl.appendTo('#hyperlinks-conditions');
    var valueInput1 = new ej.inputs.NumericTextBox({
        width: '100%',
        value: '0',
        placeholder: "Example: 400"
    });
    valueInput1.appendTo('#hyperlinks-value1');
    var valueInput2 = new ej.inputs.NumericTextBox({
        width: '100%',
        value: '0',
        placeholder: "Example: 4000"
    });
    valueInput2.appendTo('#hyperlinks-value2');
    var textInput = new ej.inputs.MaskedTextBox({
        value: '',
        placeholder: 'Example: "FY 2015.In Stock"',
        width: '100%'
    });
    textInput.appendTo('#hyperlinks-text');
    var applyBtn = new ej.buttons.Button({
        isPrimary: true
    });
    applyBtn.appendTo('#hyperlinks-apply');
    document.getElementById('hyperlinks-apply').onclick = function () {
        if (optionsdll.value === 'conditional') {
            pivotObj.hyperlinkSettings = {
                showHyperlink: false,
                showRowHeaderHyperlink: false,
                showColumnHeaderHyperlink: false,
                showValueCellHyperlink: false,
                showSummaryCellHyperlink: false,
                headerText: undefined,
                conditionalSettings: [
                    {
                        measure: measuresddl.value,
                        conditions: operatorddl.value,
                        value1: valueInput1.value,
                        value2: valueInput2.value
                    }
                ]
            };
        } else if (optionsdll.value === 'headertext') {
            pivotObj.hyperlinkSettings = {
                showHyperlink: false,
                showRowHeaderHyperlink: false,
                showColumnHeaderHyperlink: false,
                showValueCellHyperlink: false,
                showSummaryCellHyperlink: false,
                headerText: textInput.value,
                conditionalSettings: []
            };
        }
    };

    var clearBtn = new ej.buttons.Button();
    clearBtn.appendTo('#hyperlinks-clear');

    document.getElementById('hyperlinks-clear').onclick = function() {
        document.getElementById('hyperlinks-EventLog').innerHTML = '';
    };

    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('hyperlinks-EventLog');
        log.insertBefore(span, log.firstChild);
    }
};
