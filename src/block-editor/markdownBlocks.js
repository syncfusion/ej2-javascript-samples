var turndownService;
this.default = function () {
  var breadcrumbItems = [{ text: 'Team' }];
  var data = [
    {
      id: 'Team_Sessions',
      name: 'Team Sessions',
      mdFile: 'src/block-editor/Team Sessions.md',
      selected: true,
      expanded: true,
      children: [
        { id: '1', name: 'Meeting minutes.md', mdFile: 'src/block-editor/Meeting minutes.md' },
        { id: '2', name: 'Brain storming.md', mdFile: 'src/block-editor/Brain storming.md' },
        { id: '3', name: 'Retrospective.md', mdFile: 'src/block-editor/Retrospective.md' }
      ]
    }
  ];

  function findNodeById(nodes, id) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.id === id) return n;
      if (n.children && n.children.length) {
        var found = findNodeById(n.children, id);
        if (found) return found;
      }
    }
    return undefined;
  }

  function formatBreadcrumbText(name) {
    return name && name.endsWith('.md') ? name.replace(/\.md$/i, '') : name;
  }

  // Breadcrumb
  var breadcrumb = new ej.navigations.Breadcrumb({
    items: breadcrumbItems,
    separatorTemplate: '<span class="e-icons e-chevron-right"></span>'
  });
  breadcrumb.appendTo('#breadcrumb');

  // Toolbar with templates
  var toolbar = new ej.navigations.Toolbar({
    items: [
      { align: 'Left', template: '#breadcrumb' },
      { align: 'Right', template: '#downloadBtn' }
    ]
  });
  toolbar.appendTo('#toolbar');

  // Sidebar
  var sidebar = new ej.navigations.Sidebar({
    enableDock: true,
    width: '220px',
    dockSize: '33px',
    enableGestures: false,
    mediaQuery: '(min-width: 600px)',
    target: '.blockeditor-marked',
    isOpen: false,
    open: onOpen,
    close: onClose
  });
  sidebar.appendTo('#sidebar-treeview');

  var closeBtnEl = document.getElementById('left-toc-closebtn');

  if (closeBtnEl && window.innerWidth < 600) {
    closeBtnEl.style.left = '18px';
    closeBtnEl.classList.add('expand-mode');
  }

  // TreeView
  var treeview = new ej.navigations.TreeView({
    fields: {
      dataSource: data,
      id: 'id',
      text: 'name',
      child: 'children'
    },
    expandOn: 'Click',
    nodeSelected: function (args) {
      var selectedId = args.nodeData && args.nodeData.id;
      if (!selectedId) return;

      if (selectedId === 'Team_Sessions') {
        breadcrumbItems = [{ text: 'Team' }, { text: 'Team Sessions' }];
        breadcrumb.items = breadcrumbItems;
        breadcrumb.dataBind();
        loadContent('src/block-editor/Team Sessions.md');
        return;
      }

      var selectedNode = findNodeById(data, selectedId);
      if (selectedNode && selectedNode.mdFile) {
        loadContent(selectedNode.mdFile);
        var isUnderGuideline = !!args.nodeData.parentID && args.nodeData.parentID === 'Team_Sessions';
        if (isUnderGuideline) {
          breadcrumbItems = [
            { text: 'Team' },
            { text: 'Team Sessions' },
            { text: formatBreadcrumbText(selectedNode.name) }
          ];
        } else {
          breadcrumbItems = [
            { text: 'Team' },
            { text: formatBreadcrumbText(selectedNode.name) }
          ];
        }
        breadcrumb.items = breadcrumbItems;
        breadcrumb.dataBind();
      }
    }
  });
  treeview.appendTo('#main-treeview');

  function onOpen() {
    setTimeout(function () {
      treeview.expandAll();
      if (closeBtnEl) {
        closeBtnEl.style.left = '202px';
        closeBtnEl.classList.remove('expand-mode');
      }
      treeview.element.style.display = 'block';
    }
    )
  };

  function onClose() {
    if (closeBtnEl) {
      closeBtnEl.style.left = '18px';
      closeBtnEl.classList.add('expand-mode');
    }
    treeview.element.style.display = 'none';
  }

  if (closeBtnEl) {
    closeBtnEl.addEventListener('click', function () {
      sidebar.toggle();
    });
  }

  // Block Editor
  var inlineToolbarItems = ['Bold', 'Italic', 'Underline', 'Strikethrough'];

  var blockEditor = new ej.blockeditor.BlockEditor({
    height: '597px',
    inlineToolbarSettings: {
      width: '180px',
      enable: true,
      items: inlineToolbarItems,
      enableTooltip: true
    },
    blocks: [],
    commandMenuSettings: {
      popupWidth: '298px',
      popupHeight: '400px',
      commands: [
        {
          id: 'bullet-list-command',
          type: 'BulletList',
          groupBy: 'General',
          label: 'Bullet List',
          tooltip: 'Create a bullet list',
          iconCss: 'e-icons e-list-unordered',
          shortcut: 'Ctrl+Shift+8'
        },
        {
          id: 'numbered-list-command',
          type: 'NumberedList',
          groupBy: 'General',
          label: 'Numbered List',
          tooltip: 'Create a numbered list',
          iconCss: 'e-icons e-list-ordered',
          shortcut: 'Ctrl+Shift+9'
        },
        {
          id: 'divider-command',
          type: 'Divider',
          groupBy: 'General',
          label: 'Divider',
          tooltip: 'Add a horizontal line',
          iconCss: 'e-icons e-be-divider',
          shortcut: 'Ctrl+Shift+-'
        },
        {
          id: 'code-command',
          type: 'Code',
          groupBy: 'Insert',
          label: 'Code',
          tooltip: 'Insert a code block',
          iconCss: 'e-icons e-insert-code',
          shortcut: 'Ctrl+Alt+k'
        },
        {
          id: 'table-command',
          type: 'Table',
          groupBy: 'Insert',
          label: 'Table',
          tooltip: 'Insert a table block',
          iconCss: 'e-icons e-table-2',
          shortcut: 'Ctrl+Alt+T'
        },
        {
          id: 'paragraph-command',
          type: 'Paragraph',
          groupBy: 'Text Styles',
          label: 'Paragraph',
          tooltip: 'Add a paragraph',
          iconCss: 'e-icons e-be-paragraph',
          shortcut: 'Ctrl+Alt+P'
        },
        {
          id: 'heading1-command',
          type: 'Heading',
          groupBy: 'Text Styles',
          label: 'Heading 1',
          tooltip: 'Page title or main heading',
          iconCss: 'e-icons e-be-h1',
          shortcut: 'Ctrl+Alt+1'
        },
        {
          id: 'heading2-command',
          type: 'Heading',
          groupBy: 'Text Styles',
          label: 'Heading 2',
          tooltip: 'Section heading',
          iconCss: 'e-icons e-be-h2',
          shortcut: 'Ctrl+Alt+2'
        },
        {
          id: 'heading3-command',
          type: 'Heading',
          groupBy: 'Text Styles',
          label: 'Heading 3',
          tooltip: 'Subsection heading',
          iconCss: 'e-icons e-be-h3',
          shortcut: 'Ctrl+Alt+3'
        },
        {
          id: 'heading4-command',
          type: 'Heading',
          groupBy: 'Text Styles',
          label: 'Heading 4',
          tooltip: 'Smaller heading for nested content',
          iconCss: 'e-icons e-be-h4',
          shortcut: 'Ctrl+Alt+4'
        },
        {
          id: 'quote-command',
          type: 'Quote',
          groupBy: 'Text Styles',
          label: 'Quote',
          tooltip: 'Insert a quote block',
          iconCss: 'e-icons e-blockquote',
          shortcut: 'Ctrl+Alt+Q'
        }
      ]
    }
  });
  blockEditor.appendTo('#block-editor');
  loadExternalFile();

    function loadExternalFile() {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/turndown/dist/turndown.js';
        script.onload = function() {
          var pluginScript = document.createElement('script');
          pluginScript.src = 'https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js';
          pluginScript.onload = function() {
            try {
              turndownService = new TurndownService({
                codeBlockStyle: 'fenced',
                emDelimiter: '_',
                bulletListMarker: '-',
                headingStyle: 'atx'
              });
              var plugin = (typeof gfm !== 'undefined' && gfm) ||
                           (typeof turndownPluginGfm !== 'undefined' && turndownPluginGfm) ||
                           (window && window.turndownPluginGfm) ||
                           (window && window.gfm);
              if (plugin) {
                // plugin may expose either the plugin function or an object containing `gfm`
                if (typeof plugin === 'function') turndownService.use(plugin);
                else if (plugin.gfm) turndownService.use(plugin.gfm);
                else turndownService.use(plugin);
              }
            } catch (e) {
              turndownService = new TurndownService();
            }
          };
          head.appendChild(pluginScript);
        };
        head.appendChild(script);
    }

  var markdownConverter = ej.markdownconverter.MarkdownConverter;

  function loadContent(mdFile) {
    fetch(mdFile)
      .then(function (res) { return res.text(); })
      .then(function (data) {
        var html = markdownConverter.toHtml(data);
        var nodeDatas = blockEditor.parseHtmlToBlocks(html);
        blockEditor.renderBlocksFromJson(nodeDatas, true);
      });
  }

  function filenameFromBreadcrumb() {
    var items = breadcrumb.items || [];
    if (!items.length) return 'document.md';
    var last = items[items.length - 1].text || 'document';
    var safe = String(last).replace(/[\\/:*?"<>|]+/g, '').trim() || 'document';
    return safe + '.md';
  }

  document.getElementById('downloadBtn').addEventListener('click', function () {
    var htmlContent = blockEditor.getDataAsHtml();
    var markdownContent = turndownService.turndown(htmlContent || '');
    var fileName = filenameFromBreadcrumb();

    var blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Initial state
  setTimeout(function () {
    loadContent('src/block-editor/Team Sessions.md');
    breadcrumbItems = [{ text: 'Team' }, { text: 'Team Sessions' }];
    breadcrumb.items = breadcrumbItems;
    breadcrumb.dataBind();
  }, 100);
};