this.default = function () {
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            enableSorting: true,
            formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
            drilledMembers: [{ name: 'EnerType', items: ['Biomass', 'Free Energy'] }],
            columns: [
                { name: 'EnerType', caption: 'Energy Type' },
                { name: 'EneSource', caption: 'Energy Source' }
            ],
            data: window.renewableEnergy,
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
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');    
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
        for (var vCnt = 0; vCnt < pivotGridObj.dataSource.values.length; vCnt++) {
            if (pivotGridObj.dataSource.values[vCnt].name === fieldName) {
                pivotGridObj.dataSource.values[vCnt].type = summaryType;
                isAvail = true;
            }
        }
        if (isAvail) {
            pivotGridObj.updateDataSource();
        }
    }
};
