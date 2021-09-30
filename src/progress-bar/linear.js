this.default = function () {

  var div = document.getElementsByClassName('progressbar-label');

  var progressLoad = function (args) {
      var linearTheme = location.hash.split('/')[1];
      linearTheme = linearTheme ? linearTheme : 'Material';
      args.progressBar.theme = (linearTheme.charAt(0).toUpperCase() +
          linearTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      if (args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark' || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'MaterialDark') {
          for (var i = 0; i < div.length; i++) {
              div[i].setAttribute('style', 'color:white');
          }
      }
  };

  var button = new ej.buttons.Button();
  button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
  button.appendTo('#reLoad');

  var linearProgress1 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    value: 100,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  linearProgress1.appendTo('#lineardeterminate');

  var linearProgress2 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    isIndeterminate: true,
    value: 20,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  linearProgress2.appendTo('#linearindeterminate');

  var linearProgress3 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    segmentCount: 8,
    value: 100,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  linearProgress3.appendTo('#linearsegment');

  var linearProgress4 = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    value: 40,
    secondaryProgress: 60,
    animation: {
      enable: true,
      duration: 2000,
      delay: 0,
    },
    load: progressLoad
  });
  linearProgress4.appendTo('#linearbuffer');

  var activeProgress = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '60',
    value: 100,
    isActive: true,
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    },
    load: progressLoad
});
activeProgress.appendTo('#linearactive');

  var replayBtn = document.getElementById('reLoad');
  replayBtn.onclick = function () {
    linearProgress1.refresh();
    linearProgress2.refresh();
    linearProgress3.refresh();
    linearProgress4.refresh();
    activeProgress.refresh();
  };
};