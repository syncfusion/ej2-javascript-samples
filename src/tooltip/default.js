/**
 * Tooltip default sample
 */
this.default = function () {

    //Initialize Button component
    var button = new ej.buttons.Button();

    //Render initialized Button component
    button.appendTo('#Tooltip');

    //Initialize Tooltip component
    var tooltip = new ej.popups.Tooltip({

        //Set tooltip content
        content: 'Lets go green & Save Earth !!!'

    });

    //Render initialized Tooltip component
    tooltip.appendTo('#Tooltip');

    //Handle tooltip position based on drop-down value change
    document.querySelector('#positions').addEventListener('change', function () {
        tooltip.position = this.value;

    });

};