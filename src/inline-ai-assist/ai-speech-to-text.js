this.default = function () {
    var isPopupOpen = false;
    var isAccepted = false;
    var originalContentHTML = '';
    var savedRange = null;
    var selectedSpan = null;
    var originalSpanHTML = '';
    var abortController;
    var commandSettings = {
        commands: [
            {
                id: 'improveContent',
                label: 'Improve Content',
                iconCss: 'e-icons e-edit',
                tooltip: 'Improve the selected content',
                prompt: 'Improve the selected content.'
            },
            {
                id: 'shorten',
                label: 'Shorten',
                iconCss: 'e-icons e-shorten',
                tooltip: 'Shorten the selected text',
                prompt: 'Shorten the selected text.'
            },
            {
                id: 'elaborate',
                label: "Elaborate",
                iconCss: 'e-icons e-elaborate',
                tooltip: 'Expand on the following content with more detail and explanation',
                prompt: 'Expand on the following content with more detail and explanation.',
            },
            {
                id: 'summarize',
                label: 'Summarize',
                iconCss: 'e-icons e-description',
                tooltip: 'Summarize the selected text',
                prompt: 'Summarize the selected text.'
            }
        ],
        popupWidth: '240px',
        popupHeight: 'auto',
    };
    var responseSettings = {
        itemSelect: function (args) {
            if (args.command.label === 'Accept') {
                isAccepted = true;
                if (selectedSpan && selectedSpan.parentNode) {
                    unwrapSelectedSpan();
                }
                else if (savedRange) {
                    restoreSelection();
                    if (savedRange) {
                        savedRange.deleteContents();
                        var response = inlinePrompt.prompts[inlinePrompt.prompts.length - 1].response;
                        savedRange.insertNode(createFragmentFromHTML(response));
                        savedRange = null;
                    }
                }
                inlinePrompt.hidePopup();
                isPopupOpen = false;
            } else if (args.command.label === 'Discard') {
                isAccepted = false;
                if (selectedSpan && selectedSpan.parentNode) {
                    restoreOriginalSpan();
                }
                savedRange = null;
                inlinePrompt.hidePopup();
                isPopupOpen = false;
            }
        }
    };
    
    var inlinePrompt = new ej.interactivechat.InlineAIAssist({
        commandSettings: commandSettings,
        responseSettings: responseSettings,
        target: '.meeting-header',
        relateTo: '#targetContent',
        popupWidth: '480px',
        popupHeight: 'auto',
        responseMode: 'Inline',
        placeholder: 'Type prompt for meeting assistance...',
        speechToTextSettings: {
            enable: true
        },
        close: function () {
            if (!isAccepted && originalContentHTML) {
                targetContent.innerHTML = originalContentHTML;
            }
            selectedSpan = null;
            originalSpanHTML = '';
            savedRange = null;
            originalContentHTML = '';
            isAccepted = false;
            isPopupOpen = false;
            window.getSelection().removeAllRanges();
        },
        promptRequest: function (args) {
            var selectedText = getSelectedText();
            var contextPrompt = args.prompt || '';
            if (selectedText && selectedText.length > 0) {
                contextPrompt = contextPrompt + ' ' + selectedText;
            }
            if (!contextPrompt.trim()) {
                inlinePrompt.addResponse("I'm here to assist with your meeting notes. Try selecting text and choosing a command.");
                return;
            }
            if (selectedSpan) {
                inlinePrompt.dataBind();
                window.getUserID && window.getUserID().then(function (userID) {
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
                                return response.json().then(function (errorData) { throw new Error(errorData.error || ("HTTP Error " + response.status)); });
                            }
                            var reader = response.body.getReader();
                            var decoder = new TextDecoder();
                            var fullText = '';

                            function processStream() {
                                return reader.read().then(function (result) {
                                    var value = result.value;
                                    var done = result.done;

                                    if (done) {
                                        inlinePrompt.addResponse(fullText, true);
                                        return;
                                    }

                                    var chunk = decoder.decode(value, { stream: true });
                                    fullText += chunk;
                                    inlinePrompt.addResponse(fullText, false);
                                    var tempDiv = document.createElement('div');
                                    tempDiv.textContent = fullText;
                                    var plainText = tempDiv.textContent || fullText;
                                    if (selectedSpan) {
                                        selectedSpan.textContent = plainText;
                                    }
                                    if (inlinePrompt.popupObj) {
                                        inlinePrompt.popupObj.refreshPosition();
                                    }
                                    return processStream();
                                });
                            }

                            return processStream();
                        })
                        .catch(function (error) {
                            if (error.name === 'AbortError') { return; }
                            setTimeout(function () {
                                var fallbackResponse = 'We could not reach the AI service; please try again later.';
                                if (selectedSpan) {
                                    selectedSpan.innerHTML = fallbackResponse;
                                }
                                inlinePrompt.addResponse(fallbackResponse);
                            }, 1000);
                        });
                    } catch (e) {}
                });
            } else {
                // No inline selection — call chat endpoint for full response
                window.getUserID && window.getUserID().then(function (userID) {
                    try {
                        abortController = new AbortController();
                        fetch(window.AI_SERVICE_URL + '/api/chat', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ visitorId: userID, messages: { messages: [ { role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: contextPrompt } ] } }),
                            signal: abortController.signal
                        })
                        .then(function (response) {
                            if (!response.ok) {
                                return response.json().then(function (errorData) { throw new Error(errorData.error || ("HTTP Error " + response.status)); });
                            }
                            return response.json();
                        })
                        .then(function (result) {
                            if (result && result.response) {
                                var aiResponse = result.response.replace('END_INSERTION', '');
                                inlinePrompt.addResponse(aiResponse, true);
                            }
                        })
                        .catch(function (error) {
                            if (error.name === 'AbortError') { return; }
                            setTimeout(function () { inlinePrompt.addResponse('We could not reach the AI service; please try again later.'); }, 1000);
                        });
                    } catch (e) {}
                });
            }
        }
    });
    inlinePrompt.appendTo('#inlinePrompt');
    var targetContent = document.getElementById('targetContent');
    if (targetContent) {
        targetContent.addEventListener('mouseup', function () {
            if (saveSelection()) {
                var selection = window.getSelection();
                var range = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
                if (range && !range.collapsed) {
                    originalContentHTML = targetContent.innerHTML;
                    var wrapper = document.createElement('span');
                    wrapper.className = 'e-inlineaiassist-selected-text';
                    var selectedContent = range.extractContents();
                    wrapper.appendChild(selectedContent);
                    range.insertNode(wrapper);
                    selectedSpan = wrapper;
                    originalSpanHTML = wrapper.innerHTML;
                    savedRange = document.createRange();
                    savedRange.selectNodeContents(selectedSpan);
                    inlinePrompt.relateTo = selectedSpan;
                }
                else {
                    inlinePrompt.relateTo = savedRange.startContainer.parentElement;
                }
                inlinePrompt.dataBind();
                inlinePrompt.showPopup();
                isPopupOpen = true;
            }
        });
        targetContent.addEventListener('keyup', function () {
            if (saveSelection() && isPopupOpen) {
                inlinePrompt.relateTo = savedRange.startContainer.parentElement;
                inlinePrompt.dataBind();
            }
        });
    }
    function saveSelection() {
        var selection = window.getSelection();
        if (selection.rangeCount > 0 && !selection.isCollapsed) {
            savedRange = selection.getRangeAt(0).cloneRange();
            return true;
        }
        return false;
    }

    function restoreSelection() {
        if (!savedRange) return false;
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
        return true;
    }

    function createFragmentFromHTML(html) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html || '';
        var fragment = document.createDocumentFragment();
        while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild);
        }
        return fragment;
    }

    function unwrapSelectedSpan() {
        if (!selectedSpan || !selectedSpan.parentNode) {
            return;
        }

        var parent = selectedSpan.parentNode;
        var fragment = createFragmentFromHTML(selectedSpan.innerHTML);
        parent.replaceChild(fragment, selectedSpan);
        selectedSpan = null;
        originalSpanHTML = '';
    }

    function restoreOriginalSpan() {
        if (!selectedSpan || !selectedSpan.parentNode) {
            return;
        }

        var parent = selectedSpan.parentNode;
        var fragment = createFragmentFromHTML(originalSpanHTML);
        parent.replaceChild(fragment, selectedSpan);
        selectedSpan = null;
        originalSpanHTML = '';
    }

    function getSelectedText() {
        if (savedRange) {
            return savedRange.toString();
        }
        return '';
    }
};
