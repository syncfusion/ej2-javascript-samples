/*jshint esversion: 6 */
/**
 * RichTextEditor client side samples
 */
this.default = function() {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
        created: create,
        actionBegin: actionBegin,
        actionComplete: actionComplete,
        focus: focus,
        blur: blur,
        change: change,
        toolbarClick: toolbarClick
    });
    defaultRTE.appendTo('#defaultRTE');
    var clear = new ej.buttons.Button({});
    clear.appendTo('#clear');
    document.getElementById('clear').onclick = function () {
        document.getElementById('EventLog').innerHTML = '';
    };
    function create() {
        appendElement('RichTextEditor <b>create</b> event called<hr>');
    }
    function actionBegin(args) {
        appendElement('<b>' + args.requestType + '</b> action is called<hr>');
        handleFullScreen(args);
    }
    function actionComplete(args) {
        appendElement('<b>' + args.requestType + '</b> action is completed<hr>');
        actionCompleteHandler();
    }
    function focus() {
        appendElement('RichTextEditor <b>focus</b> event called<hr>');
    }
    function blur() {
        appendElement('RichTextEditor <b>blur</b> event called<hr>');
    }
    function change() {
        appendElement('RidhTextEditor <b>change</b> event called<hr>');
    }
    function toolbarClick() {
        appendElement('RidhTextEditor <b>toolbar click</b> event called<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
    function handleFullScreen(e) {
        var leftBar;
        var transformElement;
        if (ej.base.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            ej.base.addClass([leftBar], ['e-close']);
            ej.base.removeClass([leftBar], ['e-open']);
            if (!ej.base.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            ej.base.removeClass([leftBar], ['e-close']);
            if (!ej.base.Browser.isDevice) {
                ej.base.addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    function actionCompleteHandler() {
        setTimeout(function () { defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
};
    