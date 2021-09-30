this.default = function () {
    var ownerCollections = [
        { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
        { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
        { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
    ];
    var data = new ej.base.extend([], window.resourceSampleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 5, 6),
        resources: [{
            field: 'OwnerId', title: 'Owners',
            name: 'Owners', allowMultiple: true,
            dataSource: ownerCollections,
            textField: 'OwnerText', idField: 'OwnerId', colorField: 'Color'
        }],
        eventSettings: { dataSource: data }
    });
    scheduleObj.appendTo('#schedule');

    var ownerOneObj = new ej.buttons.CheckBox({ cssClass: 'margaret', value: '1', label: 'Margaret', checked: true, change: onChange });
    ownerOneObj.appendTo('#margaret');
    var ownerTwoObj = new ej.buttons.CheckBox({ cssClass: 'robert', value: '2', label: 'Robert', checked: true, change: onChange });
    ownerTwoObj.appendTo('#robert');
    var ownerThreeObj = new ej.buttons.CheckBox({ cssClass: 'laura', value: '3', label: 'Laura', checked: true, change: onChange });
    ownerThreeObj.appendTo('#laura');

    function onChange() {
        var predicate;
        var checkBoxes = [ownerOneObj, ownerTwoObj, ownerThreeObj];
        checkBoxes.forEach(function (checkBoxObj) {
            if (checkBoxObj.checked) {
                if (predicate) {
                    predicate = predicate.or('OwnerId', 'equal', parseInt(checkBoxObj.value, 10));
                } else {
                    predicate = new ej.data.Predicate('OwnerId', 'equal', parseInt(checkBoxObj.value, 10));
                }
            }
        });
        scheduleObj.eventSettings.query = new ej.data.Query().where(predicate);
    }
};