this.default = function () {
    var names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    var masterdata = window.customerData.filter(function(e){ 
        return names.indexOf(e.CustomerID) !== -1;
    });
    
    var mastergrid = new ej.grids.Grid({
        dataSource: masterdata,
        selectedRowIndex: 1,
        columns: [
            { field: 'ContactName', headerText: 'Customer Name', width: 150,},
            { field: 'CompanyName', headerText: 'Company Name', width: 150 },
            { field: 'Address', headerText: 'Address', width: 150 },
            { field: 'Country', headerText: 'Country', width: 130 }
        ],
        rowSelected: rowSelected
    });
    mastergrid.appendTo('#MasterGrid');

    function rowSelected(args) {
         var selRecord = args.data;
         grid.dataSource = window.data.filter(function(record){
             return (record.CustomerName === selRecord.ContactName);
            }).slice(0, 5);
        document.getElementById("key").innerHTML = selRecord.ContactName;
    }

    var grid = new ej.grids.Grid({
        allowSelection: false,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right' },
            { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2', type:'number' },
            { field: 'ShipName', headerText: 'Ship Name', width: 200},
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
            { field: 'ShipAddress', headerText: 'Ship Address', width: 200 },
        ]
    });
    grid.appendTo('#DetailGrid');
};

