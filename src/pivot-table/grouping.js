/**
 * Pivot Table Grouping bar Sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var selectedGroups = ['Years', 'Months', 'Days'];
    var groupData = ['Years', 'Quarters', 'Months', 'Days'];
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: ej.base.extend([], window.Group_Data, null, true),
            expandAll: false,
            enableSorting: true,
            formatSettings: [ { name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' },
                { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }
            ],
            rows: [
                { name: 'Date', caption: 'Date' }
            ],
            columns: [
                { name: 'Product_ID', caption: 'Product ID' },
                { name: 'Products', caption: 'Products' }
            ],
            values: [
                { name: 'Sold', caption: 'Unit Sold' },
                { name: 'Amount', caption: 'Sold Amount' }
            ],
            filters: [],
            groupSettings: [{ name: 'Date', type: 'Date', groupInterval: ['Years', 'Months', 'Days']},
            { name: 'Product_ID', type: 'Number', rangeInterval: 4 }]
        },
        width: '100%',
        height: 450,
        showGroupingBar: true,
        gridSettings: { 
            columnWidth: 140,
            columnRender: function (args) {
                if (args.dataSourceSettings.rows.length > 3 && args.columns[0].width <=250){
                    args.columns[0].width = 285;
                }
            }
        }
    });
    pivotObj.appendTo('#PivotView');

    var dateGroup = new ej.dropdowns.MultiSelect({
        dataSource: groupData,
        mode: 'CheckBox',
        showDropDownIcon: true,
        enableSelectionOrder: false,
        popupWidth: '150',
        width: '150',
        value: ['Years', 'Months', 'Days'],
        placeholder: 'Select group',
        filterBarPlaceholder: 'Search group',
        select: function (args) {
            applyGroupSettings(args);
        },
        removed: function (args) {
            applyGroupSettings(args);
        }
    });
    dateGroup.appendTo('#dategroup');
    
    var numberGroup = new ej.inputs.NumericTextBox({
        width: '150',
        format: '###',
        min: 1,
        max: 10,
        value: 4,
        placeholder: "Example: 4"
    });
    numberGroup.appendTo('#numbergroup');

    var applyBtn = new ej.buttons.Button({
        isPrimary: true
    });
    applyBtn.appendTo('#group-apply');

    function applyGroupSettings(args) {
        if (args.name === 'select') {
            if (selectedGroups.indexOf(args.itemData) === -1) {
                selectedGroups.push(args.itemData);
            }
        } else {
            if (selectedGroups.indexOf(args.itemData) > -1) {
                var index = selectedGroups.indexOf(args.itemData);
                selectedGroups.splice(index, 1);
            }
        }
    }
  
    document.getElementById('group-apply').onclick = function () {
        var groupSettings = [];
        if (selectedGroups.length > 0) {
            groupSettings.push({ name: 'Date', type: 'Date', groupInterval: selectedGroups});
        }
        if (numberGroup.value > 1) {
            groupSettings.push({ name: 'Product_ID', type: 'Number', rangeInterval: numberGroup.value });
        }
        pivotObj.dataSourceSettings.groupSettings = groupSettings;
    };
};
