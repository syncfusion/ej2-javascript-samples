/**
 * CRUD sample
 */
ej.diagrams.Diagram.Inject(
  ej.diagrams.DataBinding,
  ej.diagrams.HierarchicalTree
);
var diagram;
var dialog;
var toolbarObj;
var sourceDropdown;
var targetDropdown;
var sourceID;
var targetID;
var nodeData = [];
// custom code start
function dlgButtonClick(args) {
  var dialogHeader = dialog.header;
  var description = document.getElementById("Description").value;
  var color = document.getElementById("Color").value;
  var selectedItem;
  if (diagram.selectedItems.nodes.length > 0) {
    selectedItem = diagram.selectedItems.nodes[0];
  }
  if (diagram.selectedItems.connectors.length > 0) {
    selectedItem = diagram.selectedItems.connectors[0];
  }
  //Add new node and connector in diagram at runtime.
  if (dialogHeader === "Add") {
    var node = {
      id: "node" + ej.diagrams.randomId(),
      style: { fill: color },
      Description: description,
      Color: color,
      Id: Math.floor(Math.random() * 1000 + 100)
    };
    var connector = {
      id: "connector" + ej.diagrams.randomId(),
      sourceID: selectedItem.id,
      targetID: node.id,
      Id: Math.floor(Math.random() * 1000 + 100)
    };
    diagram.add(node);
    diagram.add(connector);
    diagram.doLayout();
    //Insert newly added eelements into the database.
    diagram.insertData();
    nodeData.push({ Name: node.id, Label: description });
    sourceDropdown.dataSource = getDataSource();
    sourceDropdown.dataBind();
    targetDropdown.dataSource = getDataSource();
    targetDropdown.dataBind();
  } else {
    if (selectedItem instanceof ej.diagrams.Connector) {
      //Update sourceNode and targetNode at runtime.
      selectedItem.sourceID = sourceID ? sourceID : selectedItem.sourceID;
      selectedItem.targetID = targetID ? targetID : selectedItem.targetID;
      diagram.dataBind();
      diagram.doLayout();
    } else {
      //Update an node text and node bgColor.
      selectedItem.Description = description;
      selectedItem.Color = color;
      selectedItem.annotations[0].content = description;
      selectedItem.style.fill = color;
      diagram.dataBind();
    }
    diagram.updateData();
  }
  dialog.hide();
}

//Set an sourceId of an selected Connector.
function sourceDropdownChange(args) {
  sourceID = args.value;
}

//Set an targetId of an selected Connector.
function targetDropdownChange(args) {
  targetID = args.value;
}

//Displays nodes name in dropdown.
function sourceDropdownCreate(args) {
  sourceDropdown.dataSource = getDataSource();
  sourceDropdown.dataBind();
}

//Displays nodes name in dropdown.
function targetDropdownCreate(args) {
  targetDropdown.dataSource = getDataSource();
  targetDropdown.dataBind();
}
// custom code end
//Disable or Enable the toolbar items based on element selection.
function selectionChange(args) {
  if (args.state === "Changing") {
    if (args.newValue.length > 0) {
      if (args.newValue[0] instanceof ej.diagrams.Node) {
        enableToolbarItems(true);
      } else {
        toolbarObj.enableItems( document.getElementById(items[0].id).parentElement, false );
        toolbarObj.enableItems( document.getElementById(items[2].id).parentElement, true );
        toolbarObj.enableItems( document.getElementById(items[4].id).parentElement, false );
      }
    } else {
      enableToolbarItems(false);
    }
  }
}
// custom code start
//Enable or disable the toolbar items.
function enableToolbarItems(isEnableItem) {
  toolbarObj.enableItems( document.getElementById(items[0].id).parentElement, isEnableItem );
  toolbarObj.enableItems( document.getElementById(items[2].id).parentElement, isEnableItem );
  toolbarObj.enableItems( document.getElementById(items[4].id).parentElement, isEnableItem );
}
// custom code end
function connectionChange(args) {
  if (args.state === "Completed") {
    if (!args.connector.targetID || !args.connector.sourceID) {
      args.cancel = true;
    }
  }
}

//Set an label for each node.
function setNodeTemplate(obj) {
  obj.annotations = [{ style: { color: "black" } }];
  obj.annotations[0].content = obj.Description;
  obj.style = { fill: obj.Color };
  if (obj.Id === 1) {
    //Restrict Delete Constraints for root node.
    obj.constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Delete;
  }
}
// custom code start
//Opens a dialog with textbox and dropdown control based on toolbar clicked items.
function toolbarClick(args) {
  var selectedItem;
  if (diagram.selectedItems.nodes.length > 0) {
    selectedItem = diagram.selectedItems.nodes[0];
  }
  if (diagram.selectedItems.connectors.length > 0) {
    selectedItem = diagram.selectedItems.connectors[0];
  }
  if (selectedItem) {
    switch (args.item.tooltipText) {
      case "Add":
        openDialog("Add", "", "", true);
        break;
      case "Edit":
        if (selectedItem instanceof ej.diagrams.Connector) {
          var sourceNode = diagram.getObject(selectedItem.sourceID);
          var targetNode = diagram.getObject(selectedItem.targetID);
          openDialog("Edit", sourceNode.Description, targetNode.Description, false );
        } else {
          openDialog("Edit", selectedItem.Description, selectedItem.Color, true );
        }
        break;
      case "Delete":
        diagram.remove(selectedItem);
        diagram.doLayout();
        //Delete an selected items from database.
        diagram.removeData();
        var element = { Name: selectedItem.id, Label: selectedItem.Description };
        var index = nodeData.indexOf(element);
        nodeData.splice(index, 1);
        sourceDropdown.dataSource = getDataSource();
        sourceDropdown.dataBind();
        targetDropdown.dataSource = getDataSource();
        targetDropdown.dataBind();
    }
  }
    switch (args.item.tooltipText) {
      case 'Reset':
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://js.syncfusion.com/demos/ejServices/api/Diagram/ResetData", true);
        xhttp.send();
        diagram.refreshDiagram();
        diagram.refresh();
  }
}

