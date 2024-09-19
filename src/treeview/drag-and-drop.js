this.default = function () {
    // Render the first TreeView by mapping its fields property with data source properties
    var tree1Obj = new ej.navigations.TreeView({
        fields: { dataSource:  window.productTeam1, id: 'id', text: 'name', child: 'child' },
        allowDragAndDrop: true,
        nodeDragStop: onDragStop
    });
    // Render the second TreeView by mapping its fields property with data source properties
    tree1Obj.appendTo('#tree1');
    var tree2Obj =  new ej.navigations.TreeView({
        fields: { dataSource:  window.productTeam2, id: 'id', text: 'name', child: 'child' },
        allowDragAndDrop: true,
        nodeDragStop: onDragStop
    });
    tree2Obj.appendTo('#tree2');
    // Render the ListView with custom template
    var listData = [];
    var listObj = new ej.lists.ListView({
        dataSource: [],
        cssClass: 'custom-list',
        template: '<div class="dropped-list-view-item"><span>${text}</span><span id=${iconId} class=${class}></span></div>',
    });
    listObj.appendTo('#list');
    // Drop the dragged TreeView node into ListView
    var id = 1;
    function onDragStop(event) {
        var targetEle = ej.base.closest(event.target, '.e-droppable');
        targetEle = targetEle ? targetEle : event.target;
        // Check the target as ListView or not
            if (targetEle && targetEle.classList.contains('custom-list')) {
                event.cancel = true;
                var newData = [];
                if (event.draggedNode.classList.contains('e-active')) {
                    var selNodes = this.selectedNodes;
                    for (var i = 0, len = selNodes.length; i < len; i++)    {
                        var nodeEle = document.querySelector('[data-uid="' + selNodes[i] + '"]').querySelector('.e-list-text');
                        var nodeText = nodeEle.textContent;
                        var newNode = { id: 'l' + id, text: nodeText, class: 'custom-delete', iconId: 'i' + id };
                        id++;
                        newData.push(newNode);
                    }
                }
                else {
                    var text = 'text';
                    var nodeText1 = event.draggedNodeData[text];
                    var newNode1 = { id: 'l' + id, text: nodeText1, class: 'custom-delete', iconId: 'i' + id };
                    id++;
                    newData.push(newNode1);
                }
                   // Add collection of node to ListView
                listObj.addItem(newData, undefined);
            }
        }
    // Add the custom action for delete icon in ListView
    document.getElementById('list').addEventListener('mousedown', function (event) {
        if (event.target.classList.contains('custom-delete')) {
            var node = ej.base.closest(event.target, 'li');
            listObj.removeItem(node);
        }
    });
    document.getElementById('overlay').addEventListener('mousedown', function (event) {
        document.getElementById('overlay').style.display = 'none';
    });
};
