this.default = function () {
    /**
     * Pivot Table AI Assist Sample
     */
    ej.base.enableRipple(true);
    let dropdownData = ['2025', '2026', '2027', '2028', '2029'];
    let dataSourceSettings = {
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        dataSource: window.pivotData,
        rows: [{ name: 'Country', expandAll: true }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    };
    let chip;
    ej.pivotview.PivotView.Inject(ej.pivotview.FieldList, ej.pivotview.CalculatedField, ej.pivotview.Toolbar, ej.pivotview.ConditionalFormatting, ej.pivotview.NumberFormatting);
    let pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold', type: 'Count' }, { name: 'Amount', caption: 'Sold Amount', type: 'Min' }],
            dataSource: pivotData,
            rows: [{ name: 'Country', expandAll: true }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        },
        width: '100%',
        height: 500,
        cellTemplate: '${getCellContent(data)}',
        toolbarRender: function (args) {
            (args.customToolbar).splice(5, 0, {
                type: 'Separator'
            });
            (args.customToolbar).splice(6, 0, {
                text: 'AI Assist', tooltipText: 'AI Assist',
                click: toolbarClicked.bind(this)
            });
        },
        displayOption: { view: 'Both' },
        chartSettings: {
            value: 'Amount', enableExport: true, chartSeries: { type: 'Column', animation: { enable: false } }, enableMultipleAxis: false,
        },
        toolbar: ['Grid', 'Chart', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'],
        allowConditionalFormatting: true,
        allowPdfExport: true,
        showToolbar: true,
        allowCalculatedField: true,
        showFieldList: true
    });
    pivotObj.appendTo('#pivotTable');

    window.getCellContent = function (e) {
        let template;
        if (e && e.targetCell.className.indexOf('e-valuescontent') > -1) {
            let year = e.cellInfo.columnHeaders.replace(/^FY\s*/, '');
            if (dropdownData.includes(year)) {
                e.targetCell.classList.add('e-custom-class');
                template = '';
            } else {
                template = '';
                ``
            }
        } else {
            template = '';
        }
        return template;
    };

    if (pivotObj.element) {
        let dialogContentDiv = document.createElement('div');
        dialogContentDiv.id = 'dialogContent';
        let dialog = new ej.popups.Dialog({
            minHeight: '200px',
            showCloseIcon: true,
            visible: false,
            header: 'AI Assist',
            content: dialogContentDiv,
            buttons: [{
                click: onSubmit,
                buttonModel: { content: 'Submit', isPrimary: true }
            }],
            target: '#pivotTable'
        });
        dialog.appendTo('#pivotDialog');
        createDialogContent(dialogContentDiv);
    }

    function createDialogContent(container) {
        let categoryTitle1 = document.createElement('p');
        categoryTitle1.className = 'category-title';
        categoryTitle1.innerText = 'Pick a Suggested Query:';
        container.appendChild(categoryTitle1);

        let chipContainer = document.createElement('div');
        chipContainer.className = 'chip-container';
        chip = new ej.buttons.ChipList({
            chips: [
                { text: 'Predictive Analytics & Modeling' },
                { text: 'Intelligent Report Aggregation' },
                { text: 'Adaptive Filter Suggestions' }
            ],
            selection: 'Single',
            selectedChips: [0],
            click: onChipSelectionChange
        });
        chip.appendTo(chipContainer);
        container.appendChild(chipContainer);

        // Prompt section
        let categoryTitle2 = document.createElement('p');
        categoryTitle2.className = 'category-title';
        categoryTitle2.innerText = 'Prompt:';
        container.appendChild(categoryTitle2);

        let inlineDiv = document.createElement('div');
        inlineDiv.className = 'inline';
        inlineDiv.id = 'inlineContent';
        container.appendChild(inlineDiv);
        // Initial Content Based on Default Selection
        updateContentBasedOnSelection(chip.selectedChips);
    }

    function updateContentBasedOnSelection(selectedChipIndex) {
        let inlineDiv = document.getElementById('inlineContent');
        inlineDiv.innerHTML = '';
        if (selectedChipIndex === 0) {
            let yearInput = document.createElement('input');
            yearInput.id = 'yearInput';
            let textSpan = document.createElement('span');
            textSpan.id = 'contentText';
            textSpan.className = 'dropdown-size';
            textSpan.innerHTML = 'Provide future data points up to the year ';
            textSpan.appendChild(yearInput);
            textSpan.innerHTML += ' along with the existing data.';
            inlineDiv.appendChild(textSpan);
            let yearDropdown = new ej.dropdowns.DropDownList({
                placeholder: 'Select a Year',
                width: '80px',
                popupHeight: '200px',
                popupWidth: '140px',
                index: 0,
                dataSource: dropdownData
            });
            yearDropdown.appendTo('#yearInput');
        } else if (selectedChipIndex === 1) {
            let textSpan = document.createElement('span');
            textSpan.id = 'contentText';
            textSpan.innerHTML = 'Suggest the best way to aggregate and view provided fields ';
            let fieldsInput = document.createElement('input');
            fieldsInput.id = 'fieldsInput';
            textSpan.appendChild(fieldsInput);
            textSpan.innerHTML += ' in ';
            let aggregateInput = document.createElement('input');
            aggregateInput.id = 'aggregateInput';
            textSpan.appendChild(aggregateInput);
            textSpan.innerHTML += ' aggregate type.';
            inlineDiv.appendChild(textSpan);
            let fieldsMultiSelect = new ej.dropdowns.MultiSelect({
                placeholder: 'Select Fields',
                width: '150px',
                popupWidth: '180px',
                allowFiltering: true,
                dataSource: ['Country', 'Products', 'Product_Categories', 'Quarter', 'Year', 'Sold', 'Amount', 'In_Stock'], // Sample data
                mode: 'CheckBox',
                value: ['Year', 'Product_Categories', 'Sold']
            });
            fieldsMultiSelect.appendTo('#fieldsInput');
            let aggregateDropdown = new ej.dropdowns.DropDownList({
                placeholder: 'Select aggregation type',
                width: '100px',
                popupHeight: '200px',
                popupWidth: '140px',
                index: 0,
                dataSource: ['Sum', 'Count', 'Product', 'Average', 'Min']
            });
            aggregateDropdown.appendTo('#aggregateInput');
        } else if (selectedChipIndex === 2) {
            let textSpan = document.createElement('span');
            textSpan.id = 'contentText';
            textSpan.className = 'dropdown-size';
            textSpan.innerHTML = 'Filter the Products field based on ';
            let filterInput = document.createElement('input');
            filterInput.id = 'filterInput';
            textSpan.appendChild(filterInput);
            inlineDiv.appendChild(textSpan);
            let filterTextBox = new ej.inputs.TextBox({
                placeholder: 'Enter filter category',
                cssClass: 'product-class',
                value: 'Bikes',
                width: '100%'
            });
            filterTextBox.appendTo('#filterInput');
        }
    }

    function onChipSelectionChange() {
        updateContentBasedOnSelection(chip.selectedChips);
    }

    function toolbarClicked() {
        dialog.show();
    }

    function onSubmit() {
        dialog.hide();
        ej.popups.createSpinner({
            target: document.querySelector('.e-grid .e-content')
        });
        ej.popups.showSpinner(document.querySelector('.e-grid .e-content'));
        let input = frameContent();
        let aiOutput = geminiModel(input);
        aiOutput.then((result) => {
            let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
            pivotObj.dataSourceSettings = JSON.parse(cleanedJsonData);
            pivotObj.dataSourceSettings.filterSettings = JSON.parse(cleanedJsonData).filters;
            ej.popups.hideSpinner(document.querySelector('.e-grid .e-content'));
        });
    }

    function frameContent() {
        let userInput = document.querySelector('#inlineContent').textContent;
        let filter = "Include, Exclude";
        let labelType = "Label, Number";
        let operators = `'Equals', 'DoesNotEquals',
    'BeginWith',
    'DoesNotBeginWith',
    'EndsWith',
    'DoesNotEndsWith',
    'Contains',
    'DoesNotContains',
    'GreaterThan',
    'GreaterThanOrEqualTo',
    'LessThan',
    'LessThanOrEqualTo',
    'Before',
    'BeforeOrEqualTo',
    'After',
    'AfterOrEqualTo',
    'Between',
    'NotBetween'`;
        let summary = `'Sum',
    'Product'
    'Count',
    'DistinctCount',
    'Median',
    'Min',
    'Max',
    'Avg',
    'Index',
    'PercentageOfGrandTotal',
    'PercentageOfColumnTotal',
    'PercentageOfRowTotal',
    'PercentageOfParentRowTotal',
    'PercentageOfParentColumnTotal',
    'PercentageOfParentTotal',
    'RunningTotals',
    'PopulationStDev',
    'SampleStDev',
    'PopulationVar',
    'SampleVar',
    'DifferenceFrom',
    'PercentageOfDifferenceFrom'`;
        let filterQuery = `The filterSettings property holds the filter settings. In this we have two types, member filtering and label filtering. The MemberFiltering has a Type property that is an values corresponding to ${filter} +
  and the MemberFiltering includes the items property that is an array of objects which contains the members of the fields to be included or excluded with the name property. +
  and the LabelFiltering has a Type property that is an values corresponding to ${labelType} +
  and the LabelFiltering property has a Condition property that is an values corresponding to ${operators}. +
  and the LabelFiltering property has a Value1 and Value2 property that depends based on the condition property. +
  Filters should not be applied to fields bound in Values and the same field should not be added to both label filters and member filters.+
  This filterSettings property is an array of objects that contains the filter settings with name and items property for the fields in the pivot table.For example: [{ name: 'Country', type: 'Include', items: ['USA', 'UK' ] }].+`;
        let filterItem = document.querySelector('#filterInput') ? (document.querySelector('#filterInput')).value : '';
        let pivotQuery = `The Values property has a Type property, which is an enum with values corresponding to ${summary}.`;
        let stringInput = `Given the following dataSource and the datasourcesettings(rows, columns and values) are bounded in the pivot table ${JSON.stringify(pivotData)} , ${JSON.stringify(dataSourceSettings)} respectively. 
  Return the newly prepared dataSourceSettings based on following user query: ${userInput} and the data source shouldn't change if the query contains a filter, and the items in the filters should be just an array of values, not objects. And the value of the items should be ${filterItem}.
  Generate an output in JSON format only and Should not include any additional information or content in response.
  Note: ${pivotQuery} +
  ${filterQuery}`;
        return stringInput;
    }
};