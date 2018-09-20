/**
 * PivotView Filtering Sample.
 */
this.default = function () {
    var fieldCollections = {};
    var isInitial = true;
    var type = ['Include', 'Exclude'];
    var values = [];
    var fields = ['Country', 'Products', 'Year'];
    ej.base.enableRipple(false);
    var pivotGridObj = new ej.pivotview.PivotView({
        dataSource: {
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }],
            data: window.Pivot_Data,
            expandAll: false
        },
        dataBound: function (args) {
            if (isInitial) {
                /** To fill the members for each fields into the object fieldCollections. */
                var fieldCnt = fields.length - 1;
                while (fieldCnt > -1) {
                    var members = Object.keys(pivotGridObj.engineModule.fieldList[fields[fieldCnt]].members);
                    var memberCnt = members.length - 1;
                    var memberColl = [];
                    while (memberCnt > -1) {
                        memberColl.push({ Member: members[memberCnt], Checked: members[memberCnt] + '_' + false });
                        memberCnt--;
                    }
                    fieldCollections[fields[fieldCnt]] = memberColl;
                    fieldCnt--;
                }
                values = fieldCollections[fields[0]];
                isInitial = false;
            }
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView');
    var valuesddl = new ej.dropdowns.MultiSelect({
        dataSource: values,
        mode: 'CheckBox',
        showDropDownIcon: true,
        showClearButton: false,
        enableSelectionOrder: false,
        fields: { text: 'Member' },
        select: function (args) {
            applyBtn.disabled = false;
            setMemberCheckedState(fieldsddl.itemData, args.item.textContent, args.item.textContent + '_' + true);
        },
        removed: function (args) {
            setMemberCheckedState(fieldsddl.itemData, args.item.textContent, args.item.textContent + '_' + false);
            setApplyBtnState();
        },
        open: function (args) {
            args.popup.element.querySelector(".e-filter-parent").style.display = 'none';
        }
    });
    valuesddl.appendTo('#values');
    var fieldsddl = new ej.dropdowns.DropDownList({
        dataSource: fields,
        index: 0,
        width: '98%',
        change: function (args) {
            valuesddl.dataSource = fieldCollections[args.value.toString()];
            valuesddl.value = getSelectedMembers(args.value.toString());
            valuesddl.dataBind();
        }
    });
    fieldsddl.appendTo('#fields');
    var typeddl = new ej.dropdowns.DropDownList({
        dataSource: type,
        width: '98%',
        index: 1
    });
    typeddl.appendTo('#type');
    var applyBtn = new ej.buttons.Button({
        iconCss: 'e-icons e-play-icon', isPrimary: true, disabled: true
    });
    applyBtn.appendTo('#apply');
    document.getElementById('apply').onclick = function () {
        /** You can set your filter settings here. */
        pivotGridObj.dataSource.filterSettings = [
            { name: fields[0], items: getSelectedMembers(fields[0]), type: typeddl.itemData.toLowerCase() },
            { name: fields[1], items: getSelectedMembers(fields[1]), type: typeddl.itemData.toLowerCase() },
            { name: fields[2], items: getSelectedMembers(fields[2]), type: typeddl.itemData.toLowerCase() },
        ];
    };
    /** To get the checked members/status here as string array. */
    function getSelectedMembers(field) {
        var membersColl = [];
        var members = fieldCollections[field];
        var memLength = members.length - 1;
        while (memLength > -1) {
            if (members[memLength].Checked === members[memLength].Member + '_' + true) {
                membersColl.push(members[memLength].Member.toString());
            }
            memLength--;
        }
        return membersColl;
    }
    /** To set the checked status of the members maintained in the object fieldCollections. */
    function setMemberCheckedState(field, member, checkedState) {
        var members = fieldCollections[field];
        var memLength = members.length - 1;
        while (memLength > -1) {
            if (members[memLength].Member === member) {
                members[memLength].Checked = checkedState;
                break;
            }
            memLength--;
        }
    }

    /** To set disabled/enabled state in the Apply button. */
    function setApplyBtnState() {
        var fieldArray = ['Country', 'Products', 'Year'];
        var loopCount = fieldArray.length;
        var isSelected = false;
        while (loopCount) {
            if (getSelectedMembers(fieldArray[loopCount - 1]).length > 0) {
                isSelected = true;
                break;
            }
            loopCount--;
        }
        applyBtn.disabled = !isSelected;
    }
};
