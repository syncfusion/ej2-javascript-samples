this.default = function () {
  // define the JSON of data
  
  // initialize AutoComplete component
  var atcObj = new ej.dropdowns.AutoComplete({
      // set the data to dataSource property
      dataSource: window.booksData,
      // maps the appropriate column to fields property
      fields: { value: 'BookName' },
      // set placeholder to AutoComplete input element
      placeholder: 'e.g. Node.js Succinctly',
      // Bind the filter event
      filtering: function (e) {
          var options = {
              keys: ['BookName'],
              includeMatches: true,
              findAllMatches: true
          };
          // create object from Fuse constructor
          var fuse = new Fuse(window.booksData, options);
          // store the search result data based on typed characters
          var result = fuse.search(e.text);
          var data = [];
          for (var i = 0; i < result.length; i++) {
              data.push(result[i].item);
          }
          // pass the filter data source to updateData method.
          e.updateData(data, null);
          var popupElement = document.getElementById('books_popup');
          if (popupElement)
          {
              var lists = popupElement.querySelectorAll('.e-list-item');
              // For highlight the typed characters, pass the result data and list items to highlightSearch method.
              highlightSearch(lists, result);
          }
      }
  });
  atcObj.appendTo('#books');
  loadExternalFile();
  // Dynamically load the fuse.js file
  function loadExternalFile() {
      var script = document.createElement('script');
      script.src = 'dist/fuse.min.js';
      document.getElementsByTagName('head')[0].appendChild(script);
  }

  function highlightSearch(listItems, result) {
      if (result.length > 0) {
          for (var i = 0; i < listItems.length; i++) {
              var innerHTML = listItems[i].innerHTML;
              for (var j = result[i].matches[0].indices.length - 1; j >= 0; j--) {
                  var indexes = result[i].matches[0].indices[j];
                  innerHTML = innerHTML.substring(0, indexes[0]) + '<span class="e-highlight">' +
                      innerHTML.substring(indexes[0], (indexes[1] + 1)) + '</span>' + innerHTML.substring(indexes[1] + 1);
                  listItems[i].innerHTML = innerHTML;
              }
          }
      }
  }
};