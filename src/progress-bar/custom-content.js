
this.default = function () {
    var clearTimeout1;
    var clearTimeout2;
    var annotationColors = { material: '#e91e63', fabric: '#0078D6', bootstrap: '#317ab9', bootstrap4: '#007bff', highcontrast: '#FFD939', tailwind: '#4F46E5', bootstrap5: '#0D6EFD', bootstrap5dark: '#0D6EFD', bootstrapdark: '#9A9A9A', fabricdark: '#9A9A9A', materialdark: '#9A9A9A', tailwinddark: '#22D3EE' };
    var progressLoad = function (args) {
        var customTheme = location.hash.split('/')[1];
        customTheme = customTheme ? customTheme : 'Material';
        args.progressBar.theme = (customTheme.charAt(0).toUpperCase() +
            customTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (args.progressBar.element.id === 'label-container') {
            args.progressBar.annotations[0].content = '<div id="point1" class="plabeltxt" style="color: ' + annotationColors[customTheme.replace(/-/i, '')] + ' "><span>80%</span></div>';
        }
        else if (args.progressBar.element.id === 'download-container') {
            args.progressBar.annotations[0].content = '<img src="src/progress-bar/images/' + customTheme.replace(/-/i, '') + '-Download.svg"></img>';
        }
        else {
            args.progressBar.annotations[0].content = '<img src="src/progress-bar/images/' + customTheme.replace(/-/i, '') + '-pause.svg"></img>';
        }
    };
    var pausePlay = new ej.progressbar.ProgressBar({
        type: 'Circular',
        value: 100,
        width: '160px',
        height: '160px',
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        load: progressLoad,
        progressCompleted: function (args) {
            clearTimeout(clearTimeout1);
            clearTimeout1 = setTimeout(function () {
                pausePlay.annotations[0].content = '<img src="src/progress-bar/images/' + (pausePlay.theme).toLowerCase() + '-Play.svg"></img>';
                pausePlay.dataBind();
            }, 2000);
        },
        annotations: [
            {
                content: "<img src=\"src/progress-bar/images/material-pause.svg\"></img>",
            },
        ]
    });
    pausePlay.appendTo('#pause-container');
    var downloadProgress = new ej.progressbar.ProgressBar({
        type: 'Circular',
        value: 100,
        width: '160px',
        height: '160px',
        enableRtl: false,
        load: progressLoad,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        progressCompleted: function (args) {
            clearTimeout(clearTimeout2);
            clearTimeout2 = setTimeout(function () {
                downloadProgress.annotations[0].content = '<img src="src/progress-bar/images/' + (downloadProgress.theme).toLowerCase() + '-Tick.svg"></img>';
                downloadProgress.dataBind();
            }, 2000);
        },
        annotations: [
            {
                content: "<img src=\"src/progress-bar/images/material-Download.svg\"></img>",
            },
        ]
    });
    downloadProgress.appendTo('#download-container');
    var annotate = new ej.progressbar.ProgressBar({
        type: 'Circular',
        value: 80,
        width: '160px',
        height: '160px',
        cornerRadius: 'Round',
        startAngle: 180,
        endAngle: 180,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        annotations: [
            {
                content: '<div id="point1" style="font-size:20px;font-weight:bold;color:#b52123;fill:#b52123"><span>80%</span></div>',
            }
        ],
        load: progressLoad
    });
    annotate.appendTo('#label-container');
    var replayBtn = document.getElementById('reLoad');
    replayBtn.onclick = function () {
        pausePlay.refresh();
        downloadProgress.refresh();
        annotate.refresh();
    };
};