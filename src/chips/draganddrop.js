/**
 * Drag and drop chip sample
 */

this.default = function () {
    new ej.buttons.ChipList({
        chips: [
            { text: 'Extra cheese', cssClass: 'e-info' },
            { text: 'Spicy Level: Medium', cssClass: 'e-danger' },
            { text: 'Spicy Level: Low', cssClass: 'e-success' },
            { text: 'Fast Delivery', cssClass: 'e-warning' },
            { text: 'Gift Wrapping', cssClass: 'e-primary' },
            { text: 'Eco-Friendly Packaging', cssClass: 'e-success' }
        ],
        allowDragAndDrop: true
    }, '#choice-container');

    new ej.buttons.ChipList({ chips: [], allowDragAndDrop: true }, '#selection-container');
};