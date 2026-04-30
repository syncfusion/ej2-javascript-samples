this.default = function() {
    var selectedCommandText = '';
    var currentHoveredParagraph = null;
    var isGlobalRequest = false;
    var isPopupOpen = false;
    var abortController;
    var initialEmailContent = "<p>\nDear Team,\n</p>\n<p>\nI hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I'm pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.\n</p>\n<p>\nAs we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.\n</p>\n<p>\nThank you for your continued dedication and hard work on this project.\n</p>\n<p>\nBest regards,<br>\nProject Management Team\n</p>";
    var commandSettings = {
        commands: [
            {
                id: 'summarize',
                label: 'Summarize',
                tooltip: 'Create a brief summary',
                prompt: 'Summarize the main points',
                iconCss: 'e-icons e-collapse-2'
            },
            {
                id: 'fix-grammar',
                label: 'Fix Grammar',
                tooltip: 'Correct grammar and spelling',
                prompt: 'Fix grammar, spelling, and punctuation errors',
                iconCss: 'e-icons e-grammar-check'
            },
            {
                id: 'make-professional',
                label: 'Make Professional',
                tooltip: 'Transform to formal business tone',
                prompt: 'Rewrite this in a professional, formal business tone',
                iconCss: 'e-icons e-annotation-edit'
            },
            {
                id: 'make-friendly',
                label: 'Make Friendly',
                tooltip: 'Make the tone more casual and friendly',
                prompt: 'Rewrite this in a friendly, casual tone',
                iconCss: 'e-icons e-ai-chat'
            }
        ],
        itemSelect: function (args) {
            selectedCommandText = args.command.label;
        }
    };
    var inlineAssist = new ej.interactivechat.InlineAIAssist({
        commandSettings: commandSettings,
        relateTo: '#emailContent',
        promptRequest: function (args) {
            window.getUserID().then(function (userID) {
                try {
                    abortController = new AbortController();
                    var contentToProcess = '';
                    if (isGlobalRequest) {
                        var emailContentElem = document.getElementById('emailContent');
                        contentToProcess = emailContentElem ? emailContentElem.innerText : '';
                    } else if (currentHoveredParagraph) {
                        contentToProcess = currentHoveredParagraph.innerText;
                    }

                    fetch(window.AI_SERVICE_URL + '/api/chat', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ 
                            visitorId: userID,
                            messages: {
                                messages: [
                                    { role: 'system', content: 'You are a helpful assistant.' },
                                    { role: 'user', content: args.prompt + (contentToProcess) }
                                ]
                            }
                        }),
                        signal: abortController.signal
                    })
                    .then(function (response) {
                        if (!response.ok) {
                            return response.json().then(function (errorData) {
                                throw new Error(errorData.error || ("HTTP Error " + response.status));
                            });
                        }
                        return response.json();
                    })
                    .then(function (result) {
                        if (result && result.response) {
                            var aiResponse = result.response.replace('END_INSERTION', '');
                            inlineAssist.addResponse(aiResponse);
                        }
                    })
                    .catch(function (error) {
                        if (error.name === "AbortError") {
                            return;
                        }
                        setTimeout(function () {
                            var fallbackResponse = 'We could not reach the AI service; please try again later.';
                            inlineAssist.addResponse(fallbackResponse);
                            selectedCommandText = '';
                        }, 1000);
                    });

                } catch (error) {}
            });
        },
        responseSettings: {
            itemSelect: function (args) {
                if (args.command.label === 'Accept') {
                    if (isGlobalRequest) {
                        var emailContent_1 = document.getElementById('emailContent');
                        if (emailContent_1) {
                            emailContent_1.innerHTML = inlineAssist.prompts[inlineAssist.prompts.length - 1].response;
                            Array.from(emailContent_1.children).forEach(function (child) { return attachHoverEvent(child); });
                        }
                    }
                    else {
                        if (currentHoveredParagraph) {
                            currentHoveredParagraph.innerHTML = inlineAssist.prompts[inlineAssist.prompts.length - 1].response;
                        }
                    }
                    inlineAssist.hidePopup();
                }
                else if (args.command.label === 'Discard') {
                    inlineAssist.hidePopup();
                }
            }
        },
        open: function () {
            isPopupOpen = true;
        },
        close: function () {
            isPopupOpen = false;
            selectedCommandText = '';
            isGlobalRequest = false;
        }
    });
    inlineAssist.appendTo('#inlineAssist');
    var button = new ej.buttons.Button({
        iconCss: 'e-icons e-ai-chat',
        isPrimary: true
    });
    button.appendTo('#aiAssistantBtn');
    button = new ej.buttons.Button({
        iconCss: 'e-icons e-ai-chat',
        isPrimary: true
    });
    button.appendTo('#sparkleBtn');
    var sparkleButton = document.querySelector('#sparkleBtn');
    var emailContent = document.getElementById('emailContent');
    var attachHoverEvent = function (paragraph) {
        paragraph.addEventListener('mouseenter', function () {
            if (!isPopupOpen && paragraph.parentElement.classList.contains('email-body')) {
                currentHoveredParagraph = paragraph;
                var emailRect = paragraph.parentElement.parentElement.getBoundingClientRect();
                var rect = paragraph.getBoundingClientRect();
                var buttonHeight = 30;
                var topPosition = (rect.top - emailRect.top) + (rect.height / 2) - (buttonHeight / 2);
                sparkleButton.style.position = 'absolute';
                sparkleButton.style.left = '20px';
                sparkleButton.style.top = topPosition + 'px';
                sparkleButton.style.display = 'block';
            }
        });
    };
    if (sparkleButton) {
        sparkleButton.addEventListener('mouseenter', function () {
            sparkleButton.style.display = 'block';
        });
        sparkleButton.addEventListener('mouseleave', function () {
            sparkleButton.style.display = 'none';
        });
        sparkleButton.addEventListener('click', function () {
            if (currentHoveredParagraph) {
                isGlobalRequest = false;
                inlineAssist.relateTo = currentHoveredParagraph;
                inlineAssist.dataBind();
                inlineAssist.showPopup();
            }
        });
    }
    var aiAssistantBtn = document.getElementById('aiAssistantBtn');
    if (aiAssistantBtn) {
        aiAssistantBtn.addEventListener('click', function () {
            isGlobalRequest = true;
            inlineAssist.relateTo = aiAssistantBtn;
            inlineAssist.dataBind();
            inlineAssist.showPopup();
        });
    }
    var sendEmailBtn = document.getElementById('sendEmailBtn');
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', function () {
            var emailContentElem = document.getElementById('emailContent');
            if (emailContentElem) {
                emailContentElem.innerHTML = initialEmailContent;
                Array.from(emailContentElem.children).forEach(function (child) { return attachHoverEvent(child); });
                sparkleButton.style.display = 'none';
            }
        });
    }
    if (emailContent) {
        Array.from(emailContent.children).forEach(function (child) { return attachHoverEvent(child); });
        emailContent.addEventListener('input', function () {
            sparkleButton.style.display = 'none';
        });
        emailContent.addEventListener('mouseleave', function (e) {
            if (e.relatedTarget !== sparkleButton && !sparkleButton.matches(':hover')) {
                sparkleButton.style.display = 'none';
            }
        });
        new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType === 1 && node.parentElement === emailContent) {
                        attachHoverEvent(node);
                    }
                });
            });
        }).observe(emailContent, { childList: true });
    }
    if (sparkleButton) {
        sparkleButton.addEventListener('mouseenter', function () { return sparkleButton.style.display = 'block'; });
        sparkleButton.addEventListener('mouseleave', function () { return sparkleButton.style.display = 'none'; });
    }
};