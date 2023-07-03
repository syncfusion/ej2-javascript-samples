this.default = function () {

  var div = document.getElementsByClassName('progressbar-label');

  var progressLoad = function (args) {
      var linearTheme = location.hash.split('/')[1];
      linearTheme = linearTheme ? linearTheme : 'Material';
      args.progressBar.theme = (linearTheme.charAt(0).toUpperCase() +
          linearTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      if (args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark' || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'Material3Dark') {
          for (var i = 0; i < div.length; i++) {
              div[i].setAttribute('style', 'color:white');
          }
      }
      if (linearTheme === 'fabric') {
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