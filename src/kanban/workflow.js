window.getTags = function (data) {
    var tagDiv = '';
    var tags = data.split(',');
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tagDiv += '<div class="e-card-tag-field">' + tag + '</div>';
    }
    return tagDiv;
};
this.default = function () {
    var data = new ej.base.extend([], window.kanbanPizzaData, null, true); // To maintain the property changes, extend the object.
    //Initialize Kanban control
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Category',
        columns: [
            { headerText: 'Order', keyField: 'Order', allowDrop:false, transitionColumns: ["Ready to Serve", "Ready to Deliver"], allowToggle: true },
            { headerText: 'Ready to Serve', keyField: 'Ready to Serve', transitionColumns: ["Served"], allowToggle: true },
            { headerText: 'Home Delivery', keyField: "Ready to Deliver", transitionColumns: ["Delivered"], allowToggle: true },
            { headerText: 'Delivered', keyField: 'Delivered,Served', allowDrag:false, allowToggle: true }
        ],
        cardSettings: {
            headerField: 'Id',
            contentField: 'Description',
            template: '#cardTemplate'
        }
    });
    //Render initialized Kanban control
    kanbanObj.appendTo('#Kanban');
};