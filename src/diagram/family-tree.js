/* jshint esversion: 6 */

/**
 * Family Tree Diagram
 */
this.default = function () {

    const NODE_WIDTH = 140;
    const NODE_HEIGHT = 180;
    const HOVER_WIDTH = 320;
    const ORIGINAL_SIZE = new Map();
    const CONNECTOR_COLORS = {
        baseConnector: '#85736E',
        highlightedConnector: '#723523',
    };

    const DATA_SOURCE = window.familyTreeData;

    /* ===== Build relations (spouse/parents/children/union) ===== */
    function buildRelations(data) {
        const unions = data.filter(function (d) { return d.Type === 'Union'; });
        const spouseOf = new Map();
        const unionOf = new Map();
        const parentsByChild = new Map();
        const childrenByParent = new Map();

        unions.forEach(function (u) {
            const parentsArr = Array.isArray(u.Parents) ? u.Parents : [];
            const personA = parentsArr[0];
            const personB = parentsArr[1];
            if (!personA || !personB) return;
            unionOf.set(u.Id, [personA, personB]);
            spouseOf.set(personA, personB);
            spouseOf.set(personB, personA);
        });

        data.forEach(function (person) {
            if (Array.isArray(person.Parents)) {
                parentsByChild.set(person.Id, person.Parents.slice());
                person.Parents.forEach(function (ref) {
                    const pr = unionOf.get(ref);
                    if (!pr) return;
                    const pa = pr[0];
                    const pb = pr[1];
                    if (!childrenByParent.has(pa)) childrenByParent.set(pa, new Set());
                    if (!childrenByParent.has(pb)) childrenByParent.set(pb, new Set());
                    childrenByParent.get(pa).add(person.Id);
                    childrenByParent.get(pb).add(person.Id);
                });
            }
        });

        return { spouseOf: spouseOf, unionOf: unionOf, parentsByChild: parentsByChild, childrenByParent: childrenByParent };
    }

    const RELATIONS = buildRelations(DATA_SOURCE);

    /* ===== Related set for hover highlight ===== */
    function relatedSet(personId) {
        const people = new Set([personId]);
        const spouse = RELATIONS.spouseOf.get(personId);
        if (spouse) people.add(spouse);

        // parents of the person (via unions)
        const parentsOfPerson = RELATIONS.parentsByChild.get(personId);
        const parentUnions = new Set(parentsOfPerson ? parentsOfPerson : []);
        parentUnions.forEach(function (u) {
            const pair = RELATIONS.unionOf.get(u);
            const arr = pair ? pair : [];
            arr.forEach(function (p) { people.add(p); });
        });

        // children of the person
        const kids = RELATIONS.childrenByParent.get(personId);
        if (kids) kids.forEach(function (k) { people.add(k); });

        // include only the unions actually tying hovered/spouse to children
        const unions = new Set(parentUnions);
        const spouseOrSelf = new Set(spouse ? [personId, spouse] : [personId]);

        const kidsIterable = kids ? kids : new Set();
        kidsIterable.forEach(function (childId) {
            const parents = RELATIONS.parentsByChild.get(childId);
            const parentUnionIds = parents ? parents : [];
            parentUnionIds.forEach(function (u) {
                const pair = RELATIONS.unionOf.get(u);
                if (pair && (spouseOrSelf.has(pair[0]) || spouseOrSelf.has(pair[1]))) {
                    unions.add(u);
                }
            });
        });

        const nodeSet = new Set(people);
        unions.forEach(function (u) { nodeSet.add(u); });

        return { people: people, nodeSet: nodeSet };
    }

    /* ===== DOM helpers for HTML node ===== */
    function hostOf(id) {
        return document.getElementById(`${id}_html_element`);
    }
    function containerOf(id) {
        var hostElement = hostOf(id);
        return hostElement ? hostElement.querySelector('.person-node-container') : null;
    }

    /* ===== Open/close the node's own template for relation description expansion ===== */
    function setTemplateOpen(id, isOpen) {
        const cont = containerOf(id);
        if (!cont) return;
        cont.classList.toggle('is-open', isOpen);
    }

    /* ===== Fade out other nodes when a focus is set for related nodes ===== */
    function setNodeDim(id, isDimmed) {
        const cont = containerOf(id);
        if (!cont) return;
        cont.classList.toggle('is-dim', isDimmed);
    }

    /* ===== Paint connectors ===== */
    function paintConnectors(diagram, nodeSet) {
        diagram.connectors.forEach(connector => {
            const sourceConn = connector.sourceID;
            const targetConn = connector.targetID;
            const hasRelations = !!(sourceConn && targetConn && nodeSet.has(sourceConn) && nodeSet.has(targetConn));
            connector.style = {
                strokeColor: hasRelations ? CONNECTOR_COLORS.highlightedConnector : CONNECTOR_COLORS.baseConnector,
                opacity: hasRelations ? 1 : 0.2, // <-- fade others
            };
        });
    }

    /* ===== Hover expand/shrink ===== */
    function expandForHover(diagram, id) {
        const node = diagram.getObject(id);
        if (!node || node.data.Type === 'Union') return;
        if (!ORIGINAL_SIZE.has(id))
            ORIGINAL_SIZE.set(id, { width: node.width, height: node.height });
        node.width = HOVER_WIDTH; // real width change
        setTemplateOpen(id, true);
    }
    function shrinkFromHover(diagram, id) {
        const node = diagram.getObject(id);
        if (!node) return;
        const orig = ORIGINAL_SIZE.get(id);
        if (orig) {
            node.width = orig.width;
            node.height = orig.height;
        }
        setTemplateOpen(id, false);
    }

    /* ===== Hover coordination ===== */
    let hoveredId = null;

    function focusHover(diagram, id) {
        if (hoveredId && hoveredId !== id) {
            shrinkFromHover(diagram, hoveredId);
        }

        const { people, nodeSet } = relatedSet(id);

        diagram.nodes.forEach(node => {
            const nodeId = node.id;
            const isPerson = node.data.Type !== 'Union';
            // Dim everything that's not the hovered node and not related
            setNodeDim(nodeId, isPerson && nodeId !== id && !people.has(nodeId));
        });

        expandForHover(diagram, id);
        paintConnectors(diagram, nodeSet);
        hoveredId = id;
    }

    function clearHover(diagram) {
        if (hoveredId) {
            shrinkFromHover(diagram, hoveredId);
            hoveredId = null;
        }

        // Clear dimming on all nodes
        diagram.nodes.forEach((n) => setNodeDim(n.id, false));

        diagram.connectors.forEach(
            (c) =>
            (c.style = {
                strokeColor: CONNECTOR_COLORS.baseConnector,
                strokeWidth: 2,
                opacity: 1,
            })
        );
    }

    // Initialize the Diagram component.
    var diagram = new ej.diagrams.Diagram({
        // Set the diagram's width and height.
        width: '100%', height: '600px',
        tool: ej.diagrams.DiagramTools.ZoomPan,
        // Configure snap settings for the diagram.
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        layout: {
            type: 'ComplexHierarchicalTree',
            orientation: 'TopToBottom',
            horizontalAlignment: 'Center',
            verticalAlignment: 'Top',
            horizontalSpacing: 150,
            verticalSpacing: 50,
        },
        dataSourceSettings: {
            id: 'Id',
            parentId: 'Parents',
            dataSource: new ej.data.DataManager(DATA_SOURCE),
            doBinding: (node, raw) => {
                node.id = raw.Id;
                node.data = raw;
                // Invisible junction nodes for parent unions
                if (raw.Type === 'Union') {
                    node.width = 0;
                    node.height = 0;
                    node.shape = { type: 'Basic', shape: 'Rectangle' };
                    node.style = {
                        fill: 'transparent',
                        strokeColor: 'transparent',
                    };
                    node.visible = false;
                } else {
                    raw.ImageUrl = `https://ej2.syncfusion.com/javascript/demos/src/diagram/Images/family-tree/${raw.Name}.png`;
                    node.shape = { type: 'HTML' };
                    node.width = NODE_WIDTH;
                    node.height = NODE_HEIGHT;
                }
            },
        },
        nodeTemplate: '#nodetemplate',

        mouseEnter: (args) => {
            const node = args.actualObject;
            // ignore union node and connector hover
            if (!node || node instanceof ej.diagrams.Connector || node.data.Type === 'Union') return;
            focusHover(diagram, node.id);
        },

        mouseLeave: () => clearHover(diagram),

        dataLoaded: () => setTimeout(() => diagram.fitToPage()),

        getConnectorDefaults: (connector) => {
            connector.type = 'Orthogonal';
            connector.style = { strokeColor: CONNECTOR_COLORS.baseConnector, strokeWidth: 2 };
            connector.targetDecorator = { shape: 'None' };
            connector.cornerRadius = 5;
            return connector;
        },
    });
    // Render the diagram component inside the HTML element with the ID 'diagram'.
    diagram.appendTo('#diagram');
};