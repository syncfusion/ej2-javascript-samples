this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object.
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        dialogSettings: {
            template: '#dialogTemplate'
        },
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        dialogOpen: onDialogOpen
    });
    kanbanObj.appendTo('#Kanban');
    var count = 31;
    var statusData = ['Open', 'InProgress', 'Testing', 'Close'];
    var assigneeData = ['Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
        'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'];
    var priorityData = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];
    function onDialogOpen(args) {
        if (args.requestType !== 'Delete') {
            var curData = args.data;
            var filledTextBox = new ej.inputs.TextBox({});
            filledTextBox.appendTo(args.element.querySelector('#Id'));
            var numericObj = new ej.inputs.NumericTextBox({
                value: curData.Estimate, placeholder: 'Estimate',
            });
            numericObj.appendTo(args.element.querySelector('#Estimate'));
            var statusDropObj = new ej.dropdowns.DropDownList({
                value: curData.Status, popupHeight: '300px',
                dataSource: statusData, fields: { text: 'Status', value: 'Status' }, placeholder: 'Status'
            });
            statusDropObj.appendTo(args.element.querySelector('#Status'));
            var assigneeDropObj = new ej.dropdowns.DropDownList({
                value: curData.Assignee, popupHeight: '300px',
                dataSource: assigneeData, fields: { text: 'Assignee', value: 'Assignee' }, placeholder: 'Assignee'
            });
            assigneeDropObj.appendTo(args.element.querySelector('#Assignee'));
            var priorityObj = new ej.dropdowns.DropDownList({
                value: curData.Priority, popupHeight: '300px',
                dataSource: priorityData, fields: { text: 'Priority', value: 'Priority' }, placeholder: 'Priority'
            });
            priorityObj.appendTo(args.element.querySelector('#Priority'));
            var textareaObj = new ej.inputs.TextBox({
                placeholder: 'Summary',
                multiline: true
            });
            textareaObj.appendTo(args.element.querySelector('#Summary'));
        }
    }
    document.getElementById('addNew').onclick = function (e) {
        var curData = {
            Id: 'Task ' + count, Status: 'Open', Priority: 'Normal', Assignee: 'Andrew Fuller', Estimate: 0, Tags: '', Summary: ''
        };
        kanbanObj.openDialog('Add', curData);
        count++;
    };
};