this.default = function () {
    var dropElement = document.getElementById('dropArea');
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: { saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        dropArea: dropElement, selected: onSelect, progress: onFileUpload, success: onUploadSuccess, removing: onFileRemove,
        failure: onUploadFailed, allowedExtensions: '.jpg,.png,.jpeg', template: 'template'
    });
    uploadObj.appendTo('#fileupload');

    var parentElement;
    var filesName = [];
    var progressbarContainer;
    if (ej.base.Browser.isDevice) {
        document.getElementById('drop').style.padding = '0px 10%';
    }
    document.getElementById('browse').onclick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    document.getElementById('clearbtn').onclick = function () {
        if (!ej.base.isNullOrUndefined(dropElement.querySelector('ul'))) {
            ej.base.detach(dropElement.querySelector('ul'));
            uploadObj.filesData = [];
            uploadObj.fileList = [];
            filesName = [];
        }
    };
    document.getElementById('uploadbtn').onclick = function () {
        if (dropElement.querySelector('ul') && uploadObj.getFilesData().length > 0) {
            uploadObj.upload(uploadObj.getFilesData());
        }
    };
    function onSelect(args) {
        if (!dropElement.querySelector('li')) {
            this.filesData = [];
        }
        if (ej.base.isNullOrUndefined(document.getElementById('dropArea').querySelector('.e-upload-files'))) {
            parentElement = ej.base.createElement('ul', { className: 'e-upload-files' });
            document.getElementsByClassName('e-upload')[0].appendChild(parentElement);
        }
        var validFiles = validateFiles(args, this.filesData);
        if (validFiles.length === 0) {
            args.cancel = true;
            return;
        }
        for (var i = 0; i < validFiles.length; i++) {
            formSelectedData(validFiles[i], this);
        }
        this.filesData = this.filesData.concat(validFiles);
        args.cancel = true;
    }
    function validateFiles(args, viewedFiles) {
        var modifiedFiles = [];
        var validFiles = [];
        var isModified = false;
        if (args.event.type === 'drop') {
            isModified = true;
            var allImages = ['png', 'jpg', 'jpeg'];
            var chooseFiles = args.filesData;
            for (var i = 0; i < chooseFiles.length; i++) {
                var selectFile = chooseFiles[i];
                if (allImages.indexOf(selectFile.type) !== -1) {
                    modifiedFiles.push(selectFile);
                }
            }
        }
        var files = modifiedFiles.length > 0 || isModified ? modifiedFiles : args.filesData;
        if (filesName.length > 0) {
            for (var j = 0; j < files.length; j++) {
                var file = files[j];
                if (filesName.indexOf(file.name) === -1) {
                    filesName.push(file.name);
                    validFiles.push(file);
                }
            }
        } else {
            for (var k = 0; k < files.length; k++) {
                var validFile = files[k];
                filesName.push(validFile.name);
                validFiles.push(validFile);
            }
        }
        return validFiles;
    }
    function formSelectedData(file, proxy) {
        var liEle = ej.base.createElement('li', { className: 'e-upload-file-list', attrs: { 'data-file-name': file.name } });
        var imageTag = ej.base.createElement('IMG', { className: 'upload-image', attrs: { 'alt': 'Image' } });
        var wrapper = ej.base.createElement('span', { className: 'wrapper' });
        wrapper.appendChild(imageTag);
        liEle.appendChild(wrapper);
        liEle.appendChild(ej.base.createElement('div', { className: 'name file-name', innerHTML: file.name, attrs: { 'title': file.name } }));
        liEle.appendChild(ej.base.createElement('div', { className: 'file-size', innerHTML: proxy.bytesToSize(file.size) }));
        var clearbtn;
        var uploadbtn;
        clearbtn = ej.base.createElement('span', { id: 'removeIcon', className: 'e-icons e-file-remove-btn', attrs: { 'title': 'Remove' } });
        ej.base.EventHandler.add(clearbtn, 'click', removeFiles, proxy);
        liEle.setAttribute('title', 'Ready to Upload');
        uploadbtn = ej.base.createElement('span', { className: 'e-upload-icon e-icons e-file-remove-btn', attrs: { 'title': 'Upload' } });
        uploadbtn.setAttribute('id', 'iconUpload');
        ej.base.EventHandler.add(uploadbtn, 'click', uploadFile, proxy);
        progressbarContainer = ej.base.createElement('progress', { className: 'progressbar', id: 'progressBar', attrs: { value: '0', max: '100' } });
        liEle.appendChild(clearbtn);
        liEle.appendChild(uploadbtn);
        liEle.appendChild(progressbarContainer);
        readURL(liEle, file);
        document.querySelector('.e-upload-files').appendChild(liEle);
        proxy.fileList.push(liEle);
    }
    function uploadFile(args) {
        uploadObj.upload([this.filesData[this.fileList.indexOf(args.currentTarget.parentElement)]]);
    }
    function removeFiles(args) {
        var removeFile = this.filesData[this.fileList.indexOf(args.currentTarget.parentElement)];
        var statusCode = removeFile.statusCode;
        if (statusCode === '2' || statusCode === '1') {
            this.remove(removeFile);
            filesName.splice(filesName.indexOf(removeFile.name), 1);
            uploadObj.element.value = '';
        }
    }
    function onFileUpload(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        var iconEle = li.querySelector('#iconUpload');
        iconEle.style.cursor = 'not-allowed';
        iconEle.classList.add('e-uploaded');
        ej.base.EventHandler.remove(li.querySelector('#iconUpload'), 'click', uploadFile);
        var progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue) && li.querySelector('.progressbar')) {
            li.getElementsByTagName('progress')[0].value = progressValue;
        }
    }
    function onUploadSuccess(args) {
        var _this = this;
        var spinnerElement = document.getElementById('dropArea');
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        if (li && !ej.base.isNullOrUndefined(li.querySelector('.progressbar'))) {
            li.querySelector('.progressbar').style.visibility = 'hidden';
        }
        if (args.operation === 'upload') {
            ej.base.EventHandler.remove(li.querySelector('#iconUpload'), 'click', uploadFile);
            li.setAttribute('title', args.e.currentTarget.statusText);            
            li.querySelector('.file-name').style.color = 'green';
            li.querySelector('.e-icons').onclick = function () { generateSpinner(_this.uploadWrapper); };
        }
        else {
            if(!ej.base.isNullOrUndefined(spinnerElement)) {
                ej.popups.hideSpinner(spinnerElement);
                ej.base.detach(spinnerElement.querySelector('.e-spinner-pane'));
            }
        }
    }
    function generateSpinner(targetElement) {
        ej.popups.createSpinner({ target: targetElement, width: '25px' });
        ej.popups.showSpinner(targetElement);
    }
    function onUploadFailed(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        li.querySelector('.file-name').style.color = 'red';
        li.setAttribute('title', args.e.currentTarget.statusText);
        if (args.operation === 'upload') {
            ej.base.EventHandler.remove(li.querySelector('#iconUpload'), 'click', uploadFile);
            li.querySelector('.progressbar').style.visibility = 'hidden';
        }
    }
    function onFileRemove(args) {
        args.postRawFile = false;
    }
    function readURL(li, args) {
        var preview = li.querySelector('.upload-image');
        var file = args.rawFile;
        var reader = new FileReader();
        reader.addEventListener('load', function () { preview.src = reader.result; }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
};