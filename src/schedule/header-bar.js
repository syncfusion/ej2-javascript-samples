this.default = function () {
    var data = new ej.base.extend([], window.employeeEventData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2018, 1, 15),
        views: ['Month'],
        currentView: 'Month',
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        },
        actionBegin: function (args) {
            if (args.requestType === 'toolbarItemRendering') {
                var userIconItem = {
                    align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
                };
                args.items.push(userIconItem);
            }
        },
        actionComplete: function (args) {
            if (args.requestType === 'toolBarItemRendered') {
                var userIconEle = scheduleObj.element.querySelector('.e-schedule-user-icon');
                userIconEle.onclick = function () {
                    profilePopup.relateTo = userIconEle;
                    profilePopup.dataBind();
                    if (profilePopup.element.classList.contains('e-popup-close')) {
                        profilePopup.show();
                    } else {
                        profilePopup.hide();
                    }
                };
            }
        }
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

    var userIconEle = scheduleObj.element.querySelector('.e-schedule-user-icon');
    var getDOMString = new ej.base.compile('<div class="profile-container"><div class="profile-image">' +
    '</div><div class="content-wrap"><div class="name">Nancy</div>' +
    '<div class="destination">Product Manager</div><div class="status">' +
    '<div class="status-icon"></div>Online</div></div></div>');
    var output = getDOMString({});
    var profilePopup = new ej.popups.Popup(userContentEle, {
        content: output[0],
        relateTo: userIconEle,
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' },
        targetType: 'relative',
        viewPortElement: scheduleObj.element,
        width: 185,
        height: 80
    });
    profilePopup.hide();
};