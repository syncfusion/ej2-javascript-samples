/**
 * Profile Picture sample
 */

 this.default = function () {
  var img = document.querySelector('#custom-img');
  var imageEditor, imgSrc = '';
  img.onload = function () {
      if (imgSrc === '') {
         var canvas = document.querySelector('#img-canvas');
         var ctx = canvas.getContext('2d');
         canvas.width = img.width < img.height ? img.width : img.height;
         canvas.height = canvas.width;
         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
         document.querySelector('.e-profile').classList.remove('e-hide');
      }
  };
  var dialogObj = new ej.popups.Dialog({
      header: 'Edit Profile Image',
      animationSettings: { effect: 'None' },
      showCloseIcon: true,
      closeOnEscape: true,
      target: '.control-section',
      width: '340px',
      height: '400px',
      visible: false,
      position: {X: 'center', Y: 0 },
      close: function () {
          var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
          imageEditor.destroy();
          document.getElementById('image-editor').className = '';
      },
      open: function () {
          imageEditor = new ej.imageeditor.ImageEditor({
              fileOpened: function () {
                  var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
                  imageEditor.select('circle');
              },
              created: function () {
                var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
                if (imageEditor.theme && window.location.href.split('#')[1]) {
                    imageEditor.theme = window.location.href.split('#')[1].split('/')[1];
                }
              },
              toolbar: []
          });
          imageEditor.appendTo('#image-editor');
      },
      buttons: [
            {
                click: function () {
                    document.getElementById('img-upload').click();
                },
                buttonModel: { content: 'Open', isPrimary: false, cssClass: 'e-custom-img-btn e-img-custom-open' }
            },{
              click: function () {
                  var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
                  imageEditor.reset();
                  imageEditor.select('circle');
              },
              buttonModel: { content: 'Reset', isPrimary: false, cssClass: 'e-custom-img-btn e-img-custom-reset' }
          },
          {
              click: function () {
                  var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
                  imageEditor.rotate(-90);
              },
              buttonModel: { content: 'Rotate', isPrimary: false, cssClass: 'e-custom-img-btn e-img-custom-rotate' }
          },
          {
            click: function () {
                var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
                imageEditor.crop();
                var croppedData = imageEditor.getImageData();
                var canvas = document.querySelector('#img-canvas');
                var ctx = canvas.getContext('2d');
                var parentDiv = document.querySelector('.e-profile');
                var tempCanvas = parentDiv.appendChild(ej.base.createElement('canvas'));
                var tempContext = tempCanvas.getContext('2d');
                tempCanvas.width = croppedData.width;
                tempCanvas.height = croppedData.height;
                tempContext.putImageData(croppedData, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
                tempCanvas.remove();
                parentDiv.style.borderRadius = '100%';
                canvas.style.backgroundColor = '#fff';
                dialogObj.hide();
                if (imgSrc !== '') {
                    var img = document.querySelector('#custom-img');
                    img.src = imgSrc;
                }
            },
              buttonModel: { content: 'Apply', isPrimary: true, cssClass: 'e-img-custom-apply' }
          }]
  });
  dialogObj.appendTo('#profile-dialog');
  document.getElementById('custom-edit').onclick = function () {
    dialogObj.show();
    var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
    var img = document.querySelector('#custom-img');
    imageEditor.open(img.src);
  };
  document.getElementById('img-upload').onchange = function (args) {
    var URL = window.URL;
    var url = URL.createObjectURL(args.target.files[0]);
    var imageEditor = ej.base.getComponent(document.getElementById('image-editor'), 'image-editor');
    imageEditor.open(url.toString());
    document.getElementById('img-upload').value = null;
    imgSrc = url.toString();
  };
  var imageHide = document.getElementsByClassName('sb-desktop-wrapper')[0];
  if (imageHide) {
    document.getElementsByClassName('sb-desktop-wrapper')[0].onclick = function (args) {
    if (args.target.className.indexOf('col-lg-12 control-section e-img-editor-sample') > -1 || args.target.className.indexOf('sb-content') > -1) {
        dialogObj.hide();
    }
  };
  }
 
};
