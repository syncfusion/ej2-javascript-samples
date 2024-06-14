    /**
     * Grid SelectionAPI
     */
        this.default = function () {
        var grid = new ej.grids.Grid({
            dataSource: window.inventoryData,
            allowPaging: true,
            allowSelection: true,
            allowSorting: true,
            allowFiltering: true,
            filterSettings: { type: 'Excel' },
            selectionSettings: { type: 'Multiple' },
            enableHover: false,
            columns: [
                { field: 'Inventor', headerText: 'Inventor Name', width: 180 },
                { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: 195, textAlign: 'Right' },
                { field: 'Country', headerText: 'Country', width: 120 },
                { field: 'Active', headerText: 'Active', width: 130 }
            ],
            pageSettings: { pageCount: 2 }
        });
        grid.appendTo('#Grid');

        //Render numerTextBox component for select range.
        var start = new ej.inputs.NumericTextBox({
        format: '##',
        min: 0,
        max: 11
       });
       start.appendTo('#start');

       //Render numerTextBox component for select range.
       var to = new ej.inputs.NumericTextBox({
        format: '##',
        min: 0,
        max: 11
       });
       to.appendTo('#to');

    //Render button component for select rows.
    var select = new ej.buttons.Button();
    select.appendTo('#select');

   //Render button component for clear selection.
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');

    //Selects rows.
    document.getElementById('select').onclick = function () {
        var startRow = start.value;
        var toRow = to.value;
        grid.selectionModule.selectRowsByRange(startRow, toRow);
    };

    //clears selection.
    document.getElementById('clear').onclick = function () {
        grid.clearSelection();
    };
    };