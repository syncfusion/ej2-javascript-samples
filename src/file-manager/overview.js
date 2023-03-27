/**
 * File Manager full functionalities sample
 */
 this.default = function() {
     var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
     var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'    
            },
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
            view: 'Details',
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            },
            detailsViewSettings: {
                columns: [
                    {
                        field: 'name', headerText: 'Name', customAttributes: { class: 'e-fe-grid-name' }
                    },
                    {
                        field: '_fm_modified', headerText: 'DateModified', format: 'MM/dd/yyyy hh:mm a'
                    },
                    {
                        field: 'size', headerText: 'Size', template: '<span class="e-fe-size">${size}</span>', format: 'n2'
                    }
                ]
            }
        });
    fileObject.appendTo('#filemanager');
};