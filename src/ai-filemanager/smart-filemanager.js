this.default = function () {
    /**
     * Smart FileManager Sample
     */
    ej.filemanager.FileManager.Inject(ej.filemanager.Toolbar, ej.filemanager.NavigationPane, ej.filemanager.DetailsView, ej.filemanager.ContextMenu);
    let dialog;
    let isVisible = false;
    let hostUrl = 'https://filemanageraiservice.azurewebsites.net/';
    let toolbarItems = [
        { name: 'NewFolder' },
        { name: 'Cut' },
        { name: 'Copy' },
        { name: 'Paste' },
        { name: 'Delete' },
        { name: 'Rename' },
        { name: 'SortBy' },
        { name: 'Refresh' },
        { name: 'Selection' },
        { name: 'View' },
        { name: 'Details' },
        { text: 'Quick Summary', name: 'Quick Summary', prefixIcon: 'e-icons e-print-layout', tooltipText: 'Get a quick summary of the selected file using AI', visible: false },
    ];

    dialog = new ej.popups.Dialog({
        header: "File Summary",
        content: "<span>Loading...</span>",
        target: document.getElementById('filemanager'),
        showCloseIcon: true,
        visible: isVisible,
        isModal: true,
        height: '70%',
        width: '600px',
        overlayClick: dialogOverlay,
        close: dialogOverlay,
    });

    function dialogOverlay() {
        dialog.hide();
        dialog.visible = false;
        dialog.content = "<span>Loading...</span>";
    }
    dialog.appendTo('#customTbarDialog');

    let fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        },
        height: '520px',
        toolbarItems: toolbarItems,
        contextMenuSettings: { file: ["Manage Tags", "|", "Cut", "Copy", "|", "Delete", "Rename", "|", "Details"], folder: ["Open", "|", "Cut", "Copy", "Paste", "|", "Delete", "Rename", "|", "Details"], layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"], visible: true },
        searchSettings: { allowSearchOnTyping: false },
        fileOpen: onFileOpen,
        fileSelect: fileSelected,
        menuOpen: menuOpen,
        menuClick: menuClick,
        fileSelection: fileSelection,
        beforeSend: onSend,
        toolbarClick: toolbarClick,
    });
    fileObject.appendTo('#smartfilemanager');

    if (fileObject.element) {
        function toolbarClick(args) {
            if (args.item.text == 'Quick Summary') {
                if (args.fileDetails[0].permission == null) {
                    Summarize(args.fileDetails[0]);
                }
                else if (args.fileDetails[0].permission != null && !args.fileDetails[0].permission.read) {
                    dialog.visible = true;
                    dialog.content = "<span>" + args.fileDetails[0].name + " is not accessible. You do not have permission to read this file." + "</span>";
                }
            }
        }

        function onFileOpen(args) {
            var file = args.fileDetails;
            if (file != null && file.isFile && ['.txt', '.docx', '.pdf'].includes(file.type)) {
                if (file.permission == null) {
                    Summarize(file);
                }
                else {
                    dialog.visible = true;
                    dialog.content = "<span>" + args.fileDetails.name + " is not accessible. You do not have permission to read this file." + "</span>";
                }
            }
            else {
                dialog.visible = false;
                fileObject.toolbarItems.filter((items) => items.name == 'Quick Summary')[0].visible = false;
            }
        }

        function fileSelected(args) {
            var file = args.fileDetails;
            if (['.txt', '.docx', '.pdf'].includes(file.type) && fileObject.selectedItems.length == 1) {
                fileObject.toolbarItems.filter((items) => items.name == 'Quick Summary')[0].visible = true;
            }
            else {
                fileObject.toolbarItems.filter((items) => items.name == 'Quick Summary')[0].visible = false;
            }
        }

        function menuOpen(args) {
            if (args.items) {
                const manageTagsItem = 'Manage Tags';
                if (args.menuType === 'file' && fileObject.selectedItems.length > 1) {
                    if (!fileObject.contextmenuModule.disabledItems.includes(manageTagsItem)) {
                        fileObject.contextmenuModule.disabledItems.push(manageTagsItem);
                    }
                } else {
                    const index = fileObject.contextmenuModule.disabledItems.indexOf(manageTagsItem);
                    if (index !== -1) {
                        fileObject.contextmenuModule.disabledItems.splice(index, 1);
                    }
                }
                for (let i = 0; i < args.items.length; i++) {
                    if (args.items[i].id === fileObject.element.id + '_cm_managetags') {
                        args.items[i].iconCss = 'e-icons e-bookmark';
                    }
                }
            }
        }

        function menuClick(args) {
            if (args.item && args.item.text === 'Manage Tags') {
                manageTags(args);
            }
        }

        function manageTags(args) {
            (document).querySelector('.filemanager_container #tags').style.display = '';
            (document).querySelector('.filemanager_container #emptyAiTag').style.display = '';
            const ajax = new ej.base.Ajax({
                url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/GetTagsFromFile',
                type: 'POST',
                data: JSON.stringify(args.fileDetails[0]),
                contentType: 'application/json',
                onSuccess: (response) => {
                    fileChips.chips = JSON.parse(response);
                    if (fileChips.chips.length == 0) {
                        (document).querySelector('.filemanager_container #emptyTag').style.display = '';
                    }
                    else {
                        (document).querySelector('.filemanager_container #emptyTag').style.display = 'none';
                    }
                },
                onFailure: (error) => {
                    console.log(error);
                }
            });
            ajax.send();
        }

        function closeTagContainer() {
            (document).querySelector('.filemanager_container #tags').style.display = 'none';
            fileChips.chips = [];
            aiChips.chips = [];
            savebtn.disabled = true;
        }
        function fileSelection() {
            closeTagContainer();
        }

        function onSend(args) {
            if (args.action == 'search') {
                const customData = JSON.parse(args.ajaxSettings.data);
                customData.isTagSearch = true;
                args.ajaxSettings.data = JSON.stringify(customData);
            }
        }

        let closebtn = new ej.buttons.Button({ iconCss: 'e-icons e-close', cssClass: 'e-small' });
        closebtn.appendTo('#closebtn');

        if (closebtn.element) {
            closebtn.element.onclick = () => {
                closeTagContainer();
            };
        }

        let savebtn = new ej.buttons.Button({ cssClass: 'e-btn e-outline e-primary', disabled: true });
        savebtn.appendTo('#savebtn');

        if (savebtn.element) {
            savebtn.element.onclick = () => {
                let fileObj = (document.getElementById('smartfilemanager')).ej2_instances[0];
                const data = fileObj.getSelectedFiles();
                data[0].tags = aiChips.chips;
                const tags = aiChips.chips;
                const ajax = new ej.base.Ajax({
                    url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/SaveTagsToFile',
                    type: 'POST',
                    data: JSON.stringify(data[0]),
                    contentType: 'application/json',
                    onSuccess: (response) => {
                        fileChips.chips = JSON.parse(response);
                        (document).querySelector('.filemanager_container #emptyTag').style.display = 'none';
                        (document).querySelector('.filemanager_container #emptyAiTag').style.display = '';
                        savebtn.disabled = true;
                        aiChips.chips = [];
                    },
                    onFailure: (error) => {
                        console.log(error);
                    }
                });
                ajax.send();
            }
        }


        let generatebtn = new ej.buttons.Button({ cssClass: 'e-btn e-outline e-primary' });
        generatebtn.appendTo('#generatebtn');

        generatebtn.element.onclick = () => {
            let fileObj = (document.getElementById('smartfilemanager')).ej2_instances[0];
            const data = fileObj.getSelectedFiles();
            const prompt = "Generate tags for the following content.Provide the tags in ordered list format without any undefined or irrelevant values:\n\n";
            const fileContent = "File Named as " + data[0].name;
            let inputData = prompt + fileContent;
            let aiOutput = getAzureChatAIRequest({ messages: [{ role: 'user', content: inputData }] });
            aiOutput.then((result) => {
                savebtn.disabled = false;
                const tagsArray = result
                    .split(/\r\n|\n\n|\n/)
                    .filter((tag) => tag.trim() !== '')
                    .map((tag) => tag.substring(tag.indexOf(' ') + 1).trim());
                aiChips.chips = tagsArray;
                (document).querySelector('.filemanager_container #emptyAiTag').style.display = 'none';
            });
        };

        let fileChips = new ej.buttons.ChipList({ chips: [], enableDelete: true, deleted: chipDeleted });
        fileChips.appendTo('#fileChips');

        function chipDeleted(args) {
            if (fileChips.chips.length == 0) {
                savebtn.disabled = true;
                (document).querySelector('.filemanager_container #emptyTag').style.display = '';
            }
            const fileObj = (document.getElementById('smartfilemanager')).ej2_instances[0];
            const data = fileObj.getSelectedFiles();
            data[0].tags = [args.text];
            const ajax = new ej.base.Ajax({
                url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/RemoveTagsFromFile',
                type: 'POST',
                data: JSON.stringify(data[0]),
                contentType: 'application/json',
                onSuccess: (response) => {
                    fileChips.chips = JSON.parse(response);
                },
                onFailure: (error) => {
                    console.log(error);
                }
            });
            ajax.send();
        }

        let aiChips = new ej.buttons.ChipList({ chips: [], enableDelete: true, deleted: aiChipDeleted });
        aiChips.appendTo('#aiChips');

        function aiChipDeleted(args) {
            if (aiChips.chips.length == 0) {
                savebtn.disabled = true;
                (document).querySelector('.filemanager_container #emptyAiTag').style.display = '';
            }
        }

        function Summarize(file) {
            dialog.visible = true;
            const ajax = new ej.base.Ajax({
                url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/ExtractTextFromFile',
                type: 'POST',
                data: JSON.stringify(file),
                contentType: 'application/json',
                onSuccess: (response) => {
                    let fileContent = response;
                    const prompt = "You are a helpful assistant. Your task is to analyze the provided text and generate short summary. Provide the summary with highlighted topic in ordered list html format without additional contents:\n\n";
                    let inputData = prompt + fileContent;
                    let aiOutput = getAzureChatAIRequest({ messages: [{ role: 'user', content: inputData }] });
                    aiOutput.then((result) => {
                        dialog.content = "<span>" + result + "</span>";
                    });
                },
                onFailure: (error) => {
                    dialog.content = "<span>Something went wrong, Please try again!</span>";
                    console.error('Error:', error);
                }
            });
            ajax.send();
        }
    }
};