this.default = function () {
  var div = document.getElementsByClassName('progress-text-align');
  var progressLoad = function (args) {
    loadProgressBarTheme(args);
      if (args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark' || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'Tailwind3Dark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'Material3Dark' || args.progressBar.theme === 'Fluent2Dark' || args.progressBar.theme === 'Fluent2HighContrast') {
          for (var j = 0; j < div.length; j++) {
              div[j].setAttribute('style', 'color:white');
          }
      }
  };

  var reloadButton = new ej.buttons.Button();
  reloadButton = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
  reloadButton.appendTo('#reLoad');

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