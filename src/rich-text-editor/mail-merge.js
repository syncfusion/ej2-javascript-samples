/**
 * Rich Text Editor mention integration sample
 */
this.default = function () {

  var rteValue = '<p>Dear <span contenteditable="false" class="e-mention-chip"><span>{{FirstName}}</span></span> ' + '<span contenteditable="false" class="e-mention-chip"><span>{{LastName}}</span></span>,</p>' + '<p>We are thrilled to have you with us! Your unique promotional code for this month is: ' + '<span contenteditable="false" class="e-mention-chip"><span>{{PromoCode}}</span></span>.</p>' + '<p>Your current subscription plan is: ' + '<span contenteditable="false" class="e-mention-chip"><span>{{SubscriptionPlan}}</span></span>.</p>' + '<p>Your customer ID is: ' + '<span contenteditable="false" class="e-mention-chip"><span>{{CustomerID}}</span></span>.</p>' + '<p>Your promotional code expires on: ' + '<span contenteditable="false" class="e-mention-chip"><span>{{ExpirationDate}}</span></span>.</p>' + "<p>Feel free to browse our latest offerings and updates. If you need any assistance, don't hesitate to contact us at " + '<a href="mailto:{{SupportEmail}}"><span contenteditable="false" class="e-mention-chip"><span>{{SupportEmail}}</span></span></a> ' + 'or call us at <span contenteditable="false" class="e-mention-chip"><span>{{SupportPhoneNumber}}</span></span>.</p>' + '<p>Best regards,<br>The <span contenteditable="false" class="e-mention-chip"><span>{{CompanyName}}</span></span> Team</p>';

  var dropdownContent =
    ' <span style="display:inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>';

  var textToValueMap = {
    'First Name': 'FirstName',
    'Last Name': 'LastName',
    'Support Email': 'SupportEmail',
    'Company Name': 'CompanyName',
    'Promo Code': 'PromoCode',
    'Support Phone Number': 'SupportPhoneNumber',
    'Customer ID': 'CustomerID',
    'Expiration Date': 'ExpirationDate',
    'Subscription Plan': 'SubscriptionPlan',
  };

  var mergeData = [
    { Name: 'First Name', Field: 'FirstName' },
    { Name: 'Last Name', Field: 'LastName' },
    { Name: 'Promo Code', Field: 'PromoCode' },
    { Name: 'Customer ID', Field: 'CustomerID' },
    { Name: 'Subscription Plan', Field: 'SubscriptionPlan' },
    { Name: 'Expiration Date', Field: 'ExpirationDate' },
    { Name: 'Support Email', Field: 'SupportEmail' },
    { Name: 'Support Phone Number', Field: 'SupportPhoneNumber' },
    { Name: 'Company Name', Field: 'CompanyName' },
  ];

  var placeholderData = {
    FirstName: 'John',
    LastName: 'Doe',
    PromoCode: 'ABC123',
    SubscriptionPlan: 'Premium',
    CustomerID: '123456',
    ExpirationDate: '2024-12-31',
    SupportEmail: 'support@example.com',
    SupportPhoneNumber: '+1-800-555-5555',
    CompanyName: 'Example Inc.',
  };

  function onActionBegin(args) {
    if (
      args.requestType === 'EnterAction' &&
      mergeObj.element.classList.contains('e-popup-open')
    ) {
      args.cancel = true;
    }
  }

  function onActionComplete(e) {
    if (e.requestType === 'SourceCode') {
      mailMergeEditor.getToolbar().querySelector('#merge_data').parentElement.classList.add('e-overlay');
      mailMergeEditor.getToolbar().querySelector('#insertField').parentElement.classList.add('e-overlay');
    } else if (e.requestType === 'Preview') {
      mailMergeEditor.getToolbar().querySelector('#merge_data').parentElement.classList.remove('e-overlay');
      mailMergeEditor.getToolbar().querySelector('#insertField').parentElement.classList.remove('e-overlay');
    }
  }

  function onItemSelect(args) {
    if (args.item.text != null) {
      var value = textToValueMap[args.item.text];
      var trimmedValue = value.trim();
      mailMergeEditor.formatter.editorManager.nodeSelection.restore();
      mailMergeEditor.executeCommand(
        'insertHTML',
        '<span contenteditable="false" class="e-mention-chip"><span>{{' +
        trimmedValue +
        '}}</span></span>&nbsp;',
        { undo: true }
      );
    }
  }

  function onClickHandler() {
    if (mailMergeEditor) {
      var editorContent = mailMergeEditor.value;
      var mergedContent = replacePlaceholders(editorContent, placeholderData);
      if (mailMergeEditor.formatter.getUndoRedoStack().length === 0) {
        mailMergeEditor.formatter.saveData();
      }
      mailMergeEditor.value = mergedContent;
      mailMergeEditor.formatter.saveData();
    } else {
      console.log('MailMergeEditor is not initialized.');
    }
  }

  function replacePlaceholders(template, data) {
    return template.replace(/{{\s*(\w+)\s*}}/g, function (match, key) {
      var value = data[key.trim()];
      return value !== undefined ? value : match;
    });
  }

  var mailMergeEditor = new ej.richtexteditor.RichTextEditor({
    value: rteValue,
    toolbarSettings: {
      items: [
        'Bold',
        'Italic',
        'Underline',
        '|',
        'Formats',
        'Alignments',
        'OrderedList',
        'UnorderedList',
        '|',
        'CreateLink',
        'Image',
        'CreateTable',
        '|',
        { tooltipText: 'Merge Data', template: '#merge_data' },
        { tooltipText: 'Insert Field', template: '#insertField' },
        'SourceCode',
        '|',
        'Undo',
        'Redo',
      ],
    },
    actionBegin: onActionBegin,
    actionComplete: onActionComplete,
    saveInterval: 1,
  });
  mailMergeEditor.appendTo('#mailMergeEditor');

  var insertField = new ej.splitbuttons.DropDownButton({
    items: [
      { text: 'First Name' },
      { text: 'Last Name' },
      { text: 'Support Email' },
      { text: 'Company Name' },
      { text: 'Promo Code' },
      { text: 'Support Phone Number' },
      { text: 'Customer ID' },
      { text: 'Expiration Date' },
      { text: 'Subscription Plan' },
    ],
    content: dropdownContent,
    select: onItemSelect,
  });
  insertField.appendTo('#insertField');

  var mergeField = document.getElementById('merge_data');
  if (mergeField) {
    mergeField.addEventListener('click', onClickHandler);
  }

  var mergeObj = new ej.dropdowns.Mention({
    dataSource: mergeData,
    fields: { text: 'Name', value: 'Field' },
    displayTemplate: '<span>{{${Field}}}</span>',

    popupWidth: '250px',
    popupHeight: '200px',
    target: mailMergeEditor.inputElement,
    mentionChar: '{{',
    allowSpaces: true,
  });
  mergeObj.appendTo('#mentionField');
};
