/*jslint esversion: 6 */
/**
 * Neural Network Diagram
 */
ej.diagrams.Diagram.Inject();
this.default = function () {
    // Neural net configurations
    var diagramCreated = false;
    var layerSizes = [3, 5, 4, 2];
    var layerNames = ["Input Layer", "Hidden Layer 1", "Hidden Layer 2", "Output Layer"];
    var layerColors = ["#0087EA", "#FE871F", "#7925E5", "#04AE45"];
    var nodeLabels = [
        ["Feature 1", "Feature 2", "Feature 3"],
        ["H1-1", "H1-2", "H1-3", "H1-4", "H1-5"],
        ["H2-1", "H2-2", "H2-3", "H2-4"],
        ["Output 1", "Output 2"]
    ];
    // For edge stroke color by layer
    var strokeColors = layerColors;

    function getConnectionColor(weight) {
        return (weight >= 0) ? "#2196f3" : "#f44336";
    }
    function getConnectionWidth(absWeight) {
        return Math.max(1, Math.min(3, absWeight * 3));
    }

    /*** Layer label node factory (with color badge) ***/
    function makeLayerLabelNode(i) {
        var color = layerColors[i];
        return {
            id: "label_" + i,
            offsetX: 200 + i * 250,
            offsetY: 50,
            width: 150, height: 40,
            style: { fill: "transparent", strokeColor: "transparent" },
            annotations: [{
                template:
                    '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;">' +
                    '<div style="width:12px;height:12px;border-radius:6px;background:' + color + ';margin-right:10px;"></div>' +
                    '<span style="font-weight:bold;font-size:14px;color:#495057;">' + layerNames[i] + '</span>' +
                    '</div>'
            }],
            constraints: ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Select
        };
    }
    /*** Neuron node creation ***/
    function makeNeuronNode(l, n) {
        var layerName = layerNames[l];
        var nodeLabel = nodeLabels[l][n];
        return {
            id: "neuron_" + l + "_" + n,
            width: 70,
            height: 70,
            offsetX: 200 + l * 250,
            offsetY: 120 + ((5 - layerSizes[l]) * 100 / 2) + n * 100,
            style: {
                fill: layerColors[l],
                strokeColor: strokeColors[l],
                strokeWidth: 2
            },
            shape: { type: "Basic", shape: "Ellipse" },
            annotations: [{
                content: nodeLabel,
                style: { fontSize: 12, color: "white", bold: true }
            }],
            tooltip: {
                content:
                    '<div style="padding:8px 12px; border-radius:6px; font-family:\'Segoe UI\',sans-serif; min-width:160px;">' +
                    '<div style="font-weight:bold;font-size:13px;margin-bottom:4px;">' +
                    '🧠 Neuron Information' +
                    '</div>' +
                    '<hr style="margin:2px 0 5px 0;"/>' +
                    '<div style="font-size:13px;margin-bottom:2px;">' +
                    '<span style="font-weight:bold;">Layer: </span>' +
                    '<span>' + layerName + '</span>' +
                    '</div>' +
                    '<div style="font-size:13px;">' +
                    '<span style="font-weight:bold;">Neuron: </span>' +
                    '<span>' + nodeLabel + '</span>' +
                    '</div>' +
                    '</div>',
                position: "TopCenter"
            },
            constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip
        };
    }

    /*** Connector factory, with weight and custom tooltip ***/
    function makeConnector(l, n, m, weight) {
        var absWeight = Math.abs(weight);
        var weightColor = (weight >= 0) ? "#2ecc71" : "#e74c3c";
        var src = "neuron_" + l + "_" + n;
        var tgt = "neuron_" + (l + 1) + "_" + m;
        return {
            id: "conn_" + l + "_" + n + "_" + m,
            sourceID: src,
            targetID: tgt,
            type: "Straight",
            style: {
                strokeColor: getConnectionColor(weight),
                strokeWidth: getConnectionWidth(absWeight),
                opacity: 0.7
            },
            targetDecorator: {
                shape: "Arrow",
                style: {
                    fill: getConnectionColor(weight),
                    strokeColor: getConnectionColor(weight)
                }
            },
            annotations: [{
                content: String(weight),
                style: { fontSize: 13, color: "#495057", fill: "white" }
            }],
            tooltip: {
                content:
                    '<div style="padding:8px 12px; border-radius:6px; font-family:\'Segoe UI\',sans-serif; min-width:160px;">' +
                    '<div style="font-weight:bold;font-size:13px;margin-bottom:4px;">' +
                    '🔗 Connection Details' +
                    '</div>' +
                    '<hr style="margin:2px 0 5px 0;"/>' +
                    '<div style="font-size:13px;margin-bottom:2px;">' +
                    '<span style="font-weight:bold;">Weight: </span>' +
                    '<span style="color:' + weightColor + ';font-weight:bold;">' + weight + '</span>' +
                    '</div>' +
                    '<div style="font-size:13px;margin-bottom:1px;">' +
                    '<span style="font-weight:bold;">From: </span>' +
                    '<span>' + src + '</span>' +
                    '</div>' +
                    '<div style="font-size:13px;">' +
                    '<span style="font-weight:bold;">To: </span>' +
                    '<span>' + tgt + '</span>' +
                    '</div>' +
                    '</div>',
                position: "TopCenter"
            },
            constraints: ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.Tooltip
        };
    }

    /*** Build all nodes/connectors as arrays ***/
    var nodes = [];
    var connectors = [];

    // Layer labels
    for (let i = 0; i < layerNames.length; i++) { 
        nodes.push(makeLayerLabelNode(i));
    }
    // Neurons
    for (let l = 0; l < layerSizes.length; l++) {
        for (let n = 0; n < layerSizes[l]; n++) {
            nodes.push(makeNeuronNode(l, n));
        }
    }

    // Deterministic random for reproducible weights
    var randomSeed = 42;
    function random() {
        randomSeed = Math.sin(randomSeed) * 10000;
        return randomSeed - Math.floor(randomSeed);
    }

    // Connectors
    for (var l = 0; l < layerSizes.length - 1; l++) {
        for (var n = 0; n < layerSizes[l]; n++) {
            for (var m = 0; m < layerSizes[l + 1]; m++) {
                var weight = Math.round((random() * 2 - 1) * 100) / 100;
                connectors.push(makeConnector(l, n, m, weight));
            }
        }
    }

    // --- Diagram control ---
    const diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '600px',
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        tool: ej.diagrams.DiagramTools.ZoomPan,
        nodes: nodes,
        connectors: connectors,
        created: () => {
            diagramCreated = true;
            diagram.fitToPage();
        },
        load: () => {
            if (diagramCreated) {
                diagram.fitToPage();
            }
        }
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
};