/**
 * ListView RTL Sample
 */
this.default = function () {

    //Initialize ListView component
    var rtlListObj = new ej.lists.ListView({

        //Enable RTL
        enableRtl: true,

        //Set header title
        headerTitle: 'اسم الدولة',

        //Set true to show header title
        showHeader: true,

        //Pre-defined ListView height
        height: '400px'

    });

    //Render initialized ListView component
    rtlListObj.appendTo('#listview');

};