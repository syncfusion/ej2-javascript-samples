this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: true,
            formatSettings: [{ name: 'PowUnits', format: 'N' }, { name: 'ProCost', format: 'C' }],
            drilledMembers: [{ name: 'EnerType', items: ['Biomass', 'Free Energy'] }],
            columns: [
                { name: 'EnerType', caption: 'Energy Type' },
                { name: 'EneSource', caption: 'Energy Source' }
            ],
            dataSource: window.renewableEnergy,
            expandAll: false,
            rows: [
                { name: 'Year', caption: 'Production Year' },
                { name: 'HalfYear', caption: 'Half Year' },
                { name: 'Quarter', caption: 'Quarter Year' }
            ],
            values: [
                { name: 'PowUnits', caption: 'Units (GWh)' },
                { name: 'ProCost', caption: 'Cost (MM)' }
            ],
            filters: []
        }, showFieldList: true,
        width: '100%',
        height: 290,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');
    var balanceDropDown = new ej.dropdowns.DropDownList({
        placeholder: 'Cost',
        floatLabelType: 'Auto',
        change: function (args) {
            setSummaryType('ProCost', args.value);
        }
    });
    balanceDropDown.appendTo('#pricedrpdwn');
    var summaryDropDown = new ej.dropdowns.DropDownList({
        placeholder: 'Units',
        floatLabelType: 'Auto',
        change: function (args) {
            setSummaryType('PowUnits', args.value);
        }
    });
    summaryDropDown.appendTo('#freightdrpdwn');
    function setSummaryType(fieldName, summaryType) {
        var isAvail = false;
        for (var vCnt = 0; vCnt < pivotObj.dataSourceSettings.values.length; vCnt++) {
            if (pivotObj.dataSourceSettings.values[vCnt].name === fieldName) {
                if (pivotObj.dataSourceSettings.values[vCnt].name === 'PowUnits' && summaryType === 'Avg') {
                    pivotObj.setProperties({ dataSourceSettings: { formatSettings: [{ name: 'PowUnits', format: 'N2' }, { name: 'ProCost', format: 'C' }] } }, true);
                } else {
                    pivotObj.setProperties({ dataSourceSettings: { formatSettings: [{ name: 'PowUnits', format: 'N' }, { name: 'ProCost', format: 'C' }] } }, true);
                }
                pivotObj.dataSourceSettings.values[vCnt].type = summaryType;
                isAvail = true;
            }
        }
        if (isAvail) {
            pivotObj.updateDataSource();
        }
    }
};
