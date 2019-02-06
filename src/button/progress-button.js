this.default = function() {
    var progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Spin Left', isPrimary: true
    });
    progressButton.appendTo('#spinleft');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Spin Right', spinSettings: { position: 'Right' }, isPrimary: true
    });
    progressButton.appendTo('#spinright');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Spin Top', spinSettings: { position: 'Top' }, isPrimary: true
    });
    progressButton.appendTo('#spintop');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Spin Bottom', spinSettings: { position: 'Bottom' }, isPrimary: true
    });
    progressButton.appendTo('#spinbottom');

    progressButton = new ej.splitbuttons.ProgressButton({
        animationSettings: { effect: 'ZoomOut' }, cssClass: 'e-round e-small e-success',
        iconCss: 'e-btn-sb-icons e-play-icon', spinSettings: { position: 'Center' }
    });
    progressButton.appendTo('#roundbtn');

    var contractProgressButton = new ej.splitbuttons.ProgressButton({
        content: 'Contract', enableProgress: true, cssClass: 'e-success e-small',
        begin: function() {
            contractProgressButton.element.classList.add('e-round');
        },
        end: function() {
            contractProgressButton.element.classList.remove('e-round');
        }
    });
    contractProgressButton.appendTo('#contract');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Slide Left', enableProgress: true, animationSettings: { effect: 'SlideLeft' },
        spinSettings: { position: 'Center' }, cssClass: 'e-flat e-success'
    });
    progressButton.appendTo('#slideleftflat');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Slide Right', enableProgress: true, animationSettings: { effect: 'SlideRight' },
        spinSettings: { position: 'Center' }, cssClass: 'e-outline e-success'
    });
    progressButton.appendTo('#sliderightoutline');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Zoom In', enableProgress: true, animationSettings: { effect: 'ZoomIn' },
        spinSettings: { position: 'Center' }, cssClass: 'e-round-corner e-danger'
    });
    progressButton.appendTo('#zoomin');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Zoom Out', enableProgress: true, animationSettings: { effect: 'ZoomOut' },
        spinSettings: { position: 'Center' }, cssClass: 'e-small e-danger'
    });
    progressButton.appendTo('#zoomout');

    progressButton = new ej.splitbuttons.ProgressButton({
        content: 'Download', duration: 4000, enableProgress: true,
        cssClass: 'e-hide-spinner e-progress-top', iconCss: 'e-btn-sb-icons e-download-icon'
    });
    progressButton.appendTo('#download');

    progressButton = new ej.splitbuttons.ProgressButton({ content: 'Disabled', disabled: true });
    progressButton.appendTo('#disabled');
};