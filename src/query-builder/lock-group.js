this.default = function () {
    var columns = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean" },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy"},
        { field: "Country", label: "Country", type: "string" },
        { field: "Age", label: "Age", type: "number" }
    ];
    var importRules = {
        condition: "or",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "notequal", value: "Andre" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 50 },
            { condition: "and", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "TypeScript" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/15/2023", "11/30/2023"] },
        ],
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        columns: columns,
        rule: importRules,
        showButtons: {
            lockGroup: true,
            lockRule: true
        }
    });
    qryBldrObj.appendTo('#querybuilder');
};