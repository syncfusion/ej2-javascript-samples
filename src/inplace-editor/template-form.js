this.default = function () {
    var editObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        template: '#textInput',
        value: 'Janat',
        actionBegin: actionTextBegin
    });
    editObj.appendTo('#inplace_editor');
    var dateObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        template: '#dateInput',
        value: '2013-01-08',
        actionBegin: actionDateBegin
    });
    dateObj.appendTo('#inplace_editor_date');
    var selectObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        value: 'Volvo',
        template: '#selectInput',
        actionBegin: actionSelectBegin
    });
    selectObj.appendTo('#inplace_editor_select');
    function actionTextBegin(e) {
        editObj.value = document.getElementById('textInput').value;
    }
    function actionDateBegin(e) {
        dateObj.value = document.getElementById('dateInput').value;
    }
    function actionSelectBegin(e) {
        selectObj.value = document.getElementById('selectInput').value;
    }
};