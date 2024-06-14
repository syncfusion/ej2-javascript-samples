this.default = function () {
    window.getConsultantName = function (value) {
        return value.resourceData[value.resource.textField];
    };

    window.getConsultantImage = function (value) {
        var resourceName = value.resourceData[value.resource.textField];
        if (resourceName === "GENERAL" || resourceName === "DENTAL") {
            return '';
        } else {
            return "<img class='specialist-img' src='src/schedule/images/" + resourceName.toLowerCase() + ".png'  alt='" + resourceName.toLowerCase() + "' />";
        }
    };

    window.getConsultantDesignation = function (value) {
        var resourceName = value.resourceData[value.resource.textField];
        if (resourceName === "GENERAL" || resourceName === "DENTAL") {
            return '';
        } else {
            return value.resourceData.Designation;
        }
    };

    var hospitalData = new ej.base.extend([], window.hospitalData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2021, 7, 2),
        currentView: 'TimelineDay',
        resourceHeaderTemplate: '#resource-template',
        cssClass: 'schedule-drag-drop',
        workHours: {
            start: '08:00',
            end: '18:00'
        },
        views: [
            { option: 'TimelineDay' },
            { option: 'TimelineMonth' }
        ],
        group: {
            enableCompactView: false,
            resources: ['Departments', 'Consultants']
        },
        resources: [
            {
                field: 'DepartmentID', title: 'Department',
                name: 'Departments', allowMultiple: false,
                dataSource: [
                    { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
                    { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
                ],
                textField: 'Text', idField: 'Id', colorField: 'Color'
            },
            {
                field: 'ConsultantID', title: 'Consultant',
                name: 'Consultants', allowMultiple: false,
                dataSource: [
                    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
                    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
                    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
                    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
                    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
                    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
                ],
                textField: 'Text', idField: 'Id', groupIDField: 'GroupId', colorField: 'Color'
            }
        ],
        eventSettings: {
            dataSource: hospitalData,
            fields: {
                subject: { title: 'Patient Name', name: 'Name' },
                startTime: { title: "From", name: "StartTime" },
                endTime: { title: "To", name: "EndTime" },
                description: { title: 'Reason', name: 'Description' }
            }
        },
        actionBegin: onActionBegin
    });
    scheduleObj.appendTo('#Schedule');

    var waitingList = new ej.base.extend([], window.waitingList, null, true);
    var treeObj = new ej.navigations.TreeView({
        fields: { dataSource: waitingList, id: 'Id', text: 'Name' },
        allowDragAndDrop: true,
        nodeDragStop: onTreeDragStop,
        nodeDragging: onTreeDrag,
        nodeDragStart: onTreeDragStart,
        nodeSelecting: onItemSelecting,
        nodeTemplate: '#treeTemplate',
        cssClass: 'treeview-external-drag',
        dragArea: ".content-wrapper"
    });
    treeObj.appendTo('#Tree');

    var isTreeItemDropped = false;
    var draggedItemId = '';

    function onItemSelecting(args) {
        args.cancel = true;
    } 

    function onTreeDrag(event) {
        if (scheduleObj.isAdaptive) {
            var classElement = scheduleObj.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                ej.base.addClass([event.target], 'e-device-hover');
            }
        }
    }

    function onActionBegin(event) {
        if (event.requestType === 'eventCreate' && isTreeItemDropped) {
            var treeViewdata = treeObj.fields.dataSource;
            var filteredPeople = treeViewdata.filter(function (item) { return item.Id !== parseInt(draggedItemId, 10); });
            treeObj.fields.dataSource = filteredPeople;
            var elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
            for (var i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    }

    function onTreeDragStop(event) {
        var treeElement = ej.base.closest(event.target, '.e-treeview');
        var classElement = scheduleObj.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeElement) {
            event.cancel = true;
            var scheduleElement = ej.base.closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                var treeviewData = treeObj.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    var filteredData =
                        treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                    var cellData = scheduleObj.getCellDetails(event.target);
                    var resourceDetails = scheduleObj.getResourcesByIndex(cellData.groupIndex);
                    var eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description,
                        DepartmentID: resourceDetails.resourceData.GroupId,
                        ConsultantID: resourceDetails.resourceData.Id
                    };
                    scheduleObj.openEditor(eventData, 'Add', true);
                    isTreeItemDropped = true;
                    draggedItemId = event.draggedNodeData.id;
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    }
    function onTreeDragStart() {
        document.body.classList.add('e-disble-not-allowed');
    }
};
