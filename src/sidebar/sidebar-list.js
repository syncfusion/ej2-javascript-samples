this.default = function () {

    //Toolbar component template element specification
    var folderEle = '<div class= "e-folder"><div class= "e-folder-name">Language</div></div>';
    //ListView component template element specification
    var listTemplate = '<div class="list-wrapper"><span class="${pic} e-avatar e-avatar-xsmall e-avatar-circle"></span>' +
                        '<span class="text e-text-content">${text}</span></div>';
    //ListView data source initialization
    var ListData = [
        { id: "1", text: "JavaScript", pic: "javascript", 
            description: "JavaScript (JS) is an interpreted computer programming language. " +
            "It was originally implemented as part of web browsers so that client-side scripts" + 
            "could interact with the user, control the browser, communicate asynchronously, and" +
            "alter the document content that was displayed. However, it has recently" +
            "become common in both game development and the creation of desktop applications." },
        { id: "2", text: "TypeScript", pic: "typescript", 
            description: "It is a typed superset of JavaScript that compiles to plain JavaScript." + 
            "TypeScript is an open-source, object-oriented programing language. It contains all elements of JavaScript" + 
            "It is a language designed for large-scale JavaScript application development, which can be executed on any" + 
            "browser, any Host, and any Operating System. TypeScript is a language as well as a set of tools." +
            " TypeScript is the ES6 version of JavaScript with some additional features." },
        { id: "3", text: "Angular", pic: "angular", 
            description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript." +
            " Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript" +
            " libraries that you import into your applications." },
        { id: "4", text: "React", pic: "react",
            description: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces." +
            " It lets you compose complex UIs from small and isolated pieces of code called “components”." +
            " It can also render on the server using Node." },
        { id: "5", text: "Vue", pic: "vue", 
            description: "A progressive framework for building user interfaces. It is incrementally adoptable." +
            " The core library is focused on the view layer only and is easy to pick up and integrate with other" +
            " libraries or existing projects. On the other hand, Vue is also perfectly capable of powering" +
            " sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries." }
    ];
    //Toolbar component rendering code blocks
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: ToolbarCliked,
        items: [
            { prefixIcon: "e-tbar-menu-icon tb-icons", tooltipText: "Menu" },
            { template: folderEle }
        ]
    });
    toolbarObj.appendTo("#listToolbar");
    var sidebarObj = new ej.navigations.Sidebar({
        width: "250px",
        target: ".maincontent",
        type: "Auto",
        isOpen: true
    });
    sidebarObj.appendTo("#listSidebar");
    var listObj = new ej.lists.ListView({
        dataSource: ListData,
        cssClass: "e-template-list",
        fields: { id: "id", text: "text" },
        template: listTemplate,
        select: OnSelect
    });
    listObj.appendTo("#listSidebarList");
    function ToolbarCliked(args) {
        if(args.item.tooltipText == "Menu") {
            sidebarObj.toggle();
        }
    }
    function OnSelect(args) {
        document.getElementById("listContent").innerHTML = args.data.description;
    }
};
