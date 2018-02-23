this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: { saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        dropArea: dropElement, selected: onSelect, progress: onFileUpload, success: onUploadSuccess,
        failure: onUploadFailed, allowedExtensions: '.jpg,.png', template: 'template'
    });
    uploadObj.appendTo('#fileupload');

    var parentElement;
    var progressbarContainer;
    if (ej.base.Browser.isDevice) {
        document.getElementById('drop').style.padding = '0px 10%';
    }
    document.getElementById('browse').onclick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    document.getElementById('clearbtn').onclick = function () {
        ej.base.detach(dropElement.querySelector('ul'));
        uploadObj.filesData = [];
        uploadObj.fileList = [];
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
        for (var i = 0; i < args.filesData.length; i++) {
            formSelectedData(args.filesData[i], this);
        }
        this.filesData = this.filesData.concat(args.filesData);
        args.cancel = true;
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
        var statusCode = this.filesData[this.fileList.indexOf(args.currentTarget.parentElement)].statusCode;
        if (statusCode === '2' || statusCode === '1') {
            this.remove(this.filesData[this.fileList.indexOf(args.currentTarget.parentElement)]);
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
            li.querySelector('.file-name').style.color = 'green';
            li.querySelector('.e-icons').onclick = function () { generateSpinner(_this.uploadWrapper); };
        }
        else {
            if (li) {
                ej.base.detach(li);
            }
            ej.popups.hideSpinner(spinnerElement);
            ej.base.detach(spinnerElement.querySelector('.e-spinner-pane'));
        }
        li.setAttribute('title', args.e.currentTarget.statusText);
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