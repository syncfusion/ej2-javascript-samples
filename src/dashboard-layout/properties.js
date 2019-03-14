/**
 *  Sample for properties
 */
this.default = function () {
    var dashboard = new ej.layouts.DashboardLayout({        
        allowResizing: true,
        cellSpacing: [10, 10],
        columns:6,
        panels: [{
            'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0,
            header: '<div>Panel 1</div>', content: '<div></div>'
        },
        {
            'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 2,
            header: '<div>Panel 2</div>', content: '<div></div>'
        },
        {
            'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 4,
            header: '<div>Panel 3</div>', content: '<div></div>'
        },
        {
            'sizeX': 4, 'sizeY': 2, 'row': 2, 'col': 0,
            header: '<div>Panel 4</div>', content: '<div></div>'
        },
        {
            'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 4,
            header: '<div>Panel 5</div>', content: '<div></div>'
        }]
    });
    dashboard.appendTo('#dynamicLayout');
    var cellspacing = new ej.inputs.TextBox({
        placeholder: 'Ex: 10',
        floatLabelType: 'Never',
        change: valueChange,
        type:'number',
        value: '10'
    });
    cellspacing.appendTo('#cellspacing');
    var floatObj = new ej.buttons.CheckBox({ checked: true, change: onChange });
    floatObj.appendTo('#floating');
    var pushObj = new ej.buttons.CheckBox({ checked: true, change: onChange });
    pushObj.appendTo('#pushing');
    var resizeObj = new ej.buttons.CheckBox({ checked: true, change: onChange });
    resizeObj.appendTo('#resizing');
    var dashboardObject = document.getElementById('dynamicLayout').ej2_instances[0];
    function valueChange(args) {
        if (args.event.currentTarget.id == 'cellspacing') {
            dashboard.cellSpacing = [parseInt(this.element.value, 10), parseInt(this.element.value, 10)];
        }
    }
    function onChange(args) {
        if (args.event.currentTarget.id === "floating") {
            if (args.checked) {
                dashboard.allowFloating = true;
            } else {
                dashboard.allowFloating = false;
            }
        }
        if (args.event.currentTarget.id === "resizing") {
            if (args.checked) {
                dashboard.allowResizing = true;
            } else {

                dashboard.allowResizing = false;
            }
        }
    }

    document.getElementById('remove').onclick = function (e) {
        for (var i = dashboardObject.panels.length - 1; i < dashboardObject.panels.length; i++) {
            dashboardObject.removePanel(dashboardObject.panels[dashboardObject.panels.length - 1 - i].id);
        }
    };
    var count = 4;
    document.getElementById('add').onclick = function (e) {      
        var panel = [{
            'id': count.toString() + '_layout', 'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0,
            header: '<div>Panel' + count.toString() + '</div>', content: '<div></div>'
        }];
        count = count + 1;
        dashboardObject.addPanel(panel[0]);
    };
};
