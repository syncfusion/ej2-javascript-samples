this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        allowSelection: true,
        selectionSettings: { type: 'Multiple', mode: 'Row' },
        treeColumnIndex: 1,
        toolbar: [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }],
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 70 },
            { field: 'taskName', headerText: 'Task Name', width: 200, textAlign:'Left' },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 100, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 }
        ],
        toolbarClick: function (args) {
            if(treeGridObj.getSelectedRecords().length>0) {
                var withHeader = false;
                if (args.item.id === 'copyHeader') {
                    withHeader = true;
                }
                treeGridObj.copy(withHeader);
            } else {
                alertDialogObj.show();
            }
        }
    });
    treeGridObj.appendTo('#TreeGrid');

    var alertDialogObj = new ej.popups.Dialog({
        header: 'Copy with Header',
        content: 'Atleast one row should be selected to copy with header',
        showCloseIcon: false,
        target: '.control-section',
        buttons: [{
            click: alertDlgBtnClick, buttonModel: { content: 'OK', isPrimary: true }
        }],
        width: '300px',
        visible: false,
        animationSettings: { effect: 'None' }
    });
    alertDialogObj.appendTo('#alertDialog');
    function alertDlgBtnClick() {
        alertDialogObj.hide();
    }

    var mode = [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ];
    var dropDownMode = new ej.dropdowns.DropDownList({
        dataSource: mode,
        width:'110px',
        fields: { text: 'mode', value: 'id' },
        value: 'Parent',
        change: function (e) {
            var mode = e.value;
            treeGridObj.copyHierarchyMode = mode;
        }
    });
    dropDownMode.appendTo('#mode');
};
