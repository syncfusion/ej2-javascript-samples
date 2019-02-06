/**
 * Venn Diagram
 */
ej.diagrams.Diagram.Inject();
var diagram;
this.default = function () {
    //Initialize shape
    var shape = { type: 'Basic', shape: 'Ellipse' };
    //Initialize Diagram Nodes
    var nodes = [
        {
            id: 'datascience', offsetX: 450, offsetY: 232, width: 400, height: 400, annotations: [{
                content: 'Data Science',
                offset: { x: 0.5, y: 0.10 }
            }], shape: shape, style: { fill: '#f2f2f2', strokeColor: '#acacac', strokeWidth: 1 }
        },
        {
            id: 'trignometry', offsetX: 515, offsetY: 205, width: 200, height: 200, shape: shape, annotations: [{
                content: 'Trignometry',
                offset: { x: 0.5, y: 0.4 }, horizontalAlignment: 'Left'
            }, { content: 'Thesis', offset: { x: 0.45, y: 0.8 } }],
            style: { fill: '#feb42f', opacity: 0.2, strokeColor: '#feb42f' }
        },
        {
            id: 'expertise', offsetX: 445, offsetY: 290, width: 200, height: 200, shape: shape,
            annotations: [{ content: 'Expertise', offset: { x: 0.5, y: 0.7 }, verticalAlignment: 'Top' }],
            style: { fill: '#6acbd4', opacity: 0.2, strokeColor: '#6acbd4' }
        },
        {
            id: 'programming', offsetX: 388, offsetY: 205, width: 200, height: 200, annotations: [{
                content: 'Programming ',
                offset: { x: 0.5, y: 0.4 }, horizontalAlignment: 'Right'
            }, {
                content: 'Assembly', offset: { x: 0.7, y: 0.35 },
                horizontalAlignment: 'Left'
            }, { content: 'Horizon', offset: { x: 0.7, y: 0.6 }, horizontalAlignment: 'Left' },
            { content: 'Middleware', offset: { x: 0.5, y: 0.8 } }], shape: shape,
            style: { fill: '#ed1d79', opacity: 0.2, strokeColor: '#ed1d79' }
        },
    ];
    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: 580, nodes: nodes,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None }, tool: ej.diagrams.DiagramTools.ZoomPan
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
};