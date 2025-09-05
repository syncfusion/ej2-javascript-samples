/*jslint esversion: 6 */
/**
 * Pipeline and Instrumentation Diagram
 */

// Import essential modules from ej.diagrams
var Diagram = ej.diagrams.Diagram;
var SnapConstraints = ej.diagrams.SnapConstraints;
var ConnectorBridging = ej.diagrams.ConnectorBridging;
var NodeConstraints = ej.diagrams.NodeConstraints;
var PortVisibility = ej.diagrams.PortVisibility;
var FlipDirection = ej.diagrams.FlipDirection;
var DiagramTools = ej.diagrams.DiagramTools;

// Import other controls
var Switch = ej.buttons.Switch;
var NumericTextBox = ej.inputs.NumericTextBox;
var LinearGauge = ej.lineargauge.LinearGauge;
var Annotations = ej.lineargauge.Annotations;

// Inject dependencies
LinearGauge.Inject(Annotations);
Diagram.Inject(ConnectorBridging);

// Global variables
var numericBox;
var gauge;
var tankFlow1 = true;
var tankFlow2 = true;
var tankFlow3 = true;
var pumpflow = true;
var autoStopped = false;
var isDiagramCreated = false;
var diagram;
var pressureInterval;
var animationIntervals = {};
var gradualStopIntervals = {};
var checkbox;
var checkValve1CloseBtn;
var checkValve2CloseBtn;
var checkValve3CloseBtn;
var inputTankOn = false;

// System states
var isSystemLocked = false; // When pump is off, lock tank valves
var isStorageShutdown = false; // When storage is off but pump can still be controlled

// Gradient definitions
var tank1RadialGradient = {
    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
    stops: [{ color: 'white', offset: 0 }, { color: '#e88a25', offset: 100 }],
    type: 'Radial'
};
var tank2RadialGradient = {
    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
    stops: [{ color: 'white', offset: 0 }, { color: 'purple', offset: 100 }],
    type: 'Radial'
};
var tankGradientColor = {
    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
    stops: [{ color: 'white', offset: 0 }, { color: '#76b5c5', offset: 100 }],
    type: 'Radial'
};
var storageTankGradientColor = {
    cx: 50, cy: 50, fx: 50, fy: 50, r: 80,
    stops: [{ color: 'white', offset: 0 }, { color: '#CECECE', offset: 100 }],
    type: 'Radial'
};

