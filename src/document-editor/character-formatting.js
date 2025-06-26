this.default = function() {
  //Documenteditor control rendering starts
  var hostUrl = "https://services.syncfusion.com/js/production/api/documenteditor/";
  var container = new ej.documenteditor.DocumentEditorContainer({ toolbarMode: 'Ribbon',serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
  ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
  container.appendTo("#container");
  var defaultDocument = {"sfdt":"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"};
  var waitingPopUp = document.getElementById("waiting-popup");
  container.documentEditor.open(JSON.stringify(defaultDocument));
  container.documentEditor.documentName = "Character Formatting";
   var switchObj = new ejs.buttons.Switch({ checked: true, cssClass: 'buttonSwitch' });
    switchObj.appendTo('#toolbarSwitch');

    switchObj.change = function (args) {
        if (args.checked) {
            container.toolbarMode = 'Ribbon';
        }
        else {
            container.toolbarMode = 'Toolbar';
        }
        showButtons(container.toolbarMode !== 'Ribbon');
    };
  // TitleBar sample starts
  titleBarDiv = document.getElementById("documenteditor_titlebar");
  initializeTitleBar(true);
  updateDocumentTitle();
  wireEventsInTitleBar();
  container.documentChange = function() {
    updateDocumentTitle();
  };
  var documentTitle;
  var documentTitleContentEditor;
  var titleBarDiv;
  var print;
  var openBtn;
  var download;
  var isPropertiesPaneEnabled;
  function initializeTitleBar(isShareNeeded) {
    documentTitle = ej.base.createElement("label", {
      id: "documenteditor_title_name",
      styles:
        "text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text"
    });
    documentTitleContentEditor = ej.base.createElement("div", {
      id: "documenteditor_title_contentEditor",
      className: "single-line"
    });
    documentTitleContentEditor.appendChild(documentTitle);
    titleBarDiv.appendChild(documentTitleContentEditor);
    documentTitleContentEditor.setAttribute(
      "title",
      "Document Name. Click or tap to rename this document."
    );
    var btnStyles =
      "float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;" +
      "border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400";
    print = addButton(
      "e-de-icon-Print e-de-padding-right",
      "Print",
      btnStyles,
      "de-print",
      "Print this document (Ctrl+P).",
      false
    );
    openBtn = addButton(
      "e-de-icon-Open e-de-padding-right",
      "open",
      btnStyles,
      "de-open",
      "Open",
      false
    );
    var items = [
      { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
      { text: 'Word Document (*.docx)', id: 'word' },
      { text: 'Word Template (*.dotx)', id: 'dotx'},
      { text: 'Plain Text (*.txt)', id: 'txt'},
  ];
    download = addButton(
      "e-de-icon-Download e-de-padding-right",
      "Download",
      btnStyles,
      "documenteditor-share",
      "Download this document.",
      true,
      items
    );
    if (!isShareNeeded) {
      download.element.style.display = "none";
    } else {
      openBtn.element.style.display = "none";
    }
  }
  function wireEventsInTitleBar() {
    print.element.addEventListener("click", onPrint);
    openBtn.element.addEventListener("click", function(e) {
      if (e.target.id === "de-open") {
        var fileUpload = document.getElementById("uploadfileButton");
        fileUpload.value = "";
        fileUpload.click();
      }
    });
    documentTitleContentEditor.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        documentTitleContentEditor.contentEditable = "false";
        if (documentTitleContentEditor.textContent === "") {
          documentTitleContentEditor.textContent = "Document1";
        }
      }
    });
    documentTitleContentEditor.addEventListener("blur", function() {
      if (documentTitleContentEditor.textContent === "") {
        documentTitleContentEditor.textContent = "Document1";
      }
      documentTitleContentEditor.contentEditable = "false";
      container.documentEditor.documentName = documentTitle.textContent;
    });
    documentTitleContentEditor.addEventListener("click", function() {
      updateDocumentEditorTitle();
    });
  }
  function updateDocumentEditorTitle() {
    documentTitleContentEditor.contentEditable = "true";
    documentTitleContentEditor.focus();
    window.getSelection().selectAllChildren(documentTitleContentEditor);
  }
  function updateDocumentTitle() {
    if (container.documentEditor.documentName === "") {
      container.documentEditor.documentName = "Untitled";
    }
    documentTitle.textContent = container.documentEditor.documentName;
  }
  function onPrint() {
    container.documentEditor.print();
  }
  function onExportClick(args) {
    var value = args.item.id;
    switch (value) {
      case "word":
        save("Docx");
        break;
      case "sfdt":
        save("Sfdt");
        break;
      case 'txt':
        save('Txt');
        break;
      case 'dotx':
        save('Dotx');
        break;
    }
  }
  function save(format) {
    container.documentEditor.save(
      container.documentEditor.documentName === "" ? "sample" : container.documentEditor.documentName,
      format
    );
  }
  function setTooltipForPopup() {
    document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
    document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
    document.getElementById('documenteditor-share-popup').querySelectorAll('li')[2].setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.');
    document.getElementById('documenteditor-share-popup').querySelectorAll('li')[3].setAttribute('title', 'Download a copy of this document to your computer as a TXT file.');
}
  function addButton(
    iconClass,
    btnText,
    styles,
    id,
    tooltipText,
    isDropDown,
    items
  ) {
    var button = ej.base.createElement("button", { id: id, styles: styles });
    titleBarDiv.appendChild(button);
    button.setAttribute("title", tooltipText);
    if (isDropDown) {
      var dropButton = new ej.splitbuttons.DropDownButton(
        {
          select: onExportClick,
          items: items,
          iconCss: iconClass,
          cssClass: "e-caret-hide",
          content: btnText,
          open: function() {
            setTooltipForPopup();
          }
        },
        button
      );
      return dropButton;
    } else {
      var ejButton = new ej.buttons.Button(
        { iconCss: iconClass, content: btnText },
        button
      );
      return ejButton;
    }
  }
   function showButtons(show) {
        var displayStyle = show ? 'block' : 'none';

        if (print) {
            print.element.style.display = displayStyle;
        }
        if (download) {
            download.element.style.display = displayStyle;
        }
    }

    showButtons(false); 
};
