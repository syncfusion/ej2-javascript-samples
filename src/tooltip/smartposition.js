/**
 * Tooltip smart position sample
 */
this.default = function () {

    //Initialize Tooltip component
    var tooltip = new ej.popups.Tooltip({

        //Set tooltip content
        content: 'Drag me anywhere, to start walking with me !!!',

        //Set tooltip offsetX
        offsetX: -15,

        //Set tooltip target
        target: '#demoSmart',

        //Set tooltip animation
        animation: { open: { effect: 'None' }, close: { effect: 'None' } }

    });

    //Render initialized Tooltip component
    tooltip.appendTo('#targetContainer');

    var ele = document.getElementById('demoSmart');
    var drag = new ej.base.Draggable(ele, {
        clone: false,
        dragArea: '#targetContainer',
        drag: function (args) {
            if (args.element.getAttribute('data-tooltip-id') === null) {
                tooltip.open(args.element);
            }
            else {
                tooltip.refresh(args.element);
            }
        },
        dragStart: function (args) {
            if (args.element.getAttribute('data-tooltip-id') !== null) {
                return;
            }
            tooltip.open(args.element);
        },
        dragStop: function (args) {
            tooltip.close();
        }
    });
};