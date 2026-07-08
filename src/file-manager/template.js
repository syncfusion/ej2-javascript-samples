

this.default = function() {
    var actionItems = [
    { text: 'Open', iconCss: 'e-icons e-folder-open' },
    { text: 'Download', iconCss: 'e-icons e-download' },
    { text: 'Refresh', iconCss: 'e-icons e-refresh' },
    { text: 'Delete', iconCss: 'e-icons e-trash' },
    ];
    var hostUrl = 'https://physical-service.syncfusion.com/';
    var fileManager = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + "api/FileManager/FileOperations",
            uploadUrl: hostUrl + "api/FileManager/Upload",
            downloadUrl: hostUrl + "api/FileManager/Download",
            getImageUrl: hostUrl + "api/FileManager/GetImage"
        },
        cssClass: 'e-fm-template-sample',
        height: '600px',
        detailsViewSettings: {
            columns: [
                {
                    field: "name",
                    headerText: "Name",
                    template: function (item) {
                        return '<div>' + item.name + '</div>';
                    }
                },
                {
                    field: 'size',
                    headerText: 'Size', 
                    template: function (item) {
                        return '<div>' + (item.isFile ? formatSize(item.size) : '-') + '</div>';
                    }
                },
                {
                    field: '_fm_modified', headerText: 'DateModified', format: 'MM/dd/yyyy hh:mm a'
                },
                {
                    headerText: "Actions",
                    template: function (item) {
                        return '<div class="action-ddb" data-name="' + item.name + '" data-isFile="' + item.isFile + '"></div>';
                    }
                }
            ]
        },
        largeIconsTemplate: function (item) {
            var formattedDate = '';
            if (item.dateCreated) {
                formattedDate = new Date(item.dateCreated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
            var iconClass = getFileIconCssClass(item);
            var iconHtml = item.isFile ? '<div class="' + iconClass + '"></div>' : '';
            var backgroundClass = getBackgroundCss(item);
            var html = '';
            html += '<div class="custom-icon-card">';
            html += '  <div class="file-header">';
            html += '     <div class="left-info">';
            html +=           iconHtml;
            html += '         <div class="file-name" title="' + item.name + '">' + item.name + '</div>';
            html += '     </div>';
            html += '     <div class="action-ddb" data-name="' + item.name + '" data-isFile="' + item.isFile + '"></div>';
            html += '  </div>';
            html += '  <div class="' + backgroundClass + '" title="' + item.name + '"></div>';
            html += '  <div class="file-formattedDate">Created on ' + formattedDate + '</div>';
            html += '</div>';
            return html;
        },
        navigationPaneTemplate: function (item) {
            var iconClass = getIconsForFolders(item);
            var html = '';
            html += '<div class="e-nav-pane-node" style="display: inline-flex; align-items: center;">';
            html += '  <span class="e-icons ' + iconClass + '"></span>';
            html += '  <span class="folder-name" style="margin-left:8px;">' + item.name + '</span>';
            html += '</div>';
            return html;
        },
        fileLoad: function (args) {
            var validModules = ['DetailsView', 'LargeIconsView'];
            if (validModules.indexOf(args.module) !== -1) {
                var actionBtn = args.element.querySelector('.action-ddb');
                if (actionBtn && !actionBtn.hasAttribute('data-ddb-initialized')) {
                    wireDropDownButton(actionBtn);
                }
            }
        },
    });
    fileManager.appendTo('#filemanager');
    function wireDropDownButton(hostEl) {
        var fileName = hostEl.getAttribute('data-name') || '';
        var isFile = (hostEl.getAttribute('data-isfile') || 'false') === 'true';
        var items = isFile ? actionItems.filter(function (i) { return i.text !== 'Open'; }) : actionItems;
        var ddb = new ej.splitbuttons.DropDownButton({
            items: items,
            cssClass: 'e-caret-hide filemanager-dropdown-button',
            select: function (args) {
                var action = args.item.text || '';
                onActionSelect(action, { name: fileName, isFile: isFile });
            },
            iconCss: 'e-icons e-more-vertical-1',
        });
        ddb.appendTo(hostEl);
        hostEl.setAttribute('data-ddb-initialized', 'true');
    }
    function onActionSelect(action, item) {
        switch (action) {
            case 'Open':
                fileManager.openFile(item.name);
                break;
            case 'Download':
                fileManager.downloadFiles([item.name]);
                break;
            case 'Refresh':
                fileManager.refreshFiles();
                break;
            case 'Delete':
                fileManager.deleteFiles([item.name]);
                break;
            default:
                break;
        }
    }

    function formatSize(bytes) {
        if (!bytes)
            return "0 B";
        var sizes = ["B", "KB", "MB", "GB", "TB"];
        var i = 0;
        while (bytes >= 1024 && i < sizes.length - 1) {
            bytes /= 1024;
            i++;
        }
        return bytes.toFixed(1) + " " + sizes[i];
    }
    function getBackgroundCss(item) {
        var NamedFileBackgrounds = {
            "Adam.png": "background-Adam",
            "Andrew.png": "background-Andrew",
            "Ellie.png": "background-Ellie",
            "Jameson.png": "background-Jameson",
            "John.png": "background-John",
            "Josie.png": "background-Josie",
            "Apple pie.png": "background-Applepie",
            "Bread.png": "background-Bread",
            "Doughnut.png": "background-Doughnut",
            "Nuggets.png": "background-Nuggets",
            "Sugar cookie.png": "background-Sugarcookie",
            "bird.jpg": "background-bird",
            "sea.jpg": "background-sea",
            "seaview.jpg": "background-seaview",
            "snow.jpg": "background-snow",
            "snowfall.jpg": "background-snowfall"
        };
        var ExtensionBackgrounds = {
            "jpg": "background-jpg",
            "jpeg": "background-jpg",
            "png": "background-png",
            "pptx": "background-pptx",
            "pdf": "background-pdf",
            "mp4": "background-video",
            "mp3": "background-audio",
            "docx": "background-doc",
            "txt": "background-txt",
            "xlsx": "background-xlsx",
            "zip": "background-zip"
        };
        if (!item.isFile)
            return "file-icon background-folder";
        if (NamedFileBackgrounds[item.name])
            return "file-icon " + NamedFileBackgrounds[item.name];
        var ext = item.name.split('.').pop() || '';
        return "file-icon " + (ExtensionBackgrounds[ext] || "background-default");
    }
    function getIconsForFolders(item) {
        var iconMap = {
            Files: 'e-folder',
            Documents: 'e-file-document',
            Downloads: 'e-download',
            Pictures: 'e-thumbnail',
            Music: 'e-file-format',
            Videos: 'e-video',
            Employees: 'e-export-png',
            Food: 'e-export-png',
            Nature: 'e-export-png'
        };
        return iconMap[item.name] || 'e-folder';
    }

    function getFileIconCssClass(item) {
        if (!item.isFile) return "";

        var extensionMap = {
            jpg: "image",
            jpeg: "image",
            png: "image",
            gif: "image",
            mp3: "music",
            wav: "music",
            mp4: "video",
            avi: "video",
            doc: "doc",
            docx: "docx",
            ppt: "pptx",
            pptx: "pptx",
            xls: "xlsx",
            xlsx: "xlsx",
            txt: "txt",
            js: "js",
            css: "css",
            html: "html",
            exe: "exe",
            msi: "msi",
            php: "php",
            xml: "xml",
            zip: "zip",
            rar: "rar",
            pdf: "pdf"
        };

        var extension = (item.name.split('.').pop() || "").toLowerCase();
        var iconType = extensionMap[extension] || "unknown";
        return 'e-list-icon e-fe-' + iconType;
    }

};