
this.default = function () {
    // define the array of data
    var sportsData = ['Badminton', 'Basketball', 'Cricket',
        'Football', 'Golf', 'Gymnastics',
        'Hockey', 'Rugby', 'Snooker', 'Tennis'];

    // initialize AutoComplete component
    var atcObj = new ej.dropdowns.AutoComplete({
        //set the data to dataSource property
        dataSource: sportsData,
        // set the placeholder to AutoComplete input element
        placeholder: 'e.g. Basketball'
    });
    atcObj.appendTo('#games');
};