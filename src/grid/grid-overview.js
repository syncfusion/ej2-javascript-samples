this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: getTradeData(1000),
        allowSelection: true,
        allowFiltering: true,
        allowSorting: true,
        enableVirtualization: true,
        filterSettings: { type: 'Menu' },
        selectionSettings: { persistSelection: true, type: "Multiple", checkboxOnly: true },
        enableHover: false,
        height: 600,
        rowHeight: 38,
        columns: [
            { type: "checkbox", field: "", allowFiltering: false, allowSorting: false, width: '60' },
            { field: 'EmployeeID', visible: false, headerText: 'Employee ID', isPrimaryKey: true, width: '130' },
            {
                field: 'Employees', headerText: 'Employee Name', width: '200', clipMode: 'EllipsisWithTooltip',
                template: '#empTemplate',
                filter: { type: 'CheckBox' }
            },
            { field: 'Designation', headerText: 'Designation', width: '170', filter: { type: 'CheckBox' }, clipMode: 'EllipsisWithTooltip' },
            { field: 'Mail', headerText: 'Mail', width: '230', filter: { type: 'Menu' } },
            {
                field: 'Location', width: '140', headerText: 'Location', filter: { type: 'CheckBox' },
                template: '#coltemplate'
            },
            { field: 'Status', headerText: 'Status', filter: { type: 'CheckBox', itemTemplate: '#StatusItemTemp' }, width: '150', template: "#statusTemplate" },
            { field: 'Trustworthiness', headerText: 'Trustworthiness', filter: { type: 'CheckBox', itemTemplate: '${ trustTemp(data)}' }, width: '160', template: "#trustTemplate" },
            { field: 'Rating', filter: { type: 'CheckBox', itemTemplate: '<div>${ratingDetail(data)}</div>' }, headerText: 'Rating', width: '160', template: '#ratingTemplate' },
            { field: 'Software', allowFiltering: false, allowSorting: false, headerText: 'Software Proficiency', width: '180', template: '#progessTemplate' },
            { field: 'CurrentSalary', headerText: 'Current Salary', format: "C2", filter: { type: 'Menu' }, textAlign: 'Right', width: '160' },
            { field: 'Address', headerText: 'Address', width: '240', filter: { type: 'Menu' }, clipMode: 'EllipsisWithTooltip' },
        ],
        queryCellInfo: queryCellInfo,
        dataBound: startTimer,
        actionComplete: complete
    });
    var dReady = false;
    var dtTime = false;
    var isDataBound = false;
    var isDataChanged = true;
    var intervalFun;
    var clrIntervalFun;
    var clrIntervalFun1;
    var clrIntervalFun2;
    var ddObj;
    var dropSlectedIndex = null;
    var stTime;
    stTime = performance.now();
    grid.appendTo('#Grid');
    grid.on('data-ready', function () {
        dReady = true;
    });
    var listObj = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select a Data Range',
        popupHeight: '240px',
        width: '220px',
        change: function () { valueChange(); }
    });
    listObj.appendTo('#ddl');

    function complete(args) {
        if (args.requestType === "filterchoicerequest") {
            if (args.filterModel.options.field === "Trustworthiness" || args.filterModel.options.field === "Rating" || args.filterModel.options.field === "Status") {
                var span = args.filterModel.dialogObj.element.querySelectorAll('.e-selectall')[0];
                if(!ej.base.isNullOrUndefined(span)) {
                    ej.base.closest(span, '.e-ftrchk').classList.add("e-hide");
                }
            }
        }
    }
    window.trustTemp = function (e) {
        if (e.Trustworthiness === "Select All") {
            return '';
        }
        return '<img style="width: 31px; height: 24px" src="src/grid/images/' + e.Trustworthiness + '.png" /> <span id="Trusttext">' + e.Trustworthiness + '</span>';
    };
    window.ratingDetail = function (e) {
        var grid = document.querySelector(".e-grid").ej2_instances[0];
        var div = document.createElement('div');
        div.className = 'rating';
        var span;
        if (e.Rating === "Select All") {
            return '';
        }
        for (var i = 0; i < 5; i++) {
            if (i < e.Rating) {
                span = document.createElement('span');
                span.className = 'star checked';
                div.appendChild(span);
            } else {
                span = document.createElement('span');
                span.className = 'star';
                div.appendChild(span);
            }
        }
        return div.outerHTML;
    };
    window.statusDetail = function (e) {
        var grid = document.querySelector(".e-grid").ej2_instances[0];
        var div = document.createElement('div');
        var span;
        if (e.Status === "Select All") {
            return 'Select All';
        }
        span = document.createElement('span');
        if (e.Status === "Active") {
            span.className = 'statustxt e-activecolor';
            span.textContent = "Active";
            div.className = 'statustemp e-activecolor';
        }
        if (e.Status === "InActive") {
            span = document.createElement('span');
            span.className = 'statustxt e-inactivecolor';
            span.textContent = "InActive";
            div.className = 'statustemp e-inactivecolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };
    function queryCellInfo(args) {
        if (args.column.field === 'Employees') {
            if (args.data.EmployeeImg === 'usermale') {
                args.cell.querySelector('.e-userimg').classList.add("sf-icon-Male");
            } else {
                args.cell.querySelector('.e-userimg').classList.add("sf-icon-FeMale");
            }
        }
        if (args.column.field === 'Status') {
            if (args.cell.textContent === "Active") {
                args.cell.querySelector(".statustxt").classList.add("e-activecolor");
                args.cell.querySelector(".statustemp").classList.add("e-activecolor");
            }
            if (args.cell.textContent === "InActive") {
                args.cell.querySelector(".statustxt").classList.add("e-inactivecolor");
                args.cell.querySelector(".statustemp").classList.add("e-inactivecolor");
            }
        }
        if (args.column.field === 'Rating') {
            if (args.column.field === 'Rating') {
                for (var i = 0; i < args.data.Rating; i++) {
                    args.cell.querySelectorAll("span")[i].classList.add("checked");
                }
            }
        }
        if (args.column.field === "Software") {
            if (args.data.Software <= 20) {
                args.data.Software = args.data.Software + 30;
            }
            args.cell.querySelector(".bar").style.width = args.data.Software + "%";
            args.cell.querySelector(".barlabel").textContent = args.data.Software + "%";           
            if (args.data.Status === "InActive") {
                args.cell.querySelector(".bar").classList.add("progressdisable");
            }
        }
    }
    function startTimer(args) {
        clearTimeout(clrIntervalFun);
        clearInterval(intervalFun);
        dtTime = true;
    }
    function getTradeData(dataCount) {
        var check = [true, false];
        var Employees = [
            'Michael', 'Kathryn', 'Tamer', 'Martin', 'Davolio', 'Nancy', 'Fuller', 'Leverling', 'Peacock',
            'Margaret', 'Buchanan', 'Janet', 'Andrew', 'Callahan', 'Laura', 'Dodsworth', 'Anne',
            'Bergs', 'Vinet', 'Anton', 'Fleet', 'Zachery', 'Van', 'King', 'Jack', 'Rose'
        ];
        var Designation = ['Manager', 'CFO', 'Designer', 'Developer', 'Program Directory', 'System Analyst', 'Project Lead'];
        var Mail = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
        var category = ['Energy', 'Financial', 'Technology', 'Industrial'];
        var Location = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];
        var Status = ['Active', 'InActive'];
        var Trustworthiness = ['Perfect', 'Sufficient', 'Insufficient'];
        var tradeData = [];
        var Address = ["59 rue de l'Abbaye", "Luisenstr. 48", "Rua do Paço, 67", "2, rue du Commerce", "Boulevard Tirou, 255",
            "Rua do Paço, 67", "Hauptstr. 31", "Starenweg 5", "Rua do Mercado, 12", "Carrera 22 con Ave. Carlos Soublette #8-35", "Kirchgasse 6",
            "Sierras de Granada 9993", "Mehrheimerstr. 369", "Rua da Panificadora, 12", "2817 Milton Dr.", "Kirchgasse 6", "Åkergatan 24", "24, place Kléber",
            "Torikatu 38", "Berliner Platz 43", "5ª Ave. Los Palos Grandes", "1029 - 12th Ave. S.",
            "Torikatu 38", "P.O. Box 555", "2817 Milton Dr.", "Taucherstraße 10", "59 rue de l'Abbaye", "Via Ludovico il Moro 22",
            "Avda. Azteca 123", "Heerstr. 22", "Berguvsvägen  8", "Magazinweg 7", "Berguvsvägen  8", "Gran Vía, 1", "Gran Vía, 1",
            "Carrera 52 con Ave. Bolívar #65-98 Llano Largo", "Magazinweg 7", "Taucherstraße 10", "Taucherstraße 10",
            "Av. Copacabana, 267", "Strada Provinciale 124", "Fauntleroy Circus", "Av. dos Lusíadas, 23",
            "Rua da Panificadora, 12", "Av. Inês de Castro, 414", "Avda. Azteca 123", "2817 Milton Dr."];
        var EmployeeImg = ['usermale', 'userfemale'];
        if (typeof dataCount === 'string') {
            dataCount = parseInt(dataCount);
        }
        for (var i = 1; i <= dataCount; i++) {
            var code = 10000;
            tradeData.push({
                'check': check[Math.floor(Math.random() * check.length)],
                'EmployeeID': code + i,
                'Employees': Employees[Math.floor(Math.random() * Employees.length)] + ' ' + Employees[Math.floor(Math.random() * Employees.length)],
                'Designation': Designation[Math.floor(Math.random() * Designation.length)],
                'Location': Location[Math.floor(Math.random() * Location.length)],
                'Status': Status[Math.floor(Math.random() * Status.length)],
                'Trustworthiness': Trustworthiness[Math.floor(Math.random() * Trustworthiness.length)],
                'Rating': Math.floor(Math.random() * 5),
                'Software': Math.floor(Math.random() * 100),
                'EmployeeImg': EmployeeImg[Math.floor(Math.random() * EmployeeImg.length)],
                'CurrentSalary': Math.floor((Math.random() * 100000)),
                'Address': Address[Math.floor(Math.random() * Address.length)],
            });
            var emp = tradeData[i - 1].Employees;
            var sName = emp.substr(0, emp.indexOf(' ')).toLowerCase();
            tradeData[i - 1].Mail = sName + (Math.floor(Math.random() * 100) + 10) + '@' + Mail[Math.floor(Math.random() * Mail.length)];
        }
        return tradeData;
    }
    function valueChange() {
        listObj.closePopup();
        grid.showSpinner();
        dropSlectedIndex = null;
        var index = listObj.value;
        clearTimeout(clrIntervalFun2);
        clrIntervalFun2 = setTimeout(function () {
            isDataChanged = true;
            stTime = null;
            var contentElement = grid.contentModule.getPanel().firstChild;
            contentElement.scrollLeft = 0;
            contentElement.scrollTop = 0;
            grid.pageSettings.currentPage = 1;
            stTime = performance.now();
            grid.dataSource = getTradeData(index);
            grid.hideSpinner();
        }, 100);
    }
    document.getElementById('Grid').addEventListener('DOMSubtreeModified', function () {
        if (dReady && stTime && isDataChanged) {
            var msgEle = document.getElementById('msg');          
            var val = (performance.now() - stTime).toFixed(0);
            stTime = null;
            dtTime = false;
            dReady = false;
            isDataChanged = false;
            msgEle.innerHTML = 'Load Time: ' + "<b>" + val + "</b>" + '<b>ms</b>';
            msgEle.classList.remove('e-hide');
        }
    });
};