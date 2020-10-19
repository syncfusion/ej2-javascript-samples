this.default = function () {
    var progressLoad = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (args.progressBar.theme === 'Material') {
            args.progressBar.trackColor = '#EAEAEA';
        }
    };

    var button = new ej.buttons.Button();
    button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    button.appendTo('#reLoad');
    
    var dangerProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        width: '100%',
        trackColor: '#F5F5F5',
        progressColor: '#d9534f',
        value: 20,
        isStriped: true,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        load: progressLoad
    });
    dangerProgress.appendTo('#danger');
    var warningProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        width: '100%',
        trackColor: '#F5F5F5',
        progressColor: '#f0ad4e',
        value: 40,
        isStriped: true,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        load: progressLoad
    });
    warningProgress.appendTo('#warning');
    var infoProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        width: '100%',
        trackColor: '#F5F5F5',
        progressColor: '#5bc0de',
        value: 70,
        isStriped: true,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        load: progressLoad
    });
    infoProgress.appendTo('#info');
    var successProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        width: '100%',
        trackColor: '#F5F5F5',
        progressColor: '#5CB85C',
        value: 100,
        isStriped: true,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        load: progressLoad
    });
    successProgress.appendTo('#success');
    var animationBtn = document.getElementById('animation');
    animationBtn.onclick = function () {
        if (!dangerProgress.animation.enable) {
            dangerProgress.animation.enable = true;
            animationBtn.innerHTML = 'Stop Animation';
            dangerProgress.refresh();
        }
        else {
            dangerProgress.animation.enable = false;
            animationBtn.innerHTML = 'Start Animation';
            dangerProgress.refresh();
        }
        if (!warningProgress.animation.enable) {
            warningProgress.animation.enable = true;
            warningProgress.refresh();
        }
        else {
            warningProgress.animation.enable = false;
            warningProgress.refresh();
        }
        if (!infoProgress.animation.enable) {
            infoProgress.animation.enable = true;
            infoProgress.refresh();
        }
        else {
            infoProgress.animation.enable = false;
            infoProgress.refresh();
        }
        if (!successProgress.animation.enable) {
            successProgress.animation.enable = true;
            successProgress.refresh();
        }
        else {
            successProgress.animation.enable = false;
            successProgress.refresh();
        }
    };
};