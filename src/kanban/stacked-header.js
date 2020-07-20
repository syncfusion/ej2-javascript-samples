this.default = function() {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'Open', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'In Review', keyField: 'Review' },
            { headerText: 'Completed', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        stackedHeaders: [
            { text: 'To Do', keyFields: 'Open' },
            { text: 'Development Phase', keyFields: 'InProgress, Review' },
            { text: 'Done', keyFields: 'Close' }
        ],
    });
    kanbanObj.appendTo('#Kanban');
};