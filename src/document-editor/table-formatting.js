this.default = function() {
  //Documenteditor control rendering starts
  var hostUrl = "https://services.syncfusion.com/js/production/api/documenteditor/";
  var container = new ej.documenteditor.DocumentEditorContainer({ toolbarMode: 'Ribbon',serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
  ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
  container.appendTo("#container");
  var defaultDocument = {"sfdt":"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"};
  var waitingPopUp = document.getElementById("waiting-popup");
  container.documentEditor.open(JSON.stringify(defaultDocument));
  container.documentEditor.documentName = "Table Formatting";
  // TitleBar sample starts
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
titleBarDiv = document.getElementById('documenteditor_titlebar');
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
