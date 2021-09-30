this.default = function () {
    var recObject = new ej.schedule.RecurrenceEditor();
    recObject.appendTo('#RecurrenceEditor');
    recObject.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');

    var datas = [
        { rule: 'FREQ=DAILY;INTERVAL=1' },
        { rule: 'FREQ=DAILY;INTERVAL=2;UNTIL=20410606T000000Z' },
        { rule: 'FREQ=DAILY;INTERVAL=2;COUNT=8' },
        { rule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1;UNTIL=20410729T000000Z' },
        { rule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2;INTERVAL=1;UNTIL=20410729T000000Z' },
        { rule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2;INTERVAL=1' },
        { rule: 'FREQ=YEARLY;BYDAY=MO;BYSETPOS=-1;INTERVAL=1;COUNT=5' }];
    var dropDownListObj = new ej.dropdowns.DropDownList({
        index: 2,
        popupHeight: '200px',
        dataSource: datas,
        change: function (e) {
            recObject.setRecurrenceRule(e.value);
        },
        fields: { text: 'rule', value: 'rule' }
    });
    dropDownListObj.appendTo('#RecurrenceList');
};