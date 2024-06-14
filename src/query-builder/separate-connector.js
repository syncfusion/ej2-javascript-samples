this.default = function () {
    var content;
    var selectedIndex = 0;
    var queryType = 'inline';

    var importRules = {
        condition: "",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "notequal", value: "Andre", condition: "and" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'], condition: "or" },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/15/2023", "11/30/2023"], condition: "and" },
            { condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true, condition: "and" },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "JavaScript" }
                ]
            },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 40 }
        ]
    };

    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        rule: importRules,
        enableSeparateConnector: true,
        ruleChange: updateRule
    });
    qryBldrObj.appendTo('#querybuilder');

    var radioBtn = new ej.buttons.RadioButton({ label: 'Inline', cssClass: 'e-custom-radio-btn', name: 'state', checked: true, value: "Inline", change: change });
    radioBtn.appendTo('#element1');

    radioBtn = new ej.buttons.RadioButton({ label: 'Parameterized', name: 'state', value: "Parameterized", change: change, cssClass: 'e-custom-radio-btn' });
    radioBtn.appendTo('#element2');

    radioBtn = new ej.buttons.RadioButton({ label: 'Named Parameter', name: 'state', value: "NamedParameter", change: change, cssClass: 'e-custom-radio-btn' });
    radioBtn.appendTo('#element3');
    
    function convertNamedParameterSql(qbrule) {
        content = JSON.stringify(qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
    }

    function convertParameterSql(qbrule) {
        content = JSON.stringify(qryBldrObj.getParameterizedSql(qbrule), null, 4);
    }

    function updateContent() {
        var qbrule = qryBldrObj.getValidRules(qryBldrObj.rule);
        switch (queryType) {
            case 'parameterized':
                convertParameterSql(qbrule);
                break;
            case 'inline':
                content = qryBldrObj.getSqlFromRules(qbrule);
                break;
            default:
                convertNamedParameterSql(qbrule);
                break;
        }
        document.querySelector('.e-sql-content .e-pre-content').textContent = content;
        if (typeof hljs !== 'undefined') {
            hljs.highlightBlock(document.querySelector('.e-sql-content'));
        }
    }

    function tabChange(args) {
        selectedIndex = args.selectedIndex;
        updateRule();
    }

    function change(args) {
        queryType = args.value.toLowerCase();
        updateContent();
    }

    var tabObj = new ej.navigations.Tab({
        height: 320,
        created: updateContent,
        selected: tabChange
    });
    tabObj.appendTo('#tab_orientation');

    var jsonTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    jsonTooltip.appendTo('#jsonTooltip');

    var sqlTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    sqlTooltip.appendTo('#sqlTooltip');

    function updateRule() {
        switch (selectedIndex) {
            case 0:
                updateContent();
                break;
            case 1:
                updateJsonContent();
                break;
        }
    }

    function updateJsonContent() {
        var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        content = JSON.stringify(validRule, null, 4);
        document.querySelector('.e-json-content .e-pre-content').textContent = content;
        if (typeof hljs !== 'undefined') {
            hljs.highlightBlock(document.querySelector('.e-sql-content'));
        }
    }

    var copyJsonTooltipElem = document.getElementById('copy-json');
    copyJsonTooltipElem.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    });

    var copySQLTooltipElem = document.getElementById('copy-sql');
    copySQLTooltipElem.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    });

    var queryPreviewElem = document.getElementById('e-query-preview');
    queryPreviewElem.addEventListener('mouseenter', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (selectedIndex == i) {
                elem[i].style.display = 'block';
            }
        }
    });

    queryPreviewElem.addEventListener('mouseleave', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (selectedIndex == i) {
                elem[i].style.display = 'none';
            }
        }
    });
};