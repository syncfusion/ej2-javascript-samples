this.default = function () {
    var treeObj;
    function nodeCheck(args) {
        var checkedNode = [args.node];
        if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
            var getNodeDetails = treeObj.getNode(args.node);
            if (getNodeDetails.isChecked == 'true') {
                treeObj.uncheckAll(checkedNode);
            } else {
                treeObj.checkAll(checkedNode);
            }
        }
    }
    function renderCustomColumnChooser(targetLHTMLElement, columns) {
        var treeData;
        var parentNodes = [
            { id: 1, name: 'Order Details', hasChild: true, expanded: true },
            { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
            { id: 3, name: 'Price Details', hasChild: true, expanded: true }
        ];
        if (columns && columns.length) {
            treeData = columns.map(function (column) {
                var parentId;
                switch (column.field) {
                    case 'orderID':
                    case 'orderName':
                    case 'orderDate':
                        parentId = 1;
                        break;
                    case 'shipMentCategory':
                    case 'shippedDate':
                    case 'units':
                        parentId = 2;
                        break;
                    case 'unitPrice':
                    case 'price':
                        parentId = 3;
                        break;
                }
                return {
                    id: column.uid,
                    name: column.headerText,
                    pid: parentId,
                    isChecked: column.visible
                };
            });
            var uniquePids = [];
            treeData.forEach(function (item) {
                if (uniquePids.indexOf(item.pid) === -1) {
                    uniquePids.push(item.pid);
                }
            });
            var filteredParents = parentNodes.filter(function (parent) {
                return uniquePids.indexOf(parent.id) !== -1;
            });
            treeData = treeData.concat(filteredParents);
        } else {
            treeData = [];
        }
        treeObj = new ej.navigations.TreeView({
            fields: { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
            showCheckBox: true,
            nodeClicked: nodeCheck,
            keyPress: nodeCheck,
            enableRtl: treegrid.enableRtl ? true : false,
            cssClass: "no-border"
        });
        if (columns && columns.length) {
            treeObj.appendTo(targetLHTMLElement);
        } else {
            var noRecordDiv = document.createElement('div');
            noRecordDiv.innerHTML = 'No Matches Found';
            noRecordDiv.className = 'no-record-text';
            targetLHTMLElement.appendChild(noRecordDiv);
        }
    }
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.stackedData,
        childMapping: 'subtasks',
        height: 350,
        treeColumnIndex: 1,
        clipMode: 'EllipsisWithTooltip',
        showColumnChooser: true,
        allowPaging: true,
        toolbar: ['ColumnChooser'],
        columnChooserSettings: {
            headerTemplate: '#columnchooser-headertemplate', footerTemplate: '#columnchooser-footertemplate', enableSearching: true,
            template: '#column-chooser-template',
            renderCustomColumnChooser: renderCustomColumnChooser, ignoreAccent: true, operator: 'startsWith'
        },
        pageSettings: { pageCount: 5 },
        columns: [
            {
                headerText: 'Order Details', textAlign: 'Center', columns: [
                    { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90, showInColumnChooser: false },
                    { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 190 },
                    { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', width: 110, format: 'yMd' },
                ]
            },
            {
                headerText: 'Shipment Details', textAlign: 'Center', columns: [
                    { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 150 },
                    { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 120, format: 'yMd' },
                    { field: 'units', headerText: 'Units', textAlign: 'Right', width: 80 },
                ]
            },
            {
                headerText: 'Price Details', textAlign: 'Center', columns: [
                    { field: 'unitPrice', headerText: 'Price per unit', format: 'c0', type: 'number', width: 120, textAlign: 'Right' },
                    { field: 'price', headerText: 'Total Price', width: 115, format: 'c', type: 'number', textAlign: 'Right' }
                ]
            }
        ],
        created: onCreated
    });
    treegrid.appendTo('#TreeGrid');

    function onCreated() {
        var submitButton = new ej.buttons.Button();
        submitButton.appendTo('#submitButton');
        if (document.getElementById('submitButton')) {
            (document.getElementById('submitButton')).onclick = function (e) {
                columnChooserSubmit();
            };
        }
        var abortButton = new ej.buttons.Button();
        abortButton.appendTo('#abortButton');
        if (document.getElementById('abortButton')) {
            (document.getElementById('abortButton')).onclick = function (e) {
                (treegrid.grid.columnChooserModule).hideDialog();
            };
        }
    }

    function columnChooserSubmit() {
        var checkedElements = [];
        var uncheckedElements = [];
        var showColumns = treegrid.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
        showColumns = showColumns.map(function (col) { return col.headerText; });
        var treeItems = document.querySelectorAll('.e-list-item');

        treeItems.forEach(function (item) {
            var itemDetails = treeObj.getNode(item);
            if (!itemDetails.hasChildren) {
                if (item.getAttribute('aria-checked') === 'true') {
                    checkedElements.push(itemDetails.text);
                } else {
                    uncheckedElements.push(itemDetails.text);
                }
            }
        });
        showColumns = showColumns.filter(function (col) {
            return uncheckedElements.indexOf(col) === -1;
        });
        checkedElements.forEach(function (item) {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        treegrid.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    }
};