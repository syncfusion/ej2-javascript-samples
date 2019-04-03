/**
 * Template sample
 */

this.default = function () {
    var elem;
    var dropDownObj;
    var boxObj;
    var ticksSlider;
    var filter = [{
        field: 'Category',
        label: 'Category',
        type: 'string'
    },
    {
        field: 'PaymentMode',
        label: 'PaymentMode',
        type: 'string',
        operators: [
            { key: 'Equal', value: 'equal' },
            { key: 'Not Equal', value: 'notequal' }
        ],
        template: {
            create: function () {
                elem = document.createElement('input');
                elem.setAttribute('type', 'text');
                return elem;
            },
            destroy: function (args) {
                var dropdown = ej.base.getComponent(document.getElementById(args.elementId), 'dropdownlist');
                if (dropdown) {
                    dropdown.destroy();
                }
            },
            write: function (args) {
                var ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
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
        ruleChange: updateRule
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

    function updateRule(args) {
        if (ej.base.getComponent(radioButton.element, 'radio').checked) {
            element.textContent = qryBldrObj.getSqlFromRules(args.rule);
        } else {
            element.textContent = JSON.stringify(args.rule, null, 4);
        }
    }
    element.textContent = JSON.stringify(qryBldrObj.getValidRules(qryBldrObj.rule), null, 4);

    function changeValue() {
        element = document.getElementById('ruleContent');
        var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        if (ej.base.getComponent(radioButton.element, 'radio').checked) {
            element.textContent = qryBldrObj.getSqlFromRules(validRule);
        } else {
            element.textContent = JSON.stringify(validRule, null, 4);
        }
    }
    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    // Handler used to reposition the tooltip on page scroll
    function onScroll() {
        var tooltip = document.getElementsByClassName('e-handle e-control e-tooltip'), tooltipObj;
        for (var i = 0, len = tooltip.length; i < len; i++) {
			tooltipObj = tooltip[i].ej2_instances[0];
            // Refreshing each slider tooltip object position
			tooltipObj.refresh(tooltipObj.element);
		}
    }
};
