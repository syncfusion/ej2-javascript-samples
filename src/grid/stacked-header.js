this.default = function () {
  var treeObj;
  var treeData = []; 
  var stackedHeaderData = [];
  var customerName = ["VINET", "TOMSP", "HANAR", "VICTE", "SUPRD", "CHOPS", "RICSU", "WELLI", "HILAA", "ERNSH", "CENTC", "OTTIK", "QUEDE"];
  var shipCities = ["Reims", "Münster", "Rio de Janeiro", "Lyon", "Charleroi", "Bern", "Genève", "Resende", "San Cristóbal", "Graz", "México D.F.", "Köln", "Rio de Janeiro"];
  var shipCountries = ["France", "Germany", "Brazil", "Belgium", "Switzerland", "Austria", "Mexico", "Venezuela"];
  var statusOptions = ["Delivered", "Delivered", "In-progress", "Delivered", "In-progress", "In-progress", "Delivered", "Delivered", "In-progress", "Delivered"];
  var date = [new Date(1704067200000), new Date(1706745600000), new Date(1730467200000), new Date(1727788800000), new Date(1725206400000), new Date(1722528000000), new Date(1719849600000), new Date(1717312000000), new Date(1714720000000), new Date(1712041600000), new Date(1709459200000), new Date(1706781000000), new Date(1704288000000)];
  var freightValues = [10.5, 20.75, 30.0, 40.25, 50.6, 60.85, 70.9, 80.1, 90.45, 100.55];
  var feedbackValues = [1, 2, 3, 4, 5];
  
  for (var i = 1; i <= 830; i++) {
    stackedHeaderData.push({
        OrderID: 150000 + i,
        CustomerID: 1000 + i,
        CustomerName: customerName[i % customerName.length],
        OrderDate: date[i % date.length],
        ShippedDate: date[i % date.length],
        Freight: freightValues[i % freightValues.length],
        ShipName: customerName[i % customerName.length] + " Logistics",
        ShipAddress: "Address " + i,
        ShipCity: shipCities[i % shipCities.length],
        ShipRegion: null,
        ShipCountry: shipCountries[i % shipCountries.length],
        Year: 2025,
        Salary: Math.floor(Math.random() * 30000) + 25000,
        Feedback: statusOptions[i % statusOptions.length] === "In-progress" ? 0 : feedbackValues[i % feedbackValues.length],
        Status: statusOptions[i % statusOptions.length]
  });
}

  function renderCustomColumnChooser(targetLHTMLElement, columns) {  
      var parentNodes = [
            { id: 1, name: 'Order Details', hasChild: true, expanded: true },
            { id: 2, name: 'Shipping Details', hasChild: true, expanded: true },
            { id: 3, name: 'Delivery Status', hasChild: true, expanded: true }
      ];
      if (columns && columns.length) {
        treeData = columns.map(function(column) {
          var parentId;
          switch (column.field) {
            case 'OrderID':
            case 'OrderDate':
              parentId = 1;
              break;
            case 'ShipCountry':
            case 'Freight':
                parentId = 2;
                break;
            case 'Status':
            case 'Feedback':
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
        treeData.forEach(function(item) {
          if (uniquePids.indexOf(item.pid) === -1) {
            uniquePids.push(item.pid);
          }
        });
        var filteredParents = parentNodes.filter(function(parent) {
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
        enableRtl: grid.enableRtl ? true : false,
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

    window.feedbackDetail = function (e) {
        var temp = document.getElementsByTagName('template')[0];
        var cloneTemplate = temp.content.cloneNode(true);
        var feedbackElement = cloneTemplate.querySelector('.feedback');
        var rating = new ej.inputs.Rating({
          value: e.Feedback,
          readOnly: true,
          cssClass: 'custom-rating',
        });
        rating.appendTo(feedbackElement);
        return feedbackElement.ej2_instances[0].wrapper.outerHTML;
    };

    var grid = new ej.grids.Grid({
        dataSource: stackedHeaderData,
        showColumnChooser: true,
        allowPaging: true,
        allowResizing: true,
        pageSettings: { pageCount: 5 },
        allowSorting: true,
        allowMultiSorting:true,
        allowFiltering: true,
        enableHover: false,
        clipMode: 'EllipsisWithTooltip',
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columnChooserSettings: {
            headerTemplate: '#ccHeadertemplate',
            template: '#column-chooser-template', 
            footerTemplate: '#ccFootertemplate', 
            renderCustomColumnChooser : renderCustomColumnChooser,
            enableSearching: true,
        },
        columns: [
            {
                field: 'CustomerID',
                headerText: 'Customer ID',
                textAlign: 'Right',
                width: 160,
                minWidth: 100,
                isPrimaryKey: true,
                showInColumnChooser: false,
                validationRules: { required: true, number: true }
            },
            {
                field: 'CustomerName',
                headerText: 'Name',
                width: 100,
                minWidth: 100,
            },
            {
                headerText: 'Order Details',
                textAlign: 'Center',
                columns: [
                    {
                        field: 'OrderID',
                        headerText: 'ID',
                        textAlign: 'Right',
                        width: 90,
                        minWidth: 90,
                    },
                    {
                        field: 'OrderDate',
                        headerText: 'Date',
                        width: 110,
                        minWidth: 100,
                        textAlign: 'Right',
                        format: 'yMd',
                        editType: 'datepickeredit',
                    },
                ],
            },
            {
                headerText: 'Shipping Details',
                textAlign: 'Center',
                columns: [
                    {
                        field: 'ShipCountry',
                        headerText: 'Country',
                        textAlign: 'Left',
                        width: 115,
                        minWidth: 100,
                        editType: 'dropdownedit', 
                        validationRules: { required: true },
                        template: '#locationTemplate'
                    },
                    {
                        field: 'Freight',
                        headerText: 'Charges',
                        textAlign: 'Right',
                        width: 130,
                        minWidth: 100,
                        editType: 'numericedit',
                        format: 'C2',
                        validationRules: { required: true, number: true }
                    },
                ],
            },
            {
                headerText: 'Delivery Status',
                textAlign: 'Center',
                columns: [
                    {
                        field: 'Status',
                        headerText: 'Status',
                        textAlign: 'Center',
                        editType: 'dropdownedit', validationRules: { required: true, },
                        width: 110,
                        minWidth: 100,
                    },
                    {
                        field: 'Feedback',
                        headerText: 'Feedback',
                        textAlign: 'Center',
                        editType: 'numericedit',
                        allowResizing: false,
                        validationRules: { required: true, min: 0, max: 5 },
                        width: 130,
                        minWidth: 100,
                        template: '#feedbackTemplate',
                    },
                ],
            },
        ],
        queryCellInfo: queryCellInfo,
        created: onCreated
    });
    grid.appendTo('#Grid');

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

    function queryCellInfo(args) {
      if (args.column.field === 'Status') {
          if (args.data[args.column.field] === 'Delivered') {
              args.cell.classList.remove('e-inprogress');
              args.cell.classList.add('e-delivered');
          } else {
              args.cell.classList.remove('e-delivered');
              args.cell.classList.add('e-inprogress');
          }
      }
    }
    
    function onCreated() {
        var submitButton = new ej.buttons.Button();
        submitButton.appendTo('#submitButton');
        if (document.getElementById('submitButton')) {
            document.getElementById('submitButton').onclick = function () {
                columnChooserSubmit();
            };
        }
        
        var abortButton = new ej.buttons.Button();
        abortButton.appendTo('#abortButton');
        if (document.getElementById('abortButton')) {
            document.getElementById('abortButton').onclick = function () {
                grid.columnChooserModule.hideDialog();
            };
        }
    }
    onCreated();

    function columnChooserSubmit() {
        var checkedElements = [];
        var uncheckedElements = [];
        var showColumns = grid.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
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
            return !uncheckedElements.includes(col);
        });
        checkedElements.forEach(function (item) {
            if (!showColumns.includes(item)) {
                showColumns.push(item);
            }
        });
        var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
        grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
    }
};
