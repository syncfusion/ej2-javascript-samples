window.getString = function (assigneeData) {
    return assigneeData.match(/\b(\w)/g).join('').toUpperCase();
};
this.default = function () {
    window.createVirtualData();
    var kanbanObj = new ej.kanban.Kanban({ 
        enableVirtualization: true, // To enable virtual scrolling feature.
        dataSource: window.kanbanVirtualData,
        keyField: 'Status',
        enableTooltip: true,
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Code Review', keyField: 'Review'},
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            headerField: 'Id',
            template: '#cardTemplate',
            selectionType: 'Multiple'
        },
        dialogSettings : {
            fields: [
                {key: 'Id', text: 'ID', type: 'TextBox'},
                {key: 'Status', text: 'Status', type: 'DropDown'},
                {key: 'StoryPoints', text: 'Story Points', type: 'Numeric' },
                {key: 'Summary', text: 'Summary', type: 'TextArea'}
            ]
        },
        cardRendered: function (args) {
            var val = args.data.Priority.toLowerCase();
            ej.base.addClass([args.element], val);
        }
    });
    kanbanObj.appendTo('#KanbanVirtualScrolling');
};