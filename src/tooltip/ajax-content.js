/**
 * Loading ajax content sample
 */
this.default = function () {

    //Initialize ListView component
    var listObj = new ej.lists.ListView({

        //Set data to datasource property
        dataSource: [
            { id: '1', text: 'Australia' },
            { id: '2', text: 'Bhutan' },
            { id: '3', text: 'China' },
            { id: '4', text: 'Cuba' },
            { id: '5', text: 'India' },
            { id: '6', text: 'Switzerland' },
            { id: '7', text: 'United States' }
        ],

        //Map appropriate columns to fields property
        fields: { text: 'text', tooltip: 'id' }

    });

    //Render initialized ListView component
    listObj.appendTo('#countrylist');

    //Initialize Tooltip component
    var tooltip = new ej.popups.Tooltip({

        //Set tooltip content
        content: 'Loading...',
		
		cssClass: 'e-ajax-content',

        //Set tooltip target
        target: '#countrylist [title]',

        //Set tooltip position
        position: 'RightCenter',

        //Raise beforeRender event
        beforeRender: onBeforeRender

    });

    //Render initialized Tooltip component
    tooltip.appendTo('#Tooltip');

};

/**
 * Process tooltip ajax content.
 */

function onBeforeRender(args) {
    var _this = this;
    this.content = 'Loading...';
    this.dataBind();
    var fetchApi = new ej.base.Fetch('./src/tooltip/tooltipdata.json', 'GET');
    fetchApi.send().then(function (result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i].Id === args.target.getAttribute('data-content')) {
                /* tslint:disable */
                _this.content = "<div class='contentWrap'><span class=" + result[i].Class + "></span><div class='def'>" + result[i].Sports + "</div></div>";
                /* tslint:enable */

            }
        }
        _this.dataBind();
    }, function (reason) {
        _this.content = reason.message;
        _this.dataBind();
    });
}