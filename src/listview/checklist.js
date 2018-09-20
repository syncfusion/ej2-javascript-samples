/**
 * ListView Checklist Sample
 */
this.default = function() {

    //Define an array of JSON data
    var data = [
        { text: 'Hennessey Venom', id: 'list-01' },
        { text: 'Bugatti Chiron', id: 'list-02' },
        { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
        { text: 'SSC Ultimate Aero', id: 'list-04' },
        { text: 'Koenigsegg CCR', id: 'list-05' },
        { text: 'McLaren F1', id: 'list-06' },
        { text: 'Aston Martin One- 77', id: 'list-07' },
        { text: 'Jaguar XJ220', id: 'list-08' },
        { text: 'McLaren P1', id: 'list-09' },
        { text: 'Ferrari LaFerrari', id: 'list-10' },
    ];

    //Initialize ListView component
    var listObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource: data,

        //Enables checkbox
        showCheckBox: true

    });

    //Render initialized ListView component
    listObj.appendTo('#listview-def');

    //Initialize ListView component
    var grpListObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource: window.listData,

        //Map the appropriate columns to fields property
        fields: { groupBy: 'category' },

        //Enables checkbox
        showCheckBox: true
    });

    //Render initialized ListView component
    grpListObj.appendTo('#listview-grp');
};