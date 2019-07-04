this.default = function () {
    //Sidebar initialization
    var sidebar = new ej.navigations.Sidebar();
    sidebar.appendTo('#default-sidebar');

    // Toggle button for Sidebar open/close.
    var togglesidebar = new ej.buttons.Button({ cssClass: 'e-info', isToggle: true });
    togglesidebar.appendTo('#togglesidebar');

    togglesidebar.element.onclick = function () {
        sidebar.toggle();
    };

    // open new tab
    var URL = location.href.replace(location.search, '');
    document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/api/index.html');

    // Toggle button for closeOnDocumentClick property
    var positionButton = new ej.buttons.Button({ cssClass: 'e-info', isToggle: true });
    positionButton.appendTo('#positionbutton');

    // Toggle button for closeOnDocumentClick property
    var documentclick = new ej.buttons.Button({ cssClass: 'e-info', isToggle: true });
    documentclick.appendTo('#documentclick');

    // Toggle button for backdrop property
    var backdrop = new ej.buttons.Button({ cssClass: 'e-info', isToggle: true });
    backdrop.appendTo('#backdrop');

    //Toggle button click event handler
    positionButton.element.onclick = function () {
        if (positionButton.element.classList.contains('e-active')) {
            positionButton.content = 'Left';
            sidebar.position = "Right";
            document.getElementById("hamburger").className += " e-rtl";
        } else {
            positionButton.content = 'Right';
            sidebar.position = "Left";
            document.getElementById("hamburger").classList.remove("e-rtl");
        }
    };

    documentclick.element.onclick = function () {
        if (documentclick.element.classList.contains('e-active')) {
            documentclick.content = 'False';
            //enable the closeOnDocumentClick property
            sidebar.closeOnDocumentClick = true;
        } else {
            documentclick.content = 'True';
            //disable the closeOnDocumentClick property
            sidebar.closeOnDocumentClick = false;
        }
    };

    backdrop.element.onclick = function () {
        if (backdrop.element.classList.contains('e-active')) {
            backdrop.content = 'False';
            //enable the backdrop property
            sidebar.showBackdrop = true;
        } else {
            backdrop.content = 'True';
            //disable the backdrop property
            sidebar.showBackdrop = false;
        }
    };

    var dropDownInstance = new ej.dropdowns.DropDownList({
        index: 3,
        placeholder: 'Select a type',
        popupHeight: '200px',
        cssClass: 'right',
        // bind the change event
        change: onChange
    });
    dropDownInstance.appendTo('#types');

    function onChange() {
        //dropdown change event handler
        sidebar.type = dropDownInstance.value;
    }
    // Close the Sidebar
    document.getElementById('close').onclick = function () {
        sidebar.hide();
    };
   //open the sidebar
    document.getElementById('hamburger').onclick = function () {
        sidebar.show();
    };

};


