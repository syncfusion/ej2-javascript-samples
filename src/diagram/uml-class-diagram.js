/**
 * Class Diagram
 */



this.default = function () {
  //Set default values for a node.
  function getNodeDefaults(node) {
    node.style = { fill: "#26A0DA", strokeColor: "white" };
    //set the style of annotations for a given node.
    if (node.annotations.length > 0) {
      for (var i = 0; i < node.annotations.length; i++) {
        node.annotations[i].style.color = "white";
      }
    }
    return node;
  }
  function getConnectorDefaults(connector) {
    return connector;
  }
  // Create and return a connector object with specified properties during initial rendering
  function createConnector(Id, sourceID, targetID) {
    var connector = {};
    connector.id = Id;
    connector.sourceID = sourceID;
    connector.targetID = targetID;
    return connector;
  }
  // Create and return a node object with specified properties during initial rendering
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
  //Initialize nodes for the diagram.
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
  //Initialize connector for the diagram.
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
  //Initialize diagram control
  var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '100%',
    nodes: nodes,
    connectors: connectors,
    //Set default values for nodes
    getNodeDefaults: getNodeDefaults,
    getConnectorDefaults: getConnectorDefaults,
    created: function () { diagram.fitToPage(); }
  });
  diagram.appendTo("#diagram");

  // Initialize the palettes displayed in the symbol palette
  var palettes = [
    {
      id: 'UmlActivity', expanded: true, title: 'UML Classifier Nodes', symbols: [
        {
          id: 'class',
          shape: {
            type: 'UmlClassifier',
            classShape: {
              attributes: [
                { name: 'accepted', type: 'Date', isSeparator: true },
                { name: 'sickness', type: 'History' },
                { name: 'prescription', type: 'String[*]' },
                { name: 'allergies', type: 'String[*]' }
              ],
              methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
              name: 'Patient'
            },
            classifier: 'Class'
          },
        },
        {
          id: 'Interface',
          shape: {
            type: 'UmlClassifier',
            interfaceShape: {
              name: "Bank Account",
              attributes: [{
                name: "owner",
                type: "String[*]", style: {}
              },
              {
                name: "balance",
                type: "Dollars"
              }],
              methods: [{
                name: "deposit", style: {},
                parameters: [{
                  name: "amount",
                  type: "Dollars",
                  style: {}
                }],
              }]
            },
            classifier: 'Interface'
          },
        },
        {
          id: 'Enumeration',
          shape: {
            type: 'UmlClassifier',
            enumerationShape: {
              name: 'AccountType',
              members: [
                {
                  name: 'Checking Account', style: {}
                },
                {
                  name: 'Savings Account'
                },
                {
                  name: 'Credit Account'
                }
              ]
            },
            classifier: 'Enumeration'
          },
        },
      ]

    },
    {
      id: 'umlConnectorrs', expanded: true, title: 'UML Classifier Connectors', symbols: [
        {
          id: 'Composition',
          sourcePoint: { x: 100, y: 200 },
          targetPoint: { x: 200, y: 300 },
          type: 'Straight',
          shape: { type: 'UmlClassifier', relationship: 'Composition' }
        },
        {
          id: 'BiDirectional',
          type: 'Straight',
          sourcePoint: { x: 300, y: 200 },
          targetPoint: { x: 400, y: 300 },
          shape: { type: 'UmlClassifier', relationship: 'Aggregation', associationType: 'BiDirectional' }
        },
        {
          id: 'Directional',
          type: 'Straight',
          sourcePoint: { x: 500, y: 200 },
          targetPoint: { x: 600, y: 300 },
          shape: { type: 'UmlClassifier', relationship: 'Association', associationType: 'Directional' }
        },
        {
          id: 'Association',
          type: 'Straight',
          sourcePoint: { x: 700, y: 200 },
          targetPoint: { x: 800, y: 300 },
          shape: { type: 'UmlClassifier', relationship: 'Association' }
        },
        {
          id: 'Inheritance',
          type: 'Straight',
          sourcePoint: { x: 900, y: 200 },
          targetPoint: { x: 1000, y: 300 },
          shape: { type: 'UmlClassifier', relationship: 'Inheritance' }
        },
        {
          id: 'Interfaces',
          type: 'Straight',
          sourcePoint: { x: 100, y: 400 },
          targetPoint: { x: 200, y: 500 },
          shape: { type: 'UmlClassifier', relationship: 'Interface' }
        },
        {
          id: 'Dependency',
          type: 'Straight',
          sourcePoint: { x: 300, y: 400 },
          targetPoint: { x: 400, y: 500 },
          shape: { type: 'UmlClassifier', relationship: 'Dependency' }
        },
        {
          id: 'Realization',
          type: 'Straight',
          sourcePoint: { x: 500, y: 400 },
          targetPoint: { x: 600, y: 500 },
          shape: { type: 'UmlClassifier', relationship: 'Realization' }
        },
        {
          id: "OneToMany",
          type: 'Straight',
          sourcePoint: {
            x: 700,
            y: 400
          },
          targetPoint: {
            x: 800,
            y: 500
          },
          annotations: [{
            margin: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 20
            }
          }
          ],
          shape: {
            type: "UmlClassifier",
            relationship: 'Dependency',
            multiplicity: {
              type: 'OneToMany',
              source: {
                optional: true,
                lowerBounds: '89',
                upperBounds: '67'
              },
              target: { optional: true, lowerBounds: '78', upperBounds: '90' }
            }
          }
        },
        {
          id: "ManyToMany",
          sourcePoint: {
            x: 900,
            y: 400
          },
          targetPoint: {
            x: 1000,
            y: 500
          },
          annotations: [{
            margin: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 20
            }
          }
          ],
          shape: {
            type: "UmlClassifier",
            relationship: 'Dependency',
            multiplicity: {
              type: 'ManyToMany',
              source: {
                optional: true,
                lowerBounds: '89',
                upperBounds: '67'
              },
              target: { optional: true, lowerBounds: '78', upperBounds: '90' }
            }
          }
        },
        {
          id: "OneToOne",
          sourcePoint: { x: 100, y: 600 },
          targetPoint: { x: 200, y: 700 },
          annotations: [{
            margin: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 20
            }
          }
          ],
          shape: {
            type: "UmlClassifier",
            relationship: 'Dependency',
            multiplicity: {
              type: 'OneToOne',
              source: {
                optional: true,
                lowerBounds: '89',
                upperBounds: '67'
              },
              target: { optional: true, lowerBounds: '78', upperBounds: '90' }
            }
          }
        },
        {
          id: "ManyToOne",
          sourcePoint: { x: 300, y: 600 },
          targetPoint: { x: 400, y: 700 },
          annotations: [{
            margin: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 20
            }
          }
          ],
          shape: {
            type: "UmlClassifier",
            relationship: 'Dependency',
            multiplicity: {
              type: 'ManyToOne',
              source: {
                optional: true,
                lowerBounds: '89',
                upperBounds: '67'
              },
              target: { optional: true, lowerBounds: '78', upperBounds: '90' }
            }
          }
        },
        {
          id: "OneToMany",
          sourcePoint: { x: 500, y: 600 },
          targetPoint: { x: 600, y: 700 },
          annotations: [{
            margin: {
              top: 10,
              left: 10,
              right: 10,
              bottom: 20
            }
          }
          ],
          shape: {
            type: "UmlClassifier",
            relationship: 'Dependency',
            multiplicity: {
              type: 'OneToMany',
            }
          }
        }
      ]
    }

  ];
  //Initializes the symbol palette
  var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: palettes,
    width: '100%', height: '100%',
    symbolMargin: { left: 12, right: 12, top: 12, bottom: 12 },
    symbolHeight: 90, symbolWidth: 100,
    getNodeDefaults: function (symbol) {
      symbol.width = 100;
      symbol.height = 100;
    },
    getSymbolInfo: function (symbol) {
      return { fit: true, description: { text: symbol.id, }, tooltip: symbol.addInfo ? symbol.addInfo.tooltip : symbol.id };
    }
  });

  palette.appendTo('#symbolpalette');
};
