/**
 * Rich Text Editor AI Assistant sample
 */

this.default = function () {
    var abortController;
    var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['AICommands', 'AIQuery', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'Alignments', 'Formats', 'OrderedList',
                'UnorderedList', 'CheckList', 'CodeBlock', 'Blockquote', 'CreateLink', 'Image', 'CreateTable', '|', 'SourceCode', '|', 'Undo', 'Redo']
        },
        quickToolbarSettings: {
            text: ['AICommands', 'AIQuery', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'Fontcolor', 'BackgroundColor', '|', 'Unorderedlist', 'Orderedlist']
        },

        aiAssistantPromptRequest: function (args) {
            window.getUserID().then(function (userID) {

                try {
                    abortController = new AbortController();

                    fetch(window.AI_SERVICE_URL + '/api/stream', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": userID
                        },
                        body: JSON.stringify({ message: args.prompt + (args.text) }),
                        signal: abortController.signal
                    })
                    .then(function (response) {
                        if (!response.ok) {
                            return response.json().then(function (errorData) {
                                throw new Error(errorData.error || ("HTTP Error " + response.status));
                            });
                        }

                        var reader = response.body.getReader();
                        var decoder = new TextDecoder();
                        var fullText = '';
                        var streamingStopped = false;

                        function processStream() {
                            return reader.read().then(function (result) {
                                if (streamingStopped) {
                                    return;
                                }

                                var value = result.value;
                                var done = result.done;

                                if (done) {
                                    editor.addAIPromptResponse(fullText, true);
                                    return;
                                }

                                var chunk = decoder.decode(value, { stream: true });
                                fullText += chunk;
                                editor.addAIPromptResponse(fullText, false);

                                return processStream();
                            });
                        }

                        return processStream();
                    })
                    .catch(function (error) {
                        if (error.name === "AbortError") {
                            console.log("AI Request aborted by user.");
                            return;
                        } else if (error.message && error.message.indexOf("token limit") !== -1) {
                            editor.addAIPromptResponse(error.message, false);
                            editor.addAIPromptResponse(error.message, true);
                            document.querySelector(".banner-message").innerHTML = error.message;
                            document.querySelector(".sb-header1").classList.remove("sb-hide");
                        } else {
                            console.error("There was a problem with the fetch operation:", error);
                        }
                    });

                } catch (error) {
                    console.error("Unexpected error:", error);
                }
            });
        },

        aiAssistantStopRespondingClick: function () {
            if (abortController) {
                abortController.abort();
            }
        }
    });

    editor.appendTo('#editor');
};
