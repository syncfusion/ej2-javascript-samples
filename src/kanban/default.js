this.default = function () {
    var data = new ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object.
    //Initialize Kanban control
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
            tagsField: 'Tags',
            grabberField: 'Color',
            footerCssField: 'ClassName'
        }
    });
    //Render initialized Kanban control
    kanbanObj.appendTo('#Kanban');
};