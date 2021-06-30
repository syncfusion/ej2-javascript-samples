this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        swimlaneSettings: {
            keyField: 'Assignee'
        },
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        height: '500px'
    });
    kanbanObj.appendTo('#Kanban');

    new ej.buttons.CheckBox({ checked: false, change: onChange }, '#acrossDragAndDrop');
    new ej.buttons.CheckBox({ checked: false, change: onChange }, '#emptyRow');
    new ej.buttons.CheckBox({ checked: true, change: onChange }, '#itemCount');
    new ej.buttons.CheckBox({ change: onChange }, '#frozenRows');
    //Initialize DropDownList control
    var sortOrder = new ej.dropdowns.DropDownList({
        width: '100%',
        change: changeSortOrder
    });
    //Render initialized DropDownList control
    sortOrder.appendTo('#sort');
    function onChange(args) {
        var value = this.element.id;
        switch (value) {
            case 'acrossDragAndDrop':
                kanbanObj.swimlaneSettings.allowDragAndDrop = args.checked;
                break;
            case 'emptyRow':
                kanbanObj.swimlaneSettings.showEmptyRow = args.checked;
                break;
            case 'itemCount':
                kanbanObj.swimlaneSettings.showItemCount = args.checked;
                break;
            case 'frozenRows':
                kanbanObj.swimlaneSettings.enableFrozenRows = args.checked;
                break;
            default:
                break;
        }
    }
    function changeSortOrder(args) {
        var sortDirection = args.itemData.value;
        kanbanObj.swimlaneSettings.sortDirection = sortDirection;
    }
};