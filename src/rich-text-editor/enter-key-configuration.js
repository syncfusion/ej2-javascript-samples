/*jshint esversion: 6 */
/**
 * Rich Text Editor Enter Key Configuration sample.
 */
this.default = function () {
    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        value: `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`,
        height: 220,
        saveInterval: 1,
        change: onChange,
        created: onCreate
    });
    defaultRTE.appendTo('#defaultRTE');
 
    function onCreate() {
        onChange();
    }

    function onChange () {
        var id = defaultRTE.getID() + 'mirror-view';
        var codeView = document.getElementById('codeView');
        var mirrorView;
        if (document.getElementById(id)) {
            mirrorView = document.getElementById(id);
            mirrorView.innerHTML = '';
        } else {
            mirrorView = ej.base.createElement('div', { className: 'e-content codeViewContent' });
            mirrorView.id = id;
            codeView.appendChild(mirrorView);
        }
        mirrorView.style.display = 'block';
        if (defaultRTE.value !== null) {
            myCodeMirror = CodeMirror(mirrorView, {
                value: defaultRTE.value,
                mode: 'text/html',
                lineWrapping: true,
                readOnly: true
            });
        }
    }
    
    var enterListObj = new ej.dropdowns.DropDownList({
        placeholder: 'When pressing the enter key',
        floatLabelType: 'Always',
        change: () => {
            if (enterListObj.value === 'DIV') {
                defaultRTE.enterKey = 'DIV';
                defaultRTE.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (enterListObj.value === 'BR') {
                defaultRTE.enterKey = 'BR';
                defaultRTE.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else {
                defaultRTE.enterKey = 'P';
                defaultRTE.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            }
            onChange();
        }
    });
    enterListObj.appendTo('#enterOption');

    var shiftEnterlistObj = new ej.dropdowns.DropDownList({
        placeholder: 'When pressing the shift + enter key',
        floatLabelType: 'Always',
        change: () => {
            if (shiftEnterlistObj.value === 'DIV') {
                defaultRTE.shiftEnterKey = 'DIV';
            } else if (shiftEnterlistObj.value === 'P') {
                defaultRTE.shiftEnterKey = 'P';
            } else {
                defaultRTE.shiftEnterKey = 'BR';
            }
        }
    });
    shiftEnterlistObj.appendTo('#shiftEnterOption');
};