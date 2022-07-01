this.default = function () {
  var progressLoad1 = function (args) {
    var theme1 = location.hash.split('/')[1];
    theme1 = theme1 ? theme1 : 'Material';
    args.progressBar.progressColor = '#FFFFFF';
    args.progressBar.theme = (theme1.charAt(0).toUpperCase() +
      theme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      switch (theme1) {
        case 'material':
            args.progressBar.trackColor = '#e91e63';
            break;
        case 'fabric':
            args.progressBar.trackColor = '#0078D6';
            break;
        case 'bootstrap':
            args.progressBar.trackColor = '#317ab9';
            break;
        case 'tailwind':
          args.progressBar.progressColor = '#4F46E5';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#4F46E5"><span></span></div>';
          break;
        case 'highcontrast':
            args.progressBar.trackColor = '#FFD939';
            args.progressBar.progressColor = '#000000';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:20px;font-weight:bold;color:#000000;fill:#ffffff"><span>60%</span></div>';
            break;
        case 'bootstrap-dark':
        case 'fabric-dark':
        case 'material-dark':
            args.progressBar.progressColor = '#9A9A9A';
            break;
        case 'tailwind-dark':
            args.progressBar.progressColor = '#22D3EE';
            break;
        case 'bootstrap5':
        case 'bootstrap5-dark':
            args.progressBar.progressColor = '#0D6EFD';
            break;
        default :
            args.progressBar.trackColor = '#007bff';
            break;
    }
  };
  var progressLoad = function (args) {
    var theme2 = location.hash.split('/')[1];
    theme2 = theme2 ? theme2 : 'Material';
    args.progressBar.theme = (theme2.charAt(0).toUpperCase() +
    theme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
  };
  var fullBackground = new ej.progressbar.ProgressBar({
    type: 'Circular',
        value: 60,
        width: '160px',
        height: '160px',
        enableRtl: false,
        radius: '100%',
        innerRadius: '190%',
        trackThickness: 80,
        cornerRadius: 'Round',
        progressThickness: 10,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        annotations: [
            {
                content: '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%</span></div>'
            },
        ],
    load: progressLoad1
  });
  fullBackground.appendTo('#full-background');
  var partBackground = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 60,
    width: '160px',
    height: '160px',
    radius: '73%',
    innerRadius: '80%',
    progressThickness: 62,
    trackThickness: 59,        
    trackColor: 'lightgray',
    load: progressLoad
  });
  partBackground.appendTo('#part-background');
  var outerRadius = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 90,
    width: '160px',
    height: '160px',
    innerRadius: '72',
    progressThickness: 8,
    cornerRadius: 'Round',
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    },
    load: progressLoad
  });
  outerRadius.appendTo('#outer-radius');
  var onRadius = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 90,
    width: '160px',
    height: '160px',
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    },
    trackThickness: 3,
    progressThickness: 8,
    load: progressLoad
  });
  onRadius.appendTo('#on-radius');
  var pie = new ej.progressbar.ProgressBar({
    type: 'Circular',
    value: 70,
    width: '160px',
    height: '160px',
    enablePieProgress: true,
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    },
    load: progressLoad
  });
  pie.appendTo('#pie');
 var replayBtn = document.getElementById('reLoad');
  replayBtn.onclick = function () {
    fullBackground.refresh();
    outerRadius.refresh();
    onRadius.refresh();
    pie.refresh();
  };
};