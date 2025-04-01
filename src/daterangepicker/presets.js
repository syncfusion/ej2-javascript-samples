this.default = function () {
    var labelsByLanguage = {
        en: ['This Week', 'This Month', 'Last Month', 'Last Year'],
        de: ['Diese Woche', 'Dieser Monat', 'Letzter Monat', 'Letztes Jahr'],
        'fr-CH': ['Cette semaine', 'Ce mois-ci', 'Le mois dernier',  'L\'année dernière'],
        ar: ['هذا الأسبوع', 'هذا الشهر', 'الشهر الماضي', 'السنة الماضية'],
        zh: ['本周', '本月', '上个月', '去年']
    };
    var daterangepicker = new ej.calendars.DateRangePicker({
        presets: [
            { label: 'This Week', start: new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString()),
			end: new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate() - (new Date().getDay() + 7) % 7)) + 6).getDate() + 6)).toDateString()) },
            { label: 'This Month', start: new Date(new Date(new Date().setDate(1)).toDateString()), end: new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).setDate(0)).toDateString()) },
            { label: 'Last Month', start: new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString()), end:new Date(new Date(new Date().setDate(0)).toDateString()) },
            { label: 'Last Year', start: new Date(new Date(new Date().getFullYear() - 1, 0, 1).toDateString()), end: new Date(new Date(new Date().getFullYear() - 1, 11, 31).toDateString()) }
            
        ]
    });
    daterangepicker.appendTo('#daterangepicker');

    function updatePresetLabels(languageCode) {
        var newLabels = labelsByLanguage[languageCode] ; 
        for (var index = 0; index < daterangepicker.presets.length; index++) {
            daterangepicker.presets[index].label = newLabels[index]; 
        }
        daterangepicker.refresh();
    }

    var cultureElement = document.getElementById("sb-setting-culture_hidden") || null ;
    if (cultureElement) {
	    cultureElement.addEventListener('change', function(event) {
	        var selectedLanguage = event.target.value;
	        updatePresetLabels(selectedLanguage);
	    });
	}
};
