this.default = function () {
    /**
     * Text to UML Sequence AI Sample
     */
    ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DataBinding, ej.diagrams.PrintAndExport);

    const sequenceModel = {
        // Space between each participant in the diagram
        spaceBetweenParticipants: 250,
        // List of participants in the sequence diagram
        participants: [
            {
                id: "User",
                content: "User",
                // Indicates that User is an actor
                isActor: true
            },
            {
                id: "Transaction",
                content: "Transaction",
                // Activation periods for the Transaction participant
                activationBoxes: [
                    { id: "act1", startMessageID: 'msg1', endMessageID: 'msg4' }
                ]
            },
            {
                id: "FraudDetectionSystem",
                content: "Fraud Detection System",
                // Activation periods for the Fraud Detection System participant
                activationBoxes: [
                    { id: "act2", startMessageID: 'msg2', endMessageID: 'msg3' },
                    { id: "act3", startMessageID: 'msg5', endMessageID: 'msg6' }
                ]
            }
        ],
        // List of messages exchanged between participants
        messages: [
            { id: 'msg1', content: "Initiate Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: ej.diagrams.UmlSequenceMessageType.Synchronous },
            { id: 'msg2', content: "Send Transaction Data", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: ej.diagrams.UmlSequenceMessageType.Synchronous },
            { id: 'msg3', content: "Validate Transaction", fromParticipantID: "FraudDetectionSystem", toParticipantID: "Transaction", type: ej.diagrams.UmlSequenceMessageType.Reply },
            { id: 'msg4', content: "Transaction Approved", fromParticipantID: "Transaction", toParticipantID: "User", type: ej.diagrams.UmlSequenceMessageType.Asynchronous },
            { id: 'msg5', content: "Flag Transaction", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: ej.diagrams.UmlSequenceMessageType.Synchronous },
            { id: 'msg6', content: "Fraud Detected", fromParticipantID: "FraudDetectionSystem", toParticipantID: "User", type: ej.diagrams.UmlSequenceMessageType.Reply },
            { id: 'msg7', content: "Cancel Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: ej.diagrams.UmlSequenceMessageType.Synchronous },
            { id: 'msg8', content: "Complete Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: ej.diagrams.UmlSequenceMessageType.Synchronous }
        ],
        // Conditional fragments within the sequence
        fragments: [
            {
                id: 1,
                // Represents alternative fragment
                type: ej.diagrams.UmlSequenceFragmentType.Alternative,
                conditions: [
                    // Condition when fraud is detected
                    {
                        // Content of condition
                        content: "Fraud Detected",
                        // Messages part of this condition
                        messageIds: ['msg5', 'msg6', 'msg7']
                    },
                    {
                        content: "No Fraud Detected",
                        messageIds: ['msg8']
                    }
                ]
            }
        ]
    };
    let exportItems = [
        { text: 'JPG' }, { text: 'PNG' }, { text: 'SVG' }
    ];

    let zoomMenuItems = [
        { text: 'Zoom In' }, { text: 'Zoom Out' }, { text: 'Zoom to Fit' }, { text: 'Zoom to 50%' },
        { text: 'Zoom to 100%' }, { text: 'Zoom to 200%' },
    ];

    let diagram;

    //Initializes diagram control
    diagram = new ej.diagrams.Diagram({
        width: '100%', height: '900px',
        model: sequenceModel,
        tool: ej.diagrams.DiagramTools.ZoomPan,
        rulerSettings: { showRulers: true },
        scrollChange: function (args) {
            if (args.panState !== 'Start') {
                let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
                zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
            }
        },
        getNodeDefaults: getNodeDefaults,
    });
    diagram.appendTo('#diagram');

    let button = new ej.buttons.Fab({ isPrimary: true, content: 'AI Assist', iconCss: 'e-icons e-assistview-icon', target: "#diagram" });
    button.appendTo('#ai-assist');
    let btnZoomIncrement;
    //Initialize Toolbar component
    let toolbarObj = new ej.navigations.Toolbar({
        clicked: function (args) { toolbarClick(args); },
        created: function () {
            if (diagram !== undefined) {
                let exportBtn = new ej.splitbuttons.DropDownButton({
                    items: exportItems, iconCss: 'e-ddb-icons e-export', select: function (args) { onselectExport(args); },
                });
                exportBtn.appendTo('#exportBtn');
                btnZoomIncrement = new ej.splitbuttons.DropDownButton({
                    items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
                });
                btnZoomIncrement.appendTo('#btnZoomIncrement');
                // refreshOverflow();
            }

        },
        items: toolbarItems(),
        overflowMode: 'Scrollable',
        width: '100%',
        height: 40
    });

    toolbarObj.appendTo('#toolbarEditor');

    btnZoomIncrement = new ej.splitbuttons.DropDownButton({
        items: zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange,
    });
    btnZoomIncrement.appendTo('#btnZoomIncrement');

    function toolbarItems() {
        let items = [
            { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram' },
            { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram', },
            { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram' },
            { type: 'Separator' },
            { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram' },
            { type: 'Input', tooltipText: 'Export Diagram', template: '<button id="exportBtn" style="width:100%;"></button>' },
            { type: 'Separator' },
            { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool', cssClass: 'tb-item-start pan-item tb-item-selected' },
            { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-middle' },
            { type: 'Separator' },
            {
                cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>', align: "Right",
            },
        ];
        return items;
    }

    //Sets the default values of a node
    function getNodeDefaults(node) {
        if (node.data instanceof ej.diagrams.UmlSequenceParticipant) {
            if (!(node.data.isActor)) {
                if (node.annotations && node.annotations[0] && node.annotations[0].style) {
                    node.annotations[0].style.color = 'white';
                }
            }
        }    // fragment node
        else if (node.data instanceof ej.diagrams.UmlSequenceFragment) {
            node.style = { strokeColor: 'cornflowerblue' };
        }
        return node;
    }


    let uploadObject = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        }, success: onUploadSuccess, showFileList: false
    });
    uploadObject.appendTo('#fileupload');
    function printDiagram() {
        let options = {};
        options.mode = 'Download';
        options.region = 'Content';
        options.multiplePage = diagram.pageSettings.multiplePage;
        options.pageHeight = diagram.pageSettings.height;
        options.pageWidth = diagram.pageSettings.width;
        diagram.print(options);
    }
    function toolbarClick(args) {
        let item = args.item.tooltipText;
        switch (item) {
            case 'New Diagram':
                diagram.clear();
                break;
            case 'Open Diagram':
                (document.getElementsByClassName('e-file-select-wrap'))[0]
                    .querySelector('button')
                    .click();
                break;
            case 'Save Diagram':
                download(diagram.saveDiagram());
                break;
            case 'Print Diagram':
                printDiagram();
                break;
            case 'Pan Tool':
                diagram.clearSelection();
                diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
                changeToolbarSelection('Pan Tool');
                break;
            case 'Select Tool':
                diagram.clearSelection();
                diagram.tool = ej.diagrams.DiagramTools.Default;
                changeToolbarSelection('Select Tool');
                break;
        }
        diagram.dataBind();
    }

    function changeToolbarSelection(tool) {
        let items = toolbarObj.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].tooltipText === tool) {
                items[i].cssClass = 'tb-item-selected';
            } else {
                items[i].cssClass = '';
            }
        }
    }
    function zoomChange(args) {
        let zoomCurrentValue = (document.getElementById("btnZoomIncrement")).ej2_instances[0];
        let currentZoom = diagram.scrollSettings.currentZoom;
        let zoom = {};
        switch (args.item.text) {
            case 'Zoom In':
                diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom Out':
                diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom to Fit':
                diagram.fitToPage();
                break;
            case 'Zoom to 50%':
                if (currentZoom === 0.5) {
                    currentZoom = 0;
                    zoom.zoomFactor = (0.5 / currentZoom - 1);
                    diagram.zoomTo(zoom);
                }
                else {
                    zoom.zoomFactor = (0.5 / currentZoom - 1);
                    diagram.zoomTo(zoom);
                }
                break;
            case 'Zoom to 100%':
                if (currentZoom === 1) {
                    currentZoom = 0;
                    zoom.zoomFactor = (1 / currentZoom - 1);
                    diagram.zoomTo(zoom);
                }
                else {
                    zoom.zoomFactor = (1 / currentZoom - 1);
                    diagram.zoomTo(zoom);
                }
                break;
            case 'Zoom to 200%':
                if (currentZoom === 2) {
                    currentZoom = 0;
                    zoom.zoomFactor = (2 / currentZoom - 1);
                    diagram.zoomTo(zoom);
                }
                else {
                    zoom.zoomFactor = (2 / currentZoom - 1);
                    diagram.zoomTo(zoom);
                }
                break;
        }

        zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';

    }
    //Export the diagraming object based on the format.
    function onselectExport(option) {
        let exportOptions = {};
        exportOptions.format = option.item.text;
        exportOptions.mode = 'Download';
        exportOptions.region = 'Content';
        exportOptions.fileName = 'Export';
        exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
        diagram.exportDiagram(exportOptions);
    }

    function onUploadSuccess(args) {
        let file = args.file;
        let rawFile = file.rawFile;
        let reader = new FileReader();
        reader.readAsText(rawFile);
        reader.onloadend = loadDiagram;
    }
    function loadDiagram(event) {
        diagram.loadDiagram(event.target.result);
    }
    function download(data) {
        if ((window.navigator).msSaveBlob) {
            let blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
            (window.navigator).msSaveOrOpenBlob(blob, 'Diagram.json');
        }
        else {
            let dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
            let ele = document.createElement('a');
            ele.href = dataString;
            ele.download = 'Diagram.json';
            document.body.appendChild(ele);
            ele.click();
            ele.remove();
        }
    }



    // Dialog

    let dialog = new ej.popups.Dialog({
        header: '<span class="e-icons e-assistview-icon" style="color: black;width:20px; font-size: 16px;"></span> AI Assist',
        showCloseIcon: true,
        isModal: true,
        content: `<p style="margin-bottom: 10px;font-weight:bold;">Suggested Prompts</p>
            <button id="btn1" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Sequence Diagram for ATM Transaction Process</button>
            <button id="btn2" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Sequence Diagram for User Authentication and Authorization</button>
            <button id="btn3" style="flex: 1; overflow: visible; border-radius: 8px;margin-bottom: 10px;">Sequence Diagram for Medical Appointment Scheduling</button>
            <div style="display: flex; align-items: center; margin-top: 20px;">
            <input type="text" id="textBox" class="db-openai-textbox" style="flex: 1;" />
            <button id="diagram-db-send" style="margin-left: 5px; height: 32px; width: 32px;"></button>
            </div>
            `,
        target: '#diagram-space',
        width: '540px',
        visible: false,
        height: '310px',
    });
    dialog.appendTo('#dialog');
    let btn1 = new ej.buttons.Button();
    let btn2 = new ej.buttons.Button();
    let btn3 = new ej.buttons.Button();
    let sendButton = new ej.buttons.Button({ iconCss: 'e-icons e-send', isPrimary: true, disabled: true });
    btn1.appendTo('#btn1');
    btn2.appendTo('#btn2');
    btn3.appendTo('#btn3');
    sendButton.appendTo('#diagram-db-send');
    let textBox = new ej.inputs.TextBox({ placeholder: 'Please enter your prompt here...', width: 450, input: onTextBoxChange });
    textBox.appendTo('#textBox');
    let msgBtn1 = (document.getElementById('btn1'));
    let msgBtn2 = (document.getElementById('btn2'));
    let msgBtn3 = (document.getElementById('btn3'));

    (document.getElementById('ai-assist')).onclick = () => {
        dialog.show();
    }

    (document.getElementById('diagram-db-send')).onclick = () => {
        dialog.hide();
        convertTextToUmlSequence(textBox.value)
    }

    function onTextBoxChange(args) {
        if (args.value !== '') {
            sendButton.disabled = false;
        } else {
            sendButton.disabled = true;
        }
    }
    msgBtn1.onclick = () => {
        dialog.hide();
        convertTextToUmlSequence(msgBtn1.innerText);
    }
    msgBtn2.onclick = () => {
        dialog.hide();
        convertTextToUmlSequence(msgBtn2.innerText);

    }
    msgBtn3.onclick = () => {
        dialog.hide();
        convertTextToUmlSequence(msgBtn3.innerText);
    }
    async function convertTextToUmlSequence(inputText) {
        showLoading();
        const options = {
            messages: [
                {
                    role: 'system',
                    content: 'You are an assistant responsible for generating Mermaid syntax for UML sequence diagrams in response to user queries.'
                },
                {
                    role: 'user',
                    content: `
                    Generate only the Mermaid UML sequence diagrams code for the process titled "${inputText}".
                    based on the guidelines below. The output should strictly adhere to these rules and must not include any markdown code fences, blank space or the string 'mermaid' at the beginning
                    1.	Start with sequenceDiagram.
                    2.	Declare all participants with actor or participant; user types must be actor.
                    3.	Use specific arrows only: ->>, -), --), and for self-messages also ->>.
                    4.	Mark activations (activate) and deactivations (deactivate) for all interactions.
                    5.	Include at least one alt, opt, or loop block.
                    6.	Add at least one create and destroy message.
                    7.	Include at least 10 interaction steps, building a complex flow.
                    8.	Follow proper indentation and do not add extra comments or markdown syntax.

                    Basic simple examples for your context, but you try to create a complex diagram with all the given elements:

                    Example 1: All Types of Messages
                    sequenceDiagram
                    actor Client
                    participant Server
                    Client ->> Server: Sync Request
                    Server -) Client: Async Notification
                    Client -->> Server: Reply Message
                    Client ->> Client: Self Check
                    Server ->> Client: Delete Record

                    Example 2: With Activations
                    sequenceDiagram
                    participant User
                    participant Service
                    User ->> Service: Start Process
                    activate Service
                    Service -->> User: Process Acknowledged
                    deactivate Service

                    Example 3: With Fragments
                    sequenceDiagram
                    participant User
                    participant System
                    alt Successful Login
                        User ->> System: Enter Credentials
                        activate System
                        System -->> User: Login Successful
                        deactivate System
                    else Failed Login
                        loop Retry up to 3 times
                            User ->> System: Re-enter Credentials
                        end
                    end

                    Example 4: With Create/Destroy Messages
                    sequenceDiagram
                    actor Admin
                    create participant Worker as DataProcessor
                    Admin -) Worker: Initialize Service
                    activate Worker
                    Worker ->> Admin: Service Ready
                    deactivate Worker
                    destroy Worker

                    Return only the structured Mermaid sequence diagram syntax.
              
                    Note: Please ensure the generated code matches the title "${inputText}" and follows the guidelines & format given above.
                    Provide only the Mermaid UML sequence diagram code, without any additional explanations, comments, or text.
                    `
                }
            ],
        }
        try {
            const jsonResponse = await window.serverAIRequest(options);
            if (jsonResponse) {
                diagram.loadDiagramFromMermaid(jsonResponse);
                diagram.dataBind();
            }
            hideLoading();

        } catch (error) {
            console.error('Error:', error);
            convertTextToUmlSequence(inputText);

        }
    };

    // Function to show loading indicator
    function showLoading() {
        (document.getElementById('loadingContainer')).style.display = 'block';
    }

    // Function to hide loading indicator
    function hideLoading() {
        (document.getElementById('loadingContainer')).style.display = 'none';
    }

    // Add keypress event listener to the document
    document.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && document.activeElement === textBox.element) {
            if (textBox.value) {
                dialog.hide();
                convertTextToUmlSequence(textBox.value);
            }
        }
    });
};