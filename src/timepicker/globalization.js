this.default = function () {
    var L10n = ej.base.L10n;
    L10n.load({
        'de': {
            'timepicker': { placeholder: 'Wählen Sie Zeit' }
        },
        'zh': {
            'timepicker': { placeholder: '選擇時間' }
        },
        'vi': {
            'timepicker': { placeholder: 'Chọn thời gian' }
        },
        'en': {
            'timepicker': { placeholder: 'Select Time' }
        },
        'ar': {
            'timepicker': { placeholder: 'حدد الوقت' }
        }
    });

    var timepicker = new ej.calendars.TimePicker({
        locale: 'de'
    });
    timepicker.appendTo('#timepicker');
    loadCultureFiles('de');

    var dropObj = new ej.dropdowns.DropDownList({
        width: '100%',
        change: cultureChange,
        value: 'de'
    });
    dropObj.appendTo('#culture');

    function cultureChange() {
        var culture = this.text;
        timepicker.locale = culture;
        if (culture !== 'en') {
            loadCultureFiles(culture);
        }
        timepicker.enableRtl = timepicker.locale === 'ar' ? true : false;
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
