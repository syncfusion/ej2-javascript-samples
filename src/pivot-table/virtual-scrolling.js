/**
 * Pivot Table Virtual Scrolling Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var customername = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
        'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
    var city = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
        'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham'];
    var date1;
    var date2;
    var isInit;
    var dt = 0;
    var data = function (count) {
        var result = [];
        for (var i = 1; i < (count + 1); i++) {
            dt++;
            var round = void 0;
            var toString_1 = i.toString();
            if (toString_1.length === 1) {
                round = '0000' + (i);
            }
            else if (toString_1.length === 2) {
                round = '000' + i;
            }
            else if (toString_1.length === 3) {
                round = '00' + i;
            }
            else if (toString_1.length === 4) {
                round = '0' + i;
            }
            else {
                round = toString_1;
            }
            result.push({
                ProductID: 'PRO-' + round,
                City: city[Math.round(Math.random() * city.length)] || city[0],
                Year: "FY " + (dt + 2013),
                CustomerName: customername[Math.round(Math.random() * customername.length)] || customername[0],
                Price: Math.round(Math.random() * 5000) + 5000,
                Sold: Math.round(Math.random() * 80) + 10,
            });
            if (dt / 2 == 1)
                dt = 0;

        }
        return result;
    };
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: [],
            enableSorting: false,
            expandAll: true,
            formatSettings: [{ name: 'Price', format: 'C0' }],
            rows: [{ name: 'ProductID' }],
            columns: [{ name: 'Year' }],
            values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }],
        },
        width: '100%',
        height: 300,
        enableVirtualization: true,
        virtualScrollSettings: { allowSinglePage: true },
        dataBound: function () {
			if(this.dataSourceSettings.dataSource.length > 0){
				if (date1 && isInit) {
					date2 = new Date().getTime();
					document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) / 1000 + ' sec';
				}
				isInit = false;
				button.disabled = true;
				document.getElementById('popup').style.display = 'none';
			}
            if (ej.base.Browser.isDevice && pivotObj && pivotObj.enableRtl) {
                document.querySelector('.control-section').classList.add('e-rtl');
            }
        }
    });
    pivotObj.appendTo('#PivotView');

    var button = new ej.buttons.Button({ isPrimary: true, cssClass: 'e-info' });
    button.appendTo('#load');

    function show() {
        document.getElementById('popup').style.display = 'inline-block';
    }

    button.element.onclick = function() {
        show();
        isInit = true;
        pivotObj.dataSourceSettings.dataSource = data(100000);
        date1 = new Date().getTime();
    };
};
