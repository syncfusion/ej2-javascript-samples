this.default = function () {

    var AIAssistView = ej.interactivechat.AIAssistView;
    var Sidebar = ej.navigations.Sidebar;
    var DropDownList = ej.dropdowns.DropDownList;
    var Button = ej.buttons.Button;
    var ListView = ej.lists.ListView;
    var Toast = ej.notifications.Toast;

    var suggestions = [
        'What are the best tools for organizing tasks?',
        'How can I maintain work-life balance?',
    ];

    var selectedConvId = '';
    var listData = [];
    var isMobile = false;
    var aiAssistViewInst;
    var sideObj;
    var toastObj;
    var models = [
        { id: 'openai', name: 'GPT-4o-mini(Azure)' },
        { id: 'gemini', name: 'Gemini 2.5 Flash' },
        { id: 'deepseek', name: 'DeepSeek-R1' }

    ];
    var selectedModel = 'openai';
    var abortController;

    // Initializes the app state, loads conversations, sets up layout, and shows initial toast
    function InitializingApp() {
        checkInitialLocalStorage();
        listData = getLeftPaneData();
        conversationList.dataSource = listData;
        conversationList.refresh();
        setSidebarConfig();
        if (listData.length === 0) {
            loadNewAIAssist();
        } else {
            onItemSelect(listData[0]);
        }
    }

    // Make sure localStorage root object exists (optionally clear)
    function checkInitialLocalStorage(isClear) {
        if (isClear === undefined) { isClear = false; }
        if (!localStorage.getItem('aiassist-model') || isClear) {
            localStorage.setItem('aiassist-model', JSON.stringify({}));
        }
    }

    async function promptRequest(args) {
        if (!args.prompt || !args.prompt.trim()) {
            return;
        }
        if (!selectedConvId) {
            selectedConvId = createNewConversation();
        }
        updateBannerStyle();
        updateConversationName(args.prompt);
        abortController = new AbortController();
        var response = selectedModel === 'openai' ? await window.getAIResponse(args, abortController) : '⚠️ Something went wrong while connecting to the AI service. Please check your API key.';
        aiAssistViewInst.addPromptResponse(response);
        checkAndUpdateLocalStorage();
    }

    // Toggles the sidebar on mobile when the close button is pressed
    function btnClick() {
        if (isMobile) {
            sideObj.toggle();
        }
    }

    // Toggles the sidebar from the button
    function toggleSidebar() {
        sideObj.toggle();
    }

    // Applies responsive configuration to the sidebar depending on viewport width
    function setSidebarConfig() {
        isMobile = window.innerWidth <= 680;
        var ele = document.querySelector('.e-sidebar-overlay');
        var toggleButtonElement = document.getElementById('togglebtn');
        var closeButtonElement = document.getElementById('closebtn');

        if (isMobile) {
            sideObj.enableDock = false;
            sideObj.type = 'Over';
            sideObj.showBackdrop = true;
            sideObj.hide();
            if (toggleButtonElement) toggleButtonElement.style.display = 'block';
            if (closeButtonElement) closeButtonElement.style.display = 'block';
        } else {
            sideObj.enableDock = false;
            sideObj.type = 'Auto';
            sideObj.showBackdrop = false;
            sideObj.closeOnDocumentClick = false;
            sideObj.show();
            if (toggleButtonElement) toggleButtonElement.style.display = 'none';
            if (closeButtonElement) closeButtonElement.style.display = 'none';
        }
        sideObj.dataBind();
    }

    // Re-compute layout only when the mobile breakpoint boundary is crossed
    function onResize() {
        var newIsMobile = window.innerWidth <= 680;
        if (newIsMobile !== isMobile) {
            setSidebarConfig();
        }
    }

    // Loads a conversation by id into the AIAssistView and adjusts the layout
    function onItemSelect(item) {
        selectedConvId = item.id;
        updateAIAssistViewData(item.id);
        updateBannerStyle();
        if (isMobile && sideObj.isOpen) {
            sideObj.toggle();
        }
    }

    // Removes a conversation from localStorage and updates the UI
    function deleteConversation(convId) {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        delete appData[convId];
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        refreshConversationList();
        if (selectedConvId === convId) {
            if (listData.length > 0) {
                onItemSelect(listData[0]);
            } else {
                loadNewAIAssist();
            }
        }
    }

    // Determines the next conversation id by incrementing the max numeric id
    function getNextConvId() {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var ids = Object.keys(appData).map(function(k) { return parseInt(k); }).filter(function(id) { return !isNaN(id); });
        var maxId = ids.length > 0 ? Math.max.apply(null, ids) : 0;
        return (maxId + 1).toString();
    }
    
    // Persists the current conversation prompts from the AIAssistView back to localStorage
    function checkAndUpdateLocalStorage() {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        if (selectedConvId && appData[selectedConvId]) {
            appData[selectedConvId].prompts = aiAssistViewInst.prompts.map(function(p) {
                return {
                    prompt: p.prompt || '',
                    response: p.response || '',
                };
            });
            localStorage.setItem('aiassist-model', JSON.stringify(appData));
        }
    }

    // Builds the left pane list from localStorage, sorted by id descending
    function getLeftPaneData() {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        return Object.keys(appData)
            .map(function(k) { return { id: k, num: parseInt(k) }; })
            .filter(function(item) { return !isNaN(item.num); })
            .sort(function(a, b) { return b.num - a.num; })
            .map(function(item) {
                var convData = appData[item.id];
                var name = (convData && convData.name) ? convData.name.split('\n')[0] : 'Untitled Conversation';
                return { text: name, id: item.id };
            });
    }

    function updateBannerStyle() {
        var bannerElem = document.querySelector('.banner-content');
        if (bannerElem) {
            bannerElem.style.display = (aiAssistViewInst.prompts || []).length > 0 ? 'none' : 'block';
        }
    }

    // If the current conversation is "New Conversation", set its name from the first prompt
    function updateConversationName(prompt) {
        if (selectedConvId) {
            var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
            var convData = appData[selectedConvId];
            if (convData && convData.name === 'New Conversation') {
                convData.name = prompt.slice(0, 40).trim() || 'Untitled Conversation';
                localStorage.setItem('aiassist-model', JSON.stringify(appData));
                refreshConversationList();
            }
        }
    }

    // Refreshes the left pane list and re-binds delete handlers
    function refreshConversationList() {
        listData = getLeftPaneData();
        conversationList.dataSource = listData;
        conversationList.refresh();
        refreshDeleteListeners();
    }

    // Loads prompts and suggestion data for a conversation into AIAssistView
    function updateAIAssistViewData(id) {
        if (!aiAssistViewInst) return;
        aiAssistViewInst.prompts = [];
        aiAssistViewInst.promptSuggestions = suggestions;
        if (id) {
            var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
            var convData = appData[id.toString()];
            if (convData) {
                aiAssistViewInst.prompts = convData.prompts || [];
                aiAssistViewInst.promptSuggestions = convData.promptSuggestions || suggestions;
            }
        }
    }

    // Clears the current AIAssistView to start a brand-new conversation
    function loadNewAIAssist() {
        selectedConvId = '';
        if (aiAssistViewInst) {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = suggestions;
        }
        updateBannerStyle();
        if (isMobile && sideObj.isOpen) {
            sideObj.toggle();
        }
    }

    // Creates a new conversation entry in localStorage and returns its id
    function createNewConversation() {
        var newId = getNextConvId();
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        appData[newId] = {
            name: 'New Conversation',
            prompts: [],
            promptSuggestions: suggestions.slice(), // Create a copy
        };
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        refreshConversationList();
        return newId;
    }

    // Binds click handlers to per-item delete icons in the conversation list
    function refreshDeleteListeners() {
        var deletes = document.querySelectorAll('.delete-icon');
        deletes.forEach(function(del) {
            del.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                var convId = del.dataset.id;
                deleteConversation(convId);
            };
        });
    }

    // Instantiate the AIAssistView component and attach to DOM
    aiAssistViewInst = new AIAssistView({
        bannerTemplate: "#bannerTemplate",
        enableStreaming: true,
        promptSuggestions: suggestions,
        promptRequest: promptRequest,
        showHeader: false,
        width: 'auto',
        enableAttachments: true,
        attachmentSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        footerToolbarSettings: {
            toolbarPosition: 'Bottom'
        }
    });
    aiAssistViewInst.appendTo('#aiAssistView');

    var toggleButtonElement = document.getElementById('togglebtn');
    var togglebtn = new Button({ iconCss: "e-icons e-menu" });
    togglebtn.appendTo(toggleButtonElement);
    toggleButtonElement.addEventListener('click', toggleSidebar);

    // Model selector dropdown: switches which backend is used for prompts
    var modelDropdown = new DropDownList({
        dataSource: models,
        popupHeight: "200px",
        width:"200px",
        fields: { text: 'name', value: 'id' },
        value: selectedModel,
        change: function(args) {
            selectedModel = args.value;
            var modelName = (models.find(function(m) { return m.id === selectedModel; }) || {}).name || 'the selected model';
            toastObj.show({
                content: '<div class="toast-content"><span class="e-icons e-magic-wand"> </span> <span>You are using <b>' + modelName + '</b> with standard access</span></div>'
            });
        }
    });
    modelDropdown.appendTo('#ai-model-dropdown');
    
    // Sidebar component setup
    sideObj = new Sidebar({
        width: "250px",
        target: ".ai-model",
        position: "Left",
        enableDock: false,
        dockSize: "50px",
        enableGestures: false,
        type: 'Auto',
        closeOnDocumentClick: false,
        showBackdrop: false
    });
    sideObj.appendTo('#assistantSidebar');

    var closeButtonElement = document.getElementById('closebtn');
    var closebtn = new Button({ iconCss: "e-icons e-close", cssClass: "e-flat" });
    closebtn.appendTo(closeButtonElement);
    closeButtonElement.addEventListener('click', btnClick);

    var newThreadButtonElement = document.getElementById('newthreadbtn');
    var newthreadbtn = new Button({
        iconCss: "e-icons e-plus",
        cssClass: "new-thread-btn",
        content: "New Thread"
    });
    newthreadbtn.appendTo(newThreadButtonElement);
    newThreadButtonElement.addEventListener('click', loadNewAIAssist);

    // Left pane conversation list: item template includes a delete icon
    var conversationList = new ListView({
        dataSource: listData,
        fields: { text: 'text', id: 'id' },
        template: '<div class="e-text-content"><span class="e-list-text">${text}</span><span data-id=${id} class="e-icons e-trash delete-icon" title="Delete Conversation"></span></div>',
        select: function(args) { onItemSelect(args.data); }
    });
    conversationList.appendTo('#conversation-list');

    // Delegated delete handler to support both current and future list items
    var convContainer = document.getElementById('conversation-list');
    convContainer.addEventListener('click', function(ev) {
        var target = ev.target;
        var icon = target.closest('.delete-icon');
        if (!icon) return;

        ev.preventDefault();
        ev.stopPropagation();

        var convId = icon.dataset.id;
        deleteConversation(convId);
    });

    // General-purpose toast instance
    toastObj = new Toast({
        position: { X: 'right', Y: 'Top' },
        target: ".e-view-content",
        timeOut: 1500,
        showCloseButton: true
    });
    toastObj.appendTo('#toast');

    // Initial page setup: load conversations, set layout, and wire up resize handling
    InitializingApp();
    listData = getLeftPaneData();
    if (listData.length === 0) {
        loadNewAIAssist();
    } else {
        onItemSelect(listData[0]);
    }
    setSidebarConfig();
    window.addEventListener('resize', onResize);
};