this.default = function () {
    var content;
    var selectedIndex = 0;
    var selectedContent;
    var queryType = 'inline';

    var importRules = {
        condition: "or",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "notequal", value: "Andre" },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 50 },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { condition: "and", rules: [
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "TypeScript" },
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/15/2023", "11/30/2023"] },
        ],
    };

    var qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: window.employeeData,
        rule: importRules,
        ruleChange: updateRule,
        allowDragAndDrop: true
    });
    qryBldrObj.appendTo('#querybuilder');

    var radioButton = new ej.buttons.RadioButton({ label: 'Inline', cssClass: 'e-custom-radio-btn', name: 'state', checked: true, value: "Inline", change: change });
    radioButton.appendTo('#element1');

    radioButton = new ej.buttons.RadioButton({ label: 'Parameterized', name: 'state', value: "Parameterized", change: change, cssClass: 'e-custom-radio-btn' });
    radioButton.appendTo('#element2');

    radioButton = new ej.buttons.RadioButton({ label: 'Named Parameter', name: 'state', value: "NamedParameter", change: change, cssClass: 'e-custom-radio-btn' });
    radioButton.appendTo('#element3');

    function convertParameterSql(qbrule) {
        content = JSON.stringify(qryBldrObj.getParameterizedSql(qbrule), null, 4);
    }
    
    function convertNamedParameterSql(qbrule) {
        content = JSON.stringify(qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
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
        if (typeof hljs !== 'undefined') {
            hljs.highlightBlock(document.querySelector('.e-sql-content'));
        }
    }

    function change(args) {
        queryType = args.value.toLowerCase();
        updateContent();
    }

    function tabChange(args) {
        selectedIndex = args.selectedIndex;
        selectedContent = args.selectedContent;
        updateRule();
    }

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

    var jsonTooltip = new ej.popups.Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    jsonTooltip.appendTo('#jsonTooltip');

    function updateJsonContent() {
        var validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        content = JSON.stringify(validRule, null, 4);
        document.querySelector('.e-json-content .e-pre-content').textContent = content;
        if (typeof hljs !== 'undefined') {
            hljs.highlightBlock(document.querySelector('.e-sql-content'));
        }
    }

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

    var copySQLTooltip = document.getElementById('copy-sql');
    copySQLTooltip.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    });

    var copyJsonTooltip = document.getElementById('copy-json');
    copyJsonTooltip.addEventListener('click', function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            ej.base.getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    });

    var queryPreview = document.getElementById('e-query-preview');
    queryPreview.addEventListener('mouseleave', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (selectedIndex == i) {
                elem[i].style.display = 'none';
            }
        }
    });
    queryPreview.addEventListener('mouseenter', function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (selectedIndex == i) {
                elem[i].style.display = 'block';
            }
        }
    });
};
