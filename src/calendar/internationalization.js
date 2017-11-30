this.default = function () {
    var calendar = new ej.calendars.Calendar({
        change: dateChange
    });
    calendar.appendTo('#calendar');
    loadCultureFiles('de');
    calendar.locale = 'de';

    var dropObj = new ej.dropdowns.DropDownList({
        width: '100%',
        value: 'de',
        change: cultureChange,
    });
    dropObj.appendTo('#cultures');
    var globalize = new ej.base.Internationalization(calendar.locale);
    function dateChange(args) {
        (document.getElementById('date_label')).textContent = 'Selected Value: ' + globalize.formatDate(args.value);
    }

    function cultureChange() {
        var culture = this.text;
        calendar.locale = culture;
        calendar.enableRtl = calendar.locale === 'ar' ? true : false;
        if (culture !== 'en') {
            loadCultureFiles(culture);
        }
        globalize = new ej.base.Internationalization(calendar.locale);
        if (calendar.value) {
            var dateString = globalize.formatDate(calendar.value);
            (document.getElementById('date_label')).textContent = 'Selected Value: ' + dateString;
        }
    }

    function loadCultureFiles(name) {
        var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            ajax = new ej.base.Ajax(location.origin + location.pathname + 'src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
            ajax.onSuccess = function (value) {
                val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture(prop);
        }
    }
};