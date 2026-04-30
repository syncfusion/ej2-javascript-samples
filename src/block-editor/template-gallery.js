this.default = function () {
  var templates = [];
  var headerTitleEl = document.querySelector('.selectedTitle');
  var cardsContainer = document.getElementById('cards-container');

  var blockEditorInstance = new ej.blockeditor.BlockEditor({ height: '500px' });
  blockEditorInstance.appendTo('#block-editor');
  blockEditorInstance.focusIn();

  var selectedCardId = null;

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

  function setHeaderTitle(icon, name) {
    headerTitleEl.textContent = (icon || '') + (name || 'Untitled');
  }

  function updateActiveCard() {
    var cards = cardsContainer.querySelectorAll('.template-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var isActive = card.getAttribute('data-index') == selectedCardId;
      // toggle(force) is widely supported; if needed, replace with add/remove
      card.classList.toggle('active', isActive);
    }
  }

  function loadPage(templateData) {
    if (!templateData) { return; }
    selectedCardId = templateData.index;
    setHeaderTitle(templateData.icon, templateData.name);
    blockEditorInstance.renderBlocksFromJson(templateData.blocks || [], true);
    updateActiveCard();
  }

  function wireCards() {
    var cards = cardsContainer.querySelectorAll('.template-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var templateData = templates[i];
      if (!templateData) { continue; }
      card.setAttribute('data-index', i);
      (function (td) {
        card.addEventListener('click', function () {
          blockEditorInstance.focusIn();
          loadPage(td);
        });
      })(templateData);
    }
  }

  // Load JSON and initialize templates + UI
  loadJson('./src/block-editor/blockData.json', function (data) {
    // Expect data.blockTemplate[0].page to contain the template pages
    if (data && data.blockTemplate && data.blockTemplate[0] && data.blockTemplate[0].page) {
      templates = data.blockTemplate[0].page;

      // Attach templates to existing cards in DOM
      wireCards();

      // Initial load
      if (templates.length > 0) {
        // Add index field so loadPage can track selection
        for (var i = 0; i < templates.length; i++) {
          templates[i].index = i;
        }
        loadPage(templates[1]);
      }
  
    }
  }, function (message) {
    if (window.console && console.error) {
      console.error('Failed to load blockData.json:', message);
    }
    // Optional: show a small message near the cards container
    var note = document.createElement('div');
    note.style.color = '#b91c1c';
    note.style.padding = '8px';
    note.textContent = 'Unable to load templates. Ensure blockData.json is served over HTTP and the path is correct. Details: ' + message;
    if (cardsContainer && cardsContainer.parentNode) {
      cardsContainer.parentNode.insertBefore(note, cardsContainer);
    }
  });
};