//Show or Hide the Textbox and Dropdown in dialog control.
function hideClassElement(className, display) {
  var i;
  var showDropdown = document.querySelectorAll(className);
  for (i = 0; i < showDropdown.length; i++) {
    showDropdown[i].style.display = display;
  }
}

//open a dialog control on clicking the toolbar items.
function openDialog(title, description, color, isNode) {
  dialog.header = title;
  if (isNode) {
    hideClassElement(".showDropdown", "none");
    hideClassElement(".showLabel", "block");
    document.getElementById("Description").value = description;
    document.getElementById("Color").value = color;
  } else {
    hideClassElement(".showDropdown", "block");
    hideClassElement(".showLabel", "none");
    document.getElementById("SourceId").value = description;
    document.getElementById("TargetId").value = color;
  }
  //Open a dialog.
  dialog.show();
}
// custom code end
//Returns an node text collection in diagram.
function getDataSource() {
  var i;
  nodeData = [];
  for (i = 0; i < diagram.nodes.length; i++) {
    var node = diagram.nodes[i];
    var element = { Name: node.id, Label: node.Description };
    nodeData.push(element);
  }
  return nodeData;
}


//Add icons in Toolbar.
var items = [
  {
    text: "Add",
    tooltipText: "Add",
    prefixIcon: "e-ddb-icons e-add",
    id: "Add"
  },
  {
    type: "Separator"
  },
  {
    text: "Edit",
    tooltipText: "Edit",
    prefixIcon: "e-ddb-icons e-update",
    id: "Edit"
  },
  {
    type: "Separator"
  },
  {
    text: "Delete",
    tooltipText: "Delete",
    prefixIcon: "e-ddb-icons e-delete",
    id: "Delete"
  },
    {
      type: 'Separator'
  },
  {
      text: 'Reset',
      tooltipText: 'Reset',
      prefixIcon: 'e-ddc-icons e-reset',
      id: 'Reset'
  }
];

this.default = function() {
  diagram = new ej.diagrams.Diagram({
    width: "100%",
    height: 600,
    dataSourceSettings: {
      id: 'Name',
      //Define URL to perform CRUD operations with nodes records in database.
      crudAction: {
        read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetNodes',
        create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddNodes',
        update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateNodes',
        destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteNodes',
        customFields: ['Id', 'Description', 'Color'],
      },
      connectionDataSource: {
        id: 'Name',
        sourceID: 'SourceNode',
        targetID: 'TargetNode',
        //Define URL to perform CRUD operations with connector records in database.
        crudAction: {
          read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetConnectors',
          create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddConnectors',
          update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateConnectors',
          destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteConnectors',
          customFields: ['Id'],
        }
      }
    },
    layout: { type: "HierarchicalTree", verticalSpacing: 40 },
    snapSettings: { constraints: 0 },
    //Set node default properties.
    getNodeDefaults: function (obj, diagram) {
      obj.width = 100;
      obj.height = 50;
      obj.shape = { type: 'Basic', shape: 'Rectangle' };
      obj.style = { strokeWidth: 1, strokeColor: '#DDDDDD' };
      return obj;
    },
    //Set connector default properties.
    getConnectorDefaults: function (connector, diagram) {
      connector.type = 'Orthogonal';
      connector.style.fill = '#707070';
      connector.style.strokeColor = '#707070';
      connector.targetDecorator = {
        style: {
          strokeColor: '#707070',
          fill: '#707070'
        },
      };
      return connector;
    },
    selectionChange: selectionChange,
    sourcePointChange: connectionChange,
    targetPointChange: connectionChange,
    setNodeTemplate: setNodeTemplate
  });
  diagram.appendTo("#diagram");

  //Initialize ToolBar control.
  toolbarObj = new ej.navigations.Toolbar({
    clicked: toolbarClick,
    items: items
  });
  toolbarObj.appendTo("#toolbar");
  enableToolbarItems(false);

  //Initialize dialog control.
  dialog = new ej.popups.Dialog({
    width: "300px",
    visible: false,
    isModal: true,
    showCloseIcon: true,
    buttons: [
      {
        click: dlgButtonClick,
        buttonModel: { content: "Update", isPrimary: true }
      }
    ]
  });
  dialog.appendTo("#editDialog");

  //Initialize textbox control.
  var inputobj1 = new ej.inputs.TextBox({
    floatLabelType: "Always",
    placeholder: "Description"
  });
  inputobj1.appendTo("#Description");

  //Initialize textbox control.
  var inputobj2 = new ej.inputs.TextBox({
    floatLabelType: "Always",
    placeholder: "Color"
  });
  inputobj2.appendTo("#Color");

  //Initialize button control to update the node label and node color.
  var button = new ej.buttons.Button();
  button.appendTo("#btnUpdate");

  //Initialize dropdownlist control to display an sourceNodes in diagram.
  sourceDropdown = new ej.dropdowns.DropDownList({
    fields: { text: "Label", value: "Name" },
    change: sourceDropdownChange,
    created: sourceDropdownCreate
  });
  sourceDropdown.appendTo("#SourceId");

  //Initialize dropdownlist control to display an targetNodes in diagram.
  targetDropdown = new ej.dropdowns.DropDownList({
    fields: { text: "Label", value: "Name" },
    change: targetDropdownChange,
    created: targetDropdownCreate
  });
  targetDropdown.appendTo("#TargetId");
};

