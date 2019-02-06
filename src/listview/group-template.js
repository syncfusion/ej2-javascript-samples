/**
 * ListView Group Template Sample
 */
this.default = function () {

        // Initialize ListView component
        var listObj = new ej.lists.ListView({

            //Set defined data to dataSource property
            dataSource: window.groupData,

            //Map the appropriate columns to fields property
            fields: { text: 'Name', groupBy: 'order' },

            cssClass: 'e-list-template',

            //Set customized group-header template
            groupTemplate: '<div class="e-list-wrapper"><span class="e-list-item-content">${items[0].category}</span></div>',

            //Set customized list template
            template: '<div class="settings e-list-wrapper e-list-multi-line e-list-avatar">' +
            '<span class="icon ${class} e-avatar"></span>' +
            '<span class="e-list-item-header">${Name}</span>' +
            '<span class="e-list-content">${content}</span>' +
            '</div>',

            //Set header title
            headerTitle: 'Settings',

            //Set true to show header title
            showHeader: true

        });

        //Render initialized ListView component
        listObj.appendTo('#groupedList');

    };
