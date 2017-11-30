this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.productData,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        columns: [
            { field: 'ProductID', headerText: 'Product ID', width: 130, textAlign: 'right' },
            { field: 'ProductName', headerText: 'Product Name', width: 190 },
            { field: 'UnitPrice', headerText: 'Unit Price', width: 135, textAlign: 'right', format: 'C2', },
            { field: 'UnitsInStock', headerText: 'Units In Stock', width: 160, textAlign: 'right' }
        ],
        actionComplete: paging
    });
    grid.appendTo('#Grid');
    var pageSize = document.getElementById('pagesize');
    var pageCount = document.getElementById('counttxt');
    var currentPage = document.getElementById('pageno');
    var enablePaging = document.getElementById('allowCheck');
    enablePaging.onclick = function () {
        grid.allowPaging = enablePaging.checked;
        if (!grid.allowPaging) {
            pageCount.disabled = true;
            pageSize.disabled = true;
            currentPage.disabled = true;
        }
        else {
            pageCount.disabled = false;
            pageSize.disabled = false;
            currentPage.disabled = false;
        }
    };
    pageSize.onchange = function () {
        pageSize.value = parseInt(pageSize.value, 10) > grid.pageSettings.totalRecordsCount ?
            grid.pageSettings.totalRecordsCount.toString() : pageSize.value;
        grid.pageSettings.pageSize = parseInt(pageSize.value, 10);
        currentPage.max = Math.ceil(grid.pageSettings.totalRecordsCount / grid.pageSettings.pageSize).toString();
    };
    pageCount.onchange = function () {
        pageCount.value = parseInt(pageCount.value, 10) > 8 ? '8' : pageCount.value;
        grid.pageSettings.pageCount = parseInt(pageCount.value, 10);
    };
    currentPage.onchange = function () {
        currentPage.value = parseInt(currentPage.value, 10) > parseInt(currentPage.max, 10) ? currentPage.max : currentPage.value;
        var pageNumber = parseInt(currentPage.value, 10);
        grid.goToPage(pageNumber);
    };
    function paging(args) {
        if (args.requestType === 'paging') {
            currentPage.value = args.currentPage;
        }
    }
};