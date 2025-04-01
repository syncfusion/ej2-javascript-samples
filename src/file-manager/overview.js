
/**
 * File Manager overview sample
 */

this.default = function () {

    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    var favoriteFiles = {};
    var selectedItems = [];
    var isFavoriteAjax = false;
    var itemsCount = 0;
    var filemanagerAjaxSettings = {
        url: hostUrl + 'api/Overview/FileOperations',
        getImageUrl: hostUrl + 'api/Overview/GetImage',
        uploadUrl: hostUrl + 'api/Overview/Upload',
        downloadUrl: hostUrl + 'api/Overview/Download'
    };
    var treeSelectedNodes = [];
    var isFavorite = false;
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: filemanagerAjaxSettings,
        view: 'Details',
        toolbarItems: [
            { name: '', prefixIcon:'e-menu filemanagermenu', tooltipText: 'Toggele Menu'},
            { name: 'NewFolder'}, 
            { name: 'SortBy' },
            { name: 'Refresh' },
            { name: 'Cut' },
            { name: 'Copy' },
            { name: 'Paste' },
            { name: 'Selection' },
            { name: 'View' },
            { name: '', align: 'Right' , prefixIcon: 'e-show-hide-panel', tooltipText: 'Preview Pane' },
        ],
        contextMenuSettings: { 
            file: [ 'Cut', 'Copy', '|', 'Details'],
            folder: [ 'Cut', 'Copy', 'Paste', '|', 'Details'],
            layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll'],
        },
        detailsViewSettings: {
            columns: [
                {
                    field: 'name', headerText: 'Name',  width:'220px', maxWidth: '230px',
                    template: function(data) {
                        var isFavoriteItem = favoriteFiles[data.name] ? 'filled' : '';
                        var title = isFavoriteItem ? 'Unfavorite' : 'Favorite';
                        return '<div class="fmNameColumn">' + '<span>' + data.name + '</span>'  +'<div class="custom-icons">' +
                            '<span class="e-icons e-delete" data-action="delete" title="Delete"></span>' +
                            '<span class="e-icons e-download" data-action="download" title="Download"></span>' +
                            '<span class="e-icons e-star-filled favorite-icon ' + isFavoriteItem + '" data-action="favorite" title="' + title + '"></span>' +
                        '</div>'+ '</div>';}, customAttributes: { class: 'e-fe-grid-name' },                  
                },
                {
                    field: '_fm_modified', headerText: 'DateModified', format: 'MM/dd/yyyy hh:mm a'
                },
                {
                    field: 'size', headerText: 'Size', template: '<span class="e-fe-size">${size}</span>', format: 'n2'
                }
            ]
        },
        navigationPaneSettings: { visible: false },
        fileLoad: onFileLoad,
        fileSelect: onFileSelect,
        beforeSend: onBeforeSend,
        toolbarClick: onToolbarClick,
        toolbarCreate: onToolbarCreate,
        success:onSuccess,
    });
    fileObject.appendTo('#filemanager');

    var mobileTreeData = [
        { name: 'File Manager', id: 0, iconCss: 'e-icons e-menu'},
        { name: 'Drive', id: 1, iconCss: 'e-icons e-folder', },
        { name: 'Documents', id: 2, iconCss: 'e-icons e-file-document', },
        { name: 'Downloads', id: 3,  iconCss: 'e-icons e-download', },
        { name: 'Videos', id: 4, iconCss: 'e-icons e-video', },
        { name: 'Local Disk (C)', id: 5, iconCss: 'e-icons e-folder', },
        { name: 'Local Disk (D)', id: 6, iconCss: 'e-icons e-folder', },
    ];
    var treeData = [
        { id: 0, name: 'File Manager', iconCss: 'e-icons e-menu'},
        { id: 1, name: 'Drive', iconCss: 'e-icons e-folder', },
        { id: 2, name: 'Recent', iconCss: 'e-icons e-clock', },
        { id: 3, name: 'Favorite', iconCss: 'e-icons e-star-filled', },
        { id: 4, name: 'Documents', iconCss: 'e-icons e-file-document', },
        { id: 5, name: 'Downloads', iconCss: 'e-icons e-download', },
        { id: 6, name: 'Videos', iconCss: 'e-icons e-video', },
        { id: 7, name: 'Local Disk (C)', iconCss: 'e-icons e-folder', },
        { id: 8, name: 'Local Disk (D)', iconCss: 'e-icons e-folder', },
    ];
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: treeData, id: 'id', text: 'name', iconCss: "iconCss" },
        nodeSelected: onNodeSelected,
        nodeClicked: onNodeClicked,
        selectedNodes: ['1']
    });
    treeObj.appendTo('#tree');

    var leftSideObj = new ej.navigations.Sidebar({
        target: '.mainLayout-content',      
        position: 'Left',
        enableGestures: false,
        open: function(args) { 
            var ele = args.element.classList.contains('e-over'); 
            if (ele) { 
                treeObj.fields.dataSource = mobileTreeData;
            }
            treeObj.dataBind();
        },
        mediaQuery:'(min-width: 700px)'
    });
    leftSideObj.appendTo("#default_left_sidebar");

    var rightSideObj = new ej.navigations.Sidebar({
        enableGestures: false,
        target: '.mainLayout-content',       
        position: 'Right',
        mediaQuery:'(min-width: 700px)',
        open: function () {
            if (leftSideObj.isOpen) {
                var mainContent = document.querySelector('.mainLayout-content .e-content-animation');
                if (mainContent && !mainContent.style.marginLeft) {
                    mainContent.style.marginLeft = leftSideObj.element.offsetWidth + 'px';
                }
            }
        },
    });
    rightSideObj.appendTo("#default_right_sidebar");

    var dlgObj = new ej.popups.Dialog({
        header: 'Confirm delete',
        target: document.getElementById('filemanager'),
        showCloseIcon: true,
        visible: false,
        isModal: true,
        buttons: [
            {
                click: deleteConfirmationButton,
                buttonModel: { content: 'Yes', isPrimary: true }
            },
            {
                click: dialogCloseButton,
                buttonModel: { content: 'No' }
            }],
    });
    dlgObj.appendTo('#deleteDialog');

    function dialogCloseButton() {
        dlgObj.hide();
    }
    function deleteConfirmationButton() {
        fileObject.deleteFiles(selectedItems);
        dlgObj.hide();
    }

    function onBeforeSend(args) {
        if (args.action == "read" && isFavorite && treeObj.selectedNodes[0] == '3') {
            treeObj.selectedNodes = ['1'];
            isFavoriteAjax = true;
        }
    }

    function onSuccess(args) {
        if (args.action == "read" || isFavorite) {
            itemsCount = args.result.files.length;
            viewPanedetails(fileObject.selectedItems);
        }
        
    }

    function displayBreadcrumb(value) {
        var breadcrumb = document.getElementById('filemanager_breadcrumbbar').ej2_instances[0].element;
        if (value === 'Favorite') {
            breadcrumb.classList.add('fmFavoriteBreadcrumb');
        }
        else {
            breadcrumb.classList.remove('fmFavoriteBreadcrumb');
        }
        fileObject.refreshLayout();
    }
    
    function filemanagerFilterFiles(favoritesString) {
        fileObject.path = '/';
        // Create the object with the search string
        var objectValue = { searchString: '*' + favoritesString + '*' };
        // Call the filterFiles method with the object
        fileObject.filterFiles(objectValue);
    }

    function onNodeSelected(args) {
        isFavorite = false;
        if (args.nodeData.id !== "0") {
            treeSelectedNodes = treeObj.selectedNodes;
        }
        switch (args.nodeData.text) {
            case 'Drive':
                fileObject.sortBy = 'name';
                fileObject.sortOrder = 'Ascending';
                if (isFavoriteAjax) {
                    fileObject.openFile(selectedItems);
                    isFavoriteAjax = false;
                }
                else {
                    fileObject.path = '/';
                }
                fileObject.refreshFiles();
                break;
                
            case 'Recent':
                fileObject.path = '/Videos/';
                fileObject.path = '/';
                fileObject.sortBy = '_fm_modified';
                fileObject.sortOrder = 'Descending';
                break;
                
            case 'Favorite':
                isFavorite = true;
                var favoritesString = Object.keys(favoriteFiles).length > 0? Object.keys(favoriteFiles).join(',') : '';
                if (favoritesString) { 
                    filemanagerFilterFiles(favoritesString);
                }
                if (favoritesString === "" && isFavorite) {
                    filemanagerFilterFiles(" ");
                    setTimeout(function() {        
                        // Remove existing elements under the e-empty class
                        var emptyElement = document.getElementById('filemanager_grid').ej2_instances[0].element.querySelector('.e-empty');
                        if (emptyElement) {
                            emptyElement.querySelector('.e-empty-inner-content').innerHTML = 'Items you favorite will show up here';
                        }
                    }, 750);
                }
                break;
                
            case 'Documents':
            case 'Downloads':
            case 'Videos':
            case 'Local Disk (C)':
            case 'Local Disk (D)':
                fileObject.path = '/' + args.nodeData.text + '/';
                fileObject.sortBy = 'name';
                fileObject.sortOrder = 'Ascending';
                break;
        }
        displayBreadcrumb(args.nodeData.text);
    }

    function onNodeClicked(args) {
        var node = treeObj.getNode(args.node);
        if (node.text === 'File Manager') {
            leftSideObj.toggle();
            var toolbarObj = document.getElementById('filemanager_toolbar').ej2_instances[0];
            toolbarObj.hideItem(0, false);
            treeObj.selectedNodes = treeSelectedNodes;
        }            
    }

    function removeFileExtension(filename) {
        if (filename && filename.includes('.')) {
            return filename.replace(/\.[^/.]+$/, ""); // Remove the extension if present
        }
        return filename; // Return the filename as is if there's no extension
    }

    function formatFileType(fileType) {
        if (fileType.startsWith('.')) {
            fileType = fileType.substring(1); // Remove the leading dot
        }
        return fileType;
    }

    function formatDate(dateString) {
        if (dateString) {
            var date = new Date(dateString);
            // Use Intl.DateTimeFormat for formatting
            var formattedDate = new Intl.DateTimeFormat(fileObject.locale, {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
            }).format(date);
            return formattedDate;
        }
        return null;
    }

    document.getElementById('close-btn').onclick = function() {
        rightSideObj.toggle();
    };

    function getLastFolderName(path) {
        if (path) {
            path = path.replace(/\/$/, "");
            var parts = path.split('/');
            return parts[parts.length - 1];
        }
        return null;
    }

    function viewPanedetails(selectedItems) {
        var fileManagerContainer = document.querySelector('.filemanager-container');
        var sizeElement = document.getElementById('fmSize').parentElement;
        var locationElement = document.getElementById('fmLocation').parentElement;
        var singleSelectionPane = document.getElementById('single-selection-pane');
        var multipleSelectionPane = document.getElementById('multiple-selection-pane');
        var noSelectionPane = document.getElementById('no-selection-pane');

        // Reset panes display
        singleSelectionPane.style.display = 'none';
        multipleSelectionPane.style.display = 'none';
        noSelectionPane.style.display = 'none';

        if (selectedItems && fileObject.selectedItems.length > 1) {
            fileManagerContainer.style.margin = '0px 10px 0px 5px';
            multipleSelectionPane.style.display = 'block';
            document.getElementById('fileType').innerHTML = "Details Pane";
            document.getElementById('selected-count').innerHTML = fileObject.selectedItems.length + ' items selected';
        } 
        else if (selectedItems && fileObject.selectedItems.length === 1) {
            fileManagerContainer.style.margin = '0px 5px';
            singleSelectionPane.style.display = 'block';
            
            var isFile = selectedItems.isFile;
            document.getElementById('fileType').innerHTML = isFile ? 'File' : 'Folder';
            document.getElementById('fm-file-name').value = selectedItems.name || selectedItems;
            document.getElementById('tag-name1').innerHTML = removeFileExtension(selectedItems.name || selectedItems);
            document.getElementById('tag-name2').innerHTML = isFile ? formatFileType(selectedItems.type) : 'Folder';
            document.getElementById('fmType').innerHTML = isFile ? 'File' : 'Folder';
            document.getElementById('fmSize').innerHTML = (selectedItems.size / 1024).toFixed(2) + ' KB';
            document.getElementById('fmLocation').innerHTML = fileObject.path;
            document.getElementById('fmModified').innerHTML = formatDate(selectedItems.dateModified);
            
            var imageTypeEle = document.getElementById('imageType');
            var currentClasses = Array.from(imageTypeEle.classList);
            currentClasses.forEach(function(className) {
                if (className !== 'e-filemanager-image') { 
                    imageTypeEle.classList.remove(className);
                }
            });
            var imageTypeValue = selectedItems.isFile ? formatFileType(selectedItems.type) : 'Folder';
            imageTypeEle.classList.add(imageTypeValue.toLowerCase());
            
            locationElement.style.display = (fileObject.path === '/') ? 'none' : '';
            sizeElement.style.display = !selectedItems.size ? 'none' : '';
        } 
        else {
            fileManagerContainer.style.margin = '0px 10px 0px 5px';
            noSelectionPane.style.display = 'block';
            
            var lastFolderName = fileObject.path === '/' ? 'Drive' : getLastFolderName(fileObject.path);
            var currentFolderText = isFavorite ? 'Favorite' + ' ( ' + itemsCount + ' items' + ' )' : lastFolderName + ' ( ' + itemsCount + ' items' + ' )';
            document.getElementById('fileType').innerHTML = "Details Pane";
            document.getElementById('current-folder').innerHTML = currentFolderText;
        }
    }

    function onFileLoad() {
        setTimeout(function() {
            var iconElements = fileObject.element.querySelectorAll(".custom-icons");
            for (var i = 0; i < iconElements.length; i++) {
                iconElements[i].addEventListener('click', handleIconClick);
            }
        }, 0);
    }

    function onFileSelect() {
        var selectedItem = fileObject.getSelectedFiles();
        if (selectedItem.length > 0) {
            var type = selectedItem[0].isFile ? 'file' : 'folder';
            dlgObj.content = "Are you sure you want to delete this " + type + " ?";
        }
        viewPanedetails(selectedItem[0]);
    }

    function onToolbarClick(args) {
        var selectedItem = fileObject.getSelectedFiles()[0];
        if (args.item.tooltipText === "Preview Pane") {
            rightSideObj.toggle();
            viewPanedetails(selectedItem);
        }
        else if (args.item.tooltipText === "Toggele Menu") {
            leftSideObj.toggle();
            var toolbarObj = document.getElementById('filemanager_toolbar').ej2_instances[0];
            toolbarObj.hideItem(0, true);
        }
    }

    function onToolbarCreate(args) {
        setTimeout(function() {
            if(!fileObject.isMobile) {
                var toolbarObj = document.getElementById('filemanager_toolbar').ej2_instances[0];
                toolbarObj.hideItem(0, true);
            }
        },50);
    }
    
    function handleIconClick(event) {
        var target = event.target;
        var action = target.getAttribute('data-action');
        var fileName = getFileNameFromElement(target);
        selectedItems = [fileName];
        if (event.target.parentElement.classList.contains('custom-icons') && target.closest("tr").getAttribute("aria-selected")){
            event.preventDefault();
            event.stopPropagation();
        }
        switch (action) {
            case 'delete':
                dlgObj.visible = true;
                break;
            case 'download':
                fileObject.downloadFiles(selectedItems);
                break;
            case 'favorite':
                toggleFavorite(target, fileName);
                break;
        }
    }
    
    function getFileNameFromElement(element) {
        var trElement = element.closest('tr');
        if (trElement) {
            var gridNameElement = trElement.querySelector('.e-fe-grid-name');
            if (gridNameElement) {
                var textContent = gridNameElement.textContent;
                if (textContent) {
                    return textContent.trim();
                }
            }
        }
        return null;
    }
    
    function toggleFavorite(iconElement, fileName) {
        iconElement.classList.toggle('filled');

        if (iconElement.classList.contains('filled')) {
            favoriteFiles[fileName] = true;
        } 
        else {
            delete favoriteFiles[fileName];
        }
        var favoriteString = Object.keys(favoriteFiles).length > 0? Object.keys(favoriteFiles).join(',') : '';
        if (favoriteString && isFavorite) { 
            filemanagerFilterFiles(favoriteString);
        }
        if (favoriteString === "" && isFavorite) {
            filemanagerFilterFiles("  ");
            setTimeout(function() {
                var emptyElements = document.getElementById('filemanager_grid').ej2_instances[0].element.querySelector('.e-empty');
                if (emptyElements) {
                    emptyElements.querySelector('.e-empty-inner-content').innerHTML = 'Items you favorite will show up here';
                }
            }, 750);
        }
    }

    var renameIcon = document.getElementById('rename-icon');
    var tickIcon = document.getElementById('tick-icon');
    var closeIcon = document.getElementById('close-icon');
    var fileNameInput = document.getElementById('fm-file-name');

    renameIcon.addEventListener('click', function() {
        fileNameInput.removeAttribute('readonly');
        fileNameInput.focus();
        tickIcon.style.opacity = '1';
        closeIcon.style.opacity = '1';
    });

    tickIcon.addEventListener('click', function() {
        var selectedItem = fileObject.getSelectedFiles()[0];
        if (selectedItem) {
            fileObject.renameFile(selectedItem.name, fileNameInput.value);
        }
        tickIcon.style.opacity = '0';
        closeIcon.style.opacity = '0';
        fileNameInput.setAttribute('readonly', true);
    });

    closeIcon.addEventListener('click', function() {
        fileNameInput.value = '';
        fileNameInput.focus();
    });

};
