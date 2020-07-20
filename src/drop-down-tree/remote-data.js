this.default = function () {
    // Use data manager to get tree data from remote source
    var data = new ej.data.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    });
    // Set queries to filter and fetch remote data
    var query = new ej.data.Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    var query1 = new ej.data.Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    // Render the DropDownTree with remote data source
    var ddTreeObj = new ej.dropdowns.DropDownTree({
        fields: {
            dataSource: data, query: query, value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
            child: { dataSource: data, query: query1, value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName' }
        },
        popupHeight: '200px',
        placeholder: 'Select a name',
    });
    ddTreeObj.appendTo('#ddtremote');
};