/**
 * Pivot Table Filtering Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var fieldCollections = {};
    var operators = ['Equals', 'DoesNotEquals', 'BeginWith', 'DoesNotBeginWith', 'EndsWith',
        'DoesNotEndsWith', 'Contains', 'DoesNotContains', 'GreaterThan',
        'GreaterThanOrEqualTo', 'LessThan', 'LessThanOrEqualTo', 'Between', 'NotBetween'];
    var fields = ['Country', 'Products', 'Year'];
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            allowLabelFilter: true,
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            dataSource: window.Pivot_Data,
            expandAll: false
        },
        dataBound: function (args) {
            fieldCollections = {};
            for (var i = 0, len = pivotObj.dataSourceSettings.filterSettings; i < len.length; i++) {
                var field = len[i];
                fieldCollections[field.name] = field;
            }
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
    var fieldsddl = new ej.dropdowns.DropDownList({
        dataSource: fields,
        index: 0,
        width: '100%',
        change: function (args) {
            if (fieldCollections[args.value]) {
                operatorddl.value = fieldCollections[args.value].condition;
                valueInput1.value = fieldCollections[args.value].value1;
                valueInput2.value = fieldCollections[args.value].value2;
            }
            else {
                setFilters(args.value, 'DoesNotEquals', '', '');
                operatorddl.value = 'DoesNotEquals';
                valueInput1.value = '';
                valueInput2.value = '';
            }
            updateButtonState();
        }
    });
    fieldsddl.appendTo('#label-fields');
    var operatorddl = new ej.dropdowns.DropDownList({
        dataSource: operators,
        value: 'DoesNotEquals',
        change: function (args) {
            if (args.value === 'Between' || args.value === 'NotBetween') {
                document.querySelector('.input2cls').style.display = '';
            }
            else {
                document.querySelector('.input2cls').style.display = 'none';
            }
            setFilters(fieldsddl.value, args.value, valueInput1.value, valueInput2.value);
            updateButtonState();
        }
    });
    operatorddl.appendTo('#label-conditions');
    var valueInput1 = new ej.inputs.MaskedTextBox({
        value: '',
        placeholder: 'Example: "Germany"',
        change: function (e) {
            setFilters(fieldsddl.value, operatorddl.value, e.value, valueInput2.value);
            updateButtonState();
        },
        width: '100%'
    });
    valueInput1.appendTo('#label-value1');
    var valueInput2 = new ej.inputs.MaskedTextBox({
        value: '',
        placeholder: 'Example: "States"',
        change: function (e) {
            setFilters(fieldsddl.value, operatorddl.value, valueInput1.value, e.value);
            updateButtonState();
        },
        width: '100%'
    });
    valueInput2.appendTo('#label-value2');
    var applyBtn = new ej.buttons.Button({
        isPrimary: true, disabled: true
    });
    applyBtn.appendTo('#label-apply');
    var clearBtn = new ej.buttons.Button({ });
    clearBtn.appendTo('#label-clear');
    function setFilters(fieldName, condition, operand1, operand2) {
        fieldCollections[fieldName] = {
            name: fieldName,
            type: 'Label',
            condition: condition,
            value1: operand1,
            value2: operand2
        };
    }
    function updateButtonState() {
        applyBtn.disabled = true;
        for (var i = 0, len = fields; i < len.length; i++) {
            var field = len[i];
            if (fieldCollections[field] && (fieldCollections[field].value1 !== '' || fieldCollections[field].value2 !== '')) {
                applyBtn.disabled = false;
                break;
            }
        }
    }
    document.getElementById('label-apply').onclick = function () {
        var filterOptions = [];
        for (var i = 0, len = fields; i < len.length; i++) {
            var field = len[i];
            if (fieldCollections[field] && fieldCollections[field].value1 !== ''){ 
                filterOptions.push(fieldCollections[field]);
            }
        }
        if (filterOptions.length === 0) {
            filterOptions = [{
                name: fieldsddl.value,
                type: 'Label',
                condition: operatorddl.value,
                value1: valueInput1.value.toString(),
                value2: valueInput2.value.toString()
            }];
        }
        pivotObj.dataSourceSettings.filterSettings = filterOptions;
    };
    document.getElementById('label-clear').onclick = function () {
        pivotObj.dataSourceSettings.filterSettings = [];
        valueInput1.value = '';
        valueInput2.value = '';
        fieldCollections = {};
        updateButtonState();
    };
};
