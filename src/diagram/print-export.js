/**
 * Print and Export
 */
ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);
var checkBoxObj;
var toolbarObj;
var btnObj;
var diagram;
//click event to perform printing the diagraming objects.
function onItemClick(args) {
    if (args.item.text === 'Print') {
        var printOptions = {};
        printOptions.mode = 'Data';
        printOptions.region = 'PageSettings';
        printOptions.multiplePage = checkBoxObj.checked;
        printOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
        diagram.print(printOptions);
    }
}
//Export the diagraming object based on the format.
function onselect(args) {
    var exportOptions = {};
    exportOptions.format = args.item.text;
    exportOptions.mode = 'Download';
    exportOptions.region = 'PageSettings';
    exportOptions.multiplePage = checkBoxObj.checked;
    exportOptions.fileName = 'Export';
    exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
    diagram.exportDiagram(exportOptions);
}

this.default = function () {   
    var nodes = [
        {
            id: 'sourceNode1', width: 100, height: 50, offsetX: 120, offsetY: 100,
            style: { strokeColor: '#868686', fill: '#d5f5d5' },
            annotations: [{ content: 'Source Document', margin: { left: 15, right: 15, bottom: 15, top: 15 } }]
        },
        {
            id: 'censusNode2', width: 100, height: 75, offsetX: 120, offsetY: 200,
            shape: { type: 'Basic', shape: 'Diamond' },
            style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
            annotations: [{ content: 'Census Record', margin: { left: 15, right: 15, bottom: 15, top: 15 } }]
        },
        {
            id: 'booksNode3', width: 100, height: 75, offsetX: 120, offsetY: 325,
            shape: { type: 'Basic', shape: 'Diamond' },
            style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
            annotations: [{ content: 'Books and Magazine' }]
        },
        {
            id: 'recordNode4', width: 125, height: 50, offsetX: 320, offsetY: 200,
            style: { strokeColor: '#868686', fill: '#d5f5d5' },
            annotations: [{ content: 'Record Template' }]
        },
        {
            id: 'traditionalNode5', width: 125, height: 50, offsetX: 320, offsetY: 325,
            style: { strokeColor: '#868686', fill: '#d5f5d5' },
            annotations: [{ content: 'Traditional Template' }]
        },
        {
            id: 'nontraditionalNode6', width: 135, height: 50, offsetX: 120, offsetY: 425,
            style: { strokeColor: '#a8a8a8', fill: '#faebee' },
            annotations: [{ content: 'Nontraditional' }]
        },
        {
            id: 'Radial1', width: 125, height: 50, offsetX: 850, offsetY: 225,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
            annotations: [{ content: 'Health Fitness', }]
        },
        {
            id: 'Radial2', width: 125, height: 75, offsetX: 850, offsetY: 100,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeColor: '#a8a8a8', fill: '#faebee' },
            annotations: [{ content: 'Diet' }]
        },
        {
            id: 'Radial3', width: 125, height: 75, offsetX: 1025, offsetY: 175,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeColor: '#a8a8a8', fill: '#faebee' },
            annotations: [{ content: 'Flexibility' }]
        },
        {
            id: 'Radial4', width: 125, height: 75, offsetX: 1000, offsetY: 350,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeColor: '#a8a8a8', fill: '#faebee' },
            annotations: [{ content: 'Muscular Endurance' }]
        },
        {
            id: 'Radial5', width: 125, height: 75, offsetX: 675, offsetY: 175,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeColor: '#a8a8a8', fill: '#faebee' },
            annotations: [{ content: 'Cardiovascular Strength' }]
        },
        {
            id: 'Radial6', width: 125, height: 75, offsetX: 770, offsetY: 350,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeColor: '#a8a8a8', fill: '#faebee' },
            annotations: [{ content: 'Muscular Strength' }]
        },
    ];
    var connectors = [
        { id: 'flowChartConnector1', sourceID: 'sourceNode1', targetID: 'censusNode2' },
        {
            id: 'flowChartConnector2', sourceID: 'censusNode2', targetID: 'booksNode3',
            annotations: [{ content: 'No', style: { fill: 'White' } }]
        },
        {
            id: 'flowChartConnector3', sourceID: 'booksNode3', targetID: 'nontraditionalNode6',
            annotations: [{ content: 'No', style: { fill: 'White' } }]
        },
        {
            id: 'flowChartConnector4', sourceID: 'censusNode2', targetID: 'recordNode4',
            annotations: [{ content: 'Yes', style: { fill: 'White' } }]
        },
        {
            id: 'flowChartConnector5', sourceID: 'booksNode3', targetID: 'traditionalNode5',
            annotations: [{ content: 'Yes', style: { fill: 'White' } }]
        },
        { id: 'RadialConnector1', sourceID: 'Radial1', targetID: 'Radial2', annotations: [{ content: 'Yes', style: { fill: 'White' } }] },
        { id: 'RadialConnector2', sourceID: 'Radial1', targetID: 'Radial3', annotations: [{ content: 'Yes', style: { fill: 'White' } }] },
        { id: 'RadialConnector3', sourceID: 'Radial1', targetID: 'Radial4', annotations: [{ content: 'Yes', style: { fill: 'White' } }] },
        { id: 'RadialConnector4', sourceID: 'Radial1', targetID: 'Radial5', annotations: [{ content: 'Yes', style: { fill: 'White' } }] },
        { id: 'RadialConnector5', sourceID: 'Radial1', targetID: 'Radial6', annotations: [{ content: 'Yes', style: { fill: 'White' } }] },
    ];
    //initialize the diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '580px', nodes: nodes,
        connectors: connectors,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        pageSettings: { width: 550, height: 500, multiplePage: true },
        getConnectorDefaults: function (connector, diagram) {
            connector.style.strokeColor = '#6d6d6d';
            return connector;
        }
    });
    var items = [{ text: 'JPG' }, { text: 'PNG' }, { text: 'BMP' }, { text: 'SVG' }];
    //DropDownButton used to perform exporting.
    btnObj = new ej.splitbuttons.DropDownButton({
        items: items, iconCss: 'e-ddb-icons e-export', content: 'Export', select: onselect,
    });
    //enable or disable the multiple page printing and exporting.
    checkBoxObj = new ej.buttons.CheckBox({
        checked: false, label: 'Multiple Page',
    });
    // create and add printing and exporting option in ToolBar.
    toolbarObj = new ej.navigations.Toolbar({
        clicked: onItemClick,
        items: [
            {
                type: 'Input', text: 'Export', template: '<button id="custombtn" style="width:100%;"></button>'
            },
            {
                type: 'Button', text: 'Print', prefixIcon: 'e-ddb-icons e-print',
            },
            {
                type: 'Input', template: checkBoxObj
            },
        ]
    });
    toolbarObj.appendTo('#toolbar_default');
    btnObj.appendTo('#custombtn');
    diagram.appendTo('#diagram');
    diagram.fitToPage({ mode: 'Width' });
};