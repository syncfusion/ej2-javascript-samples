this.default = function () {

  var div = document.getElementsByClassName('progress-text-align');
  
  var progressLoad = function (args) {
      var selectedTheme = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      if (selectedTheme === 'highcontrast') {
          for (var i = 0; i < div.length; i++) {
              div[i].setAttribute('style', 'color:white');
          }
      }
  };

  var button = new ej.buttons.Button();
  button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
  button.appendTo('#reLoad');

  var circluar = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 100,
    startAngle: 180,
    endAngle: 180,
    width: '160px',
    height: '160px',
    enableRtl: false,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  circluar.appendTo('#circular-container');

  var rtl = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 70,
    width: '160px',
    height: '160px',
    secondaryProgress: 90,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  rtl.appendTo('#rtl-container');

  var track = new ej.progressbar.ProgressBar({
    type: 'Circular',
    minimum: 0,
    maximum: 100,
    value: 100,
    width: '160px',
    height: '160px',
    segmentCount: 4,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  track.appendTo('#track-container');

  var rounded = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 20,
    width: '160px',
    height: '160px',
    cornerRadius: 'Round',
    isIndeterminate: true,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  rounded.appendTo('#rounded-container');

  var replayBtn = document.getElementById('reLoad');
  replayBtn.onclick = function () {
    circluar.refresh();
    rtl.refresh();
    track.refresh();
    rounded.refresh();
  };
};