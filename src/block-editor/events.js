
this.default = function() {

    var eventsBlockEditor = new ej.blockeditor.BlockEditor({
        blocks: window.blockDataEvents,
        created: created,
        contentChanged: contentChanged,
        selectionChanged: selectionChanged,
        blockAdded: blockAdded,
        blockRemoved: blockRemoved,
        blockMoved: blockMoved,
        blockDrag: blockDrag,
        blockDragStart: blockDragStart,
        blockDrop: blockDrop,
        focus: focusEvent,
        blur: blurEvent,
        beforePaste: beforePasteEvent,
        afterPaste: afterPasteEvent,
        undoRedoPerformed: undoRedoPerformedEvent
    });
    
    eventsBlockEditor.appendTo('#events-blockeditor');

    var clear = new ej.buttons.Button({});
    clear.appendTo('#clear');
    document.getElementById('clear').onclick = function() {
        document.getElementById('eventLog').innerHTML = '';
    };

    function created() {
        appendElement('BlockEditor <b>created</b> event called<hr>');
    }

    function contentChanged() {
        appendElement('BlockEditor <b>contentChanged</b> event called<hr>');
    }

    function selectionChanged() {
        appendElement('BlockEditor <b>selectionChanged</b> event called<hr>');
    }

    function blockAdded() {
        appendElement('BlockEditor <b>blockAdded</b> event called<hr>');
    }

    function blockRemoved() {
        appendElement('BlockEditor <b>blockRemoved</b> event called<hr>');
    }

    function blockMoved() {
        appendElement('BlockEditor <b>blockMoved</b> event called<hr>');
    }

    function blockDrag() {
        appendElement('BlockEditor <b>blockDrag</b> event called<hr>');
    }

    function blockDragStart() {
        appendElement('BlockEditor <b>blockDragStart</b> event called<hr>');
    }

    function blockDrop() {
        appendElement('BlockEditor <b>blockDrop</b> event called<hr>');
    }

    function focusEvent() {
        appendElement('BlockEditor <b>focus</b> event called<hr>');
    }

    function blurEvent() {
        appendElement('BlockEditor <b>blur</b> event called<hr>');
    }

    function beforePasteEvent() {
        appendElement('BlockEditor <b>beforePaste</b> event called<hr>');
    }

    function afterPasteEvent() {
        appendElement('BlockEditor <b>afterPaste</b> event called<hr>');
    }

    function undoRedoPerformedEvent(args) {
        appendElement(`BlockEditor <b>${args.isUndo ? 'Undo' : 'Redo'}</b> action performed<hr>`);
    }

    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('eventLog');
        log.insertBefore(span, log.firstChild);
    }
};
