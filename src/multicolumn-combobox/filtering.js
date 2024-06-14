
this.default = function () {

    var columns = [
        { field: 'OrderID', width: 110, header: 'Order ID' },
        { field: 'CustomerID', width: 130, header: 'Customer ID' },
        { field: 'Freight', width: 90, header: 'Freight' },
        { field: 'ShipCountry', width: 140, header: 'Ship Country' }
    ];

    // Initialize multicolumn ComboBox component
    var multicolumnObj = new ej.multicolumncombobox.MultiColumnComboBox({
        //set the local data to dataSource property
        dataSource: window.orderData,
        //set column of the multicolumn combobox
        columns: columns,
        //set the fields of the multicolumn combobox
        fields: { text: 'ShipCountry', value: 'OrderID' },
        // set the placeholder to multicolumn combobox input element
        placeholder: 'Select a country',
        // set the height of the popup element
        popupHeight: '200px',
        // bind the filtering event
        filtering: function (e) {
            var query = new ej.data.Query();
            // frame the query based on search string with filter type.
            query = (e.text !== '') ? query.where('ShipCountry', 'startswith', e.text, true) : query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(window.orderData, query);
        }
    });
    multicolumnObj.appendTo('#filtering');
};