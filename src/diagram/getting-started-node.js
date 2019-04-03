ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

var diagram;
var element;

/**
 * Getting started -  nodes
 */
//Enable or disable the Constraints for Node.
function updateAnnotation(args) {
    for (var i = 0; i < diagram.nodes.length; i++) {
        var node = diagram.nodes[i];
        if (args.event.target.id === 'lock') {
            if (args.checked) {
                node.constraints &= ~(ej.diagrams.NodeConstraints.Resize | ej.diagrams.NodeConstraints.Rotate | ej.diagrams.NodeConstraints.Drag);
                node.constraints |= ej.diagrams.NodeConstraints.ReadOnly;
            } else {
                node.constraints |= ej.diagrams.NodeConstraints.Default & ~(ej.diagrams.NodeConstraints.ReadOnly);
            }
        } else {
            if (element.checked) {
                node.constraints |= ej.diagrams.NodeConstraints.AspectRatio;
            } else {
                node.constraints &= ~ej.diagrams.NodeConstraints.AspectRatio;
            }
        }
        diagram.dataBind();
    }
}
//Set customStyle for Node.
function applyStyle(node, width, array, con, type) {
    node.style.fill = '#37909A';
    node.style.strokeWidth = width;
    node.style.strokeColor = '#024249';
    node.style.strokeDashArray = array;
    if (!type || type === 'None') {
        node.style.gradient.type = 'None';
    } else {
        var gradient;
        gradient = {
            cx: 50, cy: 50, fx: 50, fy: 50,
            stops: [{ color: '#00555b', offset: 0 },
            { color: '#37909A', offset: 90 }],
            type: 'Radial'
        };
        node.style.gradient = gradient;
    }
    if (con & ej.diagrams.NodeConstraints.Shadow) {
        node.shadow = { angle: 45, distance: 15, opacity: 0.3, color: 'grey' };
        node.constraints |= con;
    } else {
        node.constraints &= con;
    }
    diagram.dataBind();
}

// tslint:disable-next-line:max-func-body-length
this.default = function () {
    var nodes = [
        { id: 'sdlc', offsetX: 300, offsetY: 288, annotations: [{ content: 'SDLC' }] },
        { id: 'support', offsetX: 150, offsetY: 250, annotations: [{ content: 'Support' }] },
        { id: 'analysis', offsetX: 300, offsetY: 150, annotations: [{ content: 'Analysis' }] },
        { id: 'design', offsetX: 450, offsetY: 250, annotations: [{ content: 'Design' }] },
        { id: 'implement', offsetX: 400, offsetY: 400, annotations: [{ content: 'implement' }] },
        { id: 'deploy', offsetX: 200, offsetY: 400, annotations: [{ content: 'Deploy' }] }
    ];
    var connections = [
        { id: 'connector1', sourceID: 'analysis', targetID: 'design' },
        { id: 'connector2', sourceID: 'design', targetID: 'implement' },
        { id: 'connector3', sourceID: 'implement', targetID: 'deploy' },
        { id: 'connector4', sourceID: 'deploy', targetID: 'support' },
        { id: 'connector5', sourceID: 'support', targetID: 'analysis' }
    ];
    //Initialize the diagram
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '645px', nodes: nodes, connectors: connections,
        //Sets the default values of a nodes
        getNodeDefaults: function (obj) {
            obj.width = 100;
            obj.height = 100;
            obj.shape = { shape: 'Ellipse' };
            obj.style = { fill: '#37909A', strokeColor: '#024249' };
            obj.annotations[0].margin = { left: 10, right: 10 };
            obj.annotations[0].style = { color: 'white', fill: 'none', strokeColor: 'none' };
            return obj;
        },
        //Sets the default values of a Connectors
        getConnectorDefaults: function (connector) {
            connector.targetDecorator.style = { fill: '#024249', strokeColor: '#024249' };
            return { style: { strokeColor: '#024249', strokeWidth: 2 } };
        },
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None }
    });
    diagram.appendTo('#diagram');

    //Enable or disable the AspectRatio for Node.
     element = new ej.buttons.CheckBox({
        checked: false, label: 'Aspect ratio',
        change: updateAnnotation
    });
    element.appendTo('#aspectRatio');
    //Enable or disable the Interaction for Node.
    var lockElement = new ej.buttons.CheckBox({
        checked: false, label: 'Lock',
        change: updateAnnotation
    });
    lockElement.appendTo('#lock');

    //Click event for Appearance of the Property Panel
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        // custom code start
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style') {
            for (var i = 0; i < diagram.nodes.length; i++) {
                var node = diagram.nodes[i];
                switch (target.id) {
                    case 'preview0':
                        applyStyle(node, 0, '', ~ej.diagrams.NodeConstraints.Shadow, undefined);
                        break;
                    case 'preview1':
                        applyStyle(node, 2, '', ~ej.diagrams.NodeConstraints.Shadow, undefined);
                        break;
                    case 'preview2':
                        applyStyle(node, 2, '5 5', ~ej.diagrams.NodeConstraints.Shadow, undefined);
                        break;
                    case 'preview3':
                        applyStyle(node, 2, '5 5', ~ej.diagrams.NodeConstraints.Shadow, 'Radial');
                        break;
                    case 'preview4':
                        applyStyle(node, 2, '5 5', ej.diagrams.NodeConstraints.Shadow, undefined);
                        break;
                }
                // custom code start
                target.classList.add('e-selected-style');
                // custom code end
            }
        }
    };
};
