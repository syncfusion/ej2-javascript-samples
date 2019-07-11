/**
 *  Tab Wizard sample
 */
// tslint:disable:max-line-length
var tabObj;
var availTrainGrid;
var ticketDetailGrid;
var endPoint;
var journeyDate;
var ticketType;
var startPoint;
var alertDlg;
var today = new Date();
var locations;
var selectedTrain;

var quota = [
    { id: '1', text: 'Business Class' },
    { id: '2', text: 'Economy Class' },
    { id: '4', text: 'Common Class' }
];
var gender = [
    { id: '1', text: 'Male' },
    { id: '2', text: 'Female' }
];
var berths = [
    { id: '1', text: 'Upper' },
    { id: '2', text: 'Lower' },
    { id: '3', text: 'Middle' },
    { id: '4', text: 'Window' },
    { id: '5', text: 'Aisle' }
];
var cities = [
    { name: 'Chicago', fare: 300 },
    { name: 'San Francisco', fare: 125 },
    { name: 'Los Angeles', fare: 175 },
    { name: 'Seattle', fare: 250 },
    { name: 'Florida', fare: 150 }
];

function renderComponents() {
    /* Initialize Tab with disabled headers for the wizard */
    tabObj = new ej.navigations.Tab({
        heightAdjustMode: 'None', height: 390, showCloseButton: false,
        selecting: tabSelecting,
        items: [
            { header: { 'text': 'New Booking' }, content: '#booking' },
            { header: { 'text': 'Train List' }, content: '#selectTrain', disabled: true },
            { header: { 'text': 'Add Passenger' }, content: '#details', disabled: true },
            { header: { 'text': 'Make Payment' }, content: '#confirm', disabled: true }
        ]
    });
    tabObj.appendTo('#tab_wizard');
    /* Initialize the components for creating wizard */
    startPoint = new ej.dropdowns.DropDownList({
        width: '100%', dataSource: cities, floatLabelType: 'Auto', placeholder: 'From',
        fields: { text: 'name', value: 'name' }
    });
    startPoint.appendTo('#startPoint');
    endPoint = new ej.dropdowns.DropDownList({
        width: '100%', dataSource: cities, floatLabelType: 'Auto', placeholder: 'To',
        fields: { text: 'name', value: 'name' }
    });
    endPoint.appendTo('#endPoint');
    journeyDate = new ej.calendars.DatePicker({
        width: '100%', floatLabelType: 'Auto', placeholder: 'Journey Date', min: new Date(today.getTime()),
        max: new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000),
        value: new Date(),
    });
    journeyDate.appendTo('#journey_date');
    ticketType = new ej.dropdowns.DropDownList({
        dataSource: quota, placeholder: 'Ticket Type', floatLabelType: 'Auto', fields: { text: 'text', value: 'text' }
    });
    ticketType.appendTo('#ticket_type');
    alertDlg = new ej.popups.Dialog({
        header: 'Success', width: 250, isModal: true, visible: false, showCloseIcon: true,
        content: 'Your payment successfully processed', target: document.getElementById('dialog_target'), created: dlgCreated
    });
    alertDlg.appendTo('#alertDialog');
    alertDlg.hide();
    availTrainGrid = new ej.grids.Grid({
        width: "100%",
        columns: [
            { field: 'TrainNo', headerText: 'Train No', width: 120, type: 'number' },
            { field: 'Name', width: 140, headerText: 'Name' },
            { field: 'Departure', headerText: 'Departure', width: 120 },
            { field: 'Arrival', headerText: 'Arrival', width: 140 },
            { field: 'Availability', headerText: 'Availability', width: 140, type: 'number' }
        ],
        rowSelected: trainSelected
    });
    availTrainGrid.appendTo('#availableTrain');
    var age1 = new ej.inputs.NumericTextBox({ min:1, max: 100, value: 18, format: 'n0', showSpinButton: false });
    age1.appendTo('#pass_age1');
    var age2 = new ej.inputs.NumericTextBox({ min:1, max: 100, value: 18, format: 'n0', showSpinButton: false });
    age2.appendTo('#pass_age2');
    var age3 = new ej.inputs.NumericTextBox({ min:1, max: 100, value: 18, format: 'n0', showSpinButton: false });
    age3.appendTo('#pass_age3');
    var gender1 = new ej.dropdowns.DropDownList({
        dataSource: gender, text: 'Male', fields: { text: 'text', value: 'text' }
    });
    gender1.appendTo('#pass_gender1');
    var gender2 = new ej.dropdowns.DropDownList({
        dataSource: gender, text: 'Male', fields: { text: 'text', value: 'text' }
    });
    gender2.appendTo('#pass_gender2');
    var gender3 = new ej.dropdowns.DropDownList({
        dataSource: gender, text: 'Male', fields: { text: 'text', value: 'text' }
    });
    gender3.appendTo('#pass_gender3');
    var berth1 = new ej.dropdowns.DropDownList({
        dataSource: berths, placeholder: 'Optional', fields: { text: 'text', value: 'text' }
    });
    berth1.appendTo('#pass_berth1');
    var berth2 = new ej.dropdowns.DropDownList({
        dataSource: berths, placeholder: 'Optional', fields: { text: 'text', value: 'text' }
    });
    berth2.appendTo('#pass_berth2');
    var berth3 = new ej.dropdowns.DropDownList({
        dataSource: berths, placeholder: 'Optional', fields: { text: 'text', value: 'text' }
    });
    berth3.appendTo('#pass_berth3');
    ticketDetailGrid = new ej.grids.Grid({
        width: "100%",
        columns: [
            { field: 'TrainNo', headerText: 'Train No', width: 120, type: 'number' },
            { field: 'PassName', width: 140, headerText: 'Name' },
            { field: 'Gender', headerText: 'Gender', width: 120 },
            { field: 'Berth', headerText: 'Berth', width: 140 }
        ],
    });
    ticketDetailGrid.appendTo('#ticketDetailGrid');
    document.getElementById('searchNext').onclick = function (e) { tabNavigations(e); };
    document.getElementById('bookTickets').onclick = function (e) { tabNavigations(e); };
    document.getElementById('confirmTickets').onclick = function (e) { tabNavigations(e); };
    document.getElementById('makePayment').onclick = function (e) { tabNavigations(e); };
    document.getElementById('goToSearch').onclick = function (e) { tabNavigations(e); };
    document.getElementById('goBackToBook').onclick = function (e) { tabNavigations(e); };
    document.getElementById('goBackDetails').onclick = function (e) { tabNavigations(e); };
}
function tabSelecting(e) {
    if (e.isSwiped) {
        e.cancel = true;
    }
}
function dlgCreated() {
    alertDlg.buttons = [{
        buttonModel: { content: 'Ok', isPrimary: true },
        click: function () {
            alertDlg.hide();
            tabObj.enableTab(0, true);
            tabObj.enableTab(1, false);
            tabObj.enableTab(2, false);
            tabObj.enableTab(3, false);
            tabObj.select(0);
        }
    }];
}
function tabNavigations(args) {
    switch (args.target.id) {
        case 'searchNext':
            /* Validate the Source, Destination, Date and Class chosen and proceed only if all the fields are selected */
            if (!ej.base.isNullOrUndefined(startPoint.value) && !ej.base.isNullOrUndefined(endPoint.value) &&
                !ej.base.isNullOrUndefined(ticketType.value) && !ej.base.isNullOrUndefined(journeyDate.value)) {
                if (!ej.base.isNullOrUndefined(startPoint.value) && startPoint.value === endPoint.value) {
                    document.getElementById('err1').innerText = '* Arrival point can\'t be same as Departure';
                }
                else {
                    tabObj.enableTab(1, true);
                    tabObj.enableTab(0, false);
                    filterTrains(args);
                    document.getElementById('err1').innerText = '';
                    document.getElementById('err2').innerText = '';
                }
            }
            else {
                document.getElementById('err1').innerText = '* Please fill all the details before proceeding';
            }
            break;
        case 'bookTickets':
            /* Based on the selected station generate Grid content to display trains available */
            if (availTrainGrid.getSelectedRecords() === undefined || availTrainGrid.getSelectedRecords().length === 0) {
                document.getElementById('err2').innerText = '* Select your convenient train';
            }
            else {
                tabObj.enableTab(2, true);
                tabObj.enableTab(1, false);
                document.getElementById('err2').innerText = '';
            }
            break;
        case 'confirmTickets':
            /* Get the Passenger details and validate the fields must not be left empty */
            var name = document.getElementById('pass_name1');
            var age = document.getElementById('pass_age1');
            var gender = document.getElementById('pass_gender1');
            if (name.value === '' || age.value === '' || gender.value === '') {
                document.getElementById('err3').innerText = '* Please enter passenger details';
            }
            else {
                tabObj.enableTab(3, true);
                tabObj.enableTab(2, false);
                document.getElementById('err3').innerText = '';
                finalizeDetails(args);
            }
            break;
        case 'makePayment':
            alertDlg.show();
            break;
        case 'goToSearch':
            /* Go back to change class, date or boarding places */
            selectedTrain = [];
            tabObj.enableTab(0, true);
            tabObj.select(0);
            tabObj.enableTab(1, false);
            break;
        case 'goBackToBook':
            /* Change the preferred train chosen already */
            tabObj.enableTab(1, true);
            tabObj.select(1);
            tabObj.enableTab(2, false);
            break;
        case 'goBackDetails':
            /* Update passenger detail before confirming the payment */
            tabObj.enableTab(2, true);
            tabObj.select(2);
            tabObj.enableTab(3, false);
            break;
    }
}
function filterTrains(args) {
    /* Generating trains based on source and destination chosen */
    var result = [];
    var fromCity = startPoint.text;
    var toCity = endPoint.text;
    var count = Math.floor((Math.random() * 3) + 2);
    for (var i = 0; i < count; i++) {
        var details = [];
        details.TrainNo = Math.floor((Math.random() * 20) + 19000);
        details.Name = 'Train ' + i;
        details.Departure = fromCity;
        details.Arrival = toCity;
        details.Availability = Math.floor((Math.random() * 20) + 20);
        result.push(details);
    }
    availTrainGrid.dataSource = result;
}
function finalizeDetails(args) {
    /* Get the passenger details and update table with name and other details for confirmation */
    var reserved = [];
    var passCount = 0;
    for (var i = 1; i <= 3; i++) {
        var name = document.getElementById('pass_name' + i);
        var berthSelected = document.getElementById('pass_berth' + i);
        var gender = document.getElementById('pass_gender' + i);
        if (name.value !== '') {
            var details = [];
            var berth = berthSelected.value;
            details.TrainNo = selectedTrain.TrainNo.toString();
            details.PassName = name.value;
            details.Gender = gender.value;
            details.Berth = (berth === '') ? 'Any' : berth;
            reserved.push(details);
            passCount++;
        }
        var calcFare = 0;
        for (var j = 0; j < cities; j++) {
            if (startPoint.value === cities[j].name) {
                calcFare = calcFare + cities[j].fare;
            }
            if (endPoint.value === cities[j].name) {
                calcFare = calcFare + cities[j].fare;
            }
        }
        var displayAmt = document.getElementById('amount');
        if (ticketType.value === 'Economy Class') {
            displayAmt.innerText = 'Total payable amount: $' + passCount * (300 + calcFare);
        }
        else if (ticketType.value === 'Business Class') {
            displayAmt.innerText = 'Total payable amount: $' + passCount * (500 + calcFare);
        }
        else if (ticketType.value === 'Common Class') {
            displayAmt.innerText = 'Total payable amount: $' + passCount * (150 + calcFare);
        }
    }
    ticketDetailGrid.dataSource = reserved;
}
function trainSelected(args) {
    selectedTrain = args.data;
}

this.default = function() {
    renderComponents();
};
// tslint:enable:max-line-length