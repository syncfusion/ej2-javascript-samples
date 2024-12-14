/**
 * Default Image Editor sample
 */

this.default = function () {
  // File extensions data
  var fileExtensionsList = [
    { Name: "JPEG", Value: ".jpeg" },
    { Name: "JPG", Value: ".jpg" },
    { Name: "PNG", Value: ".png" },
    { Name: "SVG", Value: ".svg" },
    { Name: "WebP", Value: ".webp" }
  ];

  // Initial values
  var minFileSize = 1; // 1 KB
  var maxFileSize = 100; // 100 KB
  var allowedExtensions = ".jpeg, .jpg, .png, .svg, .webp";
  var units = [{ text: 'KB' }, { text: 'MB' }];
  var defaultUnit = 'KB';

  // Initialize NumericTextBox for minimum file size
  var minFileNumeric = new ej.inputs.NumericTextBox({
    width: '150px',
    value: minFileSize,
    min: 1,
    change: function (args) {
      minFileSize = args.value;
      updateUploadSettings();
    }
  });
  minFileNumeric.appendTo('#minFileSize');

  // Initialize NumericTextBox for maximum file size
  var maxFileNumeric = new ej.inputs.NumericTextBox({
    width: '150px',
    value: maxFileSize,
    min: 1,
    change: function (args) {
      maxFileSize = args.value;
      updateUploadSettings();
    }
  });
  maxFileNumeric.appendTo('#maxFileSize');

  // Initialize MultiSelect component for allowed file extensions
  var msObject = new ej.dropdowns.MultiSelect({
    dataSource: fileExtensionsList,
    width: '210px',
    fields: { text: 'Name', value: 'Value' },
    mode: 'CheckBox',
    showSelectAll: true,
    value: allowedExtensions.split(', '),
    change: function (args) {
      if (args.value.length === 0) {
        allowedExtensions = ".jpeg, .jpg, .png, .svg, .webp";
      } else {
        allowedExtensions = args.value.join(', ');
      }
      updateUploadSettings();
    }
  });
  msObject.appendTo('#allowedExtensions');

  // Initialize Image Editor
  var imageEditorObj = new ej.imageeditor.ImageEditor({
    uploadSettings: {
      minFileSize: minFileSize,
      maxFileSize: maxFileSize,
      allowedExtensions: allowedExtensions
    },
    created: function () {
      updateUploadSettings();
    }
  });
  imageEditorObj.appendTo('#imageeditor');

  // Update Image Editor Upload Settings
  function updateUploadSettings() {
    imageEditorObj.uploadSettings = {
      minFileSize: convertToBytes(minFileSize),
      maxFileSize: convertToBytes(maxFileSize),
      allowedExtensions: allowedExtensions
    };
    imageEditorObj.update();
  }

  var drpDownBtn = new ej.splitbuttons.DropDownButton({
    content: defaultUnit,
    items: units,
    select: function(args) {
      updateUnit(args.item.text);
    },
    beforeItemRender: function(args) {
        if (args.item.text === defaultUnit) {
            args.element.classList.add('e-selected');
        }
    }
  });
  drpDownBtn.appendTo('#dropdownbtn');
  
  function updateUnit(unit) {
    drpDownBtn.content = defaultUnit = unit;
    updateUploadSettings();
  }
  
  function convertToBytes(value) {
    return value * (defaultUnit === 'MB' ? 1024 * 1024 : 1024);
  }
};
