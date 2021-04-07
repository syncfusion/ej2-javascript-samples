/**
 * Pivot Table sample for Local data source.
 */
this.default = function () {
    ej.base.enableRipple(false);

    var jsonReport = {
        type: 'JSON',
        dataSource: window.renewableEnergy,
        expandAll: false,
        rows: [
            { name: 'Year', caption: 'Production Year' },
            { name: 'HalfYear', caption: 'Half Year' },
            { name: 'Quarter', caption: 'Quarter' }
        ],
        values: [
            { name: 'PowUnits', caption: 'Units (GWh)' },
            { name: 'ProCost', caption: 'Cost (MM)' }
        ],
        columns: [
            { name: 'EnerType', caption: 'Energy Type' },
            { name: 'EneSource', caption: 'Energy Source' }
        ],
        filters: [],
        enableSorting: true,
        formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
        drilledMembers: [{ name: 'EnerType', items: ['Biomass', 'Free Energy'] }]
    };

    var csvReport = {
        type: 'CSV',
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
        drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
        rows: [
            { name: 'Region' },
            { name: 'Country' }
        ],
        columns: [
            { name: 'Item Type' },
            { name: 'Sales Channel' }
        ],
        values: [
            { name: 'Total Cost' },
            { name: 'Total Revenue' },
            { name: 'Total Profit' }
        ],
        filters: []
    };

    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: jsonReport,
        height: 290,
        width: '100%',
        gridSettings: { columnWidth: 120 },
        load: function (args) {
            if (args.dataSourceSettings.type === 'CSV') {
                args.dataSourceSettings.dataSource = getCSVData();
            }
        }
    });
    pivotObj.appendTo('#PivotView');

    var contentDropDown = new ej.dropdowns.DropDownList({
        placeholder: 'Content Type',
        change: function (args) {
            if (args.value === 'JSON') {
                pivotObj.dataSourceSettings = jsonReport;
            } else if (args.value === 'CSV') {
                csvReport.dataSource = getCSVData();
                pivotObj.dataSourceSettings = csvReport;
            }
        }
    });
    contentDropDown.appendTo('#contenttype');

    function getCSVData() {
        var dataSource = [];
        var jsonObject = window.csvdata.split(/\r?\n|\r/);
        for (var i = 0; i < jsonObject.length; i++) {
            if (!ej.base.isNullOrUndefined(jsonObject[i]) && jsonObject[i] !== '') {
                dataSource.push(jsonObject[i].split(','));
            }
        }
        return dataSource;
    }
};