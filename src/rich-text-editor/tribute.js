this.default = function() {
    var element = document.createElement("script");
    element.src = "https://cdnjs.cloudflare.com/ajax/libs/tributejs/3.7.3/tribute.min.js";
    document.head.appendChild(element);
    element.onload = function() {
        defaultRTE = new ej.richtexteditor.RichTextEditor({
            placeholder: 'Type @ to get the employee list with their email IDs.',
            actionBegin: actionBeginEvent
        });
        defaultRTE.appendTo('#AtRTE');

        function actionBeginEvent(args) {
            if (args.requestType === 'EnterAction') {
                args.cancel = true;
            }
        }

        var tribute = new Tribute({
            values: [
                { key: 'Phil Heartman', value: 'pheartman' },
                { key: 'Gordon Ramsey', value: 'gramsey' },
                { key: 'Jordan Humphreys', value: 'jhumphreys' },
                { key: 'Howard Johnson', value: 'hjohnson' }
            ]
        });
        tribute.attach(defaultRTE.inputElement);
    };
};