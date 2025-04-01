/**
 * Tooltip default sample
 */
this.default = function () {

    //Initialize Button component
    var button = new ej.buttons.Button();
    var isMobile = window.matchMedia('(max-width:550px)').matches;
    //Render initialized Button component
    button.appendTo('#Tooltip');

    //Initialize Tooltip component
    var tooltip = new ej.popups.Tooltip({

        //Set tooltip content
        content: "Let's go green to save the planet!!",
        width: isMobile ? 110 : 'auto'

    });

    //Render initialized Tooltip component
    tooltip.appendTo('#Tooltip');

    //Handle tooltip position based on drop-down value change
    document.querySelector('#positions').addEventListener('change', function () {
        tooltip.position = this.value;

    });
};
