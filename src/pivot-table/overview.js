/**
 * Pivot Table Overview Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: true,
            columns: [{
                    name: 'region',
                    caption: 'Region'
                },
                {
                    name: 'country',
                    caption: 'Country'
                }
            ],
            rows: [{
                    name: 'rank_display',
                    caption: 'Rank',
                    expandAll: true,
                    allowDragAndDrop: false
                },
                {
                    name: 'university',
                    caption: 'University',
                    expandAll: true,
                    allowDragAndDrop: false
                }
            ],
            formatSettings: [{
                    name: 'international_students',
                    format: 'N0'
                },
                {
                    name: 'faculty_count',
                    format: 'N0'
                }
            ],
            dataSource: window.universityData,
            expandAll: false,
            values: [{
                    name: 'international_students',
                    caption: 'Students'
                },
                {
                    name: 'faculty_count',
                    caption: 'Faculty'
                }
            ],
            filters: [{
                name: 'type',
                caption: 'University Type'
            }],
            filterSettings: [{
                name: 'region',
                type: 'Exclude',
                items: ['Africa', 'Latin America']
            }],
            fieldMapping: [{
                    name: 'rank_display',
                    dataType: 'number'
                },
                {
                    name: 'country',
                    caption: 'Country'
                },
                {
                    name: 'city',
                    caption: 'City'
                },
                {
                    name: 'region',
                    caption: 'Region'
                },
                {
                    name: 'research_output',
                    caption: 'Research Output'
                },
                {
                    name: 'student_faculty_ratio',
                    caption: 'Student faculty ratio'
                }
            ],
            groupSettings: [{
                name: 'rank_display',
                type: 'Number',
                rangeInterval: 100
            }],
            conditionalFormatSettings: [{
                    measure: 'international_students',
                    value1: 1,
                    value2: 5000,
                    conditions: 'Between',
                    style: {
                        backgroundColor: '#E10000',
                        color: 'white',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    },
                    applyGrandTotals: false
                },
                {
                    measure: 'international_students',
                    value1: 50000,
                    conditions: 'GreaterThan',
                    style: {
                        backgroundColor: '#0C860C',
                        color: 'white',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    },
                    applyGrandTotals: false
                },
                {
                    measure: 'faculty_count',
                    value1: 1,
                    value2: 1000,
                    conditions: 'Between',
                    style: {
                        backgroundColor: '#E10000',
                        color: 'white',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    },
                    applyGrandTotals: false
                },
                {
                    measure: 'faculty_count',
                    value1: 10000,
                    conditions: 'GreaterThan',
                    style: {
                        backgroundColor: '#0C860C',
                        color: 'white',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    },
                    applyGrandTotals: false
                }
            ],
            showHeaderWhenEmpty: false,
            emptyCellsTextContent: '-',
            excludeFields: ['link', 'logo']
        },
        allowExcelExport: true,
        allowConditionalFormatting: true,
        allowNumberFormatting: true,
        allowPdfExport: true,
        showToolbar: true,
        allowCalculatedField: true,
        enableVirtualization: true,
        allowDeferLayoutUpdate: true,
        allowDrillThrough: true,
        showGroupingBar: true,
        allowGrouping: true,
        enableValueSorting: true,
        displayOption: {
            view: 'Both'
        },
        showFieldList: true,
        exportAllPages: false,
        maxNodeLimitInMemberEditor: 50,
        chartSettings: {
            title: 'Top Universities Analysis',
            load: function (args) {
                var theme = location.hash.split("/")[1];
                theme = theme ? theme : "Material";
                args.chart.theme = (theme.charAt(0).toUpperCase() +
                    theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            }
        },
        chartSeriesCreated: function () {
            pivotObj.chartSettings.chartSeries.legendShape = pivotObj.chartSettings.chartSeries.type === 'Polar' ? 'Rectangle' : 'SeriesType';
        },
        width: '100%',
        height: 600,
        toolbar: ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
            'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'
        ],
        saveReport: function (args) {
            var report = [];
            var isSaved = false;
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                report = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.report && args.reportName && args.reportName !== '') {
                report.map(function (currentReport) {
                    if (args.reportName === currentReport.reportName) {
                        currentReport.report = args.report;
                        isSaved = true;
                    }
                });
                if (!isSaved) {
                    report.push(args);
                }
                localStorage.pivotviewReports = JSON.stringify(report);
            }
        },
        loadReport: function (args) {
            var repCollection = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                repCollection = JSON.parse(localStorage.pivotviewReports);
            }
            repCollection.map(function (item) {
                if (args.reportName === item.reportName) {
                    args.report = item.report;
                }
            });
            if (args.report) {
                pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
            }
        },
        fetchReport: function (args) {
            var repCollection = [];
            var reeportList = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                repCollection = JSON.parse(localStorage.pivotviewReports);
            }
            repCollection.map(function (item) {
                reeportList.push(item.reportName);
            });
            args.reportName = reeportList;
        },
        renameReport: function (args) {
            var repCollection = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                repCollection = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.isReportExists) {
                for (var i = 0; i < repCollection.length; i++) {
                    if (repCollection[i].reportName === args.rename) {
                        repCollection.splice(i, 1);
                    }
                }
            }
            repCollection.map(function (item) {
                if (args.reportName === item.reportName) {
                    item.reportName = args.rename;
                }
            });
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                localStorage.pivotviewReports = JSON.stringify(repCollection);
            }
        },
        removeReport: function (args) {
            var repCollection = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                repCollection = JSON.parse(localStorage.pivotviewReports);
            }
            for (var i = 0; i < repCollection.length; i++) {
                if (repCollection[i].reportName === args.reportName) {
                    repCollection.splice(i, 1);
                }
            }
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                localStorage.pivotviewReports = JSON.stringify(repCollection);
            }
        },
        toolbarRender: function (args) {
            args.customToolbar.splice(6, 0, {
                type: 'Separator'
            });
            args.customToolbar.splice(9, 0, {
                type: 'Separator'
            });
        },
        newReport: function () {
            pivotObj.setProperties({
                dataSourceSettings: {
                    columns: [],
                    rows: [],
                    values: [],
                    filters: []
                }
            }, false);
        },
        gridSettings: {
            columnWidth: 120,
            rowHeight: 36,
            allowSelection: true,
            selectionSettings: {
                mode: 'Cell',
                type: 'Single',
                cellSelectionMode: 'Box'
            }
        },
        cellTemplate: '${getCellContent(data)}',
    });
    pivotObj.appendTo('#PivotView');

    window.getCellContent = function (args) {
        if (args.cellInfo && args.cellInfo.axis === 'value' && pivotObj.pivotValues[args.cellInfo.rowIndex] && pivotObj.pivotValues[args.cellInfo.rowIndex][0].hasChild) {
            if (args.targetCell.classList.contains(args.cellInfo.cssClass)) {
                args.targetCell.classList.remove(args.cellInfo.cssClass);
                args.cellInfo.style = undefined;
            }
        }
        if (args.cellInfo && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'university') {
            var imgElement = ej.base.createElement('img', {
                className: 'university-logo',
                attrs: {
                    'src': window.universityData[args.cellInfo.index[0]].logo,
                    'alt': args.cellInfo.formattedText,
                    'width': '30',
                    'height': '30'
                },
            });
            var cellValue = ej.base.select('.e-cellvalue', args.targetCell);
            cellValue.classList.add('e-hyperlinkcell');
            cellValue.addEventListener('click', hyperlinkCellClick.bind(pivotObj));
            args.targetCell.insertBefore(imgElement, cellValue);
        }
        return '';
    };

    function hyperlinkCellClick(args) {
        var cell = args.target.parentElement;
        var pivotValue = pivotObj.pivotValues[Number(cell.getAttribute('index'))][Number(cell.getAttribute('data-colindex'))];
        var link = window.universityData[pivotValue.index[0]].link;
        window.open(link, '_blank');
    }
};