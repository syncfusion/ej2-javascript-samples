this.default = function () {
    var dropInstance;
    var operators = {
        stringOperator: [
            { value: 'contains', text: 'Contains' },
            { value: 'doesnotcontain', text: 'Does Not Contains' }
        ],
    };
    var filter = {
        type: 'Menu',
        ui: {
            create: function (args) {
                var flValInput = ej.base.createElement('input', {
                    className: 'flm-input',
                });
                args.target.appendChild(flValInput);
                var dropdownData = ['Phone', 'Mouse', 'Laptop', 'Keyboard', 'Headset', 'Tablet', 'Projector', 'Printer', 'Calculator'];
                dropInstance = new ej.dropdowns.MultiSelect({
                    dataSource: dropdownData,
                    placeholder: 'Select a value',
                    popupHeight: '200px',
                    allowFiltering: true,
                    mode: 'Box',
                });
                dropInstance.appendTo(flValInput);
            },
            write: function (args) {
                if (args.filteredValue && args.filteredValue.length > 0) {
                    dropInstance.value = args.filteredValue.split(', ');
                }
            },
            read: function (args) {
                grid.removeFilteredColsByField(args.column.field);
                if (dropInstance.value.length) {
                    args.fltrObj.filterByColumn(
                        args.column.field,
                        args.operator,
                        (dropInstance.value).sort().join(', ')
                    );
                }
            },
        },
    };
    var grid = new ej.grids.Grid({
        dataSource: window.employeeDetail,
        allowSorting: true,
        height: 400,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox', operators: operators },
        queryCellInfo: queryCellInfo,
        columns: [
            {
                headerText: 'Image', textAlign: 'Center',
                template: '#template', width: 180
            },
            { field: 'EmployeeID', headerText: 'ID', width: 160 },
            { field: 'Name', headerText: 'Name', width: 120 },
            { field: 'MailID', headerText: 'Email ID', width: 150, template: '#mailIDTemplate' },
            { field: 'Designation', headerText: 'Designation', width: 160 },
            { field: 'DateOfJoining', headerText: 'Date Joined', width: 170, format: 'yMd', textAlign: 'Right', type:'date' },
            { field: 'Team', headerText: 'Team(s)', width: 160 },
            { field: 'ReportTo', headerText: 'Reporter', width: 120 },
            { field: 'EmployeeAvailability', headerText: 'Availability', width: 150, template: '#statusTemplate' },
            { field: 'YearOfExperience', headerText: 'Experience', width: 180 },
            { field: 'AssetKit', headerText: 'Asset Kit', width: 180, filter: filter, template: '#assetTemplate' },
            { field: 'AssetKitDistribution', headerText: 'Assigned Date', width: 170, format: 'yMd', textAlign: 'Right', type:'date' },
            { field: 'Location', headerText: 'Location', width: 150, template: '#locationTemplate' },
            { field: 'PhoneNumber', headerText: 'Contact No', width: 150, textAlign: 'Right' },
        ],
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

    window.statusTemplate = function (e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        if (e.EmployeeAvailability === 'Available') {
            span.className = 'statustxt e-availablecolor';
            span.textContent = 'Available';
            div.className = 'statustemp e-availablecolor';
        }
        else {
            span.className = 'statustxt e-nonavailablecolor';
            span.textContent = 'Not Available';
            div.className = 'statustemp e-nonavailablecolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };

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