this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        keyField: 'Status',
        swimlaneSettings: {
            keyField: 'Assignee',
            template: '#swimlaneTemplate',
        },
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
    });
    kanbanObj.appendTo('#Kanban');
};