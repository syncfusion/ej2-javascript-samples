/**
 * Sample for default gauge
 */
this.default = function () {
  var circulargauge = new ej.circulargauge.CircularGauge({
    height: '500px',
    title: 'Female (% usage) on popular social network',
    titleStyle: {
      size: '18px',
      fontFamily: 'inherit'
    },
    axes: [
      {
        annotations: [
          {
            description:'Youtube',
            content: '<div class="titleText" style="color:#c8eab7;">YouTube</div>',
            angle: 344,
            radius: '94%',
            zIndex: '1',
          },
          {
            description:'Instagram',
            content: '<div class="titleText" style="color:#82cdbc;">Instagram</div>',
            angle: 340,
            radius: '81%',
            zIndex: '1',
          },
          {
            description:'Twitter',
            content: '<div class="titleText" style="color:#43b6c4;">Twitter</div>',
            angle: 340,
            radius: '66%',
            zIndex: '1',
          },
          {
            description:'Facebook',
            content: '<div class="titleText" style="color:#1d91bf;">Facebook</div>',
            angle: 332,
            radius: '55%',
            zIndex: '1',
          },
          {
            description:'Tiktok',
            content: '<div class="titleText" style="color:#205ea8;">TikTok</div>',
            angle: 328,
            radius: '40%',
            zIndex: '1',
          },
          {
            description:'68%',
            content: '<div class="annotation">68%</div>',
            angle: 191,
            radius: '89%',
            zIndex: '1',
          },
          {
            description:'43%',
            content: '<div class="annotation">43%</div>',
            angle: 125,
            radius: '75%',
            zIndex: '1',
          },
          {
            description:'21%',
            content: '<div class="annotation">21%</div>',
            angle: 67,
            radius: '62%',
            zIndex: '1',
          },
          {
            description:'75%',
            content: '<div class="annotation">75%</div>',
            angle: 215,
            radius: '48%',
            zIndex: '1',
          },
          {
            description:'44%',
            content: '<div class="annotation">44%</div>',
            angle: 133,
            radius: '33%',
            zIndex: '1',
          },
        ],
        startAngle: 0,
        endAngle: 270,
        lineStyle: { width: 0 },
        labelStyle: {
          position: 'Inside',
          font: {
            size: '0px',
            color: 'white',
            fontFamily: 'Roboto',
            fontStyle: 'Regular',
          },
        },
        majorTicks: { height: 0 },
        minorTicks: { height: 0 },
        minimum: 0,
        maximum: 100,
        ranges: [
          {
            start: 0,
            end: 68,
            color: '#c8eab7',
            radius: '94%',
            startWidth: 22,
            endWidth: 22,
          },
          {
            start: 74,
            end: 100,
            color: '#7a7f82',
            startWidth: 1,
            endWidth: 1,
            radius: '89%',
          },
          {
            start: 0,
            end: 43,
            color: '#82cdbc',
            radius: '80%',
            startWidth: 22,
            endWidth: 22,
          },
          {
            start: 49,
            end: 100,
            color: '#7a7f82',
            startWidth: 1,
            endWidth: 1,
            radius: '75%',
          },
          {
            start: 0,
            end: 21,
            color: '#43b6c4',
            radius: '66%',
            startWidth: 22,
            endWidth: 22,
          },
          {
            start: 28,
            end: 100,
            color: '#7a7f82',
            startWidth: 1,
            endWidth: 1,
            radius: '61%',
          },
          {
            start: 0,
            end: 75,
            color: '#1d91bf',
            radius: '52%',
            startWidth: 22,
            endWidth: 22,
          },
          {
            start: 85,
            end: 100,
            color: '#7a7f82',
            startWidth: 1,
            endWidth: 1,
            radius: '47%',
          },
          {
            start: 0,
            end: 44,
            color: '#205ea8',
            radius: '38%',
            startWidth: 22,
            endWidth: 22,
          },
          {
            start: 55,
            end: 100,
            color: '#7a7f82',
            startWidth: 1,
            endWidth: 1,
            radius: '34%',
          },
        ],
        pointers: [],
      },
    ],
    load: function (args) {
      // custom code start
      var selectedDefaultTheme = location.hash.split('/')[1];
      selectedDefaultTheme = selectedDefaultTheme ? selectedDefaultTheme : 'Material';
      args.gauge.theme = (selectedDefaultTheme.charAt(0).toUpperCase() +
          selectedDefaultTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
      if (selectedDefaultTheme.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 342;
        args.gauge.axes[0].annotations[0].radius = "92%";
        args.gauge.axes[0].annotations[1].angle = 337;
        args.gauge.axes[0].annotations[1].radius = "80%";
        args.gauge.axes[0].annotations[2].angle = 337;
        args.gauge.axes[0].annotations[2].radius = "65%";
        args.gauge.axes[0].annotations[3].angle = 326;
        args.gauge.axes[0].annotations[3].radius = "55%";
        args.gauge.axes[0].annotations[4].angle = 323;
        args.gauge.axes[0].annotations[4].radius = "39%";
        args.gauge.axes[0].annotations[5].angle = 192;
        args.gauge.axes[0].annotations[5].radius = "91%";
        args.gauge.axes[0].annotations[9].angle = 136;
        args.gauge.axes[0].annotations[9].radius = "34%";
      }
      // custom code end
    }
  });
  circulargauge.appendTo('#gauge');
};