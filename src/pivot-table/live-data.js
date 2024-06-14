/**
 * Pivot Table Live Data Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var timerID;
    var initial = true;
    var previousPivotValues;
    var updateButton = new ej.buttons.Button({}, '#update1');
    var clearButton = new ej.buttons.Button({ disabled: true }, '#clear');
    var feedDelayInput = new ej.inputs.NumericTextBox({
        value: 5000,
        format: 'N0',
        min: 5000,
        step: 1000,
        width: "150px",
        floatLabelType: "Auto"
    }, '#feeddelay');
    var colourScheme = ['bg-fade', 'bg-fade1', 'bg-fade2'];
    var REGIONS = [
        {
            "Region": "North America",
            "Countries": ["Canada", "United States", "Mexico"]
        },
        {
            "Region": "Middle East",
            "Countries": ["Turkey", "Saudi Arabia"]
        },
        {
            "Region": "Europe",
            "Countries": ["Russia", "Germany", "France", "United Kingdom", "Italy"]
        },
        {
            "Region": "Africa",
            "Countries": ["South Africa"]
        },
        {
            "Region": "Asia Pacific",
            "Countries": ["Australia", "China", "India", "Indonesia",
                "Japan", "South Korea"]
        },
        {
            "Region": "South America",
            "Countries": ["Brazil"]
        },
    ];
    var DATA = [
        {
            "Category": "Agriculture",
            "Type": "Corn",
            "Spread": 0.01,
            "Open Price": 379.50,
            "Price": 379.8026,
            "Buy": 379.7976,
            "Sell": 379.8076,
            "Change": 0.3026,
            "Change(%)": 0.0797,
            "Volume": 11266
        },
        {
            "Category": "Agriculture",
            "Type": "Rice",
            "Spread": 0.01,
            "Open Price": 11.245,
            "Price": 10.4154,
            "Buy": 10.4104,
            "Sell": 10.4204,
            "Change": -0.8296,
            "Change(%)": -7.3779,
            "Volume": 220
        },
        {
            "Category": "Agriculture",
            "Type": "Wheat",
            "Spread": 0.01,
            "Open Price": 465.50,
            "Price": 465.52,
            "Buy": 465.50,
            "Sell": 465.50,
            "Change": 0.02,
            "Change(%)": 0.0043,
            "Volume": 4318
        },
        {
            "Category": "Agriculture",
            "Type": "Soybean",
            "Spread": 0.01,
            "Open Price": 1038.00,
            "Price": 1038.6171,
            "Buy": 1038.6121,
            "Sell": 1038.6221,
            "Change": 0.6171,
            "Change(%)": 0.0595,
            "Volume": 20356
        },
        {
            "Category": "Agriculture",
            "Type": "Coffee",
            "Spread": 0.01,
            "Open Price": 125.70,
            "Price": 125.69,
            "Buy": 125.70,
            "Sell": 125.70,
            "Change": -0.01,
            "Change(%)": -0.008,
            "Volume": 1654
        },
        {
            "Category": "Agriculture",
            "Type": "Cocoa",
            "Spread": 0.01,
            "Open Price": 307.00,
            "Price": 307.03,
            "Buy": 307.00,
            "Sell": 307.00,
            "Change": 0.03,
            "Change(%)": 0.001,
            "Volume": 978
        },
    ];
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: generateData(),
            enableSorting: true,
            columns: [{ name: 'Type' }],
            values: [{ name: 'Volume', caption: 'Volume' }, { name: 'Price', caption: 'Price' }, { name: 'Change', type: 'Avg', caption: 'Change(%)' }],
            rows: [{ name: 'Country' }],
            filters: [{ name: 'Category' }],
            formatSettings: [{ name: 'Price', format: 'C2' }, { name: 'Open Price', format: 'C2' }, { name: 'Change', format: "###.##'%'" }, { name: 'Volume', format: 'N0' }],
            expandAll: false,
            showSubTotals: false,
            showGrandTotals: false,
            emptyCellsTextContent: 'Revising',
            sortSettings: [{ name: 'Type', order: 'Ascending', membersOrder: ['Corn', 'Rice', 'Wheat', 'Soybean', 'Coffee', 'Cocoa'] }]
        },
        width: '100%',
        height: 350,
        gridSettings: { columnWidth: 100 },
        cellTemplate: function (args) {
            if (args != null && args.cellInfo) {
                if (args.cellInfo.axis === 'value') {
                    if (args.cellInfo.axis === 'value' && !args.cellInfo.isGrandSum && args.cellInfo.actualText === 'Change') {
                        args.targetCell.classList.add(cellColour(args.cellInfo.value));
                    }
                }
            }
        },
        displayOption: {view: 'Both'},
        chartSettings: {
            value: 'Price',
            legendSettings: { visible: false },
            chartSeries: { type: "Column" },
            zoomSettings: {
                enableScrollbar: false,
                toolbarItems: [],
                enableSelectionZooming: false,
            },
            load: function(args) {
                var selectedTheme = location.hash.split('/')[1];
                selectedTheme = selectedTheme ? selectedTheme : 'Material';
                args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
        }
    });
    pivotObj.appendTo('#PivotView-LiveData');
    function generateData() {
        var count = 1000;
        var currData = [];
        var j = 0;
        for (var i = 0; i < count; i++) {
            var rand = Math.floor(Math.random() * Math.floor(DATA.length));
            var region = REGIONS[j];
            for (var k = 0; k < region.Countries.length; k++) {
                var data = Object.assign({}, DATA[rand]);
                var dataObj = Object.assign({}, data, {
                    Region: region.Region,
                    Country: region.Countries[k]
                });
                randomizeObjectData(dataObj);
                currData.push(dataObj);
            }
            j++;
            j = j > 5 ? 0 : j;
        }
        return currData;
    }
    pivotObj.on('data-ready', function () {
        if (initial) {
            document.getElementById('update1').click();
            initial = false;
            feedDelayInput.element.addEventListener('keypress', function (e) {
                if (e && e.key === 'Enter' && feedDelayInput.element.parentElement.classList.contains('e-input-focus')) {
                    feedDelayInput.value = parseInt(feedDelayInput.element.value);
                    feedDelayInput.focusOut();
                    updateButton.element.click();
                }
            });
        }
    });
    
    pivotObj.on('destroy', function () {
        if (timerID) {
            clearInterval(timerID);
            timerID = undefined;
        }
    });
    
    function randomizeObjectData(dataObj) {
        var changeP = "Change(%)";
        var res = generateNewPrice(dataObj.Price, dataObj.Volume);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
        dataObj.Volume = res.Volume;
    }
    
    function generateNewPrice(oldPrice, oldVolume) {
        var rnd = Math.random();
        rnd = Math.round(rnd * 100) / 100;
        var volatility = 15;
        var newPrice = 0;
        var newVolume = 0;
        var changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }
        var changeVolumnPercent = 2 * (volatility - 5) * rnd;
        if (changeVolumnPercent > (volatility - 5)) {
            changeVolumnPercent -= (2 * (volatility - 5));
        }
        var changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;
        var changeVolume = oldVolume * (changeVolumnPercent / 100);
        newVolume = oldVolume + changeVolume;
        newPrice = Math.round(newPrice * 100) / 100;
        newVolume = Math.round((newVolume * 100) / 100);
        var result = { Price: 0, ChangePercent: 0, Volume: 0 };
        changePercent = Math.round(changePercent * 100) / 100;
        result.Price = newPrice;
        result.ChangePercent = changePercent;
        result.Volume = newVolume;
        return result;
    }
    
    function updateCellValues() {
        if (!ej.base.isNullOrUndefined(pivotObj)) {
            if (pivotObj.pivotValues.length > 0) {
                if (!previousPivotValues) {
                    previousPivotValues = pivotObj.pivotValues;
                }
                previousPivotValues = pivotObj.pivotValues;
            }
            pivotObj.dataSourceSettings.dataSource = generateData();
        }
    }
    
    updateButton.element.onclick = function() {
        if (!timerID) {
            updateButton.disabled = true;
            feedDelayInput.enabled = false;
            clearButton.disabled = false;
            timerID = setInterval(updateCellValues, feedDelayInput.value);
        }
    };
    
    clearButton.element.onclick = function() {
        if (timerID) {
            updateButton.disabled = false;
            feedDelayInput.enabled = true;
            clearButton.disabled = true;
            clearInterval(timerID);
            timerID = undefined;
        }
    };

    function cellColour(value) {
        var colorIndex = value < 0 ? 0 : value > 0 ? 1 : 2;
        return colourScheme[colorIndex];
    }
};