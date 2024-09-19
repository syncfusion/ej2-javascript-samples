this.default = function () {
    let cardContent1 = "Title: Discussion on Ticket 429519" +
        "Hi John,\n\n" +
        "We have scheduled the meeting for tomorrow (24th Jan) at 12 PM IST at Mathura Towers and this meeting is scheduled to discuss the issue related to the ticket 429519 only. " +
        "For any other issues, please create a new ticket or update the respective tickets and our technical team will follow up with the details in those tickets.\n\n" +
        "Note: Screen sharing is to see the issue at your end and debug directly, if needed. We request you to contact your IT team and get prior approval/disable firewall settings to share the controls. This will help to minimize the resolution time.\n\n" +
        "Regards,\n\n" +
        "Sabitha";

    let cardContent2 = "Title: Meeting to discuss on Ticket 603027" +
        "Hi Liji,\n\n" +
        "We have scheduled the meeting for today at 3 PM IST in Chennai and this meeting is scheduled to discuss the issue related to the ticket 595353 and 603027 only. " +
        "For any other issues, please create a new ticket or update the respective tickets and our technical team will follow up with the details in those tickets.\n\n" +
        "Regards,\n\n" +
        "Ram";

    let cardContent3 = "Title: Exciting Updates and Demo Invitation from Syncfusion" +
        "You: Hi Alex, I hope you're doing well! I’m reaching out from Syncfusion Software Pvt Ltd. " +
        "We've recently made some exciting updates to our UI components and I'd love to share them with you.\n" +
        "Recipient: Hi Andrew, I'm doing well, thanks! What kind of updates have you made?\n" +
        "You: We've enhanced key components such as the Scheduler, Carousel, Tab, Toolbar, Accordion, and Appbar. " +
        "Additionally, we've improved accessibility to meet WCAG 2.2 standards and enhanced security with XSS prevention. " +
        "These updates aim to provide a more robust and secure experience for our users.\n" +
        "Recipient: That sounds fantastic! I’d be interested in seeing these updates in action.\n" +
        "You: Wonderful! I’d love to schedule a demo to showcase these new features. Are you available for a session on Wednesday, " +
        "August 7th at 11 AM, or Friday, August 9th at 2 PM? The demo will be held at our Morrisville office.\n" +
        "Recipient: Friday, August 9th at 2 PM works for me.\n" +
        "You: Perfect! I’ll send a calendar invite for Friday, August 9th at 2 PM at our Morrisville office.\n" +
        "Recipient: Great, see you then!\n" +
        "You: See you on Friday! Have a great day.";

    let event;

    ej.popups.createSpinner({
        target: document.getElementById('editor_dialog')
    });

    let tabObj = new ej.navigations.Tab({
        items: [
            {
                header: { 'text': 'Meeting Contents' },
                content: '#meeting_contents'
            },
            {
                header: { 'text': 'Schedule' },
                content: '#scheduler'
            }
        ],
        selected: (args) => {
            if (args.selectedIndex === 1) {
                scheduleObj.refresh();
                if (event && event.Subject) {
                    toast.content = `${event.Subject} has been scheduled at ${event.StartTime.toLocaleString()}`;
                    toast.dataBind();
                    toast.show();
                }
            }
        },
        animation: { previous: { effect: 'None' }, next: { effect: 'None' } }
    });
    tabObj.appendTo('#tab');

    const onEventRendered = (args) => {
        if (event && event.Id === args.data.Id) {
            args.element.classList.add('e-appointment-border');
        }
    }

    let events = [];
    ej.schedule.Schedule.Inject(ej.schedule.Day, ej.schedule.Week, ej.schedule.WorkWeek, ej.schedule.Month, ej.schedule.Agenda);
    let scheduleObj = new ej.schedule.Schedule({
        height: '750px',
        selectedDate: new Date(),
        currentView: 'Week',
        eventSettings: {
            dataSource: events
        },
        eventRendered: onEventRendered
    });
    scheduleObj.appendTo('#scheduler');

    function handleButtonClick(content) {
        navigator.clipboard.writeText(content).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
        showDialog();
    }

    let firstCardButton = new ej.buttons.Button({
        content: 'Schedule Appointment',
        iconCss: 'e-icons e-timeline-work-week',
    });
    firstCardButton.appendTo('#first-card-button');

    if (firstCardButton.element) {
        firstCardButton.element.onclick = () => { handleButtonClick(cardContent1); }
    }

    let secondCardButton = new ej.buttons.Button({ content: 'Schedule Appointment', iconCss: 'e-icons e-timeline-work-week' });
    secondCardButton.appendTo('#second-card-button');

    if (secondCardButton.element) {
        secondCardButton.element.onclick = () => { handleButtonClick(cardContent2); }
    }

    let thirdCardButton = new ej.buttons.Button({ content: 'Schedule Appointment', iconCss: 'e-icons e-timeline-work-week' });
    thirdCardButton.appendTo('#third-card-button');

    if (thirdCardButton.element) {
        thirdCardButton.element.onclick = () => { handleButtonClick(cardContent3); }
    }

    function showDialog() {
        dialog.show();
    }

    let dialog = new ej.popups.Dialog({
        header: document.getElementById("dlgHeader"),
        content: document.getElementById("dlgContent"),
        target: document.getElementById("container"),
        showCloseIcon: true,
        isModal: true,
        visible: false,
        width: '500px',
        created: () => {
            document.getElementById('dlgContent').style.visibility = 'visible';
            document.getElementById('dlgHeader').style.visibility = 'visible';
        },
        close: () => {
            document.getElementById('subject').value = '';
            document.getElementById('location').value = '';
            document.getElementById('startTime').value = (() => {
                let d = new Date();
                d.setHours(12, 0, 0, 0);
                let date = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
                let time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                return `${date} ${time}`;
            })();
            document.getElementById('endTime').value = (() => {
                let d = new Date();
                d.setHours(14, 0, 0, 0);
                let date = d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
                let time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                return `${date} ${time}`;
            })();
            document.getElementById('description').value = '';
            document.getElementById('saveButton').disabled = true;
        },
        open: () => {
            ej.popups.showSpinner(document.getElementById('editor_dialog'));
            document.querySelector('.smart-schedule-button').click();
            let intervalId = setInterval(() => {
                let subject = document.getElementById('subject').value;
                if (subject !== '') {
                    clearInterval(intervalId);
                    ej.popups.hideSpinner(document.getElementById('editor_dialog'));
                    document.getElementById('saveButton').disabled = false;
                }
            }, 1000);
        }
    });

    dialog.appendTo('#editor_dialog');
    let startTime = new ej.calendars.DateTimePicker({
        value: (() => { let d = new Date(); d.setHours(12, 0, 0, 0); return d; })(),
        format: 'MM/dd/yyyy HH:mm'
    });
    startTime.appendTo('#startTime');

    let endTime = new ej.calendars.DateTimePicker({
        value: (() => { let d = new Date(); d.setHours(13, 0, 0, 0); return d; })(),
        format: 'MM/dd/yyyy HH:mm'
    });
    endTime.appendTo('#endTime');

    let saveButton = new ej.buttons.Button({ isPrimary: true });
    saveButton.appendTo('#saveButton');

    let cancelButton = new ej.buttons.Button({});
    cancelButton.appendTo('#cancelButton');

    if (cancelButton.element) {
        cancelButton.element.onclick = () => {
            dialog.hide();
        }
    }

    const serverAIRequest = async (options) => {
        let output = '';
        try {
            output = await AzureAIRequest(options);
            output = output.replace('END_RESPONSE', '')
        } catch (error) {
            console.error("Error:", error);
        }
        return output;
    };

    let button = new ej.buttons.SmartPasteButton({
        content: 'Smart Paste',
        iconCss: "e-icons e-paste",
        aiAssistHandler: serverAIRequest
    });

    button.appendTo('#smart-paste');

    function switchTab() {
        tabObj.select(1);
    }

    let toast = new ej.notifications.Toast({
        title: 'Events Added',
        content: '',
        position: { X: 'Right', Y: 'Top' }
    });

    toast.appendTo('#ToastElement');

    document.getElementById('formId')?.addEventListener('submit', function (e) {
        e.preventDefault();
        let subject = document.getElementById('subject').value;
        let location = document.getElementById('location').value;
        let startTime = document.getElementById('startTime').value;
        let endTime = document.getElementById('endTime').value;
        let description = document.getElementById('description').value;
        var newEvent = [];
        var event = {
            Id: events.length + 1,
            Subject: subject,
            Location: location,
            StartTime: new Date(startTime),
            EndTime: new Date(endTime),
            Description: description
        };
        newEvent = [...events];
        newEvent.push(event);
        events = newEvent;
        scheduleObj.selectedDate = new Date(startTime);
        scheduleObj.eventSettings.dataSource = events;
        scheduleObj.dataBind();
        dialog.hide();
        switchTab();
    });
}