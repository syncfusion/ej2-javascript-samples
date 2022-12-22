this.default = function () {
    var data = new ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object.
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            headerField: 'Id',
            contentField: 'Summary',
            template: '#cardTemplate'
        }
    });
    //Render initialized Kanban control
    kanbanObj.appendTo('#Kanban');
    var sortBy = new ej.dropdowns.DropDownList({ change: onChange, index: 1 });
    sortBy.appendTo('#sortBy');
    var field = new ej.dropdowns.DropDownList({ enabled: false });
    field.appendTo('#field');
    var direction = new ej.dropdowns.DropDownList({ change: onChange });
    direction.appendTo('#direction');
    document.getElementById('sort').onclick = function () {
        setKanbanProperties();
    };
    document.getElementById('clear').onclick = function () {
        sortBy.value = 'Index';
        direction.value = 'Ascending';
        setFieldValue('None');
        setKanbanProperties();
    };
    function setKanbanProperties() {
        kanbanObj.sortSettings.sortBy = sortBy.value;
        kanbanObj.sortSettings.field = field.value;
        kanbanObj.sortSettings.direction = direction.value;
    }
    function onChange(args) {
        var data;
        if (args.value === 'DataSourceOrder' || args.value === 'Index') {
            data = args.value === 'Index' ? 'RankId' : 'None';
            setFieldValue(data);
        }
        if (args.value === 'Custom') {
            field.dataSource = ['Priority', 'RankId', 'Summary'];
            field.value = 'Priority';
            field.enabled = true;
        }
      if (args.value === 'Ascending') {
        data = sortBy.value === 'Index' ? 'RankId' : 'None';
        setFieldValue(data);
        direction.value = 'Ascending';
      }
      if (args.value === 'Descending') {
        data = sortBy.value === 'Index' ? 'RankId' : 'None';
        setFieldValue(data);
        direction.value = 'Descending';
      }
    }
    function setFieldValue(data) {
        field.dataSource = [data];
        field.value = data;
        field.enabled = false;
    }
};
