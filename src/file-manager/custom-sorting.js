this.default = function () {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView, ej.filemanager.Toolbar, ej.filemanager.NavigationPane);

    var filemanagerInstance = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/NaturalSorting/FileOperations',
            getImageUrl: hostUrl + 'api/NaturalSorting/GetImage',
            uploadUrl: hostUrl + 'api/NaturalSorting/Upload',
            downloadUrl: hostUrl + 'api/NaturalSorting/Download'
        },
        sortComparer: ej.filemanager.sortComparer,
        detailsViewSettings: {
            columns: [
                { field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' }, template: '${name}', sortComparer: ej.filemanager.sortComparer },
                { field: 'size', headerText: 'File Size', minWidth: 50, width: '110', template: '${size}' },
                { field: '_fm_modified', headerText: 'Date Modified', minWidth: 50, width: '190' }
            ]
        },
        height: '380px'
    });

    filemanagerInstance.appendTo('#filemanager');
};