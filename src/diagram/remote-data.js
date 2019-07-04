/**
 * Remote Data binding sample
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
this.default = function () {
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: 490,
        //Configrues hierarchical tree layout
        layout: {
            type: 'HierarchicalTree', margin: { left: 0, right: 0, top: 100, bottom: 0 },
            verticalSpacing: 40,
            getLayoutInfo: function (node, options) {
                if (options.level === 3) {
                    node.style.fill = '#3c418d';
                }
                if (options.level === 2) {
                    node.style.fill = '#108d8d';
                    options.type = 'Center';
                    options.orientation = 'Horizontal';
                }
                if (options.level === 1) {
                    node.style.fill = '#822b86';
                }
            }
        },
        //Sets the default values of nodes
        getNodeDefaults: function (obj) {
            obj.width = 80;
            obj.height = 40;
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.style = { fill: '#048785', strokeColor: 'Transparent' };
            return obj;
        },
        //Sets the default values of connector
        getConnectorDefaults: function (connector) {
            connector.type = 'Orthogonal';
            connector.style.strokeColor = '#048785';
            connector.targetDecorator.shape = 'None';
            return connector;
        },
        //Configures data source
        dataSourceSettings: {
            id: 'EmployeeID', parentId: 'ReportsTo',
            dataSource: new ej.data.DataManager(
                { url: 'https://mvc.syncfusion.com/Services/Northwnd.svc/', crossDomain: true },
                new ej.data.Query().from('Employees').select('EmployeeID,ReportsTo,FirstName').take(9)
            ),
            //binds the external data with node
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.annotations = [{
                    content: data.FirstName,
                    style: { color: 'white' }
                }];
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        snapSettings: { constraints: 0 }
    });
    diagram.appendTo('#diagram');
};