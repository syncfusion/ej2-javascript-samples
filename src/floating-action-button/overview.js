this.default = function () {

    /**
     * Grid component rendered to add it as target for FAB.
     */
    var orders = [];

    for (i = 1; i < 10; i++) {
        orders.push({
            "OrderID": 10589 + i,
            "CustomerID": ["VINET", "TOMSP", "SUPRD", "CHOPS", "RICSU"][Math.floor(Math.random() * 5)],
            "Freight": (10.35 * i).toFixed(2),
            "ShippingCountry": ["France", "Brazil", "Switzerland", "Germany"][Math.floor(Math.random() * 4)]
        });
    }

    var grid = new ej.grids.Grid(
        {
            dataSource: orders,
            editSettings: { allowAdding: true, mode: 'Dialog' },

        });
    grid.appendTo('#Grid');


    /**
     * FAB rendered with add icon and targeted to Grid component.
     */
    var fabObj = new ej.buttons.Fab({
        iconCss: 'e-icons e-plus',
        target: '#target'
    });
    fabObj.appendTo('#fab');

    fabObj.element.onclick = function() {
        grid.addRecord();
    };
};
