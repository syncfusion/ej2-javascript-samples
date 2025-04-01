var value = 'Frozen seafood';
var listObj;
var foods = [
    { food: 'Frozen seafood' },
    { food: 'Dairy' },
    { food: 'Edible' },
    { food: 'Solid Crystals' },
];
this.default = function () {
    var customAggregateFn = function (data) {
        var sampleData = ej.grids.getObject('result', data);
        var countLength;
        countLength = 0;
        sampleData.filter(function (item) {
            var data = ej.grids.getObject('category', item);
            if (data === value) {
                countLength++;
            }
        });
        return countLength;
    };
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.summaryData,
        childMapping: 'subtasks',
        width: 'auto',
        height: 400,
        treeColumnIndex: 1,
        dataBound: function () {
            if (!ej.base.isNullOrUndefined(listObj)) {
                listObj.destroy();
            }
            listObj = new ej.dropdowns.DropDownList({
                dataSource: foods,
                fields: { value: 'food' },
                placeholder: 'Select a Category',
                width: '160px',
                value: value,
                change: function () {
                    setTimeout(function () {
                        value = listObj.value.toString();
                        treeGridObj.refresh();
                    }, 300);
                }
            });
            listObj.appendTo('#customers');
        },
        columns: [
            { field: 'ID', headerText: 'S.No', width: 60, textAlign: 'Right' },
            { field: 'Name', headerText: 'Shipment Name', width: 170 },
            { field: 'category', headerText: 'Category', width: 260, minWidth: 260 },
            { field: 'units', headerText: 'Unit', width: 60 },
            { field: 'unitPrice', headerText: 'Unit Price($)', width: 85,  format: 'C0',  type: 'number', textAlign: 'Right' },
            { field: 'price', headerText: 'Price($)', width: 90,  format: 'C', textAlign: 'Right', type: 'number' },
        ],
        aggregates: [{
            showChildSummary: false,
            columns: [{
                    type: 'Custom',
                    customAggregate: customAggregateFn,
                    columnName: 'category',
                    format: 'C2',
                    footerTemplate: 'Count of <input type="text" id="customers" /> : ${Custom}'
                }]
        }],
        actionFailure: function (args){

        }
    });

    treeGridObj.appendTo('#TreeGrid');
};
