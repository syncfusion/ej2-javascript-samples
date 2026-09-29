this.default = function () {
    var formRenderer = new ej.formbuilder.FormBuilder({
        schema: {
            "properties": {
            },
            "layout": [
            ],
            "settings": {
                "name": "Untitled Form",
                "width": "100%"
            }
        }
    });
    formRenderer.appendTo('#form-builder-control');
};