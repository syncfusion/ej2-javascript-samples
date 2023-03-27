this.default = function() {
  //Documenteditor control rendering starts
  var hostUrl = "https://services.syncfusion.com/js/production/api/documenteditor/";
  var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px' });
  ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
  container.appendTo("#container");
  var defaultDocument = {"sfdt":"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"};
  var waitingPopUp = document.getElementById("waiting-popup");
  container.documentEditor.open(JSON.stringify(defaultDocument));
  container.documentEditor.documentName = "Character Formatting";
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
      { text: "Microsoft Word (.docx)", id: "word" },
      { text: "Syncfusion Document Text (.sfdt)", id: "sfdt" }
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
    }
  }
  function save(format) {
    container.documentEditor.save(
      container.documentEditor.documentName === "" ? "sample" : container.documentEditor.documentName,
      format
    );
  }
  function setTooltipForPopup() {
    document
      .getElementById("documenteditor-share-popup")
      .querySelectorAll("li")[0]
      .setAttribute(
        "title",
        "Download a copy of this document to your computer as a DOCX file."
      );
    document
      .getElementById("documenteditor-share-popup")
      .querySelectorAll("li")[1]
      .setAttribute(
        "title",
        "Download a copy of this document to your computer as an SFDT file."
      );
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
};
