this.default = function () {
  var progressLoad1 = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
      selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      switch (selectedTheme) {
        case 'material':
          args.progressBar.trackColor = '#e91e63';
          break;
        case 'fabric':
          args.progressBar.trackColor = '#0078D6';
          break;
        case 'bootstrap':
          args.progressBar.trackColor = '#317ab9';
          break;
        case 'highcontrast':
          args.progressBar.trackColor = '#FFD939';
          args.progressBar.progressColor = '#000000';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:20px;font-weight:bold;color:#000000;fill:#000000"><span>60%</span></div>';
          break;
        default:
          args.progressBar.trackColor = '#007bff';
          break;
    }
  };
  var progressLoad = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
      selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
  };
  var fullBackground = new ej.progressbar.ProgressBar({
    type: 'Circular',
        value: 60,
        width: '160px',
        height: '160px',
        enableRtl: false,
        radius: '100%',
        innerRadius: '190%',
        progressColor:"white",
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