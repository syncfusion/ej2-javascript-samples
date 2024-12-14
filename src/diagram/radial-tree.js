/**
 * Sample for Radial tree
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.RadialTree);

this.default = function () {
    // Click event to perform Zoom In, Zoom Out, and Reset based on the option
    function onItemClick(args) {
        var diagram = document.getElementById('diagram').ej2_instances[0];
        switch (args.item.text) {
            case 'Zoom In':
                var zoomin = { type: 'ZoomIn', zoomFactor: 0.2 };
                diagram.zoomTo(zoomin);
                break;
            case 'Zoom Out':
                var zoomout = { type: 'ZoomOut', zoomFactor: 0.2 };
                diagram.zoomTo(zoomout);
                break;
            case 'Reset':
                diagram.reset();
                diagram.fitToPage();
                break;
        }
    }
    //Initialize the diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //configures data source settings
        dataSourceSettings: {
            id: 'Id', parentId: 'ReportingPerson',
            dataSource: new ej.data.DataManager(window.radialTree),
            //bind data to the nodes
            doBinding: function (nodeModel, data) {
                //Set the styling for the annotation 
                nodeModel.annotations = [{
                    content: data.Name,
                    style: data.Id === 'parent' ? { color: 'white', fontSize: 50 } : { color: 'black', fontSize: 20 }
                }];
                nodeModel.constraints = ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip;
                //Set properties for the tooltip
                nodeModel.tooltip = {
                    content: data.Name + '<br/>' + data.Designation, relativeMode: 'Object',
                    position: 'TopCenter', showTipPointer: true
                };
                if (data.Designation === 'Managing Director') {
                    nodeModel.width = 400;
                    nodeModel.height = 400;
                    nodeModel.shape = { shape: 'Ellipse' };
                    nodeModel.style = { fill: 'black' };
                }
                else if (data.Designation === 'Project Manager') {
                    nodeModel.width = 130;
                    nodeModel.height = 130;
                    nodeModel.style = { fill: '#f8ab52' };
                }
                else {
                    nodeModel.width = 100;
                    nodeModel.height = 100;
                    nodeModel.shape = { shape: 'Ellipse' };
                    nodeModel.style = { fill: '#afeeee' };
                }
            }
        },
        //Disables all interactions except zoom and pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Configures automatic layout
        layout: {
            type: 'RadialTree', verticalSpacing: 30, horizontalSpacing: 20,
            root: 'Category'
        },
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
    //create and add ZoomIn,ZoomOut and Reset options to the ToolBar.
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: onItemClick,
        items: [
            { type: 'Button', tooltipText: 'ZoomIn', text: 'Zoom In', prefixIcon: 'e-ddb-icons e-zoomin' }, { type: 'Separator' },
            { type: 'Button', tooltipText: 'ZoomOut', text: 'Zoom Out', prefixIcon: 'e-ddb-icons e-zoomout' }, { type: 'Separator' },
            { type: 'Button', tooltipText: 'Reset', text: 'Reset', prefixIcon: 'e-diagram-icons e-diagram-reset' }
        ]
    });

    toolbarObj.appendTo('#toolbar');
};