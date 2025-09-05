this.default = function() {
  var overviewBlockEditor = new ej.blockeditor.BlockEditor({
    blocks: window.blockDataOverview,
    users: window.mentionUsers
  });

  overviewBlockEditor.appendTo("#block-editor");
};
