this.default = function () {
    var columns = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean" },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy" }
    ];
    var importRules = {
        condition: "and",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "equal", value: "Andre" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 41 },
            {
                condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: false },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "Angular" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/20/2023", "11/30/2023"] },
        ],
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        columns: columns,
        rule: importRules,
        showButtons: {
            cloneGroup: true,
            cloneRule: true
        }
    });
    qryBldrObj.appendTo('#querybuilder');
};
