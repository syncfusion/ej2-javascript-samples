/**
 * Pivot Table Toolbar Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            expandAll: false,
            dataSource: window.Pivot_Data,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true,
            allowLabelFilter: true,
            values: [{ name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            allowValueFilter: true,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        },
        allowExcelExport: true,
        allowConditionalFormatting: true,
        allowNumberFormatting: true,
        allowPdfExport: true,
        showToolbar: true,
        displayOption:{view:'Both'},
        chartSettings: {
            title:"Sales Analysis",
            load: function(args) {
              var selectedTheme = location.hash.split("/")[1];
              selectedTheme = selectedTheme ? selectedTheme : "Material";
              args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
              selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            }
        },
        allowCalculatedField: true,
        showFieldList: true,
        width: '100%',
        toolbar: ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
		'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'],
        saveReport: function (args) {
            var reports = [];
            var isSaved = false;
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reports = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.report && args.reportName && args.reportName !== '') {
                reports.map(function (item) {
                    if (args.reportName === item.reportName) {
                        item.report = args.report;
                        isSaved = true;
                    }
                });
                if (!isSaved) {
                    reports.push(args);
                }
                localStorage.pivotviewReports = JSON.stringify(reports);
            }
        },
        fetchReport: function (args) {
            var reportCollection = [];
            var reeportList = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollection = JSON.parse(localStorage.pivotviewReports);
            }
            reportCollection.map(function (item) {
                reeportList.push(item.reportName);
            });
            args.reportName = reeportList;
        },
        loadReport: function (args) {
            var reportCollection = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollection = JSON.parse(localStorage.pivotviewReports);
            }
            reportCollection.map(function (item) {
                if (args.reportName === item.reportName) {
                    args.report = item.report;
                }
            });
            if (args.report) {
                pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
            }
        },
        removeReport: function (args) {
            var reportCollection = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollection = JSON.parse(localStorage.pivotviewReports);
            }
            for (var i = 0; i < reportCollection.length; i++) {
                if (reportCollection[i].reportName === args.reportName) {
                    reportCollection.splice(i, 1);
                }
            }
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                localStorage.pivotviewReports = JSON.stringify(reportCollection);
            }
        },
        renameReport: function (args) {
            var reportCollection = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollection = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.isReportExists) {
                for (var i = 0; i < reportCollection.length; i++) {
                    if (reportCollection[i].reportName === args.rename) {
                        reportCollection.splice(i, 1);
                    }
                }
            }
            reportCollection.map(function (item) {
                if (args.reportName === item.reportName) {
                    item.reportName = args.rename;
                }
            });
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                localStorage.pivotviewReports = JSON.stringify(reportCollection);
            }
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
		toolbarRender: function (args) {
			args.customToolbar.splice(6, 0, {
				type: 'Separator' 
			});
			args.customToolbar.splice(9, 0, {
				type: 'Separator' 
			});
		},
        height: 450,
        gridSettings: {
            columnWidth: 140
        }
    });
    pivotObj.appendTo('#PivotView');
};