this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        views: [
            { option: 'Week' },
            { option: 'Day' },
            { option: 'Month' },
            { option: 'TimelineDay' },
            { option: 'TimelineWeek' },
            { option: 'TimelineWorkWeek' },
            { option: 'TimelineMonth' },
        ],
        currentView: 'Week',
        selectedDate: new Date(2021, 0, 10),
        allowClipboard: true,
        showQuickInfo: false,
        eventSettings: { dataSource: data },
        destroyed: function () {
            menuObj.destroy();
        },
    });
    scheduleObj.appendTo('#Schedule');

    var selectedTargetEle;
    var targetEle;
    var menuObj;
    var menuItems = [
        { text: 'Cut Event', iconCss: 'e-icons e-cut', id: 'Cut' },
        { text: 'Copy Event', iconCss: 'e-icons e-copy', id: 'Copy' },
        { text: 'Paste Event', iconCss: 'e-icons e-paste', id: 'Paste' }
    ];
    
    menuObj = new ej.navigations.ContextMenu({
        target: '.e-schedule',
        items: menuItems,
        beforeOpen: contextMenuBeforeOpen,
        select: onMenuItemSelect,
        cssClass: 'schedule-clipboard-menu'
    });
    menuObj.appendTo('#ScheduleClipboardMenu');
    
    function contextMenuBeforeOpen(args) {
        var newEventEle = document.querySelector('.e-new-event');
        if (newEventEle) {
            ej.base.remove(newEventEle);
        }
        scheduleObj.closeQuickInfoPopup();
        targetEle = args.event.target;
        if (ej.base.closest(targetEle, '.e-contextmenu')) {
            return;
        }
        selectedTargetEle = ej.base.closest(targetEle, '.e-appointment,.e-work-cells,' +
            '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
        
        if (!selectedTargetEle) {
            args.cancel = true;
            return;
        }
        if (selectedTargetEle.classList.contains('e-appointment')) {
            menuObj.showItems(['Cut', 'Copy'], true);
            menuObj.hideItems(['Paste'], true); 
        } else {
            menuObj.showItems(['Paste'], true);
            menuObj.hideItems(['Cut', 'Copy'], true);
        }
    }
    

    function onMenuItemSelect(args) {
        var selectedMenuItem = args.item.id;
        switch (selectedMenuItem) {
            case 'Cut':
                scheduleObj.cut([selectedTargetEle]);
                break;
            case 'Copy':
                scheduleObj.copy([selectedTargetEle]);
                break;
            case 'Paste':
                scheduleObj.paste(targetEle);
                break;
        }
    }
};
