/**
 * Pivot Table Member Custom Sorting sample
 */
this.default = function () {
    var isInitial = true;
    var fieldCollections = {};
    var getMembers = { 'Country': [], 'Products': [], 'Year': [], 'Order_Source': [] };
    var memOrder = [];
    var index;
    var data = [];
    var isMemberAdded = true;
    var isMemberAdded_1 = true;
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            dataSource: window.Pivot_Data,
            expandAll: false,
            enableSorting: true,
            rows: [{ name: 'Country' }, { name: 'Products' }],
            drilledMembers: [{name: 'Country', items: ['Germany']}],
            columns: [{ name: 'Year', dataType: 'string' }, { name: 'Order_Source', caption: 'Order Source' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            sortSettings: [{ name: 'Country', order: 'Ascending', membersOrder: ['France', 'United States'] }, { name: 'Year', order: 'Descending', membersOrder: ['FY 2018', 'FY 2017'] },
            { name: 'Products', order: 'Descending', membersOrder: ['Gloves', 'Bottles and Cages'] }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }]
        },
        width: '100%',
        height: 500,
        gridSettings: { columnWidth: 140 },
        groupingBarSettings: { showRemoveIcon: false, showFilterIcon: false, showSortIcon: true, showValueTypeIcon: false, allowDragAndDrop: false },
        showGroupingBar: true,
        dataBound: function (args) {
            if (isInitial) {
                /** To fill the members for each fields into the object fieldCollections. */
                var fieldCount = fields.length - 1;
                while (fieldCount > -1) {
                    var members = Object.keys(pivotObj.engineModule.fieldList[fields[fieldCount].Field].members);
                    var memberCnt = members.length;
                    var memberColl = [];
                    for (var i = 0; i < memberCnt; i++) {
                        memberColl.push({ Member: members[i], Checked: members[i] + '_' + false });
                    }
                    fieldCollections[fields[fieldCount].Field] = memberColl;
                    fieldCount--;
                }
                fieldCollections.Order_Source.reverse();
                data = fieldCollections[fields[0].Field];
                membersOrder.dataSource = data;
                fieldCollections.Country[0].Checked = "France_true";
                fieldCollections.Country[3].Checked = "United States_true";
                getMembers.Country.push('France', 'United States');
                getMembers.Year.push('FY 2018', 'FY 2017');
                getMembers.Products.push('Gloves', 'Bottles and Cages');
                membersOrder.value = updateSelectedMembers("Country").reverse();
                membersOrder.dataBind();
                isInitial = false;
            }
        },
        actionComplete: function (args) {
            var sortDetails = pivotObj.dataSourceSettings.sortSettings;
            for (var i = 0; i < (pivotObj.dataSourceSettings.rows.length + pivotObj.dataSourceSettings.columns.length); i++) {
                if (sortDetails.length > 0) {
                    if (sortDetails[i] && sortDetails[i].name === 'Country') {
                        updateOrder(sortDetails, i, 'Country', 0);
                    }
                    else if (sortDetails[i] && sortDetails[i].name === 'Products') {
                        updateOrder(sortDetails, i, 'Products', 1);
                    }
                    else if (sortDetails[i] && sortDetails[i].name === 'Year') {
                        updateOrder(sortDetails, i, 'Year', 2);
                    }
                    else if (sortDetails[i] && sortDetails[i].name === 'Order_Source') {
                        updateOrder(sortDetails, i, 'Order_Source', 3);
                    }
                }
            }
        }
    });
    pivotObj.appendTo('#PivotView');
    var order = ['Ascending', 'Descending'];
    var fields = [
        { Field: 'Country', Order: 'Country_asc', caption: 'Country' },
        { Field: 'Products', Order: 'Products_desc', caption: 'Products' },
        { Field: 'Year', Order: 'Year_desc', caption: 'Year' },
        { Field: 'Order_Source', Order: 'Order_Source_asc', caption: 'Order Source' }
    ];
    var checkBoxObj = new ej.buttons.CheckBox({
        label: 'Enable Sorting', labelPosition: 'After', checked: true,
        change: function (args) {
            var ischecked = args.checked;
            fieldsObj.enabled = ischecked;
            orderInfo.enabled = ischecked;
            membersOrder.enabled = ischecked;
            applyBtn.disabled = !ischecked;
            pivotObj.dataSourceSettings.enableSorting = ischecked;
        }
    });
    checkBoxObj.appendTo('#sorting');
    var membersOrder = new ej.dropdowns.MultiSelect({
        dataSource: data,
        mode: 'CheckBox',
        showDropDownIcon: true,
        showClearButton: false,
        enableSelectionOrder: false,
        fields: { text: 'Member' },
        select: function (args) {
            applyBtn.disabled = false;
            maintainCheckedState(fieldsObj.itemData.Field, args.item.textContent, args.item.textContent + '_' + true);
            getMembers[fieldsObj.itemData.Field].push(args.itemData.Member);
        },
        removed: function (args) {
            maintainCheckedState(fieldsObj.itemData.Field, args.item.textContent, args.item.textContent + '_' + false);
            index = getMembers[fieldsObj.itemData.Field].indexOf(args.itemData.Member);
            if (getMembers[fieldsObj.itemData.Field].includes(args.itemData.Member)) {
                getMembers[fieldsObj.itemData.Field].splice(index, 1);
            }
        },
        open: function (args) {
            args.popup.element.querySelector(".e-filter-parent").style.display = 'none';
        }
    });
    membersOrder.appendTo('#sorting-members');
    var fieldsObj = new ej.dropdowns.DropDownList({
        dataSource: fields,
        fields: { text: 'caption', value: 'Order' },
        index: 0,
        enabled: true,
        change: function (args) {
            if (fieldsObj.dataSource[fieldsObj.index].Order === fieldsObj.dataSource[fieldsObj.index].Field + '_asc') {
                orderInfo.index = 0;
            }
            else {
                orderInfo.index = 1;
            }
            if (memOrder.length > 0) {
                if (memOrder[fieldsObj.index] === 'Ascending') {
                    orderInfo.index = 0;
                }
                else if (memOrder[fieldsObj.index] === 'Descending') {
                    orderInfo.index = 1;
                }
            }
            if (args.itemData.Field === 'Year' && isMemberAdded) {
                fieldCollections.Year[3].Checked = "FY 2018_true";
                fieldCollections.Year[2].Checked = "FY 2017_true";
                membersOrder.value = updateSelectedMembers("Year").reverse();
                isMemberAdded = false;
            }
            else if(args.itemData.Field === 'Products' && isMemberAdded_1){
                fieldCollections.Products[9].Checked = "Gloves_true";
                fieldCollections.Products[0].Checked = "Bottles and Cages_true";
                membersOrder.value = updateSelectedMembers("Products").reverse();
                isMemberAdded_1 = false;
            }
            membersOrder.dataSource = fieldCollections[args.itemData.Field.toString()];
            membersOrder.value = updateSelectedMembers(args.itemData.Field.toString());
            membersOrder.dataBind();
            orderInfo.dataBind();
        }
    });
    fieldsObj.appendTo('#sorting-fields');
    var orderInfo = new ej.dropdowns.DropDownList({
        dataSource: order,
        index: 0,
        enabled: true,
        change: function (args) {
            if (args.value === 'Ascending') {
                fieldsObj.dataSource[fieldsObj.index].Order = fieldsObj.dataSource[fieldsObj.index].Field + '_asc';
            }
            else {
                fieldsObj.dataSource[fieldsObj.index].Order = fieldsObj.dataSource[fieldsObj.index].Field + '_desc';
            }
            fieldsObj.refresh();
        }
    });
    orderInfo.appendTo('#sorting-order');
    var applyBtn = new ej.buttons.Button({
        isPrimary: true,
    });
    applyBtn.appendTo('#sorting-apply');
    document.getElementById('sorting-apply').onclick = function () {
        if (checkBoxObj.checked) {
            pivotObj.setProperties({
                dataSourceSettings: {
                    enableSorting: true, sortSettings: [
                        { name: 'Country', order: fieldsObj.dataSource[0].Order === 'Country_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers.Country },
                        { name: 'Products', order: fieldsObj.dataSource[1].Order === 'Products_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers.Products },
                        { name: 'Year', order: fieldsObj.dataSource[2].Order === 'Year_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers.Year },
                        { name: 'Order_Source', order: fieldsObj.dataSource[3].Order === 'Order_Source_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers.Order_Source }
                    ]
                }
            }, true);
        }
        else {
            pivotObj.setProperties({ dataSourceSettings: { enableSorting: false, sortSettings: [] } }, true);
        }
        pivotObj.refreshData();
    };

    /** To set the checked status of the members maintained in the object fieldCollections. */
    function maintainCheckedState(field, member, checkedState) {
        var members = fieldCollections[field];
        var count = members.length - 1;
        while (count > -1) {
            if (members[count].Member === member) {
                members[count].Checked = checkedState;
                break;
            }
            count--;
        }
    }

    /** To get the checked members/status here as string array. */
    function updateSelectedMembers(field) {
        var membersColls = [];
        var members = fieldCollections[field];
        var count = members.length - 1;
        while (count > -1) {
            if (members[count].Checked === members[count].Member + '_' + true) {
                membersColls.push(members[count].Member.toString());
            }
            count--;
        }
        return membersColls;
    }

    function updateOrder(sortDetails, i, fieldName, j) {
        if (sortDetails[i].order === 'Ascending') {
            if (fieldsObj.itemData.Field === fieldName) {
                orderInfo.index = 0;
            }
            memOrder[j] = 'Ascending';
        }
        else {
            if (fieldsObj.itemData.Field === fieldName) {
                orderInfo.index = 1;
            }
            memOrder[j] = 'Descending';
        }
    }
};
