this.default = function () {
    var treegrid;

    function getColumns(viewer) {
        var baseColumns = [
            {
                field: 'ID',
                headerText: 'ID',
                width: 200,
                minWidth: 200,
                textAlign: 'Left',
            },
            {
                field: 'Employee',
                template: '#employeeTemplate',
                headerTemplate: '#employeeHeaderTemplate',
                width: 320,
                clipMode: 'EllipsisWithTooltip'
            }
        ];

        if (viewer === 'hr') {
            return baseColumns.concat([
                {
                    field: 'Location',
                    template: '#flagTemplate',
                    headerText: 'Location',
                    width: 200,
                },
                {
                    field: 'JoinDate',
                    headerText: 'Date Joined',
                    textAlign: 'Right',
                    width: 180,
                    type: 'date',
                    format: 'yMd',
                },
                {
                    field: 'Salary',
                    headerText: 'Salary per month',
                    format: 'c0',
                    textAlign: 'Right',
                    width: 210,
                    clipMode: 'EllipsisWithTooltip'
                },
                {
                    field: 'Email',
                    template: '#emailTemplate',
                    headerText: 'Email',
                    textAlign: 'Center',
                    width: 200,
                }
            ]);
        } else if (viewer === 'employee') {
            return baseColumns.concat([
                {
                    field: 'Status',
                    template: function (data) {
                        var bgColor = data.Status === 'Available' ? '#ccffcc' : data.Status === 'Busy' ? '#ffd09d' : '#ffd7cc';
                        var color = data.Status === 'Available' ? '#00cc00' :  data.Status === 'Busy' ? '#ff8707': '#e60000';
                        return (
                            '<div class="status-container" style="' +
                            'display: inline-block;' +
                            'background-color: ' + bgColor + ';' +
                            'color: ' + color + ';' +
                            'padding: 0 4px;' +
                            'border-radius: 4px;' +
                            'text-align: center;' +
                            'font-size: 12px;">' +
                            data.Status +
                            '</div>'
                        );
                    },
                    headerText: 'Presence',
                    width: 200,
                    textAlign: 'Center'
                },
                {
                    field: 'WorkMode',
                    headerText: 'Work Mode',
                    width: 230
                },
                {
                    field: 'Email',
                    template: '#emailTemplate',
                    headerText: 'Email',
                    textAlign: 'Center',
                    width: 200,
                }
            ]);
        } else if (viewer === 'helpdesk') {
            return baseColumns.concat([
                {
                    field: 'Status',
                    template: function (data) {
                        var bgColor = data.Status === 'Available' ? '#ccffcc' : data.Status === 'Busy' ? '#ffd09d' : '#ffd7cc';
                        var color = data.Status === 'Available' ? '#00cc00' :  data.Status === 'Busy' ? '#ff8707': '#e60000';
                        return (
                            '<div class="status-container" style="' +
                            'display: inline-block;' +
                            'background-color: ' + bgColor + ';' +
                            'color: ' + color + ';' +
                            'padding: 0 4px;' +
                            'border-radius: 4px;' +
                            'text-align: center;' +
                            'font-size: 12px;">' +
                            data.Status +
                            '</div>'
                        );
                    },
                    headerText: 'Presence',
                    width: 200,
                    textAlign: 'Center',
                },
                {
                    field: 'LeaveAvailability',
                    template: '#leaveAvailabilityTemplate',
                    headerText: 'Leave Availability',
                    textAlign: 'Center',
                    width: 400,
                    allowFiltering:false
                },
                {
                    field: 'LeaveCount',
                    headerText: 'Leave Taken in ' + new Date().getFullYear(),
                    textAlign: 'Center',
                    width: 240,
                    clipMode: 'EllipsisWithTooltip'
                }
            ]);
        } else if (viewer === 'pm') {
            return baseColumns.concat([
                { field: 'Department', headerText: 'Department', width: 200 },
                { field: 'ProjectDetails', headerText: 'Project Details', width: 230 },
                { field: 'ProjectStatus', headerText: 'Project Status', width: 200 },
                {
                    field: 'Email',
                    template: '#emailTemplate',
                    headerText: 'Email',
                    textAlign: 'Center',
                    width: 200,
                }
            ]);
        } else {
            return baseColumns;
        }
    }

    function initTreeGrid(viewer) {
        if (treegrid) {
            treegrid.clearFiltering();
            treegrid.clearSorting();
            treegrid.columns = getColumns(viewer);
            treegrid.refreshColumns();
        } else {
            treegrid = new ej.treegrid.TreeGrid({
                dataSource: window.employeeData,
                childMapping: 'Children',
                treeColumnIndex: 0,
                columns: getColumns(viewer),
                height: 400,
                allowSorting: true,
                allowFiltering: true,
                filterSettings: {
                    type: 'Menu',
                    hierarchyMode: 'None',
                    mode: 'Immediate',
                },
                enableHover: true,
                gridLines: 'Both',
                pageSettings: { pageSize: 10 },
                queryCellInfo: queryCellInfo,
            });
            treegrid.appendTo('#EmployeeTreeGrid');
        }
    }

    document.getElementById('viewer').addEventListener('change', function (e) {
        var selectedRole = e.target.value;
        initTreeGrid(selectedRole);
    });

    initTreeGrid('hr');

    var viewerRoles = [
        { id: 'hr', role: 'HR' },
        { id: 'employee', role: 'Employee' },
        { id: 'helpdesk', role: 'Help Desk' },
        { id: 'pm', role: 'Project Management' },
    ];

    var viewerDropdown = new ej.dropdowns.DropDownList({
        dataSource: viewerRoles,
        fields: { text: 'role', value: 'id' },
        placeholder: 'Select Viewer Role',
        value: 'hr',
        change: function (args) {
            initTreeGrid(args.value);
        },
    });
    viewerDropdown.appendTo('#viewer');

    function queryCellInfo(args) {
        if (args.column.field === 'LeaveAvailability') {
            var data = args.data;
            var casual = data.LeaveAvailability.casual;
            var earned = data.LeaveAvailability.earned;
            var sick = data.LeaveAvailability.sick;

            var casualEl = args.cell.querySelector('.bar.casual');
            var earnedEl = args.cell.querySelector('.bar.earned');
            var sickEl = args.cell.querySelector('.bar.sick');

            if (casualEl) updateBar(casualEl, casual);
            if (earnedEl) updateBar(earnedEl, earned);
            if (sickEl) updateBar(sickEl, sick);
        }
    }

    function updateBar(barEl, value) {
        var percent = (value / 12) * 100;

        barEl.innerHTML =
            '<div class="bar-fill" style="width:' + percent + '%;"></div>' +
            '<div class="barlabel">' + value + '</div>';

        var fillEl = barEl.querySelector('.bar-fill');
        fillEl.classList.remove('low', 'medium', 'high');

        if (value > 8) fillEl.classList.add('high');
        else if (value > 4) fillEl.classList.add('medium');
        else fillEl.classList.add('low');
    }
};
