this.default = function () {
    var refresh;
    var grid = new ej.grids.Grid({
        dataSource: window.inventoryData,
        allowPaging: true,
        allowSorting: true,
        allowGrouping: true,
        groupSettings: { columns: ['Country'] },
        height: 400,
        columns: [
            { field: 'Inventor', headerText: 'Inventor Name', width: 160 },
            { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: 195, textAlign: 'Right' },
            { field: 'Country', headerText: 'Country', width: 120 },
            { field: 'Active', headerText: 'Active', width: 120 },
            { field: 'Mainfieldsofinvention', headerText: 'Main fields of invention', width: 200 },
        ],
        pageSettings: { pageCount: 5 },
        load: function() {
            refresh = grid.refreshing;
        },
        dataBound: function() {
            if (refresh) {
                grid.groupColumn('Country');
                refresh = false;
            }
        },
    });
    grid.appendTo('#Grid');
};