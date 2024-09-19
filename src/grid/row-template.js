this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.pizzaData,
        rowTemplate: '#rowtemplate',
        height: 335,
        width: 'auto',
        columns: [
            { headerText: 'PIZZA MENU', headerTextAlign: 'Center', field: 'Title', customAttributes: { class: 'e-pizza-cell' } },
        ]
    });
    grid.appendTo('#Grid');

    window.chiptags = function (tags) {
        var chipElement = document.createElement('div');
        var chipList = new ej.buttons.ChipList({ chips: tags, cssClass: 'e-outline' }, chipElement);
        return chipList.element.outerHTML;
    };
};
