/**
 *  Sample for outlook style using splitter
 */
this.default = function () {
    var rteObj;
    var splitObj1 = new ej.layouts.Splitter({
        height: '493px',
        paneSettings: [
            { size: '28%', min: '27%' },
            { size: '33%', min: '23%' },
            { size: '37%', min: '30%' }
        ],
        resizing: onSplitterResize,
        width: '100%'
    });
    splitObj1.appendTo('#splitter1');
    var inputobj1 = new ej.inputs.TextBox({});
    inputobj1.appendTo('#firstname');
    var inputobj2 = new ej.inputs.TextBox({});
    inputobj2.appendTo('#lastname');
    var inputobj3 = new ej.inputs.TextBox({});
    inputobj3.appendTo('#subject');
    // Data source for TreeView component
    var mailBox = [
        { id: 1, name: 'Favorites', hasChild: true },
        { id: 2, pid: 1, name: 'Sales Reports', count: '4' },
        { id: 3, pid: 1, name: 'Sent Items' },
        { id: 4, pid: 1, name: 'Marketing Reports ', count: '6' },
        { id: 5, name: 'Andrew Fuller', hasChild: true, expanded: true },
        { id: 6, pid: 5, name: 'Inbox', selected: true, count: '20' },
        { id: 7, pid: 5, name: 'Drafts', count: '5' },
        { id: 15, pid: 5, name: 'Archive' },
        { id: 8, pid: 5, name: 'Deleted Items' },
        { id: 9, pid: 5, name: 'Sent Items' },
        { id: 10, pid: 5, name: 'Sales Reports', count: '4' },
        { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },
        { id: 12, pid: 5, name: 'Outbox' },
        { id: 13, pid: 5, name: 'Junk Email' },
        { id: 14, pid: 5, name: 'RSS Feed' },
        { id: 15, pid: 5, name: 'Trash' }
    ];
    // Render the TreeView using template option
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
        nodeTemplate: '#treeTemplate',
    });
    treeObj.appendTo('#tree');
    // tslint:disable:max-line-length
    //Define an array of JSON data
    var dataSource = [
        { Name: 'Selma Tally', content: '<div><div class="status">Apology marketing email</div><div id="list-message">Hello Ananya Singleton</div>', id: '1', order: 0 },
        { Name: 'Illa Russo', content: '<div><div class="status">Annual conference</div><div id="list-message">Hi jeani Moresa</div></div>', id: '4', order: 0 },
        { Name: 'Camden Macmellon', content: '<div><div class="status">Reference request- Camden hester</div><div id="list-message">Hello Kerry Best,</div></div>', order: 0 },
        { Name: 'Garth Owen', content: '<div><div class="status">Application for job Title</div><div id="list-message">Hello Illa Russo</div></div>', id: '2', order: 0 },
        { Name: 'Ursula Patterson', content: '<div><div class="status">Programmaer Position Applicant</div><div id="list-message">Hello Kerry best,</div></div>', id: '3', order: 0 }
    ];
    // Initialize ListView component
    var listObj = new ej.lists.ListView({
        //Set defined data to dataSource property
        dataSource: dataSource,
        cssClass: 'e-list-template',
        //Map the appropriate columns to fields property
        fields: { text: 'Name' },
        //Set customized list template
        template: '<div class="settings e-list-wrapper e-list-multi-line e-list-avatar">' +
            '<span class="e-list-item-header">${Name}</span>' +
            '<span class="e-list-content">${content}</span>' +
            '</div>'
    });
    //Render initialized ListView component
    listObj.appendTo('#groupedList');
    var button1 = new ej.buttons.Button({ isPrimary: true });
    button1.appendTo('#rteSubmit');
    var button2 = new ej.buttons.Button();
    button2.appendTo('#rteCancel');
    var defaultRTE = new ej.richtexteditor.RichTextEditor({ height: '262px', created: onRteCreated });
    defaultRTE.appendTo('#defaultRTE');

    function onRteCreated() {
        rteObj = this;
    }

    function onSplitterResize() {
        rteObj.refreshUI();
    }
};