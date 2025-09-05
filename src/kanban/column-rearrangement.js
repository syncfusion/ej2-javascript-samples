this.default = function () {
     var data = new ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend object.
     var kanbanObj = new ej.kanban.Kanban({
         dataSource: data,
         columns: [
             { headerText: 'To Do', keyField: 'Open' },
             { headerText: 'In Progress', keyField: 'InProgress' },
             { headerText: 'Testing', keyField: 'Testing' },
             { headerText: 'Done', keyField: 'Close' }
         ],
         keyField: 'Status',
         cardSettings: {
             contentField: 'Summary',
             headerField: 'Id',
             tagsField: 'Tags',
             grabberField: 'Color',
             footerCssField: 'ClassName'
         },
         allowColumnDragAndDrop: true,
     });
    //Render initialized Kanban control
    kanbanObj.appendTo('#Kanban');
};