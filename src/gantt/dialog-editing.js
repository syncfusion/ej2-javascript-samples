this.default = function () {
    var ganttChart = new ej.gantt.Gantt({
        dataSource: dialogData,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            child: 'subtasks',
            progress: 'Progress',
            segments: 'Segments',
            constraintType: 'ConstraintType',
            constraintDate: 'ConstraintDate',
            resourceInfo: 'Resources',
            manual: 'isManual',
            work: 'Work',
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true,
            mode: 'Dialog'
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        resources: dataResources,
        columns: [
            { field: 'TaskID', headerText: 'Task ID', width: 130 },
            { field: 'TaskName', headerText: 'Task Name',width: 200},
            { field: 'StartDate', headerText: 'Start Date'},
            { field: 'Duration', headerText: 'Duration' },
            { field: 'ConstraintType',width: 173},
            { field: 'ConstraintDate', width: 176},
            { field: 'isManual',width: 150},
            { field: 'Work'},
        ],
        treeColumnIndex: 1,
        showColumnMenu: true,
        toolbar: ['Add', 'Edit', 'Delete', 'ExpandAll', 'CollapseAll'],
        taskMode :'Custom',
        addDialogFields: [
          { type: 'General', fields: ['TaskID', 'TaskName', 'StartDate', 'Duration','EndDate', 'Progress']},
          { type: 'Dependency'},
          { type: 'Resources',
            additionalParams: {
                allowFiltering: true,
                allowSorting: true,
                allowResizing: true,
                showColumnMenu: true,
                columns: [
                    {field: 'resourceId', width:70},
                    {
                        field: 'resourceName',
                        headerText: 'Resource Name',
                        template: '#columnTemplate',
                        width: 180
                    },
                    {field: 'unit', width: 84},
                    {
                        field: 'role',
                        headerText: 'Role',
                        allowEditing: false,
                        template: function (args) {
                             if (args.role) {
                                 return '<div style="display: flex; align-items: center; margin-bottom: 5px; font-size: 14px; padding: 2px;">' +
                                    '<div>' + args.role + '</div>' +
                                    '</div>';
                            }
                            return '';
                        },
                        width: 120
                    },
                ],
              filterSettings: { type: 'Menu' },
            }
          },
          { type: 'Segments'},
          {type: 'Advanced', fields: ['ConstraintType', 'ConstraintDate', 'isManual', 'Work'],}
        ],
        editDialogFields: [
          {
              type: 'General', fields: ['TaskID', 'TaskName', 'StartDate', 'Duration','EndDate', 'Progress']
          },
          {
              type: 'Dependency',
              additionalParams: {
                  allowSorting: true,
                  toolbar: ['Add', 'Edit', 'Delete', 'Search'],
                  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
                  searchSettings: { fields: ['name'], ignoreCase: true }
              }
          },
          { type: 'Resources',
            additionalParams: {
                allowFiltering: true,
                allowSorting: true,
                allowResizing: true,
                showColumnMenu: true,
                columns: [
                    {field: 'resourceId', width:70},
                    {
                        field: 'resourceName',
                        headerText: 'Resource Name',
                        template: '#columnTemplate',
                        width: 180
                    },
                    {field: 'unit', width: 84},
                    {
                        field: 'role',
                        headerText: 'Role',
                        allowEditing: false,
                        template: function (args) {
                             if (args.role) {
                                 return '<div style="display: flex; align-items: center; margin-bottom: 5px; font-size: 14px; padding: 2px;">' +
                                    '<div>' + args.role + '</div>' +
                                    '</div>';
                            }
                            return '';
                        },
                        width: 120
                    },
                ],
              filterSettings: { type: 'Menu' },
            }
          },
          {
              type: 'Segments',
              additionalParams: {
                  allowFiltering: true,
                  allowSorting: true,
                  allowReordering: true,
                  allowResizing: true,
                  toolbar: ['Add', 'Edit', 'Delete'],
                  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
                  filterSettings: { type: 'Menu' },
              }
          },
          {type: 'Advanced', fields: ['ConstraintType', 'ConstraintDate', 'isManual', 'Work'],}
        ],
        actionComplete: function(args){
          if (args.requestType == 'openAddDialog' || args.requestType == 'openEditDialog') {
            var gantt = document.getElementById('Dialog').ej2_instances[0];
            var tabObj = (document.getElementById(gantt.element.id + "_Tab")).ej2_instances[0];
            tabObj.selected = function (args) {
              if (args.selectedIndex == 1) {
                var gridObj = document.getElementById(
                  gantt.element.id + "DependencyTabContainer"
                ).ej2_instances[0];
                gridObj.queryCellInfo = function (args) {
                  // while saving comboBox, chaning display text here
                  if (args.column.field == "name") {
                    args.cell.innerText = args.data.name.substring(args.data.id.length + 1);
                  }
                };
                var cols = gridObj.columns;
                cols[1].edit.write = function (args) {
                  if (args.requestType == "add") {
                    args.rowData.uniqueId = ej.base.getUniqueID("gantt");
                  }
                  var field = "name";
                  var gantt = document.getElementById('Dialog').ej2_instances[0];
                  var dependencygridData =
                    gantt.editModule.dialogModule.idCollection;
                  for (var i = 0; i < dependencygridData.length; i++) {
                    dependencygridData[i].text = dependencygridData[i].text.substring(dependencygridData[i].id.length + 1);
                  }
                  var comboValue = "";
                  if (args.rowData[field]) {
                    comboValue = args.rowData[field].substring(
                      0,
                      args.rowData.id.length
                    );
                  }
                  // render custom comboBox here
                  var autoObj = new ej.dropdowns.ComboBox({
                    dataSource: new ej.data.DataManager(dependencygridData),
                    popupHeight: "180px",
                    allowCustom: false,
                    enableRtl: gantt.enableRtl,
                    fields: { value: "value", text: "text" },
                    value: comboValue,
                    change: function (arg) {
                      var tr = arg.element.closest("tr");
                      var idInput = tr.querySelector(
                        "#" + gantt.element.id + "DependencyTabContainerid"
                      );
                      if (idInput) {
                        if (
                          !ej.base.isNullOrUndefined(arg.itemData) &&
                          !ej.base.isNullOrUndefined(arg.item)
                        ) {
                          idInput.value = arg.itemData.value;
                        } else {
                          idInput.value = "";
                        }
                      }
                    },
                    autofill: true,
                  });
                  autoObj.appendTo(args.element);
                };
                cols[1].edit.read = function (args) {
                  var ej2Instance = args.ej2_instances[0];
                  return ej2Instance.value + "-" + ej2Instance.text;
                };
                gridObj.refresh();
              }
              };
            }
        },
        allowSelection: true,
        splitterSettings: {
            position: "50%"
        },
        gridLines: "Both",
        highlightWeekends: true,
        timelineSettings: {
            showTooltip: true,
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        },
        eventMarkers: [
            {
                day: new Date('07/12/2025'),
                label: 'Project approval and kick-off'
            }
        ],
        labelSettings: {
            rightLabel: 'TaskName'
        },
        allowResizing: true,
        taskbarHeight: 25,
        rowHeight: 46,
        height: '650px',
        projectStartDate: new Date('03/30/2025'),
        projectEndDate: new Date('08/07/2025')
    });
    ganttChart.appendTo('#Dialog');
};