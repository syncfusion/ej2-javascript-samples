this.default = function () {

    var totalNodes = 8000;
    var employeesPerDept = 20;

    var departments = [
        'Engineering', 'Sales', 'Human Resources', 'Finance', 'Marketing',
        'Customer Support', 'Operations', 'Legal', 'Research', 'IT Infrastructure'
    ];

    var employeeRoles = [
        'Manager', 'Senior Engineer', 'Software Engineer', 'Business Analyst',
        'QA Engineer', 'Consultant', 'Specialist', 'Coordinator',
        'Executive', 'Associate'
    ];

    function generateOrganizationData(total, children) {
        var data = [];
        var index = 0;
        var id = 1;
        var deptIndex = 0;

        while (index < total) {

            var deptId = id++;
            var deptName = departments[deptIndex % departments.length];
            var parentIndex = index;

            data[index++] = {
                id: deptId,
                pid: null,
                name: deptName,
                hasChild: false,
                isChecked: true,
                isExpanded: false
            };

            var childCount = 0;

            for (var i = 0; i < children && index < total; i++) {
                var role = employeeRoles[i % employeeRoles.length];

                data[index++] = {
                    id: id++,
                    pid: deptId,
                    name: role + ' - Employee ' + (i + 1),
                    isChecked: true,
                    isExpanded: false
                };

                childCount++;
            }

            if (childCount > 0) {
                data[parentIndex].hasChild = true;
            }

            deptIndex++;
        }

        return data;
    }

    var orgData = generateOrganizationData(totalNodes, employeesPerDept);

    var treeObj = new ej.navigations.TreeView({
        fields: {
            dataSource: orgData,
            id: 'id',
            parentID: 'pid',
            text: 'name',
            hasChildren: 'hasChild',
            isChecked: 'isChecked',
            expanded: 'isExpanded'
        },
        height: 400,
        enableVirtualization: true,
        showCheckBox: true
    });

    treeObj.appendTo('#tree');
};