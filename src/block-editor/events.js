this.default = function () {
  var eventsBlockEditor = null;

  // Simple error helper
  function reportError(msg) {
    if (window.console && console.error) {
      console.error(msg);
    }
    // Also show in the event log if available
    var log = document.getElementById('eventLog');
    if (log) {
      var span = document.createElement('span');
      span.innerHTML = '<span style="color:#b91c1c;">' + msg + '</span><hr>';
      log.insertBefore(span, log.firstChild);
    }
  }

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

  // Append a new log entry to the event log container, prepending it to existing content
  function appendElement(html) {
    var span = document.createElement('span');
    span.innerHTML = html;
    var log = document.getElementById('eventLog');
    if (log) {
      log.insertBefore(span, log.firstChild);
    }
  }

  // Event handlers (ES5)
  function created() {
    appendElement('BlockEditor <b>created</b> event called<hr>');
  }

  // Handle block change events by logging a summary of the actions performed
  function blockChangeEvent(args) {
    var changesCount = args.changes ? args.changes.length : 0;
    if (changesCount === 0) {
      return;
    }

    // Count occurrences of each action type in the changes
    var actionCounts = {};
    for (var i = 0; i < args.changes.length; i++) {
      var change = args.changes[i];
      var key = change.action;
      actionCounts[key] = (actionCounts[key] || 0) + 1;
    }

    var logMessage = 'BlockEditor <b>blockChanged</b> event called: ';
    var messages = [];

    // Helper to pluralize
    function getPluralString(count, noun) {
      return count === 1 ? (count + ' ' + noun) : (count + ' ' + noun + 's');
    }

    if (actionCounts.Insertion) {
      messages.push(getPluralString(actionCounts.Insertion, 'block') + ' inserted');
    }
    if (actionCounts.Deletion) {
      messages.push(getPluralString(actionCounts.Deletion, 'block') + ' deleted');
    }
    if (actionCounts.Moved) {
      messages.push(getPluralString(actionCounts.Moved, 'block') + ' moved');
    }
    if (actionCounts.Update) {
      messages.push(getPluralString(actionCounts.Update, 'block') + ' updated');
    }

    logMessage += messages.join(', ') + '<hr>';
    appendElement(logMessage);
  }

  function selectionChanged() {
    appendElement('BlockEditor <b>selectionChanged</b> event called<hr>');
  }

  function blockDragging() {
    appendElement('BlockEditor <b>blockDrag</b> event called<hr>');
  }

  function blockDragStart() {
    appendElement('BlockEditor <b>blockDragStart</b> event called<hr>');
  }

  function blockDropped() {
    appendElement('BlockEditor <b>blockDrop</b> event called<hr>');
  }

  function focusEvent() {
    appendElement('BlockEditor <b>focus</b> event called<hr>');
  }

  function blurEvent() {
    appendElement('BlockEditor <b>blur</b> event called<hr>');
  }

  function beforePasteEvent() {
    appendElement('BlockEditor <b>beforePaste</b> event called<hr>');
  }

  function afterPasteEvent() {
    appendElement('BlockEditor <b>afterPaste</b> event called<hr>');
  }

  // Load JSON and initialize editor
  loadJson('./src/block-editor/data/events.json', function (data) {
    // Initialize BlockEditor with JSON blocks
    eventsBlockEditor = new ej.blockeditor.BlockEditor({
      blocks: data.blockDataEvents,
      height: '600px',
      inlineToolbarSettings: {
        itemClick: function (args) {
          // Log specific inline toolbar item click event to event log
          appendElement(
            'BlockEditor inline toolbar <b>' + (args.item && args.item.command) + '</b> clicked<hr>'
          );
        }
      },
      created: created,
      blockChanged: blockChangeEvent,
      selectionChanged: selectionChanged,
      blockDragStart: blockDragStart,
      blockDragging: blockDragging,
      blockDropped: blockDropped,
      focus: focusEvent,
      blur: blurEvent,
      beforePasteCleanup: beforePasteEvent,
      afterPasteCleanup: afterPasteEvent
    });

    eventsBlockEditor.appendTo('#events-blockeditor');

    // Clear button wiring
    var clear = new ej.buttons.Button({});
    clear.appendTo('#clear');
    document.getElementById('clear').onclick = function () {
      var el = document.getElementById('eventLog');
      if (el) {
        el.innerHTML = '';
      }
    };
  }, function (message) {
    reportError('Failed to load events.json: ' + message);
  });
};