/**
 * ListView Default Sample
 */
this.default = function () {

    //Initialize ListView component
    var listObj = new ej.lists.ListView();

    //Render initialized ListView component
    listObj.appendTo('#listview-def');

    //Initialize ListView component
    var grpListObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource: window.listData,

        //Map the appropriate columns to fields property
        fields: { groupBy: 'category' }

    });

    //Render initialized ListView component
    grpListObj.appendTo('#listview-grp');

};