this.default = function () {     
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        groupSettings: { showDropArea: false, columns: ['CustomerID'] },
        editSettings: { allowEditing: true, allowDeleting: true, mode: 'Batch' },
        toolbar: [ 'Delete', 'Update', 'Cancel'],
        columns: [
            {
                field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
                validationRules: { required: true }, width: 120
            },
            {
                field: 'CustomerID', headerText: 'Customer ID',
                validationRules: { required: true }, width: 140
            },
            {
                field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
                width: 120, format: 'C2', validationRules: { required: true }
            },
            {
                field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
                width: 170
            },
            {
                field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150,
                edit: { params: { popupHeight: '300px' } }
            }
        ],
        aggregates: [{
            columns: [ {
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Sum : ${Sum}'
            },
            {
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                groupFooterTemplate: 'Sum : ${Sum}'
            },
            {
                type: 'Average',
                field: 'Freight',
                format: 'C2',
                groupCaptionTemplate: 'Average: ${Average}'
            }]
        }]
    });
    grid.appendTo('#Grid');
};