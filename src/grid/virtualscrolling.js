var virtualData = [];
var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
var date1;
var date2;
var flag = true;
this.default = function () {
    var genarateData = new ej.buttons.Button({}, '#genarate');
    genarateData.element.onclick = function () {
        if (!virtualData.length) {
            show();
            dataSource();
            date1 = new Date().getTime();
            grid.dataSource = virtualData;
        }
        else {
            flag = true;
            show();
            date1 = new Date().getTime();
            grid.refresh();
        }
    };
    var grid = new ej.grids.Grid({
        dataSource: [],
        enableVirtualization: true,
        enableColumnVirtualization: true,
        height: 600,
        columns: [
            { field: 'FIELD1', headerText: 'Player Name', width: 140 },
            { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
            { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
            { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' },
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
        ],
        dataBound: hide
    });
    grid.appendTo('#Grid');
};
function dataSource() {
    for (var i = 0; i < 100000; i++) {
        virtualData.push({
            'FIELD1': names[Math.floor(Math.random() * names.length)],
            'FIELD2': 1967 + (i % 10),
            'FIELD3': Math.floor(Math.random() * 200),
            'FIELD4': Math.floor(Math.random() * 100),
            'FIELD5': Math.floor(Math.random() * 2000),
            'FIELD6': Math.floor(Math.random() * 1000),
            'FIELD7': Math.floor(Math.random() * 100),
            'FIELD8': Math.floor(Math.random() * 10),
            'FIELD9': Math.floor(Math.random() * 10),
            'FIELD10': Math.floor(Math.random() * 100),
            'FIELD11': Math.floor(Math.random() * 100),
            'FIELD12': Math.floor(Math.random() * 1000),
            'FIELD13': Math.floor(Math.random() * 10),
            'FIELD14': Math.floor(Math.random() * 10),
            'FIELD15': Math.floor(Math.random() * 1000),
            'FIELD16': Math.floor(Math.random() * 200),
            'FIELD17': Math.floor(Math.random() * 300),
            'FIELD18': Math.floor(Math.random() * 400),
            'FIELD19': Math.floor(Math.random() * 500),
            'FIELD20': Math.floor(Math.random() * 700),
            'FIELD21': Math.floor(Math.random() * 800),
            'FIELD22': Math.floor(Math.random() * 1000),
            'FIELD23': Math.floor(Math.random() * 2000),
            'FIELD24': Math.floor(Math.random() * 150),
            'FIELD25': Math.floor(Math.random() * 1000),
            'FIELD26': Math.floor(Math.random() * 100),
            'FIELD27': Math.floor(Math.random() * 400),
            'FIELD28': Math.floor(Math.random() * 600),
            'FIELD29': Math.floor(Math.random() * 500),
            'FIELD30': Math.floor(Math.random() * 300),
        });
    }
}
function show() {
    document.getElementById('popup').style.display = 'inline-block';
}
function hide() {
    if (flag && date1) {
        date2 = new Date().getTime();
        document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) + 'ms';
        flag = false;
    }
    document.getElementById('popup').style.display = 'none';
}