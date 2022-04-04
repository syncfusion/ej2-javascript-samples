this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data },
    });
    scheduleObj.appendTo('#Schedule');

    var checkBoxObj = new ej.buttons.CheckBox({
        labelPosition: "Before",
        label: "Print with options",
        change: onChange
    });
    checkBoxObj.appendTo('#checked');

    var printHeightAndWidthData = ['auto', '100%', '500px'];

    var heightObj = new ej.dropdowns.DropDownList({
        width: "100%",
        placeholder: "Height",
        floatLabelType: "Always",
        dataSource: printHeightAndWidthData,
        popupHeight: '200px',
        value: 'auto'
    });
    heightObj.appendTo('#heightElement');

    var widthObj = new ej.dropdowns.DropDownList({
        width: "100%",
        placeholder: "Width",
        floatLabelType: "Always",
        dataSource: printHeightAndWidthData,
        popupHeight: '200px',
        value: 'auto'
    });
    widthObj.appendTo('#widthElement');

    var selectedDateObj = new ej.calendars.DatePicker({
        width: "100%",
        placeholder: "Selected date",
        floatLabelType: "Always",
        value: new Date(2021, 0, 10)
    });
    selectedDateObj.appendTo('#selectedDateElement');

    var printButton = new ej.buttons.Button({
        iconCss: 'e-icons e-print',
        cssClass: 'e-print-btn'
    });
    printButton.appendTo('#print-btn');

    function onChange(args) {
        var classList = ['.e-height-row', '.e-width-row', '.e-selected-date-row'];
        for (var i = 0; i < classList.length; i++) {
            var element = document.querySelector(classList[i]);
            if (args.checked) {
                element.classList.remove('e-hide-row');
            } else {
                element.classList.add('e-hide-row');
            }
        }
    }

    document.getElementById('print-btn').onclick = function () {
        if (checkBoxObj.checked) {
            var printOptions = {
                height: heightObj.value,
                width: widthObj.value,
                selectedDate: selectedDateObj.value
            };
            scheduleObj.print(printOptions);
        } else {
            scheduleObj.print();
        }
    };
};