this.default = function () {
  // Render the PDF viewer control
  var uploadProgressValue = 0;
  var pdfViewerProgressValue = 0;
  var totalProgress;
  var extensions = ['doc','docx','rtf','docm','dotm','dotx','dot','xls','xlsx','pptx','pptm','potx','potm','jpeg','png','bmp','pdf'];
  var viewer = new ej.pdfviewer.PdfViewer ({
    resourceUrl:'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
    documentLoad: documentLoaded,
    ajaxRequestSuccess: ajaxRequestSuccess,
  });
  ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);
  viewer.toolbarSettings = { showTooltip : true, toolbarItems: [ 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'SearchOption', 'AnnotationEditTool', 'FormDesignerEditTool', 'PrintOption', 'DownloadOption']};
  
  var switchObj = new ejs.buttons.Switch({ checked: true });
  switchObj.appendTo('#checked');
  switchObj.change = function (args) {
    if (args.checked) {
        viewer.serviceUrl = '';
    }
    else {
        viewer.serviceUrl = 'https://services.syncfusion.com/js/production/api/pdfviewer';
    }
    viewer.dataBind();
    viewer.load(viewer.documentPath, null);
  };
  viewer.appendTo('#pdfViewer');

  var button = new ej.buttons.Button({});
  button.appendTo('#browse');

  var dropElement = document.getElementById('dropArea');
  var uploadObj = new ej.inputs.Uploader({
    dropArea: document.getElementById('dropArea'),
    selected: onSelect,
    multiple: false,
    allowedExtensions: '.doc,.docx,.rtf,.docm,.dotm,.dotx,.dot,.xls,.xlsx,.pptx,.pptm,.potx,.potm.jpeg,.png,.bmp,.pdf',
  });
  uploadObj.appendTo('#fileupload');

  var parentElement;
  if(ej.base.Browser.isDevice) {
    document.getElementById('drop').style.padding = '0px 10%';
  }
  document.getElementById('browse').onclick = function () {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    return false;
  };

  var progressLoad = function (args) {
    var linearTheme = location.hash.split('/')[1];
    linearTheme = linearTheme ? linearTheme : 'Material';
    args.progressBar.theme = (linearTheme.charAt(0).toUpperCase() +
        linearTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    if(linearTheme === 'fabric') {
      args.progressBar.secondaryProgressColor = '#b0d0e9';
    } else if (linearTheme === 'material-dark') {
      args.progressBar.secondaryProgressColor = '#b8b8b8';
    } else if (linearTheme === 'material') {
      args.progressBar.secondaryProgressColor = '#f087ab';
    } else if (linearTheme === 'bootstrap5-dark') {
      args.progressBar.secondaryProgressColor = '#2b5288';
    } else if (linearTheme === 'bootstrap5') {
      args.progressBar.secondaryProgressColor = '#98c5f5';
    } else if (linearTheme === 'bootstrap') {
      args.progressBar.secondaryProgressColor = '#acc6dc';
    }
    else if (linearTheme === 'bootstrap4') {
      args.progressBar.secondaryProgressColor = '#98c5f5';
    }
    else if (linearTheme === 'bootstrap-dark') {
      args.progressBar.secondaryProgressColor = '#b8b8b8';
    } else if (linearTheme === 'highcontrast') {
      args.progressBar.secondaryProgressColor = '#aca379';
    } else if (linearTheme === 'fluent-dark') {
      args.progressBar.secondaryProgressColor = '#2b5288';
    } else if (linearTheme === 'fluent') {
      args.progressBar.secondaryProgressColor = '#98c5f5';
    } else if (linearTheme === 'tailwind-dark') {
      args.progressBar.secondaryProgressColor = '#386e7f';
    } else if (linearTheme === 'tailwind') {
      args.progressBar.secondaryProgressColor = '#b1afe9';
    }
  };
  var uploadProgress = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    width: '250',
    animation: {
      enable: false,
      duration: 0,
      delay: 0,
    },
    load: progressLoad,
  });
  uploadProgress.appendTo('#progressbar');

  function onSelect(args) {
    uploadProgress.value = 0;
    uploadProgress.refresh();
    var progressBarContainer = document.getElementById("progressbarContainer");
    var progressBar = document.getElementById("linearProgressBar");
    var progressMessage = document.getElementById("uploadedMessage");
    var fileSupportMessage = document.getElementById("fileSupportMessage");
    var fileDetails = document.getElementById("file-details");
    var fileSizeValidation = document.getElementById("fileSizeValidation");
    progressBarContainer.style.display = "block";
    progressBar.style.display = "flex";
    progressMessage.style.display = "none";
    fileSupportMessage.style.display = "none";
    fileSizeValidation.style.display = "none";
    if(!dropElement.querySelector('li')) {
      this.filesData = [];
    }
    if(ej.base.isNullOrUndefined(document.getElementById('dropArea').querySelector('.e-upload-files'))) {
      parentElement = ej.base.createElement('ul', {className: 'e-upload-files',});
      document.getElementsByClassName('e-upload')[0].appendChild(parentElement);
    }
    var validFiles = args.filesData;
    if (validFiles.length === 0) {
      progressBarContainer.style.display = "block";
      progressBar.style.display = "none";
      if(document.getElementById('pdfviewer-container').style.display === "block"){
        progressMessage.style.display = "block";
        fileDetails.style.display = "block";
      }
      args.cancel = true;
      return;
    }
    if(!extensions.includes(validFiles[0].type)){
      fileSupportMessage.style.display = "block";
      progressBar.style.display = "none";
      fileDetails.style.display = "none";
      args.cancel = true;
      return;
    }
    if(validFiles[0].type != "pdf" && validFiles[0].size>4000000){
      fileSizeValidation.style.display = "block";
      progressBar.style.display = "none";
      fileDetails.style.display = "none";
      args.cancel = true;
      return;
    }
    fileDetails.style.display = "block";
    document.getElementById("fileName").innerHTML = args.filesData[0].name;
    var size = document.getElementById("fileSize");
    if((args.filesData[0].size.toString()).length <= 6){
      size.innerHTML = ((args.filesData[0].size/1024).toFixed(1)).toString()+" KB";
    } else {
      var kbsize = args.filesData[0].size/1024;
      size.innerHTML = ((kbsize/1024).toFixed(1)).toString()+" MB";
    }
    formSelectedData(validFiles[0], this);
    this.filesData = this.filesData.concat(validFiles);
    args.cancel = true;
  }

  function formSelectedData(file, proxy) {
    var liEle = ej.base.createElement('li', {
      className: 'e-upload-file-list',
      attrs: {
        'data-file-name': file.name
      },
    });
    readURL(liEle, file);
    proxy.fileList.push(liEle);
  }

  function readURL(li, args) {
    var file = args.rawFile;
    var reader = new FileReader();
    var type = args.type;
    reader.addEventListener('load', function () {
      var post = JSON.stringify({
        'data': reader.result,
        'type': type
      });
      var url = "https://services.syncfusion.com/js/production/api/pdfviewer/LoadFile";
      var xhr = new XMLHttpRequest();
      xhr.open('Post', url, true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
      xhr.upload.addEventListener('progress', function(event){
        if (event.lengthComputable) {
          var progressValue = Math.round((event.loaded / event.total) * 100);
          uploadProgressValue = progressValue;
          totalProgress = calculateTotalProgress();
          updateProgressBar(totalProgress);
          document.getElementById("progress-status").innerHTML = totalProgress.toString()+"%";
        }
      });
      xhr.onload = function (args) {
        viewer.documentPath = this.responseText;
        pdfViewerProgressValue = 60;
        totalProgress = calculateTotalProgress();
        updateProgressBar(totalProgress);
        document.getElementById("progress-status").innerHTML = totalProgress.toString()+"%";
        document.getElementById("pdfviewer-container").style.display = "block";
      };
      xhr.send(post);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function calculateTotalProgress(){
    totalProgress = (uploadProgressValue + pdfViewerProgressValue)/2;
    return totalProgress;
  }

  function updateProgressBar(progress) {
    uploadProgress.value = progress;
    uploadProgress.dataBind();
  }

  function documentLoaded(){
    var progressValue = document.getElementById("progress-status");
    pdfViewerProgressValue = 100;
    totalProgress = calculateTotalProgress();
    updateProgressBar(totalProgress);
    progressValue.innerHTML = totalProgress.toString()+"%";
    setTimeout(function(){
      document.getElementById("linearProgressBar").style.display = "none";
      document.getElementById("uploadedMessage").style.display = "block";
      uploadProgressValue = 0;
      pdfViewerProgressValue = 0;
      progressValue.innerHTML = "0%";
    },1000);
    viewer.magnification.fitToPage();
  }

  function ajaxRequestSuccess(args){
    var progressValue = document.getElementById("progress-status");
    if (args.action === "Load") {
      pdfViewerProgressValue = 70;
      totalProgress = calculateTotalProgress();
      updateProgressBar(totalProgress);
      progressValue.innerHTML = totalProgress.toString()+"%";
    }
    if (args.action === "RenderPdfPages") {
      if(pdfViewerProgressValue < 90){
        pdfViewerProgressValue = pdfViewerProgressValue + 10;
        totalProgress = calculateTotalProgress();
        updateProgressBar(totalProgress);
        progressValue.innerHTML = totalProgress.toString()+"%";
      }
    }
  }
};