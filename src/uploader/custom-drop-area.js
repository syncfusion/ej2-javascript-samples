this.default = function () {
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        dropArea: document.getElementById('dropTarget'),
        template: '#uploaderTemplate',
        success: onUploadSuccess,
        failure: onUploadFailed,
        removing: onFileRemove,
        progress: onUploadInProgress,
        selected: onSelect,
        allowedExtensions: '.pdf, .png, .txt'
    });
    uploadObj.appendTo('#fileupload');
    document.getElementById('browse').onclick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    document.getElementsByClassName('e-upload')[0].addEventListener('click', function (e) { onDeleteIconClick(e); }, false);
    function onDeleteIconClick(e) {
        var target = e.target;
        if (target.classList.contains('e-file-delete-btn')) {
            for (var i = 0; i < uploadObj.getFilesData().length; i++) {
                if (target.parentElement.getAttribute('data-file-name') === uploadObj.getFilesData()[i].name) {
                    uploadObj.remove(uploadObj.getFilesData()[i]);
                }
            }
        }
        else if (target.classList.contains('e-file-remove-btn')) {
            ej.base.detach(target.parentElement);
        }
    }
    function onSelect(args) {
        var allowedTypes = ['pdf', 'png', 'txt'];
        var modifiedFiles = [];
        for (var _i = 0, _a = args.filesData; _i < _a.length; _i++) {
            var file = _a[_i];
            if (allowedTypes.indexOf(file.type.toLowerCase()) > -1) {
                modifiedFiles.push(file);
            }
        }
        if (modifiedFiles.length > 0) {
            args.isModified = true;
            args.modifiedFiles = modifiedFiles;
        }
        else {
            args.cancel = true;
        }
    }
    function onFileRemove(args) {
        args.postRawFile = false;
    }
    function onUploadSuccess(args) {
        var li = getLiElement(args);
        li.querySelector('.upload-status').innerHTML = args.file.status;
        li.querySelector('.upload-status').classList.add('upload-success');
    }
    function onUploadFailed(args) {
        var li = getLiElement(args);
        li.querySelector('.upload-status').innerHTML = args.file.status;
        li.querySelector('.upload-status').classList.add('upload-failed');
    }
    function onUploadInProgress(args) {
        var progressValue = Math.round((args.e.loaded / args.e.total) * 100) + '%';
        var li = getLiElement(args);
        li.querySelector('.upload-status').innerHTML = args.file.status + '(' + progressValue + ' )';
    }
    function getLiElement(args) {
        var liElements = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-files > li');
        var li;
        for (var i = 0; i < liElements.length; i++) {
            if (liElements[i].getAttribute('data-file-name') === args.file.name) {
                li = liElements[i];
            }
        }
        return li;
    }
};
