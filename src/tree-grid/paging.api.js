this.default = function () {
    var type = [
        { id: 'All', type: 'All' },
        { id: 'Root', type: 'Root' }
    ];
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.sampleData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        columns: [
            { field: 'taskID', headerText: 'Task ID', textAlign: 'Right', width: 80 },
            { field: 'taskName', headerText: 'Task Name', width: 200 },
            { field: 'startDate', headerText: 'Start Date', textAlign: 'Right', width: 100, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
            { field: 'progress', headerText: 'Progress', textAlign: 'Right', width: 90 }
        ]
    });
    treeGridObj.appendTo('#TreeGrid');
    var pageSize = new ej.inputs.NumericTextBox({
        min: 1,
        max: 200,
        format: '##',
        value: 12,
        width: '100%',
        change: function (e) {
            pageSize.value = pageSize.value > treeGridObj.pageSettings.totalRecordsCount ?
                treeGridObj.pageSettings.totalRecordsCount : pageSize.value;
                treeGridObj.pageSettings.pageSize = pageSize.value;
            currentPage.max = Math.ceil(treeGridObj.pageSettings.totalRecordsCount / treeGridObj.pageSettings.pageSize);
        }
    });
    pageSize.appendTo('#pagesize');
    var sizemode = new ej.dropdowns.DropDownList({
        dataSource: type,
        fields: { text: 'type', value: 'id' },
        value: 'All',
        width: '100%',
        change: function (e) {
            var type = e.value;
            if (type === 'Root') {
                treeGridObj.pageSettings = { pageSizeMode: 'Root', pageSize: 2 };
            }
            else {
                treeGridObj.pageSettings = { pageSizeMode: 'All', pageSize: pageSize.value };
            }
            toggleInputs(type === 'All');
        }
    });
    sizemode.appendTo('#sizemode');
    var pageCount = new ej.inputs.NumericTextBox({
        min: 1,
        max: 4,
        format: '##',
        value: 2,
        width: '100%',
        change: function (e) {
            pageCount.value = pageCount.value > 8 ? 8 : pageCount.value;
            treeGridObj.pageSettings.pageCount = pageCount.value;
        }
    });
    pageCount.appendTo('#pagecount');
    var currentPage = new ej.inputs.NumericTextBox({
        min: 1,
        max: 17,
        format: '##',
        value: 1,
        width: '100%',
        change: function (e) {
            currentPage.value = currentPage.value > currentPage.max ? currentPage.max : currentPage.value;
            var pageNumber = currentPage.value;
            treeGridObj.goToPage(pageNumber);
        }
    });
    currentPage.appendTo('#currentpage');
    var enablePaging = new ej.buttons.CheckBox({ checked: true });
    enablePaging.appendTo('#allowCheck');
    document.getElementById('allowCheck').onclick = function () {
        treeGridObj.allowPaging = enablePaging.checked;
        toggleInputs(treeGridObj.allowPaging, true);
    };
    function paging(args) {
        if (args.requestType === 'paging') {
            currentPage.value = parseInt(args.currentPage, 10);
        }
    }
    function toggleInputs(state, isPager) {
        if (!ej.base.isNullOrUndefined(isPager)) {
            document.getElementsByClassName('con-prop1')[0].style.display = state ? 'table-row' : 'none';
        }
        var flag = sizemode.value === 'All';
        var elem = document.getElementsByClassName('con-prop2');
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.display = state && flag ? 'table-row' : 'none';
        }
    }
};