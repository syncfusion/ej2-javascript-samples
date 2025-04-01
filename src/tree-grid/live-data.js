this.default = function () {
    var feedDelayInput = new ej.inputs.NumericTextBox({
        value: 1000,
        format: 'N0',
        min: 100,
        max: 5000,
        step: 1,
        width: "150px",
        floatLabelType: "Auto"
    }, '#feeddelay');
    var updateButton = new ej.buttons.Button({}, '#update');
    var clearButton = new ej.buttons.Button({ disabled: true }, '#clear');
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.getTradeData,
        allowSelection: false,
        queryCellInfo: queryCellInfo,
        height: 350,
        enableHover: false,
        treeColumnIndex: 1,
        childMapping: 'subtasks',
        columns: [
            { field: 'id', headerText: 'ID', width: '140', isPrimaryKey: true, visible: false },
            { field: 'indexfunds', headerText: 'Index Funds', width: '200' },
            {
                field: 'Ltp',
                headerText: 'Last Traded Price',
                width: '180',
                format: 'C2',
                type: 'number',
                textAlign: 'Right',
            },
            {
                field: 'Change',
                headerText: 'Change',
                width: '100',
                format: 'C2',
                type: 'number',
                textAlign: 'Right'
            },
            {
                field: 'PercentageChange',
                headerText: '% Change',
                width: '110',
                format: 'N0',
                textAlign: 'Right'
            },
            { field: 'Open', headerText: 'Open Price', width: '150' },
            { field: 'High', headerText: 'High Price', width: '170' },
            { field: 'Low', headerText: 'Low Price', width: '150' },
            { field: 'Weekhigh', headerText: '52W H', width: '130', textAlign: 'Right' },
            { field: 'Weeklow', headerText: '52W L', width: '130', textAlign: 'Right' }
        ]
    });
    treegrid.appendTo('#TreeGrid');
    var initial = true;
    treegrid.grid.on('data-ready', function () {
        if (initial) {
            updateButton.element.click();
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
    treegrid.grid.on('destroy', function () {
        if (timerID) {
            clearInterval(timerID);
            timerID = undefined;
        }
    });
    var isDataBound = true;
    function queryCellInfo(args) {
        if (args.column.field === 'Ltp') {
            if (args.data.Ltp < 3000) {
                args.cell.classList.remove('e-increase');
                args.cell.classList.add('e-decrease');
            }
            else if (args.data.Ltp > 3000) {
                args.cell.classList.remove('e-decrease');
                args.cell.classList.add('e-increase');
            }
        }
        else if (args.column.field === 'PercentageChange') {
            if (args.data.PercentageChange < 0) {
                updateCellDetails(args.cell, 'below-0');
            }
            else {
                updateCellDetails(args.cell, 'above-0');
            }
        }
        else if (args.column.field === 'Change') {
            if (args.data.Change < 0) {
                updateCellDetails(args.cell, 'below-0');
            }
            else {
                updateCellDetails(args.cell, 'above-0');
            }
        }
        else if (args.column.field === 'indexfunds' && args.data.hasChildRecords) {
            args.cell.getElementsByClassName('e-treecell')[0].classList.add('e-parent');
        }
        isDataBound = true;
    }
    function updateCellDetails(cell, className) {
        var div = document.createElement('div');
        var span1 = document.createElement('span');
        span1.classList.add('rowcell-left');
        div.classList.add(className);
        span1.innerHTML = cell.innerHTML;
        cell.innerHTML = '';
        div.appendChild(span1);
        cell.appendChild(div);
    }
    var timerID;
    updateButton.element.onclick = function () {
        if (!timerID) {
            updateButton.disabled = true;
            feedDelayInput.enabled = false;
            clearButton.disabled = false;
            timerID = setInterval(updateCellValues, parseInt(feedDelayInput.value.toString()));
        }
    };
    clearButton.element.onclick = function () {
        if (timerID) {
            updateButton.disabled = false;
            feedDelayInput.enabled = true;
            clearButton.disabled = true;
            clearInterval(timerID);
            timerID = undefined;
        }
    };
    function updateCellValues() {
        var oldValue;
        for (var i = 0; i < treegrid.grid.currentViewData.length; i++) {
            if (treegrid.grid.currentViewData[i] === undefined) {
                return;
            }
            var num = Math.floor(Math.random() * 40) + 1;
            num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
            oldValue = treegrid.grid.currentViewData[i].Change;
            if (i % 2 === 0) {
                num = num * 0.25;
            }
            else if (i % 3 === 0) {
                num = num * 0.83;
            }
            else if (i % 5 === 0) {
                num = num * 0.79;
            }
            else if (i % 4 === 0) {
                num = num * 0.42;
            }
            else {
                num = num * 0.51;
            }
            isDataBound = true;
            var maxChange = 2 - treegrid.grid.currentViewData[i].Change;
            var minChange = -2 - treegrid.grid.currentViewData[i].Change;
            var newChange = Math.max(Math.min(num, maxChange), minChange);
            treegrid.grid.setCellValue(treegrid.grid.currentViewData[i].id, 'Change', parseFloat(newChange.toFixed(2)));
            isDataBound = true;
            var newPercentageChange = void 0;
            if (treegrid.grid.currentViewData[i].indexfunds === "NIFTY 50") {
                newPercentageChange = Math.max(Math.min(newChange, 2), -2);
            }
            else if (treegrid.grid.currentViewData[i].indexfunds === "NIFTY BANK") {
                newPercentageChange = Math.max(Math.min(newChange, 4), -4);
            }
            else {
                var maxPercentageChange = 2 - treegrid.grid.currentViewData[i].PercentageChange;
                var minPercentageChange = -2 - treegrid.grid.currentViewData[i].PercentageChange;
                newPercentageChange = Math.max(Math.min(newChange, maxPercentageChange), minPercentageChange);
            }
            treegrid.grid.setCellValue(treegrid.grid.currentViewData[i].id, 'PercentageChange', parseFloat(newPercentageChange.toFixed(2)));
            isDataBound = true;
            var val = treegrid.grid.currentViewData[i].Ltp + newPercentageChange;
            treegrid.grid.setCellValue(treegrid.grid.currentViewData[i].id, 'Ltp', val);
        }
    }
};
