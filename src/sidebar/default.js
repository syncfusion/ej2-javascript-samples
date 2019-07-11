this.default = function () {
    //sidebar initialization
    var defaultSidebar = new ej.navigations.Sidebar();
    defaultSidebar.appendTo('#default-sidebar');

    //open new tab
    var URL = location.href.replace(location.search, '');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/default/index.html');

    //initialize the radio button
    var leftbutton = new ej.buttons.RadioButton({ label: 'Left', name: 'state', checked: true, change: positionChange });
    leftbutton.appendTo('#left');

    var rightbutton = new ej.buttons.RadioButton({ label: 'Right', name: 'state', change: positionChange });
    rightbutton.appendTo('#right');
    //change the sidebar position

    function positionChange(args) {
        //radio button change event handler
        defaultSidebar.position = (args.event.target.id === "left") ? "Left" : "Right";
        if (args.event.target.id == "right") {
            document.getElementById("hamburger").className += " e-rtl";
        }
        if (args.event.target.id == "left") {
            document.getElementById("hamburger").classList.remove("e-rtl");
        }

    }
    document.getElementById('toggle').onclick = function () {
        defaultSidebar.toggle();
    };
    document.getElementById('close').onclick = function () {
        defaultSidebar.hide();
    };
    document.getElementById('hamburger').onclick = function () {
        defaultSidebar.show();
    };


};