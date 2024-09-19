/* jshint esversion: 6 */
this.default = function () {
    var searchQuery;
    var sidebarToggle;
    var create;
    var isSideBar = false;
    var predicatevalue;
    var querybuilderevent = false;
    var sidebarObj;
    var queryBuilderObj;

    var clickBtn = new ej.buttons.Button();
    clickBtn.appendTo('#filter-btn');
    document.getElementById('filter-btn').addEventListener('click', function() {
        sidebarToggle = !sidebarToggle;
        isSideBar = true;
        initializeSidebar();
        if (querybuilderevent) {
            create = queryBuilderObj.getSqlFromRules();
        }
        sidebarObj.isOpen = true;
    });
    
    function rowSelectEvent() {
        sidebarToggle = false;
        if (isSideBar) {
            create = queryBuilderObj.getSqlFromRules();
            isSideBar = false;
            sidebarObj.isOpen = false;
        }
    }

    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.projectNewData,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName',headerText: 'Name', width: 250 },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'EndDate' },
            { field: 'Progress' },
            { field: 'Predecessor' }
        ],
        treeColumnIndex: 0, 
        allowFiltering: true,
        includeWeekend: true,
        height: '410px',
        splitterSettings: {
            columnIndex: 4
        },
        rowSelected: rowSelectEvent,
        labelSettings: {
            rightLabel: 'TaskName',
        },
        projectStartDate: new Date('04/01/2024'),
        projectEndDate: new Date('07/06/2024')
    });
    ganttChart.appendTo('#AdvancedFiltering');

    function initializeSidebar() {
        if (isSideBar) {
            if (!document.getElementById('ganttSidebar')) {
                var sidebarDiv = document.createElement('div');
                sidebarDiv.id = 'ganttSidebar';
                sidebarDiv.innerHTML = `
                    <div class="ganttsidebar-header">
                        <div class="title">Advanced Filters</div>
                        <button id="close" class="e-close"></button>
                    </div>
                    <div id="ganttquerybuilder"></div>
                    <div class="ganttbtn-container">
                        <button type="button" id="apply" class="e-control e-btn apply-btn">Apply</button>
                        <button type="button" id="clear" class="e-control e-btn clear-btn">Clear</button>
                    </div>
                `;
                document.querySelector('.content-wrapper').appendChild(sidebarDiv);
                document.getElementById('close').addEventListener('click', function() {
                    sidebarObj.destroy();
                    document.getElementById('ganttSidebar').remove();
                    sidebarObj.hide();
                    create = queryBuilderObj.getSqlFromRules();
                    sidebarToggle = false;
                    isSideBar = false;
                });
                // Initialize EJ2 buttons
                var applyBtn = new ej.buttons.Button({ isPrimary: true });
                applyBtn.appendTo('#apply');

                var clearBtn = new ej.buttons.Button();
                clearBtn.appendTo('#clear');

                applyBtn.element.addEventListener('click', function() {
                    if (predicatevalue != null) {
                        searchQuery = new ej.data.Query().where(predicatevalue);
                    } else {
                        searchQuery = new ej.data.Query().select(['TaskID','TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress', 'Predecessor']);
                    }
                    ganttChart.query = searchQuery;
                    ganttChart.refresh();
                });
                clearBtn.element.addEventListener('click', function() {
                    queryBuilderObj.reset();
                    predicatevalue = null;
                    searchQuery = new ej.data.Query();
                    ganttChart.query = searchQuery;
                    ganttChart.refresh();
                });

                sidebarObj = new ej.navigations.Sidebar({
                    width: '65%',
                    type: 'Over',
                    position: 'Right',
                    isOpen: sidebarToggle,
                    target: '#ganttsidebar-parent'
                });
                sidebarObj.appendTo('#ganttSidebar');
                queryBuilderObj = new ej.querybuilder.QueryBuilder({
                    dataSource: window.projectNewData,
                    allowValidation: true,
                    columns: [
                        { field: 'TaskID', label: 'Task ID', type: 'number' },
                        { field: 'TaskName', label: 'Task Name', type: 'string' },
                        { field: 'StartDate', label: 'Start Date', type: 'date', format: 'MM/dd/yyyy' },
                        { field: 'Duration', label: 'Duration', type: 'number' },
                        { field: 'EndDate', label: 'End Date', type: 'date', format: 'MM/dd/yyyy' },
                        { field: 'Progress', label: 'Progress', type: 'number' },
                        { field: 'Predecessor', label: 'Predecessor', type: 'string' }
                    ],
                    ruleChange: updateRule,
                    created: created
                });
                queryBuilderObj.appendTo('#ganttquerybuilder');
            }
        }
    }
   
    function updateRule(args) {
        predicatevalue = queryBuilderObj.getPredicate(args.rule);
        if (args.Type == "DeleteRule" && predicatevalue != null) {
            searchQuery = new ej.data.Query().where(predicatevalue);
        } else if (predicatevalue == null && args.Type == "DeleteRule") {
            searchQuery = new ej.data.Query().select(['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress', 'Predecessor']);
        }
    }

    function created() {
        querybuilderevent = true;
        if (create && create !== "") {
            queryBuilderObj.setRulesFromSql(create);
        }
    }
};
