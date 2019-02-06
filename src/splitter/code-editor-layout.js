/**
 *  Sample for code editor layout
 */
this.default = function () {
    var splitObj1 = new ej.layouts.Splitter({
        height: '220px',
        paneSettings: [
            { size: '29%', min: '23%' },
            { size: '20%', min: '15%' },
            { size: '35%', min: '35%' }
        ],
        width: '100%'
    });
    splitObj1.appendTo('#splitter1');
    var splitObj2 = new ej.layouts.Splitter({
        height: '400px',
        paneSettings: [
            { size: '53%', min: '30%' }
        ],
        orientation: 'Vertical'
    });
    splitObj2.appendTo('#splitter2');
};