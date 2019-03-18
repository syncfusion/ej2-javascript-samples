/**
 * Default querybuilder sample
 */

this.default = function () {
var columnData = [
    { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
    { field: 'FirstName', label: 'First Name', type: 'string' },
    { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
    { field: 'Title', label: 'Title', type: 'string' },
    { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
    { field: 'Country', label: 'Country', type: 'string' },
    { field: 'City', label: 'City', type: 'string' }
];
var importRules = {
    'condition': 'and',
    'rules': [{
        'label': 'Employee ID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'equal',
        'value': 1
    },
    {
        'label': 'Title',
        'field': 'Title',
        'type': 'string',
        'operator': 'equal',
        'value': 'Sales Manager'
    }
    ]
};
  var qryBldrObj = new ej.querybuilder.QueryBuilder({
    width: '70%',
    dataSource: window.employeeData,
    columns: columnData,
    rule: importRules,
    created: createdControl
  });
 qryBldrObj.appendTo('#querybuilder');

 function createdControl() {
    if (ej.base.Browser.isDevice) {
        qryBldrObj.summaryView = true;
     }
 }
};
