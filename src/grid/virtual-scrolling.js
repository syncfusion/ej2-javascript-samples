this.default = function () {

    var date1;
    var date2;
    var flag = true;
    var data = [];
    var genarateData = new ej.buttons.Button({}, '#genarate');
    var columns = [
        { field: 'SNo', headerText: 'S.No', width: 140, isPrimaryKey: true, validationRules: { required: true, digits: true } },
        { field: 'FIELD1', headerText: 'Player Name', width: 140, validationRules: { required: true } },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
        { field: 'FIELD3', headerText: 'Sports', width: 160, textAlign: 'Right', editType: 'dropdownedit', validationRules: { required: true } },
        { field: 'FIELD4', headerText: 'Country', width: 160, textAlign: 'Right', editType: 'dropdownedit' },
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
        { field: 'FIELD30', headerText: 'Post REB', width: 130, textAlign: 'Right', editType: 'numericedit', validationRules: { required: true } }
    ];
    genarateData.element.onclick = function () {
        if (!data.length) {
            show();
            window.dataSource();
            date1 = new Date().getTime();
            grid.dataSource = data = window.virtualData;
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
        editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal', newRowPosition:'Top' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
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
        if (flag && date1) {
            date2 = new Date().getTime();
            document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) + 'ms';
            grid.editSettings.allowAdding = true;
            flag = false;
        }
        document.getElementById('popup').style.display = 'none';
    }
};
