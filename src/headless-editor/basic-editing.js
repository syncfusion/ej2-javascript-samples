this.default = function() {
    var content = '<h3>Headless Editor Toolbar Demo</h3>' +
        '<p>This demo showcases the supported text formatting and block formatting options.</p>' +
        '<h3>Text Formatting</h3>' +
        '<p>This text demonstrates <strong>bold formatting</strong>, <em>italic formatting</em>, ' +
        '<u>underlined text</u>, and <s>strikethrough text</s>.</p>' +
        '<p>You can also add <code>inline code</code> within a paragraph.</p>' +
        '<h3>Paragraph Styles</h3>' +
        '<p>Use the Text Style dropdown to convert content between paragraphs and different heading levels.</p>' +
        '<hr/>' +
        '<h3>Blockquote</h3>' +
        '<blockquote><p>A blockquote is useful for highlighting important information, references, or quoted content.</p></blockquote>' +
        '<h3>Ordered List</h3>' +
        '<ol style="list-style-type: decimal;"><li><p>Create a document</p></li><li><p>Add and format content</p></li><li><p>Review the document</p></li></ol>' +
        '<h3>Bullet List</h3>' +
        '<ul style="list-style-type: disc;"><li><p>Simple and easy to scan</p></li><li><p>Useful for features and highlights</p></li><li><p>Supports multiple items</p></li></ul>';
    var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
        content: content,
        autofocus: 'start',
        extensions: [ej.headlesseditor.basicExtensions]
    });
    var container = document.getElementById('headless-editor');
    var bulletListTypeItems = [
        { id: 'bullet-list-disc', text: 'Disc', value: 'disc' },
        { id: 'bullet-list-circle', text: 'Circle', value: 'circle' },
        { id: 'bullet-list-square', text: 'Square', value: 'square' }
    ];
    var orderedListTypeItems = [
        { id: 'ordered-list-decimal', text: 'Decimal', value: 'decimal' },
        { id: 'ordered-list-lower-alpha', text: 'Lower Alpha', value: 'lower-alpha' },
        { id: 'ordered-list-upper-alpha', text: 'Upper Alpha', value: 'upper-alpha' },
        { id: 'ordered-list-lower-roman', text: 'Lower Roman', value: 'lower-roman' },
        { id: 'ordered-list-upper-roman', text: 'Upper Roman', value: 'upper-roman' },
        { id: 'ordered-list-lower-greek', text: 'Lower Greek', value: 'lower-greek' }
    ];
    var toolbarItems = [
        /* Text formatting */
        { id: 'undo', prefixIcon: 'e-icons e-undo', disabled: true, tooltipText: 'Undo (Ctrl+Z)', align: 'Left' },
        { id: 'redo', prefixIcon: 'e-icons e-redo', disabled: true, tooltipText: 'Redo (Ctrl+Y)', align: 'Left' },
        { id: 'bold', prefixIcon: 'e-icons e-bold', tooltipText: 'Bold (Ctrl+B)', align: 'Left' },
        { id: 'italic', prefixIcon: 'e-icons e-italic', tooltipText: 'Italic (Ctrl+I)', align: 'Left' },
        { id: 'underline', prefixIcon: 'e-icons e-underline', tooltipText: 'Underline (Ctrl+U)', align: 'Left' },
        { id: 'strikethrough', prefixIcon: 'e-icons e-strikethrough', tooltipText: 'Strike Through', align: 'Left' },
        { id: 'inlineCode', prefixIcon: 'e-icons e-insert-code', tooltipText: 'Inline Code (Ctrl+`)', align: 'Left' },
        {
            id: 'paragraph', type: 'Button', tooltipText: 'Formats', align: 'Left',
            template: new ej.splitbuttons.DropDownButton({
                content: 'Formats',
                cssClass: 'e-headless-dropdown',
                items: [
                    { id: 'format-paragraph', text: 'Paragraph' },
                    { id: 'format-h1', text: 'Heading 1' },
                    { id: 'format-h2', text: 'Heading 2' },
                    { id: 'format-h3', text: 'Heading 3' },
                    { id: 'format-h4', text: 'Heading 4' }
                ],
                select: function(args) {
                    if (args.item.id === 'format-paragraph') {
                        headlessEditor.commands.setParagraph();
                    } else {
                        headlessEditor.commands.setHeading({
                            level: Number(args.item.id.replace('format-h', ''))
                        });
                    }
                    refresh();
                },
                close: function() {
                    headlessEditor.focusView();
                }
            })
        },
        { id: 'horizontalRule', prefixIcon: 'e-icons e-horizontal-line', tooltipText: 'Horizontal Line', align: 'Left' },
        { id: 'blockquote', prefixIcon: 'e-icons e-blockquote', tooltipText: 'Blockquote', align: 'Left' },
        { id: 'codeBlock', prefixIcon: 'e-icons e-preformat-code', tooltipText: 'Code Block (Ctrl+Alt+C)', align: 'Left' },
        {
            id: 'orderedList', type: 'Button', tooltipText: 'Numbered List', align: 'Left',
            template: new ej.splitbuttons.SplitButton({
                iconCss: 'e-icons e-list-ordered',
                cssClass: 'e-headless-dropdown',
                items: orderedListTypeItems.map(function(item) {
                    return { id: item.id, text: item.text };
                }),
                click: function() {
                    if (headlessEditor.can().toggleOrderedList()) {
                        headlessEditor.commands.toggleOrderedList();
                    }
                    refresh();
                },
                select: function(args) {
                    var id = args.item && args.item.id;
                    var value;
                    for (var i = 0; i < orderedListTypeItems.length; i++) {
                        if (orderedListTypeItems[i].id === id) {
                            value = orderedListTypeItems[i].value;
                            break;
                        }
                    }
                    if (value) {
                        headlessEditor.commands.toggleOrderedList({ listStyleType: value });
                    }
                    refresh();
                },
                close: function() {
                    headlessEditor.focusView();
                }
            })
        },
        {
            id: 'bulletList', type: 'Button', tooltipText: 'Bulleted List', align: 'Left',
            template: new ej.splitbuttons.SplitButton({
                iconCss: 'e-icons e-list-unordered',
                cssClass: 'e-headless-dropdown',
                items: bulletListTypeItems.map(function(item) {
                    return { id: item.id, text: item.text };
                }),
                click: function() {
                    if (headlessEditor.can().toggleBulletList()) {
                        headlessEditor.commands.toggleBulletList();
                    }
                    refresh();
                },
                select: function(args) {
                    var id = args.item && args.item.id;
                    var value;
                    for (var i = 0; i < bulletListTypeItems.length; i++) {
                        if (bulletListTypeItems[i].id === id) {
                            value = bulletListTypeItems[i].value;
                            break;
                        }
                    }
                    if (value) {
                        headlessEditor.commands.toggleBulletList({ listStyleType: value });
                    }
                    refresh();
                },
                close: function() {
                    headlessEditor.focusView();
                }
            })
        },
        { id: 'taskList', prefixIcon: 'e-icons e-checklist', tooltipText: 'Task List', align: 'Left' }
    ];
    var toolbar = new ej.navigations.Toolbar({
        items: toolbarItems,
        width: '100%',
        overflowMode: 'MultiRow',
        clicked: function(args) {
            switch (args.item.id) {
                case 'undo':
                    headlessEditor.commands.undo();
                    break;
                case 'redo':
                    headlessEditor.commands.redo();
                    break;
                case 'bold':
                    if (headlessEditor.can().toggleBold()) {
                        headlessEditor.commands.toggleBold();
                    }
                    break;
                case 'italic':
                    if (headlessEditor.can().toggleItalic()) {
                        headlessEditor.commands.toggleItalic();
                    }
                    break;
                case 'underline':
                    headlessEditor.commands.toggleUnderline();
                    break;
                case 'strikethrough':
                    headlessEditor.commands.toggleStrikethrough();
                    break;
                case 'inlineCode':
                    headlessEditor.commands.toggleCodeMark();
                    break;
                case 'taskList':
                    headlessEditor.commands.toggleTaskList();
                    break;
                case 'blockquote':
                    headlessEditor.commands.toggleBlockQuote();
                    break;
                case 'codeBlock':
                    headlessEditor.commands.toggleCodeBlock();
                    break;
                case 'horizontalRule':
                    headlessEditor.commands.setHorizontalRule();
                    break;
                case 'paragraph':
                    break;
            }
            if (args.item.id !== 'undo' && args.item.id !== 'redo') {
                refresh();
            }
        }
    });
    toolbar.appendTo('#toolbar');
    if (!document.getElementById('toolbar-editor-spacing')) {
        var spacingStyle = document.createElement('style');
        spacingStyle.id = 'toolbar-editor-spacing';
        document.head.appendChild(spacingStyle);
    }
    new ej.popups.Tooltip({
        target: '.e-toolbar-item:not(.e-separator)',
        position: 'BottomCenter',
        showTipPointer: true
    }).appendTo('#toolbar');
    
    function refresh() {
        if (!headlessEditor) {
            return;
        }
        var activeMarks = headlessEditor.getActiveMarks();
        var markButtonMap = {
            'bold': 'bold',
            'italic': 'italic',
            'underline': 'underline',
            'strikethrough': 'strikethrough',
            'inlineCode': 'code'
        };
        var blockButtonMap = {
            'blockquote': 'blockquote'
        };
        var updateButtonState = function(itemId, isActive) {
            var btn = document.querySelector('.e-toolbar button[id="' + itemId + '"]');
            if (!btn) {
                return;
            }
            var toolbarItem = btn.closest ? btn.closest('.e-toolbar-item') : null;
            if (!toolbarItem) {
                return;
            }
            toolbarItem.classList.toggle('e-active', isActive);
        };
        var keys = Object.keys(markButtonMap);
        for (var i = 0; i < keys.length; i++) {
            var markName = markButtonMap[keys[i]];
            var isActive = activeMarks.has(markName);
            updateButtonState(keys[i], isActive);
        }
    }
    if (container) {
        headlessEditor.mount(container);
        container.addEventListener('mouseup', refresh);
        container.addEventListener('keyup', refresh);
        container.addEventListener('click', refresh);
        headlessEditor.on('selectionChanged', refresh);
        headlessEditor.on('documentChanged', function() {
            if (toolbar && toolbar.items) {
                var cmds = headlessEditor && headlessEditor.can ? headlessEditor.can() : null;
                if (cmds) {
                    var undoItem = null;
                    var redoItem = null;
                    for (var i = 0; i < toolbar.items.length; i++) {
                        if (toolbar.items[i].id === 'undo') {
                            undoItem = toolbar.items[i];
                        }
                        if (toolbar.items[i].id === 'redo') {
                            redoItem = toolbar.items[i];
                        }
                    }
                    if (undoItem) {
                        undoItem.disabled = !cmds.undo();
                    }
                    if (redoItem) {
                        redoItem.disabled = !cmds.redo();
                    }
                }
            }
        });
    }
};