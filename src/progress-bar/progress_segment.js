this.default = function () {
    var linearProgress = new ej.progressbar.ProgressBar({
        type: 'Linear',
        height: '30',
        width: '70%',
        value: 40,
        segmentCount: ej.base.Browser.isDevice ? 25 : 50,
        gapWidth: 5,
        trackThickness: 15,
        progressThickness: 15,
        cornerRadius:'Square',
        animation: {
            enable: true,
            duration: 2000
        },
        load: function (args) {
            loadProgressBarTheme(args);
        }
    });
    linearProgress.appendTo('#linearSegment');
    var circularProgress = new ej.progressbar.ProgressBar({
        type: 'Circular',
        height: '200px',
        width: '200px',
        trackThickness: 15,
        progressThickness: 15,
        startAngle: 220,
        endAngle: 140,
        segmentCount: 50,
        gapWidth: 5,
        value: 40,
        animation: {
            enable: true,
            duration: 2000
        },
        annotations: [{
                content: '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>'
            }],
        cornerRadius: 'Square',
        load: function (args) {
            var theme = loadProgressBarTheme(args).toLowerCase();
            switch (theme) {
                case 'material':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#e91e63"><span></span></div>';
                    break;
                case 'fabric':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>';
                    break;
                case 'bootstrap':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#317ab9"><span></span></div>';
                    break;
                case 'bootstrap4':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#007bff"><span></span></div>';
                    break;
                case 'tailwind':
                case 'tailwind3':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#4F46E5"><span></span></div>';
                    break;
                case 'bootstrap-dark':
                case 'fabric-dark':
                case 'material-dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#9A9A9A"><span></span></div>';
                    break;
                case 'fluent':
                case 'fluent-dark':
                case 'bootstrap5':
                case 'bootstrap5-dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0D6EFD"><span></span></div>';
                    break;
                case 'tailwind-dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#22D3EE"><span></span></div>';
                    break;
                case 'tailwind3-dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6366F1"><span></span></div>';
                    break;
                case 'material3':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6750A4"><span></span></div>';
                    break;
                case 'material3-dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#D0BCFF"><span></span></div>';
                    break;
                case "fluent2":
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0F6CBD"><span></span></div>';
                    break; 
                case "fluent2-dark":
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#115EA3"><span></span></div>';
                    break; 
                case "fluent2-highcontrast":
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#1AEBFF"><span></span></div>';
                    break; 
                default:
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#FFD939"><span></span></div>';
                    break;
            }
        }
    });
    circularProgress.appendTo('#circularSegment');
    var timer = setInterval(timing, 2500);
    function timing() {
        if (circularProgress.value >= circularProgress.maximum) {
            clearInterval(timer);
        }
        else {
            circularProgress.value += 20;
            linearProgress.value += 20;
        }
    }
};