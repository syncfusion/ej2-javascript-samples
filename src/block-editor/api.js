
this.default = function() {
    var focusedBlock;
    var apiBlockEditor = new ej.blockeditor.BlockEditor({
        blocks: window.blockDataAPI,
        focus: function(args) {
            focusedBlock = args.blockId;
        }
    });
    
    apiBlockEditor.appendTo('#api-blockeditor');

    var readonly = new ej.buttons.CheckBox({
        checked: false,
        change: function (args) {
            apiBlockEditor.readOnly = args.checked;
        }
    });
    readonly.appendTo('#readonly');

    var enableDragDrop = new ej.buttons.CheckBox({
        checked: true,
        change: function (args) {
            apiBlockEditor.enableDragAndDrop = args.checked;
        }
    });
    enableDragDrop.appendTo('#enableDragDrop');

    document.getElementById('getJson').onclick = function () {
        var jsonData = apiBlockEditor.getDataAsJson(focusedBlock);
        alert(JSON.stringify(jsonData, null, 2));
    };

    document.getElementById('getHtml').onclick = function () {
        var htmlData = apiBlockEditor.getDataAsHtml();
        alert(htmlData);
    };

    document.getElementById('getBlockCount').onclick = function () {
        alert('Total blocks: ' + apiBlockEditor.getBlockCount());
    };

    document.getElementById('selectall').onclick = function () {
        apiBlockEditor.selectAllBlocks();
    };

    document.getElementById('print').onclick = function () {
        apiBlockEditor.print();
    };

    document.getElementById('focusIn').onclick = function () {
        apiBlockEditor.focusIn();
    };

    document.getElementById('focusOut').onclick = function () {
        apiBlockEditor.focusOut();
    };
};