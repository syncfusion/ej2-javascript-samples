/**
 * Pivot Table Member expandAll for specific field sample
 */
this.default = function () {
    var isInitial = true;
    var fieldCollections = {};
    var storeMembers = { 'Country': [], 'Year': [] };
    var values = [];
    var isRowSelect = false;
    var isColumnSelect = false;
    ej.base.enableRipple(false);
    var options = [
        { value: 'allHeaders', text: 'All headers' },
        { value: 'rowHeaders', text: 'Row headers' },
        { value: 'columnHeader', text: 'Column headers' },
        { value: 'specificFields', text: 'Specific fields' },
        { value: 'specificHeaders', text: 'Specific headers' }
    ];
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: window.Pivot_Data,
            expandAll: false,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country', expandAll: true }, { name: 'Products' }],
            columns: [{ name: 'Year', dataType: 'string' }, { name: 'Order_Source', caption: 'Order Source' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
        },
        dataBound: function (args) {
            if (isInitial) {
                /** To fill the members for each fields into the object fieldCollections. */
                var fieldCnt = fields.length - 1;
                while (fieldCnt > -1) {
                    var members = Object.keys(pivotObj.engineModule.fieldList[fields[fieldCnt].Field].members);
                    var memberCnt = members.length;
                    var membersCollection = [];
                    for (var i = 0; i < memberCnt; i++) {
                        membersCollection.push({ Member: members[i], Checked: members[i] + '_' + false });
                    }
                    fieldCollections[fields[fieldCnt].Field] = membersCollection;
                    fieldCnt--;
                }
                values = fieldCollections[fields[0].Field];
                membersOrder.dataSource = values;
                membersOrder.dataBind();
                fieldsddl.dataBind();
                isInitial = false;
            }
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 },

    });
    pivotObj.appendTo('#PivotView');
    var fields = [
        { Field: 'Country', expandAll: false },
        { Field: 'Year', expandAll: false }
    ];
    var fieldsddl = new ej.dropdowns.MultiSelect({
        dataSource: fields,
        mode: 'CheckBox',
        showDropDownIcon: true,
        enabled: true,
        showClearButton: false,
        enableSelectionOrder: false,
        fields: { text: 'Field' },
        index: 0,
        select: function (args) {
            membersOrder.value = [];
            if (storeMembers.Country.length > 0 || storeMembers.Year.length > 0) {
                storeMembers = { 'Country': [], 'Year': [] };
                isInitial = true;
            }
            if (args.itemData.Field === 'Country') {
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                updateRowColumn(false, true, isColumnSelect);
                isRowSelect = true;
            }
            else if (args.itemData.Field === 'Year') {
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                updateRowColumn(false, isRowSelect, true);
                isColumnSelect = true;
            }
        },
        removed: function (args) {
            if (args.itemData.Field === 'Country') {
                updateRowColumn(false, false, isColumnSelect);
                isRowSelect = false;
            }
            else if (args.itemData.Field === 'Year') {
                updateRowColumn(false, isRowSelect, false);
                isColumnSelect = false;
            }
        },
        open: function (args) {
            args.popup.element.querySelector(".e-filter-parent").style.display = 'none';
        }
    });
    fieldsddl.appendTo('#expand-fields');
    var optionsdll = new ej.dropdowns.DropDownList({
        dataSource: options,
        fields: { value: 'value', text: 'text' },
        value: 'rowHeaders',
        width: '100%',
        change: function (args) {
            document.querySelector('.field_cls').style.display = 'none';
            document.querySelector('.field_cls_1').style.display = 'none';
            document.querySelector('.members_cls').style.display = 'none';
            document.querySelector('.apply_cls').style.display = 'none';
            if (args.value == 'allHeaders') {
                clear();
                pivotObj.setProperties({ dataSourceSettings: { expandAll: true, drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                pivotObj.refreshData();
            } else if (args.value == 'rowHeaders') {
                clear();
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                updateRowColumn(false, true, false);
            } else if (args.value == 'columnHeader') {
                clear();
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                updateRowColumn(false, false, true);
            } else if (args.value == 'specificFields') {
                document.querySelector('.field_cls').style.display = '';
            } else if (args.value == 'specificHeaders') {
                document.querySelector('.field_cls_1').style.display = '';
                document.querySelector('.members_cls').style.display = '';
                document.querySelector('.apply_cls').style.display = '';
            }
        }
    });
    optionsdll.appendTo('#expandall');
    var field1 = new ej.dropdowns.DropDownList({
        dataSource: fields,
        fields: { text: 'Field' },
        value: 'Country',
        width: '100%',
        change: function (args) {
            membersOrder.dataSource = fieldCollections[args.itemData.Field.toString()];
            membersOrder.value = getSelectedMembers(args.itemData.Field.toString());
            membersOrder.dataBind();
            field1.dataBind();
        }
    });
    field1.appendTo('#expand-fields-1');
    var membersOrder = new ej.dropdowns.MultiSelect({
        dataSource: values,
        mode: 'CheckBox',
        showDropDownIcon: true,
        showClearButton: false,
        enableSelectionOrder: false,
        fields: { text: 'Member' },
        select: function (args) {
            setMemberCheckedState(field1.itemData.Field, args.item.textContent, args.item.textContent + '_' + true);
            applyBtn.disabled = false;
            storeMembers[field1.itemData.Field].push(args.itemData.Member);

        },
        removed: function (args) {
            setMemberCheckedState(field1.itemData.Field, args.item.textContent, args.item.textContent + '_' + false);
            index = storeMembers[field1.itemData.Field].indexOf(args.itemData.Member);
            if (storeMembers[field1.itemData.Field].includes(args.itemData.Member)) {
                storeMembers[field1.itemData.Field].splice(index, 1);
            }
        },
        open: function (args) {
            args.popup.element.querySelector(".e-filter-parent").style.display = 'none';
        }
    });
    membersOrder.appendTo('#expand-members');
    var applyBtn = new ej.buttons.Button({
        isPrimary: true,
    });
    applyBtn.appendTo('#expand-apply');
    document.getElementById('expand-apply').onclick = function () {
        fieldsddl.value = [];
        isRowSelect = false;
        isColumnSelect = false;
        pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: storeMembers.Country }, { name: 'Year', items: storeMembers.Year }] } }, true);
        updateRowColumn(false, false, false);
    };

    /** To set the checked status of the members maintained in the object fieldCollections. */
    function setMemberCheckedState(field, member, checkedState) {
        var members = fieldCollections[field];
        var membersLength = members.length - 1;
        while (membersLength > -1) {
            if (members[membersLength].Member === member) {
                members[membersLength].Checked = checkedState;
                break;
            }
            membersLength--;
        }
    }

    /** To get the checked members/status here as string array. */
    function getSelectedMembers(field) {
        var membersColls = [];
        var members = fieldCollections[field];
        var membersLength = members.length - 1;
        while (membersLength > -1) {
            if (members[membersLength].Checked === members[membersLength].Member + '_' + true) {
                membersColls.push(members[membersLength].Member.toString());
            }
            membersLength--;
        }
        return membersColls;
    }

    function updateRowColumn(isExpand, isRowExpand, isColumnExpand) {
        pivotObj.setProperties({
            dataSourceSettings: {
                expandAll: isExpand, rows: [
                    { name: 'Country', expandAll: fieldsddl.dataSource[0].expandAll = isRowExpand },
                    { name: 'Products' }
                ], columns: [
                    { name: 'Year', expandAll: fieldsddl.dataSource[1].expandAll = isColumnExpand },
                    { name: 'Order_Source' }
                ]
            }
        }, true);
        pivotObj.refreshData();
    }

    function clear() {
        fieldsddl.value = [];
        isRowSelect = false;
        isColumnSelect = false;
        membersOrder.value = [];
        if (storeMembers.Country.length > 0 || storeMembers.Year.length > 0) {
            storeMembers = { 'Country': [], 'Year': [] };
            isInitial = true;
        }
    }
};
