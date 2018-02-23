this.default = function(){
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    var preloadFiles = [
        { name: 'Nature', size: 500000, type: '.png' },
        { name: 'TypeScript Succintly', size: 12000, type: '.pdf' },
        { name: 'ASP.NET Webhooks', size: 500000, type: '.docx' },
    ];
    //Initialize the control by preload files
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        files: preloadFiles,
        removing: onRemove,
        failure: onUploadFail,
        success: onUploadSuccess,
        dropArea: dropElement
    });
    uploadObj.appendTo('#fileupload');
    document.getElementById('clearbtn').onclick = function () {
        uploadObj.clearAll();
    };
    function onRemove(args) {
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.filesData[0].name + '"]');
        if (li.classList.contains('e-icon-spinner')) {
            return;
        }
        generateSpinner(this.uploadWrapper);
    }
    function onUploadFail(args) {
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        li.classList.add('e-icon-spinner');
    }
    function onUploadSuccess(args) {
        var _this = this;
        if (args.operation === 'remove') {
            // remove spinner
            ej.popups.hideSpinner(this.uploadWrapper);
            ej.base.detach(this.uploadWrapper.querySelector('.e-spinner-pane'));
        }
        else {
            var li = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
            li.classList.add('e-icon-spinner');
            li.querySelector('.e-icons').onclick = function () {
                generateSpinner(_this.uploadWrapper);
            };
            li.querySelector('.e-icons').onkeydown = function (e) {
                if (e.keyCode === 13) {
                    generateSpinner(e.target.closest('.e-upload'));
                }
            };
        }
    }
    function generateSpinner(targetElement) {
        ej.popups.createSpinner({ target: targetElement, width: '25px' });
        ej.popups.showSpinner(targetElement);
    }
};