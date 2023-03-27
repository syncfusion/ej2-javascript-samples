this.default = function () {
    var progressLoad = function (args) {
        location.hash.split('/')[1] = location.hash.split('/')[1] ? location.hash.split('/')[1] : 'Material';
        args.progressBar.theme = (location.hash.split('/')[1].charAt(0).toUpperCase() +
            location.hash.split('/')[1].slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    };


    var nearProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        value: 75,
        trackThickness: 20,
        progressThickness: 20,
        load: progressLoad,
        tooltip: { enable: true },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    nearProgress.appendTo('#lineardeterminate');
    var centerProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        value: 65,
        trackThickness: 20,
        progressThickness: 20,

        load: progressLoad,
        tooltip: { enable: true },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    centerProgress.appendTo('#linearindeterminate');
    var farProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        width: '100%',

        load: progressLoad,
        value: 55,
        trackThickness: 20,
        progressThickness: 20,
        tooltip: { enable: true },
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    farProgress.appendTo('#linearsegment');
    var customProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        value: 75,
        trackThickness: 20,
        progressThickness: 20,
        tooltip: { enable: true },
        load: progressLoad,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    customProgress.appendTo('#linearbuffer');
    var activeProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '60',
        value: 75,
        trackThickness: 20,
        progressThickness: 20,
        tooltip: { enable: true },
        load: progressLoad,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        }
    });
    activeProgress.appendTo('#linearactive');
};