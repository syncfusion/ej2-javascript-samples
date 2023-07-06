/**
 *  Tab drag and drop sample
 */
var data = [
    { text: 'Dropdown List', id: 'list-01' },
    { text: 'DatePicker', id: 'list-02' },
    { text: 'Calendar', id: 'list-03' },
    { text: 'File Upload', id: 'list-04' },
    { text: 'Rich Text Editor', id: 'list-05' }
];
var rteObj;
var gridObj;
var chartObj;
var scheduleObj;
var draggedItemHeader;
var i = 0;
function renderComponents() {
    var tabObj = new ej.navigations.Tab({
        created: onTabCreate,
        dragArea: '#TabContainer',
        selected: selectedTab,
        onDragStart: onTabDragStart,
        dragged: onDraggedTab,
        allowDragAndDrop: true,
        items: [
            {
                header: { 'text': 'Grid' },
                content: '#Grid'
            },
            {
                header: { 'text': 'Chart' },
                content: '#Chart'
            },
            {
                header: { 'text': 'Schedule' },
                content: '#Schedule'
            }
        ],
    });
    tabObj.appendTo('#draggableTab');
    var treeViewObj = new ej.navigations.TreeView({
        fields: { dataSource: data, id: 'id', text: 'text' },
        allowDragAndDrop: true,
        dragArea: '#TabContainer',
        nodeDragStop: onNodeDragStop,
        nodeDragging: onNodeDrag,
        cssClass: 'treeview-external-drag-tab'
    });
    treeViewObj.appendTo('#ListView');
    function onTabCreate() {
        var tabElement = document.getElementById('draggableTab');
        if (!ej.base.isNullOrUndefined(tabElement)) {
            tabElement.querySelector('.e-tab-header').classList.add('e-droppable');
            tabElement.querySelector('.e-content').classList.add('tab-content');
        }
    }
    function selectedTab(args) {
        if (tabObj.items[args.selectedIndex].header.text === 'Rich Text Editor') {
            rteObj.refreshUI();
        }
        if (tabObj.items[args.selectedIndex].header.text === 'Schedule') {
            scheduleObj.refresh();
        }
        if (tabObj.items[args.selectedIndex].header.text === 'Chart') {
            chartObj.refresh();
        }
    }
    function onTabDragStart(args) {
        draggedItemHeader = tabObj.items[args.index].header.text;
    }
    function onDraggedTab(args) {
        var dragTabIndex = Array.prototype.indexOf.call(tabObj.element.querySelectorAll('.e-toolbar-item'), args.draggedItem);
        var dropNode = args.target.closest('#ListView .e-list-item');
        if (dropNode != null && !args.target.closest('#draggableTab .e-toolbar-item')) {
            args.cancel = true;
            var dropContainer = (document.querySelector('.treeview-external-drag-tab')).querySelectorAll('.e-list-item');
            var dropIndex = Array.prototype.indexOf.call(dropContainer, dropNode);
            var newNode = [{ id: 'list' + i, text: draggedItemHeader }];
            tabObj.removeTab(dragTabIndex);
            treeViewObj.addNodes(newNode, 'Treeview', dropIndex);
        }
    }
    function onNodeDragStop(args) {
        var dropElement = args.target.closest('#draggableTab .e-toolbar-item');
        if (dropElement != null) {
            var tabElement = document.querySelector('#draggableTab');
            var itemPosition = (((args.event.type.indexOf('touch') > -1) ? args.event.changedTouches[0].clientX
                : args.event.clientX) < dropElement.getBoundingClientRect().left + dropElement.offsetWidth / 2) ? 0 : 1;
            var dropItemIndex = [].slice.call(tabElement.querySelectorAll('.e-toolbar-item')).indexOf(dropElement) + itemPosition;
            var content = '';
            switch (args.draggedNodeData.text) {
                case 'Dropdown List':
                    tabContent = ej.base.createElement('input', { id: 'DropdownList' });
                    tabContent.setAttribute('type', 'text');
                    tabContent.setAttribute('tabindex', '1');
                    content = tabContent.id;
                    document.querySelector('#external').appendChild(tabContent);
                    renderDropdownList();
                    break;
                case 'DatePicker':
                    tabContent = ej.base.createElement('input', { id: 'DatePicker' });
                    tabContent.setAttribute('type', 'text');
                    content = tabContent.id;
                    document.querySelector('#external').appendChild(tabContent);
                    renderDatePicker();
                    break;
                case 'Calendar':
                    tabContent = ej.base.createElement('div', { id: 'Calendar' });
                    content = tabContent.id;
                    document.querySelector('#external').appendChild(tabContent);
                    renderCalendar();
                    break;
                case 'File Upload':
                    tabContent = ej.base.createElement('input', { id: 'FileUpload' });
                    tabContent.setAttribute('type', 'file');
                    tabContent.setAttribute('name', 'UploadFiles');
                    content = tabContent.id;
                    document.querySelector('#external').appendChild(tabContent);
                    renderUploader();
                    break;
                case 'Rich Text Editor':
                    tabContent = ej.base.createElement('div', { id: 'RichTextEditor' });
                    var rteContent = document.querySelector('#rte').cloneNode(true);
                    if(!ej.base.isNullOrUndefined(rteContent)) {
                        tabContent.appendChild(rteContent);
                    }
                    content = tabContent.id;                 
                    document.querySelector('#external').appendChild(tabContent);
                    renderRichTextEditor();
                    break;
                case 'Grid':
                    tabContent = ej.base.createElement('div', { id: 'Grid' });
                    document.querySelector('#external').appendChild(tabContent);
                    content = tabContent.id;
                    renderGrid();
                    document.querySelector('#Grid').classList.add('Grid');
                    break;
                case 'Chart':
                    tabContent = ej.base.createElement('div', { id: 'Chart' });
                    document.querySelector('#external').appendChild(tabContent);
                    content = tabContent.id;
                    renderChart();
                    document.querySelector('#Chart').classList.add('Chart');
                    break;
                case 'Schedule':
                    tabContent = ej.base.createElement('div', { id: 'Schedule' });
                    document.querySelector('#external').appendChild(tabContent);
                    content = tabContent.id;
                    renderSchedule();
                    break;
            }
            var newTabItem = [{ header: { 'text': args.draggedNodeData.text.toString() }, content: document.querySelector('.' + content) }];
            tabObj.addTab(newTabItem, dropItemIndex);
            treeViewObj.removeNodes([args.draggedNode]);
        }
        args.cancel = true;
    }
    function onNodeDrag(args) {
        if (!ej.base.isNullOrUndefined(args.target.closest('.tab-content'))) {
            args.dropIndicator = 'e-no-drop';
        }
        else if (!ej.base.isNullOrUndefined(args.target.closest('#draggableTab .e-tab-header'))) {
            args.dropIndicator = 'e-drop-in';
        }
    }
}
function renderGrid() {
    var gridData = [
        {
            OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
            ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
            ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
        },
        {
            OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
            ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
            ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
        },
        {
            OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
            ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
            ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
        },
        {
            OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
            ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
            ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
        },
        {
            OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 2, OrderDate: new Date(8368506e5),
            ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
            ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
        }
    ];
    grid = new ej.grids.Grid({
        dataSource: gridData,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
        ]
    });
    grid.appendTo('#Grid');
}
function renderChart() {
    var chartData = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    chartObj = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category'
        },
        series: [{
                dataSource: chartData,
                xName: 'month',
                yName: 'sales',
                type: 'Line'
            }]
    });
    chartObj.appendTo('#Chart');
}
function renderSchedule() {
    var dataManager = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/schedule',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    });
    scheduleObj = new ej.schedule.Schedule({
        height: 350,
        cssClass: 'Schedule',
        selectedDate: new Date(2020, 9, 20),
        readonly: true,
        eventSettings: { dataSource: dataManager }
    });
    scheduleObj.appendTo('#Schedule');
}
function renderDropdownList() {
    var sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    var dropDownListObj = new ej.dropdowns.DropDownList({
        width: 200,
        placeholder: 'Select a game',
        cssClass: 'DropdownList',
        dataSource: sportsData
    });
    dropDownListObj.appendTo('#DropdownList');
}
function renderDatePicker() {
    var datepickerObj = new ej.calendars.DatePicker({
        cssClass: 'DatePicker',
        placeholder: 'Enter date',
        width: 200
    });
    datepickerObj.appendTo('#DatePicker');
}
function renderCalendar() {
    var calendarObj = new ej.calendars.Calendar({
        cssClass: 'Calendar',
    });
    calendarObj.appendTo('#Calendar');
}
function renderUploader() {
    var uploadObj = new ej.inputs.Uploader({
        cssClass: 'FileUpload',
        autoUpload: false
    });
    uploadObj.appendTo('#FileUpload');
}
function renderRichTextEditor() {
    rteObj = new ej.richtexteditor.RichTextEditor({
        cssClass: 'RichTextEditor',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase']
        }
    });
    rteObj.appendTo('#RichTextEditor');
}
this.default = function () {
    renderGrid();
    renderChart();
    renderSchedule();
    renderComponents();
};