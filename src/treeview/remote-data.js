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
    // Render the TreeView with remote data source
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: data, query: query, id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
            child: { dataSource: data, query: query1, id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
        },
        created: show,
        dataBound: hide,
    });
    treeObj.appendTo('#tree');
    // Show loading message, while loading tree data
    function show() {
        var popup = document.getElementById('loading');
        popup.style.display = '';
    }
    // Hide loading message, after tree data has been loaded
    function hide() {
        var popup = document.getElementById('loading');
        popup.style.display = 'none';
    }
};