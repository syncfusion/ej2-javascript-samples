this.default = function () {
    var date1;
    var date2;
    var flag = true;
    var data = [];
    var genarateData = new ej.buttons.Button({}, '#genarate');
    var columns = [
        { field: 'OrderID', headerText: 'Order ID', width: 110, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
        { field: 'ShipDate', headerText: 'Ship Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
        { field: 'OrderStatus', headerText: 'Order Status', width: 140, textAlign: 'Center', editType: 'dropdownedit', template: '#orderStatusTemplate', validationRules: { required: true } },
        { field: 'Priority', headerText: 'Priority', width: 120, textAlign: 'Center', editType: 'dropdownedit', template: '#priorityTemplate', validationRules: { required: true } },
        { field: 'CustomerName', headerText: 'Customer Name', width: 190, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 110, visible: false },
        { field: 'Email', headerText: 'Email', width: 200 },
        { field: 'Phone', headerText: 'Phone Number', width: 140, textAlign: 'Right' },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 180 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipState', headerText: 'Ship State Code', width: 130 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 130, textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ProductName', headerText: 'Product Name', width: 250 },
        { field: 'ProductID', headerText: 'Product ID', width: 110, visible: false },
        { field: 'Category', headerText: 'Category', width: 120 },
        { field: 'Warehouse', headerText: 'Ware house', width: 110, visible: false, editType: 'dropdownedit' },
        { field: 'InventoryCount', headerText: 'Inventory Count', width: 150, textAlign: 'Right', visible: false },
        {
            field: 'Quantity', headerText: 'Quantity', width: 100, textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'UnitPrice', headerText: 'Unit Price', width: 110, format: 'C2', textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'Discount', headerText: 'Discount (%)', width: 120, textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'Tax', headerText: 'Tax (%)', width: 100, textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'SubTotal', headerText: 'Sub Total', width: 110, format: 'C2', textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'TaxAmount', headerText: 'Tax Amount', width: 110, format: 'C2', textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'ShipFee', headerText: 'Ship Fee', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        {
            field: 'TotalAmount', headerText: 'Total Amount', width: 120, format: 'C2', textAlign: 'Right', editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        },
        { field: 'PaymentMethod', headerText: 'Payment Method', width: 140, editType: 'dropdownedit', template: '#paymentTemplate', validationRules: { required: true } },
        { field: 'PaymentStatus', headerText: 'Payment Status', textAlign: 'Center', width: 140, editType: 'dropdownedit', template: '#paymentStatusTemplate', validationRules: { required: true } },
        {
            field: 'Rating', headerText: 'Delivery Rating', width: 160, textAlign: 'Center', visible: false,
            template: '#ratingTemplate', editType: 'dropdownedit'
        }
    ];
    genarateData.element.onclick = function () {
        genarateData.disabled = true;
        if (!data.length) {
            show();
            window.createVirtualOrderData();
            date1 = new Date().getTime();
            grid.dataSource = data = window.virtualOrderData;
        }
    };
    var grid = new ej.grids.Grid({
        dataSource: [],
        enableVirtualization: true,
        clipMode:'EllipsisWithTooltip',
        enableColumnVirtualization: true,
        editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        height: 400,
        rowHeight: 50,
        pageSettings: { pageSize: 50 },
        columns: columns,
        dataBound: hide,
        load: function(args) {
            if (grid.enableVirtualization) {
                args.enableSeamlessScrolling = true;
            }
        }
    });
    grid.appendTo('#Grid');

    function show() {
        document.getElementById('popup').style.display = 'inline-block';
    }
    function hide() {
        if (flag && date1) {
            date2 = new Date().getTime();
            document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) + 'ms';
            grid.editSettings.allowAdding = true;
            flag = false;
        }
        document.getElementById('popup').style.display = 'none';
    }

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

    window.priorityDetail = function (e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        if (e.Priority === 'High') {
            span.className = 'virtual-statustxt e-highcolor';
            span.textContent = 'High';
            div.className = 'virtual-statustemp e-highcolor';
        } else if (e.Priority === 'Low') {
            span.className = 'virtual-statustxt e-lowcolor';
            span.textContent = 'Low';
            div.className = 'virtual-statustemp e-lowcolor';
        } else if (e.Priority === 'Medium') {
            span.className = 'virtual-statustxt e-mediumcolor';
            span.textContent = 'Medium';
            div.className = 'virtual-statustemp e-mediumcolor';
        } else {
            span.className = 'virtual-statustxt e-criticalcolor';
            span.textContent = 'Critical';
            div.className = 'virtual-statustemp e-criticalcolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };

    window.paymentStatusDetail = function (e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        var val = (e.PaymentStatus || '').toString();
        if (val === 'Paid') {
            span.className = 'virtual-statustxt e-paidcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-paidcolor';
        } else if (val === 'Pending') {
            span.className = 'virtual-statustxt e-pendingcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-pendingcolor';
        } else if (val === 'Refunded') {
            span.className = 'virtual-statustxt e-refundcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-refundcolor';
        } else {
            span.className = 'virtual-statustxt e-failedcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-failedcolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };

    window.orderStatusDetail = function (e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        var val = (e.OrderStatus || '').toString();
        if (val === 'Delivered') {
            span.className = 'virtual-statustxt e-deliveredcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-deliveredcolor';
        } else if (val === 'Shipped') {
            span.className = 'virtual-statustxt e-shippedcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-shippedcolor';
        } else if (val === 'Packed') {
            span.className = 'virtual-statustxt e-packedcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-packedcolor';
        } else if (val === 'Processing') {
            span.className = 'virtual-statustxt e-processingcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-processingcolor';
        } else if (val === 'Canceled') {
            span.className = 'virtual-statustxt e-cancelcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-cancelcolor';
        } else if (val === 'Returned') {
            span.className = 'virtual-statustxt e-returnedcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-returnedcolor';
        } else {
            span.className = 'virtual-statustxt e-orderedcolor';
            span.textContent = val;
            div.className = 'virtual-statustemp e-orderedcolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };

    window.paymentTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'e-payment-info';
        var imgElement = document.createElement('img');
        imgElement.src = 'src/grid/images/payment/' + e.PaymentMethod + '.svg';
        imgElement.alt = e.PaymentMethod;
        var nameElement = document.createElement('span');
        nameElement.innerText = e.PaymentMethod;
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);
        return divElement.outerHTML;
    };
};
