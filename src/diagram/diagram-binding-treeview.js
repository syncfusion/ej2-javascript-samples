/**
 * Default FlowShape sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);


var workingData = window.treeData;

var index = 1;

this.default = function () {

    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //Configures data source settings
        dataSourceSettings: {
            id: 'Id', parentId: 'ParentId',
            dataSource: new ej.data.DataManager(window.treeData),
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.id = data.Id;
            }
        },
        layout: {
            type: 'HierarchicalTree', verticalSpacing: 50, horizontalSpacing: 40,
            enableAnimation: true
        },
        //Sets the default values of a node
        getNodeDefaults: function (node) {
            node.width = 100;
            node.height = 40;
            node.style = { strokeWidth: 1, strokeColor: 'whitesmoke', fill: 'CornflowerBlue' };
            node.annotations = [{ content: node.data.Name, style: { color: 'white' } }];
            node.constraints = ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop;
            return node;
        },
        //Sets the default values of a Connector.
        getConnectorDefaults: function (obj) {
            obj.type = 'Orthogonal';
            obj.style = { strokeColor: 'CornflowerBlue' };
            obj.targetDecorator = { shape: 'Arrow', height: 10, width: 10, style: { fill: 'CornflowerBlue', strokeColor: 'white' } };
        },
        //Enable or disable the add and delete button.
        selectionChange: function (args) {
            if (args.state === 'Changed') {
                if (args.type === "Addition") {
                    deleteButton.disabled = false;
                    addButton.disabled = false;
                } else {
                    deleteButton.disabled = true;
                    addButton.disabled = true;
                }
                var selectedItems = diagram.selectedItems.nodes.concat(diagram.selectedItems.connectors);
                if(selectedItems.length==0)
                {
                    treeObj.selectedNodes=[];
                }
            }
        },
        //Click event handler
        click: function (args) {
            if(args.element instanceof ej.diagrams.Node){
            treeObj.selectedNodes = [args.element.data.Id];
            }
        },
        textEdit: textEdit,
        dragEnter: dragEnter,
        drop: drop

    });
    diagram.appendTo('#diagram');

    //Drag a node from the palette into the diagram
    function dragEnter(args) {
        var lable = '';
        if (args.dragData) {
            lable = args.dragData.text;
        }
        var node =
        {
            id: 'node' + index,
            data: { Name: lable, Id: 'node' + index },
            annotations: [{ content: lable }]
        };
        args.dragItem = node;
    }

    var targetNodeId;

    var elementNodeId;

    //Check data function
    function checkData(a) {
        return a.Id === targetNodeId;
    }

    //Check element data function
    function checkElementData(a) {
        return a.Id === elementNodeId;
    }

    //Drop a node from the palette into the diagram 
    function drop(args) {
        var connector;
        var tempData;
        setTimeout(function () {
            targetNodeId = args.target.id;
            tempData = workingData.filter(checkData);
            if(tempData.length > 0){
            tempData[0].hasChild = true;
            tempData[0].expanded = true;
            }
            if (args.element.inEdges.length === 0) {
                var id = args.element.id;
                var item = {
                    Name: args.element.annotations[0].content, Id: args.element.id, ParentId: targetNodeId, hasChild: false, expanded: false
                };
                treeObj.addNodes([item], targetNodeId, null);
                connector = { sourceID: targetNodeId, targetID: id };
                diagram.add(connector);
                diagram.doLayout();
                index++;
                workingData.push(item);
            } else {
                connector = diagram.getObject(args.element.inEdges[0]);
                connector.sourceID = targetNodeId;
                diagram.dataBind();
                diagram.doLayout();
                elementNodeId = args.element.id;
                tempData = workingData.filter(checkElementData);
                tempData[0].ParentId = targetNodeId;
                treeObj.fields = {
                    dataSource: workingData,
                    id: 'Id',
                    text: 'Name',
                    parentID: 'ParentId',
                    hasChildren: 'hasChild',
                };
                treeObj.refresh();
            }
        }, 0);

    }

    //Change the annotation of the node
    function textEdit(args) {
        setTimeout(function () {
            if (args.annotation) {
                elementNodeId = args.element.id;
                var tempData = workingData.filter(checkElementData);
                var node = treeObj.getNode(tempData[0].Id);
                treeObj.updateNode(tempData[0].Id, args.annotation.content);
            }
        }, 0);
    }

    //Button Initialization

    var addButton = new ej.buttons.Button({ isPrimary: true, disabled: true });
    addButton.appendTo('#addButton');

    var deleteButton = new ej.buttons.Button({ isPrimary: true, disabled: true });
    deleteButton.appendTo('#deleteButton');

    //Add button on click
    document.getElementById('addButton').onclick = function () {
        add();
    };

    //Delete button on click
    document.getElementById('deleteButton').onclick = function () {
        if (diagram.selectedItems.nodes[0].data.Id !== "1") {
            remove();
        }
    };

    //Treeview Initialization
    var treeObj = new ej.navigations.TreeView({
        fields: {
            dataSource: workingData,
            id: 'Id',
            text: 'Name',
            parentID: 'ParentId',
            hasChildren: 'hasChild',
        },
        allowEditing: true,
        keyPress: keyPress,
        nodeEdited: nodeEdited,
        nodeSelected: nodeSelected,
        allowDragAndDrop: true,
        nodeClicked: nodeClicked
    });

    treeObj.appendTo('#tree');

    //Enable the add and delete button
    function nodeSelected(args) {
        deleteButton.disabled = false;
        addButton.disabled = false;
    }

    //Node click event
    function nodeClicked(args) {
        var node = diagram.getObject(treeObj.selectedNodes[0]);
        diagram.select([node]);
    }

    //Key Press Event
    function keyPress(args) {
        if (args.event.key === 'Enter') {
            add();
        }
    }

    //Node edited event
    function nodeEdited(args) {
        var node = diagram.getObject(args.nodeData.id);
        node.annotations[0].content = args.newText;
        treeObj.selectedNodes = [args.nodeData.id];
    }

    //Remove node
    function remove() {
        var nodeId;
        if (diagram.selectedItems.nodes.length > 0) {
            nodeId = diagram.selectedItems.nodes[0].id;
            removeSubChild(diagram.selectedItems.nodes[0], true);
            diagram.doLayout();
        } else if (treeObj.selectedNodes.length > 0) {
            nodeId = treeObj.selectedNodes[0];
            treeObj.removeNodes([nodeId]);
            var node = diagram.getObject(nodeId);
            removeSubChild(node, false);
        }
        for (var i = workingData.length - 1; i >= 0; i--) {
            if (workingData[i].id === nodeId) {
                workingData.splice(i, 1);
            }
        }
        diagram.doLayout();

    }

    //Remove sub child node
    function removeSubChild(node, canDelete) {
        var childNode;
        var connector;
        for (var i = node.outEdges.length - 1; i >= 0; i--) {
            connector = diagram.getObject(node.outEdges[i]);
            childNode = diagram.getObject(connector.targetID);
            if (childNode != null && childNode.outEdges.length > 0) {
                removeSubChild(childNode, canDelete);
            }
            else {
                diagram.remove(childNode);
                if (canDelete) {
                    treeObj.removeNodes([childNode.id]);
                }
                for (var j = workingData.length - 1; j >= 0; j--) {
                    if (workingData[j].id === childNode.id) {
                        workingData.splice(j, 1);
                    }
                }
            }
        }
        for (var k = node.inEdges.length - 1; k >= 0; k--) {
            connector = diagram.getObject(node.inEdges[k]);
            childNode = diagram.getObject(connector.sourceID);
            var index = childNode.outEdges.indexOf(connector.id);
            if (childNode.outEdges.length > 1 && index === 0) {
                index = childNode.outEdges.length;
            }
            if (index > 0) {
                var node1 = childNode.outEdges[index - 1];
                var connector1 = diagram.getObject(node1);
                var node2 = diagram.getObject(connector1.targetID);
                diagram.select([node2]);
            }
            else {
                diagram.select([childNode]);
            }
        }
        diagram.remove(node);
        if (canDelete) {
            treeObj.removeNodes([node.id]);
        }
        for (var t = workingData.length - 1; t >= 0; t--) {
            if (workingData[t].id === node.id) {
                workingData.splice(t, 1);
            }
        }
    }

    //Add function
    function add() {
        var nodeId;
        if (diagram.selectedItems.nodes.length > 0) {
            nodeId = diagram.selectedItems.nodes[0].id;
            addNode(nodeId);
        } else if (treeObj.selectedNodes.length > 0) {
            nodeId = treeObj.selectedNodes[0];
            addNode(nodeId);
        }
    }

    //filter Node Data Function
    function filterNodeData(a) {
        return a.data.Id === targetNodeId;
    }

    //Add node Function
    function addNode(nodeId) {
        targetNodeId = nodeId ? nodeId : treeObj.selectedNodes[0];
        var tempData = workingData.filter(checkData);
        tempData[0].hasChild = true;
        tempData[0].expanded = true;
        var id = 'tree_' + index;
        var item = {
            Name: "Node", Id: id, ParentId: targetNodeId, hasChild: false, expanded: false
        };
        treeObj.addNodes([item], targetNodeId, null);
        treeObj.beginEdit(id);
        var node = { id: id, data: item };
        var targetId;
        if (diagram.selectedItems.nodes.length > 0) {
            targetId = diagram.selectedItems.nodes[0].id;
        } else {
            var temp = diagram.nodes.filter(filterNodeData);
            targetId = temp[0].id;
        }
        var connector = { sourceID: targetId, targetID: id };
        diagram.add(node);
        diagram.add(connector);
        diagram.doLayout();
        index++;
        workingData.push(item);
    }
};
