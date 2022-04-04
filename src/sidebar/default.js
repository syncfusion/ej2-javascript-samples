this.default = function () {
    //Toolbar component Template elements
    var folderEle = '<div class= "e-folder"><div class= "e-folder-name">Webmail</div></div>';
    var userNameEle = '<div><div class= "e-user-name">John</div></div>';
    var imageEle = '<div class= "image-container"><img height="20px" src="src/sidebar/images/user.svg" alt="John"></img></div>';
    //ListView data source initialization
    var inboxData = [
        { id: "1", text: "Albert Lives", subject: "Business dinner invitation", message: "Hello Uta Morgan," },
        { id: "2", text: "Ila Russo", subject: "Opening for Sales Manager", message: "Hello Jelani Moreno," },
        { id: "3", text: "Garth Owen", subject: "Application for Job Title", message: "Hello Ila Russo," },
        { id: "4", text: "Ursula Patterson", subject: "Programmer Position Application", message: "Hello Kerry Best," },
        { id: "5", text: "Nichole Rivas", subject: "Annual Conference", message: "Hi Igor Mccoy," }
    ];
    var sentItemData = [
        { id: "11", text: "Gemma Roberson", subject: "Apology for late response email", message: "Hello Colette Wooten," },
        { id: "12", text: "Ann Garza", subject: "Application for Job Title", message: "Hello Kerry Best," },
        { id: "13", text: "Alfonso Burnett", subject: "Anything I can help with", message: "Hello Otto Ashley," },
        { id: "14", text: "Rogan Espinoza", subject: "Assistant Marketing Department", message: "Hello Kerry Best," },
        { id: "15", text: "Sierra Kerr", subject: "Application for Transfer", message: "Hi Halee Lindsey," }
    ];
    var draftsData = [
        { id: "21", text: "Chaim Barber", subject: "We launched new Product!", message: "Hello Cameran Roth," },
        { id: "22", text: "Lara Knox", subject: "Request for meeting appointment email", message: "Hello Mona Bates," },
        { id: "23", text: "Igor Mccoy", subject: "Thank you", message: "Hello Kerry Best," },
        { id: "24", text: "Patricia Boyle", subject: "Sales Team", message: "Hello Amelia Curtis," },
        { id: "25", text: "Zachery Peters", subject: "Today’s meeting schedule", message: "Hi Leslie Juarez," }
    ];
    var deleteData = [
        { id: "31", text: "Elijah Berry", subject: "Apology marketing email", message: "Dear Kerry Best," },
        { id: "32", text: "Cameran Newman", subject: "Business appointment request", message: "Hello Mona Bates," },
        { id: "33", text: "Amity Slater", subject: "Business dinner invitation", message: "Hello Kerry Best," },
        { id: "34", text: "Leo Cooley", subject: "Apology Email for Wrong Order", message: "Hi Athena Mcintosh," },
        { id: "35", text: "Halee Lindsey", subject: "Apology for late response email", message: "Hi Fletcher Beck," }
    ];
    var outBoxData = [
        { id: "41", text: "Willow Frye", subject: "Out of Office", message: "Hello Maggy Randall," },
        { id: "42", text: "Regan Haney", subject: "Project Manager Interview", message: "Hello Kerry Best," },
        { id: "43", text: "Stella Calderon", subject: "Proposition for a new business", message: "Hello Gail Pierce," },
        { id: "44", text: "Xanthus Harmon", subject: "Performance appraisal announcement", message: "Dear Clare Heath," },
        { id: "45", text: "Cheyenne Cline", subject: "Office Holiday", message: "Hi Fletcher Beck," }
    ];
    var treeData = [
        { id: "1", name: "Favorites", hasChild: true, expanded: true },
        { id: "2", name: "Inbox", selected: true, pid: "1" },
        { id: "3", name: "Sent Items", pid: "1" },
        { id: "5", name: "John", hasChild: true, expanded: true },
        { id: "6", name: "Inbox", pid: "5" },
        { id: "7", name: "Drafts", pid: "5" },
        { id: "8", name: "Deleted Items", pid: "5" },
        { id: "9", name: "Sent Items", pid: "5" },
        { id: "12", name: "Outbox", pid: "5" },
    ];
    //ListView component template element sepcification
    var listTemplate = '<div class="e-list-wrapper e-list-avatar e-list-multi-line">' +
                          '<span class="e-avatar e-avatar-circle e-icon sf-icon-profile"></span>' +
                          '<span class="e-list-item-header">${text}</span>' +
                          '<span class="e-list-content">${subject}</span>' +
                          '<span class="e-list-text">${message}</span>' +
                          '</div>';
    //Toolbar component rendering code blocks
    var toolbarObj = new ej.navigations.Toolbar({
        cssClass: "defaultToolbar",
        clicked: ToolbarCliked,
        items: [
            { prefixIcon: "e-tbar-menu-icon tb-icons", tooltipText: "Menu" },
            { template: folderEle },
            { align: 'Right', template: userNameEle },
            { cssClass: "e-custom", align: 'Right', template: imageEle }
        ]
    });
    toolbarObj.appendTo("#defaultToolbar");
    //ListView component rendering code blocks
    var listObj = new ej.lists.ListView({
        cssClass: "e-list-template",
        dataSource: inboxData,
        fields: { id: "id", text: "text" },
        select: OnListSelect,
        template: listTemplate
    });
    listObj.appendTo("#listView");
    var sideObj = new ej.navigations.Sidebar({
        width: "260px",
        target: ".maincontent",        
        position: 'Left'
    });
    sideObj.appendTo("#defaultSidebar");
    var treeObj = new ej.navigations.TreeView({
        nodeSelecting: BeforeSelect,
        nodeSelected: OnSelect,
        fields: { dataSource: treeData, id: "id", text: "name", selected: "selected", parentID: "pid", hasChildren: "hasChild", expanded: "expanded" }
    });
    treeObj.appendTo("#defaultTree");
    function ToolbarCliked(args) {
        if(args.item.tooltipText == "Menu") {
            sideObj.toggle();
        }
    }
    function OnListSelect(args) {
        args.item.classList.remove("e-active");
    }
    function BeforeSelect(args) {
        if (args.nodeData.text == "Favorites" || args.nodeData.text == "John") {
            args.cancel = true;
        }
    }
    function OnSelect(args) {
        if (args.nodeData.text == "Inbox")
        {
            listObj.dataSource = inboxData;
        }
        else if (args.nodeData.text == "Sent Items")
        {
            listObj.dataSource = sentItemData;
        }
        else if (args.nodeData.text == "Drafts")
        {
            listObj.dataSource = draftsData;
        }
        else if (args.nodeData.text == "Deleted Items")
        {
            listObj.dataSource = deleteData;
        }
        else if (args.nodeData.text == "Outbox")
        {
            listObj.dataSource = outBoxData;
        }
        listObj.dataBind();
    }
};