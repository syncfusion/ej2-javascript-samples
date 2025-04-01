this.default = function () {
    var isSupportedBrowser = true;
    // Initialize Speech to Text component
    var speechToTextObj = new ej.inputs.SpeechToText({
        transcriptChanged: onTranscriptChange,
        onStart: onListeningStart,
        onStop: onListeningStop,
        onError: onErrorHandler
    });
    speechToTextObj.appendTo('#speech-to-text');

    // Initialize TextArea for output
    var textareaObj = new ej.inputs.TextArea({
        rows: 10,
        resizeMode: 'None',
        cssClass: 'e-outline',
        placeholder: 'Transcribed text will appear here...',
        input : function() { toggleCopyButtonState(); }
    });
    textareaObj.appendTo('#output-textarea');

    // Initialize DropDownList for styling options
    var stylingDDLObj = new ej.dropdowns.DropDownList({
        change: function (args) {
            speechToTextObj.cssClass = args.value;
        }
    });
    stylingDDLObj.appendTo('#stt-styling-ddl');

    // Initialize DropDownList for language options
    var langDDLObj = new ej.dropdowns.DropDownList({
        change: function (args) {
            speechToTextObj.lang = args.value;
        }
    });
    langDDLObj.appendTo('#stt-lang-ddl');

    // Initialize Switch for interim results
    var interimSwitchObj = new ej.buttons.Switch({
        checked: true,
        change: function (args) {
            speechToTextObj.allowInterimResults = args.checked;
        }
    });
    interimSwitchObj.appendTo('#interim-switch');

    // Initialize Switch for tooltip
    var tooltipSwitchObj = new ej.buttons.Switch({
        checked: true,
        change: function (args) {
            speechToTextObj.showTooltip = args.checked;
        }
    });
    tooltipSwitchObj.appendTo('#tooltip-switch');

    // Initialize Switch for icon with text
    var iconWithTextSwitchObj  = new ej.buttons.Switch({
        change: function (args) {
            speechToTextObj.buttonSettings = {
                content: args.checked ? 'Start Listening' : '',
                stopContent: args.checked ? 'Stop Listening' : ''
            };
        }
    });
    iconWithTextSwitchObj.appendTo('#icon-with-text-switch');    

    // Event handler for transcript change
    function onTranscriptChange(args) {
        if (!args.isInterimResult)
            args.transcript += ' ';

        textareaObj.value = args.transcript;
        toggleCopyButtonState();
    }

    // Event handler for listening start
    function onListeningStart() {
        if (isSupportedBrowser) {
            if (textareaObj.value)
                speechToTextObj.transcript = textareaObj.value + '\n';

            updateStatus('Listening... Speak now...');
        } else {
            updateStatus('For unsupported browsers, use event callbacks to handle Speech-to-Text actions.');
        }
        langDDLObj.enabled = false;
        interimSwitchObj.disabled = true;
    }

    // Event handler for listening stop
    function onListeningStop(args) {
        if (isSupportedBrowser) {
            if (args.isInteracted)
                updateStatus('Click the mic button to start speaking...');
        } else {
            updateStatus('For unsupported browsers, use event callbacks to handle Speech-to-Text actions.');
        }
        langDDLObj.enabled = true;
        interimSwitchObj.disabled = false;
    }

    // Event handler for errors
    function onErrorHandler(args) {
        updateStatus(args.errorMessage);
        
        if (args.error === 'unsupported-browser')
            isSupportedBrowser = false;
    }

    // Function to updates the speech recognition status message
    function updateStatus(status) {
        document.querySelector('.speech-recognition-status').innerText = status;
    }

     // Function to toggle the copy button's state
     function toggleCopyButtonState() {
        var copyButton = document.getElementById('transcript-copy-button');
        var hasText = textareaObj.element.value.trim() !== '';
        copyButton.disabled = hasText ? false : true;
    }

    // Event listener for copy button
    document.getElementById('transcript-copy-button').addEventListener('click', function() {
        var copyText = textareaObj.value;
        var copyBtnElem = this;
        
        if (copyText && navigator.clipboard) {
            navigator.clipboard.writeText(copyText).then(function() {
                copyBtnElem.innerText = 'Copied!';
                setTimeout(function () {
                    copyBtnElem.innerText = 'Copy';
                }, 1000);
            }).catch(function(err) {
                console.error('Clipboard write failed', err);
            });
        }
    });

    // Event listener for clear button
    document.getElementById('transcript-clear-button').addEventListener('click', function() {
        textareaObj.value = textareaObj.element.value = speechToTextObj.transcript = '';
        toggleCopyButtonState();
    });

};
