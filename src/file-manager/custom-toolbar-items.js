this.default = function () {
    var hostUrl = 'https://physical-service.syncfusion.com/';
    var filemanagerAjaxSettings = {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download',
    };
    var filemanagerObject = new ej.filemanager.FileManager({
        ajaxSettings: filemanagerAjaxSettings,
        view: 'Details',
        toolbarItems: [
            { name: 'NewFolder' },
            { name: 'SortBy' },
            { name: 'Refresh' },
            { name: 'Cut' },
            { name: 'Copy' },
            { name: 'Paste' },
            { name: 'Selection' },
            {
                name: '',
                align: 'Right',
                tooltipText: 'Search Files',
                template: '<input id="searchBox"/>',
            },
            {
                name: '',
                align: 'Right',
                prefixIcon: 'e-fe-large e-menu-icon',
                tooltipText: 'Large Icons View',
            },
            {
                name: '',
                align: 'Right',
                prefixIcon: 'e-fe-grid e-menu-icon',
                tooltipText: 'Details View',
            },
            {
                name: '',
                align: 'Right',
                prefixIcon: 'e-show-hide-panel',
                tooltipText: 'Preview Pane',
            },
            { name: 'Details' },
        ],
        fileSelect: onFileSelect,
        toolbarClick: onToolbarClick,
        success: onSuccess,
    });
    filemanagerObject.appendTo('#filemanager');

    var rightSideObj = new ej.navigations.Sidebar({
        enableGestures: false,
        target: '.mainLayout-content',
        position: 'Right',
        mediaQuery: '(min-width: 700px)',
    });
    rightSideObj.appendTo('#default_sidebar');
    rightSideObj.hide();

    function onSuccess(args) {
        if (args.action == 'read') {
            itemsCount = args.result.files.length;
            updateDetailsPane(filemanagerObject.selectedItems);
        }
    }
    function getFileNameWithoutExtension(name) {
        if (name && name.includes('.')) {
            return name.replace(/\.[^/.]+$/, ''); // Remove the extension if present
        }
        return name; // Return the filename as is if there's no extension
    }

    function normalizeExtension(extension) {
        if (extension.startsWith('.')) {
            extension = extension.substring(1); // Remove the leading dot
        }
        return extension;
    }

    function getFormattedDate(dateValue) {
        if (dateValue) {
            var convertedDate = new Date(dateValue);
            var displayDate = new Intl.DateTimeFormat(filemanagerObject.locale, {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }).format(convertedDate);
            return displayDate;
        }
        return null;
    }

    document.getElementById('close-btn').onclick = function () {
        rightSideObj.toggle();
    };

    function updateDetailsPane(selectedItems) {
        var fileManagerWrapper = document.querySelector('.filemanager-container');
        var sizeField = document.getElementById('fmSize').parentElement;
        var locationField = document.getElementById('fmLocation').parentElement;
        var singleItemSelectionPane = document.getElementById('single-selection-pane');
        var multipleItemSelectionPane = document.getElementById('multiple-selection-pane');
        var noItemSelectionPane = document.getElementById('no-selection-pane');

        singleItemSelectionPane.style.display = 'none';
        multipleItemSelectionPane.style.display = 'none';
        noItemSelectionPane.style.display = 'none';

        if (selectedItems && filemanagerObject.selectedItems.length > 1) {
            fileManagerWrapper.style.margin = '0px 10px 0px 5px';
            multipleItemSelectionPane.style.display = 'block';
            document.getElementById('fileType').innerHTML = 'Details Pane';
            document.getElementById('selected-count').innerHTML = filemanagerObject.selectedItems.length + ' items selected';
        } else if (selectedItems && filemanagerObject.selectedItems.length === 1) {
            fileManagerWrapper.style.margin = '0px 5px';
            singleItemSelectionPane.style.display = 'block';

            var isFile = selectedItems.isFile;
            document.getElementById('fileType').innerHTML = isFile ? 'File' : 'Folder';
            document.getElementById('fm-file-name').value = selectedItems.name || selectedItems;
            document.getElementById('tag-name1').innerHTML = getFileNameWithoutExtension( selectedItems.name || selectedItems );
            document.getElementById('tag-name2').innerHTML = isFile ? normalizeExtension(selectedItems.type): 'Folder';
            document.getElementById('fmType').innerHTML = isFile ? 'File' : 'Folder';
            document.getElementById('fmSize').innerHTML = (selectedItems.size / 1024).toFixed(2) + ' KB';
            document.getElementById('fmLocation').innerHTML = filemanagerObject.path;
            document.getElementById('fmModified').innerHTML = getFormattedDate( selectedItems.dateModified );

            var imageTypeElement = document.getElementById('imageType');
            var currentClasses = Array.from(imageTypeElement.classList);
            currentClasses.forEach(function (className) {
                if (className !== 'e-filemanager-image') {
                    imageTypeElement.classList.remove(className);
                }
            });
            var imageTypeValue = selectedItems.isFile ? normalizeExtension(selectedItems.type) : 'Folder';
            imageTypeElement.classList.add(imageTypeValue.toLowerCase());
            locationField.style.display = filemanagerObject.path === '/' ? 'none' : '';
            sizeField.style.display = !selectedItems.size ? 'none' : '';
        } else {
            fileManagerWrapper.style.margin = '0px 10px 0px 5px';
            noItemSelectionPane.style.display = 'block';
        }
    }

    var renameButton = document.getElementById('rename-icon');
    var confirmButton = document.getElementById('tick-icon');
    var cancelButton = document.getElementById('close-icon');
    var fileNameField = document.getElementById('fm-file-name');

    renameButton.addEventListener('click', function() {
        fileNameField.removeAttribute('readonly');
        fileNameField.focus();
        confirmButton.style.opacity = '1';
        cancelButton.style.opacity = '1';
    });

    confirmButton.addEventListener('click', function() {
        var selectedItem = filemanagerObject.getSelectedFiles()[0];
        if (selectedItem) {
            filemanagerObject.renameFile(selectedItem.name, fileNameField.value);
        }
        confirmButton.style.opacity = '0';
        cancelButton.style.opacity = '0';
        fileNameField.setAttribute('readonly', true);
    });

    cancelButton.addEventListener('click', function() {
        fileNameField.value = '';
        fileNameField.focus();
    });

    function onFileSelect() {
        var selectedItem = filemanagerObject.getSelectedFiles();
        updateDetailsPane(selectedItem[0]);
    }

    function onToolbarClick(args) {
        var selectedItem = filemanagerObject.getSelectedFiles()[0];
        if (args.item.tooltipText === 'Preview Pane') {
            rightSideObj.toggle();
            updateDetailsPane(selectedItem);
        }
        if (args.item.tooltipText === 'Large Icons View') {
            filemanagerObject.view = 'LargeIcons';
        }
        if (args.item.tooltipText === 'Details View') {
            filemanagerObject.view = 'Details';
        }
    }

    var searchTextBox = new ej.inputs.TextBox({
        width: 200,
        placeholder: 'Search Files',
        created: OnCreateSearch,
        input: OnInputSearch,
    });
    searchTextBox.appendTo('#searchBox');

    function OnCreateSearch() {
        this.addIcon('prepend', 'e-icons e-search');
    }

    function OnInputSearch(args) {
        var searchValue = args.value;
        var objectValue = { searchString: searchValue };
        var fileManager = document.getElementById('filemanager').ej2_instances[0];
        fileManager.filterFiles(objectValue);
    }

};
