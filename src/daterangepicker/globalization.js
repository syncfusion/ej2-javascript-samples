this.default = function () {
    var L10n = ej.base.L10n;
    L10n.load({
        'de': {
            'daterangepicker': {
                placeholder: 'Einen Bereich auswählen',
                startLabel: 'Anfangsdatum',
                endLabel: 'Enddatum',
                applyText: 'Sich bewerben',
                cancelText: 'Stornieren',
                selectedDays: 'Ausgewählte Tage',
                days: 'Tage',
                customRange: 'benutzerdefinierten Bereich'
            }
        },
        'en': {
            'daterangepicker': {
                placeholder: 'Select a range ',
                startLabel: 'Start Date',
                endLabel: 'End Date',
                applyText: 'Apply',
                cancelText: 'Cancel',
                selectedDays: 'Selected Days',
                days: 'Days',
                customRange: 'Custom Range'
            }
        },
        'ar': {
            'daterangepicker': {
                placeholder: 'حدد نطاقا',
                startLabel: 'تاريخ البدء',
                endLabel: 'تاريخ الانتهاء',
                applyText: 'تطبيق',
                cancelText: 'إلغاء',
                selectedDays: 'الأيام المحددة',
                days: 'أيام',
                customRange: 'نطاق مخصص'
            }
        }
    });
    var daterangepicker = new ej.calendars.DateRangePicker({
        locale: 'de'
    });
    daterangepicker.appendTo('#daterangepicker');
    loadCultureFiles('de');

    var dropObj = new ej.dropdowns.DropDownList({
        width: '100%',
        change: cultureChange,
        value: 'de'
    });
    dropObj.appendTo('#cultures');

    function cultureChange() {
        var culture = this.text;
        daterangepicker.locale = culture;
        daterangepicker.enableRtl = daterangepicker.locale === 'ar' ? true : false;
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