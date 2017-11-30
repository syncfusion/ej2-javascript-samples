    this.default = function () {
        var grid = new ej.grids.Grid({
            dataSource: window.inventoryData,
            allowPaging: true,
            allowSelection: true,
            selectionSettings: { type: 'multiple' },
            enableHover: false,
            columns: [
                { field: 'Inventor', headerText: 'Inventor Name', width: 180 },
                { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: 195, textAlign: 'right' },
                { field: 'Country', headerText: 'Country', width: 120 },
                { field: 'Active', headerText: 'Active', width: 130 }
            ],
            pageSettings: { pageCount: 2 }
        });
        grid.appendTo('#Grid');
        var start = document.getElementById('start');
        var to = document.getElementById('to');
        document.getElementById('select').onclick = function () {
            var startRow = parseInt(start.value, 10);
            var toRow = parseInt(to.value, 10);
            grid.selectionModule.selectRowsByRange(startRow, toRow);
        };
        document.getElementById('clear').onclick = function () {
            grid.clearSelection();
        };
    };