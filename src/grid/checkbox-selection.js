this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.inventoryData,
        allowPaging: true,
        allowSelection: true,
        selectionSettings: { persistSelection: true },
        editSettings: { allowDeleting: true },
        toolbar: [ 'Delete' ],
        enableHover: false,
        columns: [
            { type: 'checkbox', width: 50 },
            { field: 'Inventor', isPrimaryKey: true, headerText: 'Inventor Name', width: 180 },
            { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: 195, textAlign: 'Right' },
            { field: 'Country', headerText: 'Country', width: 120 },
            { field: 'Active', headerText: 'Active', width: 130 }
        ],
        pageSettings: { pageCount: 2 }
    });
    grid.appendTo('#Grid');
};