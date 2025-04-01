this.default = function () {

    // Initialize Toast notification for errors
    var toastObj = new ej.notifications.Toast({
        position: {
            X: 'Right'
        },
        target: '.integration-control-section',
        cssClass: 'e-toast-danger'
    });
    toastObj.appendTo('#stt-toast');

    // Initialize AI AssistView component
    var aiAssistViewObj = new ej.interactivechat.AIAssistView({
        promptRequest: onPromptRequest,
        footerTemplate: "#footerContent",
        bannerTemplate: "#bannerContent",
        toolbarSettings: {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: toolbarItemClicked
        }
    });
    aiAssistViewObj.appendTo('#aiAssistView');

    // Initialize Speech-to-Text component
    var speechToTextObj = new ej.inputs.SpeechToText({
        transcriptChanged: onTranscriptChange,
        onStop: onListeningStop,
        created: onCreated,
        onError: onErrorHandler,
        cssClass: 'e-flat'
    });
    speechToTextObj.appendTo('#speechToText');

    // Handles AI prompt requests
    function onPromptRequest() {
        setTimeout(function() {
            aiAssistViewObj.addPromptResponse('For real-time prompt processing, connect the AIAssistView component to your preferred AI service.');
            toggleButtons();
        }, 2000);
    }

    // Handles toolbar button clicks
    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            aiAssistViewObj.prompts = [];
        }
    }

    // Updates transcript in the input area when speech-to-text transcribes
    function onTranscriptChange(args) {
        document.querySelector('#assistview-footer').innerText = args.transcript;
    }

    // Handles actions when speech listening stops
    function onListeningStop() {
        toggleButtons();
    }

    // Handles actions after component creation
    function onCreated() {
        var assistviewFooter = document.querySelector('#assistview-footer');
        var sendButton = document.querySelector('#assistview-sendButton');

        sendButton.addEventListener('click', sendIconClicked);
        assistviewFooter.addEventListener('input', toggleButtons);

        assistviewFooter.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                    sendIconClicked();
                    e.preventDefault(); // Prevent the default behavior of the Enter key
                }
        });

        toggleButtons();
    }

    // Toggles the visibility of the send and speech-to-text buttons
    function toggleButtons() {
        var assistviewFooter = document.querySelector('#assistview-footer');
        var sendButton = document.querySelector('#assistview-sendButton');
        var speechButton = document.querySelector('#speechToText');

        var hasText = assistviewFooter.innerText.trim() !== '';
        sendButton.classList.toggle('visible', hasText);
        speechButton.classList.toggle('visible', !hasText);

        if (!hasText && (assistviewFooter.innerHTML === '<br>' || !assistviewFooter.innerHTML.trim())) {
            assistviewFooter.innerHTML = '';
        }
    }

    // Handles send button click event
    function sendIconClicked() {
        var assistviewFooter = document.querySelector('#assistview-footer');
        aiAssistViewObj.executePrompt(assistviewFooter.innerText);
        assistviewFooter.innerText = "";
    }

    // Handles errors and displays toast notifications
    function onErrorHandler(args) {
        toastObj.content = args.errorMessage;
        if (args.error === 'unsupported-browser') {
            speechToTextObj.disabled = true;
            toastObj.show({ timeOut: 0 });
        } else {
            toastObj.show({ timeOut: 5000 });
        }
    }
};
