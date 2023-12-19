this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var onIconClick = function () {
        if (profilePopup.element.classList.contains('e-popup-close')) {
            profilePopup.show();
        } else {
            profilePopup.hide();
        }
    };
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 1, 15),
        views: ['Month'],
        currentView: 'Month',
        eventSettings: { dataSource: data },
        toolbarItems: [{ name: 'Previous', align: 'Left' }, { name: 'Next', align: 'Left' }, { name: 'DateRangeText', align: 'Left' }, { name: 'Today', align: 'Right' }, { align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon', click: onIconClick }],
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        },
        // custom code start
        destroyed: function () {
            document.removeEventListener('keydown', hidePopup);
            document.removeEventListener('click', hidePopup);
        }
        // custom code end
    });
    scheduleObj.appendTo('#Schedule');
    var headerBarCheckObj = new ej.buttons.CheckBox({
        label: 'Show/Hide Header bar', checked: true,
        change: function (args) {
            profilePopup.hide();
            scheduleObj.showHeaderBar = args.checked;
            scheduleObj.dataBind();
        }
    });
    headerBarCheckObj.appendTo('#headerbar');
    var userContentEle = new ej.base.createElement('div', {
        className: 'e-profile-wrapper'
    });
    scheduleObj.element.parentElement.appendChild(userContentEle);

    var getDOMString = new ej.base.compile('<div class="profile-container"><div class="profile-image">' +
        '</div><div class="content-wrap"><div class="name">Nancy</div>' +
        '<div class="destination">Product Manager</div><div class="status">' +
        '<div class="status-icon"></div>Online</div></div></div>');
    var output = getDOMString({});
    var profilePopup = new ej.popups.Popup(userContentEle, {
        content: output[0],
        relateTo: '.e-schedule-user-icon',
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' },
        targetType: 'relative',
        viewPortElement: scheduleObj.element,
        width: 185,
        height: 80
    });
    profilePopup.hide();

    // custom code start
    document.addEventListener('keydown', hidePopup);
    document.addEventListener('click', hidePopup);

    function hidePopup(event) {
        if (profilePopup.element.classList.contains('e-popup-open') && (event.type === 'keydown' && (event.key === 'Escape') ||
            (event.type === 'click' && event.target && !(event.target.closest('.e-schedule-user-icon') ||
                event.target.closest('.e-profile-wrapper'))))) {
            profilePopup.hide();
        }
    }
    // custom code end
};
