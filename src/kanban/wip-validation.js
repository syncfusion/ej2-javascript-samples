this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object.
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open', allowToggle: true, showItemCount: true, minCount: 6, maxCount: 8 },
            { headerText: 'In Progress', keyField: 'InProgress', showItemCount: true, allowToggle: true, minCount: 2 },
            { headerText: 'Done', keyField: 'Close', showItemCount: true, allowToggle: true, maxCount: 4 },
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        swimlaneSettings: {
            keyField: 'Assignee',
            allowDragAndDrop: true
        }
    });
    kanbanObj.appendTo('#Kanban');
    var constrainType = new ej.dropdowns.DropDownList({
        width: '100%',
        change: changeContraintType,
    });
    constrainType.appendTo('#type');
    function changeContraintType(args) {
        kanbanObj.constraintType = args.value;
    }
    var dialogObj = new ej.popups.Dialog({
        header: 'Validation',
        isModal: true,
        width: 350,
        showCloseIcon: true,
        visible: false,
        buttons: [{
            click: dlgButtonClick,
            buttonModel: { content: 'OK', isPrimary: true }
        }]
    });
    dialogObj.appendTo('#Dialog');
    function dlgButtonClick() {
        dialogObj.hide();
    }
    var minimum = new ej.inputs.NumericTextBox({
        format: '###.##',
        min: 0
    });
    minimum.appendTo('#minIndex');
    var maximum = new ej.inputs.NumericTextBox({
        format: '###.##',
        min: 0
    });
    maximum.appendTo('#maxIndex');
    var statusData = [
        { Id: 0, text: 'To Do' },
        { Id: 1, text: 'In Progress' },
        { Id: 2, text: 'Done' }
    ];
    var keyObj = new ej.dropdowns.DropDownList({
        width: '100%',
        dataSource: statusData,
        fields: { text: 'text', value: 'Id' },
        placeholder: 'Header Text ',
        change: changeColumns,
    });
    keyObj.appendTo('#dropdownHeader');
    function changeColumns(args) {
        var changeIndex = args.value;
        if (changeIndex !== null) {
            minimum.value = kanbanObj.columns[changeIndex].minCount;
            maximum.value = kanbanObj.columns[changeIndex].maxCount;
        }
    }
    var addFormObj = new ej.inputs.FormValidator('#column');
    document.getElementById('validate').onclick = function () {
        var colindex = keyObj.index;
        var colText = document.getElementById('key').value;
        var colmin = parseInt(document.getElementById('minIndex').value, 10);
        var colmax = parseInt(document.getElementById('maxIndex').value, 10);
        if (colText === '') {
            dialogObj.content = 'Select column Header Text';
            dialogObj.show();
        }
        else if (colText !== '' && minimum.value === null && maximum.value === null) {
            dialogObj.content = 'Enter column min-count or max-count';
            dialogObj.show();
        }
        else {
            kanbanObj.columns[colindex].headerText = colText;
            if (minimum.value !== null) {
                kanbanObj.columns[colindex].minCount = colmin;
            }
            if (minimum.value !== null) {
                kanbanObj.columns[colindex].maxCount = colmax;
            }
            addFormObj.reset();
        }
    };
    document.getElementById('column').addEventListener('submit', function (e) { return e.preventDefault(); });
};