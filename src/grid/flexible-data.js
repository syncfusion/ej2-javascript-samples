this.default = function () {
    var changedAdaptor = 'ODataV4Adaptor';
    var selectedService = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
    var defaultParam;
    var defaultHeader;
    var header;
    var params;
    var serviceURL = [
        { text: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/', value: 'ODataV4Adaptor' },
        { text: 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Orders/', value: 'ODataAdaptor' },
        { text: 'https://services.syncfusion.com/js/production/api/Orders', value: 'WebApiAdaptor' },
        { text: 'https://services.syncfusion.com/js/production/api/UrlDataSource', value: 'UrlAdaptor' },
        { text: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders', value: 'Custom Binding' }
    ];
    var defaultColumns = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right' },
        { field: 'ShipCity', headerText: 'Ship City', width: 140 },
    ];
    var empColumns = [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 130, textAlign: 'Right' },
        { field: 'Employees', headerText: 'Employee Name', width: 150 },
        { field: 'Designation', headerText: 'Designation', width: 130 },
        { field: 'CurrentSalary', headerText: 'Current Salary', format: "C2", textAlign: 'Right', width: 140 }
    ];
    var serviceDropdown = new ej.dropdowns.DropDownList({
        dataSource: serviceURL,
        popupWidth: 'auto',
        text: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
        fields: { text: 'text', value: 'value' },
        change: function (e) {
            selectedService = e.itemData.text;
            changedAdaptor = e.itemData.value;
            document.getElementById('adaptor_txt').value = changedAdaptor;
            var paramElements = document.querySelectorAll('.params_show_hide');
            var headerElements = document.querySelectorAll('.header_show_hide');
            ej.base.removeClass(paramElements, 'hide_elem');
            ej.base.removeClass(headerElements, 'hide_elem');
            if (changedAdaptor === 'ODataAdaptor') {
                ej.base.addClass(headerElements, 'hide_elem');
            }
            if (changedAdaptor === 'Custom Binding') {
                ej.base.addClass(paramElements, 'hide_elem');
                ej.base.addClass(headerElements, 'hide_elem');
            }
        }
    });
    serviceDropdown.appendTo('#service_drop');
    var adaptorTxtBox = new ej.inputs.TextBox({
        value: 'ODataV4Adaptor',
        readonly: true,
    });
    adaptorTxtBox.appendTo('#adaptor_txt');
    var defaultData = new ej.data.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
        adaptor: new ej.data.ODataV4Adaptor(),
        crossDomain: true
    });
    var grid = new ej.grids.Grid({
        dataSource: defaultData,
        columns: defaultColumns,
        allowPaging: true,
    });
    grid.appendTo('#Grid');
    document.getElementById('payload-detail').innerHTML = "<b><u>Payload Information</u></b><br> Service URL: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/' <br> Adaptor Type: ODataV4Adaptor";
    var pagerCheckbox = new ej.buttons.CheckBox({
        checked: true,
        cssClass: "prop_page",
        label: 'Enable Paging'
    });
    pagerCheckbox.appendTo('#pageCheckbox');
    document.getElementById('additionalParams').addEventListener('click', function () {
        httpAdditionalInfo("paramsKey", "paramsValue", "addParams");
    });
    document.getElementById('headerId').addEventListener('click', function () {
        httpAdditionalInfo("hkey", "hvalue", "hdvalue");
    });
    function createObjectArray(headers) {
        var result = headers.trim().split('\n').map(function (head) { return JSON.parse(head); });
        return result;
    }
    var BASE_URL = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';
    var ajax = new ej.base.Ajax({
        type: 'GET', mode: true,
        onFailure: function (e) { return false; }
    });
    function executeCustomData(state) {
        return getData(state)
            .then(function (result) {
                grid.changeDataSource(result, defaultColumns);
            });
    }

    function getData(state) {
        defaultParam = document.getElementById("addParams").value;
        params = defaultParam ? createObjectArray(defaultParam) : [];
        var pageQuery = "$skip=" + state.skip + "&$top=" + state.take;
        if (document.getElementById("pageCheckbox").ej2_instances[0].checked) {
            ajax.url = BASE_URL + "?" + pageQuery + "&$inlinecount=allpages&$format=json";
        }
        else {
            ajax.url = BASE_URL + "?" + "&$inlinecount=allpages&$format=json";
        }
        ajax.data = Object.assign.apply(Object, [{}].concat(params));
        return ajax.send()
            .then(function (response) {
                var data = JSON.parse(response);
                var result = data.d.results;
                var count = parseInt(data.d.__count, 10);
                return { result: result, count: count };
            });
    }
    changedAdaptor = document.getElementById('service_drop').ej2_instances[0].value;
    document.getElementById('validateSubmit').onclick = function (e) {
        grid.query.params = [];
        grid.query.queries = [];
        var newDataSource;
        var checkboxState = document.getElementById("pageCheckbox").ej2_instances[0].checked;
        var newQuery = new ej.data.Query();
        defaultParam = document.getElementById("addParams").value;
        defaultHeader = document.getElementById('hdvalue').value;
        header = defaultHeader ? createObjectArray(defaultHeader) : [];
        params = defaultParam ? createObjectArray(defaultParam) : [];
        params.forEach(function (obj) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var value = obj[key];
                    newQuery.addParams(key, value);
                    if (changedAdaptor !== 'UrlAdaptor' && changedAdaptor !== 'Custom Binding' && !checkboxState) {
                        if (key == 'skip') {
                            newQuery.skip(value);
                        }
                        if (key == 'take') {
                            newQuery.take(value);
                        }
                    }
                }
            }
        });
        grid.setProperties({ query: newQuery, allowPaging: checkboxState }, true);
        if (changedAdaptor === 'Custom Binding') {
            var state = { skip: 1, take: 12 };
            executeCustomData(state);
            grid.dataStateChange = function (args) {
                executeCustomData(args);
            };
        }
        else {
            var col = changedAdaptor === 'UrlAdaptor' ? empColumns : defaultColumns;
            if (changedAdaptor === 'ODataV4Adaptor') {
                newDataSource = new ej.data.DataManager({
                    url: 'https://services.syncfusion.com/js/production/api/Orders',
                    adaptor: new ej.data.ODataV4Adaptor(),
                    headers: header,
                    crossDomain: true
                });
            }
            else if (changedAdaptor === 'UrlAdaptor') {
                newDataSource = new ej.data.DataManager({
                    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
                    adaptor: new ej.data.UrlAdaptor(),
                    headers: header,
                    crossDomain: true
                });
            }
            else if (changedAdaptor === 'WebApiAdaptor') {
                newDataSource = new ej.data.DataManager({
                    url: 'https://services.syncfusion.com/js/production/api/Orders',
                    adaptor: new ej.data.WebApiAdaptor(),
                    headers: header,
                    crossDomain: true
                });
            }
            else if (changedAdaptor === 'ODataAdaptor') {
                newDataSource = new ej.data.DataManager({
                    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders',
                    adaptor: new ej.data.ODataAdaptor(),
                    crossDomain: true
                });
            }
            grid.changeDataSource(newDataSource, col);
        }
        var payloadInfo;
        if (changedAdaptor === 'Custom Binding') {
            payloadInfo = "<b><u>Payload Information</u></b><br> Custom Binding <br> Service URL: " + selectedService;
        }
        else if (changedAdaptor === 'ODataAdaptor') {
            payloadInfo = "<b><u>Payload Information</u></b><br> Service URL: " + selectedService + " <br> Adaptor Type: " + changedAdaptor + " <br> Additional Parameters: " + defaultParam;
        }
        else {
            payloadInfo = "<b><u>Payload Information</u></b><br> Service URL: " + selectedService + " <br> Adaptor Type: " + changedAdaptor + " <br> Additional Parameters: " + defaultParam + " <br> Headers: " + defaultHeader;
        }
        document.getElementById('payload-detail').innerHTML = '';
        document.getElementById('payload-detail').innerHTML += payloadInfo;
        document.getElementById("addParams").value = '';
        document.getElementById("hdvalue").value = '';
    };
};
var httpAdditionalInfo = function (name, val, btn) {
    var parameterKey = document.getElementById(name).value;
    var parameterValue = document.getElementById(val).value;
    if (parameterKey && parameterValue) {
        document.getElementById(btn).value += "{\"" + parameterKey + "\": \"" + parameterValue + "\"}\n";
    }
    document.getElementById(name).value = '';
    document.getElementById(val).value = '';
};
