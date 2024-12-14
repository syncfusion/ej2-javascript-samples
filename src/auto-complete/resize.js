this.default = function () {
    // define the JSON of data
    
    // initialize AutoComplete component
    var atcObj = new ej.dropdowns.AutoComplete({
        // set the data to dataSource property
        dataSource: window.booksData,
        // maps the appropriate column to fields property
        fields: { value: 'BookName' },
        // set placeholder to AutoComplete input element
        placeholder: 'Select any value',
        // set true for enable the resize property to AutoComplete
        allowResize: true,

    });
    atcObj.appendTo('#books');
  };
