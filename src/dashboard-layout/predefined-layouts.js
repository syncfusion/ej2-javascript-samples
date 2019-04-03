/**
 *  Sample for predefined layout functionalities
 */
this.default = function () {
    var panels = window.panelData;
    var headerCount = 1;
    var dashboard = new ej.layouts.DashboardLayout({        
        cellSpacing: [10, 10],
        columns:6,
        panels: [{
            'sizeX': 4, 'sizeY': 3, 'row': 0, 'col': 0,
            header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
             content: '<div class="panel-content">Content Area</div>'
        },
        {
            'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4,
            header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
             content: '<div class="panel-content">Content Area</div>'
        },
        {
            'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0,
            header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
             content: '<div class="panel-content">Content Area</div>'
        }]
    });
    dashboard.appendTo('#dynamicLayout');
    var dashboardObject = document.getElementById('dynamicLayout').ej2_instances[0];
    var btnInstance = new ej.buttons.Button();
    btnInstance.appendTo('#reset');
    btnInstance.element.onclick = function () {
        var selectedElement = document.getElementsByClassName('e-selected-style');
        initializeTemplate(selectedElement[0]);
    };
    document.getElementById('template').onclick = function (args) {
        var target = args.target;
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        if (target.className === 'image-pattern-style') {
            initializeTemplate(args.target);
        }
        target.classList.add('e-selected-style');
    };
    function initializeTemplate(element) {
        var updatedpanels = [];
        var index = parseInt(element.getAttribute('data-id'), 10) - 1;
        var panel = Object.keys(panels[index]).map(function (panelIndex) {
            return panels[index][panelIndex];
        });
        for (var i = 0; i < panel.length; i++) {
            var panelModelValue = {
                row: panel[i].row,
                col: panel[i].col,
                sizeX: panel[i].sizeX,
                sizeY: panel[i].sizeY,
                header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
                content: '<div class="panel-content">Content Area</div>'
            };
            updatedpanels.push(panelModelValue);
        }
        dashboard.panels = updatedpanels;
    }
};
