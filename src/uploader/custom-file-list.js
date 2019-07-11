this.default = function () {
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        dropArea: dropElement, selected: onFileSelect,
        progress: onFileUpload, success: onUploadSuccess, removing: onFileRemove,   
        failure: onUploadFailed 
    });
    uploadObj.appendTo('#fileupload');
    document.getElementById('browse').onclick = function () {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
        return false;
    };
    document.getElementById('clearbtn').onclick = function () {
        if (!ej.base.isNullOrUndefined(document.getElementById('dropArea').querySelector('.upload-list-root'))) {
            uploadObj.element.value = '';
            ej.base.detach(document.getElementById('dropArea').querySelector('.upload-list-root'));
            uploadObj.filesData = [];
            uploadObj.fileList = [];
        }
    };
    var parentElement; var proxy; var progressbarContainer;
    function onFileSelect(args) {
        if (ej.base.isNullOrUndefined(document.getElementById('dropArea').querySelector('.upload-list-root'))) {
            parentElement = ej.base.createElement('div', { className: 'upload-list-root' });
            parentElement.appendChild(ej.base.createElement('ul', {className: 'ul-element' }));
            document.getElementById('dropArea').appendChild(parentElement);
        }
        for ( var k = 0; k < args.filesData.length; k++) {
            var fileName = args.filesData[k].name;
            for (var j = 0; j < this.filesData.length; j++) {
                if (this.filesData[j].name === fileName) {
                    args.filesData.splice(k, 1);
                    --k;
                    j = this.filesData.length;
                }
            }
        }
        for (var i = 0; i < args.filesData.length; i++) {
            formSelectedData(args.filesData[i], this);    // create the LI element for each file Data
        }
        this.filesData = this.filesData.concat(args.filesData);
        this.upload(args.filesData, true);
        args.cancel = true;
    }
    function formSelectedData(selectedFiles, proxy) {
        var liEle = ej.base.createElement('li', { className: 'file-lists', attrs: { 'data-file-name': selectedFiles.name } });
        liEle.appendChild(ej.base.createElement('span', { className: 'file-name ', innerHTML: selectedFiles.name }));
        liEle.appendChild(ej.base.createElement('span', { className: 'file-size ', innerHTML: proxy.bytesToSize(selectedFiles.size) }));
        if (selectedFiles.status === proxy.localizedTexts('readyToUploadMessage')) {
            progressbarContainer = ej.base.createElement('span', { className: 'progress-bar-container' });
            progressbarContainer.appendChild(ej.base.createElement('progress', { className: 'progress', attrs: { value: '0', max: '100' } }));
            liEle.appendChild(progressbarContainer);
        }
        else {
            liEle.querySelector('.file-name').classList.add('upload-fails');
        }
        var closeIconContainer = ej.base.createElement('span', { className: 'e-icons close-icon-container' });
        ej.base.EventHandler.add(closeIconContainer, 'click', removeFiles, proxy);
        liEle.appendChild(closeIconContainer);
        document.querySelector('.ul-element').appendChild(liEle);
        proxy.fileList.push(liEle);
    }
    function onFileUpload(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        ej.base.EventHandler.remove(li.querySelector('.close-icon-container'), 'click', removeFiles);
        var progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue)) {
            li.getElementsByTagName('progress')[0].value = progressValue;   // Updating the progress bar value
        }
    }
    function onUploadSuccess(args) {
        var _this = this;
        var spinnerElement = document.getElementById('dropArea');
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        if (!ej.base.isNullOrUndefined(li.querySelector('.progress-bar-container'))) {
            ej.base.detach(li.querySelector('.progress-bar-container'));
        }
        if (args.operation === 'upload') {
            li.querySelector('.file-name').classList.add('upload-success');
            li.querySelector('.close-icon-container').classList.add('delete-icon');
            (li.querySelector('.close-icon-container')).onclick = function () {
                generateSpinner(_this.uploadWrapper);
            };
            li.querySelector('.close-icon-container').onkeydown = function (e) {
                if (e.keyCode === 13) {
                    generateSpinner(e.target.closest('.e-upload'));
                }
            };
        }
        if (args.operation === 'remove') {
            this.filesData.splice(this.fileList.indexOf(li), 1);
            this.fileList.splice(this.fileList.indexOf(li), 1);
            ej.base.detach(li);
            ej.popups.hideSpinner(spinnerElement);
            ej.base.detach(spinnerElement.querySelector('.e-spinner-pane'));
        }
        ej.base.EventHandler.add(li.querySelector('.close-icon-container'), 'click', removeFiles, this);
    }
    function generateSpinner(targetElement) {
        ej.popups.createSpinner({ target: targetElement, width: '25px' });
        ej.popups.showSpinner(targetElement);
    }
    function onUploadFailed(args) {
        var li = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        ej.base.EventHandler.add(li.querySelector('.close-icon-container'), 'click', removeFiles, this);
        li.querySelector('.file-name ').classList.add('upload-fails');
        if (args.operation === 'upload') {
            ej.base.detach(li.querySelector('.progress-bar-container'));
        }
    }
    function onFileRemove(args) {
        args.postRawFile = false;
    }
    function removeFiles(args) {
        var status = this.filesData[this.fileList.indexOf(args.currentTarget.parentElement)].status;
        if (status === this.localizedTexts('uploadSuccessMessage')) {
            this.remove(this.filesData[this.fileList.indexOf(args.currentTarget.parentElement)]);
        }
        else {
            ej.base.detach(args.currentTarget.parentElement);
        }
    }
};