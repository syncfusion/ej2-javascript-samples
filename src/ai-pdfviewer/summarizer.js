this.default = function () {
    /**
     * PDF Summarizer Sample
     */
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
        ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch,
        ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner, ej.pdfviewer.PageOrganizer);
    let pdfviewer = new ej.pdfviewer.PdfViewer();
    //Replace the service url with your port number.
    pdfviewer.serviceUrl = 'http://localhost:62870/api/pdfviewer';
    pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    pdfviewer.documentLoad = documentLoad;
    pdfviewer.zoomMode = "FitToPage";
    pdfviewer.documentUnload = documentUnLoad;
    pdfviewer.appendTo('#PdfViewer');
    if (pdfviewer.element) {
        let button = new ej.buttons.Fab({ iconCss: 'e-icons e-aiassist-chat' });
        const fabButton = document.getElementById("e-pv-fab-btn");
        const leftContainer = document.getElementById("e-pv-left-container");
        const rightContainer = document.getElementById("e-pv-right-container");
        button.appendTo('#e-pv-fab-btn');
        button.element.onclick = showAI;
        let initialResponse = false;
        /* Function for the document load event*/
        function documentLoad(args) {
            if (fabButton) {
                fabButton.style.display = 'block';
            }
        }

        /* Function for the document unload event*/
        function documentUnLoad(args) {
            if (rightContainer) {
                rightContainer.style.display = "none";
            }
            if (!ej.base.Browser.isDevice) {
                if (leftContainer) {
                    leftContainer.style.width = "100%";
                }
                pdfviewer.updateViewerContainer();
            }
            if (fabButton) {
                fabButton.style.display = 'block';
            }
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = [];
            initialResponse = false;
        }

        /* Function for the show the interchat*/
        function showAI() {
            if (fabButton) {
                fabButton.style.display = 'none';
            }
            if (!ej.base.Browser.isDevice) {
                if (leftContainer) {
                    leftContainer.style.width = "70%";
                }
                pdfviewer.updateViewerContainer();
            }
            if (rightContainer) {
                rightContainer.style.display = "block";
            }
            if (!initialResponse) {
                aiAssistViewInst.executePrompt("Summarize the document");
            }
        }

        let bannerViewTemplate = `<div class="ai-assist-banner"><div class="e-icons e-aiassist-chat"></div><h2>AI Assistance</h2><div class="ai-assist-banner-subtitle">Your everyday AI companion</div></div>`;

        /* Interactive chat toolbar settings */
        let assistViewToolbarSettings = {
            itemClicked: function (args) {
                if (args.item.iconCss == 'e-icons e-close') {
                    if (fabButton) {
                        fabButton.style.display = 'block';
                    }
                    if (!ej.base.Browser.isDevice) {
                        if (leftContainer) {
                            leftContainer.style.width = "100%";
                        }
                    }
                    if (rightContainer) {
                        rightContainer.style.display = "none";
                    }
                    if (!ej.base.Browser.isDevice) {
                        pdfviewer.updateViewerContainer();
                    }
                }
                if (args.item.iconCss == 'e-icons e-refresh') {
                    let lastPropmt = aiAssistViewInst.prompts[aiAssistViewInst.prompts.length - 1].prompt;
                    let editedPrompts = aiAssistViewInst.prompts;
                    editedPrompts.pop();
                    aiAssistViewInst.prompts = editedPrompts;
                    aiAssistViewInst.onPropertyChanged(aiAssistViewInst);
                    aiAssistViewInst.executePrompt(lastPropmt);
                }
            },
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }, { iconCss: 'e-icons e-close', align: 'Right' }]
        };
        let assistViews = [{ iconCss: "e-icons e-aiassist-chat" }];

        /*Initialize the interactive chat componenet*/
        let aiAssistViewInst = new ej.interactivechat.AIAssistView({
            promptPlaceholder: "Type your prompt for assistance...",
            promptSuggestionsHeader: "Suggested Prompts",
            responseIconCss: "e-icons e-aiassist-chat",
            views: assistViews,
            toolbarSettings: assistViewToolbarSettings,
            width: '100%',
            height: '100vh',
            bannerViewTemplate: bannerViewTemplate,
            promptRequest: promptRequestToAI
        });
        aiAssistViewInst.appendTo('#e-pv-defaultAIAssistView');

        /*Function trigger when the prompt request is made*/
        function promptRequestToAI(args) {
            if (!initialResponse) {
                initialResponse = true;
                callAIAssist();
            }
            else {
                var post = args.prompt;
                //Replace the service url with your port number.
                let url = "http://localhost:62870/api/pdfviewer/GetAnswer";
                let xhr = new XMLHttpRequest();
                xhr.open('Post', url, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
                xhr.onload = function () {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        let response = xhr.responseText;
                        try {
                            let summarizeResponse = GetResponse(response);
                            let responseSuggestions = GetSuggestion(response);
                            const _promptSuggestions = responseSuggestions;
                            let references = extractReferences(summarizeResponse);
                            let modifiedResponse = summarizeResponse;
                            const referenceToLink = {};
                            references.forEach((ref, index) => {
                                let pageNumber = ref.replace(/[\[\]]/g, '');
                                let linkTag = `<a href='#' id="page-${pageNumber}" onclick="handlePageLinkClick(${parseInt(pageNumber, 10)})">${pageNumber}</a>`;
                                referenceToLink[ref] = linkTag;
                            });
                            Object.keys(referenceToLink).forEach(ref => {
                                let regex = new RegExp(ref, 'g');
                                modifiedResponse = modifiedResponse.replace(regex, referenceToLink[ref]);
                            });
                            aiAssistViewInst.addPromptResponse(modifiedResponse);
                            aiAssistViewInst.promptSuggestions = _promptSuggestions;
                            aiAssistViewInst.onPropertyChanged(aiAssistViewInst);
                        } catch (e) {
                            console.error('Failed to parse response as JSON:', e);
                        }
                    } else {
                        console.error('Request failed with status:', xhr.status, xhr.statusText);
                    }
                };
                xhr.onerror = function () {
                    console.error('Network error');
                };
                xhr.send(JSON.stringify({ question: post }));
            }
        }

        function GetResponse(text) {
            let jsonResponse = JSON.parse(text);
            let suggestions = jsonResponse.split('\nsuggestions');
            suggestions = suggestions.filter((suggestion) => suggestion.trim() !== '');
            let summarizeResponse = suggestions[suggestions.length - 2].trim();/*Get the response */
            return summarizeResponse;
        }

        function GetSuggestion(text) {
            let jsonResponse = JSON.parse(text);
            let suggestions = jsonResponse.split('\nsuggestions');
            suggestions = suggestions.filter((suggestion) => suggestion.trim() !== '');
            suggestions.shift();
            let responseSuggestions = suggestions[0].split('\n');/*Get the suggestions */
            responseSuggestions = responseSuggestions.filter((suggestion) => suggestion.trim() !== '');
            responseSuggestions = responseSuggestions.map((line) => line.replace(/^\d+\.\s*/, ''));
            return responseSuggestions;
        }

        /*Fucntion to separate the page number */
        function extractReferences(text) {
            const referenceRegex = /\[(.*?)\]/g;
            const matches = [];
            let match;
            while ((match = referenceRegex.exec(text)) !== null) {
                const numbers = match[1].split(',').map(num => num.trim());
                matches.push(...numbers);
            }
            return matches;
        }

        /*Function fro navigate the page of the viewer*/
        (window).handlePageLinkClick = function (pageNumber) {
            pdfviewer.navigation.goToPage(pageNumber);
        };

        /*Initial prompt request method*/
        function callAIAssist() {
            let data = pdfviewer.getRootElement();
            var hashId = data.ej2_instances[0].viewerBase.hashId;
            var dictionary = {
                "hashId": hashId,
            };
            var post = JSON.stringify(dictionary);
            //Replace the service url with your port number.
            let url = "http://localhost:62870/api/pdfviewer/SummarizePDF";
            let xhr = new XMLHttpRequest();
            xhr.open('Post', url, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let response = xhr.responseText;
                    try {
                        let summarizeResponse = GetResponse(response);
                        let responseSuggestions = GetSuggestion(response);
                        const _promptSuggestions = responseSuggestions;
                        aiAssistViewInst.promptSuggestions = _promptSuggestions;
                        aiAssistViewInst.addPromptResponse(summarizeResponse);
                        aiAssistViewInst.onPropertyChanged(aiAssistViewInst);
                    } catch (e) {
                        console.error('Failed to parse response as JSON:', e);
                    }
                } else {
                    console.error('Request failed with status:', xhr.status, xhr.statusText);
                }
            };
            xhr.onerror = function () {
                console.error('Network error');
            };
            xhr.send(post);
        }
    }
};