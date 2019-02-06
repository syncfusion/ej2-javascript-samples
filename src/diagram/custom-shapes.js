/**
 * Getting started -  Html Node
 */

//Add Gauge control to Diagram.
function getHtmlContent() {
    var div = document.getElementById('gauge');
    var circularGauge = new ej.circulargauge.CircularGauge({
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        axes: [{
            lineStyle: { width: 10, color: 'transparent' },
            labelStyle: {
                position: 'Inside', useRangeColor: false,
                font: { size: '12px', fontFamily: 'Roboto', fontStyle: 'Regular' }
            }, majorTicks: { height: 10, offset: 5, color: '#9E9E9E' }, minorTicks: { height: 0 },
            annotations: [{
                content: '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
                radius: '30%', angle: 0, zIndex: '1'
            }, {
                content: '<div><span style="font-size:20px; color:#424242; font-family:Regular">65 MPH</span></div>',
                radius: '40%', angle: 180, zIndex: '1'
            }],
            startAngle: 210, endAngle: 150, minimum: 0, maximum: 120, radius: '80%',
            ranges: [{ start: 0, end: 40, color: '#30B32D' }, { start: 40, end: 80, color: '#FFDD00' },
            { start: 80, end: 120, color: '#F03E3E' }],
            pointers: [{
                value: 65, radius: '60%', color: '#757575', pointerWidth: 8,
                cap: { radius: 7, color: '#757575' }, needleTail: { length: '18%', color: '#757575' }
            }]
        }]
    });
    circularGauge.appendTo('#gauge');
    return div;
}
// tslint:disable-next-line:max-func-body-length
this.default = function () {
    var htmlcontent = '<div id="gauge" style="height:100%; width:100%; overflow:hidden;"> </div>';
    var shape = { type: 'HTML', content: htmlcontent };
    var node1 = {
        id: 'node', offsetX: 450, offsetY: 200, width: 300, height: 300, shape: shape
    };
    //initialize the diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '640px', nodes: [node1], snapSettings: { constraints: 0 },
        created: function() { diagram.fitToPage(); }
    });
    diagram.appendTo('#diagram');
    getHtmlContent();
};
