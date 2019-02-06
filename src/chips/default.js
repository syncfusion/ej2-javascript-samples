/**
 * Default Chip sample
 */

this.default = function () {
    // initialize default chip
    new ej.buttons.ChipList({ chips: window.chipsData.defaultData }, '#chip-default');

    // initialize avatar chip
    new ej.buttons.ChipList({ chips: window.chipsData.avatarData, enableDelete: true }, '#chip-avatar');

    // initialize filter chip
    new ej.buttons.ChipList({ chips: window.chipsData.filterData, selection: 'Multiple', selectedChips: [1, 3] }, '#chip-filter');

    // initialize choice chip
    new ej.buttons.ChipList(
        {
            chips: window.chipsData.choiceData, selection: 'Single', cssClass: 'e-outline',
            selectedChips: [1]
        },
        '#chip-choice');
};
