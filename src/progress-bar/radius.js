this.default = function () {
  var progressLoad1 = function (args) {
      var theme = loadProgressBarTheme(args).toLowerCase();
      switch (theme) {
        case 'material':
          args.progressBar.trackColor = '#f8c2d4';
          args.progressBar.progressColor = '#e91e63';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#e91e63"><span></span></div>';
          break;
        case 'fabric':
          args.progressBar.progressColor = '#0078D6';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>';
          break;
        case 'bootstrap':
          args.progressBar.progressColor = '#317ab9';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#317ab9"><span></span></div>';
          break;
        case 'tailwind':
        case 'tailwind3':
          args.progressBar.progressColor = '#4F46E5';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#4F46E5"><span></span></div>';
          break;
        case 'highcontrast':
          args.progressBar.progressColor = '#FFD939';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:20px;font-weight:bold;color:#FFD939;"><span>60%</span></div>';
          break;
        case 'bootstrap-dark':
        case 'fabric-dark':
        case 'material-dark':
          args.progressBar.progressColor = '#9A9A9A';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#9A9A9A"><span></span></div>';
          break;
        case 'tailwind-dark':
          args.progressBar.progressColor = '#22D3EE';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#22D3EE"><span></span></div>';
          break;
        case 'tailwind3-dark':
          args.progressBar.progressColor = '#6366F1';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6366F1"><span></span></div>';
          break;
        case 'bootstrap4':
          args.progressBar.progressColor = '#007bff';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#007bff"><span></span></div>';
          break;
        case 'fluent':
        case 'fluent-dark':
        case 'bootstrap5':
        case 'bootstrap5-dark':
          args.progressBar.progressColor = '#0D6EFD';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0D6EFD"><span></span></div>';
          break;
        case 'material3':
          args.progressBar.progressColor = '#6750A4';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6750A4"><span></span></div>';
          break;
        case 'material3-dark':
          args.progressBar.progressColor = '#D0BCFF';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#D0BCFF"><span></span></div>';
          break;
        case "fluent2":
          args.progressBar.progressColor = '#0F6CBD';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0F6CBD"><span></span></div>';
          break;
        case "fluent2-dark":
          args.progressBar.progressColor = '#115EA3';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#115EA3"><span></span></div>';
          break;
        case "fluent2-highcontrast":
          args.progressBar.progressColor = '#1AEBFF';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#1AEBFF"><span></span></div>';
          break;
        default:
          args.progressBar.trackColor = '#007bff';
          break;
    }
  };
  var progressLoad = function (args) {
    loadProgressBarTheme(args);
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