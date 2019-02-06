/**
 *  Sample for CSS Avatar listview
 */
this.default = function () {
    var letterAvatarList = new ej.lists.ListView({
        // Bind listview datasource
        dataSource: window.dataSource,
        // Assign header title
        headerTitle: 'Contacts',
        // Enable header title
        showHeader: true,
        // Assign list-item template
        template: '<div class="listWrapper">' +
            '${if(avatar!=="")}' +
            '<span class="e-avatar e-avatar-small e-avatar-circle">${avatar}</span>' +
            '${else}' +
            '<span class="${pic} e-avatar e-avatar-small e-avatar-circle"> </span>' +
            '${/if}' +
            '<span class="list-text">' +
            '${text} </span> </div>',
        // Assign sorting order
        sortOrder: 'Ascending'
    });
    letterAvatarList.appendTo('#letterAvatarList');
};