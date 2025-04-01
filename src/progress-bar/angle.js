this.default = function () {
    function annotationElementContent(color, controlID) {
        var content;
        switch (controlID) {
            case 'angle-container':
                content = '100%';
                break;
            case 'vertical-container':
                content = '100%';
                break;
            case 'vsemi-container':
                content = '100%';
                break;
            case 'semi-container':
                content = '100%';
                break;
        }
        return ('<div id="point1" style="font-size:24px;font-weight:bold;color: ' + color + ' "><span>' + content + '</span></div>');
    }
    var progressLoad = function (args) {
        var angleTheme = loadProgressBarTheme(args).toLowerCase();
        switch (angleTheme) {
            case 'material':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[0], args.progressBar.element.id);
                break;
            case 'fabric':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[1], args.progressBar.element.id);
                break;
            case 'bootstrap':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[2], args.progressBar.element.id);
                break;
            case 'bootstrap4':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[3], args.progressBar.element.id);
                break;
            case 'tailwind':
            case 'tailwind3':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[4], args.progressBar.element.id);
                break;
            case 'bootstrap-dark':
            case 'fabric-dark':
            case 'material-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[6], args.progressBar.element.id);
                break;
            case 'fluent':
            case 'fluent-dark':
            case 'bootstrap5':
            case 'bootstrap5-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[8], args.progressBar.element.id);
                break;
            case 'tailwind-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[7], args.progressBar.element.id);
                break;
            case 'material3':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[9], args.progressBar.element.id);
                break;
            case 'material3-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[10], args.progressBar.element.id);
                break;
            case "fluent2":
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[11], args.progressBar.element.id);
                break;
            case "fluent2-highcontrast":
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[12], args.progressBar.element.id);
                break;
            case "fluent2-dark":
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[13], args.progressBar.element.id);
                break;
            case 'tailwind3-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[14], args.progressBar.element.id);
                break;
            default:
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[5], args.progressBar.element.id);
                break;
        }
    };
    var annotationColors = ['#e91e63', '#0078D6', '#317ab9', '#007bff', '#4F46E5', '#FFD939', '#9A9A9A', '#22D3EE', '#0D6EFD', '#6750A4', '#D0BCFF', '#0F6CBD', '#1AEBFF', '#115EA3', '#6366F1'];
    var button = new ej.buttons.Button();
    button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
    button.appendTo('#reLoad');
    var inverseSemiProgress = new ej.progressbar.ProgressBar({
        type: 'Circular',
        startAngle: 240,
        endAngle: 120,
        minimum: 0,
        width: '160px',
        height: '160px',
        maximum: 100,
        value: 100,
        cornerRadius: 'Round',
        trackThickness: 5,
        progressThickness: 5,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        annotations: [
            {
                content: '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>'
            },
        ],
        load: progressLoad
    });
    inverseSemiProgress.appendTo('#angle-container');
    var verticalProgress = new ej.progressbar.ProgressBar({
        type: 'Circular',
        startAngle: 180,
        endAngle: 0,
        minimum: 0,
        width: '160px',
        height: '160px',
        maximum: 100,
        value: 100,
        cornerRadius: 'Round',
        trackThickness: 5,
        progressThickness: 5,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        annotations: [
            {
                content: '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>'
            },
        ],
        load: progressLoad
    });
    verticalProgress.appendTo('#vertical-container');
    var verticalOppose = new ej.progressbar.ProgressBar({
        type: 'Circular',
        startAngle: 0,
        endAngle: 180,
        minimum: 0,
        width: '160px',
        height: '160px',
        maximum: 100,
        value: 100,
        cornerRadius: 'Round',
        trackThickness: 5,
        progressThickness: 5,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        annotations: [
            {
                content: '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>'
            },
        ],
        load: progressLoad
    });
    verticalOppose.appendTo('#vsemi-container');
    var semiProgress = new ej.progressbar.ProgressBar({
        type: 'Circular',
        startAngle: 270,
        endAngle: 90,
        width: '160px',
        height: '160px',
        minimum: 0,
        maximum: 100,
        value: 100,
        cornerRadius: 'Round',
        trackThickness: 5,
        progressThickness: 5,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
        annotations: [
            {
                content: '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>'
            },
        ],
        load: progressLoad
    });
    semiProgress.appendTo('#semi-container');
    var replayBtn = document.getElementById('reLoad');
    replayBtn.onclick = function () {
        inverseSemiProgress.refresh();
        verticalProgress.refresh();
        verticalOppose.refresh();
        semiProgress.refresh();
    };
};