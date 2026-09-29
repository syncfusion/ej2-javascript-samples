this.default = function () {
    var tabObj = new ej.navigations.Tab({
        items: [
            {
                header: {
                    text: 'Summary',
                    iconCss: 'e-icons e-description'
                },
                content: '<div id="rte-container"></div>'
            },
            {
                header: {
                    text: 'Remedies',
                    iconCss: 'e-icons e-description'
                },
                content: '<div style="padding:16px">Remedies Content</div>'
            },
            {
                header: {
                    text: 'Notes',
                    iconCss: 'e-icons e-description'
                },
                content: '<div style="padding:16px">Notes Content</div>'
            }
        ],
        created: function () {
            initializeRTE();
        }
    });

    tabObj.appendTo('#tab-default');

    function initializeRTE() {

        var rteElement = document.getElementById('rte-container');

        if (!rteElement || rteElement.classList.contains('e-richtexteditor')) {
            return;
        }

        var editor = new ej.richtexteditorui.RichTextEditorUI({
            placeholder: 'Type something'
        });

        editor.appendTo('#rte-container');
    }
};