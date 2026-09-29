this.default = function () {
    var formRenderer = new ej.formrenderer.FormRenderer({
        schema: window.contactForm,
        customWidgetSettings: [
            {
                templateId: 'textboxTemplate',
                template: textboxTemplate
            },
            {
                templateId: 'emailTemplate',
                template: emailTemplate
            },
            {
                type: 'dropdown',
                template: dropdownTemplate
            },
            {
                type: 'textarea',
                template: textareaTemplate
            },
            {
                type: 'checkbox',
                template: checkboxTemplate
            },
            {
                type: 'button',
                template: submitButtonTemplate
            }
        ]
    });
    formRenderer.appendTo('#form-renderer-control');

    function textboxTemplate(args) {
        const textbox = document.createElement('input');
        textbox.id = 'form-renderer-control-' + args.fieldData.id;
        textbox.className = 'e-input';
        textbox.name = args.fieldData.name;
        textbox.type = 'text';
        textbox.placeholder = args.fieldData.placeholder;
        textbox.addEventListener('change', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.value); });
        textbox.addEventListener('blur', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.value); });
        return textbox;
    }

    function emailTemplate(args) {
        const textbox = document.createElement('input');
        textbox.id = 'form-renderer-control-' + args.fieldData.id;
        textbox.className = 'e-input';
        textbox.name = args.fieldData.name;
        textbox.type = args.fieldData.textboxType;
        textbox.placeholder = args.fieldData.placeholder;
        textbox.addEventListener('change', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.value); });
        textbox.addEventListener('blur', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.value); });
        return textbox;
    }

    function dropdownTemplate(args) {
        const selectElement = document.createElement('select');
        selectElement.className = 'fr-dropdown';
        selectElement.id = 'form-renderer-control-' + args.fieldData.id;
        selectElement.name = args.fieldData.name;
        for(let i = 0; i < args.fieldData.options.length; i++) {
            let optionElement = document.createElement('option');
            optionElement.value = args.fieldData.options[i].value;
            optionElement.text = args.fieldData.options[i].text;
            selectElement.appendChild(optionElement);
        }
        return selectElement;
    }

    function textareaTemplate(args) {
        const textarea = document.createElement('textarea');
        textarea.id = 'form-renderer-control-' + args.fieldData.id;
        textarea.className = 'e-input';
        textarea.name = args.fieldData.name;
        textarea.minLength = args.fieldData.minLength;
        textarea.maxLength = args.fieldData.maxLength;
        textarea.rows = args.fieldData.rows;
        textarea.placeholder = args.fieldData.placeholder;
        textarea.addEventListener('change', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.value); });
        textarea.addEventListener('blur', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.value); });
        return textarea;
    }

    function checkboxTemplate(args) {
        const label = document.createElement('label');
        label.style.cssText = 'font-size: 14px; font-weight: 500;';
        label.htmlFor = 'form-renderer-control-' + args.fieldData.id;
        const checkbox = document.createElement('input');
        checkbox.style.cssText = 'margin-right: 10px; height: 15px; width:15px;';
        checkbox.id = 'form-renderer-control-' + args.fieldData.id;
        checkbox.name = args.fieldData.name;
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (event) => { formRenderer.setFieldValue(args.fieldData.id, event.target.checked); });
        label.appendChild(checkbox);
        const textNode = document.createTextNode(args.fieldData.label);
        label.appendChild(textNode);
        return label;
    }

    function submitButtonTemplate(args) {
        return '<button class="e-btn e-primary" id="form-renderer-control-' + args.fieldData.id +'" name="' + args.fieldData.name +'" type="' + args.fieldData.buttonType +'">' + args.fieldData.label +'</button>';
    }
};