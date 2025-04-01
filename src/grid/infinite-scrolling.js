this.default = function () {
    var genarateData = new ej.buttons.Button({}, '#genarate');
    var data = [];
    var columns = [
        { field: 'SNo', headerText: 'S.No', width: 140, isPrimaryKey: true },
        { field: 'FIELD1', headerText: 'Player Name', width: 140 },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
        { field: 'FIELD3', headerText: 'Sports', width: 160, textAlign: 'Right' },
        { field: 'FIELD4', headerText: 'Country', width: 160, textAlign: 'Right' },
        { field: 'FIELD5', headerText: 'LGID', width: 120, textAlign: 'Right' },
        { field: 'FIELD6', headerText: 'GP', width: 120, textAlign: 'Right' },
        { field: 'FIELD7', headerText: 'GS', width: 120, textAlign: 'Right' },
        { field: 'FIELD8', headerText: 'Minutes', width: 120, textAlign: 'Right' },
        { field: 'FIELD9', headerText: 'Points', width: 120, textAlign: 'Right' },
        { field: 'FIELD10', headerText: 'OREB', width: 130, textAlign: 'Right' },
        { field: 'FIELD11', headerText: 'DREB', width: 130, textAlign: 'Right' },
        { field: 'FIELD12', headerText: 'REB', width: 120, textAlign: 'Right' },
        { field: 'FIELD13', headerText: 'Assists', width: 120, textAlign: 'Right' },
        { field: 'FIELD14', headerText: 'Steals', width: 120, textAlign: 'Right' },
        { field: 'FIELD15', headerText: 'Blocks', width: 120, textAlign: 'Right' },
        { field: 'FIELD16', headerText: 'Turnovers', width: 130, textAlign: 'Right' },
        { field: 'FIELD17', headerText: 'PF', width: 130, textAlign: 'Right' },
        { field: 'FIELD18', headerText: 'FGA', width: 150, textAlign: 'Right' },
        { field: 'FIELD19', headerText: 'FGM', width: 120, textAlign: 'Right' },
        { field: 'FIELD20', headerText: 'FTA', width: 150, textAlign: 'Right' },
        { field: 'FIELD21', headerText: 'FTM', width: 120, textAlign: 'Right' },
        { field: 'FIELD22', headerText: 'Three Attempted', width: 150, textAlign: 'Right' },
        { field: 'FIELD23', headerText: 'Three Made', width: 130, textAlign: 'Right' },
        { field: 'FIELD24', headerText: 'Post GP', width: 120, textAlign: 'Right' },
        { field: 'FIELD25', headerText: 'Post GS', width: 120, textAlign: 'Right' },
        { field: 'FIELD26', headerText: 'Post Minutes', width: 120, textAlign: 'Right' },
        { field: 'FIELD27', headerText: 'Post Points', width: 130, textAlign: 'Right' },
        { field: 'FIELD28', headerText: 'Post OREB', width: 130, textAlign: 'Right' },
        { field: 'FIELD29', headerText: 'Post DREB', width: 130, textAlign: 'Right' },
        { field: 'FIELD30', headerText: 'Post REB', width: 130, textAlign: 'Right' }
        
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
        enableColumnVirtualization: true,
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
