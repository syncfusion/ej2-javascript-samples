this.default = function () {
    var urlapi = new ej.data.DataManager({
        url: "https://services.syncfusion.com/js/production/api/UrlDataSource",
        adaptor: new ej.data.UrlAdaptor()
    });
    var grid = new ej.grids.Grid({
        dataSource: urlapi,
        query: new ej.data.Query().addParams('dataCount', '1000'),
        allowSelection: true,
        allowFiltering: true,
        allowSorting: true,
        enableVirtualization: true,
        loadingIndicator: { indicatorType: 'Shimmer' },
        filterSettings: { type: 'Menu' },
        selectionSettings: { persistSelection: true, type: "Multiple", checkboxOnly: true },
        enableHover: false,
        height: 400,
        rowHeight: 38,
        columns: [
            { type: "checkbox", field: "", allowFiltering: false, allowSorting: false, width: '60' },
            { field: 'EmployeeID', visible: false, headerText: 'Employee ID', isPrimaryKey: true, width: '130' },
            {
                field: 'Employees', headerText: 'Employee Name', width: '200', clipMode: 'EllipsisWithTooltip',
                template: '#empTemplate'
            },
            { field: 'Designation', headerText: 'Designation', width: '170', clipMode: 'EllipsisWithTooltip' },
            { field: 'Mail', headerText: 'Mail', width: '230' },
            {
                field: 'Location', width: '140', headerText: 'Location',
                template: '#coltemplate'
            },
            { field: 'Status', headerText: 'Status', width: '150', template: "#statusTemplate" },
            { field: 'Trustworthiness', headerText: 'Trustworthiness', width: '200', template: "#trustTemplate" },
            { field: 'Rating', headerText: 'Rating', width: '160', template: '#ratingTemplate' },
            { field: 'Software', allowFiltering: false, allowSorting: false, headerText: 'Software Proficiency', width: '180', template: '#progessTemplate' },
            { field: 'CurrentSalary', headerText: 'Current Salary', format: "C2", textAlign: 'Right', width: '160' },
            { field: 'Address', headerText: 'Address', width: '240', clipMode: 'EllipsisWithTooltip' },
        ],
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
    window.empDetails = function (e) {
        var div = document.createElement('div');
        var empImg = document.createElement('div');
        empImg.className = 'empimg';
        var span = document.createElement('span');
        span.className = 'e-userimg';
        if (e.EmployeeImg === 'usermale') {
            span.classList.add('sf-icon-Male');
        } else {
            span.classList.add('sf-icon-FeMale');
        }
        empImg.appendChild(span);
        var Emptext = document.createElement('span');
        Emptext.id = 'Emptext';
        Emptext.textContent = e.Employees;
        div.appendChild(empImg);
        div.appendChild(Emptext);
        return div.outerHTML;
    };
    window.ratingDetail = function (e) {
        var temp = document.getElementsByTagName("template")[0];
        var cloneTemplate = temp.content.cloneNode(true);
        var ratingElement = cloneTemplate.querySelector(".rating");
        var rating = new ej.inputs.Rating({
            value: e.Rating,
            readOnly: true,
            cssClass: 'custom-rating'
        });
        rating.appendTo(ratingElement);
        return ratingElement.ej2_instances[0].wrapper.outerHTML;
    };
    window.statusDetail = function(e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        if (e.Status === 'Active') {
            span.className = 'statustxt e-activecolor';
            span.textContent = 'Active';
            div.className = 'statustemp e-activecolor';
        } else {
            span.className = 'statustxt e-inactivecolor';
            span.textContent = 'Inactive';
            div.className = 'statustemp e-inactivecolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };
    window.progessDetail = function (e) {
        var myProgress = document.createElement('div');
        myProgress.id = 'myProgress';
        myProgress.className = 'pbar';
        var myBar = document.createElement('div');
        myBar.id = 'myBar';
        myBar.className = 'bar';
        if (e.Status === 'Inactive') {
            myBar.classList.add('progressdisable');
        }
        if (e.Software <= 20) {
            e.Software = e.Software + 30;
        }
        myBar.style.width = e[e.column.field] + '%';
        var pbarlabel = document.createElement('div');
        pbarlabel.id = 'pbarlabel';
        pbarlabel.className = 'barlabel';
        pbarlabel.textContent = e.Software + '%';
        myBar.appendChild(pbarlabel);
        myProgress.appendChild(myBar);
        return myProgress.outerHTML;
    };
    function startTimer(args) {
        clearTimeout(clrIntervalFun);
        clearInterval(intervalFun);
        dtTime = true;
    }
    function valueChange() {
        listObj.closePopup();
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
            if (grid.query.params.length > 1) {
                for (var i = 0; i < grid.query.params.length; i++) {
                    if (grid.query.params[i].key === 'dataCount') {
                        grid.query.params[i].value = index.toString();
                        break;
                    }
                }
            }
            else {
                grid.query.params[0].value = index.toString();
            }
            grid.setProperties({ dataSource: urlapi });
        }, 100);
    }
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
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
    });
    observer.observe(document.getElementById('Grid'), {
        attributes: true,
        childList: true,
        subtree: true,
    });
};
