this.default = function () {
    var nodes = [
        { id: 'Books' },
        { id: 'Clothing' },
        { id: 'Electronics' },
        { id: 'Furniture' },
        { id: 'Jewelry' },
        { id: 'Toys' },
        { id: 'Air' },
        { id: 'Ground' },
        { id: 'Sea' },
        { id: 'Asia' },
        { id: 'Europe' },
        { id: 'North America' },
        { id: 'South America' },
        { id: 'Delayed' },
        { id: 'Delivered' },
        { id: 'In Transit' }
    ];
    var links = [
        { sourceId: 'Books', targetId: 'Air', value: 18 },
        { sourceId: 'Books', targetId: 'Ground', value: 12 },
        { sourceId: 'Clothing', targetId: 'Air', value: 25 },
        { sourceId: 'Clothing', targetId: 'Ground', value: 15 },
        { sourceId: 'Clothing', targetId: 'Sea', value: 20 },
        { sourceId: 'Electronics', targetId: 'Air', value: 35 },
        { sourceId: 'Electronics', targetId: 'Ground', value: 22 },
        { sourceId: 'Electronics', targetId: 'Sea', value: 18 },
        { sourceId: 'Furniture', targetId: 'Ground', value: 28 },
        { sourceId: 'Furniture', targetId: 'Sea', value: 25 },
        { sourceId: 'Jewelry', targetId: 'Air', value: 12 },
        { sourceId: 'Jewelry', targetId: 'Ground', value: 8 },
        { sourceId: 'Toys', targetId: 'Ground', value: 15 },
        { sourceId: 'Toys', targetId: 'Sea', value: 22 },
        { sourceId: 'Air', targetId: 'Asia', value: 40 },
        { sourceId: 'Air', targetId: 'Europe', value: 30 },
        { sourceId: 'Air', targetId: 'North America', value: 20 },
        { sourceId: 'Ground', targetId: 'Europe', value: 35 },
        { sourceId: 'Ground', targetId: 'North America', value: 30 },
        { sourceId: 'Ground', targetId: 'South America', value: 15 },
        { sourceId: 'Ground', targetId: 'Asia', value: 20 },
        { sourceId: 'Sea', targetId: 'Asia', value: 25 },
        { sourceId: 'Sea', targetId: 'Europe', value: 15 },
        { sourceId: 'Sea', targetId: 'North America', value: 30 },
        { sourceId: 'Sea', targetId: 'South America', value: 15 },
        { sourceId: 'Asia', targetId: 'Delayed', value: 35 },
        { sourceId: 'Asia', targetId: 'Delivered', value: 40 },
        { sourceId: 'Asia', targetId: 'In Transit', value: 10 },
        { sourceId: 'Europe', targetId: 'Delivered', value: 65 },
        { sourceId: 'Europe', targetId: 'In Transit', value: 15 },
        { sourceId: 'North America', targetId: 'Delivered', value: 50 },
        { sourceId: 'North America', targetId: 'In Transit', value: 30 },
        { sourceId: 'South America', targetId: 'Delayed', value: 10 },
        { sourceId: 'South America', targetId: 'In Transit', value: 20 }
    ];

    var sankey = new ej.charts.Sankey({
        width: '100%',
        height: '450px',
        title: 'Supply Chain Management',
        subTitle: 'Source: OECD‑ITF Global Freight Data',
        background: 'transparent',
        nodes: nodes,
        links: links,
        linkStyle: {
            opacity: 0.4,
            curvature: 0.5,
            colorType: 'Source'
        },
        labelSettings: {
            visible: ej.base.Browser.isDevice ? false : true,
        },
        tooltip: {
            enable: true,
            nodeTemplate: '${name}: ${value}k shipments',
            linkTemplate: '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments'
        },
        legendSettings: { visible: ej.base.Browser.isDevice ? false : true, position: 'Bottom' },
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light')
                .replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    sankey.appendTo('#sankey-print-export');

    // Get DOM references
    var panel = document.getElementById('exportPanel');
    var shell = document.getElementById('chartShell');
    var chartHost = document.getElementById('chartHost');

    // Initialize DropDownList for file type selection
    var dropdown = new ej.dropdowns.DropDownList({
        dataSource: ['JPEG', 'PNG', 'SVG', 'PDF'],
        value: 'JPEG',
        width: '100%'
    });
    dropdown.appendTo('#fileTypeDropdown');

    /**
     * Toggles the export panel open/closed state
     * @param {boolean} open - Whether to open or close the panel
     */
    function togglePanel(open) {
        if (open) {
            panel.removeAttribute('inert');
            panel.setAttribute('aria-hidden', 'false');
        } else {
            // Move focus away from panel before hiding it
            if (panel.contains(document.activeElement)) {
                document.getElementById('btnExport').focus();
            }
            panel.setAttribute('inert', '');
            panel.setAttribute('aria-hidden', 'true');
        }
        panel.classList.toggle('open', open);
        shell.classList.toggle('with-panel', open);

        if (ej.base.Browser.isDevice) {
            chartHost.style.display = open ? 'none' : '';
            shell.classList.toggle('mobile-panel-open', open);
        }

        setTimeout(function () {
            refreshChart();
        }, 250);
    }

    /**
     * Refreshes the chart after panel toggle with animation disabled temporarily
     */
    function refreshChart() {
        var animation = sankey.animation;
        animation.enable = false;
        sankey.refresh();
        animation.enable = true;
    }

    // Event listeners
    document.getElementById('btnExport').onclick = function () {
        togglePanel(true);
        // Move focus to file name input after panel opens
        setTimeout(function () {
            document.getElementById('expFileName').focus();
        }, 250);
    };

    document.getElementById('btnClosePanel').onclick = function () {
        togglePanel(false);
    };

    document.getElementById('btnCancelExport').onclick = function () {
        togglePanel(false);
    };

    document.getElementById('btnDoExport').onclick = function () {
        var fileNameInput = document.getElementById('expFileName');
        var fileName = (fileNameInput.value || 'Sankey').trim();
        sankey.export(dropdown.value, fileName);
        togglePanel(false);
    };

    document.getElementById('btnPrint').onclick = function () {
        sankey.print();
    };

    /**
     * Handle Escape key press to close the export panel
     */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            var panel = document.getElementById('exportPanel');
            // Check if panel is open by checking if it has 'open' class
            if (panel && panel.classList.contains('open')) {
                togglePanel(false);
            }
        }
    });
};
