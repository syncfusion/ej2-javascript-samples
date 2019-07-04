/**
 * Pivot Table Value Filtering Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var fieldCollections = {};
        var operators = ['Equals', 'DoesNotEquals', 'GreaterThan', 'GreaterThanOrEqualTo',
            'LessThan', 'LessThanOrEqualTo', 'Between', 'NotBetween'];
        var fields = ['Country', 'Products', 'Year'];
        var measures = [
            { value: 'In_Stock', text: 'In Stock' },
            { value: 'Sold', text: 'Units Sold' },
            { value: 'Amount', text: 'Sold Amount' }
        ];
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
        allowValueFilter: true,
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
        columns: [{ name: 'Year' }],
        dataSource: window.Pivot_Data,
        expandAll: false
    },
    dataBound: function (args) {
        fieldCollections = {};
        for (var i = 0, Cnt = pivotObj.dataSourceSettings.filterSettings; i < Cnt.length; i++) {
            fieldCollections[Cnt[i].name] = Cnt[i];
        }
    },
    gridSettings: { columnWidth: 140 },
    width: '100%',
    height: 300
    });
    pivotObj.appendTo('#PivotView');
    
    var fieldsddl = new ej.dropdowns.DropDownList({
        dataSource: fields,
        index: 0,
        width: '100%',
        change: function (args) {
            if (fieldCollections[args.value]) {
                measuresddl.value = fieldCollections[args.value].measure;
                operatorddl.value = fieldCollections[args.value].condition;
            }
            else {
                setFilters(args.value, 'In_Stock', 'DoesNotEquals', '', '');
                operatorddl.value = 'DoesNotEquals';
                measuresddl.value = 'In_Stock';
            }
        }
    });
    fieldsddl.appendTo('#value-fields');
    var measuresddl = new ej.dropdowns.DropDownList({
        dataSource: measures,
        fields: { value: 'value', text: 'text' },
        value: 'In_Stock',
        width: '100%',
        change: function (args) {
            setFilters(fieldsddl.value, args.value, operatorddl.value, valueInput1.value, valueInput2.value);
        }
    });
    measuresddl.appendTo('#value-measures');
    var operatorddl = new ej.dropdowns.DropDownList({
        value: 'DoesNotEquals',
        dataSource: operators,
        change: function (args) {
            if (args.value === 'Between' || args.value === 'NotBetween') {
                document.querySelector('.input2cls').style.display = '';
            }
            else {
                document.querySelector('.input2cls').style.display = 'none';
            }
            setFilters(fieldsddl.value, measuresddl.value, args.value, valueInput1.value, valueInput2.value);
        }
    });
    operatorddl.appendTo('#value-conditions');
    var valueInput1 = new ej.inputs.NumericTextBox({
        width: '100%',
        value: '0',
        placeholder: "Example: 9590",
        change: function (e) {
            setFilters(fieldsddl.value, measuresddl.value, operatorddl.value, e.value, valueInput2.value);
        }
    });
    valueInput1.appendTo('#value-value1');
    var valueInput2 = new ej.inputs.NumericTextBox({
        width: '100%',
        value: '0',
        placeholder: "Example: 17500",
        change: function (e) {
            setFilters(fieldsddl.value, measuresddl.value, operatorddl.value, valueInput1.value, e.value);
        }
    });
    valueInput2.appendTo('#value-value2');
    var applyBtn = new ej.buttons.Button({
        isPrimary: true
    });
    applyBtn.appendTo('#value-apply');
    var clearBtn = new ej.buttons.Button({ });
    clearBtn.appendTo('#value-clear');
    function setFilters(fieldName, measureName, condition, operand1, operand2) {
        fieldCollections[fieldName] = {
            name: fieldName,
            type: 'Value',
            measure: measureName,
            condition: condition,
            value1: operand1,
            value2: operand2
        };
    }
    document.getElementById('value-apply').onclick = function () {
        var filterOptions = [];
            filterOptions = [{
                name: fieldsddl.value,
                type: 'Value',
                measure: measuresddl.value,
                condition: operatorddl.value,
                value1: valueInput1.value === null ? 1 : valueInput1.value,
                value2: valueInput2.value === null ? 1 : valueInput2.value
            }];
        pivotObj.dataSourceSettings.filterSettings = filterOptions;
    };
    document.getElementById('value-clear').onclick = function () {
        pivotObj.dataSourceSettings.filterSettings = [];
        valueInput1.value = '0';
        valueInput2.value = '0';
    };
};
