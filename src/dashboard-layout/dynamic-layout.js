/**
 *  Sample for dynamic layout creation
 */
this.default = function () {
    //create and initiate the Dashboard layout component
    var instance = new ej.layouts.DashboardLayout({
        cellSize: ['15%', '60px'],
        floating: true
    });
    instance.appendTo('#dynamicLayout');

    //create and initiate the button component
    var btnInstance = new ej.buttons.Button();
    btnInstance.appendTo('#reset');

    btnInstance.element.onclick = function () {
        //when click the reset button the panels elements are removed from the component.
        instance.removeAll();
    };

    //Click event for custom templates in the Property Panel
    document.getElementById('template').onclick = function (args) {
        var target = args.target;
        var selectedElement = document.getElementsByClassName('e-selected-style');
        if (selectedElement.length) {
            selectedElement[0].classList.remove('e-selected-style');
        }
        if (target.className === 'image-pattern-style') {
            instance.removeAll();
            initializeTemplate(args.target);
        }
        target.classList.add('e-selected-style');
    };

    function initializeTemplate(element) {
        var headerCount = 1;
        var index = parseInt(element.getAttribute('data-id'), 10) - 1;
        var panels = window.panelData;
        var panel = Object.keys(panels[index]).map(function (panelIndex) { return panels[index][panelIndex]; });
        for (var i = 0; i < panel.length; i++) {
            var headerText = 'Header ' + headerCount.toString();
            var panelModelValue = {
                row: panel[i].row,
                col: panel[i].col,
                sizeX: panel[i].sizeX,
                sizeY: panel[i].sizeY,
                header: {
                    title: headerText
                }, body: {
                    content: '#bodycontent'
                }
            };
            instance.addPanel(panelModelValue);
            headerCount += 1;
        }
    }
};
