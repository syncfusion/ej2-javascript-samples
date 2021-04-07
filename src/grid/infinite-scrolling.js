this.default = function () {
    var genarateData = new ej.buttons.Button({}, '#genarate');
    var data = [];
    var columns = [
        { field: 'FIELD1', headerText: 'Player Name', width: 140 },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'right' },
        { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'right' },
        { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'right' },
        { field: 'FIELD5', headerText: 'LGID', width: 120, textAlign: 'right' },
        { field: 'FIELD6', headerText: 'GP', width: 120, textAlign: 'right' },
        { field: 'FIELD7', headerText: 'GS', width: 120, textAlign: 'right' },
        
    ];
    genarateData.element.onclick = function () {   
        if (!data.length) {
            show();
            window.dataSource();            
            grid.dataSource = data = window.virtualData;
        }
        else {
            show();            
            grid.refresh();
        }
    };
    var grid = new ej.grids.Grid({
        dataSource: [],
        enableInfiniteScrolling:true,
        height: 400,
        pageSettings: {pageSize: 50},
        columns: columns,
        dataBound: hide
    });
    grid.appendTo('#Grid');

    function show() {
        document.getElementById('popup').style.display = 'inline-block';
    }
    function hide() {       
        document.getElementById('popup').style.display = 'none';
    }
};
