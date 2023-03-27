/**
 * Rich Text Editor mention integration sample
 */
 
 this.default = function() {
 
    window.formatList = [
        { formatName: "Text", command: "P", formatType: "Basic blocks", icon: "e-btn-icon e-text e-icons", description: "Writing with paragraphs"},
        { formatName: "Quotation", command: "BlockQuote", formatType: "Basic blocks", icon: "e-icons block-view", description: "Insert a quote or citation" },
        { formatName: "Heading 1", command: "H1", formatType: "Basic blocks", icon: "e-icons h1-view", description: "Use this for a top level heading"},
        { formatName: "Heading 2", command: "H2", formatType: "Basic blocks", icon: "e-icons h2-view", description: "Use this for key sections"},
        { formatName: "Heading 3", command: "H3", formatType: "Basic blocks", icon: "e-icons h3-view",description: "Use this for sub sections and group headings" },
        { formatName: "Heading 4", command: "H4", formatType: "Basic blocks", icon: "e-icons h4-view", description: "Use this for deep headings"},
        { formatName: "Numbered list", command: "OL", formatType: "Basic blocks", icon: "e-icons e-list-ordered icon", description: "Create an ordered list"},
        { formatName: "Bulleted list", command: "UL", formatType: "Basic blocks", icon: "e-icons e-list-unordered icon", description: "Create an unordered list"},
        { formatName: "Table", command: "CreateTable", formatType: "Basic blocks",icon: "e-icons e-table icon", description: "Insert a table"},
        { formatName: "Emoji", command: "Emoji", formatType: "Inline", icon: "e-icons emoji",description: "Use emojis to express ideads and emoticons"},
        { formatName: "Image", command: "Image", formatType: "Media", icon: "e-icons e-image icon", description: "Add image to your page"},
        { formatName: "Audio", command: "Audio", formatType: "Media", icon: "e-icons e-audio icon", description: "Add audio to your page"},
        { formatName: "Video", command: "Video", formatType: "Media", icon: "e-icons e-video icon", description: "Add video to your page"},

    ];

    var selection = new ej.richtexteditor.NodeSelection();
    var saveSelection;
    var mentionObj;

    var formatRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', 'SuperScript', 'SubScript', '|',
                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
                'Outdent', 'Indent', '|',
                'CreateTable', 'CreateLink', 'Image', '|', 
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
         placeholder: 'Type "/" and choose format',
         actionBegin: function (args) {
            if (args.requestType === 'EnterAction') {
                if (mentionObj.element.classList.contains("e-popup-open")) {
                    args.cancel = true;
                }
            }  
         }
         
    });
    formatRTE.appendTo('#MentionInlineFormat');

    // begins the process of inserting emoticons.

    var dialogContent =  '<div id="emojiIcon"></div>';
    var dialog = new ej.popups.Dialog({
        header: 'Custom Emoticons',
        content: dialogContent,
        target: document.getElementById('mentionFormatIntegration'),
        isModal: true,
        width: '51%',
        visible: false,
        overlayClick: dialogOverlay,
        buttons: [
            { buttonModel: { content: "Insert", isPrimary: true }, click: onInsert },
            { buttonModel: { content: 'Cancel' }, click: dialogOverlay }
        ],
        created: onDialogCreate,
        open : onOpen
    });
    dialog.appendTo('#emojiDialog');
    
    function dialogOverlay() {
        var activeElement = dialog.element.querySelector('.char_block.e-active');
        if (activeElement) {
            activeElement.classList.remove('e-active');
        }
        dialog.hide();
    }

    function beforeApplyFormat(isBlockFormat) {
        var range1 = formatRTE.getRange();
        var node = formatRTE.formatter.editorManager.nodeSelection.getNodeCollection(range1)[0];
        var blockNewLine= !(node.parentElement.innerHTML.replace(/&nbsp;|<br>/g, '').trim() == '/' || node.textContent.trim().indexOf('/')==0);
        var blockNode = void 0;
        var startNode =node;
        if (blockNewLine && isBlockFormat) {
            while (startNode != formatRTE.inputElement) {
                blockNode = startNode;
                startNode = startNode.parentElement;
            }
        }            
        var startPoint = range1.startOffset;
        while(formatRTE.formatter.editorManager.nodeSelection.getRange(document).toString().indexOf("/") ==-1 ){
            formatRTE.formatter.editorManager.nodeSelection.setSelectionText(document, node, node, startPoint, range1.endOffset);
            startPoint--;
        }
        var range2 = formatRTE.getRange();
        var node2 = formatRTE.formatter.editorManager.nodeCutter.GetSpliceNode(range2, node);
        var previouNode = node2.previousSibling;
        node2.parentNode.removeChild(node2);
        if(blockNewLine && isBlockFormat){
            var defaultTag = document.createElement('p');
            defaultTag.innerHTML = '</br>';
            blockNode.parentNode.insertBefore(defaultTag, blockNode.nextSibling);
           selection.setCursorPoint(document, blockNode.nextSibling, 0);
        } else if(previouNode) {
            selection.setCursorPoint(document, previouNode, previouNode.textContent.length);
        }
    }

    function onInsert() {
        var activeElement = dialog.element.querySelector('.char_block.e-active');
        if (activeElement) {
            if (formatRTE.formatter.getUndoRedoStack().length === 0) {
                formatRTE.formatter.saveData();
            }
            beforeApplyFormat(false);
            var range =formatRTE.getRange();
            selection.setCursorPoint(document, range.startContainer, range.startOffset);
            formatRTE.executeCommand('insertText', activeElement.textContent);
            formatRTE.formatter.saveData();
            formatRTE.formatter.enableUndo(formatRTE);
        }
        dialogOverlay();
    }

    function onDialogCreate() {
        var dialogContent = document.getElementById('emojiDialog');
        dialogContent.onclick = function (e) {
            var target = e.target;
            var activeElement = dialog.element.querySelector('.char_block.e-active');
            if (target.classList.contains('char_block')) {
                target.classList.add('e-active');
                if (activeElement) {
                    activeElement.classList.remove('e-active');
                }
            }
        };
    }

    function onOpen() {
        var emojiElement= document.getElementById("rteEmoticons-smiley");
        if(!emojiElement.children[0].classList.contains('e-active')){
            emojiElement.children[0].classList.add('e-active');
        }  
    }

    // End the process of inserting the emoticons.


    // Initialize Mention control.
    
    mentionObj = new ej.dropdowns.Mention({
        popupHeight: '290px',
        popupWidth: '320px',
        dataSource: formatList,
        mentionChar : '/',
        itemTemplate: '<table class="format-table"><tr><td><span id="icons" class="${icon}"></td><td><span class="font">${formatName}</span><span class="description">${description}</span></td></tr></table>',
        fields: { text: 'formatName', groupBy: 'formatType' },
        target: formatRTE.inputElement,
        allowSpaces: true,
        beforeOpen: function () {
            saveSelection = selection.save(selection.getRange(document), document);
        },
        filtering: function () {
            saveSelection = selection.save(selection.getRange(document), document);
        },
        select: applyCommand
    });
    mentionObj.appendTo('#mentionEditor');
    
    function applyCommand(args) {
        args.cancel = true;
        formatRTE.focusIn();
        saveSelection.restore();
        if (args.itemData.formatType !== 'Inline') {
            beforeApplyFormat(true);
        }
        if (args.itemData.command == 'OL'){
            formatRTE.executeCommand('insertOrderedList');
        }
        else if (args.itemData.command == 'UL') {
            formatRTE.executeCommand('insertUnorderedList');
        } 
        else if (args.itemData.command == 'CreateTable') {
            mentionObj.hidePopup();
            formatRTE.showDialog('InsertTable');
        } 
        else if (args.itemData.command == 'Image') {
            mentionObj.hidePopup();
            formatRTE.showDialog('InsertImage');
        } 
        else if (args.itemData.command == 'Audio') {
            mentionObj.hidePopup();
            formatRTE.showDialog('InsertAudio');
        } 
        else if (args.itemData.command == 'Video') {
            mentionObj.hidePopup();
            formatRTE.showDialog('InsertVideo');
        } 
        else if (args.itemData.command == 'Emoji') {
            dialog.element.style.display = 'block';
            mentionObj.hidePopup();
            dialog.show();
        }
        else {
            formatRTE.executeCommand('formatBlock', args.itemData.command);
        }
    } 
 };
