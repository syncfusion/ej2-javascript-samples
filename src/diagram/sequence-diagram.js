/**
 * Sequence Diagram using diagram model
 */

this.default = function () {
    // Define the sequence diagram model with participants, messages, and fragments
    var sequenceModel = {
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

    // Define default properties for connectors used in the diagram
    function getConnectorDefaults(connector) {
        var message = sequenceModel.messages.find(function(message) {
            return message.id === connector.id;
        });
        // Style the connector if it corresponds to a message
        if (message) {
            connector.targetDecorator.style = { fill: '#489ECC', strokeColor: '#489ECC' };
            connector.style = { strokeColor: '#489ECC', strokeWidth: 2 };
        }
    }
    // Define default properties for nodes used in the diagram
    function getNodeDefaults(node) {
        // participant node
        if (node.data instanceof ej.diagrams.UmlSequenceParticipant) {
            if (!node.data.isActor) {
                node.annotations[0].style.color = 'white';
            }
        }
        // activation node
        else if (node.data instanceof ej.diagrams.UmlSequenceActivationBox) {
            node.style = { fill: 'orange', strokeColor: 'orange' };
        }
    }
    // Create a new instance of the diagram
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '700px',
        tool: ej.diagrams.DiagramTools.ZoomPan,
        // Use the defined sequence model
        model: sequenceModel,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        getNodeDefaults: getNodeDefaults,
        getConnectorDefaults: getConnectorDefaults,
    });
    // Append the diagram to the DOM
    diagram.appendTo('#diagram');
};
