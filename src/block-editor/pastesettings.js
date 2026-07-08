this.default = function () {
  var overviewBlockEditor = null;

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

  // Wire up inputs and dropdown once editor is created
  function wireUi() {
    // DropDownList for formatting option
    var formatOption = new ej.dropdowns.DropDownList({
      index: 0,            // default selection (use index instead of "takdir")
      popupHeight: '200px',
      change: valueChange  // update paste cleanup settings
    });
    formatOption.appendTo('#formattingOption');

    function valueChange() {
      if (!overviewBlockEditor) { return; }
      if (formatOption.value === 'plainText') {
        overviewBlockEditor.pasteCleanupSettings.plainText = true;
        overviewBlockEditor.pasteCleanupSettings.keepFormat = false;
      } else {
        overviewBlockEditor.pasteCleanupSettings.plainText = false;
        overviewBlockEditor.pasteCleanupSettings.keepFormat = true;
      }
      overviewBlockEditor.dataBind();
    }

    
    var deniedTagsElem = document.getElementById('deniedTags');

    if (deniedTagsElem) {
      deniedTagsElem.addEventListener('blur', function (e) {
        onPasteCleanupSettingsChange(e.target.value);
        if (overviewBlockEditor) { overviewBlockEditor.dataBind(); }
      });
    }

    // Update the specified paste settings property with parsed array value
    function onPasteCleanupSettingsChange(value) {
      if (!overviewBlockEditor) { return; }
      if (value) {
        var parts = value.split(',');
        var arrayValue = [];
        for (var i = 0; i < parts.length; i++) {
          var item = parts[i];
          var trimmed = item.replace(/^\s+|\s+$/g, '').replace(/^['"]|['"]$/g, '');
          if (trimmed) {
            arrayValue.push(trimmed);
          }
        }
        overviewBlockEditor.pasteCleanupSettings.deniedTags = arrayValue;
      }
    }
  }

  // Load JSON and initialize editor
  loadJson('./src/block-editor/blockData.json', function (data) {
    overviewBlockEditor = new ej.blockeditor.BlockEditor({
      blocks: data.blockDataPaste,
      height: '600px',
      pasteCleanupSettings: {
        deniedTags: ['script', 'iframe']
        // keepFormat/plainText are toggled via dropdown
      }
    });

    overviewBlockEditor.appendTo('#block-editor');

    // Now that the editor exists, wire the UI controls
    wireUi();
  }, function (message) {
    if (window.console && console.error) {
      console.error('Failed to load blockData.json:', message);
    }
    // Fallback UI message if desired
    var container = document.getElementById('block-editor');
    if (container) {
      container.innerHTML = '<div style="color:#b91c1c;padding:8px;">Unable to load paste data. ' +
        'Ensure blockData.json is served over HTTP and the path is correct.<br/>Details: ' + message +
        '</div>';
    }
  });
};