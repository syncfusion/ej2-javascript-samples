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
    var cellspacing = new ej.inputs.NumericTextBox({
        placeholder: 'Ex: 10',
        floatLabelType: 'Never',
        change: valueChange,
        type:'number',
        value: 10,
        min: 1,
        max: 20
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
        dashboard.cellSpacing = [parseInt(args.value, 10), parseInt(args.value, 10)];
    }
    function onChange(args) {
        if (args.event.currentTarget.firstChild.childNodes[0].id === 'floating') {
            dashboardObject.allowFloating = args.checked;
        }
        if (args.event.currentTarget.firstChild.childNodes[0].id === 'resizing') {
            dashboardObject.allowResizing = args.checked;
        }
    }
    document.getElementById('remove').onclick = function (e) {
		if (dashboardObject.panels.length > 0) {
			for (var i = dashboardObject.panels.length - 1; i < dashboardObject.panels.length; i++) {
				dashboardObject.removePanel(dashboardObject.panels[dashboardObject.panels.length - 1 - i].id);
			}
		}
    };
    var count = 5;
    document.getElementById('add').onclick = function (e) {
        count = count + 1;      
        var panel = [{
            'id': count.toString() + '_layout', 'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0,
            header: '<div>Panel ' + count.toString() + '</div>', content: '<div></div>'
        }];
        dashboardObject.addPanel(panel[0]);
    };
};
