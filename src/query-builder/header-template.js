/**
 * Header Template sample
 */

 this.default = function () {
    var filter = [
        { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
        { field: 'FirstName', label: 'First Name', type: 'string'},
        { field: 'LastName', label: 'Last Name', type: 'string'},
        { field: 'BirthDate', label: 'Birth Date', type: 'date'},
        { field: 'Country', label: 'Country', type: 'string'}
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'First Name',
            'field': 'FirstName',
            'type': 'string',
            'operator': 'equal',
            'value': 'Nancy'
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
        headerTemplate: '#headerTemplate',
        actionBegin: actionBegin
    });
    qryBldrObj.appendTo('#querybuilder');

    function actionBegin(args) {
        if (args.requestType === 'header-template-create') {
            var ds = [{ 'key': 'AND', 'value': 'and' }, { 'key': 'OR', 'value': 'or' }];
            var btnObj = new ej.dropdowns.DropDownList({
                dataSource: ds,
                fields: { text: 'key', value: 'value' },
                value: args.condition,
                cssClass: 'e-custom-group-btn e-active-toggle',
                change: function (e) {
                    qryBldrObj.notifyChange(e.value, e.element, 'condition');
                }
            });
            btnObj.appendTo('#' + args.ruleID + '_cndtnbtn');
            var addGroup = document.getElementById(args.ruleID).querySelector('.e-grp-btn');
            if (addGroup) {
                addGroup.onclick = function (e) {
                    var addbtn = ej.base.closest(e.target, '.e-grp-btn');
                    var ddb = addbtn.id.split('_');
                    qryBldrObj.addGroups([{ condition: 'and', 'rules': [{}]}], ddb[1]);
                };
            }
            var addCond = document.getElementById(args.ruleID).querySelector('.e-cond-btn');
            if (addCond) {
                addCond.onclick = function (e) {
                    var addbtn = ej.base.closest(e.target, '.e-cond-btn');
                    var ddb = addbtn.id.split('_');
                    qryBldrObj.addRules([{}], ddb[1]);
                };
            }
            var deleteGroup = document.getElementById(args.ruleID).querySelector('.e-del-btn');
            if (deleteGroup) {
                deleteGroup.onclick = function (e) {
                    qryBldrObj.deleteGroup(ej.base.closest(e.target.offsetParent, '.e-group-container'));
                };
            }
        }
    }
};
