// DIAGRAM

// Import essential modules and constraints from the ej.diagrams library for diagramming functionality.
var Diagram = ej.diagrams.Diagram;
var UndoRedo = ej.diagrams.UndoRedo;
var SnapConstraints = ej.diagrams.SnapConstraints;
var BpmnDiagrams = ej.diagrams.BpmnDiagrams;
var DiagramTools = ej.diagrams.DiagramTools;
var NodeConstraints = ej.diagrams.NodeConstraints;
var AnnotationConstraints = ej.diagrams.AnnotationConstraints;
var SelectorConstraints = ej.diagrams.SelectorConstraints;
var randomId = ej.diagrams.randomId;

// Inject UndoRedo and BpmnDiagrams modules into the Diagram for extended functionality.
Diagram.Inject(UndoRedo, BpmnDiagrams);

/**
 * WorkFlow editor
 */

this.default = function () {
  // Initialize variables
  var flowTimeOut1, flowTimeOut2;
  var isPaused = false;
  var animationIntervals = [];
  var connectorBeforeAnimationColor = "#B0B0B0";
  var connectorDuringAnimationColor = "#FF7F50";
  var connectorAfterAnimationColor = "green";
  var connectorAnnotationColor = "#32CD32";
  var nodeStrokeBeforeAnimationColor = "black";
  var nodeStrokeAfterAnimationColor = "green";
  var diagramData = {
    nodes: [
      {
        id: "start",
        offsetX: 100,
        offsetY: 380,
        shape: {
          type: "Bpmn",
          shape: "Event",
          event: { event: "Start", trigger: "None" },
        },
        annotations: [{ content: "Start" }],
      },
      {
        id: "liquidInput",
        offsetX: 300,
        offsetY: 280,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Liquid Input" }],
      },
      {
        id: "dryInput",
        offsetX: 300,
        offsetY: 480,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Dry Input" }],
      },
      {
        id: "condensed",
        offsetX: 500,
        offsetY: 180,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Condensed" }],
      },
      {
        id: "cream",
        offsetX: 500,
        offsetY: 260,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Cream" }],
      },
      {
        id: "caneSugar",
        offsetX: 500,
        offsetY: 340,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Cane Sugar" }],
      },
      {
        id: "water",
        offsetX: 500,
        offsetY: 420,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Water" }],
      },
      {
        id: "ingredients",
        offsetX: 500,
        offsetY: 500,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Ingredients" }],
      },
      {
        id: "flavour",
        offsetX: 500,
        offsetY: 580,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Flavour" }],
      },
      {
        id: "fruitsAndNuts",
        offsetX: 500,
        offsetY: 660,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Fruits and Nuts" }],
      },
      {
        id: "blending",
        offsetX: 700,
        offsetY: 380,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Blending" }],
      },
      {
        id: "coolingAging",
        offsetX: 840,
        offsetY: 380,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Cooling/Aging" }],
      },
      {
        id: "packaging",
        offsetX: 980,
        offsetY: 380,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Packaging" }],
      },
      {
        id: "storageDistribution",
        width: 140,
        offsetX: 1130,
        offsetY: 380,
        shape: {
          type: "Bpmn",
          shape: "Activity",
          activity: { activity: "Task" },
        },
        annotations: [{ content: "Storage/Distribution" }],
      },
      {
        id: "end",
        offsetX: 1260,
        offsetY: 380,
        shape: {
          type: "Bpmn",
          shape: "Event",
          event: { event: "End", trigger: "None" },
        },
        annotations: [{ content: "End" }],
      },
    ],
    connectors: [
      { id: "c1", sourceID: "start", targetID: "liquidInput" },
      { id: "c2", sourceID: "start", targetID: "dryInput" },
      { id: "c3", sourceID: "liquidInput", targetID: "condensed" },
      { id: "c4", sourceID: "liquidInput", targetID: "cream" },
      { id: "c5", sourceID: "liquidInput", targetID: "caneSugar" },
      { id: "c6", sourceID: "liquidInput", targetID: "water" },
      { id: "c7", sourceID: "liquidInput", targetID: "ingredients" },
      {
        id: "c8",
        sourceID: "dryInput",
        targetID: "flavour"
      },
      {
        id: "c9",
        sourceID: "dryInput",
        targetID: "fruitsAndNuts"
      },
      { id: "c10", sourceID: "condensed", targetID: "blending" },
      { id: "c11", sourceID: "cream", targetID: "blending" },
      { id: "c12", sourceID: "caneSugar", targetID: "blending" },
      { id: "c13", sourceID: "water", targetID: "blending" },
      { id: "c14", sourceID: "ingredients", targetID: "blending" },
      { id: "c15", sourceID: "flavour", targetID: "blending" },
      { id: "c16", sourceID: "fruitsAndNuts", targetID: "blending" },
      { id: "c17", sourceID: "blending", targetID: "coolingAging" },
      { id: "c18", sourceID: "coolingAging", targetID: "packaging" },
      { id: "c19", sourceID: "packaging", targetID: "storageDistribution" },
      { id: "c20", sourceID: "storageDistribution", targetID: "end" },
    ],
  };

  // Node defaults
  function getNodeDefaults(node) {
    // restrict rotation and hide thumbs
    node.constraints =
      (ej.diagrams.NodeConstraints.Default &
        ~ej.diagrams.NodeConstraints.Rotate) |
      ej.diagrams.NodeConstraints.HideThumbs;

    // Set default width and height
    if (
      typeof node.width === "undefined" ||
      typeof node.height === "undefined"
    ) {
      var dimensions = {
        Event: { width: 60, height: 60 },
        Gateway: { width: 90, height: 70 },
        Activity: { width: 90, height: 50 },
      };
      var shapeType = node.shape.shape;
      if (typeof node.width === "undefined") {
        node.width = dimensions[shapeType].width;
      }
      if (typeof node.height === "undefined") {
        node.height = dimensions[shapeType].height;
      }
    }
    return node;
  }

  // Connector defaults
  function getConnectorDefaults(connector) {
    // Configure the connector with a straight type
    connector.type = "Straight";

    // connector initial color style, before animation
    connector.style.strokeColor =
      connector.targetDecorator.style.strokeColor =
      connector.targetDecorator.style.fill =
        connectorBeforeAnimationColor;

    // connector annotation, that will be animated during the workflow animation
    connector.annotations = [
      {
        content: "",
        height: 16,
        width: 16,
        offset: 0,
        style: { fill: "transparent", fontSize: 24 },
      },
    ];
    return connector;
  }

  // User handles
  var userHandles = [
    {
      name: "delete",
      pathData:
        "M0.97,3.04 L12.78,3.04 L12.78,12.21 C12.78,12.64,12.59,13,12.2,13.3 C11.82,13.6,11.35,13.75,10.8,13.75 L2.95,13.75 C2.4,13.75,1.93,13.6,1.55,13.3 C1.16,13,0.97,12.64,0.97,12.21 Z M4.43,0 L9.32,0 L10.34,0.75 L13.75,0.75 L13.75,2.29 L0,2.29 L0,0.75 L3.41,0.75 Z",
      tooltip: { content: "Delete Node" },
      side: "Bottom",
      offset: 0.5,
      margin: { bottom: 5 },
      disableConnectors: true,
    },
    {
      name: "drawConnector",
      pathData:
        "M6.09,0 L13.75,6.88 L6.09,13.75 L6.09,9.64 L0,9.64 L0,4.11 L6.09,4.11 Z",
      tooltip: { content: "Draw Connector" },
      side: "Right",
      offset: 0.5,
      margin: { right: 5 },
      disableConnectors: true,
    },
    {
      name: "stopAnimation",
      pathData: "M4.75,0.75 L9.25,0.75 L9.25,9.25 L4.75,9.25 Z", // Stop icon
      tooltip: { content: "Enable Animation" },
      disableNodes:true
    },
  ];

  // Initialize Diagram
  var diagram = new Diagram({
    width: "100%",
    height: "600px",
    scrollSettings: { scrollLimit: "Infinity", canAutoScroll: true },
    tool: DiagramTools.ZoomPan,
    nodes: diagramData.nodes,
    connectors: diagramData.connectors,
    getNodeDefaults: getNodeDefaults,
    getConnectorDefaults: getConnectorDefaults,
    selectedItems: { userHandles: userHandles },
    created: function () {
      diagram.fitToPage();
    },
  });
  diagram.appendTo("#diagram");

  // Dynamically updates the stopAnimation user handle icon and tooltip based on the selected connector's state
  diagram.selectionChange = function (args) {
    if (args.state !== "Changed") return;
    var connector = diagram.selectedItems.connectors[0];
    var handle = null;
    for (var i = 0; i < diagram.selectedItems.userHandles.length; i++) {
      if (diagram.selectedItems.userHandles[i].name === "stopAnimation") {
        handle = diagram.selectedItems.userHandles[i];
        break;
      }
    }
    if (connector && handle) {
      var isStopped =
        connector.addInfo && connector.addInfo.stopAnimation === true;
      if (isStopped) {
        handle.pathData = "M2,0 L10,8 L2,16 L2,0 Z"; // Play icon (start animation)
      } else {
        handle.pathData = "M5.25,1.25 L8.75,1.25 L8.75,8.75 L5.25,8.75 Z"; // Stop icon
      }
      if (isStopped) {
        handle.tooltip.content = "Enable Animation";
      } else {
        handle.tooltip.content = "Disable Animation";
      }
      handle.visible = true;
    } else if (handle) {
      handle.visible = false;
    }
  };

  // User handle functionality
  diagram.onUserHandleMouseDown = function (args) {
    var handleName = args.element.name;
    switch (handleName) {
      case "delete":
        diagram.remove(diagram.selectedItems.nodes[0]);
        break;
      case "drawConnector":
        var sourceNode = diagram.selectedItems.nodes[0];
        if (!sourceNode) return;
        diagram.drawingObject = { type: "Straight", sourceID: sourceNode.id };
        diagram.tool = DiagramTools.DrawOnce;
        break;
      case "stopAnimation":
        var connector = diagram.selectedItems.connectors[0];
        if (connector) {
          if (!connector.addInfo) connector.addInfo = {};
          connector.addInfo.stopAnimation = !connector.addInfo.stopAnimation;

          // Update path and tooltip
          var handle = diagram.selectedItems.userHandles.find(function (h) {
            return h.name === "stopAnimation";
          });
          if (handle) {
            var isStopped = connector.addInfo.stopAnimation;

            if (isStopped) {
              handle.pathData = "M2,0 L10,8 L2,16 L2,0 Z"; // Play icon
              handle.tooltip.content = "Enable Animation";
            } else {
              handle.pathData = "M4.75,0.75 L9.25,0.75 L9.25,9.25 L4.75,9.25 Z"; // Stop icon
              handle.tooltip.content = "Disable Animation";
            }
          }
        }
        break;
    }
  };

  // Workflow animation
  function startWorkflow() {
    // PAUSE state if running
    if (!isPaused && animationIntervals.length) {
      isPaused = true;
      updateExecuteButton("Resume");
      clearAnimationIntervals();
      return;
    }

    // RESUME state if paused
    if (isPaused) {
      isPaused = false;
      updateExecuteButton("Pause");
      resumeWorkflow();
      return;
    }

    // EXECUTE state to start from start
    isPaused = false;
    resetWorkflow();
    updateExecuteButton("Pause");

    // find the "start" nodes in the diagram, as animation only works from "start" nodes
    var startNodes = diagram.nodes.filter(function (node) {
      return (
        node.shape &&
        node.shape.type === "Bpmn" &&
        node.shape.shape === "Event" &&
        node.shape.event.event === "Start"
      );
    });
    if (startNodes.length === 0) {
      console.error("No start nodes found.");
      return;
    }
    startNodes.forEach(function (startNode) {
      animateNode(startNode.id);
    });
  }

  // Resume Workflow animation from the last paused state
  function resumeWorkflow() {
    diagram.connectors.forEach(function (connector) {
      // Retrieve the last annotation of the connector
      var lastAnn = connector.annotations[connector.annotations.length - 1];
      // Check if the annotation offset is within the animation range
      if (lastAnn && lastAnn.offset > 0 && lastAnn.offset < 0.9) {
        // Restore the annotations that need to be visible
        lastAnn.content = "●";
        if (lastAnn.style) lastAnn.style.color = connectorAnnotationColor;

        // Get the source node of the connector and check if it s a start event node
        var sourceNode = diagram.getObject(connector.sourceID);
        var isStartNode =
          sourceNode &&
          sourceNode.shape &&
          sourceNode.shape.type === "Bpmn" &&
          sourceNode.shape.shape === "Event" &&
          sourceNode.shape.event &&
          sourceNode.shape.event.event === "Start";

        // If the source node is a start node or already completed node, continue the animation
        if (
          isStartNode ||
          (sourceNode &&
            sourceNode.style.strokeColor === nodeStrokeAfterAnimationColor)
        ) {
          // Animate the connector and the target node
          animateConnector(connector, function (targetId) {
            var targetNode = diagram.getObject(targetId);
            if (targetNode) {
              createLoadingAnimation(targetNode);
              setTimeout(function () {
                completeNodeAnimation(targetNode);
                animateNode(targetId);
              }, 1000);
            }
          });
        }
      }
    });
  }

  // Function to animate a node and its connected nodes
  function animateNode(nodeId) {
    // Filter connectors originating from the node
    var currentConnectors = diagram.connectors.filter(function (conn) {
      return conn.sourceID === nodeId;
    });

    currentConnectors.forEach(function (connector) {
      // Check if additional info contains "stopAnimation"
      if (!(connector.addInfo && connector.addInfo.stopAnimation === true)) {
        animateConnector(connector, function (targetNodeId) {
          var targetNode = diagram.getObject(targetNodeId);

          // Start loading animation for the target node
          if (targetNode) {
            createLoadingAnimation(targetNode);

            flowTimeOut1 = setTimeout(function() {
              // Hide all loading indicators
              Array.prototype.slice
                .call(document.getElementsByClassName("loading-indicator"))
                .forEach(function (el) {
                  el.style.display = "none";
                });
              // Show all tick indicators
              Array.prototype.slice
                .call(document.getElementsByClassName("tick"))
                .forEach(function (el) {
                  el.style.display = "block";
                });

              targetNode.style.strokeColor = nodeStrokeAfterAnimationColor;
              diagram.dataBind();

              // Check if the target node is a BPMN "End" event node
              if (
                targetNode.shape &&
                targetNode.shape.type === "Bpmn" &&
                targetNode.shape.shape === "Event" &&
                targetNode.shape.event &&
                targetNode.shape.event.event === "End"
              ) {
                // Reset toolbar for new execution
                updateExecuteButton("Execute");
                animationIntervals.length = 0; // Clear animation intervals
              } else {
                // Recursively animate connected nodes
                animateNode(targetNodeId);
              }
            }, 1000);
          }
        });
      }
    });
  }

  // Function to animate a connector and execute a callback upon completion
  function animateConnector(connector, callback) {
    var lastAnn = connector.annotations[connector.annotations.length - 1];
    lastAnn.offset = lastAnn.offset || 0.02; // Initialize or set the offset
    lastAnn.content = "●"; // Set visual marker, to show the flow
    lastAnn.style.color = connectorAnnotationColor; // Set annotation marker color
    diagram.dataBind();

    // Start interval to animate the connector
    var flowInterval = setInterval(function() {
      if (isPaused) {
        return; // Pause animation if the workflow is paused
      }
      // Continue animation if the offset hasn't reached the end
      if (lastAnn.offset < 0.9) {
        lastAnn.offset += 0.025;
        connector.style.strokeColor =
          connector.targetDecorator.style.strokeColor =
          connector.targetDecorator.style.fill =
            connectorDuringAnimationColor; // Change color during animation
        diagram.dataBind();
      } else {
        // Animation complete, clean up and execute the callback
        clearInterval(flowInterval);
        lastAnn.style.color = "transparent";
        connector.style.strokeColor =
          connector.targetDecorator.style.strokeColor =
          connector.targetDecorator.style.fill =
            connectorAfterAnimationColor; // Set after animation color for connector
        diagram.dataBind();
        callback(connector.targetID); // Execute callback with target node ID
      }
    }, 120); // Interval of 120ms for the animation steps

    // Add the interval to the list of active animations
    animationIntervals.push(flowInterval);
  }

  // Function to create and add a loading animation annotation to a node
  function createLoadingAnimation(targetNode) {
    if (!targetNode || !targetNode.annotations) {
      return;
    }
    // HTML template for the loading animation and a hidden tick indicator
    var  htmlTemplate = '<div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; margin-left: -3px; margin-top: -3px;"><div class="loading-indicator"></div><div class="tick" style="display: none;"><i class="e-icons e-check"></i></div></div>';

    // adding annotation with the template to the node
    var annotation = {
      template: htmlTemplate,
      offset: { x: 0, y: 0 },
      verticalAlignment: "Top",
      horizontalAlignment: "Left",
      style: { fill: "transparent" },
    };

    diagram.addLabels(targetNode, [annotation]);
  }

  // Function to show complete status for the given node
  function completeNodeAnimation(node) {
    // Hide all loading indicators
    document.querySelectorAll(".loading-indicator").forEach(function (el) {
      el.style.display = "none";
    });

    // Display all tick elements as visible
    document.querySelectorAll(".tick").forEach(function (el) {
      el.style.display = "block";
    });

    // Update the stroke color for the node to indicate completion
    if (node.style) {
      node.style.strokeColor = nodeStrokeAfterAnimationColor;
    }

    // Update the diagram to reflect changes
    diagram.dataBind();
  }

  function resetWorkflow() {
    // Set pause state to false
    isPaused = false;
    // clear any existing timeouts
    clearTimeout(flowTimeOut1);
    clearTimeout(flowTimeOut2);
    // Clear any running animation intervals
    clearAnimationIntervals();
    // Remove all custom animations and tick indicators
    document.querySelectorAll(".loading-indicator, .tick").forEach(function(el) {
      el.remove();
    });
    // Restore all nodes to their default styles
    diagram.nodes.forEach(function(node) {
      if (node.style) node.style.strokeColor = nodeStrokeBeforeAnimationColor;
    });
    // Restore all connectors to their default styles
    diagram.connectors.forEach(function(connector) {
      connector.style.strokeColor =
        connector.targetDecorator.style.strokeColor =
        connector.targetDecorator.style.fill =
          connectorBeforeAnimationColor;

      // Reset connector annotations to initial state
      connector.annotations.forEach(function(ann) {
        ann.offset = 0; // start position
        ann.content = ""; // Reset content
        ann.style.color = connectorAnnotationColor; // initial state color
      });
    });

    diagram.dataBind(); // Ensure all changes are applied

  }

  // Function to clear all active animation intervals
  function clearAnimationIntervals() {
    // Stop all timers stored in animationIntervals
    animationIntervals.forEach(clearInterval);
    // Reset the array to remove all interval references
    animationIntervals.length = 0;
  }

  // TOOLBAR
  var toolbarItems = [
    {
      id: "New",
      text: "New",
      tooltipText: "New Diagram",
      prefixIcon: "e-icons e-circle-add",
    },
    {
      id: "Open",
      text: "Open",
      tooltipText: "Open Diagram",
      prefixIcon: "e-icons e-folder-open",
    },
    {
      id: "Save",
      text: "Save",
      tooltipText: "Save Diagram",
      prefixIcon: "e-icons e-save",
    },
    { type: "Separator" },
    {
      id: "Execute",
      width: 90,
      text: "Execute",
      tooltipText: "Start Workflow",
      prefixIcon: "e-icons e-play",
      overflow: 'Show'
    },
    {
      id: "Reset",
      text: "Reset",
      tooltipText: "Reset View/State",
      prefixIcon: "e-icons e-reset",
      overflow: 'Show'
    },
    {
      id: "Delete",
      text: "Delete",
      tooltipText: "Delete Selected",
      prefixIcon: "e-icons e-trash",
    },
    { type: "Separator" },
    {
      id: "Select",
      text: "Select",
      tooltipText: "Select Tool",
      prefixIcon: "e-icons e-mouse-pointer",
      overflow: 'Show'
    },
    {
      id: "Pan",
      text: "Pan",
      tooltipText: "Pan Tool",
      prefixIcon: "e-icons e-pan",
      overflow: 'Show'
    },
    { type: "Separator" },
    {
      id: "palette",
      template: '<aside id="symbolPalette"></aside>',
      overflow: 'Show'
    },
  ];

  var toolbarWithToggleItem = [
    {
      id: "toggleBtn",
      template: '<div id="switch-container"><span id="editLabel" style="font-size: 14px; margin-right: 6px;">Edit</span><input type="checkbox" id="switchMode" /></div>',
    },
  ];

  // Hidden file input for opening json files
  var input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.id = "fileInput";
  input.style.display = "none";
  document.body.appendChild(input);

  input.addEventListener("change", function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (evt) {
      var json = JSON.parse(evt.target.result);
      diagram.loadDiagram(json);
      updateExecuteButton("Execute");
      clearAnimationIntervals();
      diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
      input.value = "";
      diagram.fitToPage();
    };
    reader.readAsText(file);
  });

  // Update the execute button's text and tooltip based on the workflow state
  function updateExecuteButton(state) {
    var btn = toolbarObj.items[4];
    var states = {
      Pause: {
        id: "Pause",
        text: "Pause",
        tooltipText: "Pause Workflow",
        prefixIcon: "e-icons e-pause",
      },
      Resume: {
        id: "Resume",
        text: "Resume",
        tooltipText: "Resume Workflow",
        prefixIcon: "e-icons e-play",
      },
      Execute: {
        id: "Execute",
        text: "Execute",
        tooltipText: "Start Workflow",
        prefixIcon: "e-icons e-play",
      },
    };

    var newState = states[state] || states.Execute;
    Object.assign(btn, newState);
  }

  // initialize the toolbar
  var toolbarObj = new ej.navigations.Toolbar({
    enableToggle: true,
    overflowMode: 'Popup',
    items: toolbarItems,
    clicked: function (args) {
      if (args.item === undefined || args.item.text === undefined) {
        return;
      }
      switch (args.item.id) {
        case "New":
          updateExecuteButton("Execute");
          clearAnimationIntervals();
          diagram.clear();
          break;
        case "Open":
          document.getElementById("fileInput").click();
          break;
        case "Save":
          saveDiagram();
          break;
        case "Execute":
        case "Pause":
        case "Resume":
          diagram.clearSelection();
          startWorkflow();
          break;
        case "Reset":
          resetWorkflow();
          updateExecuteButton("Execute");
          break;
        case "Delete":
          diagram.remove();
          break;
        case "Select":
          diagram.tool = ej.diagrams.DiagramTools.MulipleSelect;
          break;
        case "Pan":
          diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
          break;
      }
    },
  });
  toolbarObj.appendTo("#Diagramtoolbar");

  var toolbarObjForToggleSwitch = new ej.navigations.Toolbar({
    enableToggle: true,
    items: toolbarWithToggleItem,
  });
  toolbarObjForToggleSwitch.appendTo("#DiagramtoolbarWithToggleSwitch");

  // save the current diagram in json format
  function saveDiagram() {
    var fileName = "Diagram.json";
    var jsonData = diagram.saveDiagram();
    var blob = new Blob([jsonData], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // SYMBOL PALETTE
  var palette = new ej.diagrams.SymbolPalette({
    enableAnimation: false,
    showHeader: false,
    palettes: [
      {
        id: "BPMN",
        expanded: true,
        symbols: [
          {
            id: "Start",
            shape: { type: "Bpmn", shape: "Event" },
            annotations: [{ content: "Start" }],
            tooltip: { content: "Start", relativeMode: "Object" },
            constraints:
              ej.diagrams.NodeConstraints.Default |
              ej.diagrams.NodeConstraints.Tooltip,
          },
          {
            id: "Decision",
            shape: { type: "Bpmn", shape: "Gateway" },
            annotations: [{ content: "Decision" }],
            tooltip: { content: "Decision", relativeMode: "Object" },
            constraints:
              ej.diagrams.NodeConstraints.Default |
              ej.diagrams.NodeConstraints.Tooltip,
          },
          {
            id: "Task",
            shape: { type: "Bpmn", shape: "Activity" },
            annotations: [{ content: "Task" }],
            tooltip: { content: "Task", relativeMode: "Object" },
            constraints:
              ej.diagrams.NodeConstraints.Default |
              ej.diagrams.NodeConstraints.Tooltip,
          },
          {
            id: "End",
            shape: {
              type: "Bpmn",
              shape: "Event",
              event: { event: "End", trigger: "None" },
            },
            annotations: [{ content: "End" }],
            tooltip: { content: "End", relativeMode: "Object" },
            constraints:
              ej.diagrams.NodeConstraints.Default |
              ej.diagrams.NodeConstraints.Tooltip,
          },
        ],
        iconCss: "",
      },
    ],
    width: "100%",
    height: "100%",
    symbolHeight: 45,
    symbolWidth: 45,
    getSymbolInfo: function (symbol) {
      return { fit: true };
    },
    paletteExpanding: function (args) {
      args.cancel = true;
    },
  });
  palette.appendTo("#symbolPalette");

  // TOGGLE SWITCH
  var toggleSwitch = new ej.buttons.Switch({
    checked: false,
    cssClass: "custom-switch",
    change: function (args) {
      applyModeState(args.checked);
      updateTooltipContent(args.checked);
    },
  });

  toggleSwitch.appendTo("#switchMode");
  var switchTooltip = new ej.popups.Tooltip({
    content: "Enable Editing",
    target: "#switch-container",
    position: "TopCenter",
    opensOn: "Hover",
  });
  switchTooltip.appendTo("#switch-container");

  // function to update tooltip content based on switch state
  function updateTooltipContent(isChecked) {
    if (isChecked) {
      switchTooltip.content = "Disable Editing";
    } else {
      switchTooltip.content = "Enable Editing";
    }
  }

  // function to enable or disable tool bar buttons based on editing mode
  function applyModeState(isEditMode) {
    var buttonsToToggle = ["Select", "Delete", "Save"];

    if (toolbarObj) {
      toolbarObj.items.forEach(function (item) {
        if (buttonsToToggle.includes(item.id)) {
          item.disabled = !isEditMode;
        }
      });
      // Hide last separator in toolbar if palette is hidden
      var items = toolbarObj.items;
      var lastSepIndex = items.findIndex(function (item) {
        return item.type === "Separator" && items.indexOf(item) > 7;
      });
      if (lastSepIndex !== -1) {
        items[lastSepIndex].visible = isEditMode;
      }
    }

    // Show/hide stencil palette
    var palette = document.getElementById("symbolPalette");
    if (palette) {
      if (isEditMode) {
        palette.style.display = "flex";
      } else {
        palette.style.display = "none";
      }
    }

    // Set tool to Pan in view mode
    if (diagram) {
      if (isEditMode) {
        diagram.tool = ej.diagrams.DiagramTools.MulipleSelect;
      } else {
        diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
      }
    }
  }
  applyModeState(toggleSwitch.checked);
  updateTooltipContent(toggleSwitch.checked);

  // update the label color based on toolbar button color
  var toolbarButton = document.querySelector(".e-toolbar-item button");
  if (toolbarButton) {
    var buttonStyle = window.getComputedStyle(toolbarButton);
    var buttonColor = buttonStyle.color;
    var editLabel = document.getElementById("editLabel");
    editLabel.style.color = buttonColor;
  }
};
