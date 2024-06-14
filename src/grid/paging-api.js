ej.base.L10n.load({
    'en-US': {
        'pager': {
            'currentPageInfo': '',
            'totalItemsInfo': '{1} to {2} of {0}',
        }
    }
});

this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.productData,
        locale: 'en-US',
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'ProductID', headerText: 'Product ID', width: 130, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
            { field: 'ProductName', headerText: 'Product Name', width: 190, validationRules: { required: true, minLength: 5 } },
            { field: 'UnitPrice', headerText: 'Unit Price', width: 135, textAlign: 'Right', format: 'C2', editType: 'numericedit' },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 160, textAlign: 'Right' }
        ],
        actionComplete: paging
    });
    grid.appendTo('#Grid');

    //Render NumericTextbox component for pageSize.
    var pageSize = new ej.inputs.NumericTextBox({
        min: 1,
        max: 200,
        value: 12,
        format: '##',
        change: function () {
            pageSize.value = pageSize.value > grid.pageSettings.totalRecordsCount ?
                grid.pageSettings.totalRecordsCount : pageSize.value;
            grid.pageSettings.pageSize = pageSize.value;
            currentPage.max = Math.ceil(grid.pageSettings.totalRecordsCount / grid.pageSettings.pageSize);
        }
    });
    pageSize.appendTo('#pagesize');

    //Render NumericTextbox component for pageCount.
    var pageCount = new ej.inputs.NumericTextBox({
        min: 1,
        max: 8,
        value: 2,
        format: '##',
        change: function () {
            pageCount.value = pageCount.value > 8 ? 8 : pageCount.value;
            grid.pageSettings.pageCount = pageCount.value;

        }
    });
    pageCount.appendTo('#pagecount');

    //Render NumericTextbox component for currenPage.
    var currentPage = new ej.inputs.NumericTextBox({
        min: 1,
        max: 17,
        value: 1,
        format: '##',
        change: function () {
            currentPage.value = currentPage.value > currentPage.max ? currentPage.max : currentPage.value;
            var pageNumber = currentPage.value;
            grid.goToPage(pageNumber);
        }
    });
    currentPage.appendTo('#currentpage');

    //Render checkbox component for enable Paging.
    var enablePaging = new ej.buttons.CheckBox({ checked: true });
    enablePaging.appendTo('#allowCheck');

   document.getElementById('allowCheck').onclick = function () {
        grid.allowPaging = enablePaging.checked;
        if (!grid.allowPaging) {
            pageCount.enabled = false;
            pageSize.enabled = false;
            currentPage.enabled = false;
        } else {
            pageCount.enabled = true;
            pageSize.enabled = true;
            currentPage.enabled = true;
        }
    };
    function paging(args) {
        if (args.requestType === 'paging') {
            currentPage.value = parseInt(args.currentPage, 10);
        }
    }
};