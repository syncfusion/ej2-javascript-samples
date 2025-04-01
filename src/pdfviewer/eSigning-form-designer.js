/* jshint esversion: 6 */
var currentUser = 'andrew@mycompany.com';
var currentFieldType;
var zoomFactor;
var defaultZoomFactor = false;
var userColor = '#eff7ef';
var isDropped = false;
var defaultFieldWidth = 200;
var defaultFieldHeight = 24;
var checkBoxFieldSize = 20;
var radioFieldSize = 20;
var SignatureFieldSize = 66;
var ListFieldSize = 66;
var isMobile = ej.base.Browser.isDevice;
this.default = function () {
  var viewer = new ej.pdfviewer.PdfViewer({
    documentPath:
      'https://cdn.syncfusion.com/content/PDFViewer/Fill+and+Sign.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib',
    documentLoad: documentLoaded,
    pageClick: pageClick
  });

  viewer.enableFormFieldsValidation = true;
  viewer.showNotificationDialog = false;
  viewer.enableToolbar = false;
  viewer.enableNavigationToolbar = false;
  viewer.enableAnnotationToolbar = false;
  viewer.downloadFileName = 'eSign_designMode.pdf';
  viewer.appendTo('#pdfViewer');

  var toolbarObj = new ej.navigations.Toolbar({
    cssClass: 'template',
    items: [
      {
        type: 'Input',
        align: 'Left',
        template:
          "<div id='e-pv-e-sign-user-field-mob' style='width: 200px;'><div class='e-pv-e-sign-user-dropdown' style='width: 200px;'> <input id='userMenuMob' width='200px'></input></div></div>",
      },
      {
        prefixIcon: 'e-icons e-download',
        text: 'Download',
        align: 'Right',
        tooltipText: 'Save',
        id: 'e-pv-e-sign-download',
        click: downloadClicked.bind(this)
      },
    ],
  });
  toolbarObj.appendTo('#e-pv-e-sign-toolbar_template');

  var toolbarObjMob = new ej.navigations.Toolbar({
    cssClass: 'template',
    overflowMode: 'Scrollable',
    items: [
      { id: 'signature', prefixIcon: 'e-icons e-signature', click: signature.bind(this)},
      { id: 'initial', prefixIcon: 'e-icons e-font-name', click: initial.bind(this)},
      { id: 'textBox', prefixIcon: 'e-icons e-text-form', click: textBox.bind(this)},
      { id: 'password', prefixIcon: 'e-icons e-password', click: password.bind(this)},
      { id: 'checkBox', prefixIcon: 'e-icons e-check-box', click: checkBox.bind(this)},
      { id: 'radioButton', prefixIcon: 'e-icons e-radio-button', click: radiobutton.bind(this)},
      { id: 'dropDown', prefixIcon: 'e-icons e-drop-down', click: dropDown.bind(this)},
      { id: 'listBox', prefixIcon: 'e-icons e-list-unordered', click: listBox.bind(this)}
    ],
  });

  toolbarObjMob.appendTo('#e-pv-e-sign-toolbar_template-mob');

  var userDetails = [
    {
      Name: 'Andrew Fuller',
      Eimg: 'profile1',
      Mail: 'andrew@mycompany.com',
      fieldIds: [],
    },
    {
      Name: 'Anne Dodsworth',
      Eimg: 'profile2',
      Mail: 'anne@mycompany.com',
      fieldIds: [],
    },
  ];

  function getBorderColor(email) {
    return email === 'andrew@mycompany.com' ? 'red' : 'green';
  }

  var listObj = new ej.dropdowns.DropDownList({
    dataSource: userDetails,
    fields: { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' },
    index: 0,
    itemTemplate: function (data) {
      return '<div style="display:flex;">' +
        '<img class="e-pv-e-sign-empImage" style="border: 1px solid ' + getBorderColor(data.Mail) + ';" src="src/pdfviewer/images/employees/' + data.Eimg + '.png" alt="employee" />' +
        '<div>' +
        '<div class="ename" style="font-size:13px;height:18px;">' + data.Name + '</div>' +
        '<div class="mail" style="font-size:10px;">' + data.Mail + '</div>' +
        '</div>' +
        '</div>';
    },
    valueTemplate: function (data) {
      return '<div style="display:flex;">' +
        '<img class="value" style="border: 1px solid ' + getBorderColor(data.Mail) + '; margin: 3px 0px 0px 5px; border-radius:50%;" src="src/pdfviewer/images/employees/' + data.Eimg + '.png" height="32px" width="32px" alt="employee" />' +
        '<div style="margin-top: 3px;">' +
        '<div class="name" style="font-size:13px;margin-left: 12px;">' + data.Name + '</div>' +
        '<div class="mail" style="font-size:10px;margin-left: 12px;">' + data.Mail + '</div>' +
        '</div>' +
        '</div>';
    }
  });
  listObj.appendTo('#userMenu');

  var listObjMob = new ej.dropdowns.DropDownList({
    dataSource: userDetails,
    fields: { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' },
    index: 0,
    itemTemplate: function (data) {
      return '<div style="display:flex;">' +
        '<img class="e-pv-e-sign-empImage" style="border: 1px solid ' + getBorderColor(data.Mail) + ';" src="src/pdfviewer/images/employees/' + data.Eimg + '.png" alt="employee" />' +
        '<div>' +
        '<div class="ename" style="font-size:13px;height:18px;">' + data.Name + '</div>' +
        '<div class="mail" style="font-size:10px;">' + data.Mail + '</div>' +
        '</div>' +
        '</div>';
    },
    valueTemplate: function (data) {
      return '<div style="display:flex;">' +
        '<img class="value" style="border: 1px solid ' + getBorderColor(data.Mail) + '; margin: 3px 0px 0px 5px; border-radius:50%;" src="src/pdfviewer/images/employees/' + data.Eimg + '.png" height="32px" width="32px" alt="employee" />' +
        '<div style="margin-top: 3px;">' +
        '<div class="name" style="font-size:13px;margin-left: 12px;">' + data.Name + '</div>' +
        '<div class="mail" style="font-size:10px;margin-left: 12px;">' + data.Mail + '</div>' +
        '</div>' +
        '</div>';
    }
  });
  listObjMob.appendTo('#userMenuMob');

  var sideObj = new ej.navigations.Sidebar({
    width: "200px",
    enableGestures: false
  });
  sideObj.appendTo("#e-pv-e-sign-defaultSidebar_user");

  const layout = document.getElementById('e-pv-e-sign-layout');
  const dropdown = document.getElementById('e-pv-e-sign-user-field-mob');
  const sidebar = document.getElementById('e-pv-e-sign-defaultSidebar_user');
  const viewerDiv = document.getElementById('e-pv-e-sign-pdfViewer-div');
  const downloadElement = document.getElementById("e-pv-e-sign-download");
  const toolbarElementMob = document.getElementById("e-pv-e-sign-toolbar_template-mob");
  if (isMobile) {
    layout.style.display = 'block';
    dropdown.style.display = 'block';
    toolbarElementMob.style.display = 'block';
    sidebar.style.display = 'none';
    viewerDiv.style.width = '100%';
    downloadElement.style.border = 'none';
    downloadElement.style.width = '40px';
    downloadElement.removeChild(downloadElement.lastChild);
  } else {
    layout.style.display = 'flex';
    dropdown.style.display = 'none';
    toolbarElementMob.style.display = 'none';
    sidebar.style.display = 'block';
    viewerDiv.style.width = 'calc(100% - 200px)';
    downloadElement.style.width = '115px';
    downloadElement.style.width = '1px solid #C4C7C5';
  }

  var textboxBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  textboxBtn.appendTo('#textBoxBtn');

  var passwordBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  passwordBtn.appendTo('#passwordBtn');

  var checkboxBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  checkboxBtn.appendTo('#checkBoxBtn');

  var radioButton = new ej.buttons.Button({ cssClass: 'e-outline' });
  radioButton.appendTo('#radioBtn');

  var dropDownBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  dropDownBtn.appendTo('#dropDownBtn');

  var listBoxBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  listBoxBtn.appendTo('#listBoxBtn');

  var signatureBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  signatureBtn.appendTo('#Signature');

  var initialBtn = new ej.buttons.Button({ cssClass: 'e-outline' });
  initialBtn.appendTo('#initialBtn');

  listObj.change = function (args) {
    currentUser = args.itemData.Mail;
  };

  listObjMob.change = function (args) {
    currentUser = args.itemData.Mail;
  };

  function documentLoaded() {
    if(isMobile){
      viewer.height = "500px";
    }else{
      viewer.height = "640px";
    }
    viewer.designerMode = true;
    viewer.magnification.fitToPage();
    defaultZoomFactor = true;
    initializeDraggable(textboxBtn.element, 'Textbox');
    initializeDraggable(signatureBtn.element, 'SignatureField');
    initializeDraggable(passwordBtn.element, 'Password');
    initializeDraggable(checkboxBtn.element, 'CheckBox');
    initializeDraggable(radioButton.element, 'RadioButton');
    initializeDraggable(dropDownBtn.element, 'DropDown');
    initializeDraggable(listBoxBtn.element, 'ListBox');
    initializeDraggable(initialBtn.element, 'InitialField');
    defaultZoomFactor = false;
  }

  function initializeDraggable(element, fieldType) {
    var cloneElement;
    new ej.base.Draggable(element, {
      helper: (e) => {
        if(e.sender.type == "mousemove"){
        cloneElement = document.createElement('div');
        zoomFactor = viewer.viewerBase.getZoomFactor();
        cloneElement = document.createElement('div');
        cloneElement.style.width = (defaultFieldWidth * zoomFactor) + 'px';
        cloneElement.style.height = (defaultFieldHeight * zoomFactor) + 'px';
        cloneElement.style.borderRadius = '0';
        cloneElement.style.opacity = '0.5';
        switch (fieldType) {
          case 'SignatureField':
          case 'InitialField':
            cloneElement.style.height = (SignatureFieldSize * zoomFactor) + 'px';
            break;
          case 'CheckBox':
            cloneElement.style.height = (checkBoxFieldSize * zoomFactor) + 'px';
            cloneElement.style.width = (checkBoxFieldSize * zoomFactor) + 'px';
            break;
          case 'RadioButton':
            cloneElement.style.height = (radioFieldSize * zoomFactor) + 'px';
            cloneElement.style.width = (radioFieldSize * zoomFactor) + 'px';
            cloneElement.style.borderRadius = '50%';
            break;
          case 'ListBox':
            cloneElement.style.height = (ListFieldSize * zoomFactor) + 'px';
            break;
        }
        cloneElement.style.backgroundColor = this.currentUser === 'andrew@mycompany.com' ? '#ffefef' : '#eff7ef';
        cloneElement.style.zIndex = '10001';
        cloneElement.style.position = 'absolute';
        cloneElement.style.pointerEvents = 'none';
        document.body.appendChild(cloneElement);
        return cloneElement;
      }else{
        return null;
      }
      },
      dragStart: (e) => {
        currentFieldType = fieldType;
        isDropped = true;
        getCursorAtPosition(fieldType);
      },
      dragStop: (e) => {
        if (e.helper && e.helper.parentNode) {
          e.helper.parentNode.removeChild(e.helper);
        }
        isDropped = false;
      },
      clone: true,
      cursorAt: getCursorAtPosition(fieldType),
      enableTailMode: true,
    });
  }

  function getCursorAtPosition(fieldType) {
    if (defaultZoomFactor) {
      zoomFactor = 1;
    } else {
      zoomFactor = viewer.viewerBase.getZoomFactor();
    }
    var left, top;
    var scaledWidth = defaultFieldWidth * zoomFactor;
    var scaledHeight = defaultFieldHeight * zoomFactor;

    switch (fieldType) {
      case 'CheckBox':
      case 'RadioButton':
        scaledWidth = checkBoxFieldSize * zoomFactor;
        scaledHeight = checkBoxFieldSize * zoomFactor;
        left = 0;
        top = (checkBoxFieldSize / 2) * zoomFactor - (scaledHeight / 2);
        break;
      case 'ListBox':
        scaledHeight = ListFieldSize * zoomFactor;
        left = 90;
        top = (ListFieldSize / 2) * zoomFactor - (scaledHeight / 2);
        break;
      case 'SignatureField':
      case 'InitialField':
        scaledHeight = SignatureFieldSize * zoomFactor;
        left = 90;
        top = (SignatureFieldSize / 2) * zoomFactor - (scaledHeight / 2);
        break;
      default:
        scaledHeight = defaultFieldHeight * zoomFactor;
        left = 90;
        top = (defaultFieldHeight / 2) * zoomFactor - (scaledHeight / 2);
        break;
    }

    left = left / zoomFactor - (scaledWidth / 2);
    return { left: left, top: top };
  }

  function pageClick(args) {
    if (isDropped) {
      isDropped = false;
      var width = defaultFieldWidth;
      var height = defaultFieldHeight;
      switch (currentFieldType) {
        case 'Textbox':
          height = defaultFieldHeight;
          break;
        case 'SignatureField':
        case 'InitialField':
          height = SignatureFieldSize;
          break;
        case 'Password':
          break;
        case 'CheckBox':
        case 'RadioButton':
          width = checkBoxFieldSize;
          height = checkBoxFieldSize;
          break;
        case 'ListBox':
          height = ListFieldSize;
          break;
      }
      viewer.formDesignerModule.addFormField(currentFieldType, { bounds: { X: args.x, Y: args.y, Width: width, Height: height }});
    }
  }

  document.getElementById("textBoxBtn").onclick = function (e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('Textbox');
  };
  
  document.getElementById("passwordBtn").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('Password');
  };
  
  document.getElementById("checkBoxBtn").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('CheckBox');
  };
  
  document.getElementById("radioBtn").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('RadioButton');
  };
  
  document.getElementById("dropDownBtn").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('DropDown');
  };
  
  document.getElementById("listBoxBtn").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('ListBox');
  };
  
  document.getElementById("Signature").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('SignatureField');
  };
  
  document.getElementById("initialBtn").onclick = function(e){
    if (e.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('InitialField');
  };

  function textBox(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('Textbox');
  }

  function password(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('Password');
  }

  function checkBox(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('CheckBox');
  }

  function radiobutton(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('RadioButton');
  }

  function dropDown(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('DropDown');
  }

  function listBox(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('ListBox');
  }

  function signature(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('SignatureField');
  }

  function initial(e) {
    if (e.originalEvent.sourceCapabilities.firesTouchEvents)
    viewer.formDesignerModule.setFormFieldMode('InitialField');
  }

  function downloadClicked(args) {
    viewer.download();
  }

  viewer.formFieldAdd = function (args) {
    userColor = currentUser === 'andrew@mycompany.com' ? '#ffefef' : '#eff7ef';
    if (currentUser === 'andrew@mycompany.com') {
      viewer.formDesigner.updateFormField(
        viewer.retrieveFormFields()[viewer.formFieldCollections.length - 1],
        { backgroundColor: userColor, customData: { author: 'andrew' } }
      );
    } else {
      viewer.formDesigner.updateFormField(
        viewer.retrieveFormFields()[viewer.formFieldCollections.length - 1],
        { backgroundColor: userColor, customData: { author: 'anne' } }
      );
    }

    var currentUserDetails = userDetails.filter(function (userDetail) {
      return userDetail.Mail === currentUser;
    })[0];

    var currentFormField = viewer.formFieldCollections.filter(function (formField) {
      return formField.id === args.field.id;
    })[0];
    currentUserDetails.fieldIds.push(currentFormField);
  };
};
