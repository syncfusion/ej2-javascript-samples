/**
 * Default querybuilder sample
 */

this.default = function () {
    var content;
    var columnData = [
        { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
        { field: 'FirstName', label: 'First Name', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'Hire Date', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    var importRules = {
        'condition': 'and',
        'rules': [{
            'label': 'EmployeeID',
            'field': 'EmployeeID',
            'type': 'number',
            'operator': 'equal',
            'value': 1
        },
        {
            'label': 'Title',
            'field': 'Title',
            'type': 'string',
            'operator': 'equal',
            'value': 'Sales Manager'
        }]
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        columns: columnData,
        rule: importRules,
        ruleChange: updateRule,
        created: createdControl
    });
    qryBldrObj.appendTo('#querybuilder');
    var dialogObj = new ej.popups.Dialog({
        header: 'JSON',
        showCloseIcon: true,
        visible: false,
        isModal: true,
        content: document.getElementById("dlgContent"),
        buttons: [
            {
                'click': function () {
                    dialogObj.hide();
                },
                buttonModel: {
                    cssClass: 'e-flat',
                    content: 'Cancel'
                }
            },
            {
                'click': function () {
                    importQuery();
                },
                buttonModel: {
                    isPrimary: true,
                    content: 'Import'
                }
            }
        ],
        beforeOpen: onBeforeopen,
        width: '700px',
        height: '420px',
        animationSettings: { effect: 'Zoom' }
    });
    dialogObj.appendTo('#dialog');
    var tooltip = new ej.popups.Tooltip({
        content: 'Copied to clipboard',
        opensOn: 'Click'
    });
    tooltip.appendTo('#tooltipclick');

    function createdControl() {
        if (ej.base.Browser.isDevice) {
            qryBldrObj.summaryView = true;
        }
        updateRule();
    }
    function onBeforeopen() {
        var dlgContentElement = document.getElementById('dlgContent');
        var errorElem = document.getElementById('dlgSpan');
        if (dlgContentElement) {
            var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
            content = JSON.stringify(validRule, null, 4);
            dlgContentElement.value = content;
            errorElem.style.visibility = 'hidden';
            if (errorElem.classList.contains("error")) {
                errorElem.classList.remove("error");
            }
        }
    }
    function importQuery() {
        try {
            var textAreacontent = document.getElementById('dlgContent');
            qryBldrObj.setRules(JSON.parse(textAreacontent.value));
            updateRule();
            dialogObj.hide();
        }
        catch (error) {
            var errorElem = document.getElementById('dlgSpan');
            if (!errorElem.classList.contains("error")) {
                errorElem.style.visibility = 'visible';
                errorElem.classList.add("error");
            }
        }
    }
    function updateRule() {
        var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        content = JSON.stringify(validRule, null, 4);
        document.querySelector('.e-json-content .e-pre-content').textContent = content;
        hljs.highlightBlock(document.querySelector('.e-json-content'));
    }
    document.getElementById('json-btn').onclick = function () {
        dialogObj.show();
    };
    var queryPreviewElem = document.getElementsByClassName('e-query-json-preview')[0];
    queryPreviewElem.addEventListener('mouseenter', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        elem[0].style.display = 'block';
    });
    queryPreviewElem.addEventListener('mouseleave', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        elem[0].style.display = 'none';
    });
    var copyElem = document.getElementById('copy-tooltip');
    copyElem.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            (ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip')).close();
        },1000);
    });
};
