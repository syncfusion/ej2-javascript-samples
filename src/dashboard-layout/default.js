/**
 *  Sample for default functionalities
 */
this.default = function () {    
    var dashboard = new ej.layouts.DashboardLayout({        
        cellSpacing: [10, 10],
        columns:5,
        allowResizing:true,
    });
    dashboard.appendTo('#defaultLayout');
    var dashboardObject = document.getElementById('defaultLayout').ej2_instances[0];
    var count = 8;   
    document.getElementById('add').onclick = function (e) {     
        var panel = [{ 'id': count.toString() + '_layout', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
        content: '<span id="close" class="e-template-icon e-clear-icon"></span><div class="text-align">' + count.toString() + '</div>'
        }];
        count = count + 1;
        dashboardObject.addPanel(panel[0]);
    };
    function onCloseIconHandler() {
        if (event.target.closest('.e-panel')) {
            dashboardObject.removePanel(event.target.closest('.e-panel').id);
        }

    }
    var closeElement = document.querySelectorAll('.e-clear-icon');
    for (var i = 0; i < closeElement.length; i++) {
        closeElement[i].addEventListener('click', onCloseIconHandler);
    }
};
