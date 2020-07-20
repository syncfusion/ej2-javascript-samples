this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open', template: '#headerTemplate' },
            { headerText: 'In Progress', keyField: 'InProgress', template: '#headerTemplate' },
            { headerText: 'In Review', keyField: 'Review', template: '#headerTemplate' },
            { headerText: 'Done', keyField: 'Close', template: '#headerTemplate' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    kanbanObj.appendTo('#Kanban');
};