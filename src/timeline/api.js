/**
 *  Sample for Timeline API's
 */
this.default = function () {

    var travelItenary = [
        { date: "May 13, 2024", details: "Flight Booking: Reserving airline tickets", icon: "sf-icon-onward" },
        { date: "June 20, 2024", details: "Hotel Accommodation: Booking lodging for the trip", icon: "sf-icon-accomodation" },
        { date: "July 2, 2024", details: "Excursion Plans: Organized visits to popular attractions", icon: "sf-icon-explore" },
        { date: "Aug 14, 2024", details: "Return Journey: Flight Confirmation", icon: "sf-icon-return" }
    ];

    var timelineItems = travelItenary.map(function(item) {
        return {
            dotCss: item.icon,
            content: item.date,
            oppositeContent: item.details
        };
    });

    /* Timeline control */
    var apiTimeline = new ej.layouts.Timeline({
        items: timelineItems
    });
    apiTimeline.appendTo('#timeline');

    /* Orientation Dropdown */
    var orientationList = new ej.dropdowns.DropDownList({
        index: 1,
        popupHeight: '200px',
        change: function() {
            apiTimeline.orientation = orientationList.value;
        }
    });
    orientationList.appendTo('#timeline-orientation');

    /* Alignment Dropdown */
    var alignmentList = new ej.dropdowns.DropDownList({
        index: 1,
        popupHeight: '200px',
        change: function() {
            apiTimeline.align = alignmentList.value;
        }
    });
    alignmentList.appendTo('#timeline-alignment');

    /* Opposite switch */
    var oppositeSwitch = new ej.buttons.Switch({
        checked: true,
        change: function(args) { 
            handleTogglers(args, 'oppositeContent');
        }
    });
    oppositeSwitch.appendTo('#opposite');

    /* Icon switch */
    var iconSwitch = new ej.buttons.Switch({
        checked: true,
        change: function(args) { 
            handleTogglers(args, 'dotCss');
        }
    });
    iconSwitch.appendTo('#icon');
    
    /* Reverse switch */
    var reverseSwitch = new ej.buttons.Switch({
        checked: false,
        change: function(args) {
            apiTimeline.reverse = args.checked;
        }
    });
    reverseSwitch.appendTo('#reverse');

    function handleTogglers(args, prop) {
        apiTimeline.items.forEach(function(item, index) {
            item[prop] = args.checked ? timelineItems[index][prop] : "";
        });
    }

};