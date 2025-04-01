this.default = function () {
    var treegrid = new ej.treegrid.TreeGrid({
      dataSource: window.sampleData,
      childMapping: 'subtasks',
      height: 350,
      allowPaging: true,
      pageSettings: { pageSize: 10 },
      treeColumnIndex: 1,
      showColumnChooser: true,
      toolbar: ['ColumnChooser'],
      columns: [
          { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
          { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left', showInColumnChooser: false  },
          { field: 'startDate', headerText: 'Start Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
          { field: 'endDate', headerText: 'End Date', width: 110, textAlign: 'Right', type: 'date', format: 'yMd' },
          { field: 'duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
          { field: 'progress', headerText: 'Progress', width: 95, textAlign: 'Right' },
          { field: 'priority', headerText: 'Priority', width: 90 }
      ]
  });
  treegrid.appendTo('#TreeGrid');
};
