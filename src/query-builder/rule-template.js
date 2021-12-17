/**
 * Rule Template sample
 */

this.default = function () {
    var filter = [
        { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
        { field: 'FirstName', label: 'First Name', type: 'string'},
        { field: 'LastName', label: 'Last Name', type: 'string'},
        { field: 'HireDate', label: 'Hire Date', type: 'date'},
        { field: 'Country', label: 'Country', type: 'string', ruleTemplate: "#ruleTemplate"}
    ];
    var fieldObj;
    var valueObj;
    var operatorObj0;
    var operatorObj1;
    var val = [
        { field: 'USA', label: 'USA' },
        { field: 'England', label: 'England' },
        { field: 'India', label: 'India' },
        { field: 'Spain', label: 'Spain' }
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'Last Name',
            'field': 'LastName',
            'type': 'string',
            'operator': 'equal',
            'value': 'Davolio'
        },
        {
            'label': 'Country',
            'field': 'Country',
            'type': 'string',
            'operator': 'equal',
            'value': "USA"
        }
        ]
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        columns: filter,
        rule: importRules,
        actionBegin: actionBegin
    });
    qryBldrObj.appendTo('#querybuilder');

    function actionBegin(args) {
        if (args.requestType === 'template-create') {
            fieldObj = new ej.dropdowns.DropDownList({
                dataSource: this.columns,
                fields: args.fields,
                value: args.rule.field,
                change: function (e) {
                    qryBldrObj.notifyChange(e.value, e.element, 'field');
                }
            });
            fieldObj.appendTo('#' + args.ruleID + '_filterkey');
            operatorObj0 = new ej.buttons.RadioButton ({
                label:'Is Equal',
                name:'operator',
                value:'equal',
                checked: args.rule.operator === 'equal'? true : false,
                change: function (e) {
                    qryBldrObj.notifyChange(e.value, e.event.srcElement, 'operator');
                }
            });
            operatorObj0.appendTo('#' + args.ruleID + '_operatorkey0');
            operatorObj1 = new ej.buttons.RadioButton ({
                label:'Is Not Equal',
                name:'operator',
                value:'notequal',
                checked: args.rule.operator === 'notequal'? true : false,
                change: function (e) {
                    qryBldrObj.notifyChange(e.value, e.event.srcElement, 'operator');
                }
            });
            operatorObj1.appendTo('#' + args.ruleID + '_operatorkey1');
            valueObj = new ej.dropdowns.DropDownList ({
                dataSource: val,
                fields: args.fields,
                value: args.rule.value,
                change: function (e) {
                    qryBldrObj.notifyChange(e.value, e.element, 'value');
                }
            });
            valueObj.appendTo('#' + args.ruleID + '_valuekey');
        }
    }
};
