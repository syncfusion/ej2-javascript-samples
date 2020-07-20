this.default = function () {
    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    kanbanObj.appendTo('#Kanban');
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
    var addIndex = new ej.inputs.NumericTextBox({
        format: '###.##',
        value: 0,
        min: 0
    });
    addIndex.appendTo('#index');
    addIndex.max = kanbanObj.columns.length;
    var deleteIndex = new ej.inputs.NumericTextBox({
        format: '###.##',
        value: 0,
        min: 0
    });
    deleteIndex.appendTo('#deteteIndex');
    deleteIndex.max = kanbanObj.columns.length - 1;
    var statusData = ['Testing', 'Review', 'Validate'];
    var keyObj = new ej.dropdowns.DropDownList({
        width: '100%',
        dataSource: statusData,
        fields: { text: 'Status', value: 'Status' },
        placeholder: 'Key Field'
    });
    keyObj.appendTo('#key');
    var addFormObj = new ej.inputs.FormValidator('#addForm');
    var deleteFormObj = new ej.inputs.FormValidator('#deleteForm');
    document.getElementById('add').onclick = function () {
        var key = document.getElementById('key').value;
        var text = document.getElementById('text').value;
        var index = parseInt(document.getElementById('index').value, 10);
        if (kanbanObj.columns.length >= index && key !== "" && text !== "") {
            kanbanObj.addColumn({ keyField: key, headerText: text, showItemCount: true }, index);
            addIndex.max = kanbanObj.columns.length;
            deleteIndex.max = kanbanObj.columns.length - 1;
            addFormObj.reset();
        }
        else if (text === '') {
            dialogObj.content = 'Enter Column Header Text';
            dialogObj.show();
        }
        else if (key === '') {
            dialogObj.content = 'Enter Column Key Field';
            dialogObj.show();
        }
        else if (!index) {
            dialogObj.content = 'Enter Column Index';
            dialogObj.show();
        }
    };
    document.getElementById('delete').onclick = function () {
        var index = parseInt(document.getElementById('deteteIndex').value, 10);
        if (kanbanObj.columns.length > 1) {
            if (kanbanObj.columns.length >= (index + 1)) {
                kanbanObj.deleteColumn(index);
                addIndex.max = kanbanObj.columns.length;
                deleteIndex.max = kanbanObj.columns.length - 1;
                deleteFormObj.reset();
            }
            else {
                dialogObj.content = 'Enter Column Index';
                dialogObj.show();
            }
        }
        else {
            dialogObj.content = 'Atleast one column must be displayed in kanban';
            dialogObj.show();
        }
    };
    document.getElementById('addForm').addEventListener('submit', function (e) {
        e.preventDefault();
    });
    document.getElementById('deleteForm').addEventListener('submit', function (e) {
        e.preventDefault();
    });
    function dlgButtonClick() {
        dialogObj.hide();
    }
};