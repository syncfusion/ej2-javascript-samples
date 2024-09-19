/**
 * Sequence Diagram
 */
//Function to Create nodes by the parameters
function createNode(id, width, height, offsetX, offsetY, shapeType, content, fill, bold) {
    return {
        id: id,
        width: width,
        height: height,
        offsetX: offsetX,
        offsetY: offsetY,
        shape: { type: shapeType, content: content },
        style: { fill: fill, bold: bold }
    };
}
//Function to Create connectors by the parameters
function createConnector(id, sourceX, sourceY, targetX, targetY) {
    return {
        id: id,
        type: 'Straight',
        sourcePoint: { x: sourceX, y: sourceY },
        targetPoint: { x: targetX, y: targetY },
        targetDecorator: { shape: 'None' },
        style: { strokeColor: '#A5A6A7' }
    };
  }
this.default = function () {
// Define nodes for the diagram
var nodes = [
    createNode('employee', 100, 60, 100, 100, 'Text', 'Employee', 'transparent', true),
    createNode('teamLead', 100, 60, 350, 100, 'Text', 'Team Lead', 'transparent', true),
    createNode('dashboard', 100, 60, 600, 100, 'Text', 'Dashboard', 'transparent', true),
    createNode('manager', 100, 60, 850, 100, 'Text', 'Manager', 'transparent', true),
    createNode('leaveRequest', 100, 60, 225, 250, 'Text', 'Leave Request', 'transparent', false),
    createNode('leaveApproval', 100, 60, 225, 484, 'Text', 'Leave Approval', 'transparent', false),
    createNode('checkEmplyeeAvail', 175, 30, 470, 345, 'Text', 'Check Employee availability and task status', 'transparent', false),
    createNode('forwardLeaveMssg', 150, 30, 600, 420, 'Text', 'Forward Leave Request', 'transparent', false),
    createNode('noObjection', 150, 30, 600, 460, 'Text', 'No Objection', 'transparent', false),
    //Basic shape nodes
    {
        id:'employeeNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:250,offsetX:100,offsetY:350,
        style:{fill:'orange',strokeColor:'orange'},
        ports:[{id:'p1',offset:{x:1,y:0.05},visibility:ej.diagrams.PortVisibility.hidden},
                {id:'p2',offset:{x:1,y:0.97},visibility:ej.diagrams.PortVisibility.hidden},]
    },
    {
        id:'teamLeadNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:190,offsetX:350,offsetY:320,
        style:{fill:'orange',strokeColor:'orange'},
        ports:[{id:'p1',offset:{x:0,y:0.07},visibility:ej.diagrams.PortVisibility.hidden},
        {id:'p2',offset:{x:1,y:0.92},visibility:ej.diagrams.PortVisibility.hidden},
        {id:'p3',offset:{x:1,y:0.5},visibility:ej.diagrams.PortVisibility.hidden},]
    },
    {
        id:'dashboardNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:25,offsetX:600,offsetY:320,
        style:{fill:'orange',strokeColor:'orange'},
        ports:[{id:'p1',offset:{x:0,y:0.5},visibility:ej.diagrams.PortVisibility.hidden}]
    },
    {
        id:'managerNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:50,offsetX:850,offsetY:420,
        style:{fill:'orange',strokeColor:'orange'},
        ports:[{id:'p1',offset:{x:0,y:0.1},visibility:ej.diagrams.PortVisibility.hidden},
        {id:'p2',offset:{x:0,y:0.9},visibility:ej.diagrams.PortVisibility.hidden},]
    },
  
];
// Define connectors for the diagram
var connectors = [
    // straight connectors 
    createConnector('employeeCon1', 100, 120, 100, 225),
    createConnector('employeeCon2', 100, 475, 100, 600),
    createConnector('teamLeanCon1', 350, 120, 350, 225),
    createConnector('teamLeanCon2', 350, 415, 350, 600),
    createConnector('dashboardCon1', 600, 120, 600, 307),
    createConnector('dashboardCon2', 600, 333, 600, 600),
    createConnector('managerCon1', 850, 120, 850, 395),
    createConnector('managerCon2', 850, 445, 850, 600),

    // arrow connectors
    {
        id:'empToTeamLead',type:'Straight',sourceID:'employeeNode',sourcePortID:'p1',
        targetID:'teamLeadNode',targetPortID:'p1'
    },
    {
        id:'teamLeadToEmp',type:'Straight',sourcePoint:{x:350,y:465},style:{strokeDashArray:'4 4'},
        targetID:'employeeNode',targetPortID:'p2'
    },
    {
        id:'teamLeadToDash',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p3',
        targetID:'dashboardNode',targetPortID:'p1'
    },
    {
        id:'teamLeadToManager',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p2',
        targetID:'managerNode',targetPortID:'p1'
    },
    {
        id:'managerToTeamLead',type:'Straight',sourceID:'managerNode',sourcePortID:'p2',
        targetPoint:{x:350,y:440},style:{strokeDashArray:'4 4'}
    },
];
// Create a new instance of the diagram
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes,connectors:connectors,
    snapSettings: { constraints: 0 },
    tool: ej.diagrams.DiagramTools.ZoomPan,
    getConnectorDefaults: getConnectorDefaults,
    created:function () {
        diagram.fitToPage();
    }
    });
    // Append the diagram to the DOM
    diagram.appendTo('#diagram');
    // Function to customize connector defaults
    function getConnectorDefaults(connector){
        connector.targetDecorator.style = {fill:'#489ECC',strokeColor:'#489ECC'};
        if(connector.targetDecorator.shape === 'Arrow'){
            connector.style = {strokeColor:'#489ECC',strokeWidth:2};
        }
    }
    
};
