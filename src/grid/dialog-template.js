this.default = function () {
    var countryData = ej.data.DataUtil.distinct(orderData, 'ShipCountry', true);
    var shipCityData = ej.data.DataUtil.distinct(orderData, 'ShipCity', true);
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete'],
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true, number: true }, width: 120, defaultValue: ''
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true }, width: 140, defaultValue: ''
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 120, format: 'C2'
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
                width: 170, validationRules: { date:  [true, 'Enter valid date'] }
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, defaultValue: ''
            }
        ],
        actionComplete: function(args) {
            if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
                var data = args.rowData;
                // Convert Widget for the Freight field
                new ej.inputs.NumericTextBox({value: data.Freight, format: 'C2', placeholder: 'Freight', floatLabelType: 'Always' },
                                   args.form.elements.namedItem('Freight'));
    
                // Convert Widget for the ShipCountry field
                new ej.dropdowns.DropDownList({value: data.ShipCountry, popupHeight: '300px', floatLabelType: 'Always',
                                 dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'},
                                 args.form.elements.namedItem('ShipCountry'));
    
                // Convert Widget for the OrderDate field
                new ej.calendars.DatePicker({value: data.OrderDate, placeholder: 'Order Date', floatLabelType: 'Always' },
                               args.form.elements.namedItem('OrderDate'));
    
                // Convert Widget for the ShipCity field
                new ej.dropdowns.DropDownList({value: data.ShipCity, dataSource: shipCityData, floatLabelType: 'Always',
                                 popupHeight: '300px', fields: {text: 'ShipCity', value: 'ShipCity' }, placeholder: 'Ship City' },
                                 args.form.elements.namedItem('ShipCity'));

                if (ej.base.Browser.isDevice) {
                    args.dialog.height = window.innerHeight - 90 + 'px';
                    args.dialog.dataBind();
                }
                    
                // Set initail Focus
                if (args.requestType === 'beginEdit') {
                    args.form.elements.namedItem('CustomerID').focus();
                } else {
                    args.form.elements.namedItem('OrderID').focus();
                }
            }
        }
    });
    grid.appendTo('#Grid');
};