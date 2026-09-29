this.default = function() {
    var headlessEditor = null;
    var container = document.getElementById('headless-editor');
    

    loadJson('./src/headless-editor/data/full-featured-editing.json', function(initialDocument) {
        var documentData = initialDocument;

        headlessEditor = ej.headlesseditor.HeadlessEditor.create({
            document: documentData,
            autofocus: 'start',
            extensions: [
                ej.headlesseditor.boldExtension,
                ej.headlesseditor.italicExtension,
                ej.headlesseditor.underlineExtension,
                ej.headlesseditor.strikethroughExtension,
                ej.headlesseditor.inlineCodeExtension,
                ej.headlesseditor.clearFormattingExtension,
                ej.headlesseditor.paragraphExtension,
                ej.headlesseditor.headingExtension,
                ej.headlesseditor.superscriptExtension,
                ej.headlesseditor.subscriptExtension,
                ej.headlesseditor.toUpperCaseExtension,
                ej.headlesseditor.toLowerCaseExtension,
                ej.headlesseditor.fontColorExtension,
                ej.headlesseditor.backgroundColorExtension,
                ej.headlesseditor.listExtension,
                ej.headlesseditor.taskListExtension,
                ej.headlesseditor.undoRedoExtension,
                ej.headlesseditor.linkExtension,
                ej.headlesseditor.blockquoteExtension,
                ej.headlesseditor.calloutExtension,
                ej.headlesseditor.collapsibleExtension,
                ej.headlesseditor.horizontalRuleExtension,
                ej.headlesseditor.tableExtension,
                ej.headlesseditor.fontSizeExtension,
                ej.headlesseditor.fontFamilyExtension,
                ej.headlesseditor.placeholderExtension.configure({
                    showOnlyWhenEditorEmpty: false,
                    placeholder: function(ctx) {
                        var placeholders = {
                            paragraph: 'Write anything...',
                            heading: 'Heading',
                            blockquote: 'Add a quote...',
                            callout: 'Add a note...',
                            collapsibleHeader: 'Toggle summary...',
                            collapsibleBody: 'Toggle content...',
                            codeBlock: 'Add code...',
                            listItem: 'List item',
                            taskItem: 'Task item'
                        };
                        return placeholders[ctx.nodeType] || '';
                    }
                }),
                ej.headlesseditor.textAlignExtension,
                ej.headlesseditor.imageExtension,
                ej.headlesseditor.hardBreakExtension,
                createDemoCodeBlockExtension(),
                ej.headlesseditor.indentOutdentExtension
            ]
        });
        if (container) {
            headlessEditor.mount(container);
            headlessEditor.on('selectionChanged', refresh);
            headlessEditor.on('documentChanged', function() {
                if (!toolbar || !toolbar.items) {
                    return;
                }
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
            });
            refresh();
        }
    });

    function loadJson(url, onSuccess, onError) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    onSuccess(JSON.parse(xhr.responseText));
                } catch (e) {
                    onError('Invalid JSON in ' + url + ': ' + e.message);
                }
            } else {
                onError('HTTP ' + xhr.status + ' while loading ' + url);
            }
        };
        xhr.onerror = function() {
            onError('Network error while loading ' + url);
        };
        xhr.send(null);
    }

    function createDemoCodeBlockExtension() {
        return ej.headlesseditor.codeBlockExtension.configure({
            defaultLanguage: 'plaintext',
            enableTabIndentation: true,
            exitOnArrowDown: false,
            languageClassPrefix: 'language-',
            addNodeView: function() {
                return {
                    codeBlock: function(attrs) {
                        var currentLanguage = (typeof attrs.language === 'string' && attrs.language.length > 0) ?
                            attrs.language : 'plaintext';
                        var select = document.createElement('input');
                        select.className = 'e-code-block-language';
                        var button = document.createElement('button');
                        button.type = 'button';
                        button.className = 'e-code-block-copy e-icons';
                        button.setAttribute('aria-label', 'Copy code');
                        window.setTimeout(function() {
                            try {
                                new ej.dropdowns.DropDownList({
                                    dataSource: DEMO_LANGUAGES.map(function(language) {
                                        return {
                                            text: getLanguageDisplayName(language),
                                            value: language
                                        };
                                    }),
                                    fields: {
                                        text: 'text',
                                        value: 'value'
                                    },
                                    value: currentLanguage,
                                    width: '260px',
                                    change: function(args) {
                                        var nextLanguage = (typeof args.value === 'string') ? args.value : currentLanguage;
                                        headlessEditor.commands.setCodeBlockLanguage({
                                            language: nextLanguage
                                        });
                                    }
                                }).appendTo(select);
                                new ej.buttons.Button({
                                    cssClass: 'e-icons e-copy e-flat',
                                    isPrimary: false
                                }).appendTo(button);
                            } catch (error) {}
                        }, 0);
                        button.addEventListener('click', function() {
                            var text = headlessEditor.getCodeBlockContent();
                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                navigator.clipboard.writeText(text).catch(function() {});
                            }
                        });
                        var header = document.createElement('div');
                        header.className = 'e-code-block-header';
                        header.appendChild(select);
                        header.appendChild(button);
                        return {
                            dom: header
                        };
                    }
                };
            }
        });
    }
    var DEMO_LANGUAGES = [
        'plaintext', 'typescript', 'javascript', 'html', 'css', 'json', 'markdown', 'python', 'java', 'c', 'cpp', 'csharp', 'go', 'rust', 'sql', 'shell', 'yaml', 'xml'
    ];

    function getLanguageDisplayName(language) {
        var displayNames = {
            plaintext: 'Plain Text', typescript: 'TypeScript', javascript: 'JavaScript', html: 'HTML', css: 'CSS', json: 'JSON', markdown: 'Markdown',
            python: 'Python', java: 'Java', c: 'C', cpp: 'C++', csharp: 'C#', go: 'Go', rust: 'Rust', sql: 'SQL', shell: 'Shell', yaml: 'YAML', xml: 'XML'
        };
        return displayNames[language] != null ? displayNames[language] : language;
    }

    function getImageSaveFormat() {
        try {
            var ext = ej.headlesseditor.imageExtension;
            var cfg = ext && ext.prototype ? null : ext;
            var saveFormat = cfg && (
                cfg.saveFormat != null ? cfg.saveFormat :
                cfg.saveformat != null ? cfg.saveformat :
                cfg.defaultSaveFormat != null ? cfg.defaultSaveFormat :
                cfg.defaultSaveformat != null ? cfg.defaultSaveformat : undefined
            );
            if (typeof saveFormat === 'string' && saveFormat.toLowerCase() === 'blob') {
                return 'blob';
            }
        } catch (_e) {}
        return 'base64';
    }

    function readFileAsDataURL(file) {
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() {
                resolve(reader.result);
            };
            reader.onerror = function() {
                reject(reader.error);
            };
            reader.readAsDataURL(file);
        });
    }

    function resolveImageFileSource(file) {
        if (getImageSaveFormat() === 'base64') {
            return readFileAsDataURL(file);
        }
        return Promise.resolve(URL.createObjectURL(file));
    }

    function buildLocalImagePayload(file) {
        return resolveImageFileSource(file).then(function(src) {
            return {
                src: src,
                alt: '',
                display: 'block',
                align: 'none',
                wrap: 'none'
            };
        });
    }

    function pickLocalImageFiles(fileInput) {
        return fileInput.files ? Array.from(fileInput.files) : [];
    }
    var fontFamilyItems = [
        { id: 'font-family-default', text: 'Default', value: '' },
        { id: 'font-family-arial', text: 'Arial', value: 'Arial, sans-serif' },
        { id: 'font-family-calibri', text: 'Calibri', value: 'Calibri, sans-serif' },
        { id: 'font-family-georgia', text: 'Georgia', value: 'Georgia, serif' },
        { id: 'font-family-courier-new', text: 'Courier New', value: 'Courier New, monospace' },
        { id: 'font-family-times-new-roman', text: 'Times New Roman', value: 'Times New Roman, serif' },
        { id: 'font-family-verdana', text: 'Verdana', value: 'Verdana, sans-serif' }
    ];
    var fontSizeItems = [
        { id: 'font-size-default', text: 'Default', value: '' },
        { id: 'font-size-10', text: '10', value: '10px' },
        { id: 'font-size-12', text: '12', value: '12px' },
        { id: 'font-size-14', text: '14', value: '14px' },
        { id: 'font-size-16', text: '16', value: '16px' },
        { id: 'font-size-18', text: '18', value: '18px' },
        { id: 'font-size-24', text: '24', value: '24px' },
        { id: 'font-size-32', text: '32', value: '32px' },
        { id: 'font-size-48', text: '48', value: '48px' }
    ];
    var editorPaletteColors = [
        'transparent', '#d9d9d9', '#dc2626', '#b45309', '#8a6d00', '#4c2496', '#365c0b', '#216b3a', '#205f57',
        '#21636b', '#1f6074', '#315b8c', '#37599c', '#384b8f', '#55358f', '#6d2d8c', '#92266d', '#a62c42',
        '#9e3232', '#70491f', '#6d5728', '#4f5b20', '#455568', '#505356', '#303b52'
    ];
    var editorBackgroundPaletteColors = [
        '#FCE3E0', '#FFEDD4', '#EBF7D1', '#FFF7C7', '#DBF5E0', '#D6F5EB', '#D4F2F2', '#D4F0FA', '#DBEBFC', '#E0E5FC',
        '#E5E3FC', '#EDE0FC', '#F2E0FC', '#FAE0F2', '#FCE0E8', '#FCE0E3', '#F5EBDE', '#F7F2E0', '#F0F2DB',
        '#E5EBF0', '#EDEDED', '#E0E0E5', '#DEE0EB'
    ];
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
    var toolbarItems = [/* History */
        { id: 'undo', prefixIcon: 'e-icons e-undo', disabled: true, tooltipText: 'Undo (Ctrl+Z)', align: 'Left' },
        { id: 'redo', prefixIcon: 'e-icons e-redo', disabled: true, tooltipText: 'Redo (Ctrl+Y)', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        /* Basic formatting */
        { id: 'bold', prefixIcon: 'e-icons e-bold', tooltipText: 'Bold (Ctrl+B)', align: 'Left' },
        { id: 'italic', prefixIcon: 'e-icons e-italic', tooltipText: 'Italic (Ctrl+I)', align: 'Left' },
        { id: 'underline', prefixIcon: 'e-icons e-underline', tooltipText: 'Underline (Ctrl+U)', align: 'Left' },
        { id: 'strikethrough', prefixIcon: 'e-icons e-strikethrough', tooltipText: 'Strike Through', align: 'Left' },
        { id: 'inlineCode', prefixIcon: 'e-icons e-insert-code', tooltipText: 'Inline Code (Ctrl+`)', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        /* Advanced formatting */
        { id: 'superscript', prefixIcon: 'e-icons e-superscript', tooltipText: 'Superscript', align: 'Left' },
        { id: 'subscript', prefixIcon: 'e-icons e-subscript', tooltipText: 'Subscript', align: 'Left' },
        { id: 'uppercase', prefixIcon: 'e-icons e-upper-case', tooltipText: 'Uppercase', align: 'Left' },
        { id: 'lowercase', prefixIcon: 'e-icons e-lower-case', tooltipText: 'Lowercase', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        /* Style */
        { id: 'paragraph', type: 'Button', tooltipText: 'Formats', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            content: 'Formats', cssClass: 'e-headless-dropdown',
            items: [{ id: 'format-paragraph', text: 'Paragraph' }, { id: 'format-h1', text: 'Heading 1' }, { id: 'format-h2', text: 'Heading 2' }, { id: 'format-h3', text: 'Heading 3' }, { id: 'format-h4', text: 'Heading 4' }],
            select: function(args) {
                if (args.item.id === 'format-paragraph') { headlessEditor.commands.setParagraph(); }
                else { headlessEditor.commands.setHeading({ level: Number(args.item.id.replace('format-h', '')) }); }
                refresh();
            },
            close: function() { headlessEditor.focusView(); }
        }) },
        { id: 'fontFamily', type: 'Button', tooltipText: 'Font Family', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            content: 'Font Family', cssClass: 'e-headless-dropdown', items: fontFamilyItems,
            select: function(args) {
                if (args.item && args.item.id === 'font-family-default') { headlessEditor.commands.unsetFontFamily(); }
                else { headlessEditor.commands.setFontFamily({ family: args.item.value }); }
                refresh();
            },
            close: function() { headlessEditor.focusView(); }
        }) },
        { id: 'fontSize', type: 'Button', tooltipText: 'Font Size', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            content: 'Font Size', cssClass: 'e-headless-dropdown', items: fontSizeItems,
            select: function(args) {
                if (args.item && args.item.id === 'font-size-default') { headlessEditor.commands.unsetFontSize(); }
                else { headlessEditor.commands.setFontSize({ size: args.item.value }); }
                refresh();
            },
            close: function() { headlessEditor.focusView(); }
        }) },
        { type: 'Separator', align: 'Left' },
        /* Colors */
        { id: 'fontColor', type: 'Button', tooltipText: 'Font Color', align: 'Left', template: new ej.inputs.ColorPicker({
            value: '#dc2626', cssClass: 'e-headless-dropdown', mode: 'Palette', showButtons: true, columns: 5,
            presetColors: { EditorPalette: editorPaletteColors },
            beforeTileRender: function(args) { args.element.style.width = '28px'; args.element.style.height = '28px'; args.element.style.margin = '4px'; args.element.style.borderRadius = '50%'; args.element.style.overflow = 'hidden'; args.element.style.boxSizing = 'border-box'; },
            change: function(args) { if (args.value !== undefined && args.value !== null) { headlessEditor.commands.setColor({ color: args.value }); refresh(); } }
        }) },
        { id: 'backgroundColor', type: 'Button', tooltipText: 'Background Color', align: 'Left', template: new ej.inputs.ColorPicker({
            value: '#ffff00', cssClass: 'e-headless-dropdown', mode: 'Palette', showButtons: true, columns: 5,
            presetColors: { EditorPalette: editorBackgroundPaletteColors },
            beforeTileRender: function(args) { args.element.style.width = '28px'; args.element.style.height = '28px'; args.element.style.margin = '4px'; args.element.style.borderRadius = '50%'; args.element.style.overflow = 'hidden'; args.element.style.boxSizing = 'border-box'; },
            change: function(args) { if (args.value !== undefined && args.value !== null) { headlessEditor.commands.setHighlight({ color: args.value }); refresh(); } }
        }) },
        { type: 'Separator', align: 'Left' },
        /* Alignment & Indentation */
        { id: 'align', type: 'Button', tooltipText: 'Alignments', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            iconCss: 'e-icons e-align-left', cssClass: 'e-headless-dropdown',
            items: [{ id: 'left', text: 'Align Left', iconCss: 'e-icons e-align-left' }, { id: 'center', text: 'Align Center', iconCss: 'e-icons e-align-center' }, { id: 'right', text: 'Align Right', iconCss: 'e-icons e-align-right' }, { id: 'justify', text: 'Justify', iconCss: 'e-icons e-justify' }],
            select: function(args) { headlessEditor.commands.setTextAlign({ align: args.item.id }); refresh(); },
            close: function() { headlessEditor.focusView(); }
        }) },
        { id: 'indent', prefixIcon: 'e-icons e-increase-indent', tooltipText: 'Indent (Tab)', align: 'Left' },
        { id: 'outdent', prefixIcon: 'e-icons e-decrease-indent', disabled: true, tooltipText: 'Outdent (Shift+Tab)', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        /* Lists */
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
                        if (value && headlessEditor.can().toggleOrderedList({ listStyleType: value })) {
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
                        if (value && headlessEditor.can().toggleBulletList({ listStyleType: value })) {
                        headlessEditor.commands.toggleBulletList({ listStyleType: value });
                    }
                    refresh();
                },
                close: function() {
                    headlessEditor.focusView();
                }
            })
        },
        { id: 'taskList', prefixIcon: 'e-icons e-checklist', tooltipText: 'Task List', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        /* Links & Media */
        { id: 'link', prefixIcon: 'e-icons e-link', align: 'Left', tooltipText: 'Link' },
        { id: 'unlink', prefixIcon: 'e-icons e-link-remove', tooltipText: 'Remove Link', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        { id: 'insertImage', prefixIcon: 'e-icons e-image', align: 'Left', tooltipText: 'Insert Image' },
        { id: 'image', type: 'Button', disabled: true, tooltipText: 'Edit Image', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            created: createdImageMenu,
            target: '#image-menu-items', iconCss: 'e-icons e-replace', iconPosition: 'Left', cssClass: 'e-headless-dropdown'
        }) },
        { type: 'Separator', align: 'Left' },
        /* Tables */
        { id: 'insertTable', prefixIcon: 'e-icons e-table', align: 'Left', tooltipText: 'Insert Table' },
        { id: 'table', type: 'Button', disabled: true, tooltipText: 'Table Options', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            created: createdTableMenu,
            target: '#table-menu-items', iconCss: 'e-icons e-table', iconPosition: 'Left', cssClass: 'e-headless-dropdown'
        }) },
        { type: 'Separator', align: 'Left' },
        /* Blocks */
        { id: 'horizontalRule', prefixIcon: 'e-icons e-horizontal-line', tooltipText: 'Horizontal Line', align: 'Left' },
        { id: 'blockquote', prefixIcon: 'e-icons e-blockquote', tooltipText: 'Blockquote (Ctrl+Alt+Q)', align: 'Left' },
        { id: 'callout', type: 'Button', tooltipText: 'Callout (Ctrl+Shift+C)', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            content: '', iconCss: 'e-icons e-callout', cssClass: 'e-headless-dropdown',
            items: [{ id: 'info', text: 'Info', iconCss: 'e-icons e-circle-info' }, { id: 'warning', text: 'Warning', iconCss: 'e-icons e-warning' }, { id: 'error', text: 'Error', iconCss: 'e-icons e-circle-close' }, { id: 'success', text: 'Success', iconCss: 'e-icons e-circle-check' }, { id: 'note', text: 'Note', iconCss: 'e-icons e-notes' }, { id: 'tip', text: 'Tip', iconCss: 'e-icons e-objects' }],
            select: function(args) { headlessEditor.commands.toggleCallout({ variant: args.item.id }); refresh(); },
            close: function() { headlessEditor.focusView(); }
        }) },
        { id: 'codeBlock', prefixIcon: 'e-icons e-preformat-code', tooltipText: 'Code Block (Ctrl+Alt+C)', align: 'Left' },
        { type: 'Separator', align: 'Left' },
        /* Special structures */
        { id: 'collapsible', type: 'Button', tooltipText: 'Collapsible Heading', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            content: 'Collapsible', cssClass: 'e-headless-dropdown',
            items: [{ id: 'collapsible-paragraph', text: 'Collapsible Paragraph', iconCss: 'e-icons e-paragraph' }, { id: 'collapsible-h1', text: 'Collapsible Heading 1', iconCss: 'e-icons e-collapsible-heading-1' }, { id: 'collapsible-h2', text: 'Collapsible Heading 2', iconCss: 'e-icons e-collapsible-heading-2' }, { id: 'collapsible-h3', text: 'Collapsible Heading 3', iconCss: 'e-icons e-collapsible-heading-3' }, { id: 'collapsible-h4', text: 'Collapsible Heading 4', iconCss: 'e-icons e-collapsible-heading-4' }],
            select: function(args) {
                if (args.item.id === 'collapsible-paragraph') { headlessEditor.commands.toggleCollapsible({ triggerType: 'paragraph' }); }
                else { headlessEditor.commands.toggleCollapsible({ triggerType: 'heading', level: Number(args.item.id.replace('collapsible-h', '')) }); }
                refresh();
            },
            close: function() { headlessEditor.focusView(); }
        }) },
        { type: 'Separator', align: 'Left' },
        /* Cleanup & Export */
        { id: 'clearFormat', prefixIcon: 'e-icons e-clear-format', tooltipText: 'Clear Format', align: 'Left' },
        { id: 'export', type: 'Button', tooltipText: 'Export', align: 'Left', template: new ej.splitbuttons.DropDownButton({
            content: '', iconCss: 'e-icons e-export', cssClass: 'e-headless-dropdown',
            items: [{ id: 'export-html', text: 'Export as HTML' }, { id: 'export-text', text: 'Export as Text' }, { id: 'export-json', text: 'Export as JSON' }],
            select: function(args) { onExportMenuSelect(args); }
        }) }
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
                case 'superscript':
                    headlessEditor.commands.toggleSuperscript();
                    break;
                case 'subscript':
                    headlessEditor.commands.toggleSubscript();
                    break;
                case 'uppercase':
                    headlessEditor.commands.toUpperCase();
                    break;
                case 'lowercase':
                    headlessEditor.commands.toLowerCase();
                    break;
                case 'taskList':
                    headlessEditor.commands.toggleTaskList();
                    break;
                case 'indent':
                    if (headlessEditor.can().indent()) {
                        headlessEditor.commands.indent();
                    }
                    break;
                case 'outdent':
                    if (headlessEditor.can().outdent()) {
                        headlessEditor.commands.outdent();
                    }
                    break;
                case 'blockquote':
                    headlessEditor.commands.toggleBlockQuote();
                    break;
                case 'codeBlock':
                    headlessEditor.commands.toggleCodeBlock();
                    break;
                case 'clearFormat':
                    headlessEditor.commands.clearFormatting();
                    break;
                case 'unlink':
                    headlessEditor.commands.unsetLink();
                    break;
                case 'link':
                    openLinkDialog();
                    break;
                case 'horizontalRule':
                    headlessEditor.commands.setHorizontalRule();
                    break;
                case 'insertTable':
                    headlessEditor.commands.insertTable({
                        rows: 2,
                        columns: 3
                    });
                    break;
                case 'insertImage':
                    if (imageInsertDialog) {
                        imageInsertDialog.show();
                    }
                    break;
                case 'paragraph':
                case 'fontFamily':
                case 'fontSize':
                case 'fontColor':
                case 'backgroundColor':
                case 'align':
                case 'callout':
                case 'image':
                case 'table':
                case 'export':
                    break;
            }
            if (args.item.id !== 'undo' && args.item.id !== 'redo') {
                refresh();
            }
        }
    });
    var tableMenu = null;
    var imageMenu = null;
    function refresh() {
        if (!headlessEditor) {
            return;
        }
        var activeMarks = headlessEditor.getActiveMarks();
        var markButtonMap = {
            'bold': 'bold', 'italic': 'italic','underline': 'underline','strikethrough': 'strikethrough',
            'inlineCode': 'code', 'link': 'link', 'superscript': 'superscript', 'subscript': 'subscript'
        };
        var blockButtonMap = {
            'blockquote': 'blockquote','callout': 'callout','collapsible': 'collapsible','codeBlock': 'codeBlock'
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
        var markKeys = Object.keys(markButtonMap);
        for (var i = 0; i < markKeys.length; i++) {
            var markName = markButtonMap[markKeys[i]];
            var isActive = activeMarks.has(markName);
            updateButtonState(markKeys[i], isActive);
        }
        if (toolbar && toolbar.items && headlessEditor) {
            var cmds = headlessEditor.can();
            var setToolbarItemEnabled = function(element, enabled) {
                var toolbarItem = element && element.closest ? element.closest('.e-toolbar-item') : null;
                if (toolbarItem) {
                    toolbar.enableItems(toolbarItem, enabled);
                }
            };
            if (cmds) {
                var indentEl = document.querySelector('.e-toolbar #indent');
                if (indentEl) {
                    toolbar.enableItems(indentEl, cmds.indent());
                }
                var outdentButton = document.querySelector('.e-toolbar button[id="outdent"]');
                setToolbarItemEnabled(outdentButton, !!cmds.outdent());
            }
            var hasLinkMark = activeMarks.has('link');
            var unlinkEl = document.querySelector('.e-toolbar #unlink');
            if (unlinkEl) {
                toolbar.enableItems(unlinkEl, hasLinkMark);
            }
            var inTable = !!(cmds && cmds.insertRowBefore && cmds.insertRowBefore());
            var tableHost = document.getElementById('table-menu-items');
            var tableIcon = document.querySelector('.e-toolbar .e-headless-dropdown .e-table');
            setToolbarItemEnabled(tableIcon || tableHost, inTable);
            if (tableMenu) {
                tableMenu.setProperties({ disabled: !inTable });
            }
            var img = (headlessEditor.getSelectedImage && headlessEditor.getSelectedImage()) ||
                (headlessEditor.getSelectedNode && headlessEditor.getSelectedNode());
            var imageType = img && img.node && img.node.type;
            imageType = imageType && imageType.name ? imageType.name : imageType;
            var isImage = imageType === 'image' || imageType === 'imageInline';
            var imageHost = document.getElementById('image-menu-items');
            var imageIcon = document.querySelector('.e-toolbar .e-headless-dropdown .e-replace');
            setToolbarItemEnabled(imageIcon || imageHost, isImage);
            if (imageMenu) {
                imageMenu.setProperties({ disabled: !isImage });
            }
        }
    }
    var cellColorPalette = [
        { name: 'None', value: '' },
        { name: 'Gray', value: '#9e9e9e' },
        { name: 'Pink', value: '#ec407a' },
        { name: 'Red', value: '#f44336' },
        { name: 'Orange', value: '#ff9800' },
        { name: 'Yellow', value: '#ffeb3b' },
        { name: 'Green', value: '#4caf50' },
        { name: 'Blue Green', value: '#26a69a' },
        { name: 'Blue', value: '#2196f3' },
        { name: 'Purple', value: '#9c27b0' }
    ];
    var cellColorValueBySlug = {};
    for (var cp = 0; cp < cellColorPalette.length; cp++) {
        var c = cellColorPalette[cp];
        cellColorValueBySlug[c.value ? c.name.replace(/\s+/g, '-').toLowerCase() : 'none'] = c.value;
    }

    function buildColorSubmenu(attribute) {
        var items = [];
        for (var k = 0; k < cellColorPalette.length; k++) {
            var cc = cellColorPalette[k];
            var itemSlug = cc.value ? cc.name.replace(/\s+/g, '-').toLowerCase() : 'none';
            items.push({
                id: 'cell-color-' + attribute + '-' + itemSlug,
                text: cc.name,
                iconCss: cc.value ? ('e-cell-color-swatch e-cell-color-swatch-' + itemSlug) : 'e-icons e-close'
            });
        }
        return items;
    }

    function onTableMenuSelect(args) {
        var itemId = args.item && args.item.id;
        switch (itemId) {
            case 'table-row-before':
                headlessEditor.commands.insertRowBefore();
                break;
            case 'table-row-after':
                headlessEditor.commands.insertRowAfter();
                break;
            case 'table-row-delete':
                headlessEditor.commands.deleteRow();
                break;
            case 'table-col-before':
                headlessEditor.commands.insertColumnBefore();
                break;
            case 'table-col-after':
                headlessEditor.commands.insertColumnAfter();
                break;
            case 'table-col-delete':
                headlessEditor.commands.deleteColumn();
                break;
            case 'table-header-row':
                headlessEditor.commands.toggleHeaderRow();
                break;
            case 'table-header-col':
                headlessEditor.commands.toggleHeaderColumn();
                break;
            case 'cell-align-left':
                headlessEditor.commands.setCellAttribute({
                    attribute: 'align',
                    value: 'left'
                });
                break;
            case 'cell-align-center':
                headlessEditor.commands.setCellAttribute({
                    attribute: 'align',
                    value: 'center'
                });
                break;
            case 'cell-align-right':
                headlessEditor.commands.setCellAttribute({
                    attribute: 'align',
                    value: 'right'
                });
                break;
            case 'cell-valign-top':
                headlessEditor.commands.setCellAttribute({
                    attribute: 'verticalAlign',
                    value: 'top'
                });
                break;
            case 'cell-valign-middle':
                headlessEditor.commands.setCellAttribute({
                    attribute: 'verticalAlign',
                    value: 'middle'
                });
                break;
            case 'cell-valign-bottom':
                headlessEditor.commands.setCellAttribute({
                    attribute: 'verticalAlign',
                    value: 'bottom'
                });
                break;
            case 'table-delete':
                headlessEditor.commands.deleteTable();
                break;
            default: {
                if (itemId && itemId.indexOf('cell-color-') === 0) {
                    var parts = itemId.split('-');
                    var attribute = parts[2];
                    var slug = parts.slice(3).join('-');
                    var value = cellColorValueBySlug[slug] != null ? cellColorValueBySlug[slug] : '';
                    headlessEditor.commands.setCellAttribute({
                        attribute: attribute,
                        value: value
                    });
                }
                break;
            }
        }
    }
    function createdTableMenu() {
        var tableElement = document.getElementById('table-menu-items');
        if (tableElement) {
            tableElement.innerHTML = '';
            tableMenu = new ej.navigations.Menu({
                items: [{
                text: 'Rows',
                iconCss: 'e-icons e-insert-row-before',
                items: [{
                        text: 'Insert Row Before',
                        id: 'table-row-before',
                        iconCss: 'e-icons e-insert-row-before'
                    },
                    {
                        text: 'Insert Row After',
                        id: 'table-row-after',
                        iconCss: 'e-icons e-insert-row-after'
                    },
                    {
                        text: 'Delete Row',
                        id: 'table-row-delete',
                        iconCss: 'e-icons e-delete-row'
                    }
                ]
            },
            {
                text: 'Columns',
                iconCss: 'e-icons e-insert-left',
                items: [{
                        text: 'Insert Column Before',
                        id: 'table-col-before',
                        iconCss: 'e-icons e-insert-left'
                    },
                    {
                        text: 'Insert Column After',
                        id: 'table-col-after',
                        iconCss: 'e-icons e-insert-left'
                    },
                    {
                        text: 'Delete Column',
                        id: 'table-col-delete',
                        iconCss: 'e-icons e-delete-column'
                    }
                ]
            },
            {
                text: 'Headers',
                iconCss: 'e-icons e-table-header',
                items: [{
                        text: 'Toggle Header Row',
                        id: 'table-header-row',
                        iconCss: 'e-icons e-table-header'
                    },
                    {
                        text: 'Toggle Header Column',
                        id: 'table-header-col',
                        iconCss: 'e-icons e-columns'
                    }
                ]
            },
            {
                text: 'Cell Alignment',
                iconCss: 'e-icons e-align-left',
                items: [{
                        text: 'Align Left',
                        id: 'cell-align-left',
                        iconCss: 'e-icons e-align-left'
                    },
                    {
                        text: 'Align Center',
                        id: 'cell-align-center',
                        iconCss: 'e-icons e-align-center'
                    },
                    {
                        text: 'Align Right',
                        id: 'cell-align-right',
                        iconCss: 'e-icons e-align-right'
                    }
                ]
            },
            {
                text: 'Cell Vertical Alignment',
                iconCss: 'e-icons e-align-top',
                items: [{
                        text: 'Align Top',
                        id: 'cell-valign-top',
                        iconCss: 'e-icons e-align-top'
                    },
                    {
                        text: 'Align Middle',
                        id: 'cell-valign-middle',
                        iconCss: 'e-icons e-align-middle'
                    },
                    {
                        text: 'Align Bottom',
                        id: 'cell-valign-bottom',
                        iconCss: 'e-icons e-align-bottom'
                    }
                ]
            },
            {
                text: 'Background Color',
                iconCss: 'e-icons e-highlight-color',
                items: buildColorSubmenu('backgroundColor')
            },
            {
                text: 'Text Color',
                iconCss: 'e-icons e-font-color',
                items: buildColorSubmenu('color')
            },
            {
                text: 'Border Color',
                iconCss: 'e-icons e-border-all',
                items: buildColorSubmenu('borderColor')
            },
            {
                text: 'Delete Table',
                id: 'table-delete',
                iconCss: 'e-icons e-trash'
            }
        ],
                orientation: 'Vertical',
                select: function(args) {
                    onTableMenuSelect(args);
                }
            }, tableElement);
            tableMenu.setProperties({ disabled: true });
        }
    }
    var cellColorStyleSheet = '';
    for (var s = 0; s < cellColorPalette.length; s++) {
        var cpEntry = cellColorPalette[s];
        if (cpEntry.value) {
            cellColorStyleSheet += '.e-cell-color-swatch-' +
                cpEntry.name.replace(/\s+/g, '-').toLowerCase() +
                '::before{background:' + cpEntry.value + ';}';
        }
    }
    if (cellColorStyleSheet) {
        var styleEl = document.createElement('style');
        styleEl.id = 'cell-color-swatch-styles';
        styleEl.textContent = cellColorStyleSheet;
        if (!document.getElementById(styleEl.id)) {
            document.head.appendChild(styleEl);
        }
    }
    var imageInsertDialogContent = '' +
        '<div class="image-dialog-content">' +
        '  <div class="form-group">' +
        '    <label>Image URL</label>' +
        '    <input id="img-insert-url" class="e-input" type="text" placeholder="Enter image URL"/>' +
        '  </div>' +
        '  <div class="form-group">' +
        '    <label>Alt Text</label>' +
        '    <input id="img-insert-alt" class="e-input" type="text" placeholder="Enter alternative text"/>' +
        '  </div>' +
        '  <div class="form-group">' +
        '    <label>Caption (optional)</label>' +
        '    <input id="img-insert-caption" class="e-input" type="text" placeholder="Enter image caption"/>' +
        '  </div>' +
        '  <div class="form-group">' +
        '    <label>Browse from Local Device</label>' +
        '    <button id="img-insert-browse" type="button" class="e-btn e-outline img-file-trigger">Choose Files...</button>' +
        '    <input id="img-insert-file-input" type="file" accept="image/*" style="display:none"/>' +
        '    <div id="img-insert-files-display" class="image-dialog-file-info"></div>' +
        '  </div>' +
        '</div>';

    function initImageDialogFileUI() {
        var urlInput = document.getElementById('img-insert-url');
        var altInput = document.getElementById('img-insert-alt');
        var captionInput = document.getElementById('img-insert-caption');
        var fileInput = document.getElementById('img-insert-file-input');
        var browseBtn = document.getElementById('img-insert-browse');
        var filesDisplayEl = document.getElementById('img-insert-files-display');
        if (urlInput) {
            urlInput.value = '';
        }
        if (altInput) {
            altInput.value = '';
        }
        if (captionInput) {
            captionInput.value = '';
        }
        if (fileInput) {
            fileInput.value = '';
        }
        if (filesDisplayEl) {
            filesDisplayEl.textContent = '';
        }
        var getInsertButton = function() {
            return document.querySelector('#image-insert-dialog .e-primary');
        };
        var updateInsertEnabled = function() {
            var hasUrl = ((urlInput && urlInput.value) || '').trim().length > 0;
            var hasFiles = !!(fileInput && fileInput.files && fileInput.files.length > 0);
            var canInsert = (hasUrl && !hasFiles) || (!hasUrl && hasFiles);
            var insertBtn = getInsertButton();
            if (insertBtn) {
                insertBtn.disabled = !canInsert;
            }
        };
        if (urlInput) {
            urlInput.oninput = updateInsertEnabled;
        }
        if (fileInput) {
            fileInput.onchange = function() {
                var files = fileInput.files ? Array.from(fileInput.files) : [];
                if (filesDisplayEl) {
                    if (files.length === 1) {
                        filesDisplayEl.textContent = files[0].name;
                    } else if (files.length > 1) {
                        var names = files.map(function(f) {
                            return f.name;
                        }).join(', ');
                        filesDisplayEl.textContent = files.length + ' files selected: ' + names;
                    } else {
                        filesDisplayEl.textContent = '';
                    }
                }
                updateInsertEnabled();
            };
        }
        if (browseBtn && fileInput) {
            browseBtn.onclick = function() {
                fileInput.value = '';
                fileInput.click();
                updateInsertEnabled();
            };
        }
        updateInsertEnabled();
    }
    var imageInsertHost = document.getElementById('image-insert-dialog');
    var imageInsertDialog = null;
    if (imageInsertHost) {
        imageInsertDialog = new ej.popups.Dialog({
            header: 'Insert Image',
            content: imageInsertDialogContent,
            width: '430px',
            isModal: true,
            showCloseIcon: true,
            closeOnEscape: true,
            visible: false,
            position: {
                X: 'center',
                Y: 'center'
            },
            target: document.body,
            open: function() {
                initImageDialogFileUI();
            },
            buttons: [{
                    click: function() {
                        var urlInput = document.getElementById('img-insert-url');
                        var altInput = document.getElementById('img-insert-alt');
                        var captionInput = document.getElementById('img-insert-caption');
                        var fileInput = document.getElementById('img-insert-file-input');
                        var alt = (altInput && altInput.value.trim()) || '';
                        var caption = (captionInput && captionInput.value.trim()) || '';
                        var urlSrc = (urlInput && urlInput.value.trim()) || '';
                        var hasUrl = urlSrc.length > 0;
                        var files = fileInput ? pickLocalImageFiles(fileInput) : [];
                        var hasFiles = files.length > 0;
                        if (!hasUrl && !hasFiles) {
                            return;
                        }
                        if (hasUrl && hasFiles) {
                            return;
                        }
                        if (hasUrl) {
                            headlessEditor.commands.insertImage([{
                                src: urlSrc,
                                alt: alt,
                                caption: caption,
                                display: 'block',
                                align: 'none',
                                wrap: 'none'
                            }]);
                            imageInsertDialog.hide();
                            return;
                        }
                        Promise.all(files.map(buildLocalImagePayload)).then(function(payloads) {
                            headlessEditor.commands.insertImage(payloads.map(function(payload) {
                                return Object.assign({}, payload, { caption: caption });
                            }));
                            imageInsertDialog.hide();
                        });
                    },
                    buttonModel: {
                        content: 'Insert',
                        isPrimary: true
                    }
                },
                {
                    click: function() {
                        imageInsertDialog.hide();
                    },
                    buttonModel: {
                        content: 'Cancel'
                    }
                }
            ]
        });
        imageInsertDialog.appendTo(imageInsertHost);
    }

    var imagePropertiesHost = document.getElementById('image-properties-dialog');
    var imageDimensionsHost = document.getElementById('image-dimensions-dialog');
    var imagePropertiesDialog = null;
    var imageDimensionsDialog = null;
    var pendingUpdateFile = null;
    var imagePropertiesDialogContent = '' +
        '<div class="image-dialog-content">' +
        '  <div class="form-group"><label>Image URL</label><input id="img-update-url" class="e-input" type="text" placeholder="Enter image URL"/></div>' +
        '  <div class="form-group"><label>Alt Text</label><input id="img-update-alt" class="e-input" type="text" placeholder="Enter alternative text"/></div>' +
        '  <div class="form-group"><label>Title</label><input id="img-update-title" class="e-input" type="text" placeholder="Enter title (optional)"/></div>' +
        '  <div class="form-group"><label>Replace from Local Device</label><button id="img-update-browse" type="button" class="e-btn e-outline img-file-trigger">Choose File...</button><input id="img-update-file-input" type="file" accept="image/*" style="display:none"/><div id="img-update-file-name" class="image-dialog-file-info"></div></div>' +
        '</div>';
    var imageDimensionsDialogContent = '' +
        '<div class="image-dialog-content">' +
        '  <div class="form-group"><label>Width</label><input id="img-update-width" class="e-input" type="number" min="0" placeholder="Auto"/></div>' +
        '  <div class="form-group"><label>Height</label><input id="img-update-height" class="e-input" type="number" min="0" placeholder="Auto"/></div>' +
        '</div>';
    function readSelectedImageAttrs() {
        var selected = (headlessEditor.getSelectedImage && headlessEditor.getSelectedImage()) ||
            (headlessEditor.getSelectedNode && headlessEditor.getSelectedNode());
        return selected && selected.node && selected.node.attrs ? selected.node.attrs : null;
    }
    function readInputValue(id) {
        var element = document.getElementById(id);
        return element && element.value ? element.value.trim() : '';
    }
    function setElementValue(id, value) {
        var element = document.getElementById(id);
        if (element && 'value' in element) {
            element.value = value;
        } else if (element) {
            element.textContent = value;
        }
    }
    function resolvePendingImageSource(file) {
        return resolveImageFileSource(file);
    }
    function applyImageProperties() {
        var payload = {
            alt: readInputValue('img-update-alt'),
            title: readInputValue('img-update-title')
        };
        var url = readInputValue('img-update-url');
        if (url) {
            payload.src = url;
        }
        var update = pendingUpdateFile ? resolvePendingImageSource(pendingUpdateFile) : Promise.resolve(null);
        update.then(function(src) {
            if (src) {
                payload.src = src;
            }
            headlessEditor.commands.updateImage(payload);
            pendingUpdateFile = null;
            imagePropertiesDialog.hide();
        });
    }
    function buildImagePropertiesDialog() {
        if (imagePropertiesDialog || !imagePropertiesHost) {
            return;
        }
        imagePropertiesDialog = new ej.popups.Dialog({
            header: 'Update Image', content: imagePropertiesDialogContent, width: '460px', isModal: true,
            showCloseIcon: true, closeOnEscape: true, visible: false, position: { X: 'center', Y: 'center' }, target: document.body,
            beforeOpen: function() {
                var selected = readSelectedImageAttrs() || {};
                setElementValue('img-update-url', typeof selected.src === 'string' ? selected.src : '');
                setElementValue('img-update-alt', typeof selected.alt === 'string' ? selected.alt : '');
                setElementValue('img-update-title', typeof selected.title === 'string' ? selected.title : '');
                pendingUpdateFile = null;
                setElementValue('img-update-file-name', '');
            },
            open: function() {
                var input = document.getElementById('img-update-file-input');
                var button = document.getElementById('img-update-browse');
                if (button && input) { button.onclick = function() { input.click(); }; }
                if (input) { input.onchange = function() { pendingUpdateFile = input.files && input.files[0]; setElementValue('img-update-file-name', pendingUpdateFile ? pendingUpdateFile.name : ''); }; }
            },
            buttons: [
                { click: applyImageProperties, buttonModel: { content: 'Save', isPrimary: true } },
                { click: function() { imagePropertiesDialog.hide(); }, buttonModel: { content: 'Cancel' } }
            ]
        });
        imagePropertiesDialog.appendTo(imagePropertiesHost);
    }
    function buildImageDimensionsDialog() {
        if (imageDimensionsDialog || !imageDimensionsHost) {
            return;
        }
        imageDimensionsDialog = new ej.popups.Dialog({
            header: 'Image Dimensions', content: imageDimensionsDialogContent, width: '380px', isModal: true,
            showCloseIcon: true, closeOnEscape: true, visible: false, position: { X: 'center', Y: 'center' }, target: document.body,
            beforeOpen: function() {
                var selected = readSelectedImageAttrs() || {};
                setElementValue('img-update-width', typeof selected.width === 'number' ? String(selected.width) : '');
                setElementValue('img-update-height', typeof selected.height === 'number' ? String(selected.height) : '');
            },
            buttons: [
                { click: function() { headlessEditor.commands.setImageDimension({ width: Number(readInputValue('img-update-width')) || null, height: Number(readInputValue('img-update-height')) || null }); imageDimensionsDialog.hide(); }, buttonModel: { content: 'Save', isPrimary: true } },
                { click: function() { imageDimensionsDialog.hide(); }, buttonModel: { content: 'Cancel' } }
            ]
        });
        imageDimensionsDialog.appendTo(imageDimensionsHost);
    }
    function createdImageMenu() {
        var imageElement = document.getElementById('image-menu-items');
        if (imageElement) {
            imageElement.innerHTML = '';
            imageMenu = new ej.navigations.Menu({
                items: [{
                text: 'Align',
                iconCss: 'e-icons e-align-left',
                items: [{
                        text: 'Left',
                        id: 'image-align-left',
                        iconCss: 'e-icons e-align-left'
                    },
                    {
                        text: 'Center',
                        id: 'image-align-center',
                        iconCss: 'e-icons e-align-center'
                    },
                    {
                        text: 'Right',
                        id: 'image-align-right',
                        iconCss: 'e-icons e-align-right'
                    }
                ]
            },
            {
                text: 'Wrap',
                iconCss: 'e-icons e-left-wrap',
                items: [{
                        text: 'Float Left',
                        id: 'image-wrap-left',
                        iconCss: 'e-icons e-left-wrap'
                    },
                    {
                        text: 'Float Right',
                        id: 'image-wrap-right',
                        iconCss: 'e-icons e-right-wrap'
                    }
                ]
            },
            {
                text: 'Display Mode',
                iconCss: 'e-icons e-image',
                items: [
                    { text: 'Block', id: 'image-display-block' },
                    { text: 'Inline', id: 'image-display-inline' }
                ]
            },
            {
                text: 'Dimensions',
                id: 'image-dimensions',
                iconCss: 'e-icons e-resize'
            },
            {
                text: 'Add/Remove Caption',
                id: 'image-caption',
                iconCss: 'e-icons e-alt-text e-icons'
            },
            {
                text: 'Update Image',
                id: 'image-update',
                iconCss: 'e-icons e-edit'
            },
            {
                text: 'Delete Image',
                id: 'image-delete',
                iconCss: 'e-icons e-trash'
            }
        ],
                orientation: 'Vertical',
                select: function(args) {
                    onImageMenuSelect(args);
                }
            }, imageElement);
            imageMenu.setProperties({ disabled: true });
        }
    }

    function onImageMenuSelect(args) {
        var itemId = args.item && args.item.id;
        switch (itemId) {
            case 'image-align-left':
                headlessEditor.commands.setImageAlign({
                    align: 'left'
                });
                break;
            case 'image-align-center':
                headlessEditor.commands.setImageAlign({
                    align: 'center'
                });
                break;
            case 'image-align-right':
                headlessEditor.commands.setImageAlign({
                    align: 'right'
                });
                break;
            case 'image-wrap-left':
                headlessEditor.commands.setImageWrap({
                    wrap: 'left'
                });
                break;
            case 'image-wrap-right':
                headlessEditor.commands.setImageWrap({
                    wrap: 'right'
                });
                break;
            case 'image-display-block':
                headlessEditor.commands.setImageDisplay({ mode: 'block' });
                break;
            case 'image-display-inline':
                headlessEditor.commands.setImageDisplay({ mode: 'inline' });
                break;
            case 'image-dimensions':
                buildImageDimensionsDialog();
                imageDimensionsDialog.show();
                break;
            case 'image-caption':
                if (headlessEditor.can().toggleCaption()) {
                    headlessEditor.commands.toggleCaption();
                }
                break;
            case 'image-update':
                buildImagePropertiesDialog();
                imagePropertiesDialog.show();
                break;
            case 'image-delete':
                headlessEditor.commands.removeImage();
                break;
        }
    }

    function downloadFile(content, filename, mimeType) {
        var blob = new Blob([content], {
            type: mimeType
        });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    var exportMenuItems = [{
        iconCss: 'e-icons e-export',
        items: [{ id: 'export-html', text: 'Export as HTML' },
        { id: 'export-text', text: 'Export as Text' },
        { id: 'export-json', text: 'Export as JSON' }
        ]
    }];

    function onExportMenuSelect(args) {
        switch (args.item && args.item.id) {
            case 'export-html':
                downloadFile(headlessEditor.getHtml(), 'document.html', 'text/html');
                break;
            case 'export-text':
                downloadFile(headlessEditor.getText(), 'document.txt', 'text/plain');
                break;
            case 'export-json':
                downloadFile(JSON.stringify(headlessEditor.getDocument(), null, 2), 'document.json', 'application/json');
                break;
        }
    }
    var exportElement = document.getElementById('export-menu-items');
    if (exportElement) {
        new ej.navigations.Menu({
            items: exportMenuItems,
            select: function(args) {
                onExportMenuSelect(args);
            }
        }, exportElement);
    }
    var linkDialog = null;

    function getHeadlessEditorSelectedText() {
        try {
            var fn = headlessEditor.getSelectionText;
            if (typeof fn === 'function') {
                var result = fn.call(headlessEditor);
                if (typeof result === 'string') {
                    return result;
                }
            }
        } catch (_e) {}
        return '';
    }

    function openLinkDialog() {
        var selectedText = getHeadlessEditorSelectedText().trim();
        var content = '' +
            '<div class="e-link-dialog-content">' +
            '  <div class="e-link-field">' +
            '    <label for="link-text">Text to display</label>' +
            '    <input id="link-text" class="e-input" type="text" placeholder="Enter text">' +
            '  </div>' +
            '  <div class="e-link-field">' +
            '    <label for="link-url">URL</label>' +
            '    <input id="link-url" class="e-input" type="text" placeholder="https://example.com">' +
            '  </div>' +
            '  <div class="e-link-field">' +
            '    <label for="link-title">Title</label>' +
            '    <input id="link-title" class="e-input" type="text" placeholder="Enter title (optional)">' +
            '  </div>' +
            '</div>';
        if (!linkDialog) {
            linkDialog = new ej.popups.Dialog({
                header: 'Insert Link',
                content: content,
                width: '420px',
                showCloseIcon: true,
                isModal: true,
                visible: false,
                buttons: [{
                        buttonModel: {
                            content: 'Cancel'
                        },
                        click: function() {
                            if (linkDialog) {
                                linkDialog.hide();
                            }
                        }
                    },
                    {
                        buttonModel: {
                            content: 'Insert',
                            isPrimary: true
                        },
                        click: function() {
                            var textElement = document.getElementById('link-text');
                            var urlElement = document.getElementById('link-url');
                            var titleElement = document.getElementById('link-title');
                            var text = (textElement && textElement.value.trim()) || '';
                            var url = (urlElement && urlElement.value.trim()) || '';
                            var title = (titleElement && titleElement.value.trim()) || '';
                            if (!url) {
                                return;
                            }
                            headlessEditor.commands.setLink({
                                href: url,
                                title: title || undefined,
                                displayText: text || url
                            });
                            if (linkDialog) {
                                linkDialog.hide();
                            }
                        }
                    }
                ]
            });
            linkDialog.appendTo('#link-dialog');
            var textInput = document.getElementById('link-text');
            var urlInput = document.getElementById('link-url');
            var updateInsertEnabled = function() {
                var urlVal = ((urlInput && urlInput.value) || '').trim();
                var enabled = urlVal.length > 0;
                var insertBtn = document.querySelector('#link-dialog .e-primary');
                if (insertBtn) {
                    insertBtn.disabled = !enabled;
                }
            };
            if (textInput) {
                textInput.oninput = updateInsertEnabled;
            }
            if (urlInput) {
                urlInput.oninput = updateInsertEnabled;
            }
        }
        var textElement = document.getElementById('link-text');
        var urlElement = document.getElementById('link-url');
        var titleElement = document.getElementById('link-title');
        if (textElement) {
            textElement.value = selectedText;
        }
        if (urlElement) {
            urlElement.value = '';
        }
        if (titleElement) {
            titleElement.value = '';
        }
        var insertBtn = document.querySelector('#link-dialog .e-primary');
        if (insertBtn) {
            var urlVal = ((urlElement && urlElement.value) || '').trim();
            insertBtn.disabled = urlVal.length === 0;
        }
        linkDialog.show();
    }
    toolbar.appendTo('#toolbar');
    new ej.popups.Tooltip({
        target: '.e-toolbar-item:not(.e-separator)',
        position: 'BottomCenter',
        showTipPointer: true
    }).appendTo('#toolbar');
    if (container) {
        container.addEventListener('mouseup', refresh);
        container.addEventListener('keyup', refresh);
        container.addEventListener('click', refresh);
    }
};