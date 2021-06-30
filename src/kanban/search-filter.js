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
        select: prioritySelect,
    });
    priorityObj.appendTo('#priority_filter');
    var statusObj = new ej.dropdowns.DropDownList({
        dataSource: [
            { id: 'None', value: 'None' },
            { id: 'To Do', value: 'Open' },
            { id: 'In Progress', value: 'InProgress' },
            { id: 'Testing', value: 'Testing' },
            { id: 'Done', value: 'Close' }
        ],
        fields: { text: 'id', value: 'value' },
        index: 0,
        placeholder: 'Select a status',
        select: statusSelect
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
    function prioritySelect(args) {
        var filterQuery = new ej.data.Query();
        if (args.itemData.value !== 'None') {
            filterQuery = new ej.data.Query().where('Priority', 'equal', args.itemData.value);
        }
        statusObj.value = 'None';
        kanbanObj.query = filterQuery;
    }
    function statusSelect(args) {
        var filterQuery = new ej.data.Query();
        if (args.itemData.value !== 'None') {
            filterQuery = new ej.data.Query().where('Status', 'equal', args.itemData.value);
        }
        priorityObj.value = 'None';
        kanbanObj.query = filterQuery;
    }
    function reset() {
        priorityObj.value = 'None';
        statusObj.value = 'None';
        kanbanObj.query = new ej.data.Query();
    }
};