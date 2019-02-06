this.default = function () {
    var multiData = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
    var titleObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        emptyText: 'Enter your question title',
        name: 'Title',
        value: 'Succinctly E-Book about TypeScript',
        validationRules: {
            Title: { required: [true, 'Enter valid title'] },
        },
        model: {
            placeholder: 'Enter your question title'
        }
    });
    titleObj.appendTo('#inplace_title_editor');
    var tagObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        value: ['TypeScript', 'JavaScript'],
        type: 'MultiSelect', emptyText: 'Enter your tags',
        actionSuccess: function (e) {
            e.value = chipCreation(e.value.split(','));
        }, name: 'Tag',
        popupSettings: { model: { width: 'auto' } },
        validationRules: {
            Tag: { required: [true, 'Enter valid tags'] },
        },
        model: {
            dataSource: multiData,
            placeholder: 'Enter your tags'
        }
    });
    tagObj.appendTo('#inplace_tag_editor');
    var rteObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        editableOn: 'EditIconClick',
        submitOnEnter: false, type: 'RTE',
        popupSettings: {
            model: {
                width: (document.querySelector('#inplace-editor-control.form-layout ')).offsetWidth
            }
        },
        value: 'The extensive adoption of JavaScript for application development, and the ability to use HTML and JavaScript to create Windows Store apps, has made JavaScript a vital part of the Windows development ecosystem. Microsoft has done extensive work to make JavaScript easier to use.',
        name: 'rte',
        validationRules: {
            rte: { required: [true, 'Enter valid comments'] }
        },
        emptyText: 'Enter your comment',
        model: {
            toolbarSettings: {
                enableFloating: false,
                items: ['Bold', 'Italic', 'Underline', 'FontColor', 'BackgroundColor',
                    'LowerCase', 'UpperCase', '|', 'OrderedList', 'UnorderedList']
            }
        }
    });
    rteObj.appendTo('#inplace_comment_editor');

    chipOnCreate();
    function chipOnCreate() {
        tagObj.element.querySelector('.e-editable-value').innerHTML = chipCreation(tagObj.value);
    }
    function chipCreation(data) {
        var value = '<div class="e-chip-list">';
        [].slice.call(data).forEach(function (val) {
            value += '<div class="e-chip"> <span class="e-chip-text"> ' + val + '</span></div>';
        });
        value += '</div>';
        return value;
    }
    var editorMode = new ej.dropdowns.DropDownList({
        width: '90%',
        change: changeEditorMode
    });
    editorMode.appendTo('#editorMode_form');
    function changeEditorMode(e) {
        var mode = e.itemData.value;
        titleObj.mode = mode;
        titleObj.dataBind();
        tagObj.mode = mode;
        tagObj.dataBind();
        rteObj.mode = mode;
        rteObj.dataBind();
    }
    var editpane = document.getElementById('right-pane');
    if (editpane) {
        editpane.onscroll = function () {
            if (editorMode.value === 'Inline') { return; }
            if (titleObj && (titleObj.element.querySelectorAll('.e-editable-open').length > 0)) {
                titleObj.enableEditMode = false;
            }
            if (tagObj && (tagObj.element.querySelectorAll('.e-editable-open').length > 0)) {
                tagObj.enableEditMode = false;
            }
            if (rteObj && (rteObj.element.querySelectorAll('.e-editable-open').length > 0)) {
                rteObj.enableEditMode = false;
            }
        };
    }
};