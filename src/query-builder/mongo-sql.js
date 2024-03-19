
this.default = function () {
    var currentvalue = {
        value: '',
        rule: ''
    };
    var dialogHeader;
    var items = [
        {
            text: 'Import Mongo Query'
        },
        {
            text: 'Import Inline Sql'
        },
        {
            text: 'Import Parameter Sql'
        },
        {
            text: 'Import Named Parameter Sql'
        }
    ];
    var columns = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean"},
        { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy" },
        { field: "Country", label: "Country", type: "string" }
    ];
    var importRules = {
        condition: "and",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 30 },
            {
                condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/28/2023", "11/30/2023"] }
        ]
    };
    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        columns: columns,
        rule: importRules,
        ruleChange: updateRule
    });
    qryBldrObj.appendTo('#querybuilder');
    var selectedIndex = 0;
    var selectedContent;
    var queryType = 'inline';
    var radiobutton = new ej.buttons.RadioButton({ label: 'Inline', cssClass: 'e-custom-radio-btn', name: 'state', checked: true, value: "Inline", change: change });
    radiobutton.appendTo('#element1');
    radiobutton = new ej.buttons.RadioButton({ label: 'Parameterized', name: 'state', value: "Parameterized", change: change, cssClass: 'e-custom-radio-btn' });
    radiobutton.appendTo('#element2');
    radiobutton = new ej.buttons.RadioButton({ label: 'Named Parameter', name: 'state', value: "NamedParameter", change: change, cssClass: 'e-custom-radio-btn' });
    radiobutton.appendTo('#element3');
    var content;
    function change(args) {
        queryType = args.value.toLowerCase();
        updateContent();
    }
    function updateContent() {
        var qbrule = qryBldrObj.getValidRules(qryBldrObj.rule);
        switch (queryType) {
            case 'inline':
                content = qryBldrObj.getSqlFromRules(qbrule);
                break;
            case 'parameterized':
                convertParameterSql(qbrule);
                break;
            default:
                convertNamedParameterSql(qbrule);
                break;
        }
        document.querySelector('.e-sql-content .e-pre-content').textContent = content;
        hljs.highlightBlock(document.querySelector('.e-sql-content'));
    }
    function tabChange(args) {
        selectedIndex = args.selectedIndex;
        selectedContent = args.selectedContent;
        updateRule();
    }
    function convertParameterSql(qbrule) {
        content = JSON.stringify(qryBldrObj.getParameterizedSql(qbrule), null, 4);
    }
    function convertNamedParameterSql(qbrule) {
        content = JSON.stringify(qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
    }
    var dialogObj = new ej.popups.Dialog({
        content: document.getElementById("mongo-dlgContent"),
        showCloseIcon: true,
        visible: false,
        isModal: true,
        buttons: [
            {
                'click': function () {
                    dialogObj.hide();
                },
                buttonModel: {
                    content: 'Cancel',
                    cssClass: 'e-flat'
                }
            },
            {
                'click': function () {
                    importQuery();
                },
                buttonModel: {
                    content: 'Import',
                    isPrimary: true,
                }
            }
        ],
        width: '700px',
        height: '420px',
        animationSettings: { effect: 'Zoom' },
        beforeOpen: onBeforeopen
    });
    dialogObj.appendTo('#mongo-dialog');
    var tabObj = new ej.navigations.Tab({
        height: 320,
        created: updateContent,
        selected: tabChange
    });
    tabObj.appendTo('#tab_orientation');
    var sqlTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    sqlTooltip.appendTo('#sqlTooltip');
    var mongoTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    mongoTooltip.appendTo('#mongoTooltip');
    var ddbOption = {
        items: items,
        cssClass: 'e-caret-hide',
        select: function (args) {
            var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
            switch (args.item.text) {
                case 'Import Mongo Query':
                    var mongoQuery = JSON.parse(qryBldrObj.getMongoQuery(validRule));
                    mongoQuery = JSON.stringify(mongoQuery, null, 4);
                    currentvalue.value = mongoQuery;
                    currentvalue.rule = 'mongo';
                    dialogHeader = 'Mongo';
                    dialogObj.show();
                    break;
                case 'Import Inline Sql':
                    currentvalue.value = qryBldrObj.getSqlFromRules(validRule);
                    currentvalue.rule = 'sql';
                    dialogHeader = "SQL";
                    dialogObj.show();
                    break;
                case 'Import Parameter Sql':
                    currentvalue.value = JSON.stringify(qryBldrObj.getParameterizedSql(validRule), null, 4);
                    currentvalue.rule = 'parameter';
                    dialogHeader = "Parameter SQL";
                    dialogObj.show();
                    break;
                default:
                    currentvalue.value = JSON.stringify(qryBldrObj.getParameterizedNamedSql(validRule), null, 4);
                    currentvalue.rule = 'namedparameter';
                    dialogHeader = "Named Parameter SQL";
                    dialogObj.show();
                    break;
            }
        }
    };
    var drpDownBtn = new ej.splitbuttons.DropDownButton(ddbOption);
    drpDownBtn.appendTo('#element');
    function onBeforeopen() {
        var errorElem = document.getElementById('dlgSpan');
        var dlgContentElement = document.getElementById('mongo-dlgContent');
        if (dlgContentElement) {
            dlgContentElement.value = currentvalue.value;
            dialogObj.header = dialogHeader;
            errorElem.style.visibility = 'hidden';
            if (errorElem.classList.contains("error")) {
                errorElem.classList.remove("error");
            }
        }
    }
    function importQuery() {
        try {
            var textAreacontent = document.getElementById('mongo-dlgContent');
            if (currentvalue.rule != 'sql') {
                var textAreaValue = JSON.parse(textAreacontent.value);
            }
            switch (currentvalue.rule) {
                case 'mongo':
                    qryBldrObj.setMongoQuery(textAreacontent.value);
                    break;
                case 'namedparameter':
                    qryBldrObj.setParameterizedNamedSql(JSON.parse(textAreacontent.value));
                    break;
                case 'parameter':
                    qryBldrObj.setParameterizedSql(JSON.parse(textAreacontent.value));
                    break;
                case 'sql':
                    qryBldrObj.setRulesFromSql(textAreacontent.value, true);
                    break;
                default:
                    break;
            }
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
    function convertMongoQuery() {
        var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        var mongoQuery = JSON.parse(qryBldrObj.getMongoQuery(validRule));
        content = JSON.stringify(mongoQuery, null, 4);
        document.querySelector('.e-mongo-content .e-pre-content').textContent = content;
        hljs.highlightBlock(document.querySelector('.e-sql-content'));
    }
    function updateRule() {
        switch (selectedIndex) {
            case 0:
                updateContent();
                break;
            case 1:
                convertMongoQuery();
                break;
        }
    }
    var queryPreview = document.getElementById('e-query-preview');
    queryPreview.addEventListener('mouseenter', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (selectedIndex == i) {
                elem[i].style.display = 'block';
            }
        }
    });
    queryPreview.addEventListener('mouseleave', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (selectedIndex == i) {
                elem[i].style.display = 'none';
            }
        }
    });
    var copyMongoTooltip = document.getElementById('copy-mongo');
    copyMongoTooltip.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    });
    var copySQLTooltip = document.getElementById('copy-sql');
    copySQLTooltip.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    });
};
