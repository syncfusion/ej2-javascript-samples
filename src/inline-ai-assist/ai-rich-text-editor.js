this.default = function() {
    var rteSelection = new ej.richtexteditor.NodeSelection();
    var range;
    var selectedText = '';
    var selectedSpan = null;
    var abortController;
    var markdownConverter = ej.markdownconverter.MarkdownConverter;
    var commandSettings = {
        popupWidth: '250px',
        commands: [
            {
                label: "Improve Content",
                prompt: "Improve the clarity, coherence, and overall quality of the following content:",
                iconCss: 'e-icons e-magic-wand'
            },
            {
                label: "Shorten",
                prompt: "Shorten the following content without losing its core message:",
                iconCss: 'e-icons e-shorten'
            },
            {
                label: "Elaborate",
                prompt: "Expand on the following content with more detail and explanation:",
                iconCss: 'e-icons e-elaborate'
            },
            {
                label: "Simplify",
                prompt: "Simplify the language and make the following content easier to understand:",
                iconCss: 'e-icons e-text-wrap'
            },
            {
                label: "Summarize",
                prompt: "Summarize the following content in a concise and clear way:",
                iconCss: 'e-icons e-collapse-2'
            },
            {
                label: "Check Grammar & Spelling",
                prompt: "Check the following content for grammar and spelling mistakes, and correct them:",
                iconCss: 'e-icons e-grammar-check'
            }
        ]
    };

    var rteEditor = new ej.richtexteditor.RichTextEditor({
        quickToolbarSettings: {
            text: [{ prefixIcon: 'e-icons e-ai-chat', tooltipText: 'AI Assistant'}, 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'Fontcolor', 'BackgroundColor', '|', 'Unorderedlist', 'Orderedlist']
        },
        toolbarClick: function(args) {
            if (args.item.prefixIcon === 'e-icons e-ai-chat') {
                range = rteSelection.getRange(document);
                var relateToEl = range.endContainer.parentElement;
                selectedText = rteEditor.getSelection();
                if (selectedText && selectedText.length > 0) {
                    var wrapper = document.createElement('span');
                    wrapper.className = 'e-inlineaiassist-selected-text';
                    var selectedContent = range.extractContents();
                    wrapper.appendChild(selectedContent);
                    range.insertNode(wrapper);
                    selectedSpan = wrapper;
                    inlineAIAssist.relateTo = relateToEl ? relateToEl : wrapper;
                    inlineAIAssist.dataBind();
                    inlineAIAssist.showPopup();
                }
            }
        }
    });
    rteEditor.appendTo('#rte-editor');

    var inlineAIAssist = new ej.interactivechat.InlineAIAssist({
        commandSettings: commandSettings,
        responseMode: 'Inline',
        promptRequest: onRtePromptRequest,
         close: function () {
            if (abortController) {
                abortController.abort();
            }
            if (selectedSpan) {
                rteEditor.formatter.saveData();
                rteEditor.executeCommand('undo');
                rteEditor.clearUndoRedo();
                window.getSelection().removeAllRanges();
                selectedSpan = null;
            }
        },
        inlineToolbarSettings: {
            itemClick: function (args) {
                if (args.item.iconCss === 'e-icons e-inline-stop') {
                    if (abortController) {
                        abortController.abort();
                    }
                }
            }
        },
        responseSettings: {
            itemSelect: function (args) {
                if (args.command.label === 'Accept') {
                    if (selectedSpan && selectedSpan.parentNode) {
                        var parent = selectedSpan.parentNode;
                        var textContent = selectedSpan.textContent || selectedSpan.innerText;
                        var textNode = document.createTextNode(textContent);
                        parent.replaceChild(textNode, selectedSpan);
                        selectedSpan = null;
                        rteEditor.formatter.saveData();
                        rteEditor.formatter.enableUndo(rteEditor);
                    }
                    inlineAIAssist.hidePopup();
                }
                else if (args.command.label === 'Discard') {
                    rteEditor.formatter.saveData();
                    selectedSpan = null;
                    rteEditor.executeCommand('undo');
                    rteEditor.clearUndoRedo();
                    window.getSelection().removeAllRanges();
                    inlineAIAssist.hidePopup();
                }
            }
        }
    });
    inlineAIAssist.appendTo('#inline-ai-assist');    
    function onRtePromptRequest(args) {
        if (rteEditor.formatter.getUndoRedoStack().length === 0) {
            rteEditor.formatter.saveData();
        }
        var contextPrompt = args.prompt;
        if (selectedText && selectedText.length > 0) {
            contextPrompt = contextPrompt + ' ' + selectedText;
        }
        if (selectedSpan) {
            inlineAIAssist.dataBind();
            window.getUserID().then(function (userID) {
                try {
                    abortController = new AbortController();

                    fetch(window.AI_SERVICE_URL + '/api/stream', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": userID
                        },
                        body: JSON.stringify({ message: contextPrompt }),
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

                        function processStream() {
                            return reader.read().then(function (result) {
                                var value = result.value;
                                var done = result.done;

                                if (done) {
                                    if (selectedSpan && selectedSpan.parentNode) {
                                        inlineAIAssist.addResponse(fullText, true);
                                        var newRange = document.createRange();
                                        newRange.selectNodeContents(selectedSpan);
                                        rteEditor.selectRange(newRange);
                                        range = rteSelection.getRange(document);
                                    }
                                    return;
                                }

                                if (!selectedSpan || !selectedSpan.parentNode) {
                                    return;
                                }
                                
                                var chunk = decoder.decode(value, { stream: true });
                                fullText += chunk;
                                inlineAIAssist.addResponse(fullText, false);
                                var tempDiv = document.createElement('div');
                                tempDiv.innerHTML = markdownConverter.toHtml(fullText);
                                var plainText = tempDiv.textContent || tempDiv.innerText || fullText;
                                if (selectedSpan) {
                                    selectedSpan.innerHTML = plainText;
                                }
                                if (inlineAIAssist.popupObj) {
                                    inlineAIAssist.popupObj.refreshPosition();
                                }
                                return processStream();
                            });
                        }

                        return processStream();
                    })
                    .catch(function (error) {
                        if (error.name === "AbortError") {
                            return;
                        }
                        setTimeout(function () {
                            if (selectedSpan && selectedSpan.parentNode) {
                                var fallbackResponse = 'We could not reach the AI service; please try again later.';
                                selectedSpan.innerHTML = fallbackResponse;
                                inlineAIAssist.addResponse(fallbackResponse);
                                var newRange = document.createRange();
                                newRange.selectNodeContents(selectedSpan);
                                rteEditor.selectRange(newRange);
                                range = rteSelection.getRange(document);
                            }
                        }, 1000);
                    });
                } catch (error) {}
            });
        }
    }
}