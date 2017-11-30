this.default = function () {
    var L10n = ej.base.L10n;
    L10n.load({
        'de': {
            'datepicker': {
                placeholder: 'Wählen Sie ein Datum'
            }
        },
        'en': {
            'datepicker': {
                placeholder: 'Choose a date'
            }
        },
        'ar': {
            'datepicker': {
                placeholder: 'اختر تاريخا'
            }
        }
    });
    var datepicker = new ej.calendars.DatePicker({
        locale: 'de'
    });
    datepicker.appendTo('#datepicker');
    loadCultureFiles('de');

    var dropObj = new ej.dropdowns.DropDownList({
        width: '100%',
        change: cultureChange,
        value: 'de'
    });
    dropObj.appendTo('#cultures');

    function cultureChange() {
        var culture = this.text;
        datepicker.locale = culture;
        datepicker.enableRtl = datepicker.locale === 'ar' ? true : false;
        if (culture !== 'en') {
            loadCultureFiles(culture);
        }
    }

    function loadCultureFiles(name) {
        var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
        if (name === 'ar') {
            files.push('numberingSystems.json');
        }
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            if (name === 'ar' && prop === files.length - 1) {
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
            loadCulture(prop);
        }
    }
};