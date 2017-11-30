this.default = function () {
    // Loading English, German and Chinese cultures
    ej.base.L10n.load({
        'en': {
            'numerictextbox': { incrementTitle: 'Increment value', decrementTitle: 'Decrement value' }
        },
        'de': {
            'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert' }
        },
        'zh': {
            'numerictextbox': { incrementTitle: '增值', decrementTitle: '遞減值' }
        }
    });
    function loadCultureFiles(name) {
        var files = ['currencies.json', 'numbers.json'];
        if (name === 'zh') {
            files.push('currencyData.json');
        }
        var loader = ej.base.loadCldr;
        var loadCulture = function () {
            var val,ajax;
            if (name === 'zh' && prop === files.length-1) {
                ajax = new ej.base.Ajax(location.origin + location.pathname + 'src/common/cldr-data/supplemental/' + files[prop], 'GET', false);
            } else {
                ajax = new ej.base.Ajax(location.origin + location.pathname + 'src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
            }
            ajax.onSuccess = function (value) {
                 val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture();
        }
    }
    loadCultureFiles('de');
    // Render the Numeric Textbox
    var numeric = new ej.inputs.NumericTextBox({
        locale: 'de',
        value: 10,
        placeholder: 'Geben Sie den Wert ein',
        floatLabelType: 'Always'
    });
    numeric.appendTo('#numeric');
    // Render the Percentage Textbox
    var percent = new ej.inputs.NumericTextBox({
        format: 'p2',
        locale: 'de',
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        placeholder: 'Geben Sie den Prozentsatz ein',
        floatLabelType: 'Always'
    });
    percent.appendTo('#percent');
    // Render the Currency Textbox
    var currency = new ej.inputs.NumericTextBox({
        format: 'c2',
        locale: 'de',
        value: 100,
        currency: 'EUR',
        placeholder: 'Geben Sie die Währung ein',
        floatLabelType: 'Always'
    });
    currency.appendTo('#currency');
    document.getElementById('cultures').addEventListener('change', changeLocale);
    // While changing culture 'locale', 'currency' and 'placeholder' values will be modified.
    function changeLocale() {
        var culture = document.getElementById('cultures').value;
        numeric.locale = culture;
        percent.locale = culture;
        currency.locale = culture;
        if (culture != 'en') {
            loadCultureFiles(culture);
        }
        if (culture === 'zh') {
            currency.currency = 'CNY';
            numeric.placeholder = '输入值';
            currency.placeholder = '输入货币';
            percent.placeholder = '输入百分比';
        }
        else if (culture === 'de') {
            currency.currency = 'EUR';
            numeric.placeholder = 'Geben Sie den Wert ein';
            currency.placeholder = 'Geben Sie die Währung ein';
            percent.placeholder = 'Geben Sie den Prozentsatz ein';
        }
        else {
            currency.currency = 'USD';
            numeric.placeholder = 'Enter the value';
            currency.placeholder = 'Enter the currency';
            percent.placeholder = 'Enter the percentage';
        }
    }
};