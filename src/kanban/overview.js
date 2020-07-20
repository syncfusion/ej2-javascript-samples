window.getTags = function (data) {
    var tagDiv = '';
    var tags = data.split(',');
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tagDiv += '<div class="e-card-tag-field e-tooltip-text">' + tag + '</div>';
    }
    return tagDiv;
};
window.getString = function (assignee) {
    return assignee.match(/\b(\w)/g).join('').toUpperCase();
};

this.default = function () {
    var data = ej.base.extend([], window.cardData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        enableTooltip: true,
        columns: [
            { headerText: 'To Do', keyField: 'Open', template: '#headerTemplate', allowToggle: true },
            { headerText: 'In Progress', keyField: 'InProgress', template: '#headerTemplate', allowToggle: true },
            { headerText: 'In Review', keyField: 'Review', template: '#headerTemplate', allowToggle: true },
            { headerText: 'Done', keyField: 'Close', template: '#headerTemplate', allowToggle: true }
        ],
        cardSettings: {
            headerField: 'Title',
            template: '#cardTemplate',
            selectionType: 'Multiple'
        },
        swimlaneSettings: {
            keyField: 'Assignee',
        },
        dialogSettings: {
            fields: [
                { text: 'ID', key: 'Title', type: 'TextBox' },
                { key: 'Status', type: 'DropDown' },
                { key: 'Assignee', type: 'DropDown' },
                { key: 'RankId', type: 'TextBox' },
                { key: 'Summary', type: 'TextArea' }
            ]
        },
        cardRendered: function (args) {
            ej.base.addClass([args.element], args.data.Priority);
        }
    });
    kanbanObj.appendTo('#Kanban');
};