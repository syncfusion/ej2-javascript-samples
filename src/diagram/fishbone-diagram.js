ej.diagrams.Diagram.Inject(ej.diagrams.BpmnDiagrams, ej.diagrams.UndoRedo, ej.diagrams.DiagramContextMenu);
ej.diagrams.SymbolPalette.Inject(ej.diagrams.BpmnDiagrams);
var diagram;
var nodes = [
    {
        id: 'Equipment', width: 120, height: 40, offsetX: 300, offsetY: 80,
        annotations: [{
            content: 'Equipment', style: { color: 'white' }
        }],
        style: { fill: 'lightblue' },
        shape: { type: 'Path', data: 'M 10 0 L 166 0 L 156 44 L 0 44 z' }
    },
    {
        id: 'Environment',
        width: 120,
        height: 40,
        offsetX: 450,
        offsetY: 80,
        annotations: [{
            content: 'Environment',
            style: {
                color: 'white'
            }
        }],
        style: {
            fill: 'lightblue'
        },
        shape: {
            type: 'Path',
            data: 'M 10 0 L 166 0 L 156 44 L 0 44 z'
        }
    },
    {
        id: 'Person',
        width: 120,
        height: 40,
        offsetX: 600,
        offsetY: 80,
        annotations: [{
            content: 'Person',
            style: {
                color: 'white'
            }
        }],
        style: {
            fill: 'lightblue'
        },
        shape: {
            type: 'Path',
            data: 'M 10 0 L 166 0 L 156 44 L 0 44 z'
        }
    },
    {
        id: 'Materials',
        width: 120,
        height: 40,
        offsetX: 300,
        offsetY: 600,
        annotations: [{
            content: 'Materials',
            style: {
                color: 'white'
            }
        }],
        style: {
            fill: 'lightblue'
        },
        shape: {
            type: 'Path',
            data: 'M 10 0 L 166 0 L 156 44 L 0 44 z'
        }
    },
    {
        id: 'Machine',
        width: 120,
        height: 40,
        offsetX: 450,
        offsetY: 600,
        annotations: [{
            content: 'Machine',
            style: {
                color: 'white'
            }
        }],
        style: {
            fill: 'lightblue'
        },
        shape: {
            type: 'Path',
            data: 'M 10 0 L 166 0 L 156 44 L 0 44 z'
        }
    },
    {
        id: 'Methods',
        width: 120,
        height: 40,
        offsetX: 600,
        offsetY: 600,
        annotations: [{
            content: 'Methods',
            style: {
                color: 'white'
            }
        }],
        style: {
            fill: 'lightblue'
        },
        shape: {
            type: 'Path',
            data: 'M 10 0 L 166 0 L 156 44 L 0 44 z'
        }
    },
    {
        id: 'ellipse1',
        width: 20,
        height: 20,
        offsetX: 290,
        offsetY: 130,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse2',
        width: 20,
        height: 20,
        offsetX: 323,
        offsetY: 183,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse3',
        width: 20,
        height: 20,
        offsetX: 354,
        offsetY: 237,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse4',
        width: 20,
        height: 20,
        offsetX: 440,
        offsetY: 130,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse5',
        width: 20,
        height: 20,
        offsetX: 470,
        offsetY: 182,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse6',
        width: 20,
        height: 20,
        offsetX: 590,
        offsetY: 130,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse7',
        width: 20,
        height: 20,
        offsetX: 622,
        offsetY: 179,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse8',
        width: 20,
        height: 20,
        offsetX: 660,
        offsetY: 221,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse9',
        width: 20,
        height: 20,
        offsetX: 694,
        offsetY: 264,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse10',
        width: 20,
        height: 20,
        offsetX: 354,
        offsetY: 460,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse11',
        width: 20,
        height: 20,
        offsetX: 590,
        offsetY: 530,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse12',
        width: 20,
        height: 20,
        offsetX: 660,
        offsetY: 460,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse13',
        width: 20,
        height: 20,
        offsetX: 440,
        offsetY: 530,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse14',
        width: 20,
        height: 20,
        offsetX: 510,
        offsetY: 460,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'ellipse15',
        width: 20,
        height: 20,
        offsetX: 290,
        offsetY: 530,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Colorellipse1',
        width: 50,
        height: 50,
        offsetX: 717,
        offsetY: 310,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Colorellipse2',
        width: 50,
        height: 50,
        offsetX: 560,
        offsetY: 310,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Colorellipse3',
        width: 50,
        height: 50,
        offsetX: 390,
        offsetY: 310,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Colorellipse4',
        width: 50,
        height: 50,
        offsetX: 220,
        offsetY: 310,
        annotations: [{
            content: ' ',
            style: {
                color: 'white'
            }
        }],
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Colorellipse5',
        width: 140,
        height: 90,
        offsetX: 900,
        offsetY: 310,
        annotations: [{
            content: 'Productivity Increase',
            style: {
                color: 'white'
            }
        }],
        style: {
            fill: 'lightblue'
        },
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'TextPrograms',
        width: 90,
        height: 20,
        offsetX: 189,
        offsetY: 130,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Text Programs'
        }
    },
    {
        id: 'Ventilatorssound',
        width: 120,
        height: 20,
        offsetX: 359,
        offsetY: 130,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Ventilators Sound'
        }
    },
    {
        id: 'Education',
        width: 70,
        height: 20,
        offsetX: 500,
        offsetY: 130,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Education'
        }
    },
    {
        id: 'DataBooks',
        width: 70,
        height: 20,
        offsetX: 213,
        offsetY: 183,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'DataBooks'
        }
    },
    {
        id: 'Fixtures',
        width: 70,
        height: 20,
        offsetX: 240,
        offsetY: 237,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Fixtures'
        }
    },
    {
        id: 'Noise',
        width: 70,
        height: 20,
        offsetX: 390,
        offsetY: 182,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Noise'
        }
    },
    {
        id: 'Motivation',
        width: 70,
        height: 20,
        offsetX: 535,
        offsetY: 182,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Motivation'
        }
    },
    {
        id: 'Tiredness',
        width: 70,
        height: 20,
        offsetX: 565,
        offsetY: 224,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Tiredness'
        }
    },
    {
        id: 'Storer',
        width: 70,
        height: 20,
        offsetX: 606,
        offsetY: 264,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Storer'
        }
    },
    {
        id: 'Computer',
        width: 70,
        height: 20,
        offsetX: 260,
        offsetY: 460,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Computer'
        }
    },
    {
        id: 'Quality',
        width: 120,
        height: 20,
        offsetX: 417,
        offsetY: 460,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Quality of Element'
        }
    },
    {
        id: 'Order',
        width: 70,
        height: 20,
        offsetX: 562,
        offsetY: 460,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Order'
        }
    },
    {
        id: 'Software',
        width: 70,
        height: 20,
        offsetX: 225,
        offsetY: 535,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Software'
        }
    },
    {
        id: 'Procurement',
        width: 70,
        height: 20,
        offsetX: 358,
        offsetY: 530,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Procurement'
        }
    },
    {
        id: 'Standardization',
        width: 70,
        height: 20,
        offsetX: 501,
        offsetY: 530,
        style: {
            fill: 'transparent',
            strokeWidth: 0
        },
        shape: {
            type: 'Text',
            content: 'Standardization'
        }
    },
];
var connectors = [
    CreateConnector('equipellise', '5,5', 'Equipment', 'ellipse1', 'brown', 2),
    CreateConnector('connect12', '5,5', 'ellipse1', 'ellipse2', 'pink', 2),
    CreateConnector('connect13', '5,5', 'ellipse2', 'ellipse3', 'pink', 2),
    CreateConnector('connect14', '5,5', 'ellipse3', 'Colorellipse3', 'pink', 2),
    CreateConnector('connect15', '5,5', 'Environment', 'ellipse4', 'pink', 2),
    CreateConnector('connect16', '5,5', 'ellipse4', 'ellipse5', 'pink', 2),
    CreateConnector('connect17', '5,5', 'ellipse4', 'ellipse5', 'pink', 2),
    CreateConnector('connect18', '5,5', 'ellipse5', 'Colorellipse2', 'pink', 2),
    CreateConnector('connect19', '5,5', 'Person', 'ellipse6', 'pink', 2),
    CreateConnector('connect20', '5,5', 'ellipse6', 'ellipse7', 'pink', 2),
    CreateConnector('connect21', '5,5', 'ellipse7', 'ellipse8', 'pink', 2),
    CreateConnector('connect22', '5,5', 'ellipse8', 'ellipse9', 'pink', 2),
    CreateConnector('connect23', '5,5', 'ellipse9', 'Colorellipse1', 'pink', 2),
    CreateConnector('connect24', '5,5', 'Materials', 'ellipse15', 'pink', 2),
    CreateConnector('connect25', '5,5', 'ellipse15', 'ellipse10', 'pink', 2),
    CreateConnector('connect26', '5,5', 'ellipse10', 'Colorellipse3', 'pink', 2),
    CreateConnector('connect27', '5,5', 'Machine', 'ellipse13', 'pink', 2),
    CreateConnector('connect28', '5,5', 'ellipse13', 'ellipse14', 'pink', 2),
    CreateConnector('connect29', '5,5', 'ellipse14', 'Colorellipse2', 'pink', 2),
    CreateConnector('connect30', '5,5', 'Methods', 'ellipse11', 'pink', 2),
    CreateConnector('connect31', '5,5', 'ellipse11', 'ellipse12', 'pink', 2),
    CreateConnector('connect32', '5,5', 'ellipse12', 'Colorellipse1', 'pink', 2),
    CreateConnector('connect33', '5,5', 'Colorellipse4', 'Colorellipse3', 'yellow', 2),
    CreateConnector('connect34', '5,5', 'Colorellipse3', 'Colorellipse2', 'yellow', 2),
    CreateConnector('connect35', '5,5', 'Colorellipse2', 'Colorellipse1', 'yellow', 2),
    CreateConnector('connect36', '5,5', 'Colorellipse1', 'Colorellipse5', 'yellow', 2),
    CreateConnector('connect37', '5,5', 'TextPrograms', 'ellipse1', 'brown', 2),
    CreateConnector('connect38', '5,5', 'DataBooks', 'ellipse2', 'brown', 2),
    CreateConnector('connect39', '5,5', 'Fixtures', 'ellipse3', 'brown', 2),
    CreateConnector('connect40', '5,5', 'Ventilatorssound', 'ellipse4', 'brown', 2),
    CreateConnector('connect41', '5,5', 'Noise', 'ellipse5', 'brown', 2),
    CreateConnector('connect42', '5,5', 'Education', 'ellipse6', 'brown', 2),
    CreateConnector('connect43', '5,5', 'Motivation', 'ellipse7', 'brown', 2),
    CreateConnector('connect44', '5,5', 'Tiredness', 'ellipse8', 'brown', 2),
    CreateConnector('connect45', '5,5', 'Storer', 'ellipse9', 'brown', 2),
    CreateConnector('connect46', '5,5', 'Software', 'ellipse15', 'brown', 2),
    CreateConnector('connect47', '5,5', 'Computer', 'ellipse10', 'brown', 2),
    CreateConnector('connect48', '5,5', 'Procurement', 'ellipse13', 'brown', 2),
    CreateConnector('connect49', '5,5', 'Quality', 'ellipse14', 'brown', 2),
    CreateConnector('connect50', '5,5', 'Order', 'ellipse12', 'brown', 2),
    CreateConnector('connect51', '5,5', 'Standardization', 'ellipse11', 'brown', 2)
];

this.default = function () {
    diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '700px',
        nodes: nodes,
        tool: ej.diagrams.DiagramTools.ZoomPan,
        connectors: connectors,
        snapSettings: { constraints: 0 },
        getConnectorDefaults: function (connector) {
            connector.targetDecorator = { shape: 'Arrow', width: 5, height: 5 };
        }
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage({ mode: 'Height' });
};

function CreateConnector(name, lineDashArray, source, target, lineColor, lineWidth) {
    var connector = {};
    connector.id = name;
    connector.sourceID = source;
    connector.targetID = target;
    connector.style = {
        strokeColor: lineColor,
        strokeWidth: lineWidth,
        strokeDashArray: lineDashArray,
    };
    return connector;
}