this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'In Review', keyField: 'Review' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    kanbanObj.appendTo('#Kanban');
    new ej.buttons.CheckBox({ label: 'To Do', checked: true, change: onChange }, '#Open');
    new ej.buttons.CheckBox({ label: 'In Progress', checked: true, change: onChange }, '#InProgress');
    new ej.buttons.CheckBox({ label: 'In Review', checked: true, change: onChange }, '#Review');
    new ej.buttons.CheckBox({ label: 'Done', checked: true, change: onChange }, '#Close');
    function onChange(args) {
        if (args.checked) {
            kanbanObj.showColumn(this.element.id);
        }
        else {
            kanbanObj.hideColumn(this.element.id);
        }
    }
};