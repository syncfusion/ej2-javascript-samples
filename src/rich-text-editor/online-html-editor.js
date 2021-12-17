/**
 * RichTextEditor Online Html Editor sample
 */

this.default = function () {
  var textArea;
  var srcArea;
  var myCodeMirror;
  var defaultRTE;
  var splitObj;

  // Add the styles and script referrence for code-mirror.
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.min.css');
  document.head.appendChild(link);

  var elem1 = document.createElement('script');
  elem1.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.js';
  elem1.type = 'text/javascript';
  document.head.appendChild(elem1);

  var elem2 = document.createElement('script');
  elem2.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/xml/xml.js';
  elem2.type = 'text/javascript';
  document.head.appendChild(elem2);

  elem2.onload = function () {
    var url = location.href.replace(location.search, '');
    var anchorEle = document.querySelector('#newTab');
    anchorEle.setAttribute('href', url.split('#')[0] + 'rich-text-editor/online-html-editor/index.html');

    splitObj = new ej.layouts.Splitter({
      height: '450px',
      width: '100%',
      paneSettings: [{
        resizable: false,
        size: '50%'
      }, {}],
    });
    splitObj.appendTo('#horizontal');

    defaultRTE = new ej.richtexteditor.RichTextEditor({
      height: '100%',
      toolbarSettings: {
        type: 'MultiRow',
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'LowerCase', 'UpperCase', 'SuperScript', 'SubScript', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent', '|',
          'CreateTable', 'CreateLink', 'Image', '|', 'ClearFormat',
          '|', 'Undo', 'Redo'
        ]
      },
      saveInterval: 1,
      actionComplete: updateValue,
      change: onChange,
      showCharCount: true,
      maxLength: 5000,
      created: onCreate,
    });
    defaultRTE.appendTo('#defaultRTE');

    function onChange() {
      updateValue();
    }

    function onCreate() {
      setTimeout(function () {
        updateValue();
        textArea = defaultRTE.contentModule.getEditPanel();
        srcArea = document.querySelector('.source-code');
        if (srcArea) {
          srcArea.addEventListener('keyup', function (e) {
            updateHtmlValue();
          });
        }
      }, 500);
    }

    function updateHtmlValue() {
      textArea.innerHTML = myCodeMirror.getValue();
    }

    function updateValue() {
      var mirrorView = document.querySelector('#src-view');
      if (!mirrorView) {
        mirrorView = ej.base.createElement('div', {
          className: 'e-content'
        });
        mirrorView.id = 'src-view';
        var srcCodeElement = document.querySelector('.source-code');
        if (srcCodeElement) {
          srcCodeElement.appendChild(mirrorView);
        }
        mirrorView.innerHTML = '';
        mirrorView.style.display = 'block';
      }
      var srcViewEle = document.querySelector('#src-view');
      var codemirrorEle = document.querySelector('.CodeMirror-wrap');
      if (codemirrorEle) {
        codemirrorEle.remove();
      }
      renderCodeMirror(srcViewEle, defaultRTE.value);
    }

    function renderCodeMirror(mirrorView, content) {
      if (content) {
        myCodeMirror = CodeMirror(mirrorView, {
          value: content,
          lineNumbers: true,
          mode: 'text/html',
          lineWrapping: true,
        });
      }
    }
  };
};
