/**
 * Multiple Parent sample
 */
// tslint:disable-next-line:max-func-body-length
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.ComplexHierarchicalTree);
var horizontalSpacingObj;
var verticalSpacingObj;
var marginTopObj;
var marginLeftObj;
var diagram;
//Apply the Alignment for the layout.
function update(value) {
    if (value === 'left') {
        diagram.layout.margin.left = marginLeftObj.value;
    } else if (value === 'top') {
        diagram.layout.margin.top = marginTopObj.value;
    } else if (value === 'hspacing') {
        diagram.layout.horizontalSpacing = horizontalSpacingObj.value;
    } else if (value === 'vspacing') {
        diagram.layout.verticalSpacing = verticalSpacingObj.value;
    }
    diagram.dataBind();
}



this.default = function () {
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: 580,
        //Configrues hierarchical tree layout
        layout: {
            type: 'ComplexHierarchicalTree',
            horizontalSpacing: 40, verticalSpacing: 40, orientation: 'TopToBottom',
            margin: { left: 10, right: 0, top: 50, bottom: 0 }
        },
        //Sets the default values of nodes
        getNodeDefaults: function (obj) {
            obj.width = 40;
            obj.height = 40;
            obj.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 7 };
        },
        //Sets the default values of connectors
        getConnectorDefaults: function (connector) {
            connector.type = 'Orthogonal';
            connector.cornerRadius = 7;
            connector.targetDecorator.height = 7;
            connector.targetDecorator.width = 7;
            connector.style.strokeColor = '#6d6d6d';
        },
        //Configures data source
        dataSourceSettings: {
            id: 'Name', parentId: 'ReportingPerson',
            dataManager: new ej.data.DataManager(window.multiParentData),
            //binds the external data with node
            doBinding: function (nodeModel, data) {
                nodeModel.style = { fill: data.fillColor, strokeWidth: 1, strokeColor: data.border };
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        snapSettings: { constraints: 0 }
    });
    diagram.appendTo('#diagram');

    //used NumericTextBox for left margin of the layout.
    marginLeftObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.margin.left,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('left');
        }
    });
    marginLeftObj.appendTo('#marginLeft');
    //used NumericTextBox for top margin of the layout.
    marginTopObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.margin.top,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('top');
        }
    });
    marginTopObj.appendTo('#marginTop');
    //used NumericTextBox for horizontalspacing of the layout.
    horizontalSpacingObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.horizontalSpacing,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('hspacing');
        }
    });
    horizontalSpacingObj.appendTo('#horiontal');
    //used NumericTextBox for verticalspacing of the layout.
    verticalSpacingObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.verticalSpacing,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('vspacing');
        }
    });
    verticalSpacingObj.appendTo('#vertical');
    //Click Event for Appearance of the layout.
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        // custom code start
        var selecteditem = document.getElementsByClassName('e-selected-style');
        if (selecteditem.length) {
            selecteditem[0].classList.remove('e-selected-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style') {
            var id = target.id;
            var orientation1 = id.substring(0, 1).toUpperCase() + id.substring(1, id.length);
            diagram.layout.orientation = orientation1;
            diagram.dataBind();
            diagram.doLayout();
            // custom code start
            target.classList.add('e-selected-style');
            // custom code end
        }
    };
};