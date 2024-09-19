/**
 * ListView Nested Sample
 */
this.default = function () {

    //Initialize ListView component
    var nestedListObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource:  window.listViewData,

        //Map appropriate columns to fields property
        fields: { iconCss: 'icon', tooltip: 'text' },

        //Set true to show icons
        showIcon: true,

        //Set header title
        headerTitle: 'Folders',

        //Set true to show header title
        showHeader: true,

        animation: { duration:0 }

    });

//Render initialized ListView component
nestedListObj.appendTo('#listview');

};
