/**
 * Template sample
 */

this.default = function () {
    var elem;
    var dropDownObj;
    var boxObj;
    var multiSelectObj;
    var inOperators = ['in', 'notin'];
    var ticksSlider;
    var filter = [{
        field: 'Category',
        label: 'Category',
        type: 'string',
        template: {
            create: function () {
                elem = document.createElement('input');
                elem.setAttribute('type', 'text');
                return elem;
            },
            destroy: function (args) {
                var multiSelect = ej.base.getComponent(document.getElementById(args.elementId), 'multiselect');
                if (multiSelect) {
                    multiSelect.destroy();
                }
                var textBox = ej.base.getComponent(document.getElementById(args.elementId), 'textbox');
                if (textBox) {
                    textBox.destroy();
                }
            },
            write: function (args) {
                if (inOperators.indexOf(args.operator) > -1) {
                    multiSelectObj = new ej.dropdowns.MultiSelect({
                        dataSource: ['Food', 'Travel', 'Shopping', 'Mortgage', 'Salary', 'Clothing', 'Bills'],
                        value: args.values,
                        mode: 'CheckBox',
                        placeholder: 'Select category',
                        change: function (e) {
                            qryBldrObj.notifyChange(e.value, e.element);
                        }
                    });
                    multiSelectObj.appendTo('#' + args.elements.id);
                } else {
                    var inputobj = new ej.inputs.TextBox({
                        placeholder: 'Value',
                        input: function (e) {
                            qryBldrObj.notifyChange(e.value, e.event.target);
                        }
                    });
                    inputobj.appendTo('#' + args.elements.id);
                    inputobj.value = args.values;
                    inputobj.dataBind();
                }
            }
        }
    },
    {
        field: 'PaymentMode',
        label: 'PaymentMode',
        type: 'string',
        operators: [
            { key: 'Equal', value: 'equal' },
            { key: 'Not Equal', value: 'notequal' },
            { key: 'In', value: 'in' },
            { key: 'Not In', value: 'notin' }
        ],
        template: {
            create: function () {
                elem = document.createElement('input');
                elem.setAttribute('type', 'text');
                return elem;
            },
            destroy: function (args) {
                var selectObj = ej.base.getComponent(document.getElementById(args.elementId), 'multiselect');
                if (selectObj) {
                    selectObj.destroy();
                }
                var dropdown = ej.base.getComponent(document.getElementById(args.elementId), 'dropdownlist');
                if (dropdown) {
                    dropdown.destroy();
                }
            },
            write: function (args) {
                var ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
                if (inOperators.indexOf(args.operator) > -1) {
                    var multiSelectObj = new ej.dropdowns.MultiSelect({
                        dataSource: ds,
                        value: args.values,
                        mode: 'CheckBox',
                        placeholder: 'Select Transaction',
                        change: function (e) {
                            qryBldrObj.notifyChange(e.value, e.element);
                        }
                    });
                    multiSelectObj.appendTo('#' + args.elements.id);
                }
                else {
                    dropDownObj = new ej.dropdowns.DropDownList({
                        dataSource: ds,
                        value: args.values ? args.values : ds[0],
                        change: function (e) {
                            qryBldrObj.notifyChange(e.itemData.value, e.element);
                        }
                    });
                    dropDownObj.appendTo('#' + args.elements.id);

                }
            }
        }
    },
    {
        field: 'TransactionType',
        label: 'TransactionType',
        type: 'string',
        operators: [{
            key: 'Equal',
            value: 'equal'
        }, {
            key: 'Not Equal',
            value: 'notequal'
        }],
        template: {
            create: function () {
                elem = document.createElement('input');
                elem.setAttribute('type', 'checkbox');
                return elem;
            },
            destroy: function (args) {
                ej.base.getComponent(document.getElementById(args.elementId), 'checkbox').destroy();
            },
            write: function (args) {
                var checked = args.values === 'IsExpensive' ? true : false;
                boxObj = new ej.buttons.CheckBox({
                    label: 'Is Expensive',
                    checked: checked,
                    change: function (e) {
                        qryBldrObj.notifyChange(e.checked ? 'expensive' : 'income', e.event.target);
                    }
                });
                boxObj.appendTo('#' + args.elements.id);
            }
        }
    },
    {
        field: 'Description',
        label: 'Description',
        type: 'string'
    },
    {
        field: 'Date',
        label: 'Date',
        type: 'date'
    },
    {
        field: 'Amount',
        label: 'Amount',
        type: 'number',
        operators: [
            { key: 'Equal', value: 'equal' },
            { key: 'Greater than', value: 'greaterthan' },
            { key: 'Less than', value: 'lessthan' },
            { key: 'Less than or equal', value: 'lessthanorequal' },
            { key: 'Greater than or equal', value: 'greaterthanorequal' },
            { key: 'Not equal', value: 'notequal' }
        ],
        template: {
            create: function () {
                elem = document.createElement('div');
                elem.setAttribute('class', 'ticks_slider');
                return elem;
            },
            destroy: function (args) {
                ej.base.getComponent(document.getElementById(args.elementId), 'slider').destroy();
            },
            write: function (args) {
                ticksSlider = new ej.inputs.Slider({
                    value: args.values,
                    min: 0,
                    max: 100,
                    tooltip: { isVisible: true, placement: 'Before', showOn: 'Hover' },
                    type: 'MinRange',
                    change: function (e) {
                        qryBldrObj.notifyChange(e.value, args.elements);
                    }
                });
                ticksSlider.appendTo('#' + args.elements.id);
            }
        }
    }
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'in',
            'value': ['Clothing']
        },
        {
            'condition': 'or',
            'rules': [{
                'label': 'TransactionType',
                'field': 'TransactionType',
                'type': 'string',
                'operator': 'equal',
                'value': 'Income'
            },
            {
                'label': 'PaymentMode',
                'field': 'PaymentMode',
                'type': 'string',
                'operator': 'equal',
                'value': 'Cash'
            }
            ]
        }, {
            'label': 'Amount',
            'field': 'Amount',
            'type': 'number',
            'operator': 'equal',
            'value': 10
        }
        ]
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.expenseData,
        columns: filter,
        width: '100%',
        rule: importRules,
        change: updateRule
    });
    qryBldrObj.appendTo('#querybuilder');
    var radioButton = new ej.buttons.RadioButton({
        label: 'JSON Rule',
        name: 'rule',
        value: 'json',
        checked: true,
        change: changeValue
    });
    radioButton.appendTo('#radio1');
    radioButton = new ej.buttons.RadioButton({
        label: 'SQL Rule',
        name: 'rule',
        value: 'sql',
        change: changeValue
    });
    radioButton.appendTo('#radio2');
    var element = document.getElementById('ruleContent');

    function updateRule() {
        if (ej.base.getComponent(radioButton.element, 'radio').checked) {
            element.textContent = qryBldrObj.getSqlFromRules(qryBldrObj.rule);
        } else {
            element.textContent = JSON.stringify({
                condition: qryBldrObj.rule.condition,
                rule: qryBldrObj.rule.rules
            }, null, 4);
        }
    }
    element.textContent = JSON.stringify({
        condition: qryBldrObj.rule.condition,
        rule: qryBldrObj.rule.rules
    }, null, 4);

    function changeValue() {
        element = document.getElementById('ruleContent');
        if (ej.base.getComponent(radioButton.element, 'radio').checked) {
            element.textContent = qryBldrObj.getSqlFromRules(qryBldrObj.rule);
        } else {
            element.textContent = JSON.stringify({
                condition: qryBldrObj.rule.condition,
                rules: qryBldrObj.rule.rules
            }, null, 4);
        }
    }
    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    // Handler used to reposition the tooltip on page scroll
    function onScroll() {
        var slider = [ticksSlider];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip();
        });
    }
};
