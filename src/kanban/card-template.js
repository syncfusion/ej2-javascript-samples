this.default = function () {
    var data = new ej.base.extend([], window.kanbanPizzaData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Category',
        columns: [
            { headerText: 'Menu', keyField: 'Menu' },
            { headerText: 'Order', keyField: 'Order' },
            { headerText: 'Ready to Serve', keyField: 'Ready to Serve' },
            { headerText: 'Delivered', keyField: 'Delivered' }
        ],
        cardSettings: {
            headerField: 'Id',
            template: '#cardTemplate'
        },
        dialogSettings: {
            template: '#dialogTemplate'
        },
        dialogOpen: onEditDialogOpen,
        dialogClose: onEditDialogClose
    });
    kanbanObj.appendTo('#Kanban');
    var categoryData = ['Menu', 'Order', 'Ready to Serve', 'Delivered'];
    function onEditDialogOpen(args) {
        if (args.requestType !== 'Delete') {
            var curData = args.data;
            var numericObj = new ej.inputs.NumericTextBox({
                value: curData.Estimate, placeholder: 'Estimate',
            });
            numericObj.appendTo(args.element.querySelector('#Estimate'));
            var filledTextBox = new ej.inputs.TextBox({});
            filledTextBox.appendTo(args.element.querySelector('#Id'));
            var categoryDropObj = new ej.dropdowns.DropDownList({
                value: curData.Category, popupHeight: '300px',
                dataSource: categoryData, fields: { text: 'Category', value: 'Category' }, placeholder: 'Category'
            });
            categoryDropObj.appendTo(args.element.querySelector('#Category'));
            var titleObj = new ej.inputs.TextBox({
                placeholder: 'Title'
            });
            titleObj.appendTo(args.element.querySelector('#Title'));
            var sizeObj = new ej.inputs.TextBox({
                placeholder: 'Size'
            });
            sizeObj.appendTo(args.element.querySelector('#Size'));
            var textareaObj = new ej.inputs.TextBox({
                placeholder: 'Description',
                multiline:true
            });
            textareaObj.appendTo(args.element.querySelector('#Description'));
           
            var datepicker = new ej.calendars.DatePicker({
               value: curData.Date ,
               format:'MM/dd/yyyy',

            });
            datepicker.appendTo(args.element.querySelector('#Date'));
                
        }
    }
    function onEditDialogClose(args) {
        if(args.element.querySelector('#Date'))
        {
            args.data.Date = args.element.querySelector('#Date').ej2_instances[0].value.toLocaleString('es-PR').split(",")[0];
        }
      
    }
};
