/**
 *  Tab orientation sample
 */
var romeEmployees = [
    { id: '1', name: 'Anne Dodsworth', role: 'Product Manager' },
    { id: '2', name: 'Laura Callahan', role: 'Team Lead' },
    { id: '3', name: 'Andrew Fuller', role: 'Developer' }
];
var parisEmployees = [
    { id: '4', name: 'Robert King', role: 'Team Lead' },
    { id: '5', name: 'Michael Suyama', role: 'Developer' },
    { id: '6', name: 'Margaret Peacock', role: 'Developer' }
];
var londonEmployees = [
    { id: '7', name: 'Janet Leverling', role: 'CEO' },
    { id: '8', name: 'Steven Buchanan', role: 'HR' },
    { id: '9', name: 'Nancy Davolio', role: 'Product Manager' }
];

//Initialize ListView component
var listObj1 = new ej.lists.ListView({
    cssClass: 'employee-list',
    dataSource: romeEmployees,
    template: '<div class="template-container"><div class="left"><img class="empImg" src="src/tab/images/${id}.png" ' +
        'alt="${id}" /></div><div class="left info"><div class="name">${name}</div> <div class="role">${role}</div></div></div>'
});

//Initialize ListView component
var listObj2 = new ej.lists.ListView({
    cssClass: 'employee-list',
    dataSource: parisEmployees,
    template: '<div class="template-container"><div class="left"><img class="empImg" src="src/tab/images/${id}.png" ' +
        'alt="${id}" /></div><div class="left info"><div class="name">${name}</div> <div class="role">${role}</div></div></div>'
});

//Initialize ListView component
var listObj3 = new ej.lists.ListView({
    cssClass: 'employee-list',
    dataSource: londonEmployees,
    template: '<div class="template-container"><div class="left"><img class="empImg" src="src/tab/images/${id}.png" ' +
        'alt="${id}" /></div><div class="left info"><div class="name">${name}</div> <div class="role">${role}</div></div></div>'
});

this.default = function () {
    //Initialize Tab component
    var tabObj = new ej.navigations.Tab({
        height: 320,
        showCloseButton: true
    });
    //Render initialized Tab component
    tabObj.appendTo('#tab_orientation');

    //Render initialized ListView component
    listObj1.appendTo('#rome');

    //Render initialized ListView component
    listObj2.appendTo('#paris');

    //Render initialized ListView component
    listObj3.appendTo('#london');

    //Initialize DropDownList component
    var headerPositions = new ej.dropdowns.DropDownList({
        width: '90%',
        change: changeHeaderPosition
    });
    //Render initialized DropDownList component
    headerPositions.appendTo('#orientation');

    //Initialize DropDownList component
    var headerStyles = new ej.dropdowns.DropDownList({
        width: '90%',
        change: changeHeaderStyle
    });
    //Render initialized DropDownList component
    headerStyles.appendTo('#headerStyles');

    // Change event function for DropDownList component
    function changeHeaderPosition(args) {
        tabObj.headerPlacement = args.itemData.value;
        tabObj.dataBind();
    }

    // Change event function for DropDownList component
    function changeHeaderStyle(args) {
        removeStyleClass();
        var name = args.itemData.value;
        if (name === 'fill') {
            tabObj.element.classList.add('e-fill');
        } else if (name === 'accent') {
            tabObj.element.classList.add('e-background');
            tabObj.element.classList.add('e-accent');
        }
        tabObj.refreshActiveBorder();
    }
    function removeStyleClass() {
        tabObj.element.classList.remove('e-fill');
        tabObj.element.classList.remove('e-background');
        tabObj.element.classList.remove('e-accent');
    }
};