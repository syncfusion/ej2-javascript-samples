this.default = function () {
    var data = new ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open', allowToggle: true },
            { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
            { headerText: 'Testing', keyField: 'Testing', allowToggle: true, isExpanded: false },
            { headerText: 'Done', keyField: 'Close', allowToggle: true }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    kanbanObj.appendTo('#Kanban');
};