// Nodes array
var nodes = [
    { id: 'Chemical', offsetX: 720, offsetY: 20, annotations: [{ content: 'Chemical Reactor System P&ID', style: { fontSize: 18, bold: true } }], shape: { type: 'Text' }, constraints: NodeConstraints.Default & ~NodeConstraints.Select },
    { id: 'tank1Top', offsetX: 200, offsetY: 225, height: 50, width: 100, shape: { type: 'Basic', shape: 'Ellipse' }, style: { gradient: tank1RadialGradient }, constraints: NodeConstraints.Default & ~NodeConstraints.Select },
    { id: 'tank1Bottom', offsetX: 200, offsetY: 375, height: 50, width: 100, shape: { type: 'Basic', shape: 'Ellipse' }, style: { gradient: tank1RadialGradient } },
    { id: 'tank1container', offsetX: 200, offsetY: 300, height: 150, width: 100, shape: { type: 'Basic', shape: 'Rectangle' }, style: { gradient: tank1RadialGradient }, annotations: [{ content: 'Tank1', style: { color: 'black' } }] },
    { id: 'Tank1Group', children: ['tank1Top', 'tank1Bottom', 'tank1container'] },
    { id: 'tank2Top', offsetX: 370, offsetY: 225, height: 50, width: 100, shape: { type: 'Basic', shape: 'Ellipse' }, style: { gradient: tank2RadialGradient } },
    { id: 'tank2Bottom', offsetX: 370, offsetY: 375, height: 50, width: 100, shape: { type: 'Basic', shape: 'Ellipse' }, style: { gradient: tank2RadialGradient } },
    { id: 'tank2container', offsetX: 370, offsetY: 300, height: 150, width: 100, shape: { type: 'Basic', shape: 'Rectangle' }, style: { gradient: tank2RadialGradient }, annotations: [{ content: 'Tank2', style: { color: 'black' } }] },
    { id: 'Tank2Group', children: ['tank2Top', 'tank2Bottom', 'tank2container'] },
    { id: 'tank3Top', offsetX: 750, offsetY: 325, height: 70, width: 170, shape: { type: 'Basic', shape: 'Ellipse' }, style: { gradient: tankGradientColor } },
    { id: 'tank3Bottom', offsetX: 750, offsetY: 575, height: 70, width: 170, shape: { type: 'Basic', shape: 'Ellipse' }, style: { gradient: tankGradientColor } },
    { id: 'reacterInletThread1', offsetX: 810, offsetY: 290, shape: { type: 'Flow', shape: 'Data' }, height: 25, width: 35, rotateAngle: 10, style: { fill: '#469A22' } },
    { id: 'reacterInletThread2', offsetX: 750, offsetY: 278, shape: { type: 'Basic', shape: 'Rectangle' }, height: 25, width: 15, style: { fill: '#656764' } },
    { id: 'reacterInletThread3', offsetX: 750, offsetY: 268, shape: { type: 'Basic', shape: 'Rectangle' }, height: 10, width: 25, style: { fill: '#656764' } },
    { id: 'pressureGuageNode', offsetX: 600, offsetY: 130, style: { fill: 'green' }, height: 70, width: 70, shape: { type: 'HTML', content: '<div class="pressure-container" style="width:100%;height:100%"><div class="pressure-indicator"><div class="pressure-gauge"><div class="needle" id="needle"></div></div><div class="pressure-value" id="pressureValue"> 0 PSI</div></div></div>' } },
    { id: 'pumpBase', offsetX: 750, offsetY: 110, shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, height: 100, width: 100, rotateAngle: 90, flip: FlipDirection.Vertical, style: { fill: '#E2EAF4' } },
    { id: 'pumpBody', offsetX: 750, offsetY: 110, shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, height: 90, width: 90, rotateAngle: 90, style: { fill: '#E2EAF4' } },
    { id: 'pumpRotator', offsetX: 750, offsetY: 110, shape: { type: 'HTML', content: '<div style="display:flex;left: -25px;position: absolute;"><div class="pump-container"><div class="pump-body"></div><div class="fan-blades" id="fan"><div class="blade"></div><div class="blade"></div><div class="hub"></div></div></div><div id="pumpCheckBoxContainer"><input id="pumpCheckBox" type="checkbox"/></div></div>' }, height: 50, width: 50 },
    { id: 'pumpGroup', children: ['pumpBase', 'pumpBody', 'pumpRotator'] },
    { id: 'tank3container', offsetX: 750, offsetY: 450, height: 250, width: 170, shape: { type: 'Basic', shape: 'Rectangle' }, style: { gradient: tankGradientColor }, annotations: [{ content: 'STIRRED TANK \nREACTOR (STR)', style: { color: 'black', fontSize: 20, bold: true, italic: true } }] },
    { id: 'tank3cooler', offsetX: 750, offsetY: 490, height: 250, width: 185, shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 50 }, style: { fill: "#3D58B0" } },
    { id: 'Tank3Group', children: ['tank3cooler', 'tank3Top', 'tank3Bottom', 'tank3container'] },
    { id: 'coolantcontroller', offsetX: 500, offsetY: 650, height: 70, width: 150, annotations: [{ content: 'Coolant Controller', style: { color: 'Orange', fontSize: 15, italic: true, bold: true }, offset: { x: 0.5, y: 0.8 } }], shape: { type: 'Flow', shape: 'Card' }, style: { fill: "#656874" } },
    { id: 'coolantValue', offsetX: 500, offsetY: 650, height: 60, width: 100, shape: { type: 'HTML', content: '<div><input id="numeric" type="text"/></div>' }, style: { fill: "#656874" } },
    { id: 'thermometerNode', offsetX: 920, offsetY: 600, height: 100, width: 100, shape: { type: 'HTML', content: '<div style="width:100%;height:100%"><div id="thermometer"></div></div>' }, style: { fill: "#656874" } },
    // Control valve groups
    { id: 'controlvalve1', offsetX: 450, offsetY: 100, shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve2', offsetX: 420, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve3', offsetX: 450, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 50, style: { fill: '#65B091' } },
    { id: 'controlvalve4', offsetX: 480, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve5', offsetX: 450, offsetY: 90, shape: { type: 'Basic', shape: 'Ellipse' }, height: 5, width: 35, style: { fill: '#65B091' } },
    { id: 'controlvalveBox1', offsetX: 450, offsetY: 115, shape: { type: 'HTML', content: '<div style="height:100%;width:100%"><div id="showFlowContainer1" style="background:#ffb734;height:100%;width:100%;border-radius: 3px;border:1px solid"></div><div class="switch-container"><div id="switch-buttons1"></div></div></div>' }, height: 15, width: 35, style: { fill: '#65B091' } },
    { id: 'controlValveGroup1', children: ['controlvalve1', 'controlvalve2', 'controlvalve3', 'controlvalve4', 'controlvalve5', 'controlvalveBox1'], offsetX: 270, offsetY: 500 },
    { id: 'controlvalve6', offsetX: 450, offsetY: 100, shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve7', offsetX: 420, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve8', offsetX: 450, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 50, style: { fill: '#65B091' } },
    { id: 'controlvalve9', offsetX: 480, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve10', offsetX: 450, offsetY: 90, shape: { type: 'Basic', shape: 'Ellipse' }, height: 5, width: 35, style: { fill: '#65B091' } },
    { id: 'controlvalveBox2', offsetX: 450, offsetY: 115, shape: { type: 'HTML', content: '<div style="height:100%;width:100%"><div id="showFlowContainer2" style="background:#7C099C;height:100%;width:100%;border-radius: 3px;border:1px solid"></div><div class="switch-container"><div id="switch-buttons2"></div></div></div>' }, height: 15, width: 35, style: { fill: '#65B091' } },
    { id: 'controlValveGroup2', children: ['controlvalve6', 'controlvalve7', 'controlvalve8', 'controlvalve9', 'controlvalve10', 'controlvalveBox2'], offsetX: 450, offsetY: 130 },
    { id: 'reacterOutletThread1', offsetX: 855, offsetY: 407.5, shape: { type: 'Basic', shape: 'Rectangle' }, height: 25, width: 15, style: { fill: '#C9B100' } },
    { id: 'reacterOutletThread2', offsetX: 845, offsetY: 407.5, shape: { type: 'Basic', shape: 'Rectangle' }, height: 35, width: 25, style: { fill: '#C9B100' } },
    { id: 'controlvalve11', offsetX: 450, offsetY: 100, shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve12', offsetX: 420, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve13', offsetX: 450, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 50, style: { fill: '#65B091' } },
    { id: 'controlvalve14', offsetX: 480, offsetY: 115, shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10, style: { fill: '#65B091' } },
    { id: 'controlvalve15', offsetX: 450, offsetY: 90, shape: { type: 'Basic', shape: 'Ellipse' }, height: 5, width: 35, style: { fill: '#65B091' } },
    { id: 'controlvalveBox3', offsetX: 450, offsetY: 115, shape: { type: 'HTML', content: '<div style="height:100%;width:100%"><div id="showFlowContainer3" style="background:red;height:100%;width:100%;border-radius: 3px;border:1px solid"></div><div class="switch-container"><div id="switch-buttons3"></div></div></div>' }, height: 15, width: 35, style: { fill: '#65B091' } },
    { id: 'controlValveGroup3', children: ['controlvalve11', 'controlvalve12', 'controlvalve13', 'controlvalve14', 'controlvalve15', 'controlvalveBox3'], offsetX: 970, offsetY: 400 },
    { id: 'mixer1', shape: { type: 'Basic', shape: 'Octagon' }, offsetX: 550, offsetY: 230, height: 70, width: 70, annotations: [{ content: 'Mixer' }], style: { gradient: { cx: 50, cy: 50, fx: 25, fy: 25, r: 50, stops: [{ color: 'white', offset: 0 }, { color: '#415086', offset: 100 }], type: 'Radial' } } },
    { id: 'temperatureAlarm', offsetX: 680, offsetY: 292, height: 30, width: 30, annotations: [{ content: "TA", rotationReference: 'Page', style: { bold: true } }], shape: { type: 'Flow', shape: 'DirectData' }, rotateAngle: 245, style: { gradient: { cx: 50, cy: 50, fx: 25, fy: 25, r: 50, stops: [{ color: 'white', offset: 0 }, { color: '#EA8257', offset: 100 }], type: 'Radial' } } },
    { id: 'leveltransmitter', offsetX: 800, offsetY: 350, height: 30, width: 50, shape: { type: 'Flow', shape: 'Process' }, style: { fill: '#79247D' }, annotations: [{ content: '54 L', style: { color: 'gold', bold: true } }] },
    { id: 'productInletThread1', offsetX: 1200, offsetY: 500, shape: { type: 'Basic', shape: 'Rectangle' }, height: 10, width: 30, style: { fill: '#D47A39' } },
    { id: 'ProductTank', offsetX: 1200, offsetY: 600, height: 200, width: 200, shape: { type: 'Flow', shape: 'PreDefinedProcess' }, style: { gradient: storageTankGradientColor }, annotations: [{ content: "Storage", offset: { x: 0.5, y: 0.1 } }, { content: 'Tank', offset: { x: 0.5, y: 0.9 } }] },
    { id: 'ProductTankQuantity', offsetX: 1200, offsetY: 600, height: 130, width: 100, shape: { type: "HTML", content: '<div class="product-container"><div class="product" id="productStorage"></div></div>' } }
];

// Connectors array
var connectors = [
    { id: 'Connector1', sourceID: 'Tank1Group', targetID: 'controlvalve2', sourcePortID: "bottomPort", targetPortID: "inletLeftPort", style: { strokeColor: 'orange', strokeDashArray: '5,5' }, addInfo: { animate: true } },
    { id: 'Connector2', sourceID: 'Tank2Group', targetID: 'controlvalve7', sourcePortID: "topPort", targetPortID: "inletLeftPort", style: { strokeColor: '#7C099C' }, addInfo: { animate: true } },
    { id: 'Connector3', sourceID: 'controlvalve4', targetID: 'mixer1', sourcePortID: "outletRightPort", targetPortID: "bottomPort", style: { strokeColor: 'orange' }, addInfo: { animate: true } },
    { id: 'Connector4', sourceID: 'controlvalve9', targetID: 'mixer1', sourcePortID: "outletRightPort", targetPortID: "topPort", style: { strokeColor: '#7C099C' }, addInfo: { animate: true } },
    { id: 'Connector5', sourceID: 'coolantcontroller', targetID: 'tank3cooler', sourcePortID: "outletRightPort", targetPortID: "inletLeftPort", style: { strokeColor: 'blue' } },
    { id: 'Connector6', sourceID: 'coolantcontroller', targetID: 'tank3cooler', sourcePortID: "inletLeftPort", targetPortID: "bottomPort", style: { strokeColor: '#d6185bff' } },
    { id: 'Connector9', sourceID: 'reacterOutletThread1', targetID: 'controlvalve12', sourcePortID: "outletRightPort", targetPortID: "inletLeftPort", style: { strokeColor: 'red' }, addInfo: { animate: true } },
    { id: 'Connector10', sourceID: 'controlvalve14', targetID: 'productInletThread1', sourcePortID: "outletRightPort", targetPortID: "topPort", style: { strokeColor: 'red' }, addInfo: { animate: true } },
    { id: 'Connector11', sourceID: 'mixer1', targetID: 'pumpBase', sourcePortID: "outletRightPort", targetPortID: "pumpPort1", style: { strokeColor: '#8DC276' }, addInfo: { animate: true } },
    { id: 'Connector12', sourceID: 'pumpBase', targetID: 'reacterInletThread1', sourcePortID: "pumpPort2", targetPortID: "topPort", style: { strokeColor: '#8DC276' }, addInfo: { animate: true } },
    { id: 'Connector13', sourceID: 'mixer1', targetID: 'pressureGuageNode', sourcePortID: "mixertopressureport", targetPortID: "pressuretomixerport", style: { strokeColor: 'black', strokeWidth: 1, strokeDashArray: '5,1' } },
    { id: 'Connector14', sourceID: 'Tank3Group', targetID: 'thermometerNode', sourcePortID: "tankport10", targetPortID: "thermoPort", style: { strokeColor: 'black', strokeWidth: 1, strokeDashArray: '5,1' } }
];

this.default = function () {
    diagram = new Diagram({
        width: '100%', height: '700px', nodes: nodes, connectors: connectors, tool: DiagramTools.ZoomPan,
        snapSettings: { constraints: SnapConstraints.None }, getNodeDefaults: getNodeDefaults, getConnectorDefaults: getConnectorDefaults, created: onCreated, load: load
    });
    diagram.appendTo('#diagram');

    function load() {
        setTimeout(function () {
            if (isDiagramCreated) {
                appendHTMLElements();
                diagram.fitToPage({ canZoomOut: true });
                runAnimation();
            }
        });
    }
    function getNodeDefaults(node) {
        node.ports = getPorts(node.id);
        node.constraints = (NodeConstraints.Default | NodeConstraints.ReadOnly) & ~NodeConstraints.Select;
        node.addInfo = { valve: true };
        return node;
    }

    function getPorts(nodeId) {
        var staticPorts = [
            { id: 'inletLeftPort', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Hidden },
            { id: 'outletRightPort', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Hidden },
            { id: 'topPort', offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Hidden },
            { id: 'bottomPort', offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Hidden }
        ];
        if (nodeId === "tank1") staticPorts.push({ id: 'tankPort1', offset: { x: 1, y: 0.2 }, visibility: PortVisibility.Visible }, { id: 'tankPort2', offset: { x: 1, y: 0.8 }, visibility: PortVisibility.Visible });
        if (nodeId === "mixer1") staticPorts.push({ id: 'mixertopressureport', offset: { x: 0.94, y: 0.1 }, visibility: PortVisibility.Hidden });
        if (nodeId === "pressureGuageNode") staticPorts.push({ id: 'pressuretomixerport', offset: { x: 0.7, y: 0.5 }, visibility: PortVisibility.Hidden });
        if (nodeId === "thermometerNode") staticPorts.push({ id: 'thermoPort', offset: { x: 0.2, y: 0.3 }, visibility: PortVisibility.Hidden });
        if (nodeId === "Tank3Group") staticPorts.push({ id: 'tankport10', offset: { x: 0.97, y: 0.8 }, visibility: PortVisibility.Hidden });
        if (nodeId === "pumpBase") staticPorts.push({ id: 'pumpPort1', offset: { x: 0.94, y: 0.1 }, visibility: PortVisibility.Hidden }, { id: 'pumpPort2', offset: { x: 0.97, y: 0.95 }, visibility: PortVisibility.Hidden });
        return staticPorts;
    }

    function getConnectorDefaults(connector) {
        connector.type = 'Orthogonal';
        connector.cornerRadius = 3;
        if (connector.id === "Connector5" || connector.id === "Connector6") {
            connector.style = { strokeWidth: 5, strokeDashArray: "10,1" };
        } else {
            connector.style = { strokeWidth: 10 };
        }
        connector.targetDecorator = { shape: "None" };
        if (connector.id === "Connector13" || connector.id === "Connector14") {
            connector.style = { strokeWidth: 2, strokeDashArray: "10,1" };
            connector.type = "Straight";
        }
        return connector;
    }

    function onCreated() {
        isDiagramCreated = true;
        appendHTMLElements();
        diagram.fitToPage({ canZoomOut: true });
        runAnimation(); // Start all animations initially
    }

    function appendHTMLElements() {
        appendTemperatureControl();
        appendCoolantValue();
        addPumpCheckBox();
        setTimeout(function () { appendvalveControls(); }, 10);
    }

    // ===== CORE SYSTEM LOGIC =====

    function shutDownPump() {
        isSystemLocked = true;
        pumpflow = false;

        // Stop pump animations
        startPumpAnimation(false);
        updatePressureAnimation(true);
        animatePathFlow("Connector11_path", false, '#A7A2A2', true);
        setTimeout(function () { animatePathFlow("Connector12_path", false, "#A7A2A2", true); }, 500);
        setTimeout(function () {
            if (checkValve3CloseBtn && checkValve3CloseBtn.checked) {
                checkValve3CloseBtn.toggle();
            }
        }, 600);
        setTimeout(function () { // Close all valves including storage valve when pump shuts down
            if (checkValve1CloseBtn && checkValve1CloseBtn.checked) {
                checkValve1CloseBtn.toggle();
            }
            if (checkValve2CloseBtn && checkValve2CloseBtn.checked) {
                checkValve2CloseBtn.toggle();
            }
        }, 700);
    }
    function startUpPump() {
        isSystemLocked = false;  // Important: Reset system lock when pump starts
        isStorageShutdown = false;  // Reset storage shutdown state
        pumpflow = true;
        // Start pump animations
        startPumpAnimation(true);
        updatePressureAnimation(false);
        animatePathFlow("Connector11_path", true, '#8DC276');
        setTimeout(function () { animatePathFlow("Connector12_path", true, "#8DC276", true); }, 500);
        setTimeout(function () {
            if (checkValve1CloseBtn && !checkValve1CloseBtn.checked && !inputTankOn) {
                checkValve1CloseBtn.toggle();
            }
            if (checkValve2CloseBtn && !checkValve2CloseBtn.checked && !inputTankOn) {
                checkValve2CloseBtn.toggle();
            }
        }, 600);
        setTimeout(function () {
            if (checkValve3CloseBtn && !checkValve3CloseBtn.checked) {
                checkValve3CloseBtn.toggle();
            }
            if (checkbox && !checkbox.checked) {
                checkbox.toggle();
            }
        }, 700);
        autoStopped = false;
    }

    function shutDownStorage() {
        isStorageShutdown = true;
        // Stop storage animations
        animatePathFlow("Connector9_path", false, 'red', true);
        setTimeout(function () { animatePathFlow("Connector10_path", false, "#A7A2A2", true); }, 500);
        startStorageAnimation(false);
    }
    function startUpStorage() {
        isStorageShutdown = false;
        animatePathFlow("Connector9_path", true, 'red');
        setTimeout(function () { animatePathFlow("Connector10_path", true, "red"); }, 500);
        startStorageAnimation(true);
    }
    // NEW FUNCTION: Start entire system from storage valve
    function startUpSystemFromStorage() {
        if (checkbox && !checkbox.checked) {
            checkbox.toggle();
        }
        if (checkValve1CloseBtn && !checkValve1CloseBtn.checked) {
            checkValve1CloseBtn.toggle();
        }
        if (checkValve2CloseBtn && !checkValve2CloseBtn.checked) {
            checkValve2CloseBtn.toggle();
        }
        animatePathFlow("Connector9_path", true, 'red');
        setTimeout(function () { animatePathFlow("Connector10_path", true, "red"); }, 500);
        startStorageAnimation(true);
        isSystemLocked = false;
        isStorageShutdown = false;
    }
    function checkTankValveShutdown() {
        // If both tank valves are manually closed, shut down entire system
        if (!tankFlow1 && !tankFlow2 && pumpflow) {
            if (checkbox && checkbox.checked) {
                checkbox.toggle();
            }
            if (checkValve3CloseBtn && checkValve3CloseBtn.checked) {
                checkValve3CloseBtn.toggle();
            }
        }
    }
    // ===== VALVE CONTROL LOGIC =====
    function appendvalveControls() {
        var valveButtons = ['valveButton1', 'valveButton2', 'valveButton3'];
        var switchContainers = ['switch-buttons1', 'switch-buttons2', 'switch-buttons3'];

        // Cleanup existing elements
        valveButtons.forEach((id, index) => {
            var existingInput = document.getElementById(id);
            if (existingInput) {
                var switchInstance = (existingInput).ej2_instances[0];
                if (switchInstance && switchInstance instanceof Switch) {
                    switchInstance.destroy();
                }
                existingInput.remove(); // Remove the HTML element from the DOM
            }

            var switchContainer = document.getElementById(switchContainers[index]);
            if (switchContainer) {
                while (switchContainer.firstChild) {
                    switchContainer.firstChild.remove();
                }
            }
        });

        
        // Valve 1 (Tank 1 inlet) - Start as ON
        var newInput1 = document.createElement('input');
        newInput1.type = 'checkbox';
        newInput1.id = 'valveButton1';
        document.getElementById('switch-buttons1').appendChild(newInput1);

        checkValve1CloseBtn = new Switch({
            checked: true,
            change: function (args) {
                if (isSystemLocked && args.checked) {
                    isSystemLocked = false;
                    inputTankOn = true;
                    setTimeout(() => inputTankOn = false, 2000);
                    startUpPump();
                    startUpStorage();
                }
                valveStateClick1(args.checked ? 'Open' : 'Close');
            }
        });
        checkValve1CloseBtn.appendTo('#valveButton1');

        // Valve 2 (Tank 2 inlet) - Start as ON
        var newInput2 = document.createElement('input');
        newInput2.type = 'checkbox';
        newInput2.id = 'valveButton2';
        document.getElementById('switch-buttons2').appendChild(newInput2);

        checkValve2CloseBtn = new Switch({
            checked: true,
            change: function (args) {
                if (isSystemLocked && args.checked) {
                    isSystemLocked = false;
                    inputTankOn = true;
                    setTimeout(() => inputTankOn = false, 2000);
                    startUpPump();
                    startUpStorage();
                }
                valveStateClick2(args.checked ? 'Open' : 'Close');
            }
        });
        checkValve2CloseBtn.appendTo('#valveButton2');

        // Valve 3 (Storage outlet) - Start as ON
        var newInput3 = document.createElement('input');
        newInput3.type = 'checkbox';
        newInput3.id = 'valveButton3';

        document.getElementById('switch-buttons3').appendChild(newInput3);
        checkValve3CloseBtn = new Switch({
            checked: true,
            change: function (args) {
                if (!args.checked) {
                    // Storage valve manually closed - shut down pump if running
                    if (checkbox && checkbox.checked) {
                        checkbox.toggle(); // This will trigger shutDownPump()
                    }
                    shutDownStorage();
                } else {
                    // Storage valve manually opened
                    if (isSystemLocked || isStorageShutdown) {
                        // If system was locked, restart the entire system
                        startUpSystemFromStorage();
                    } else if (pumpflow && !isSystemLocked) {
                        // Normal operation - just start storage
                        startUpStorage();
                    }
                }
                valveStateClick3(args.checked ? 'Open' : 'Close');
            }
        });
        checkValve3CloseBtn.appendTo('#valveButton3');
    }
    function valveStateClick1(action) {
        var flow = document.getElementById("showFlowContainer1");
        updateValveState(flow, action, 1);
    }
    function valveStateClick2(action) {
        var flow = document.getElementById("showFlowContainer2");
        updateValveState(flow, action, 2);
    }
    function valveStateClick3(action) {
        var flow = document.getElementById("showFlowContainer3");
        updateValveState(flow, action, 3);
    }
    function updateValveState(flow, action, valveNumber) {
        if (!flow) return;

        if (action === "Close") {
            flow.style.background = "#e5e7eb";

            switch (valveNumber) {
                case 1:
                    tankFlow1 = false;
                    animatePathFlow("Connector1_path", false, '#ffb734', true);
                    setTimeout(function () { animatePathFlow("Connector3_path", false, "#A7A2A2", true); }, 500);
                    break;
                case 2:
                    tankFlow2 = false;
                    animatePathFlow("Connector2_path", false, '#7C099C', true);
                    setTimeout(function () { animatePathFlow("Connector4_path", false, "#A7A2A2", true); }, 500);
                    break;
                case 3:
                    tankFlow3 = false;
                    animatePathFlow("Connector9_path", false, 'red', true);
                    setTimeout(function () { animatePathFlow("Connector10_path", false, "#A7A2A2", true); }, 500);
                    startStorageAnimation(false);
                    break;
            }

            // Check if both tank valves are closed
            if (valveNumber <= 2) {
                checkTankValveShutdown();
            }

        } else if (action === "Open") {
            // Check conditions for opening valves
            var canOpen = false;

            if (valveNumber <= 2) {
                // Tank valves can only open if pump is running and system is not locked
                canOpen = pumpflow && !isSystemLocked && !isStorageShutdown;
            } else if (valveNumber === 3) {
                // Storage valve can open if pump is running and system is not locked
                canOpen = pumpflow && !isSystemLocked;
            }
            if (canOpen) {
                switch (valveNumber) {
                    case 1:
                        tankFlow1 = true;
                        flow.style.background = "#ffb734";
                        animatePathFlow("Connector1_path", true, '#ffb734');
                        setTimeout(function () { animatePathFlow("Connector3_path", true, "#ffb734"); }, 100);
                        break;
                    case 2:
                        tankFlow2 = true;
                        flow.style.background = "#7C099C";
                        animatePathFlow("Connector2_path", true, '#7C099C');
                        setTimeout(function () { animatePathFlow("Connector4_path", true, "#7C099C"); }, 100);
                        break;
                    case 3:
                        tankFlow3 = true;
                        flow.style.background = "red";
                        animatePathFlow("Connector9_path", true, 'red');
                        setTimeout(function () { animatePathFlow("Connector10_path", true, "red"); }, 100);
                        startStorageAnimation(true);
                        break;
                }
            }
        }
    }

    // ===== PUMP CONTROL LOGIC =====
    function addPumpCheckBox() {
        if (checkbox) checkbox.destroy();
        checkbox = new Switch({
            checked: true, // Start as ON
            change: onCheckBoxChange
        });
        checkbox.appendTo('#pumpCheckBox');
    }
    function onCheckBoxChange(args) {
        if (args.checked) {
            startUpPump();
        } else {
            // Pump manually turned OFF
            shutDownPump();
        }
    }
    // ===== ANIMATION FUNCTIONS =====

    function runAnimation() {
        addFlowAnimationClass();
        startConnectorAnimation();
        startPumpAnimation(true);
        startStorageAnimation(true);
        updatePressureAnimation(false);
    }

    function addFlowAnimationClass() {
        var style = document.createElement('style');
        style.textContent = '@keyframes dashFlow { to { stroke-dashoffset: -15; } } .flow-animation { stroke-dasharray: 10, 10 !important; stroke-dashoffset: 0 !important; animation: dashFlow 1s linear infinite !important; }';
        document.head.appendChild(style);
    }

    function startPumpAnimation(start) {
        var pumpElement = document.getElementById('fan');
        if (pumpElement) {
            if (start) {
                pumpElement.classList.add('rotate-animation');
            } else {
                pumpElement.classList.remove('rotate-animation');
            }
        }
    }

    function startStorageAnimation(on) {
        var storageElement = document.getElementById('productStorage');
        if (!storageElement) return;

        if (on) {
            // Restart animation
            storageElement.classList.remove('fill-animation', 'paused');
            void storageElement.offsetWidth; // Force reflow
            storageElement.classList.add('fill-animation');
        } else {
            // Pause animation without removing it
            storageElement.classList.add('paused');
        }
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 0, g: 0, b: 0 };
    }

    function animatePathFlow(pathId, animate, color, slow) {
        var dashArray = "10,5"; var speed = 30;
        var path = document.getElementById(pathId);
        if (!path) return;
        // **FIRST: Clean up any existing intervals for this path**
        if (animationIntervals[pathId]) {
            clearInterval(animationIntervals[pathId]);
            delete animationIntervals[pathId];
        }
        if (gradualStopIntervals[pathId]) {
            clearInterval(gradualStopIntervals[pathId]);
            delete gradualStopIntervals[pathId];
        }
        if (animate) {
            var offset = 0;
            path.setAttribute("stroke", color);
            path.setAttribute("stroke-dasharray", dashArray);

            // Start new interval and store its ID
            var intervalId = window.setInterval(() => {
                offset = (offset - 1) % 1000;
                path.setAttribute("stroke-dashoffset", offset);
            }, speed);
            animationIntervals[pathId] = intervalId;
        } else {
            if (slow) {
                var currentColor = path.getAttribute('stroke') || color;
                var offsetAnimation = parseFloat(path.getAttribute("stroke-dashoffset") || "0");
                var step = 0;
                var steps = 30;
                var duration = 1000;
                var interval = duration / steps;

                var startColor = hexToRgb(currentColor);
                var endColor = hexToRgb(currentColor); // white or background color

                gradualStopIntervals[pathId] = window.setInterval(() => {
                    step++;
                    offsetAnimation = (offsetAnimation - 1) % 1000;
                    path.setAttribute("stroke-dashoffset", offsetAnimation.toString());

                    var progress = step / steps;
                    var r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
                    var g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
                    var b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);
                    path.setAttribute("stroke", color);

                    if (step >= steps) {
                        // **CRITICAL: Complete cleanup when animation finishes**
                        clearInterval(gradualStopIntervals[pathId]);
                        delete gradualStopIntervals[pathId];
                        path.setAttribute("stroke", color); // Final color
                        path.setAttribute("stroke-dasharray", "none");
                        path.setAttribute("stroke-dashoffset", "0"); // Reset offset
                    }
                }, interval);

            } else {
                // Immediate stop
                path.setAttribute("stroke", color || "black");
                path.setAttribute("stroke-dasharray", "none");
                path.setAttribute("stroke-dashoffset", "0");
            }

        }
    }


    function startConnectorAnimation() {
        var diagramConnectors = diagram.connectors;
        for (var i = 0; i < diagramConnectors.length; i++) {
            // Toggle between two styles to simulate movement
            var currentConnector = diagramConnectors[i];
            var sourceNode = diagram.getObject(currentConnector.sourceID);
            if (sourceNode && sourceNode.addInfo && (sourceNode.addInfo).valve && currentConnector.addInfo && (currentConnector.addInfo).animate) {
                animatePathFlow(currentConnector.id + "_path", true, (currentConnector).style.strokeColor);
            }
        }
    }
    // ===== OTHER CONTROL FUNCTIONS =====
    function appendCoolantValue() {
        if (numericBox) numericBox.destroy();
        numericBox = new NumericTextBox({
            min: -50, max: 75, value: 12, step: 2, format: '##.##',
            change: function (args) {
                if (gauge && gauge.axes && gauge.axes[0] && gauge.axes[0].pointers && gauge.axes[0].pointers[0]) {
                    gauge.axes[0].pointers[0].value = 28 + args.value;
                    gauge.axes[0].pointers[0].color = getColorFromTemperature(28 + args.value);
                }
            }
        });
        numericBox.appendTo('#numeric');
    }

    function appendTemperatureControl() {
        if (gauge) {
            gauge.destroy();
        }
        gauge = new LinearGauge({
            height: "120px",
            container: { width: 4, height: 100, roundedCornerRadius: 5, type: 'Thermometer', border: { width: 1 } },
            background: 'transparent',
            axes: [{
                minimum: -20, maximum: 100,
                pointers: [{ value: 40, height: 10, width: 4, placement: 'Center', offset: 0, markerType: 'Triangle', color: '#2674a5ff', type: 'Bar' }],
                line: {
                    width: 0
                },
                majorTicks: {
                    height: 7, interval: 30
                },
                minorTicks: {
                    height: 0, interval: 5
                },
                labelStyle: {
                    font: { fontFamily: 'inherit' }
                }
            }],
            annotations: [{ content: '<div style="font-size:13px;margin-left: 30px;margin-top: -50px;"> °C </div>', axisIndex: 0, axisValue: 50, x: 0, y: 0, zIndex: '1' }]
        });
        gauge.appendTo('#thermometer');
    }

    function getColorFromTemperature(value) {
        if (value < 30) return 'cyan';
        if (value < 60) return 'blue';
        if (value < 80) return 'orange';
        return 'red';
    }

    function updatePressureAnimation(highPressureMode) {
        if (pressureInterval) {
            clearInterval(pressureInterval);
        }
        pressureInterval = setInterval(() => {
            var randomPressure = highPressureMode ? Math.floor(Math.random() * 16) + 90 : Math.floor(Math.random() * 21) + 20;
            updatePressure(randomPressure);
        }, 2000);
    }

    function updatePressure(psi) {
        var needle = document.getElementById('needle');
        var valueDisplay = document.getElementById('pressureValue');
        if (needle && valueDisplay) {
            psi = Math.max(0, Math.min(psi, 100));
            var angle = -90 + (psi / 100) * 90;
            needle.style.transform = `rotate(${angle}deg)`;
            valueDisplay.textContent = `${psi} PSI`;
        }
    }
};