this.default = function() {
    var items = [
        {
            text: 'Paste',
            iconCss: 'e-btn-icons e-paste'
        },
        {
            text: 'Paste Special',
            iconCss: 'e-btn-icons e-paste-special'
        },
        {
            text: 'Paste as Formula',
            iconCss: 'e-btn-icons e-paste-formula'
        },
        {
            text: 'Paste as Hyperlink',
            iconCss: 'e-btn-icons e-paste-hyperlink'
        }
    ];
    var splitButton = new ej.splitbuttons.SplitButton({ items: items, iconCss: 'e-btn-icons e-paste' });
    splitButton.appendTo('#iconsplitbtn');

    splitButton = new ej.splitbuttons.SplitButton({ items: items, content: 'Paste' });
    splitButton.appendTo('#textsplitbtn');

    splitButton = new ej.splitbuttons.SplitButton({ items: items, content: 'Paste', iconCss: 'e-btn-icons e-paste' });
    splitButton.appendTo('#icontextsplitbtn');

    splitButton = new ej.splitbuttons.SplitButton({
        items: items,
        content: 'Paste',
        iconCss: 'e-btn-icons e-paste',
        beforeItemRender: function(args) {
            if (args.item.text !== 'Paste') {
                args.element.classList.add('e-disabled');
            }
        }
    });
    splitButton.appendTo('#disabledsplitbtn');
};
