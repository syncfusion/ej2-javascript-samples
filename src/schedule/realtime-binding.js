this.default = function () {
    var script = ej.base.createElement('script');
    script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/5.0.9/signalr.min.js');
    script.setAttribute("async", "false");
    var head = document.head;
    head.insertBefore(script, head.firstElementChild);
    script.addEventListener('load', scriptLoaded, false);

    var connection;
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var isHubConnected = false;
    var scheduleObj = new ej.schedule.Schedule({
        height: '550px',
        selectedDate: new Date(2021, 0, 10),
        eventSettings: { dataSource: data },
        navigating: function (args) {
            if (args.action == 'view' && isHubConnected) {
                connection.invoke('SendData', args.action, args.currentView);
            }
        },
        actionComplete: function (args) {
            if (isHubConnected && (args.requestType === 'eventCreated' || args.requestType === 'eventChanged' || args.requestType === 'eventRemoved')) {
                connection.invoke('SendData', args.requestType, scheduleObj.eventSettings.dataSource);
            }
        },
    });
    scheduleObj.appendTo('#Schedule');

    function scriptLoaded() {
        connection = new signalR.HubConnectionBuilder().withUrl("https://ej2.syncfusion.com/aspnetcore/schedulehub/", { withCredentials: false, skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets }).withAutomaticReconnect().build();
        connection.on('ReceiveData', function (action, data) {
            if (action == 'view') {
                scheduleObj.currentView = data;
            }
            if (action === 'eventCreated' || action === 'eventChanged' || action === 'eventRemoved') {
                scheduleObj.eventSettings.dataSource = data;
            }
        });

        connection.start().then(function () { isHubConnected = true; }).catch(function () { isHubConnected = false; });
    }
};
