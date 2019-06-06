/**
 * Class Diagram
 */

var diagram;

function getNodeDefaults(obj) {
  obj.style = { fill: "#26A0DA", strokeColor: "white" };
  return obj;
}
function getConnectorDefaults(connector) {
return connector;
}
function setNodeTemplate(node) {
  if (node.annotations.length > 0) {
    for (var i = 0; i < node.annotations.length; i++) {
      node.annotations[i].style.color = "white";
    }
  }
}
function createConnector(Id, sourceID, targetID) {
  var connector = {};
  connector.id = Id;
  connector.sourceID = sourceID;
  connector.targetID = targetID;
  return connector;
}
function createNode(Id, offsetX, offsetY, className) {
  var node = {};
  node.id = Id;
  node.offsetX = offsetX;
  node.offsetY = offsetY;
  node.shape = {
    type: "UmlClassifier",
    classShape: {
      name: className
    },
    classifier: "Class"
  };
  return node;
}
function createProperty(name, type) {
  return { name: name, type: type };
}
function createMethods(name, type) {
  return { name: name, type: type };
}

this.default = function() {
  var nodes = [
    {
      id: "Patient",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Patient",
          attributes: [
            createProperty("accepted", "Date"),
            createProperty("sickness", "History"),
            createProperty("prescription", "String[*]"),
            createProperty("allergies", "String[*]")
          ],
          methods: [createMethods("getHistory", "History")]
        },
        classifier: "Class"
      },
      offsetX: 200,
      offsetY: 250
    },
    {
      id: "Doctor",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Doctor",
          attributes: [
            createProperty("specialist", "String[*]"),
            createProperty("locations", "String[*]")
          ]
        },
        classifier: "Class"
      },
      offsetX: 240,
      offsetY: 545
    },
    {
      id: "Person",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Person",
          attributes: [
            createProperty("name", "Name"),
            createProperty("title", "String[*]"),
            createProperty("gender", "Gender")
          ]
        },
        classifier: "Class"
      },
      offsetX: 405,
      offsetY: 105
    },
    {
      id: "Hospital",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Hospital",
          attributes: [
            createProperty("name", "Name"),
            createProperty("address", "Address"),
            createProperty("phone", "Phone")
          ],
          methods: [createMethods("getDepartment", "String")]
        },
        classifier: "Class"
      },
      offsetX: 638,
      offsetY: 100
    },
    {
      id: "Department",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Department",
          methods: [createMethods("getStaffCount", "Int")]
        },
        classifier: "Class"
      },
      offsetX: 638,
      offsetY: 280
    },
    {
      id: "Staff",
      shape: {
        type: "UmlClassifier",
        classShape: {
          name: "Staff",
          attributes: [
            createProperty("joined", "Date"),
            createProperty("education", "string[*]"),
            createProperty("certification", "string[*]"),
            createProperty("languages", "string[*]")
          ],
          methods: [
            createMethods("isDoctor", "bool"),
            createMethods("getHistory", "bool")
          ]
        },
        classifier: "Class"
      },
      offsetX: 635,
      offsetY: 455
    },
    createNode("OperationStaff", 410, 455, "OperationStaff"),
    createNode("Nurse", 410, 545, "Nurse"),
    createNode("Surgeon", 240, 665, "Surgeon"),
    createNode("AdministrativeStaff", 632, 605, "AdministrativeStaff"),
    createNode("FrontDeskStaff", 630, 695, "FrontDeskStaff"),
    createNode("TechnicalStaff", 928, 445, "TechnicalStaff"),
    createNode("Technician", 815, 535, "Technician"),
    createNode("Technologist", 1015, 535, "Technologist"),
    createNode("SurgicalTechnologist", 1015, 630, "SurgicalTechnologist")
  ];
  var connectors = [
    createConnector("connect1", "Patient", "Person"),
    createConnector("connect2", "Person", "Hospital"),
    createConnector("connect3", "Department", "Hospital"),
    createConnector("connect4", "OperationStaff", "Patient"),
    createConnector("connect5", "Doctor", "OperationStaff"),
    createConnector("connect6", "Nurse", "OperationStaff"),
    createConnector("connect7", "Surgeon", "Doctor"),
    createConnector("connect8", "FrontDeskStaff", "AdministrativeStaff"),
    createConnector("connect9", "Technician", "TechnicalStaff"),
    createConnector("connect10", "Technologist", "TechnicalStaff"),
    createConnector("connect11", "SurgicalTechnologist", "Technologist"),
    createConnector("connect12", "Staff", "Department"),
    createConnector("connect13", "Staff", "Person"),
    createConnector("connect14", "OperationStaff", "Staff"),
    createConnector("connect15", "AdministrativeStaff", "Staff"),
    createConnector("connect16", "TechnicalStaff", "Staff")
  ];
  diagram = new ej.diagrams.Diagram({
    width: "100%",
    height: 700,
    nodes: nodes,
    connectors: connectors,
    getNodeDefaults: getNodeDefaults,
    getConnectorDefaults: getConnectorDefaults,
    setNodeTemplate: setNodeTemplate
  });
  diagram.appendTo("#diagram");
};
