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

            //Set customized group-header template
            groupTemplate: '<div><span class="category">${items[0].category}</span></div>',

            //Set customized list template
            template: '<div class="settings">' +
                '<div class="icon ${class}"></div>' +
                '<div class="_container"> ${if(content)}' +
                '<div class="name">${Name}</div>' +
                '<div class="content">${content}</div> ${else}' +
                '<div class="_name">${Name}</div> ${/if} </div>' +
                '</div>',

            //Set header title
            headerTitle: 'Settings',

            //Set true to show header title
            showHeader: true

        });

        //Render initialized ListView component
        listObj.appendTo('#groupedList');

    };
