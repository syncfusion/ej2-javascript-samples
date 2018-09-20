var multiParentData = [
    { 'Name': 'node11', 'fillColor': '#e7704c', 'border': '#c15433' },
    { 'Name': 'node12', 'ReportingPerson': ['node114'], 'fillColor': '#efd46e', 'border': '#d6b123' },
    { 'Name': 'node13', 'ReportingPerson': ['node12'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node14', 'ReportingPerson': ['node12'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node15', 'ReportingPerson': ['node12'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node16', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node17', 'ReportingPerson': ['node13', 'node14', 'node15'], 'fillColor': '#659be5', 'border': '#3a6eb5' },
    { 'Name': 'node18', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node19', 'ReportingPerson': ['node16', 'node17', 'node18'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node110', 'ReportingPerson': ['node16', 'node17', 'node18'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node111', 'ReportingPerson': ['node16', 'node17', 'node18', 'node116'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node21', 'fillColor': '#e7704c', 'border': '#c15433' },
    { 'Name': 'node22', 'ReportingPerson': ['node114'], 'fillColor': '#efd46e', 'border': '#d6b123' },
    { 'Name': 'node23', 'ReportingPerson': ['node22'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node24', 'ReportingPerson': ['node22'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node25', 'ReportingPerson': ['node22'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node26', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node27', 'ReportingPerson': ['node23', 'node24', 'node25'], 'fillColor': '#659be5', 'border': '#3a6eb5' },
    { 'Name': 'node28', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node29', 'ReportingPerson': ['node26', 'node27', 'node28', 'node116'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node210', 'ReportingPerson': ['node26', 'node27', 'node28'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node211', 'ReportingPerson': ['node26', 'node27', 'node28'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node31', 'fillColor': '#e7704c', 'border': '#c15433' },
    { 'Name': 'node114', 'ReportingPerson': ['node11', 'node21', 'node31'], 'fillColor': '#f3904a', 'border': '#d3722e' },
    { 'Name': 'node116', 'ReportingPerson': ['node12', 'node22'], 'fillColor': '#58b087', 'border': '#16955e' },
];
/**
 * Multiple Parent sample
 */
// tslint:disable-next-line:max-func-body-length
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.ComplexHierarchicalTree);
this.default = function () {
    //Initializes diagram control
    var diagram = new ej.diagrams.Diagram({
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
            dataManager: new ej.data.DataManager(multiParentData),
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
    //Click Event for Appearance of the layout.
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        var selecteditem = document.getElementsByClassName('e-selected-style');
        if (selecteditem.length) {
            selecteditem[0].classList.remove('e-selected-style');
        }
        if (target.className === 'image-pattern-style') {
            var id = target.id;
            var orientation1 = id.substring(0, 1).toUpperCase() + id.substring(1, id.length);
            diagram.layout.orientation = orientation1;
            diagram.dataBind();
            diagram.doLayout();
            target.classList.add('e-selected-style');
        }
    };
    //used NumericTextBox for left margin of the layout.
    var marginLeftObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.margin.left,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('left');
        }
    });
    //used NumericTextBox for top margin of the layout.
    marginLeftObj.appendTo('#marginLeft');
    var marginTopObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.margin.top,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('top');
        }
    });
    marginTopObj.appendTo('#marginTop');
    //used NumericTextBox for horizontalspacing of the layout.
    var horizontalSpacingObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.horizontalSpacing,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('hspacing');
        }
    });
    horizontalSpacingObj.appendTo('#horiontal');
    //used NumericTextBox for verticalspacing of the layout.
    var verticalSpacingObj = new ej.inputs.NumericTextBox({
        value: diagram.layout.verticalSpacing,
        step: 1,
        format: '##.##',
        change: function (args) {
            update('vspacing');
        }
    });
    verticalSpacingObj.appendTo('#vertical');
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
};