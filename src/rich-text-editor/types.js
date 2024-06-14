/*jshint esversion: 6 */
/**
 * Rich Text Editor toolbar types sample
 */
this.default = function () {
    var options = {
        toolbarSettings: {
            type: ej.richtexteditor.ToolbarType.Expand,
            enableFloating: true,
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', 'Print', '|',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
        actionBegin: handleFullScreen,
        actionComplete: actionCompleteHandler
    };
    var defaultRTE = new ej.richtexteditor.RichTextEditor(options);
    defaultRTE.appendTo("#defaultRTE");

    var dropdownInstance = new ej.dropdowns.DropDownList({
        placeholder: 'Types',
        floatLabelType: 'Auto',
        change: onChange,
        index: 0
    });
    dropdownInstance.appendTo('#types');
    var float = new ej.buttons.CheckBox({
        // set true for enable the checked state at initial rendering
        checked: true,
        label: 'Enable Floating',
        // bind change event
        change: (args) => {
            defaultRTE.toolbarSettings.enableFloating = args.checked;
            defaultRTE.dataBind();
        }
    });
    float.appendTo('#float');


    function onChange() {
        /*Apply selected format to the component*/
        switch (dropdownInstance.value) {
            case '1':
                defaultRTE.toolbarSettings.type = ej.richtexteditor.ToolbarType.Expand;
                defaultRTE.toolbarSettings.enableFloating = float.checked;
                break;
            case '2':
                defaultRTE.toolbarSettings.type = ej.richtexteditor.ToolbarType.MultiRow;
                defaultRTE.toolbarSettings.enableFloating = float.checked;
                break;
            case '3':
                defaultRTE.toolbarSettings.type = ej.richtexteditor.ToolbarType.Scrollable;
                defaultRTE.toolbarSettings.enableFloating = float.checked;
                break;
        }
        defaultRTE.dataBind();
    }
    function handleFullScreen(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
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
            if (ej.base.Browser.isDevice && ej.base.Browser.isIos) {
                ej.base.addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            ej.base.addClass([leftBar], ['e-close']);
            ej.base.removeClass([leftBar], ['e-open']);
            if (!ej.base.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
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
        setTimeout(function () { defaultRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
};
