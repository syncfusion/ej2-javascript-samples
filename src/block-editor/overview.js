this.default = function () {
  var overviewBlockEditor = null;

  // XHR JSON loader (ES5)
  function loadJson(url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            onSuccess(data);
          } catch (e) {
            onError('Invalid JSON in ' + url + ': ' + e.message);
          }
        } else {
          onError('HTTP ' + xhr.status + ' while loading ' + url);
        }
      }
    };
    xhr.onerror = function () {
      onError('Network error while loading ' + url);
    };
    xhr.send(null);
  }

  // Load JSON and initialize editor
  loadJson('./src/block-editor/blockData.json', function (data) {
    // data has keys: blockDataOverview, users, etc.
    overviewBlockEditor = new ej.blockeditor.BlockEditor({
      blocks: data.blockDataOverview,
      users: data.users,
      imageBlockSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/RichTextEditor/SaveFile',
        path: 'https://services.syncfusion.com/js/production/RichTextEditor/'
      },
      inlineToolbarSettings: {
        items: [ 'Transform' ,'Bold', 'Italic', 'Underline', 'Strikethrough', 'Uppercase', 'Lowercase', 'Subscript', 'Superscript', 'InlineCode', 'Link', 'Color', 'Backgroundcolor' ]
      }
    });

    overviewBlockEditor.appendTo('#block-editor');
  }, function (message) {
    if (window.console && console.error) {
      console.error('Failed to load blockData.json:', message);
    }
    var container = document.getElementById('block-editor');
    if (container) {
      container.innerHTML = '<div style="color:#b91c1c;padding:8px;">Unable to load overview data. ' +
        'Ensure blockData.json is served over HTTP and the path is correct.<br/>Details: ' + message +
        '</div>';
    }
  });
};