/**
 * Pivot Table Performance Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var city = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
    'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham'];
    var customerName = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
        'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
    var isInit = true;
    var dt = 0;
    var date1;
    var date2;
    var data = function (count) {
        var result = [];
        for (var i = 1; i < (count + 1); i++) {
            dt++;
            var round = void 0;
            var toString = i.toString();
            if (toString.length === 1) {
                round = '0000' + (i);
            }
            else if (toString.length === 2) {
                round = '000' + i;
            }
            else if (toString.length === 3) {
                round = '00' + i;
            }
            else if (toString.length === 4) {
                round = '0' + i;
            }
            else {
                round = toString;
            }
            result.push({
                Price: Math.round(Math.random() * 5000) + 5000,
                Sold: Math.round(Math.random() * 80) + 10,
                ProductID: 'PRO-' + round,
                CustomerName: customerName[Math.round(Math.random() * customerName.length)] || customerName[0],
                City: city[Math.round(Math.random() * city.length)] || city[0],
                Year: "FY " + (dt + 2013),
            });
            if (dt / 4 == 1) {
                dt = 0;
            }
        }
        return result;
    };
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: false,
            expandAll: true,
            dataSource: data(10000),
            columns: [{ name: 'Year' }],
            rows: [{ name: 'ProductID' }],
            values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }],
            formatSettings: [{ name: 'Price', format: 'C0' }],
        },
        height: 300,
        width: '100%',
        gridSettings: { columnWidth: 120 },
        enableVirtualization: true,
        dataBound: function () {
			if(this.dataSourceSettings.dataSource.length > 0){
				if (date1 && isInit) {
					date2 = new Date().getTime();
					document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) / 1000 + ' sec';
				}
				isInit = false;
			}
            if (ej.base.Browser.isDevice && pivotObj && pivotObj.enableRtl) {
                document.querySelector('.control-section').classList.add('e-rtl');
            }
        },
        load: function () {
            if (isInit) {
                date1 = new Date().getTime();
            }
        }
    });
    pivotObj.appendTo('#PivotView');
    var listObj = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Select a Data Range',
        popupHeight: '240px',
        width: '240px',
        change: function (args) {
            listObj.closePopup();
            isInit = true;
            pivotObj.dataSourceSettings.dataSource = data(Number(args.value));
            date1 = new Date().getTime();
        }
    });
    listObj.appendTo('#ddl');
};
