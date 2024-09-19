this.default = function () {
    var numElement;
    var stringElement;
    var minElement;
    var maxElement;
    var ddElement;
    var minTextBox;
    var maxTextBox;
    var templateOptionsNumericTextBox = {
        create: function () {
            var container = document.createElement('div');
            var label = document.createElement('div');
            label.classList.add('e-cus-label');
            label.innerText = 'Id';
            numElement = document.createElement('input');
            numElement.classList.add('e-fltrtemp-focus');
            container.append(label);
            container.append(numElement);
            return container;
        },
        write: function () {
            var numericTextBox = new ej.inputs.NumericTextBox({
                format: 'n'
            });
            numericTextBox.appendTo(numElement);
        },
    };
    var templateOptionsStringTextBox = {
        create: function () {
            var container = document.createElement('div');
            var label = document.createElement('div');
            label.classList.add('e-cus-label');
            label.innerText = 'Name';
            stringElement = document.createElement('input');
            stringElement.classList.add('e-fltrtemp-focus');
            container.append(label);
            container.append(stringElement);
            return container;
        },
        write: function () {
            var stringTextBox = new ej.inputs.TextBox();
            stringTextBox.appendTo(stringElement);
        },
    };
    var templateOptionsMinMax = {
        create: function () {
            var container = document.createElement('div');
            container.classList.add('e-flex-layout');
            var minContainer = document.createElement('div');
            minContainer.classList.add('e-min-max-separator');
            var minLabel = document.createElement('div');
            minLabel.classList.add('e-cus-label');
            minLabel.innerText = 'Min';
            minElement = document.createElement('input');
            minElement.classList.add('e-fltrtemp-focus');
            minContainer.append(minLabel);
            minContainer.append(minElement);
            var maxContainer = document.createElement('div');
            var maxLabel = document.createElement('div');
            maxLabel.classList.add('e-cus-label');
            maxLabel.innerText = 'Max';
            maxElement = document.createElement('input');
            maxElement.classList.add('e-fltrtemp-focus');
            maxContainer.append(maxLabel);
            maxContainer.append(maxElement);
            container.append(minContainer);
            container.append(maxContainer);
            return container;
        },
        write: function () {
            minTextBox = new ej.inputs.NumericTextBox({
                format: 'n'
            });
            minTextBox.appendTo(minElement);
            maxTextBox = new ej.inputs.NumericTextBox({
                format: 'n'
            });
            maxTextBox.appendTo(maxElement);
        },
    };
    var templateOptionsDropDown = {
        create: function () {
            var container = document.createElement('div');
            var label = document.createElement('div');
            label.classList.add('e-cus-label');
            label.innerText = 'Status';
            ddElement = document.createElement('input');
            container.append(label);
            container.append(ddElement);
            return container;
        },
        write: function () {
            var dropDown = new ej.dropdowns.DropDownList({
                cssClass: 'e-fltrtemp-focus',
                dataSource: ['Both', 'true', 'false'],
                value: 'Both',
                change: function (args) {
                    if (args.value !== 'Both') {
                        grid.filterByColumn('Discontinued', 'equal', args.value === 'true' ? true : false);
                    }
                    else {
                        grid.removeFilteredColsByField('Discontinued');
                    }
                }
            });
            dropDown.appendTo(ddElement);
        },
    };
    var dataBound = function () {
        var filterBarOperatorDiv = grid.getHeaderTable().querySelector('.e-filterdiv.e-fltrinputdiv');
        if (!filterBarOperatorDiv.querySelector('.e-cus-label')) {
            var label = document.createElement('div');
            label.classList.add('e-cus-label');
            label.innerText = 'Stock';
            filterBarOperatorDiv.insertBefore(label, filterBarOperatorDiv.firstChild);
        }
    };
    var keyPressed = function (args) {
        if (args.keyCode === 13) {
            var target = args.target;
            var th = ej.base.closest(target, 'th');
            if (th && th.classList.contains('e-filterbarcell') && th.hasAttribute('e-mappinguid') && grid.getColumnByUid(th.getAttribute('e-mappinguid')).field === 'UnitPrice') {
                args.cancel = true;
                if (minTextBox.element.value || maxTextBox.element.value) {
                    var filterColumns = grid.filterSettings.columns.filter(function (data) { return data.field !== 'UnitPrice'; });
                    if (minTextBox.element.value) {
                        filterColumns.push({
                            field: 'UnitPrice',
                            operator: 'greaterthanorequal',
                            predicate: 'and',
                            value: parseFloat(minTextBox.element.value),
                        });
                    }
                    if (maxTextBox.element.value) {
                        filterColumns.push({
                            field: 'UnitPrice',
                            operator: 'lessthanorequal',
                            predicate: 'and',
                            value: parseFloat(maxTextBox.element.value),
                        });
                    }
                    setTimeout(function () {
                        grid.setProperties({ filterSettings: { columns: filterColumns } });
                    }, 0);
                }
                else {
                    var unitPriceColumns = grid.filterSettings.columns.filter(function (data) { return data.field === 'UnitPrice'; });
                    if (unitPriceColumns.length) {
                        grid.removeFilteredColsByField('UnitPrice');
                    }
                }
            }
        }
    };
    var grid = new ej.grids.Grid({
        dataSource: window.productData,
        allowPaging: true,
        allowFiltering: true,
        allowSorting: true,
        filterSettings: { showFilterBarOperator: true, showFilterBarStatus: false },
        gridLines: 'Both',
        columns: [
            {
                field: 'ProductID',
                headerText: 'Product ID',
                width: 120,
                textAlign: 'Right',
                isPrimaryKey: true,
                filterBarTemplate: templateOptionsNumericTextBox,
            },
            {
                field: 'ProductName',
                headerText: 'Product Name',
                width: 220,
                filterBarTemplate: templateOptionsStringTextBox,
            },
            {
                field: 'UnitPrice',
                headerText: 'Price',
                width: 200,
                format: 'C2',
                textAlign: 'Right',
                filterBarTemplate: templateOptionsMinMax
            },
            { field: 'UnitsInStock', headerText: 'Stock', width: 120, format: 'N', textAlign: 'Right' },
            {
                field: 'Discontinued',
                displayAsCheckBox: true,
                type: 'boolean',
                headerText: 'Discontinued',
                width: 150,
                filterBarTemplate: templateOptionsDropDown,
            },
        ],
        dataBound: dataBound,
        pageSettings: { pageCount: 5 },
        keyPressed: keyPressed
    });
    grid.appendTo('#Grid');
};
