this.default = function () {

    // Initialize Speech-to-Text component
    var speechToTextObj = new ej.inputs.SpeechToText({
        buttonSettings: {
            stopIconCss: 'e-icons e-listen-icon'
        },
        transcriptChanged: onTranscriptChange,
        onStart: onListeningStart,
        onStop: onListeningStop,
        onError: onErrorHandler,
        cssClass: 'usecase-stt-btn'
    });
    speechToTextObj.appendTo('#speechToText');
    
    // Initialize Chat UI component
    var user = { id: 'testing-user', user: 'Testing User' };
    var msgIdx = -1;
    var isIndicatorVisible = false;
    
    var chatUIObj = new ej.interactivechat.ChatUI({
        showHeader: false,
        showFooter: false,
        timeStampFormat: "MMM d, h:mm a",
        autoScrollToBottom: true,
        emptyChatTemplate: '#emptyChatTemplate',
        typingUsersTemplate: '#typingIndicatorTemplate'
    });
    chatUIObj.appendTo('#transcript-content');
    
    function onTranscriptChange(args) {
        var existingMsg  = chatUIObj.messages[msgIdx];
        if(existingMsg ) {
            chatUIObj.updateMessage({ text: args.transcript }, existingMsg.id);
            chatUIObj.scrollToBottom();
        } else {
            var newMsg  = { id: 'msg-' + (msgIdx + 1), text: args.transcript, author: user };
            chatUIObj.addMessage(newMsg);
        }
    
        // Show typing indicator only if it’s not visible
        if (!isIndicatorVisible) {
            chatUIObj.typingUsers = [user];
            isIndicatorVisible = true;
        }
    
        // Final transcript
        if (!args.isInterimResult) {
            msgIdx++;
            speechToTextObj.transcript = '';
            chatUIObj.typingUsers = [];
            isIndicatorVisible = false;
        }
    }

    // Event handler for listening start
    function onListeningStart() {
        msgIdx = chatUIObj.messages.length;
        this.element.classList.add('stt-listening-state');
        updateStatus('Listening... Speak now...');
    }

    // Event handler for listening stop
    function onListeningStop(args) {
        this.element.classList.remove('stt-listening-state');
        chatUIObj.typingUsers = [];
        if (args.isInteracted)
            updateStatus('Click the mic button to start speaking...');
    }

    // Event handler for errors
    function onErrorHandler(args) {
        updateStatus(args.errorMessage);
        if (args.error === 'unsupported-browser') {
            speechToTextObj.disabled = true;
        }
    }

    // Function to updates the speech recognition status message
    function updateStatus(status) {
        document.querySelector('.speech-recognition-status').innerText = status;
    }

};