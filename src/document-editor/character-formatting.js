this.default = function() {
  //Documenteditor control rendering starts
  var hostUrl = "https://ej2services.syncfusion.com/production/web-services/";
  var container = new ej.documenteditor.DocumentEditorContainer({ height:'590px' });
  ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
  container.serviceUrl = hostUrl + "api/documenteditor/";
  container.appendTo("#container");
  var defaultDocument = {
    sections: [
      {
        blocks: [
          {
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              {
                text: "List of text formatting options",
                characterFormat: {
                  fontSize: 18.0,
                  fontFamily: "Monotype Corsiva"
                }
              }
            ]
          },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] },
          {
            paragraphFormat: { styleName: "Normal" },
            inlines: [{ text: "Bold", characterFormat: { bold: true } }]
          },
          {
            characterFormat: { bold: true },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            characterFormat: { fontColor: "#00B0F0FF" },
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              { text: "C", characterFormat: { fontColor: "#CC99FFFF" } },
              { text: "o", characterFormat: { fontColor: "#333333FF" } },
              { text: "l", characterFormat: { fontColor: "#FF6600FF" } },
              { text: "o", characterFormat: { fontColor: "#3366FFFF" } },
              { text: "r", characterFormat: { fontColor: "#FF9900FF" } },
              { text: "e", characterFormat: { fontColor: "#FF6600FF" } },
              { text: "d", characterFormat: { fontColor: "#808080FF" } }
            ]
          },
          {
            characterFormat: { fontColor: "#00B0F0FF" },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            characterFormat: { bold: true },
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              {
                text: "Double",
                characterFormat: { strikethrough: "DoubleStrike" }
              },
              { text: " ", characterFormat: { strikethrough: "DoubleStrike" } },
              {
                text: "Strike",
                characterFormat: { strikethrough: "DoubleStrike" }
              }
            ]
          },
          {
            characterFormat: { strikethrough: "DoubleStrike" },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            characterFormat: { fontColor: "#ED7D31FF" },
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              {
                text: "Highlighted",
                characterFormat: {
                  highlightColor: "Turquoise",
                  fontColor: "#ED7D31FF"
                }
              }
            ]
          },
          { paragraphFormat: { styleName: "Normal" }, inlines: [] },
          {
            paragraphFormat: { styleName: "Normal" },
            inlines: [{ text: "Italicized", characterFormat: { italic: true } }]
          },
          {
            characterFormat: { italic: true },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              {
                text: "Strikeout ",
                characterFormat: { strikethrough: "SingleStrike" }
              }
            ]
          },
          {
            characterFormat: { strikethrough: "SingleStrike" },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            characterFormat: { strikethrough: "SingleStrike" },
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              { text: "Some" },
              {
                text: "Sub",
                characterFormat: { baselineAlignment: "Subscript" }
              },
              {
                text: "s",
                characterFormat: { baselineAlignment: "Subscript" }
              },
              {
                text: "cript",
                characterFormat: { baselineAlignment: "Subscript" }
              },
              { text: " ", characterFormat: { baselineAlignment: "Subscript" } }
            ]
          },
          {
            characterFormat: { baselineAlignment: "Subscript" },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            characterFormat: { baselineAlignment: "Subscript" },
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              { text: "Some" },
              {
                text: "Super",
                characterFormat: { baselineAlignment: "Superscript" }
              },
              {
                text: "s",
                characterFormat: { baselineAlignment: "Superscript" }
              },
              {
                text: "cript",
                characterFormat: { baselineAlignment: "Superscript" }
              },
              {
                text: " ",
                characterFormat: { baselineAlignment: "Superscript" }
              }
            ]
          },
          {
            characterFormat: { baselineAlignment: "Superscript" },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            characterFormat: { underline: "Single" },
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              { text: "Underline", characterFormat: { underline: "Single" } },
              { text: "d", characterFormat: { underline: "Single" } }
            ]
          },
          {
            paragraphFormat: { styleName: "Normal" },
            inlines: [{ text: " " }]
          },
          {
            paragraphFormat: { styleName: "Normal" },
            inlines: [
              {
                text: "Text with different fonts and sizes",
                characterFormat: {
                  fontSize: 18.0,
                  fontFamily: "Monotype Corsiva"
                }
              }
            ]
          },
          {
            characterFormat: {
              underline: "Double",
              fontSize: 11.0,
              fontFamily: "Book Antiqua",
              fontColor: "#7028E8FF"
            },
            paragraphFormat: { styleName: "Normal" },
            inlines: []
          },
          {
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text:
                  "The quick brown fox jumps over the lazy dog [Book Antiqua",
                characterFormat: {
                  fontSize: 11.0,
                  fontFamily: "Book Antiqua",
                  fontColor: "#7028E8FF"
                }
              },
              {
                text: "]",
                characterFormat: {
                  fontSize: 11.0,
                  fontFamily: "Book Antiqua",
                  fontColor: "#7028E8FF"
                }
              }
            ]
          },
          {
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog ",
                characterFormat: {
                  fontFamily: "Bitstream Vera Sans",
                  fontColor: "#F1C084FF"
                }
              },
              {
                text: "[Bitstream Vera Sans]",
                characterFormat: {
                  fontFamily: "Bitstream Vera Sans",
                  fontColor: "#F1C084FF"
                }
              }
            ]
          },
          {
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog ",
                characterFormat: {
                  fontSize: 13.0,
                  fontFamily: "Comic Sans MS",
                  fontColor: "#BD5DCDFF"
                }
              },
              {
                text: "[Comic Sans MS]",
                characterFormat: {
                  fontSize: 13.0,
                  fontFamily: "Comic Sans MS",
                  fontColor: "#BD5DCDFF"
                }
              }
            ]
          },
          {
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog ",
                characterFormat: {
                  fontSize: 14.0,
                  fontFamily: "Microsoft Sans Serif",
                  fontColor: "#4D72EEFF"
                }
              },
              {
                text: "[Microsoft Sans Serif]",
                characterFormat: {
                  fontSize: 14.0,
                  fontFamily: "Microsoft Sans Serif",
                  fontColor: "#4D72EEFF"
                }
              }
            ]
          },
          {
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog",
                characterFormat: {
                  fontSize: 15.0,
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              },
              {
                text: " [",
                characterFormat: {
                  fontSize: 15.0,
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              },
              {
                text: "Batang",
                characterFormat: {
                  fontSize: 15.0,
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              },
              {
                text: "]",
                characterFormat: {
                  fontSize: 15.0,
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              }
            ]
          },
          {
            characterFormat: {
              fontSize: 16.0,
              fontFamily: "Arial",
              fontColor: "#31B463FF"
            },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog ",
                characterFormat: {
                  fontSize: 16.0,
                  fontFamily: "Arial",
                  fontColor: "#31B463FF"
                }
              },
              {
                text: "[Arial]",
                characterFormat: {
                  fontSize: 16.0,
                  fontFamily: "Arial",
                  fontColor: "#31B463FF"
                }
              }
            ]
          },
          {
            characterFormat: { fontSize: 16.0 },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text:
                  "The quick brown fox jumps over the lazy dog [Book Antiqua]",
                characterFormat: {
                  fontSize: 16.0,
                  fontFamily: "Book Antiqua",
                  fontColor: "#7028E8FF"
                }
              }
            ]
          },
          {
            characterFormat: { fontSize: 15.0 },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text:
                  "The quick brown fox jumps over the lazy dog [Bitstream Vera Sans]",
                characterFormat: {
                  fontSize: 15.0,
                  fontFamily: "Bitstream Vera Sans",
                  fontColor: "#F1C084FF"
                }
              }
            ]
          },
          {
            characterFormat: { fontSize: 14.0 },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text:
                  "The quick brown fox jumps over the lazy dog [Comic Sans MS]",
                characterFormat: {
                  fontSize: 14.0,
                  fontFamily: "Comic Sans MS",
                  fontColor: "#BD5DCDFF"
                }
              },
              { name: "_GoBack", bookmarkType: 0 },
              { name: "_GoBack", bookmarkType: 1 }
            ]
          },
          {
            characterFormat: { fontSize: 13.0 },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text:
                  "The quick brown fox jumps over the lazy dog [Microsoft Sans Serif]",
                characterFormat: {
                  fontSize: 13.0,
                  fontFamily: "Microsoft Sans Serif",
                  fontColor: "#4D72EEFF"
                }
              }
            ]
          },
          {
            characterFormat: { fontSize: 11.0 },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog",
                characterFormat: {
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              },
              {
                text: " [",
                characterFormat: {
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              },
              {
                text: "Batang",
                characterFormat: {
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              },
              {
                text: "]",
                characterFormat: {
                  fontFamily: "Batang",
                  fontColor: "#335388FF"
                }
              }
            ]
          },
          {
            characterFormat: { fontSize: 10.0 },
            paragraphFormat: {
              beforeSpacing: 6.0,
              afterSpacing: 6.0,
              styleName: "Normal"
            },
            inlines: [
              {
                text: "The quick brown fox jumps over the lazy dog [Arial]",
                characterFormat: {
                  fontSize: 11.0,
                  fontFamily: "Arial",
                  fontColor: "#31B463FF"
                }
              }
            ]
          }
        ],
        headersFooters: {},
        sectionFormat: {
          headerDistance: 36.0,
          footerDistance: 36.0,
          pageWidth: 612.0,
          pageHeight: 792.0,
          leftMargin: 72.0,
          rightMargin: 72.0,
          topMargin: 72.0,
          bottomMargin: 72.0,
          differentFirstPage: false,
          differentOddAndEvenPages: false
        }
      }
    ],
    characterFormat: { fontFamily: "Times New Roman" },
    background: { color: "#FFFFFFFF" },
    styles: [
      {
        type: "Paragraph",
        name: "Normal",
        next: "Normal",
        characterFormat: { fontSize: 12.0 }
      },
      { type: "Character", name: "Default Paragraph Font" }
    ]
  };
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
