/**
 *  Sample for expand-collapse in splitter
 */
this.default = function () {
    var splitObj = new ej.layouts.Splitter({
        height: '385px',
        paneSettings: [
            { size: '48%', collapsible: true },
			{ collapsible: true }
        ],
		separatorSize: 3,
        width: '100%'
    });
    splitObj.appendTo('#splitter');
    var splitObj1 = new ej.layouts.Splitter({
        paneSettings: [
            { size: '50%', collapsible: true },
            { collapsible: true }
        ],
		separatorSize: 3,
        orientation: 'Vertical'
    });
    splitObj1.appendTo('#verticalSplitter');
};