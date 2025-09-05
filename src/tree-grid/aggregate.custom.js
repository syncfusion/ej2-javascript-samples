var selectedCategory = 'Seafood';
var categoryFilterDropdown;
var categoryOptions = [
    { food: 'Seafood' },
    { food: 'Dairy' },
    { food: 'Edible' },
    { food: 'Crystal' },
];

//Handles the 'excelQueryCellInfo' event to customize aggregate cells during Excel export.
var formatExcelAggregateCell = function (args) {
    if (args.cell.column.headerText === "Category") {
        args.style.value = "Count of " + selectedCategory + " : " + args.row.data.category.Custom;
    }
};

//Handles the 'pdfQueryCellInfo' event to customize aggregate cells during PDF export.
var formatPdfAggregateCell = function (args) {
    if (args.cell.column.headerText === "Category") {
        args.value = "Count of " + selectedCategory + " : " + args.row.data.category.Custom;
    }
};

this.default = function () {
    var treeGrid;
    //lters records based on the selected category.
    var getRecordsForSelectedCategory = function (data) {
        var allRecords = data.result ? ej.grids.getObject("result", data) : data;
        return allRecords.filter(function (record) {
            return ej.grids.getObject('category', record) === selectedCategory;
        });
    };

    //Calculates the count of items in the selected category.
    var calculateCategoryCount = function (data) {
        return getRecordsForSelectedCategory(data).length;
    };

    //Initializes the category filter DropDownList in the footer on dataBound event.
    var onGridDataBound = function () {
        if (categoryFilterDropdown) {
            categoryFilterDropdown.destroy();
        }
        categoryFilterDropdown = new ej.dropdowns.DropDownList({
            dataSource: categoryOptions,
            fields: { value: 'food' },
            placeholder: 'Select a Category',
            width: '120px',
            value: selectedCategory,
            change: function () {
                setTimeout(function () {
                    selectedCategory = categoryFilterDropdown.value;
                    treeGrid.refresh();
                }, 100);
            }
        });
        // Use a more descriptive ID for the dropdown container.
        categoryFilterDropdown.appendTo('#category-filter-container');
    };

    treeGrid = new ej.treegrid.TreeGrid({
        dataSource: window.summaryData,
        childMapping: 'subtasks',
        width: 'auto',
        height: 400,
        treeColumnIndex: 1,
        gridLines: 'Both',
        allowExcelExport: true,
        allowPdfExport: true,
        pdfAggregateQueryCellInfo: formatPdfAggregateCell,
        excelAggregateQueryCellInfo: formatExcelAggregateCell,
        toolbar: ["ExcelExport", "PdfExport", "CsvExport"],
        dataBound: onGridDataBound,
        columns: [
            { field: 'ID', headerText: 'Order ID', width: 115, textAlign: 'Left' },
            { field: 'Name', headerText: 'Shipment Name', textAlign: 'Left', width: 230, clipMode: 'EllipsisWithTooltip' },
            { field: 'shipmentDate', headerText: 'Shipment Date', width: 135, type: 'date', format: 'yMd', textAlign: 'Right' },
            { field: 'category', headerText: 'Category', width: 230, minWidth: 210 },
            { field: 'units', headerText: 'Total Units', width: 110, textAlign: 'Right' },
            { field: 'unitPrice', headerText: 'Unit Price($)', width: 110, format: 'C2', type: 'number', textAlign: 'Right' },
            { field: 'price', headerText: 'Price($)', width: 190, format: 'C0', textAlign: 'Right', type: 'number' },
        ],
        aggregates: [{
            showChildSummary: false,
            columns: [
                {
                    type: 'Custom',
                    customAggregate: calculateCategoryCount,
                    columnName: 'category',
                    format: 'C2',
                    footerTemplate: function (data) { return '<div><span>Count of <input type="text" id="category-filter-container" /> : ' + data.Custom + '</span></div>'; }
                }
            ]
        }]
    });
    treeGrid.appendTo('#TreeGrid');

    treeGrid.toolbarClick = function (args) {
        var gridElementId = treeGrid.grid.element.id;
        switch (args.item.id) {
            case gridElementId + '_excelexport':
                treeGrid.excelExport();
                break;
            case gridElementId + '_pdfexport':
                treeGrid.pdfExport({ pageOrientation: 'Landscape' });
                break;
            case gridElementId + '_csvexport':
                treeGrid.csvExport();
                break;
        }
    };
};