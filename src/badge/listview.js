/**
 *  Sample for CSS listview integration
 */
this.default = function () {
    var list = new ej.lists.ListView({
        // Bind listview datasource
        dataSource: window.listData,
        // Assign header title
        headerTitle: 'Inbox',
        // Enable header
        showHeader: true,
        // Assign template
        template: '<div class="listWrapper" style="width: inherit;height: inherit;"><span class="${icons} list_svg">&nbsp;</span>' +
            '<span class="list_text">${text} </span>' +
            '<span class="${badge}">${messages}</span></div>',

        // Map fields
        fields: { groupBy: 'type' },
        // Bind actioncomplete event
        actionComplete: function () {
            var list = document.getElementById('lists').getElementsByClassName('e-list-group-item')[0];
            list.style.display = 'none';
        }
    });
    list.appendTo('#lists');
};