this.default = function () {
    var data = new ej.base.extend([], window.kanbanPizzaData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Category',
        columns: [
            { headerText: 'Menu', keyField: 'Menu' },
            { headerText: 'Order', keyField: 'Order' },
            { headerText: 'Ready to Serve', keyField: 'Ready to Serve' },
            { headerText: 'Delivered', keyField: 'Delivered,Served' }
        ],
        cardSettings: {
            headerField: 'Id',
            template: '#cardTemplate'
        },
        dialogSettings: {
            fields: [
                { text: 'ID', key: 'Id', type: 'TextBox' },
                { key: 'Category', type: 'DropDown' },
                { key: 'Title', type: 'TextBox' },
                { key: 'Size', type: 'TextBox' },
                { key: 'Description', type: 'TextArea' }
            ]
        }
    });
    kanbanObj.appendTo('#Kanban');
};