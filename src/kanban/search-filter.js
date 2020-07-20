this.default = function () {
    var data = new ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object.
    var kanbanObj = new ej.kanban.Kanban({
        keyField: 'Status',
        dataSource: data,
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        swimlaneSettings: {
            keyField: 'Assignee'
        },
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    //Render initialized Kanban control
    kanbanObj.appendTo('#Kanban');
    var priorityObj = new ej.dropdowns.DropDownList({
        dataSource: ['None', 'High', 'Normal', 'Low'],
        index: 0,
        placeholder: 'Select a priority',
        change: change,
    });
    priorityObj.appendTo('#priority_filter');
    var statusObj = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'None', status: 'None' },
            { id: 'To Do', status: 'Open' },
            { id: 'In Progress', status: 'InProgress' },
            { id: 'Testing', status: 'Testing' },
            { id: 'Done', status: 'Close' }
        ],
        fields: { text: 'id', value: 'status' },
        index: 0,
        placeholder: 'Select a status',
        change: change
    });
    statusObj.appendTo('#status_filter');
    var textObj = new ej.inputs.TextBox({
        placeholder: 'Enter search text',
        showClearButton: true
    });
    textObj.appendTo('#search_text');

    document.getElementById('reset_filter').onclick = function () {
        textObj.value = '';
        reset();
    };
    document.getElementById('search_text').onfocus = function (e) {
        if (e.target.value === '') {
            reset();
        }
    };
    var emptyValue = true;
    document.getElementById('search_text').onkeyup = function (e) {
        if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && emptyValue)) {
            return;
        }
        var searchValue = e.target.value;
        var searchQuery = new ej.data.Query();
        if (searchValue !== '') {
            emptyValue = false;
            searchQuery = new ej.data.Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
        } else{
            emptyValue = true;
        }
        kanbanObj.query = searchQuery;
    };
    function change(args) {
        var filterQuery = new ej.data.Query();
        if (args.value !== 'None') {
            if (args.element.id === 'priority_filter') {
                filterQuery = new ej.data.Query().where('Priority', 'equal', args.value);
            } else {
                filterQuery = new ej.data.Query().where('Status', 'equal', args.value);
            }
        }
        if (args.element.id === 'priority_filter') {
            statusObj.setProperties({ value: 'None' }, false);
        } else {
            priorityObj.setProperties({ value: 'None' }, false);
        }
        kanbanObj.query = filterQuery;
    }
    function reset() {
        priorityObj.setProperties({ value: 'None' }, false);
        statusObj.setProperties({ value: 'None' }, false);
        kanbanObj.query = new ej.data.Query();
    }
};