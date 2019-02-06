/**
 *  Sample for default functionalities
 */
this.default = function () {
    var splitObj1 = new ej.layouts.Splitter({
        height: '110px',
        paneSettings: [
            { size: '25%', min: '60px' },
            { size: '50%', min: '60px' },
            { size: '25%', min: '60px' }
        ],
        width: '100%',
        separatorSize: 4
    });
    splitObj1.appendTo('#horizontal');
    var splitObj2 = new ej.layouts.Splitter({
        height: '240px',
        paneSettings: [
            { size: '30%', min: '60px' },
            { size: '40%', min: '60px' },
            { size: '30%', min: '60px' }
        ],
        width: '100%',
        orientation: 'Vertical',
        separatorSize: 4
    });
    splitObj2.appendTo('#vertical');
};