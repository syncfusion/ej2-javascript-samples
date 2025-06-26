this.default = function() {

    var overviewBlockEditor = new ej.blockeditor.BlockEditor({
        blocks: window.blockDataOverview,
    });
    
    overviewBlockEditor.appendTo('#block-editor');
};
