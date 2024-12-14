/*jshint esversion: 6 */
/**
 * UserHandle
 */


this.default = function () {
    //Defines the nodes collection in diagram
    var nodes = [
        {
            id: 'NewIdea', width: 150, height: 60, offsetX: 300, offsetY: 60, shape: { type: 'Flow', shape: 'Terminator' },
            annotations: [{ content: 'New idea identified' }],
        }, {
            id: 'Meeting', width: 150, height: 60, offsetX: 300, offsetY: 155, shape: { type: 'Flow', shape: 'Process' },
            annotations: [{ content: 'Meeting with board' }]
        }, {
            id: 'BoardDecision', width: 150, height: 110, offsetX: 300, offsetY: 280, shape: { type: 'Flow', shape: 'Decision' },
            annotations: [{ content: 'Board decides \n whether to proceed' }]
        }, {
            id: 'Project', width: 150, height: 100, offsetX: 300, offsetY: 430, shape: { type: 'Flow', shape: 'Decision' },
            annotations: [{ content: 'Find Project manager' }]
        }, {
            id: 'End', width: 150, height: 60, offsetX: 300, offsetY: 555, shape: { type: 'Flow', shape: 'Process' },
            annotations: [{ content: 'Implement and Deliver' }]
        }, {
            id: 'Decision', width: 250, height: 60, offsetX: 550, offsetY: 60, shape: { type: 'Flow', shape: 'Card' },
            annotations: [{ content: 'Decision process for new software ideas', }],
            fixedUserHandles: [{ padding: { left: 2, right: 2, top: 2, bottom: 2 }, offset: { x: 1.1, y: 0.5 }, width: 20, height: 20, }],
        }, {
            id: 'Reject', width: 150, height: 60, offsetX: 550, offsetY: 280, shape: { type: 'Flow', shape: 'Process' },
            annotations: [{ content: 'Reject' }]
        }, {
            id: 'Resources', width: 150, height: 60, offsetX: 550, offsetY: 430, shape: { type: 'Flow', shape: 'Process' },
            annotations: [{ content: 'Hire new resources' }]
        }
    ];
    //Defines the connectors collection in diagram
    var connectors = [
        { id: 'connector1', type: 'Straight', sourceID: 'NewIdea', targetID: 'Meeting' },
        { id: 'connector2', type: 'Straight', sourceID: 'Meeting', targetID: 'BoardDecision' },
        { id: 'connector3', type: 'Straight', sourceID: 'BoardDecision', targetID: 'Project' },
        { id: 'connector4', type: 'Straight', sourceID: 'Project', targetID: 'End' },
        { id: 'connector5', type: 'Straight', sourceID: 'BoardDecision', targetID: 'Reject' },
        { id: 'connector6', type: 'Straight', sourceID: 'Project', targetID: 'Resources' }
    ];

    //Enable the clone Tool for UserHandle.
    function getTool(action) {
        var tool;
        if (action === 'clone') {
            tool = new CloneTool(diagram.commandHandler);
        }
        return tool;
    }


    //set the position of the userhandle.
    function setUserHandlePosition(offset, side, target) {
        diagram.selectedItems.userHandles[0].offset = offset;
        diagram.selectedItems.userHandles[0].side = side;
        // custom code start
        target.classList.add('e-selected-style');
        // custom code end
    }
    //set the style of the userhandle.
    function applyUserHandleStyle(bgcolor, target) {
        diagram.selectedItems.userHandles[0].backgroundColor = bgcolor;
        diagram.selectedItems.userHandles[0].pathColor = 'White';
        // custom code start
        target.classList.add('e-selected-style');
        // custom code end
    }

    //Defines the user handle collection for nodes in diagram
    var handles = [
        {
            name: 'clone', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,' +
                '0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z ' +
                'M68.5,72.5h-30V34.4h30V72.5z',
            visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 }
        }
    ];
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            /* jshint proto: true */
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    //function to clone object 
    var CloneTool = (function (_super) {
        __extends(CloneTool, _super);
        function CloneTool() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //Defines the clone tool for copying node or connector objects.
        CloneTool.prototype.mouseDown = function (args) {
            var newObject;
            if (diagram.selectedItems.nodes.length > 0) {
                newObject = ej.diagrams.cloneObject(diagram.selectedItems.nodes[0]);
            }
            else {
                newObject = ej.diagrams.cloneObject(diagram.selectedItems.connectors[0]);
            }
            newObject.id += ej.diagrams.randomId();
            diagram.paste([newObject]);
            if (diagram.selectedItems.connectors.length > 0) {
                args.source = diagram.connectors[diagram.connectors.length - 1];
            }
            else {
                args.source = diagram.nodes[diagram.nodes.length - 1];
            }
            args.sourceWrapper = args.source.wrapper;
            _super.prototype.mouseDown.call(this, args);
            this.inAction = true;
        };
        return CloneTool;
    }(ej.diagrams.MoveTool));
    // Defines the content of the diagram.
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', nodes: nodes,
        connectors: connectors,
        selectedItems: { constraints: ej.diagrams.SelectorConstraints.UserHandle, userHandles: handles },
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        fixedUserHandleTemplate: '#fixeduserhandletemplate',
        fixedUserHandleClick: function (args) {
            diagram.remove(args.element);
        },
        // Sets default values for a Node.
        getNodeDefaults: function (node) {
            return {
                style: { fill: '#578CA9', strokeColor: 'none' },
                annotations: [{ style: { color: 'white' } }]
            };
        },
        //set CustomTool 
        getCustomTool: getTool,
        selectionChange: function (arg) {
            var propertyAppearance = document.getElementById('propertypanel');
            var blockSelectedElement = document.getElementsByClassName('e-remove-selection');
            if (arg.newValue) {
                if ((arg.newValue[0] instanceof ej.diagrams.Node) || (arg.newValue[0] instanceof ej.diagrams.Connector)) {
                    if (blockSelectedElement.length) {
                        blockSelectedElement[0].classList.remove('e-remove-selection');
                    }
                }
                else {
                    if (!propertyAppearance.classList.contains('e-remove-selection')) {
                        propertyAppearance.classList.add('e-remove-selection');
                    }
                }
            }
        }

    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
    diagram.select([diagram.nodes[0]]);
    //Change the postion of the UserHandle
    document.getElementById('appearance').onclick = function (args) {
        var target = args.target;
        var appearanceBlock = document.getElementById('appearance');
        // custom code start
        var selectedElement = appearanceBlock.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style') {
            switch (target.id) {
                case 'left':
                    setUserHandlePosition(0, 'Bottom', target);
                    break;
                case 'right':
                    setUserHandlePosition(1, 'Bottom', target);
                    break;
                case 'topr':
                    setUserHandlePosition(0, 'Right', target);
                    break;
            }
        }
    };
    //Change the appearence of the UserHandle
    document.getElementById('pattern').onclick = function (args) {
        var target = args.target;
        var patternBlock = document.getElementById('pattern');
        // custom code start
        var selectedElement = patternBlock.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        // custom code end
        if (target.className === 'image-pattern-style') {
            switch (target.id) {
                case 'pattern1':
                    applyUserHandleStyle('#1E90FF', target);
                    break;
                case 'pattern2':
                    applyUserHandleStyle('#3CB371', target);
                    break;
                case 'pattern3':
                    applyUserHandleStyle('#FF6347', target);
                    break;
            }
        }
    };


};



