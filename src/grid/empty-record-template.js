this.default = function () {
    
    window.renderEmptyImg = function () {
        var img = document.createElement('img');
        if (document.body.classList.value.indexOf('dark') > -1 || document.body.classList.value.indexOf('highcontrast') > -1) {
            img.src = "src/grid/images/emptyRecordTemplate_dark.svg";
        } else {
            img.src = "src/grid/images/emptyRecordTemplate_light.svg";
        }
        img.classList.add("e-emptyRecord");
        img.alt = "No record";
        return img.outerHTML;
    };
    
    var grid = new ej.grids.Grid({
        dataSource: [],
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        emptyRecordTemplate: '#emptytemplate',
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
        columns: [
            { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',validationRules: { required: true, number: true }, width: 140},
            { field: 'CustomerID', headerText: 'Customer ID',validationRules: { required: true }, width: 140 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',width: 140, format: 'C2', validationRules: { required: true}},
            { field: 'OrderDate', headerText: 'Order Date', editType: 'datetimepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' },width: 160},
            { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, edit: { params: { dataSource: window.orderData, fields: { value: 'ShipCountry', text: 'ShipCountry' },}}}
        ],
        pageSettings: { pageCount: 5 },
    });
    grid.appendTo('#Grid');
};