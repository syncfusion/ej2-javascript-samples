/**
 * ER Diagram
 */
ej.diagrams.Diagram.Inject(ej.diagrams.ErDiagrams, ej.diagrams.SymbolPalette);
this.default = function () {

    // --- Mobile palette toggle logic (from swimlane) ---
    function addEvents() {
        var isMobileDevice = window.matchMedia('(max-width:550px)').matches;
        if (isMobileDevice) {
            var paletteIcons = document.getElementById('palette-icon');
            if (paletteIcons) {
                paletteIcons.addEventListener('click', openPalette, false);
            }
        }
    }
    function openPalette() {
        var paletteSpaces = document.getElementById('palette-space');
        var isMobileDevice = window.matchMedia('(max-width:550px)').matches;
        if (isMobileDevice) {
            if (!paletteSpaces.classList.contains('er-mobile-palette-open')) {
                paletteSpaces.classList.add('er-mobile-palette-open');
            } else {
                paletteSpaces.classList.remove('er-mobile-palette-open');
            }
        }
    }
    // Define color tokens for entity themes
    var COLOR_TOKENS = {
        primary: {
            headerFill: '#bfdbfe',
            bodyFill: '#eff6ff',
            strokeColor: '#2563eb',
            connectorColor: '#2563eb'
        },
        secondary: {
            headerFill: '#bbf7d0',
            bodyFill: '#f0fdf4',
            strokeColor: '#16a34a',
            connectorColor: '#16a34a'
        },
        tertiary: {
            headerFill: '#ddd6fe',
            bodyFill: '#f5f3ff',
            strokeColor: '#7c3aed',
            connectorColor: '#7c3aed'
        },
        accent: {
            headerFill: '#fdba74',
            bodyFill: '#fff7ed',
            strokeColor: '#ea580c',
            connectorColor: '#ea580c'
        },
        neutral: {
            headerFill: '#d1d5db',
            bodyFill: '#f9fafb',
            strokeColor: '#6b7280',
            connectorColor: '#6b7280'
        },
        warning: {
            headerFill: '#fde68a',
            bodyFill: '#fffbeb',
            strokeColor: '#d97706',
            connectorColor: '#d97706'
        }
    };


    // Define the ER diagram schema
    var schema = {
        title: 'Hospital Appointment ER Diagram',

        entities: [
            {
                id: 'Doctor',
                title: 'DOCTOR',
                color: 'secondary',
                position: { x: 0, y: 94 },
                fields: [
                    { id: 'doctor_id', name: 'DoctorID', isPrimaryKey: true },
                    { id: 'name', name: 'Name' },
                    { id: 'department', name: 'Department' },
                    { id: 'specialization', name: 'Specialization' },
                    { id: 'contact_number', name: 'ContactNumber' }
                ]
            },
            {
                id: 'Patient',
                title: 'PATIENT',
                color: 'primary',
                position: { x: 290, y: 83 },
                fields: [
                    { id: 'patient_id', name: 'PatientID', isPrimaryKey: true },
                    { id: 'patient_name', name: 'Name' },
                    { id: 'date_of_birth', name: 'DateOfBirth' },
                    { id: 'patient_gender', name: 'Gender' },
                    { id: 'patient_blood_group', name: 'BloodGroup' },
                    { id: 'patient_contact_number', name: 'ContactNumber' }
                ]
            },
            {
                id: 'Appointment',
                title: 'APPOINTMENT',
                color: 'tertiary',
                position: { x: 133, y: 355 },
                fields: [
                    { id: 'appointment_id', name: 'AppointmentID', isPrimaryKey: true },
                    { id: 'app_doctor_id', name: 'DoctorID', isForeignKey: true },
                    { id: 'app_patient_id', name: 'PatientID', isForeignKey: true },
                    { id: 'appointment_date', name: 'AppointmentDate' },
                    { id: 'status', name: 'Status' }
                ]
            },
            {
                id: 'Diagnosis',
                title: 'DIAGNOSIS',
                color: 'accent',
                position: { x: 549, y: 236 },
                fields: [
                    { id: 'diagnosis_id', name: 'DiagnosisID', isPrimaryKey: true },
                    { id: 'diag_appointment_id', name: 'AppointmentID', isForeignKey: true },
                    { id: 'disease', name: 'Disease' },
                    { id: 'severity', name: 'Severity' },
                    { id: 'notes', name: 'Notes' }
                ]
            },
            {
                id: 'Prescription',
                title: 'PRESCRIPTION',
                color: 'warning',
                position: { x: 384, y: 493 },
                fields: [
                    { id: 'prescription_id', name: 'PrescriptionID', isPrimaryKey: true },
                    { id: 'pres_diagnosis_id', name: 'DiagnosisID', isForeignKey: true },
                    { id: 'medicine', name: 'Medicine' },
                    { id: 'dosage', name: 'Dosage' },
                    { id: 'frequency', name: 'Frequency' },
                    { id: 'duration_days', name: 'DurationDays' }
                ]
            }
        ],

        relationships: [
            {
                id: 'rel_doctor_appointment',
                source: 'Doctor',
                target: 'Appointment',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: '#16a34a',
                annotation: 'attends'
            },
            {
                id: 'rel_patient_appointment',
                source: 'Patient',
                target: 'Appointment',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: '#2563eb',
                annotation: 'books'
            },
            {
                id: 'rel_appointment_diagnosis',
                source: 'Appointment',
                target: 'Diagnosis',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'Identifying',
                color: '#7c3aed',
                annotation: 'leads to'
            },
            {
                id: 'rel_diagnosis_prescription',
                source: 'Diagnosis',
                target: 'Prescription',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'Identifying',
                color: '#ea580c',
                annotation: 'generates'
            }
        ]
    };

    // Define color tokens for entity themes
    function toFieldModel(field) {
        return {
            id: field.id,
            name: field.name,
            isPrimaryKey: field.isPrimaryKey,
            isForeignKey: field.isForeignKey
        };
    }

    function toNode(entity) {
        var theme = COLOR_TOKENS[entity.color];

        return {
            id: entity.id,
            offsetX: entity.position.x,
            offsetY: entity.position.y,
            shape: {
                type: 'Er',
                header: {
                    annotation: {
                        content: entity.title,
                        style: {
                            fontSize: 12,
                            bold: true,
                            color: '#111827'
                        }
                    },
                    height: 34,
                    style: {
                        fill: theme.headerFill
                    }
                },
                fields: entity.fields.map(toFieldModel),
                fieldDefaults: {
                    alternateRowColors: [theme.bodyFill, '#ffffff']
                },
            },
            style: {
                fill: theme.bodyFill,
                strokeColor: theme.strokeColor,
                strokeWidth: 1.75,
            }
        };
    }

    function toConnector(relationship) {
        var color = relationship.color || '#64748b';

        var connector = {
            id: relationship.id,
            sourceID: relationship.source,
            targetID: relationship.target,
            type: 'Orthogonal',
            cornerRadius: 6,
            style: {
                strokeColor: color,
                strokeWidth: 1.75
            },
            sourceDecorator: {
                style: {
                    strokeColor: color,
                    strokeWidth: 1.75
                }
            },
            targetDecorator: {
                style: {
                    strokeColor: color,
                    strokeWidth: 1.75
                }
            },
            shape: {
                type: 'Er',
                relationship: relationship.relationshipType,
                sourceMultiplicity: { type: relationship.sourceCardinality },
                targetMultiplicity: { type: relationship.targetCardinality }
            }
        };

        // Add annotation if defined in relationship schema
        if (relationship.annotation) {
            connector.annotations = [{
                content: relationship.annotation,
                style: {
                    color: color,
                    fill: '#ffffff',
                    fontSize: 13
                }
            }];
        }

        return connector;
    }

    var nodes = schema.entities.map(toNode);
    var connectors = schema.relationships.map(toConnector);
    var diagramCreated = false;

    var contextMenu = {
        show: true,
        items: [
            {
                text: 'Connector Type',
                id: 'ConnectorType',
                // Sub-menu for Connector Types
                items: [
                    { text: 'Straight', id: 'Straight' },
                    { text: 'Orthogonal', id: 'Orthogonal' },
                    { text: 'Bezier', id: 'Bezier' }
                ]
            },
            {
                text: 'Relationship',
                id: 'Relationship',
                // Sub-menu for Relationship Types
                items: [
                    { text: 'Identifying', id: 'Identifying' },
                    { text: 'NonIdentifying', id: 'NonIdentifying' }
                ]
            },
            {
                text: 'Source Multiplicity',
                id: 'Source_Multiplicity',
                // Sub-menu for Source Multiplicity
                items: [
                    { text: 'One', id: 'One' },
                    { text: 'Many', id: 'Many' },
                    { text: 'OneAndOnlyOne', id: 'OneAndOnlyOne' },
                    { text: 'ZeroOrOne', id: 'ZeroOrOne' },
                    { text: 'ZeroOrMany', id: 'ZeroOrMany' },
                    { text: 'OneOrMany', id: 'OneOrMany' }
                ]
            },
            {
                text: 'Target Multiplicity',
                id: 'Target_Multiplicity',
                // Sub-menu for Target Multiplicity
                items: [
                    { text: 'One', id: 'One_t' },
                    { text: 'Many', id: 'Many_t' },
                    { text: 'OneAndOnlyOne', id: 'OneAndOnlyOne_t' },
                    { text: 'ZeroOrOne', id: 'ZeroOrOne_t' },
                    { text: 'ZeroOrMany', id: 'ZeroOrMany_t' },
                    { text: 'OneOrMany', id: 'OneOrMany_t' }
                ]
            },
        ],
        showCustomMenuOnly: true,
    };
    function contextMenuClick(args) {
        // Check if any connector is selected
        if (diagram.selectedItems.connectors.length > 0) {
            var connector = diagram.selectedItems.connectors[0];
            var erConnector = diagram.selectedItems.connectors[0].shape;
            var itemId = args.item.id;
            if (itemId === 'Straight' || itemId === 'Orthogonal' || itemId === 'Bezier') {
                connector.type = itemId;
            } else if (itemId === 'Identifying' || itemId === 'NonIdentifying') {
                erConnector.relationship = itemId;
            } else if (itemId === 'One' || itemId ==='Many' || itemId ==='OneAndOnlyOne' || itemId ==='ZeroOrOne' || itemId ==='ZeroOrMany' || itemId ==='OneOrMany') {
                erConnector.sourceMultiplicity.type = args.item.text ;
            } else if (itemId === 'One_t' || itemId ==='Many_t' || itemId ==='OneAndOnlyOne_t' || itemId ==='ZeroOrOne_t' || itemId ==='ZeroOrMany_t' || itemId ==='OneOrMany_t') {
                erConnector.targetMultiplicity.type = args.item.text ;
            }
            diagram.dataBind();
        }

    }
    function contextMenuOpen(args) {
        var hiddenId = [];
        if (args.element.className !== 'e-menu-parent e-ul ') {
            hiddenId = ['ConnectorType', 'Relationship' , 'Source_Multiplicity', 'Target_Multiplicity'];
        }
        if (diagram.selectedItems.connectors[0] instanceof ej.diagrams.Connector) {
            hiddenId = [];
        }
        args.hiddenItems = hiddenId; // Set the hidden menu items based on the logic above
    }

    var diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '100%',
        nodes: nodes,
        connectors: connectors,
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.LineRouting | ej.diagrams.DiagramConstraints.AvoidLineOverlapping,
        tool: ej.diagrams.DiagramTools.SingleSelect,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        contextMenuSettings: contextMenu,
        contextMenuOpen: contextMenuOpen,
        contextMenuClick: contextMenuClick,
        getConnectorDefaults: function (connector) {
            connector.cornerRadius = 10;
            connector.type = 'Orthogonal';
            connector.constraints = ej.diagrams.ConnectorConstraints.Default;
            return connector;
        },
        selectedItems: { userHandles: [] },
        onUserHandleMouseDown: function (args) {
            var handle = args.element;
            if (!handle) { return; }

            var handleName = handle.name;

            var node = getSelectedErEntity();
            if (handleName === 'AddField') {
                if (!node) { return; }

                var newField = createNewErField(node);
                diagram.addErField(node, newField);
            } else if (handleName === 'RemoveField') {
                if (!node) { return; }

                var fieldToRemove = getSelectedFieldToRemove(node);
                if (!fieldToRemove) { return; }

                diagram.removeErField(node, fieldToRemove);
            }
        },

        selectionChange: function () {
            var selectedNodes = diagram.selectedItems.nodes;
            // hide handles for everything by default
            diagram.selectedItems.userHandles = [];
            if (selectedNodes.length === 1) {
                var node = selectedNodes[0];
                if (node && node.shape && node.shape.type === 'Er' && node.style && node.style.strokeColor) {
                    diagram.selectedItems.userHandles = [{
                        name: 'AddField',
                        offset: 1,
                        side: 'Bottom',
                        content: '<g class="insert-handle"><circle class="bg" cx="8" cy="8" r="7" fill="' + node.style.strokeColor + '"/><path class="plus" d="M8 5 V11 M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/><style>.insert-handle { cursor: pointer; } .insert-handle:hover .bg { fill: ' + node.style.strokeColor + '; }</style></g>',
                        tooltip: { content: 'Add Field' },
                        size: 24,
                        margin: { left: 20, bottom: 36 }
                    }];
                } else if (node && node.shape && node.style && node.style.strokeColor) {
                    var isPKField = node.annotations && node.annotations.length > 0 && node.annotations[0].content === 'PK';

                    if (!isPKField) {
                        diagram.selectedItems.userHandles = [{
                            name: 'RemoveField',
                            offset: 1,
                            side: 'Bottom',
                            content: '<g class="minus-handle"><circle class="bg" cx="8" cy="8" r="7" fill="' + node.style.strokeColor + '"/><path class="minus" d="M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/><style>.minus-handle { cursor: pointer; } .minus-handle:hover .bg { fill: ' + node.style.strokeColor + '; }</style></g>',
                            tooltip: { content: 'Remove Field' },
                            size: 24,
                            margin: { left: 20, bottom: 36 }
                        }];
                    }
                }
            }
            diagram.dataBind();
        },
        created: function () {
            diagramCreated = true;
            diagram.fitToPage();
        },
        load: function () {
            if (diagramCreated) {
                setTimeout(function () { diagram.fitToPage(); }, 10);
            }
        }
    });

    diagram.appendTo('#diagram');
    addEvents();

    // Define entity symbols for the palette - 4 types with single default field and placeholder text
    var entityNoFields = {
        id: 'entity_no_fields',
        tooltip:{content:'Entity With No-Fields'},
        constraints: ej.diagrams.NodeConstraints.Tooltip,
        width: 80,
        height: 80,
        shape: {
            type: 'Er',
            header: {
                annotation: {
                    content: 'Entity Name',
                    style: {
                        fontSize: 12,
                        bold: true,
                        color: '#111827'
                    }
                },
                height: 34,
                style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
            },
            fields: [],
        },
        style: {
            fill: '#f5f3ff',
            strokeColor: '#7c3aed',
            strokeWidth: 1.5
        }
    };

    var commonHeader = {
        annotation: {
            content: 'Entity Name',
            style: {
                fontSize: 12,
                bold: true,
                color: '#111827'
            }
        },
        height: 34,
        style: {
            fill: '#ddd6fe',
            fontSize: 12,
            bold: true,
            color: 'white'
        }
    };

    var entityKeyName = {
        id: 'entity_key_name',
        tooltip:{content:'Entity With Key and Name'},
        constraints: ej.diagrams.NodeConstraints.Tooltip,
        width: 80,
        height: 110,
        shape: {
            type: 'Er',
            header: commonHeader,
            fields: [
                { id: 'field_id', name: 'Attribute', isPrimaryKey: true }
            ]
        },
        style: {
            fill: '#f5f3ff',
            strokeColor: '#7c3aed',
            strokeWidth: 1.5
        }
    };

    var entityKeyNameType = {
        id: 'entity_key_name_type',
        tooltip:{content:'Entity With Key, Name and Type'},
        constraints: ej.diagrams.NodeConstraints.Tooltip,
        width: 80,
        height: 125,
        shape: {
            type: 'Er',
            header: commonHeader,
            fields: [
                { id: 'field_id_type', name: 'Attribute', isPrimaryKey: true, dataType: 'INT' }
            ]
        },
        style: {
            fill: '#f5f3ff',
            strokeColor: '#7c3aed',
            strokeWidth: 1.5,
        }
    };

    var entityKeyNameTypeConstraints = {
        id: 'entity_key_name_type_constraints',
        tooltip:{content:'Entity With Key, Name, Type and Constraints'},
        constraints: ej.diagrams.NodeConstraints.Tooltip,
        width: 80,
        height: 140,
        shape: {
            type: 'Er',
            header: commonHeader,
            fields: [
                { id: 'field_id_constraints', name: 'Attribute', isPrimaryKey: true, dataType: 'INT', constraints: ['NotNull'] }
            ]
        },
        style: {
            fill: '#ffffff',
            strokeColor: '#7c3aed',
            strokeWidth: 1.5,
        }
    };

    var connectorSymbols = [
        {
            id: 'Link1',
            tooltip:{content:'One to One'},
            constraints: ej.diagrams.ConnectorConstraints.Tooltip,
            sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            shape: {
                type: 'Er',
                sourceMultiplicity: { type: 'One' },
                targetMultiplicity: { type: 'One' }
            },
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
            sourceDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            },
            targetDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            }
        },
        {
            id: 'Link2',
            tooltip:{content:'Many to Many'},
            constraints: ej.diagrams.ConnectorConstraints.Tooltip,
            sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            shape: {
                type: 'Er',
                sourceMultiplicity: { type: 'Many' },
                targetMultiplicity: { type: 'Many' }
            },
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
            sourceDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            },
            targetDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            }
        },
        {
            id: 'Link3',
            tooltip:{content:'OneAndOnlyOne to OneAndOnlyOne'},
            constraints: ej.diagrams.ConnectorConstraints.Tooltip,
            sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            shape: {
                type: 'Er',
                sourceMultiplicity: { type: 'OneAndOnlyOne' },
                targetMultiplicity: { type: 'OneAndOnlyOne' }
            },
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
            sourceDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            },
            targetDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            }
        },
        {
            id: 'Link4',
            tooltip:{content:'ZeroOrOne to ZeroOrOne'},
            constraints: ej.diagrams.ConnectorConstraints.Tooltip,
            sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            shape: {
                type: 'Er',
                sourceMultiplicity: { type: 'ZeroOrOne' },
                targetMultiplicity: { type: 'ZeroOrOne' }
            },
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
            sourceDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            },
            targetDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            }
        },
        {
            id: 'Link5',
            tooltip:{content:'OneOrMany to OneOrMany'},
            constraints: ej.diagrams.ConnectorConstraints.Tooltip,
            sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            shape: {
                type: 'Er',
                sourceMultiplicity: { type: 'OneOrMany' },
                targetMultiplicity: { type: 'OneOrMany' }
            },
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
            sourceDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            },
            targetDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            }
        },
        {
            id: 'Link6',
            tooltip:{content:'ZeroOrMany to ZeroOrMany'},
            constraints: ej.diagrams.ConnectorConstraints.Tooltip,
            sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            shape: {
                type: 'Er',
                sourceMultiplicity: { type: 'ZeroOrMany' },
                targetMultiplicity: { type: 'ZeroOrMany' }
            },
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
            sourceDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            },
            targetDecorator: {
                style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
            }
        }
    ];

    var erPalettes = [
        {
            id: 'entities',
            expanded: true,
            title: 'ER Entities',
            symbols: [entityNoFields, entityKeyName, entityKeyNameType, entityKeyNameTypeConstraints]
        },
        { id: 'connectors', symbols: connectorSymbols, title: 'Connectors' },
    ];


    // Initialize Symbol Palette
    var symbolPalette = new ej.diagrams.SymbolPalette({
        palettes: erPalettes,
        width: '100%', height: '100%',
        symbolWidth: 70,
        symbolHeight: 70,
        enableAnimation: false,
        symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 }
    });

    symbolPalette.appendTo('#symbolpalette');

    function createNewErField(node) {
        var erShape = node.shape;
        var fields = erShape.fields || [];

        var newField = {
            id: node.id + '_field_' + new Date().getTime(),
            name: 'NewField'
        };

        if (fields.length === 0) {
            return newField;
        }

        var lastField = fields[fields.length - 1];

        if (lastField.dataType && lastField.dataType !== '') {
            newField.dataType = 'VARCHAR(20)';
        }

        if (lastField.constraints && lastField.constraints.length > 0) {
            newField.constraints = ['NotNull'];
        }

        return newField;
    }

    function getSelectedErEntity() {
        if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length === 0) {
            return undefined;
        }
        var selectedNode = diagram.selectedItems.nodes[0];
        selectedNode = diagram.nameTable[selectedNode.id] || selectedNode;
        if (selectedNode.shape && selectedNode.shape.type === 'Er') {
            return selectedNode;
        }
        if (selectedNode.parentId) {
            var parentNode = diagram.nameTable[selectedNode.parentId];
            if (parentNode && parentNode.shape && parentNode.shape.type === 'Er') {
                return parentNode;
            }
        }
        return undefined;
    }

    function getSelectedFieldToRemove(entityNode) {
        var erEntity = entityNode.shape;
        if (!erEntity || !erEntity.fields || erEntity.fields.length === 0) {
            return undefined;
        }

        var selectedNodes = diagram.selectedItems.nodes;
        if (!selectedNodes || selectedNodes.length === 0) {
            return erEntity.fields[erEntity.fields.length - 1];
        }

        var selectedNode = selectedNodes[0];
        var parentId = selectedNode.parentId || '';
        if (parentId === entityNode.id && entityNode.children) {
            var selectedChildIndex = entityNode.children.indexOf(selectedNode.id);
            if (selectedChildIndex > 0 && selectedChildIndex <= erEntity.fields.length) {
                return erEntity.fields[selectedChildIndex - 1];
            }
        }

        return erEntity.fields[erEntity.fields.length - 1];
    }
};