/**
 * Sample for patterns
 */

/**
 * Code for first Gauge
 */
function pointerGauge1() {
  var pointerGauge1 = new ej.circulargauge.CircularGauge({
    width: "280px",
    height: "300px",
    axes: [
      {
        annotations: [
          {
            description:'38',
            content: '<div style="font-size:30px;margin-top: -5px;font-family: inherit;">38</div>',
            angle: 1,
            radius: '-20%',
            zIndex: '1',
          },
        ],
        radius: '100%',
        startAngle: 230,
        endAngle: 130,
        majorTicks: {
          width: 0,
          interval: 10
        },
        lineStyle: { width: 30, color: '#f6f7f9' },
        minorTicks: {
          width: 0,
        },
        labelStyle: {
          font: {
            fontFamily: 'inherit',
            size: '12px',
          },
          position: 'Outside',
          offset: 20,
        },
        pointers: [
          {
            type: 'RangeBar',
            color: '#7edfb4',
            description:'RangeBar pointer value : 38',
            value: 38,
            radius: '120%',
            pointerWidth: 28,
            animation: {
              duration: 1800
            }
          },
          {
            type: 'Marker',
            description:'Marker pointer value : 38',
            markerShape: 'Rectangle',
            markerWidth: 28,
            markerHeight: 3,
            radius: '98%',
            color: 'black',
            value: 38,
            animation: {
              duration: 1800
            }
          }
        ],
        ranges: [
          {
            start: 0,
            end: 38,
            startWidth: 10,
            endWidth: 10,
            color: '#7edfb4',
            radius: '86%',
          },
          {
            start: 38,
            end: 50,
            startWidth: 10,
            endWidth: 10,
            color: '#7edfb4',
            radius: '87%',
          },
          {
            start: 50,
            end: 75,
            startWidth: 10,
            endWidth: 10,
            color: '#f99d4c',
            radius: '87%',
          },
          {
            start: 75,
            end: 100,
            startWidth: 10,
            endWidth: 10,
            color: '#e96920',
            radius: '87%',
          },
        ],
      },
    ],

    load: function (args) {
      // custom code start
      gaugeObj = args.gauge;
      var patternTheme1 = location.hash.split('/')[1];
      patternTheme1 = patternTheme1 ? patternTheme1 : 'Material';
      args.gauge.theme = (patternTheme1.charAt(0).toUpperCase() +
      patternTheme1.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
      if (patternTheme1.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 188;
        args.gauge.axes[0].annotations[0].radius = "15%";
      }
      // custom code end
    },

  });
  return pointerGauge1;
}

/**
 * Code for second Gauge
 */
function pointerGauge2() {
  var pointerGauge2 = new ej.circulargauge.CircularGauge({
    centerY: '60%',
    width: "280px",
    height: "300px",
    axes: [
      {
        annotations: [
          {
            description:'75%',
            content: '<div style="font-size:25px;font-family: inherit;">75%</div>',
            angle: 1,
            radius: '0%',
            zIndex: '1',

          },
          {
            description:'Annotation value : 0 %',
            content: '<div style="font-size:22px;font-family: inherit;">0%</div>',
            angle: 255,
            radius: '102%',
            zIndex: '1',
          },
          {
            description:'Annotation value :100 %',
            content: '<div style="font-size:22px;font-family: inherit;">100%</div>',
            angle: 105,
            radius: '105%',
            zIndex: '1',
          },
        ],
        radius: '80%',
        startAngle: 270,
        endAngle: 90,
        majorTicks: {
          width: 0,
        },
        lineStyle: { width: 30, color: '#f6f7f9' },
        minorTicks: {
          width: 0,
        },
        labelStyle: {
          format:'{value}  %',
          font: {
            size: '0px',
            fontFamily: 'inherit'
          },
        },
        pointers: [
          {
            type: 'RangeBar',
            pointerWidth: 40,
            color: '#d6f5e8',
            description: 'RangeBar pointer value: 75',
            value: 75,
            radius: '125%',
          },
          {
            type: 'RangeBar',
            pointerWidth: 30,
            color: '#7edfb4',
            description: 'RangeBar pointer value :75',
            value: 75,
            radius: '115%',
          },
        ],
      },
    ],
    load: function (args) {
      // custom code start
      var patternTheme2 = location.hash.split('/')[1];
      patternTheme2 = patternTheme2 ? patternTheme2 : 'Material';
      args.gauge.theme = (patternTheme2.charAt(0).toUpperCase() +
        patternTheme2.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
      if (patternTheme2.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 12;
        args.gauge.axes[0].annotations[0].radius = "18%";
        args.gauge.axes[0].annotations[1].angle = 258;
        args.gauge.axes[0].annotations[1].radius = "102%";
        args.gauge.axes[0].annotations[2].angle = 102;
        args.gauge.axes[0].annotations[2].radius = "105%";
      }
      // custom code end
    }
  });
  return pointerGauge2;
}

/**
 * Code for third gauge
 */
function pointerGauge3() {
  var pointerGauge3 = new ej.circulargauge.CircularGauge({
    width: "280px",
    height: "300px",
    axes: [
      {
        annotations: [
          {
            description:'450',
            content:
              '<div style="font-size:30px;font-family: inherit;"> 450 </div> </div>',
            zIndex: '1',
            angle: 0,
            radius: '-10%',
          },
          {
            description:'300',
            content: '<div style="font-size:12px;font-family: inherit;"> 300 </div>',
            zIndex: '1',
            angle: 0,
            radius: '112%',
          },
          {
            description:'400',
            content: '<div style="font-size:12px"> 400 </div>',
            zIndex: '1',
            angle: 48,
            radius: '112%',
          },
          {
            description:'500',
            content: '<div style="font-size:12px;font-family: inherit;"> 500 </div>',
            zIndex: '1',
            angle: 93,
            radius: '112%',
          },
        ],
        lineStyle: { width: 0 },
        startAngle: 220,
        endAngle: 140,
        minimum: 0,
        maximum: 600,
        radius: '75%',
        labelStyle: {
          format:' {value}%',
          font: { fontFamily: 'inherit', size: '0px' },
          offset: 10,
        },
        majorTicks: { width: 0, interval: 100 },
        minorTicks: { width: 0 },
        ranges: [
          {
            start: 0,
            end: 298,
            startWidth: 12,
            endWidth: 12,
            color: '#ff5353',
            roundedCornerRadius: 10,
          },
          {
            start: 300,
            end: 397,
            startWidth: 12,
            endWidth: 12,
            color: '#ffd223',
            roundedCornerRadius: 10,
          },
          {
            start: 400,
            end: 497,
            startWidth: 12,
            endWidth: 12,
            color: '#77e6b4',
            roundedCornerRadius: 10,
          },
          {
            start: 500,
            end: 600,
            startWidth: 12,
            endWidth: 12,
            color: '#21d683',
            roundedCornerRadius: 10,
          },
        ],
        pointers: [
          {
            type: 'Marker',
            markerShape: 'Circle',
            value: 450,
            color: 'white',
            border: {
              color: '#77e6b4',
              width: 7,
            },
            animation: {
              enable: false
            },
            radius: '94%',
            markerWidth: 17,
            markerHeight: 17,
          },
        ],
      },
    ],
    load: function (args) {
      // custom code start
      var patternTheme3 = location.hash.split('/')[1];
      patternTheme3 = patternTheme3 ? patternTheme3 : 'Material';
      args.gauge.theme = (patternTheme3.charAt(0).toUpperCase() +
        patternTheme3.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
      if (patternTheme3.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 194;
        args.gauge.axes[0].annotations[0].radius = "8%";
      }
      // custom code end
    }
  });
  return pointerGauge3;
}
/**
 * Code for fourth Gauge
 */
function pointerGauge4() {

  var pointerGauge4 = new ej.circulargauge.CircularGauge({
    load: function (args) {
      // custom code start
      var patternTheme4 = location.hash.split('/')[1];
      patternTheme4 = patternTheme4 ? patternTheme4 : 'Material';
      args.gauge.theme = (patternTheme4.charAt(0).toUpperCase() +
      patternTheme4.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
      if (patternTheme4.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 174;
        args.gauge.axes[0].annotations[0].radius = "5%";
      }
      // custom code end
    },
    width: "280px",
    height: "300px",
    axes: [
      {
        annotations: [
          {
            description:'21%',
            content:
              '<div class="gaugeThreeText" style="font-size:30px;font-family: inherit;">21%</div>',
            angle: 1,
            radius: '-5%',
            zIndex: '1',
          },
        ],
        lineStyle: { width: 0 },
        labelStyle: {
          format:'Pointer {value} % ',
          font: {
            size: '0px',
            fontFamily: 'inherit'
          },
        },
        majorTicks: { height: 0 },
        minorTicks: { height: 0 },
        startAngle: 220,
        endAngle: 140,
        minimum: 0,
        maximum: 100,
        radius: '80%',
        ranges: [
          {
            start: 0,
            end: 100,
            radius: '90%',
            startWidth: 25,
            endWidth: 25,
            color: '#E0E0E0',
            roundedCornerRadius: 20,
          },
          {
            start: 70,
            end: 100,
            radius: '90%',
            startWidth: 25,
            endWidth: 25,
            roundedCornerRadius: 20,
            color: '#ed5e4b',
          },
          {
            start: 21,
            end: 75,
            radius: '90%',
            startWidth: 25,
            endWidth: 25,
            color: '#ffe852',
            linearGradient: {
              startValue: '65%',
              endValue: '100%',
              colorStop: [
                { color: '#ffe852', offset: '20%', opacity: 0.9 },
                { color: '#ed5e4b', offset: '100%', opacity: 0.9 },
              ],
            },
          },
        ],
        pointers: [
          {
            type: 'RangeBar',
            radius: '90%',
            value: 21,
            description:'RangeBar pointer value : 21',
            roundedCornerRadius: 10,
            color: '#a8f789',
            pointerWidth: 25,
            animation: {
              enable: false
            }
          },
          {
            type: 'Marker',
            markerShape: 'Circle',
            markerWidth: 30,
            markerHeight: 30,
            color: 'white',
            radius: '80%',
            description:'Marker pointer value :22',
            value: 22,
            animation: {
              enable: false
            }
          },
          {
            type: 'Marker',
            markerShape: 'Circle',
            markerWidth: 18,
            markerHeight: 18,
            color: '#a8f789',
            radius: '80%',
            description:'Marker pointer value: 22',
            value: 22,
            animation: {
              enable: false
            }
          },
        ],
      },
    ],
  });
  return pointerGauge4;
}

/**
 * Code for fifth Gauge
 */
function pointerGauge5() {
  var pointerGauge5 = new ej.circulargauge.CircularGauge({
    width: "280px",
    height: "300px",
    axes: [
      {
        annotations: [
          {
            description:'54%',
            content:
              '<div style="font-size:30px;font-family: inherit;">54%</div>',
            angle: 170,
            zIndex: '1',
            radius: '12%',
          },
        ],
        lineStyle: { width: 0 },
        labelStyle: {
          format:'$ {value} ',
          font: {
            size: '0px',
            fontFamily: 'inherit'
          },
        },
        majorTicks: { height: 0 },
        minorTicks: { height: 0 },
        startAngle: 220,
        endAngle: 140,
        minimum: 0,
        maximum: 100,
        radius: '80%',
        ranges: [
          {
            start: 0,
            end: 100,
            radius: '90%',
            startWidth: 30,
            endWidth: 30,
            color: '#E0E0E0',
            roundedCornerRadius: 20,
          },
          {
            start: 3,
            end: 30,
            radius: '105%',
            startWidth: 10,
            endWidth: 10,
            color: '#a8f789',
            roundedCornerRadius: 10,
          },
          {
            start: 31,
            end: 70,
            radius: '105%',
            startWidth: 10,
            endWidth: 10,
            color: '#ffe852',
            roundedCornerRadius: 10,
          },
          {
            start: 71,
            end: 96,
            radius: '105%',
            startWidth: 10,
            endWidth: 10,
            color: '#ed5e4b',
            roundedCornerRadius: 10,
          },
        ],
        pointers: [
          {
            roundedCornerRadius: 20,
            description:'RangeBar pointer value : 54',
            value: 54,
            type: 'RangeBar',
            radius: '90%',
            color: '#ffe852',
            border: {
              color: 'grey',
              width: 0,
            },
            animation: {
              enable: false,
            },
            pointerWidth: 30,
          },
        ],
      },
    ],
    load: function (args) {
      // custom code start
      var patternTheme5 = location.hash.split('/')[1];
      patternTheme5 = patternTheme5 ? patternTheme5 : 'Material';
      args.gauge.theme = (patternTheme5.charAt(0).toUpperCase() +
        patternTheme5.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
      if (patternTheme5.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 174;
        args.gauge.axes[0].annotations[0].radius = "12%";
      }
      // custom code end
    }
  });
  return pointerGauge5;
}

/**
 * Code for sixth Gauge
*/
function pointerGauge6() {
  var pointerGauge6 = new ej.circulargauge.CircularGauge({
    width: "280px",
    height: "300px",
    axes: [
      {
        annotations: [
          {
            description:'80% Completed',
            content:
              '<div class="annotationText">80% <br/> <div> Completed </div> </div>',
            angle: 10,
            zIndex: '1',
            radius: '7%',
          },
        ],
        lineStyle: { width: 0 },
        labelStyle: {
          format:'{value} % Completed',
          font: {
            size: '0px',
            fontFamily: 'inherit'
          },
        },
        majorTicks: { height: 0 },
        minorTicks: { height: 0 },
        startAngle: 220,
        endAngle: 140,
        minimum: 0,
        maximum: 100,
        radius: '80%',
        pointers: [
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 0,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 1,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 2,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 3,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 4,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 5,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 6,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 7,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 8,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 9,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 10,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 11,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 12,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 13,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 14,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 15,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 16,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 17,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 18,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 19,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 20,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 21,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 22,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 23,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 24,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 25,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 26,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 27,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 28,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 29,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 30,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 31,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 32,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 33,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 34,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 35,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 36,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 37,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 38,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 39,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 40,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 41,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 42,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 43,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 44,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 45,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 46,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 47,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 48,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 49,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 50,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 51,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 52,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            value: 53,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 54',
            value: 54,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 55',
            value: 55,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 56',
            value: 56,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 57',
            value: 57,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 58',
            value: 58,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 59',
            value: 59,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 60',
            value: 60,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 61',
            value: 61,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 62',
            value: 62,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 63',
            value: 63,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 64',
            value: 64,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 65',
            value: 65,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 66',
            value: 66,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 67',
            value: 67,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 68',
            value: 68,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 69',
            value: 69,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 70',
            value: 70,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 71',
            value: 71,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 72',
            value: 72,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 73',
            value: 73,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 74',
            value: 74,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 75',
            value: 75,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 76',
            value: 76,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 77',
            value: 77,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 78',
            value: 78,
            animation: {
              enable: false,

            }
          },
          {
            type: 'Marker',
            markerShape: 'Rectangle',
            markerWidth: 38,
            markerHeight: 3,
            color: '#7edfb4',
            description:'Marker pointer value : 79',
            value: 79,
            animation: {
              enable: false,

            }
          }
        ],
        ranges: [{
          start: 0,
          end: 100,
          startWidth: 37,
          endWidth: 37,
          radius: '105%',
          color: '#f6f7f9'
        }]
      },
    ],
    load: function (args) {
      // custom code start
      var patternTheme6 = location.hash.split('/')[1];
      patternTheme6 = patternTheme6 ? patternTheme6 : 'Material';
      args.gauge.theme = (patternTheme6.charAt(0).toUpperCase() +
        patternTheme6.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/5.3/i, '5').replace(/contrast/i, 'Contrast');
      if (patternTheme6.indexOf("tailwind") != -1 && args.gauge.axes[0].annotations != null) {
        args.gauge.axes[0].annotations[0].angle = 180;
        args.gauge.axes[0].annotations[0].radius = "6%";
      }
      // custom code end
    }
  });
  return pointerGauge6;
}

this.default = function () {
  var firstgauge = new ej.circulargauge.CircularGauge(pointerGauge1());
  firstgauge.appendTo('#container1');
  var secondgauge = new ej.circulargauge.CircularGauge(pointerGauge2());
  secondgauge.appendTo('#container2');
  var thirdgauge = new ej.circulargauge.CircularGauge(pointerGauge3());
  thirdgauge.appendTo('#container3');
  var fourthgauge = new ej.circulargauge.CircularGauge(pointerGauge4());
  fourthgauge.appendTo('#container4');
  var fifthGauge = new ej.circulargauge.CircularGauge(pointerGauge5());
  fifthGauge.appendTo('#container5');
  var sixthGauge = new ej.circulargauge.CircularGauge(pointerGauge6());
  sixthGauge.appendTo('#container6');
};