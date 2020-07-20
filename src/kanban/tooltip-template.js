this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        enableTooltip: true,
        tooltipTemplate: '#tooltipTemp',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
    });
    kanbanObj.appendTo('#Kanban');

    new ej.buttons.CheckBox({ label: 'Enable Tooltip', checked: true, change: onChange }, '#enableTooltip');
    new ej.buttons.CheckBox({ label: 'Enable Tooltip Template', checked: true, change: onChange }, '#enableTooltipTemplate');
    function onChange(args) {
        var value = this.element.id;
        switch (value) {
            case 'enableTooltip':
                kanbanObj.enableTooltip = args.checked;
                break;
            case 'enableTooltipTemplate':
                kanbanObj.tooltipTemplate = null;
                if (args.checked) {
                    kanbanObj.tooltipTemplate = '#tooltipTemp';
                }
                break;
            default:
                break;
        }
    }

};
