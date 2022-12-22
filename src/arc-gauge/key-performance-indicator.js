/**
 * Sample for key performance indicator
 */
this.default = function () {
  var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [
      {
        annotations: [
          {
            content: '<div class="triangle-up"></div>',
            angle: 270,
            zIndex: '1',
            radius: '33%',
          },
          {
            content:
              '<div class="text" style="color:#84cbb5;">Current</div>',
            angle: 0,
            zIndex: '1',
            radius: '25%',
          },
          {
            content:
              '<div class="percentage" style="color:#84cbb5;">76.6%</div>',
            angle: 125,
            zIndex: '1',
            radius: '12%',
          },
          {
            content:
              '<div style="font-size:22px;font-family: inherit;">0</div>',
            angle: 213,
            zIndex: '1',
            radius: '83%',
          },
          {
            content:
              '<div style="font-size:22px;font-family: inherit">100</div>',
            angle: 150,
            zIndex: '1',
            radius: '83%',
          },
        ],
        lineStyle: { width: 0 },
        labelStyle: {
          font: {
            size: '0px',
          },
        },
        majorTicks: { height: 0 },
        minorTicks: { height: 0 },
        startAngle: 220,
        endAngle: 140,
        minimum: 0,
        maximum: 100,
        radius: '90%',
        pointers: [
          {
            type: 'Marker',
            markerShape: 'Circle',
            markerWidth: 30,
            markerHeight: 30,
            animation: {
              enable: false
            },
            radius: '82%',
            color: '#bdbdbf',
            value: 30,
          },
          {
            type: 'Marker',
            markerShape: 'Circle',
            markerWidth: 30,
            markerHeight: 30,
            animation: {
              enable: false
            },
            radius: '82%',
            color: '#626866',
            value: 50,
          },
          {
            type: 'Marker',
            markerShape: 'InvertedTriangle',
            markerWidth: 30,
            markerHeight: 30,
            radius: '92%',
            color: '#b6b6b6',
            value: 76.6,
          },
        ],
        ranges: [
          {
            start: 0,
            end: 100,
            startWidth: 30,
            endWidth: 30,
            roundedCornerRadius: 20,
            color: '#e3e3e3',
            radius: '90%',
          },
          {
            start: 30,
            end: 50,
            startWidth: 30,
            endWidth: 30,
            linearGradient: {
              startValue: '0%',
              endValue: '60%',
              colorStop: [
                { color: 'white', offset: '10%', opacity: 0.9 },
                { color: '#84cbb5', offset: '90%', opacity: 0.9 },
              ],
            },
            radius: '90%',
          },
        ],
      },
    ],
    load: function (args) {
      // custom code start
      var selectTheme = location.hash.split('/')[1];
      selectTheme = selectTheme ? selectTheme : 'Material';
      args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
        selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      // custom code end
    }
  });
  circulargauge.appendTo('#gauge');
};