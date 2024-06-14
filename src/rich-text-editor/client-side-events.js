/*jshint esversion: 6 */
/**
 * Rich Text Editor client side events samples
 */
this.default = function() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'FileManager', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', 'Print', '|',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
        fileManagerSettings: {
            enable: true,
            path: '/Pictures/Food',
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
        },
        created: create,
        actionBegin: actionBegin,
        actionComplete: actionComplete,
        focus: focus,
        blur: blur,
        change: change,
        toolbarClick: toolbarClick,
        beforeDialogOpen: beforeDialogOpen,
        dialogOpen: dialogOpen,
        dialogClose: dialogClose,
        beforeQuickToolbarOpen: beforeQuickToolbarOpen,
        quickToolbarOpen: quickToolbarOpen,
        quickToolbarClose: quickToolbarClose,
        imageSelected: imageSelected,
        imageUploading: imageUploading,
        imageUploadSuccess: imageUploadSuccess,
        imageUploadFailed: imageUploadFailed,
        imageRemoving: imageRemoving,
        destroyed: destroyed,
        beforeSanitizeHtml: beforeSanitizeHtml,
        resizing: resizing,
        resizeStart: resizeStart,
        resizeStop: resizeStop
    });
    defaultRTE.appendTo('#defaultRTE');
    var clear = new ej.buttons.Button({});
    clear.appendTo('#clear');
    document.getElementById('clear').onclick = function() {
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
        appendElement('RichTextEditor <b>change</b> event called<hr>');
    }

    function toolbarClick() {
        appendElement('RichTextEditor <b>toolbar click</b> event called<hr>');
    }

    function beforeDialogOpen() {
        appendElement('RichTextEditor <b>beforeDialogOpen</b> event called<hr>');
    }

    function dialogOpen() {
        appendElement('RichTextEditor <b>dialogOpen</b> event called<hr>');
    }

    function dialogClose() {
        appendElement('RichTextEditor <b>dialogClose</b> event called<hr>');
    }

    function beforeQuickToolbarOpen() {
        appendElement('RichTextEditor <b>beforeQuickToolbarOpen</b> event called<hr>');
    }

    function quickToolbarOpen() {
        appendElement('RichTextEditor <b>quickToolbarOpen</b> event called<hr>');
    }

    function quickToolbarClose() {
        appendElement('RichTextEditor <b>quickToolbarClose</b> event called<hr>');
    }

    function imageSelected() {
        appendElement('RichTextEditor <b>imageSelected</b> event called<hr>');
    }

    function imageUploading() {
        appendElement('RichTextEditor <b>imageUploading</b> event called<hr>');
    }

    function imageUploadSuccess() {
        appendElement('RichTextEditor <b>imageUploadSuccess</b> event called<hr>');
    }

    function imageUploadFailed() {
        appendElement('RichTextEditor <b>imageUploadFailed</b> event called<hr>');
    }

    function imageRemoving() {
        appendElement('RichTextEditor <b>imageRemoving</b> event called<hr>');
    }

    function destroyed() {
        appendElement('RichTextEditor <b>destroyed</b> event called<hr>');
    }

    function beforeSanitizeHtml() {
        appendElement('RichTextEditor <b>beforeSanitizeHtml</b> event called<hr>');
    }

    function resizing() {
        appendElement('RichTextEditor <b>resizing</b> event called<hr>');
    }

    function resizeStart() {
        appendElement('RichTextEditor <b>resizeStart</b> event called<hr>');
    }

    function resizeStop() {
        appendElement('RichTextEditor <b>resizeStop</b> event called<hr>');
    }

    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }

    function handleFullScreen(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (ej.base.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        } else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (ej.base.Browser.isDevice && ej.base.Browser.isIos) {
                ej.base.addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.addClass([leftBar], ['e-close']);
            ej.base.removeClass([leftBar], ['e-open']);
            if (!ej.base.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        } else if (e.targetItem === 'Minimize') {
            if (ej.base.Browser.isDevice && ej.base.Browser.isIos) {
                ej.base.removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.removeClass([leftBar], ['e-close']);
            if (!ej.base.Browser.isDevice) {
                ej.base.addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }

    function actionCompleteHandler() {
        setTimeout(function() { defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
};