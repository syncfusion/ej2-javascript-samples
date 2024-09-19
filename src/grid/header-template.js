this.default = function () {
    var data = new ej.data.DataManager(window.employeeData).executeLocal(new ej.data.Query().take(15));
    var grid = new ej.grids.Grid({
        dataSource: window.employeeDetail,
        height: 400,
        queryCellInfo: queryCellInfo,
        columns: [
            {
                headerText: 'Image', textAlign: 'Center',
                template: '#template', width: 180, headerTemplate: '#employeeImageTemplate'
            },
            { field: 'EmployeeID', headerText: 'ID', width: 160 },
            { field: 'Name', headerText: 'Name', width: 120 },
            { field: 'MailID', headerText: 'Email ID', width: 150, template:'#mailIDTemplate', headerTemplate: '#mailIDHeaderTemplate'},
            { field: 'AssetKit', headerText: 'Asset Kit', width: 180, template: '#assetTemplate', headerTemplate: '#assetHeaderTemplate'},
            { field: 'AssetKitDistribution', headerText: 'Assigned Date', width: 170, headerTemplate: '#datetemplate', format: 'yMd', textAlign: 'Right' },
            { field: 'Location', headerText: 'Location', width: 200, template: '#locationTemplate', headerTemplate: '#locationHeaderTemplate' },
            { field: 'PhoneNumber', headerText: 'Contact No', width: 180, textAlign: 'Right', headerTemplate: '#phoneHeaderTemplate'},
        ]
    });
    grid.appendTo('#Grid');

    function queryCellInfo(args) {
        if (args.column.field === 'AssetKit') {
            var assetValue = args.data[args.column.field].split(',');
            var asset = new ej.buttons.ChipList({
                chips: assetValue
            });
            asset.appendTo(args.cell.querySelector('#assetElement'));
        }
    }

    window.employeeTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'image';
        var imgElement = document.createElement('img');
        imgElement.src = 'src/grid/images/' + e.EmployeeID.replace('Emp100','') + '.png';
        imgElement.alt = e.EmployeeID;
        divElement.appendChild(imgElement);
        return divElement.outerHTML;
    };
};