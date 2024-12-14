this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.categoryData,
        allowPaging: true,
        pageSettings: { pageCount: 2 },
        allowGrouping: true,
        allowReordering: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        columns: [
            { field: 'CategoryName', headerText: 'Category Name', width: 170 },
            { field: 'ProductName', headerText: 'Product Name', width: 170 },
            { field: 'QuantityPerUnit', headerText: 'Quantity Per Unit', width: 170, allowGrouping: false },
        ],
        load: load,
        created: create,
        actionBegin: actionBegin,
        actionComplete: actionComplete,
        dataBound: dataBound,
        rowSelecting: rowSelecting,
        rowSelected: rowSelected,
        columnDragStart: columnDragStart,
        columnDrag: columnDrag,
        columnDrop: columnDrop
    });
    grid.appendTo('#Grid');
    
    // sets the clear button
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');

    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };
    function columnDragStart() {
        appendElement('Grid <b>columnDragStart</b> event called<hr>');
    }
    function columnDrop() {
        appendElement('Grid <b>columnDrop</b> event called<hr>');
    }
    function columnDrag() {
        appendElement('Grid <b>columnDrag</b> event called<hr>');
    }
    function load() {
        appendElement('Grid <b>load</b> event called<hr>');
    }
    function create() {
        appendElement('Grid <b>create</b> event called<hr>');
    }
    function actionBegin() {
        appendElement('Grid <b>actionBegin</b> event called<hr>');
    }
    function actionComplete() {
        appendElement('Grid <b>actionComplete</b> event called<hr>');
    }
    function dataBound() {
        appendElement('Grid <b>dataBound</b> event called<hr>');
    }
    function rowSelecting() {
        appendElement('Grid <b>rowSelecting</b> event called<hr>');
    }
    function rowSelected() {
        appendElement('Grid <b>rowSelected</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
};