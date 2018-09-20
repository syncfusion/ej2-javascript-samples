var data = [
    {
        'Id': 'parent', 'Type': 'Server'
    },
    {
        'Id': 1, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 2, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 3, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 4, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 5, 'Source': 'parent', 'Type': 'Hub'
    },
    {
        'Id': 6, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 7, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 8, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 9, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 10, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 11, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 12, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 13, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 14, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 15, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 16, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 17, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 18, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 19, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 20, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 21, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 22, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 23, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 24, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 25, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 26, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 27, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 28, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 29, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 30, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 31, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 32, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 33, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 34, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 35, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 36, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 37, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 38, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 39, 'Source': 4, 'Type': 'Hub'
    },
];
/**
 * Sample for Symmentric layout.
 */

ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.SymmetricLayout);
this.default = function () {
    //Initializtion of the diagram.
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '550px',
        layout: { type: 'SymmetricalLayout', springLength: 80, springFactor: 0.8, maxIteration: 500, margin: { left: 20, top: 20 } },
        //Set the parent and child relationship of DataSource.
        dataSourceSettings: { id: 'Id', parentId: 'Source', dataManager: new ej.data.DataManager(data) },
        //Set the constraints of the SnapSettings
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //Set the default values of Node
        getNodeDefaults: function (obj) {
            obj.height = 20;
            obj.width = 20;
            obj.style = { fill: 'transparent', strokeWidth: 2 };
            return obj;
        },
        //Sets the default values of connector
        getConnectorDefaults: function (connector) {
            connector.targetDecorator.shape = 'None';
            connector.type = 'Straight';
            return connector;
        },
        setNodeTemplate: function (obj) {
            var shape = { type: 'Basic', shape: 'Ellipse' };
            if (!(obj.data.Type) || obj.data.Type === 'Server') {
                obj.width = 30;
                obj.height = 30;
                obj.shape = {
                    type: 'Native', content: '<svg width="50" height="65"><g id="Server2_shape" fill="transparent" stroke="transparent" stroke-width="1"' +
                        ' opacity="1" stroke-dasharray="" transform="translate(-15.517241379310343,-2.6329421835819375),' +
                        'scale(1.7241379310344827,1.3774530437803194)" width="50" height="65"><g><g xmlns="http://www.w3.org/2000/svg">' +
                        '<polygon fill="#DBD5DA" points="37.3,7.3 19.4,17.8 9.8,12.1 9.2,12.9 19,18.7 19,49 20,49 20,18.5 37.8,8.1  ">' +
                        '</polygon>    <polygon fill="#E5DCE1" points="36.3,7.8 28.2,2.6 10.5,12.5 19.5,17.8  "></polygon> <polygon' +
                        ' fill="#BBB5B9" points="20,18.5 37,8.6 36.9,38.4 20,47.9  "></polygon> <polygon fill="#DBD2D7" ' +
                        'points="10,13.4 19,18.7 19,48.2 10,42.7  "></polygon>    <path fill="#656666" d="M19.2,49.1c-0.5,' +
                        '0-0.9-0.1-1.3-0.4L10.2,44C9.4,43.5,9,42.7,9,41.8V13.6c0-0.9,0.5-1.7,1.3-2.2l16.7-9.2   c0.8-0.4,1.8-0.4,' +
                        '2.5,0.1L36.8,7C37.6,7.5,38,8.2,38,9.1l-0.1,28.4c0,0.9-0.5,1.7-1.3,2.2l-16.2,9.1C20.1,49,19.6,49.1,19.2,49.1z ' +
                        'M28.1,2.9c-0.3,0-0.5,0.1-0.7,0.2l-16.6,9.2c-0.5,0.3-0.8,0.8-0.8,1.3v28.2c0,0.5,0.3,1,0.7,1.3l7.7,4.8c0.5,0.3,' +
                        '1.1,0.3,1.5,0  l16.2-9.1c0.5-0.3,0.8-0.8,0.8-1.3L37,9.1c0-0.5-0.3-1-0.7-1.3L29,3.2C28.7,3,28.4,2.9,28.1,2.9z">' +
                        '</path><ellipse fill="#656666"  cx="14.3" cy="40.2" rx="0.6" ry="1.1"></ellipse> <polygon fill="#656666" ' +
                        'points="10.9,22.6 10.9,22.6 10.9,22.6  "></polygon> <polygon fill="#656666" class="st4ed" points="11.9,' +
                        '22 11.9,23.2 16.7,26 16.7,24.9 "></polygon><polygon fill="#656666" points="10.9,18.9 10.9,18.9 10.9,18.9"></polygon>' +
                        '<polygon fill="#656666" points="11.9,18.4 11.9,19.5 16.7,22.4 16.7,21.2  "></polygon></g></g></g></svg>'
                };
            }
            else {
                obj.shape = shape;
                obj.style = { fill: 'orange' };
            }
        },
        tool: ej.diagrams.DiagramTools.ZoomPan
    });
    diagram.appendTo('#diagram');
    diagram.pan(0, 0);
    var springLength = new ej.inputs.NumericTextBox({
        format: '###.##',
        value: 80,
        step: 1,
    });
    springLength.appendTo('#springlength');
    var springfactor = new ej.inputs.NumericTextBox({
        format: '###.##',
        value: 0.8,
        step: 0.1,
    });
    springfactor.appendTo('#springfactor');
    var maxiteration = new ej.inputs.NumericTextBox({
        format: '###.##',
        value: 500,
        step: 1,
    });
    maxiteration.appendTo('#maxiteration');
    //used to apply the alignment of the layout. 
    document.getElementById('refresh').onclick = function () {
        diagram.layout.springLength = springLength.value;
        diagram.layout.springFactor = springfactor.value;
        diagram.layout.maxIteration = maxiteration.value;
        diagram.doLayout();
    };
    var layout = new ej.buttons.Button({ cssClass: 'e-small' });
    layout.appendTo('#refresh');
};