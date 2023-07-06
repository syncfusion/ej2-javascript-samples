this.default = function () {
    // Toggle button for Sidebar open/close.
    var togglesidebar = new ej.buttons.Button({ 
        cssClass: 'e-primary inline-element right',
        isToggle: true
    });
    togglesidebar.appendTo('#togglesidebar');

    //Position Toggle button for Sidebar open/close.
    var positionBtn = new ej.buttons.Button({ 
        cssClass: 'e-primary inline-element right',
        isToggle: true,
        content: "Left"
    });
    positionBtn.appendTo('#positionBtn');

    // Document Toggle button for Sidebar open/close.
    var docBtn = new ej.buttons.Button({ 
        cssClass: 'e-primary inline-element right',
        isToggle: true,
        content: "False",
    });
    docBtn.appendTo('#documentElement');

    // Document Toggle button for Sidebar open/close.
    var backDropElement = new ej.buttons.Button({ 
        cssClass: 'e-primary inline-element right',
        isToggle: true,
        content: "False",
    });
    backDropElement.appendTo('#backDropElement');

    var dropdownObj = new ej.dropdowns.DropDownList({
        //set the value by specifying the index
        index: 3,
        popupHeight: "200px",
        cssClass: "e-textbox right",
        // bind the change event
        change: OnChange
    });
    dropdownObj.appendTo('#types');

    //Sidebar component initialization
    var sidebarObj = new ej.navigations.Sidebar({
        width: "220px",
        target: ".maincontent",
        closeOnDocumentClick: false,
        showBackdrop: false
    });
    sidebarObj.appendTo("#apiSidebar");
    //click event for hamburger
    document.getElementById('hamburger').onclick = function() {
        ToggleBtnClick();
    };
    //click event for position
    document.getElementById('positionBtn').onclick = function() {
        PositionBtnClick();
    };
    //click event for document click option
    document.getElementById('documentElement').onclick = function() {
        DocBtnClick();
    };
    //click event for document click option
    document.getElementById('backDropElement').onclick = function() {
        BackBtnClick();
    };
    //click event for sidebar close
    document.getElementById('close').onclick = function() {
        sidebarObj.hide();
        if (sidebarObj.showBackdrop == true){
            sidebarObj.showBackdrop = false;
        }
    };
    var sidebarOpened = true;
    //click event for sidebar close
    document.getElementById('togglesidebar').onclick = function() {
        sidebarObj.toggle();
        if (document.querySelector("#apiSidebar").classList.contains('e-open')) {
            sidebarOpened = true;
        } else {
            sidebarOpened = false;
        }
        if (backDropElement.content == "True") {
            sidebarObj.showBackdrop = true;
        }
    };
    function BackBtnClick() {
        if (backDropElement.content == "True") {
            backDropElement.content = "False";
            sidebarObj.showBackdrop = false;
        } else {
            backDropElement.content = "True";
            if (sidebarOpened) {
                sidebarObj.showBackdrop = true;
            }
        }
    }
    function ToggleBtnClick() {
        sidebarObj.toggle();
    }
    function PositionBtnClick() {
        if (positionBtn.content == "Right") {
            positionBtn.content = "Left";
            sidebarObj.position = "Left";
        } else {
            positionBtn.content = "Right";
            sidebarObj.position = "Right";
        }
        sidebarObj.dataBind();
    }
    function DocBtnClick() {
        if (docBtn.content == "False") {
            docBtn.content = "True";
            sidebarObj.closeOnDocumentClick = true;
        } else {
            docBtn.content = "False";
            sidebarObj.closeOnDocumentClick = false;
        }
        sidebarObj.dataBind();
    }
    function OnChange(args) {
        sidebarObj.type = args.value;
        sidebarObj.dataBind();
    }
};


