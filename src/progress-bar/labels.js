this.default = function () {
  var progressLoad = function (args) {
    loadProgressBarTheme(args);

    if (args.progressBar.theme === 'Material') {
        args.progressBar.trackColor = '#EAEAEA';
    }
};

var button = new ej.buttons.Button();
button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
button.appendTo('#reLoad');

var nearProgress = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '30',
    width: '100%',
    showProgressValue: true,
    value: 40,
    trackThickness: 20,
    progressThickness: 20,
    labelStyle: {
        textAlignment: 'Center',
        text: '40% Complete (Success)',
        color: '#ffffff'
    },
    role: 'Success',
    load: progressLoad,
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    }
});
nearProgress.appendTo('#percentage');
var centerProgress = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '30',
    width: '100%',
    showProgressValue: true,
    value: 50,
    trackThickness: 20,
    progressThickness: 20,
    role: 'Info',
    load: progressLoad,
    labelStyle: {
        textAlignment: 'Center',
        text: '50% Complete (Info)',
        color: '#ffffff'
    },
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    }
});
centerProgress.appendTo('#ratio');
var farProgress = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '30',
    width: '100%',
    showProgressValue: true,
    role: 'Warning',
    load: progressLoad,
    value: 60,
    trackThickness: 20,
    progressThickness: 20,
    labelStyle: {
        textAlignment: 'Center',
        text: '60% Complete (Warning)',
        color: '#ffffff'
    },
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    }
});
farProgress.appendTo('#acutal');
var customProgress = new ej.progressbar.ProgressBar({
    type: 'Linear',
    height: '30',
    width: '100%',
    showProgressValue: true,
    value: 70,
    trackThickness: 20,
    progressThickness: 20,
    role: 'Danger',
    load: progressLoad,
    labelStyle: {
        textAlignment: 'Center',
        text: '70% Complete (Danger)',
        color: '#ffffff'
    },
    animation: {
        enable: true,
        duration: 2000,
        delay: 0,
    }
});
customProgress.appendTo('#custom');
var replayBtn = document.getElementById('reLoad');
replayBtn.onclick = function () {
    nearProgress.refresh();
    centerProgress.refresh();
    farProgress.refresh();
    customProgress.refresh();
};
};