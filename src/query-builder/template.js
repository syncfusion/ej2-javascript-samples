/**
 * Template sample
 */

this.default = function () {
    var elem;
    var dropDownObj;
    var boxObj;
    var ticksSlider;
    var content;
    var selectedIndex = 0;
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
                        if (e.isInteracted) {
                            qryBldrObj.notifyChange(e.value, args.elements);
                        }
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
        ruleChange: updateContentTemplate
    });
    qryBldrObj.appendTo('#querybuilder');
    var tabObj = new ej.navigations.Tab({
        height: 320,
        created: updateCELContentTemplate,
        selected: tabChange
    });
    tabObj.appendTo('#tab_orientation');
    var celTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    celTooltip.appendTo('#celTooltip');
    var spelTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    spelTooltip.appendTo('#spelTooltip');
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
    function tabChange(args) {
        selectedIndex = args.selectedIndex;
        selectedContent = args.selectedContent;
        setTimeout(function () {
            updateContentTemplate();
        }, 100);
    }
    function updateContentTemplate() {
        switch (selectedIndex) {
        case 0:
            updateCELContentTemplate();
            break;
        case 1:
            updateSpCELContentTemplate();
            break;
        }
    }
    function updateCELContentTemplate() {
        var allRules = qryBldrObj.getValidRules();
        var celQuery = '';
        celQuery = getCELQuery(allRules, celQuery);
        celQuery = getCELQuery(allRules, celQuery);
        content = celQuery;
        document.getElementsByClassName('e-cel-content')[0].textContent = content;
        document.getElementsByClassName('e-cel-content')[0].style.display = 'block';
    }
    function updateSpCELContentTemplate() {
        var allRules = qryBldrObj.getValidRules();
        var spelQuery = '';
        content = getSpELQuery(allRules, spelQuery);
        content = getSpELQuery(allRules, spelQuery);
        document.getElementsByClassName('e-spel-content')[0].textContent = content;
        document.getElementsByClassName('e-spel-content')[0].style.display = 'block';
    }
    var queryContentPreview = document.getElementById('e-query-preview');
    if (queryContentPreview) {
        queryContentPreview.addEventListener('mouseenter', function () {
            var elem = document.getElementsByClassName("copy-tooltip");
            for (var i = 0; i < elem.length; i++) {
            if (tabObj.selectedItem == i) {
                elem[i].style.display = 'block';
            }
            }
        });
        queryContentPreview.addEventListener('mouseleave', function () {
            var elem = document.getElementsByClassName("copy-tooltip");
            for (var i = 0; i < elem.length; i++) {
                if (tabObj.selectedItem == i) {
                    elem[i].style.display = 'none';
                }
            }
        });
        var copyCelElem = document.getElementById('copy-cel');
        copyCelElem.addEventListener('click', function (args) {
            navigator.clipboard.writeText(content);
            setTimeout(function () {
                ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
            },1000);
        });
        var copySpelElem = document.getElementById('copy-spel');
        copySpelElem.addEventListener('click', function (args) {
            navigator.clipboard.writeText(content);
            setTimeout(function () {
                ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
            },1000);
        });
    }
    // Util.ts code for CEL and SpEL type queries.
    function getCELQuery (rules, celQuery) {
        celQuery = '';
        celQuery = convertQuery(rules, celQuery, null, 'CEL');
        return celQuery;
    }
    function getSpELQuery (rules, spELQuery) {
        spELQuery = '';
        spELQuery = convertQuery(rules, null, spELQuery, null);
        return spELQuery;
    }
    function convertQuery(rules, celQuery, spELQuery, type) {
        celQuery = celQuery || ''; // Set celQuery to an empty string if not provided
        spELQuery = spELQuery || ''; // Set spELQuery to an empty string if not provided
        type = type || '';
        var isRoot = false;
        var rule;
        var celOperators = {
            equal: '==', notequal: '!=', greaterthan: '>', greaterthanorequal: '>=', lessthan: '<', in: 'in', notin: 'in',
            lessthanorequal: '<=', startswith: 'startsWith', endswith: 'endsWith', contains: 'contains', isnull: '== null', isnotnull: '!= null',
            isempty: '== ""', isnotempty: '!= ""'
        };
        var spELOperators = {
            equal: '==', notequal: '!=', greaterthan: '>', greaterthanorequal: '>=', lessthan: '<', in: 'in', notin: 'in',
            lessthanorequal: '<=', startswith: 'matches', endswith: 'matches', contains: 'matches', isnull: '== null', isnotnull: '!= null',
            isempty: '== ""', isnotempty: '!= ""'
        };
        if (type === 'CEL') {
            if (!celQuery && celQuery !== '') {
                celQuery = '';
                isRoot = true;
            }
            else {
                celQuery += '(';
            }
        }
        else {
            if (!spELQuery && spELQuery !== '') {
                spELQuery = '';
                isRoot = true;
            }
            else {
                spELQuery += '(';
            }
        }
        var condition = rules.condition;
        if (rules.rules) {
            for (var j = 0, jLen = rules.rules.length; j < jLen; j++) {
                if (rules.rules[j].rules) {
                    if (type === 'CEL') {
                        celQuery = convertQuery(rules.rules[j], celQuery, null, 'CEL');
                    }
                    else {
                        spELQuery = convertQuery(rules.rules[j], null, spELQuery, 'SpEL');
                    }
                }
                else {
                    var ruleCondition;
                    var value;
                    rule = rules.rules[j];
                    var valueStr = '';
                    var ruleOpertor = (type === 'CEL') ? celOperators[rule.operator] : spELOperators[rule.operator];
                    var operator = rule.operator.toString();
                    if (rule.value && typeof rule.value === 'object') {
                        if (operator === 'between') {
                            ruleCondition = ' ' + '&&' + ' ';
                            if (rule.type === 'date') {
                                valueStr += '(' + rule.field + ' >= "' + rule.value[0] + '"' + ruleCondition + rule.field + ' <= "' + rule.value[1] + '")';
                            }
                            else {
                                valueStr += '(' + rule.field + ' >= ' + rule.value[0] + ruleCondition + rule.field + ' <= ' + rule.value[1] + ')';
                            }
                        }
                        else if (operator === 'notbetween') {
                            ruleCondition = ' ' + '||' + ' ';
                            if (rule.type === 'date') {
                                valueStr += '(' + rule.field + ' < "' + rule.value[0] + '"' + ruleCondition + rule.field + ' > "' + rule.value[1] + '")';
                            }
                            else {
                                valueStr += '(' + rule.field + ' < ' + rule.value[0] + ruleCondition + rule.field + ' > ' + rule.value[1] + ')';
                            }
                        }
                        else {
                            if (type === 'CEL') {
                                if (rule.value !== null) {
                                    value = rule.value[0] ? rule.value[0] : "";
                                    valueStr += '["' + value + '"';
                                    for (var k = 1, kLen = rule.value.length; k < kLen; k++) {
                                        valueStr += ', "' + rule.value[k] + '"';
                                    }
                                    valueStr += ']';
                                }
                            }
                            else {
                                if (rule.value !== null) {
                                    value = rule.value[0] ? rule.value[0] : "";
                                    valueStr += '(' + rule.field + ' == "' + value + '"';
                                    for (var l = 1, kLength = rule.value.length; l < kLength; l++) {
                                        valueStr += ' or ' + rule.field + ' == "' + rule.value[l] + '"';
                                    }
                                    valueStr += ')';
                                }
                            }
                        }
                    }
                    else {
                        if (type === 'CEL') {
                            if (rule.type === 'number' || rule.value === 'boolean' || rule.value === null) {
                                valueStr += rule.value;
                            }
                            else {
                                valueStr += '"' + rule.value + '"';
                            }
                        }
                        else {
                            if (operator.indexOf('startswith') > -1) {
                                valueStr += rule.value ? '"^' + rule.value + '"' : '(' + rule.value + ')';
                            }
                            else if (operator.indexOf('endswith') > -1) {
                                valueStr += rule.value ? '"' + rule.value + '$"' : '(' + rule.value + ')';
                            }
                            else if (operator.indexOf('contains') > -1) {
                                valueStr += rule.value ? '"' + rule.value + '"' : '(' + rule.value + ')';
                            }
                            else if (operator.indexOf('isempty') > -1) {
                                valueStr += '';
                            }
                            else {
                                if (rule.type === 'number' || rule.value === 'boolean' || rule.value === null) {
                                    valueStr += rule.value;
                                }
                                else {
                                    valueStr += '"' + rule.value + '"';
                                }
                            }
                        }
                    }
                    if (operator.indexOf('null') > -1 || (operator.indexOf('empty') > -1)) {
                        if (rule.field.indexOf(' ') > -1) {
                            rule.field = '"' + rule.field + '"';
                        }
                        if (type === 'CEL') {
                            celQuery += rule.field + ' ' + ruleOpertor;
                        }
                        else {
                            spELQuery += rule.field + ' ' + ruleOpertor;
                        }
                    }
                    else {
                        if (rule.field.indexOf(' ') > -1) {
                            rule.field = '"' + rule.field + '"';
                        }
                        if (type === 'CEL') {
                            if (operator.indexOf('startswith') > -1 || (operator.indexOf('endswith') > -1) || (operator.indexOf('contains') > -1)) {
                                celQuery += rule.field + '.' + ruleOpertor + '(' + valueStr + ')';
                            }
                            else if (operator.indexOf('between') > -1) {
                                celQuery += valueStr;
                            }
                            else if (operator.indexOf('notin') > -1) {
                                celQuery += '!(' + rule.field + ' ' + ruleOpertor + ' ' + valueStr + ')';
                            }
                            else {
                                celQuery += rule.field + ' ' + ruleOpertor + ' ' + valueStr;
                            }
                        }
                        else {
                            if (operator.indexOf('between') > -1 || operator === 'in') {
                                spELQuery += valueStr;
                            }
                            else if (operator.indexOf('notin') > -1) {
                                spELQuery += '!' + valueStr;
                            }
                            else {
                                spELQuery += rule.field + ' ' + ruleOpertor + ' ' + valueStr;
                            }
                        }
                    }
                    if (rule.condition && rule.condition !== '') {
                        condition = rule.condition;
                    }
                }
                if (j !== jLen - 1) {
                    rule = rules.rules[j];
                    if (condition === '' || (rule && rule.condition !== '' && rule.custom && (rule.custom).isCustom)) {
                        condition = rule.condition;
                    }
                    if (type === 'CEL') {
                        condition = condition.toUpperCase();
                        if (condition === 'AND') {
                            celQuery += ' && ';
                        }
                        else {
                            celQuery += ' || ';
                        }
                    }
                    else {
                        condition = condition.toLowerCase();
                        spELQuery += ' ' + condition + ' ';
                    }
                }
            }
        }
        if (!isRoot) {
            if (type === 'CEL') {
                celQuery += ')';
            }
            else {
                spELQuery += ')';
            }
        }
        if (type === 'CEL') {
            return celQuery;
        }
        return spELQuery;
    }
};
