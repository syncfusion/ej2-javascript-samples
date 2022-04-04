this.default = function () {
    //Toolbar component Template elements
    var folderEle = '<div class= "e-folder"><div class= "e-folder-name">JavaScript (ES5) Documentation</div></div>';
    //ListView data source initialization
    var ListData = [
        { id: "1", text: "Grid", iconcss: "sb-icons icon-grid e-sb-icon control-icon", 
            description: "The JavaScript (ES5) DataGrid is a feature-rich component useful for" +
            "displaying data in a tabular format. Its wide range of functionalities" + 
            "includes data binding, editing, Excel-like filtering, custom sorting," +
            "aggregating rows, selection, and support for Excel, CSV, and PDF formats." +
            "It loads millions of records in just a second. It has flexible editing and intuitive record selection modes." + 
            "Also, it has seamless data exporting options like PDF, CSV, and Excel." },
        { id: "2", text: "Chart", iconcss: "sb-icons icon-chart e-sb-icon control-icon", 
            description: "The JavaScript (ES5) Charts is a well-crafted charting component to visualize data." + 
            "It contains a rich UI gallery of 30+ charts and graphs, ranging from line to financial" + 
            " that cater to all charting scenarios. Its high performance helps to render large amounts of data quickly." + 
            "It also comes with features such as zooming, panning, tooltip, crosshair, trackball, highlight, and selection" },
        { id: "3", text: "Datepicker", iconcss: "sb-icons icon-datepicker e-sb-icon control-icon", 
            description: "The JavaScript (ES5) DatePicker is a lightweight and mobile-friendly component that allows" +
            "end-users to enter or select a date value. It has month, year, and decade view options to quickly" +
            "navigate to the desired date. It supports minimum dates, maximum dates, and disabled dates to restrict the date selection." +
            "It has built-in features such as validation, custom date formats, range restriction, and disable dates to enhance the progressive usage." },
        { id: "4", text: "Dialog", iconcss: "sb-icons icon-dialog e-sb-icon control-icon",
            description: "The JavaScript (ES5) Dialog is a useful user interface (UI) component for informing users" +
            "about critical information, errors, warnings, and questions, as well as confirming decisions and collecting" +
            "input from users. The component has a rich set of built-in features such as action buttons, positioning, animations," + 
            "dragging, resizing, templating, and more with mobile dialog support. The JavaScript (ES5) dialog provides two different types:" +
            "modal dialogs and non-modal dialogs (modeless) based on interactions." },
        { id: "5", text: "Dropdown List", iconcss: "sb-icons icon-dropdownlist e-sb-icon control-icon", 
            description: "The JavaScript (ES5) Dropdown List is a quick replacement of the HTML select tags." +
            "It has a rich appearance and allows users to select a single value that is non-editable" +
            " from a list of predefined values. It has several out-of-the-box features, such as data binding," +
            " filtering, grouping, UI customization, accessibility, and preselected values." }
    ];
    //Toolbar component rendering code blocks
    var toolbarObj = new ej.navigations.Toolbar({
        cssClass: "dockToolbar",
        clicked: ToolbarCliked,
        items: [
            { prefixIcon: "e-tbar-menu-icon tb-icons", tooltipText: "Menu" },
            { template: folderEle }
        ]
    });
    toolbarObj.appendTo("#dockToolbar");
    var sidebarObj = new ej.navigations.Sidebar({
        width: "220px",
        dockSize: "60px",
        target: ".maincontent",
        enableDock: true,
        type: 'Auto'
    });
    sidebarObj.appendTo("#dockSidebar");
    var listObj = new ej.lists.ListView({
        dataSource: ListData,
        cssClass: "e-template-list",
        showIcon: true,
        fields: { id: "id", text: "text", iconCss: "iconcss" },
        select: OnSelect
    });
    listObj.appendTo("#dockList");
    function ToolbarCliked(args) {
        if(args.item.tooltipText == "Menu") {
            sidebarObj.toggle();
        }
    }
    function OnSelect(args) {
        document.getElementById("dockContent").innerHTML =args.data.description;
    }
};